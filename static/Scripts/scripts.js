const messagesList = document.querySelector('.messages-list');
const messageForm = document.querySelector('.message-form');
const messageInput = document.querySelector('.message-input');

messageForm.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const message = messageInput.value.trim();
		if (message.length == 0) {
			return;
		}

	const messageItem = document.createElement('li');
	messageItem.classList.add('message', 'sent');
	messageItem.innerHTML = `
		<div class="chat outgoing">
			<div class="chat-content">
				<div class="chat-details">
					<a href="https://imgur.com/by65G6L"><img src="https://i.imgur.com/by65G6L.jpg" alt="You"/></a>
					<p>${message}</p>
				</div>
			</div>
		</div>`;
	messagesList.appendChild(messageItem);

	messageInput.value = '';

	fetch('', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			'csrfmiddlewaretoken': document.querySelector('[name=csrfmiddlewaretoken]').value,
			'message': message
		})
	})
	.then(response => response.json())
	.then(data => {
		const response = data.response;
		const messageItem = document.createElement('li');
		messageItem.classList.add('message', 'received');
		messageItem.innerHTML = `
		<div class="chat incoming">
			<div class="chat-content">
				<div class="chat-details">
					<a href="https://imgur.com/FDBBhZn"><img src="https://i.imgur.com/FDBBhZn.png" alt="Ease"/></a>
					<p>${response}</p>
				</div>
			</div>
		</div>`;
		messagesList.appendChild(messageItem);
	});
});