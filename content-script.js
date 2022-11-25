// user: GDhqjd
// messageBox: Zmm6We
// message: oIy2qc
// username: YTbUzc

// data-sender-name
// data-message-text
// || node.matches('.oIy2qc') 
const callback = (mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE && (node.matches('.oIy2qc'))) {
        const user = node.parentNode.parentNode.getAttribute('data-sender-name');
        const text = node.getAttribute('data-message-text'); 
        if (user === 'You') {
          return;
        }
        console.log(user, text);
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
  const notification = new Notification('Google Meet Desktop Notifications', {
    body: `You have received a new message from ${user}! ${text}`,
    icon: './img/js.png',
    vibrate: true
  });

  setTimeout(() => {
    notification.close();
  }, 10 * 1000);

  // notification.addEventListener('click', () => {
  //   window.open('https://meet.google.com/', '_blank');
  // });
}