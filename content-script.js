// user: GDhqjd
// messageBox: Zmm6We
// message: oIy2qc
// username: YTbUzc

const callback = (mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE && (node.matches('.oIy2qc'))) {
        const user = node.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
        const text = node.childNodes[0].textContent;
        if (user === 'You') {
          return;
        }
        showNotification(user, text);
      }
    }
  }
}

const observer = new MutationObserver(callback);

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});

const showNotification = (user, text) => {
  const notification = new Notification(`${user}: `, {
    body: text,
    icon: 'chrome.png',
    vibrate: true
  });

  setTimeout(() => {
    notification.close();
  }, 10 * 1000);

  // notification.addEventListener('click', () => {
  //   window.open('https://meet.google.com/', '_blank');
  // });
}