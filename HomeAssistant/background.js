chrome.commands.onCommand.addListener((command) => {
    console.log(`Command "${command}" triggered`);
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (typeof message === 'object' && message.type === 'showPageAction') {
        chrome.pageAction.setIcon({ tabId: sender.tab.id, path: "icons/32.png" });
        chrome.pageAction.show(sender.tab.id);
    }
    if (typeof message === 'object' && message.type === 'hidePageAction') {
        chrome.pageAction.hide(sender.tab.id);
    }
});