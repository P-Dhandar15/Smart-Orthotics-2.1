function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	if (username === "doctor1" && password === "12345") {
		window.location.href = "list.html";
	} else {
		document.getElementById("error").innerHTML = "Invalid username or password";
	}
}

// function openVideo() {
//     window.open('https://youtu.be/V5c4BnmPTpU', '_blank');
// }