(function () {
    'use strict';

    const MESSAGE = {
        READY: 'HA_EXT_READY',
        REQUEST: 'HA_EXT_CURRENT_TAB_REQUEST',
        CURRENT_TAB: 'HA_EXT_CURRENT_TAB'
    };

    const i18n = {
        title: chrome.i18n.getMessage('title'),
        description: chrome.i18n.getMessage('description'),
        error_tips: chrome.i18n.getMessage('error_tips'),
        add: chrome.i18n.getMessage('add'),
        cancel: chrome.i18n.getMessage('cancel'),
        delete: chrome.i18n.getMessage('delete'),
        add_current: chrome.i18n.getMessage('add_current'),
        add_tip: chrome.i18n.getMessage('add_tip'),
        menu: chrome.i18n.getMessage('menu'),
        help: chrome.i18n.getMessage('help'),
        refresh: chrome.i18n.getMessage('refresh'),
        rename: chrome.i18n.getMessage('rename'),
        set_default: chrome.i18n.getMessage('set_default'),
        default_set: chrome.i18n.getMessage('default_set'),
        rename_title: chrome.i18n.getMessage('rename_title'),
        delete_title: chrome.i18n.getMessage('delete_title'),
        delete_confirm: chrome.i18n.getMessage('delete_confirm'),
        confirm_delete: chrome.i18n.getMessage('confirm_delete'),
        duplicate_tips: chrome.i18n.getMessage('duplicate_tips'),
        added: chrome.i18n.getMessage('added'),
        deleted: chrome.i18n.getMessage('deleted'),
        loading: chrome.i18n.getMessage('loading'),
        load_failed: chrome.i18n.getMessage('load_failed'),
        retry: chrome.i18n.getMessage('retry'),
        save: chrome.i18n.getMessage('save'),
        open_new: chrome.i18n.getMessage('open_new'),
        settings: chrome.i18n.getMessage('settings'),
        width: chrome.i18n.getMessage('width'),
        height: chrome.i18n.getMessage('height'),
        size_tip: chrome.i18n.getMessage('size_tip'),
        size_saved: chrome.i18n.getMessage('size_saved'),
        size_invalid: chrome.i18n.getMessage('size_invalid'),
        reset: chrome.i18n.getMessage('reset'),
        rename_tip: chrome.i18n.getMessage('rename_tip')
    };

    document.title = i18n.title;
    document.documentElement.lang = chrome.i18n.getUILanguage() || 'zh-CN';

    const $ = (id) => document.getElementById(id);
    const stage = $('stage');
    const loading = $('loading');
    const loadingText = $('loading-text');
    const retryButton = $('retry-button');
    const pos = $('pos');
    const menu = $('menu');
    const menuButton = $('menu-button');
    const menuList = $('menu-list');
    const dialog = $('dialog');
    const dialogTitle = $('dialog-title');
    const dialogText = $('dialog-text');
    const dialogInput = $('dialog-input');
    const dialogNote = $('dialog-note');
    const dialogCancel = $('dialog-cancel');
    const dialogConfirm = $('dialog-confirm');
    const dialogFields = $('dialog-fields');
    const dialogReset = $('dialog-reset');
    const toastArea = $('toast-area');

    const FAB = 44;
    const MARGIN = 12;
    const LOAD_TIMEOUT = 8000;
    const DEFAULT_SIZE = { width: 400, height: 550 };
    const MIN_W = 360, MIN_H = 420; // 竖屏可用下限：宽 360、高 420，容纳菜单(336)与设置对话框(320)
    const screenSize = window.screen || {};
    const MAX_W = Math.max(MIN_W, Math.min(800, screenSize.availWidth || 800));
    const MAX_H = Math.max(MIN_H, Math.min(600, screenSize.availHeight || 600));

    let size = loadSize();
    let list = loadList();
    let url = '';
    let iframe = null;
    let haOrigin = null;
    let iframeLoaded = false;
    let tabInfoPromise = getCurrentTabInfo(false);
    let loadTimer = null;
    let toastTimer = null;
    let dialogAction = null;
    let dialogResetAction = null;
    let fieldRows = [];
    let drag = null;
    let suppressClick = false;
    let posValue = loadPos();

    $('menu-title').textContent = i18n.title;
    $('menu-desc').textContent = i18n.description;
    $('add-button').textContent = i18n.add;
    $('cancel-button').textContent = i18n.cancel;
    $('settings-button').textContent = '⚙';
    $('settings-button').title = i18n.settings;
    $('settings-button').setAttribute('aria-label', i18n.settings);
    $('help-button').textContent = '?';
    $('help-button').title = i18n.help;
    $('help-button').setAttribute('aria-label', i18n.help);
    $('refresh-button').textContent = '⟳';
    $('refresh-button').title = i18n.refresh;
    $('retry-button').textContent = i18n.retry;
    menuButton.title = i18n.menu;
    menuButton.setAttribute('aria-label', i18n.menu);
    dialogCancel.textContent = i18n.cancel;
    dialogReset.textContent = i18n.reset;

    function loadList() {
        try {
            const arr = JSON.parse(localStorage['list']);
            return Array.isArray(arr) ? arr : [];
        } catch (e) {
            return [];
        }
    }

    function saveList() {
        localStorage['list'] = JSON.stringify(list);
    }

    function currentUrl() {
        if (url) return url;
        if (!list.length) return '';
        const selected = list.find(ele => ele.show === 1);
        return selected ? selected.url : list[list.length - 1].url;
    }

    function loadSize() {
        try {
            const saved = JSON.parse(localStorage['popupSize']);
            if (saved && Number.isFinite(saved.width) && Number.isFinite(saved.height)) {
                return normalizeSize(saved.width, saved.height);
            }
        } catch (e) {
            // 未保存过尺寸
        }
        return Object.assign({}, DEFAULT_SIZE);
    }

    function normalizeSize(width, height) {
        return {
            width: Math.min(Math.max(Math.round(width), MIN_W), MAX_W),
            height: Math.min(Math.max(Math.round(height), MIN_H), MAX_H)
        };
    }

    function applySize() {
        const w = `${size.width}px`;
        const h = `${size.height}px`;
        document.documentElement.style.width = w;
        document.documentElement.style.height = h;
        document.body.style.width = w;
        document.body.style.height = h;
    }

    function clampPos(left, top) {
        const maxX = Math.max(0, size.width - FAB);
        const maxY = Math.max(0, size.height - FAB);
        return {
            left: Math.min(Math.max(left, 0), maxX),
            top: Math.min(Math.max(top, 0), maxY)
        };
    }

    function loadPos() {
        try {
            const saved = JSON.parse(localStorage['pos']);
            if (saved && typeof saved.left === 'number' && typeof saved.top === 'number') {
                return clampPos(saved.left, saved.top);
            }
        } catch (e) {
            // 未保存过位置
        }
        return clampPos(size.width - FAB - MARGIN, size.height - FAB - MARGIN);
    }

    function applyPos() {
        pos.style.left = `${posValue.left}px`;
        pos.style.top = `${posValue.top}px`;
        pos.style.right = 'auto';
        pos.style.bottom = 'auto';
    }

    function getCurrentTabInfo(haPageOnly) {
        return new Promise((resolve) => {
            try {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    if (!tabs || !tabs.length) {
                        resolve(null);
                        return;
                    }
                    try {
                        chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            args: [haPageOnly],
                            func: (onlyHaPage) => {
                                if (onlyHaPage && !document.body.querySelector('home-assistant')) {
                                    return null;
                                }
                                return { title: document.title, url: location.href };
                            }
                        }).then((res) => {
                            resolve(res && res[0] ? res[0].result || null : null);
                        }, () => resolve(null));
                    } catch (e) {
                        resolve(null);
                    }
                });
            } catch (e) {
                resolve(null);
            }
        });
    }

    function updateOrigin() {
        try {
            haOrigin = iframe ? new URL(iframe.src).origin : null;
        } catch (e) {
            haOrigin = null;
        }
    }

    function pushCurrentTab(origin) {
        const win = iframe && iframe.contentWindow;
        if (!win) return;
        tabInfoPromise = tabInfoPromise || getCurrentTabInfo(false);
        tabInfoPromise.then((info) => {
            if (!iframe || iframe.contentWindow !== win || haOrigin !== origin) return;
            win.postMessage({ type: MESSAGE.CURRENT_TAB, payload: info }, origin);
        });
    }

    function placeMenu() {
        const menuW = Math.min(336, size.width - 24);
        const menuH = menu.offsetHeight || 0;
        const edge = 12;
        const gap = 8;
        const maxLeft = Math.max(edge, size.width - menuW - edge);
        const maxTop = Math.max(edge, size.height - menuH - edge);
        const left = Math.min(Math.max(posValue.left + FAB - menuW, edge), maxLeft);
        const above = posValue.top;
        const below = size.height - (posValue.top + FAB);
        let top = (above >= menuH + gap || above >= below)
            ? posValue.top - menuH - gap
            : posValue.top + FAB + gap;
        top = Math.min(Math.max(top, edge), maxTop);
        menu.style.left = `${left - posValue.left}px`;
        menu.style.top = `${top - posValue.top}px`;
    }

    function setMenuOpen(open) {
        menu.hidden = !open;
        menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) placeMenu();
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    function toggleMenu() {
        setMenuOpen(menu.hidden);
    }

    function render() {
        closeMenu();
        closeDialog();
        clearTimeout(loadTimer);
        stage.textContent = '';
        pos.hidden = list.length === 0;

        const target = currentUrl();
        if (!target) {
            iframe = null;
            haOrigin = null;
            iframeLoaded = false;
            loading.hidden = true;
            renderEmpty();
        } else {
            iframeLoaded = false;
            loading.hidden = false;
            loadingText.textContent = i18n.loading;
            retryButton.hidden = true;

            const frame = document.createElement('iframe');
            frame.src = target;
            frame.title = i18n.title;
            frame.addEventListener('load', () => {
                if (frame !== iframe) return;
                iframeLoaded = true;
                clearTimeout(loadTimer);
                loading.hidden = true;
            });
            iframe = frame;
            stage.appendChild(frame);
            updateOrigin();

            loadTimer = setTimeout(() => {
                if (iframeLoaded || !iframe) return;
                loadingText.textContent = i18n.load_failed;
                retryButton.hidden = false;
            }, LOAD_TIMEOUT);
        }
        renderMenu();
    }

    function renderEmpty() {
        const empty = document.createElement('div');
        empty.className = 'empty';

        const logo = document.createElement('img');
        logo.className = 'empty-logo';
        logo.src = '../icons/homeassistant.svg';
        logo.alt = '';

        const heading = document.createElement('h1');
        heading.textContent = i18n.title;

        const desc = document.createElement('p');
        desc.textContent = i18n.description;

        const action = document.createElement('button');
        action.type = 'button';
        action.className = 'empty-action';
        action.textContent = i18n.add_current;
        action.addEventListener('click', addClick);

        const hint = document.createElement('div');
        hint.className = 'empty-hint';
        hint.textContent = i18n.add_tip;

        empty.append(logo, heading, desc, action, hint);
        stage.appendChild(empty);
    }

    function createIconButton(text, label, extraClass, handler) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'item-btn' + (extraClass ? ' ' + extraClass : '');
        btn.textContent = text;
        btn.title = label;
        btn.setAttribute('aria-label', label);
        btn.addEventListener('click', handler);
        return btn;
    }

    function renderMenu() {
        menuList.textContent = '';
        list.forEach((ele, index) => {
            const item = document.createElement('div');
            item.className = 'menu-item' + (ele.show === 1 ? ' active' : '');

            const isDefault = ele.show === 1;
            const badge = document.createElement('div');
            badge.className = 'item-badge' + (isDefault ? ' default' : '');
            badge.textContent = isDefault ? '★' : String(index + 1);
            badge.title = i18n.set_default;
            badge.setAttribute('aria-label', i18n.set_default);
            badge.addEventListener('click', () => setDefaultClick(index));

            const main = document.createElement('div');
            main.className = 'item-main';

            const title = document.createElement('span');
            title.className = 'item-title';
            title.textContent = ele.title;
            title.title = ele.title;
            title.addEventListener('click', () => selectClick(ele, index));

            const link = document.createElement('a');
            link.className = 'item-link';
            link.href = ele.url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.textContent = ele.url;
            link.title = ele.url;

            main.append(title, link);

            const actions = document.createElement('div');
            actions.className = 'item-actions';
            const rename = createIconButton('✎', i18n.rename, '', () => openRenameDialog(index));
            const remove = createIconButton('✕', i18n.delete, 'danger', () => openDeleteDialog(index));
            actions.append(rename, remove);

            item.append(badge, main, actions);
            menuList.appendChild(item);
        });
    }

    function addClick() {
        getCurrentTabInfo(true).then((result) => {
            if (!result) {
                toast(i18n.error_tips, 'error');
                return;
            }
            if (list.find(ele => ele.url === result.url)) {
                toast(i18n.duplicate_tips);
                return;
            }
            url = result.url;
            list.forEach(ele => ele.show = 0);
            list.push(Object.assign(result, { show: 1 }));
            saveList();
            render();
            toast(i18n.added, 'success');
        });
    }

    function selectClick(data, index) {
        url = data.url;
        list.forEach(ele => ele.show = 0);
        list[index].show = 1;
        saveList();
        render();
    }

    function setDefaultClick(index) {
        if (!list[index]) return;
        list.forEach((ele, i) => { ele.show = i === index ? 1 : 0; });
        saveList();
        renderMenu();
        toast(i18n.default_set, 'success');
    }

    function removeClick(index) {
        list.splice(index, 1);
        url = '';
        saveList();
        render();
        toast(i18n.deleted);
    }

    function toast(text, type) {
        toastArea.textContent = '';
        const el = document.createElement('div');
        el.className = 'toast' + (type ? ' ' + type : '');
        el.textContent = text;
        toastArea.appendChild(el);
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.remove(), 3000);
    }

    function openDialog(options) {
        dialogTitle.textContent = options.title;
        dialogText.textContent = options.text || '';
        dialogText.hidden = !options.text;
        dialogInput.hidden = !options.input;
        if (options.input) dialogInput.value = options.value || '';
        dialogNote.textContent = options.note || '';
        dialogNote.hidden = !options.note;
        dialogFields.textContent = '';
        fieldRows = [];

        (options.fields || []).forEach((field) => {
            const row = document.createElement('div');
            row.className = 'field-row';

            const head = document.createElement('div');
            head.className = 'field-head';
            const name = document.createElement('span');
            name.className = 'field-name';
            name.textContent = field.label;
            const number = document.createElement('input');
            number.type = 'number';
            number.className = 'field-number';
            number.min = String(field.min);
            number.max = String(field.max);
            number.value = String(field.value);
            head.append(name, number);

            const range = document.createElement('input');
            range.type = 'range';
            range.className = 'field-range';
            range.min = String(field.min);
            range.max = String(field.max);
            range.step = '1';
            range.value = String(field.value);

            const bounds = document.createElement('div');
            bounds.className = 'field-bounds';
            const minLabel = document.createElement('span');
            minLabel.textContent = String(field.min);
            const maxLabel = document.createElement('span');
            maxLabel.textContent = String(field.max);
            bounds.append(minLabel, maxLabel);

            range.addEventListener('input', () => { number.value = range.value; });
            number.addEventListener('input', () => {
                if (number.value !== '') range.value = number.value;
            });
            const onKey = (e) => {
                if (e.key === 'Enter') confirmDialog();
                if (e.key === 'Escape') closeDialog();
            };
            range.addEventListener('keydown', onKey);
            number.addEventListener('keydown', onKey);

            row.append(head, range, bounds);
            dialogFields.appendChild(row);
            fieldRows.push({ range, number });
        });
        dialogFields.hidden = fieldRows.length === 0;
        dialogReset.hidden = !options.reset;
        dialogConfirm.textContent = options.confirmText || i18n.save;
        dialogConfirm.className = 'btn ' + (options.danger ? 'btn-danger' : 'btn-primary');
        dialogAction = options.onConfirm;
        dialogResetAction = options.onReset || null;
        dialog.hidden = false;
        if (options.input) dialogInput.focus();
        else if (fieldRows.length) fieldRows[0].number.focus();
    }

    function closeDialog() {
        dialog.hidden = true;
        dialogAction = null;
        dialogResetAction = null;
        fieldRows = [];
    }

    function confirmDialog() {
        const action = dialogAction;
        const result = fieldRows.length
            ? fieldRows.map(row => row.number.value.trim())
            : dialogInput.value.trim();
        closeDialog();
        if (action) action(result);
    }

    function openRenameDialog(index) {
        const item = list[index];
        if (!item) return;
        openDialog({
            title: i18n.rename_title,
            text: i18n.rename_tip,
            input: true,
            value: item.title,
            note: item.url,
            confirmText: i18n.save,
            onConfirm: (value) => {
                if (!value || !list[index]) return;
                list[index].title = value;
                saveList();
                renderMenu();
            }
        });
    }

    function openDeleteDialog(index) {
        const item = list[index];
        if (!item) return;
        openDialog({
            title: i18n.delete_title,
            text: `${i18n.delete_confirm} ${item.title}`,
            confirmText: i18n.confirm_delete,
            danger: true,
            onConfirm: () => removeClick(index)
        });
    }

    function openSizeDialog() {
        openDialog({
            title: i18n.settings,
            text: i18n.size_tip,
            confirmText: i18n.save,
            reset: true,
            fields: [
                { label: `${i18n.width} (px)`, value: size.width, min: MIN_W, max: MAX_W },
                { label: `${i18n.height} (px)`, value: size.height, min: MIN_H, max: MAX_H }
            ],
            onConfirm: (values) => {
                const width = Number(values[0]);
                const height = Number(values[1]);
                if (values[0] === '' || values[1] === '' ||
                    !Number.isFinite(width) || !Number.isFinite(height) ||
                    width < MIN_W || width > MAX_W || height < MIN_H || height > MAX_H) {
                    toast(i18n.size_invalid, 'error');
                    return;
                }
                size = normalizeSize(width, height);
                localStorage['popupSize'] = JSON.stringify(size);
                applySize();
                afterSizeChange();
                toast(i18n.size_saved, 'success');
            },
            onReset: () => {
                closeDialog();
                size = Object.assign({}, DEFAULT_SIZE);
                localStorage['popupSize'] = JSON.stringify(size);
                applySize();
                afterSizeChange();
                toast(i18n.size_saved, 'success');
            }
        });
    }

    function afterSizeChange() {
        posValue = clampPos(posValue.left, posValue.top);
        applyPos();
        localStorage['pos'] = JSON.stringify(posValue);
        if (!menu.hidden) placeMenu();
    }

    dialogCancel.addEventListener('click', closeDialog);
    dialogConfirm.addEventListener('click', confirmDialog);
    dialogReset.addEventListener('click', () => {
        if (dialogResetAction) dialogResetAction();
    });
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) closeDialog();
    });
    dialogInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') confirmDialog();
        if (e.key === 'Escape') closeDialog();
    });

    menuButton.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        drag = { x: e.clientX, y: e.clientY, left: posValue.left, top: posValue.top, moved: false };
    });
    document.addEventListener('mousemove', (e) => {
        if (!drag) return;
        const dx = e.clientX - drag.x;
        const dy = e.clientY - drag.y;
        if (!drag.moved && Math.abs(dx) + Math.abs(dy) < 4) return;
        drag.moved = true;
        posValue = clampPos(drag.left + dx, drag.top + dy);
        applyPos();
        if (!menu.hidden) placeMenu();
    });
    document.addEventListener('mouseup', () => {
        if (!drag) return;
        if (drag.moved) {
            suppressClick = true;
            localStorage['pos'] = JSON.stringify(posValue);
        }
        drag = null;
    });
    menuButton.addEventListener('click', () => {
        if (suppressClick) {
            suppressClick = false;
            return;
        }
        toggleMenu();
    });
    menuButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    document.addEventListener('click', (e) => {
        if (menu.hidden || dialog.contains(e.target)) return;
        if (menu.contains(e.target) || menuButton.contains(e.target)) return;
        closeMenu();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!dialog.hidden) closeDialog();
        else if (!menu.hidden) closeMenu();
    });

    $('settings-button').addEventListener('click', openSizeDialog);
    $('help-button').addEventListener('click', () => {
        chrome.tabs.create({ url: 'https://github.com/shaonianzhentan/ha-extension' });
    });
    $('cancel-button').addEventListener('click', closeMenu);
    $('add-button').addEventListener('click', addClick);
    $('refresh-button').addEventListener('click', () => {
        closeMenu();
        render();
    });
    retryButton.addEventListener('click', render);

    window.addEventListener('message', (event) => {
        if (!iframe || !haOrigin) return;
        if (event.source !== iframe.contentWindow) return;
        if (event.origin !== haOrigin) return;
        const type = event.data && event.data.type;
        if (type !== MESSAGE.READY && type !== MESSAGE.REQUEST) return;
        pushCurrentTab(event.origin);
    });

    applySize();
    applyPos();
    render();
})();
