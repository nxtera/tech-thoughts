async function logMeIn(event) {
  event.preventDefault();
  const password = document.querySelector("#passwordLogin").value.trim();
  const username = document.querySelector("#usernameLogin").value.trim();
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("inside response ok");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector("#logInBtn").addEventListener("click", logMeIn);
