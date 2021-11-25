import 'material-icons/iconfont/material-icons.css';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-fab';
import '@material/mwc-menu';
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
        url: {}
    };

    constructor() {
        super();
        try {
            const arr = JSON.parse(localStorage['hassUrl'])
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
                <h1>连接到您的HomeAssistant</h1>
                <mwc-button raised label="添加当前页面" icon="add" @click="${this._addClick}"></mwc-button>
            </div>`
        }
        if (!url) {
            url = list[list.length - 1]
        }
        return html`
    <iframe src="${url}" style="border:none;width:100%;height:100vh;"></iframe>
    <div id="pos" style="position: fixed; bottom: 10px; right: 10px">
      <mwc-fab id="button" @mousedown="${this._mousedown}" @click="${this._openClick
            }" mini icon="menu" label="Open Menu"></mwc-fab>
      <mwc-menu id="menu">
        <mwc-list-item graphic="avatar" twoline noninteractive>
          <span>HomeAssistant</span>
          <span slot="secondary">随时随地控制我的智能设备</span>
          <img
            src="${logo}"
            slot="graphic"
            style="border: 1px solid #ccc"
          />          
        </mwc-list-item>
        <li divider role="separator"></li>
        ${this.list.map(
                (ele) => html`<mwc-list-item hasMeta>
          <span title="${ele}" @click="${this._selectClick.bind(this, ele)}">${ele}</span>
          <mwc-icon slot="meta" @click="${this._removeClick.bind(
                    this,
                    ele
                )}">remove</mwc-icon>
        </mwc-list-item>`
            )}
            <li divider role="separator"></li>
            <mwc-list-item class="menu-footer">
                <mwc-button outlined label="取消"></mwc-button>
                <mwc-button raised label="添加"  @click="${this._addClick}"></mwc-button>
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

    getHomeAssistantUrl() {
        return new Promise((resolve, reject) => {
            if (!chrome.tabs) {
                return resolve(location.href)
            }
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: () => {
                        const ha = document.body.querySelector('home-assistant')
                        if (ha) {
                            return location.href
                        } else {
                            alert("当前不是HomeAssistant页面");
                        }
                    }
                }).then((res) => {
                    const { result } = res[0]
                    if (result) {
                        resolve(result)
                    }
                });
            });
        })
    }

    _addClick() {
        this.getHomeAssistantUrl().then((link) => {
            const list = this._list;
            if (!list.includes(link)) {
                this.url = link
                list.push(link);
                this.list = list;
                this._save()
            }
        })
    }

    _selectClick(link) {
        this.url = link
        const list = this._list;
        list[list.indexOf(link)] = list[list.length - 1]
        list[list.length - 1] = link
        this.list = list;
        this._save()
    }

    _removeClick(link) {
        const list = this._list;
        list.splice(list.indexOf(link), 1);
        this.list = list;
        this._save()
    }

    _save() {
        localStorage['hassUrl'] = JSON.stringify(this.list)
    }
}

window.customElements.define('home-assistant', HomeAssistant);
