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

const themeButton = document.querySelector("#theme-btn");

const loadDataFromLocalstorage = () => {
    // Load saved chats and theme from local storage and apply/add on the page
    const themeColor = localStorage.getItem("themeColor");
    document.body.classList.toggle("light-mode", themeColor === "light_mode");
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
}

themeButton.addEventListener("click", () => {
    // Toggle body's class for the theme mode and save the updated theme to the local storage 
    document.body.classList.toggle("light-mode");
    localStorage.setItem("themeColor", themeButton.innerText);
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});

const deleteButton = document.querySelector("#delete-btn");

deleteButton.addEventListener("click", () => {
    // Remove the chats from local storage and call loadDataFromLocalstorage function
    if(confirm("Are you sure you want to delete all the chats?")) {
        localStorage.removeItem("list-unstyled messages-list");
        loadDataFromLocalstorage();
    }
});

loadDataFromLocalstorage();

function toggleProfileMenu() {
    var profileMenu = document.getElementById("profileMenu");
    profileMenu.style.display = (profileMenu.style.display === "block") ? "none" : "block";
}

// Cierra el menú si se hace clic fuera de él
document.addEventListener("click", function (event) {
    var profileButton = document.querySelector(".profile-button");
    var profileMenu = document.getElementById("profileMenu");
    if (!profileButton.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.style.display = "none";
    }
});

function toggleSettingsMenu() {
    var settingsMenu = document.getElementById("settingsMenu");
    settingsMenu.style.display = (settingsMenu.style.display === "block") ? "none" : "block";
}

// Cierra el menú si se hace clic fuera de él
document.addEventListener("click", function (event) {
    var settingsButton = document.querySelector(".settings-button");
    var settingsMenu = document.getElementById("settingsMenu");
    if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
        settingsMenu.style.display = "none";
    }
});