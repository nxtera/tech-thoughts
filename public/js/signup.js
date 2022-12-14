const SignMeUp = async (event) => {
  event.preventDefault();
  const username = document.getElementById("usernameSignup").value.trim();
  const password = document.getElementById("passwordSignup").value.trim();
  const response = await fetch(`/api/users/signup`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("response is good!");
    document.location.replace("/");
  } else {
    console.log(response);
    alert("Failed to sign up");
  }
};

document.querySelector("#SignUpForm").addEventListener("submit", SignMeUp);
