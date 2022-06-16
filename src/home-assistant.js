import 'material-icons/iconfont/material-icons.css';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-fab';
import '@material/mwc-menu';
import '@material/mwc-snackbar';
import '@material/mwc-list/mwc-list-item';

import { html, css, LitElement } from 'lit';

export class HomeAssistant extends LitElement {
    static get styles() {
        return css`
            .link-home {
                padding: 30px;
                padding-top: 140px;
                text-align: center;
                color: #42bdf5;
                --mdc-theme-secondary: #42bdf5;
                --mdc-theme-on-secondary: white;
            }
            .menu-footer {
                text-align:center;
                display: block;
                padding-top: 20px;
            }
            .item-title:hover{color:#03a9f4;}
            .selected{color:#03a9f4;}
            .item-link:hover{color:#ff9800;}
            #pos{
                position: fixed; bottom: 10px; right: 10px
            }
            iframe{ border:none;width:100%;height:100vh; }
        `;
    }

    static properties = {
        list: {},
        logo: {},
        url: {},
        i18n: {}
    };

    constructor() {
        super();
        this.i18n = {
            title: chrome.i18n.getMessage("title"),
            description: chrome.i18n.getMessage("description"),
            error_tips: chrome.i18n.getMessage("error_tips"),
            add: chrome.i18n.getMessage("add"),
            cancel: chrome.i18n.getMessage("cancel"),
            delete: chrome.i18n.getMessage("delete")
        }

        try {
            const arr = JSON.parse(localStorage['list'])
            this.list = Array.isArray(arr) ? arr : []
        } catch {
            this.list = []
        }
        this.url = ''
    }

    render() {
        let { logo, url, list } = this
        if (list.length === 0) {
            return html`<div class="link-home">
                <img src="${logo}" />
                <h1>${this.i18n.title}</h1>
                <p>${this.i18n.description}</p>
                <mwc-fab icon="add" mini @click="${this.addClick}"></mwc-fab>
            </div>`
        }
        if (!url) {
            const obj = list.find(ele => ele.show === 1)
            if (obj) {
                url = obj.url
            } else {
                url = list[list.length - 1].url
            }
        }
        return html`
    <iframe src="${url}"></iframe>    
    <div id="pos">
      <mwc-fab id="button" @mousedown="${this._mousedown}" mini icon="menu" label="Open Menu"></mwc-fab>
      <mwc-menu id="menu">
        <mwc-list-item graphic="avatar" twoline noninteractive>
          <span>${this.i18n.title}</span>
          <span slot="secondary">${this.i18n.description}</span>
          <img
            src="${logo}"
            slot="graphic"
            style="border: 1px solid #ccc"
          />          
        </mwc-list-item>
        <li divider role="separator"></li>
        ${this.list.map((ele, index) => html`<mwc-list-item twoline hasMeta>
          <span class="item-title ${ele.show === 1 ? 'selected' : ''}" title="${ele.title}" @click="${this.selectClick.bind(this, ele, index)}">${ele.title}</span>
          <a class="item-link" title="${ele.url}" href="${ele.url}" target="_blank" slot="secondary">${ele.url}</a>
          <mwc-icon slot="meta" title="${this.i18n.delete}" @click="${this.removeClick.bind(this, index)}">remove</mwc-icon>
        </mwc-list-item>`
        )}
            <li divider role="separator"></li>
            <mwc-list-item class="menu-footer">
                <mwc-button outlined label="${this.i18n.cancel}"></mwc-button>
                <mwc-button raised label="${this.i18n.add}" @click="${this.addClick}"></mwc-button>
            </mwc-list-item>
      </mwc-menu>
    </div>`;
    }

    get _list() {
        return JSON.parse(JSON.stringify(this.list));
    }

    _mousedown(ev) {
        let x = ev.clientX
        let y = ev.clientY
        document.onmouseup = (event) => {
            document.onmousemove = null;
            if (x === event.clientX && y === event.clientY) {
                this.openClick()
            }
        };
        const pos = this.shadowRoot.querySelector('#pos');
        document.onmousemove = (event) => {
            pos.style.left = `${event.clientX - 20}px`;
            pos.style.top = `${event.clientY - 20}px`;
        };
    }

    openClick() {
        const menu = this.shadowRoot.querySelector('#menu');
        const button = this.shadowRoot.querySelector('#button');
        menu.anchor = button;
        menu.open = true;
    }

    addClick() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: () => {
                    const ha = document.body.querySelector('home-assistant')
                    if (ha) {
                        return {
                            title: document.title,
                            url: location.href
                        }
                    }
                }
            }).then((res) => {
                const { result } = res[0]
                if (result) {
                    const list = this._list;
                    if (!list.find(ele => ele.url === result.url)) {
                        this.url = result.url
                        list.forEach(ele => ele.show = 0)
                        list.push(Object.assign(result, {
                            show: 1
                        }));
                        this.list = list;
                        this.saveList()
                    }
                } else {
                    this.toast(this.i18n.error_tips)
                }
            }).catch(() => {
                this.toast(this.i18n.error_tips)
            });
        });
    }

    toast(text) {
        const snackbar = document.createElement('mwc-snackbar')
        snackbar.labelText = text
        document.body.appendChild(snackbar)
        snackbar.show();
        setTimeout(() => {
            snackbar.remove()
        }, 3000)
    }

    selectClick(data, index) {
        this.url = data.url
        const list = this._list;
        list.forEach(ele => ele.show = 0)
        list[index].show = 1
        this.list = list;
        this.saveList()
    }

    removeClick(index) {
        const list = this._list;
        list.splice(index, 1);
        this.list = list;
        this.saveList()
    }

    saveList() {
        localStorage['list'] = JSON.stringify(this.list)
    }
}

window.customElements.define('home-assistant', HomeAssistant);