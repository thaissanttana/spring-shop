
const API_URL = "https://spring-shop-tt4g.onrender.com";

document.getElementById("form-login").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const discord = document.getElementById("login-discord").value;

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, discord })
    });

    const data = await response.json();
    alert(data.message || data.error);
});