(async () => {
	// place js code here
	// create and show the notification
	const showNotification = () => {
		// create a new notification
		const notification = new Notification('Google Meet Desktop Notifications', {
			body: 'You have received a new message!',
			icon: './img/js.png',
			vibrate: true
		});

		// close the notification after 10 seconds
		setTimeout(() => {
			notification.close();
		}, 10 * 1000);

		// navigate to a URL
		notification.addEventListener('click', () => {
			window.open('https://meet.google.com/', '_blank');
		});
	}

	// show an error message
	const showError = () => {
		const error = document.querySelector('.error');
		error.style.display = 'block';
		error.textContent = 'You blocked the notifications';
	}

	let granted = false;

	if (Notification.permission === 'granted') {
		granted = true;
	} else if (Notification.permission !== 'denied') {
		let permission = await Notification.requestPermission();
		granted = permission === 'granted' ? true : false;
	}

	// show notification or the error message 
	granted ? showNotification() : showError();
})();