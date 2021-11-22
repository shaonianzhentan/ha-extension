class Hass {
    constructor() {
        try {
            const arr = JSON.parse(localStorage['hassUrl'])
            this.list = Array.isArray(arr) ? arr : []
        } catch {
            this.list = []
        }
        this.ready()
    }

    // 显示初始界面
    showInit() {
        document.querySelector('.link-home').classList.remove('hide')
        document.querySelector('#panel').classList.add('hide')
    }

    // 显示页面
    showPage() {
        document.querySelector('.link-home').classList.add('hide')
        document.querySelector('#panel').classList.remove('hide')
        document.querySelector('#link-list').classList.add('hide')
        document.querySelector('iframe').classList.remove('hide')
    }

    // 显示设置
    toggleSetting() {
        document.querySelector('#link-list').classList.toggle('hide')
        document.querySelector('iframe').classList.toggle('hide')
    }

    setLink(i) {
        document.querySelector('#iframe').src = this.list[i]
    }

    ready() {
        if (this.list.length > 0) {
            this.showPage()
            this.setLink(this.list.length - 1)
        }
    }

    save() {
        localStorage['hassUrl'] = JSON.stringify(this.list)
    }

    add(url) {
        this.list.push(url)
        this.save()
        this.setLink(this.list.length - 1)
    }

    remove(i) {
        this.list.splice(i, 1)
        this.save()
    }
}
const hass = new Hass()
// 链接列表
customElements.define('link-list', class extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' });
        const style = document.createElement('style')
        style.textContent = `
            ul{margin:0;padding:0;}
            li{margin:0; padding:10px; list-style:none;cursor:pointer;}
            li button{border:none; border-radius:20px;margin-right:10px;cursor:pointer;}
            li span:hover{color:#03a9f4;}
            .btnAdd{background-color: #03a9f4; color: white; border:none; width: 100%;padding:10px;cursor:pointer;}
        `
        this.shadowRoot.appendChild(style)
        // 添加按钮
        const button = document.createElement('button')
        button.classList.add('btnAdd')
        button.textContent = '添加HomeAssistant页面'
        button.onclick = () => {
            document.querySelector('#btnAuth').onclick()
        }
        this.shadowRoot.appendChild(button)

        this.reader()
    }

    reader() {
        if (hass.list.length === 0) {
            hass.showInit()
        }
        if (this.shadowRoot.querySelector('ul')) {
            this.shadowRoot.querySelector('ul').remove()
        }
        const ul = document.createElement('ul')
        hass.list.forEach((link, index) => {
            const li = document.createElement('li')
            const button = document.createElement('button')
            button.textContent = ' - '
            button.onclick = () => {
                hass.remove(index)
                this.reader()
            }
            li.appendChild(button)
            const span = document.createElement('span')
            span.textContent = link
            span.onclick = () => {
                hass.setLink(index)
            }
            li.appendChild(span)
            ul.appendChild(li)
        })
        this.shadowRoot.appendChild(ul)
    }
});

document.querySelector('#btnAuth').onclick = function () {
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
                hass.add(result)
                hass.ready()
            }
        });
    });
};

document.querySelector('#panel header').onclick = function () {
    document.querySelector('#link-list').reader();
    hass.toggleSetting()
};