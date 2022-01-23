const passwordInput = document.querySelector("#passwordInput");
const form = document.querySelector("form");
const main = document.querySelector("main");
const error = document.querySelector("#error");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const password = passwordInput.value;
    const response = await fetch(
        `/.netlify/functions/login?password=${password}`
    );
    const data = await response.json();
    if (response.ok) {
        error.innerHTML = "";
        form.remove();
        main.innerHTML = data.html;
    } else {
        error.innerHTML = data.error;
    }
});
