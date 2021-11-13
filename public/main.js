const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
    const password = passwordInput.value;
    const response = await fetch(
        `/.netlify/functions/login?password=${password}`
    );
    const data = await response.json();
    window.alert(data.message);
});
