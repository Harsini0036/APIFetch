const form = document.querySelector("#form1");
const uname = document.querySelector("#uname1");

const pswd = document.querySelector("#pswdLogin");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function validateInputs() {
  const unameVal = uname.value.trim();

  const pswdVal = pswd.value.trim();

  let success = true;

  if (unameVal === "") {
    success = false;
    setError(uname, "Username is required");
  } else {
    setSuccess(uname);
  }

  if (pswdVal === "") {
    success = false;
    setError(pswd, "Password is required");
  } else {
    setSuccess(pswd);
  }

  /* if (success) {
    alert("Login successful!");
    window.location.assign("Home.html");
  } */
  const savedUsername = localStorage.getItem("uname_ToDo");
  const savedPassword = localStorage.getItem("pswd_ToDo");
  if (success && unameVal === savedUsername && pswdVal === savedPassword) {
    alert("Your Successfully Verified Username and Password!");
    window.location.href = "Home.html";
  } else {
    alert("Invalid username or password. Please try again!");
  }
}

function setError(element, message) {
  const inputGrp = element.parentElement;
  // searches for .error only in that div
  const errorElement = inputGrp.querySelector(".error");
  errorElement.innerText = message;
  errorElement.style.color = "red";
}

function setSuccess(element) {
  const inputGrp = element.parentElement;

  const errorElement = inputGrp.querySelector(".error");
  errorElement.innerText = "";
  errorElement.style.color = "green";
}
