function login() {
  const email = document.getElementById("email").value;
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  const DEMO_EMAIL = "admin@anugaofc.com";
  const DEMO_USER = "admin";
  const DEMO_PASS = "Anuga123";

  if (!email || !user || !pass) {
    msg.innerText = "⚠ All fields required";
    msg.style.color = "red";
    return;
  }

  if (email === DEMO_EMAIL && user === DEMO_USER && pass === DEMO_PASS) {
    localStorage.setItem("demoSession", JSON.stringify({
      user: "admin",
      role: "admin"
    }));

    msg.innerText = "✅ Access Granted";
    msg.style.color = "#00ffcc";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 700);
  } else {
    msg.innerText = "❌ Invalid credentials";
    msg.style.color = "red";
  }
}
