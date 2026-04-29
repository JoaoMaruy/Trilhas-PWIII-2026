async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token); // Salva o token recebido
            window.location.href = "home.html"; // Redireciona para a home
        } else {
            alert(data.message || "Erro ao fazer login");
        }
    } catch (error) {
        console.error("Erro no login:", error);
    }
}