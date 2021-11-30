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
                padding-top: 100px;
                text-align: center;
            }
            .menu-footer {
                text-align:center;
                display: block;
                padding-top: 20px;
            }
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
            link_ha: chrome.i18n.getMessage("link_ha"),
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
                <h1>${this.i18n.link_ha}</h1>
                <mwc-button raised label="${this.i18n.add}" icon="add" @click="${this._addClick}"></mwc-button>
            </div>`
        }
        if (!url) {
            url = list[list.length - 1].url
        }
        return html`
    <iframe src="${url}" style="border:none;width:100%;height:100vh;"></iframe>    
    <div id="pos" style="position: fixed; bottom: 10px; right: 10px">
      <mwc-fab id="button" @mousedown="${this._mousedown}" @click="${this._openClick
            }" mini icon="menu" label="Open Menu"></mwc-fab>
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
          <span title="${ele.title}" @click="${this._selectClick.bind(this, ele, index)}">${ele.title}</span>
          <span title="${ele.url}" @click="${this._selectClick.bind(this, ele, index)}" slot="secondary">${ele.url}</span>
          <mwc-icon slot="meta" title="${this.i18n.delete}" @click="${this._removeClick.bind(this, index)}">remove</mwc-icon>
        </mwc-list-item>`
            )}
            <li divider role="separator"></li>
            <mwc-list-item class="menu-footer">
                <mwc-button outlined label="${this.i18n.cancel}"></mwc-button>
                <mwc-button raised label="${this.i18n.add}"  @click="${this._addClick}"></mwc-button>
            </mwc-list-item>
      </mwc-menu>
    </div>`;
    }

    get _list() {
        return JSON.parse(JSON.stringify(this.list));
    }

    _mousedown() {
        document.onmouseup = () => {
            document.onmousemove = null;
        };
        document.onmousemove = (event) => {
            const pos = this.shadowRoot.querySelector('#pos');
            pos.style.left = `${event.clientX - 20}px`;
            pos.style.top = `${event.clientY - 20}px`;
            // console.log(event);
        };
    }

    _openClick() {
        const menu = this.shadowRoot.querySelector('#menu');
        const button = this.shadowRoot.querySelector('#button');
        menu.anchor = button;
        menu.open = true;
    }

    _addClick() {
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
                        list.push(result);
                        this.list = list;
                        this._save()
                    }
                } else {
                    this._showTips(this.i18n.error_tips)
                }
            }).catch(() => {
                this._showTips(this.i18n.error_tips)
            });
        });
    }

    _showTips(text) {
        const snackbar = document.createElement('mwc-snackbar')
        snackbar.labelText = text
        document.body.appendChild(snackbar)
        snackbar.show();
        setTimeout(() => {
            snackbar.remove()
        }, 3000)
    }

    _selectClick(data, index) {
        this.url = data.url
        const list = this._list;
        list[index] = list[list.length - 1]
        list[list.length - 1] = Object.assign({}, data)
        this.list = list;
        this._save()
    }

    _removeClick(index) {
        const list = this._list;
        list.splice(index, 1);
        this.list = list;
        this._save()
    }

    _save() {
        localStorage['list'] = JSON.stringify(this.list)
    }
}

window.customElements.define('home-assistant', HomeAssistant);
