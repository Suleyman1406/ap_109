const registerEmailInput = document.getElementById("registerEmailInput");
const registerPassInput = document.getElementById("registerPassInput");
const registerConfirmPassInput = document.getElementById(
  "registerConfirmPassInput"
);
const registerBtn = document.querySelector("#registerBtn");
const userTableBody = document.querySelector("#userTableBody");
const loginEmailInput = document.querySelector("#loginEmailInput");
const loginPassInput = document.querySelector("#loginPassInput");
const loginBtn = document.querySelector("#loginBtn");
const resultElement = document.querySelector("#result");

const users = [];

registerBtn.addEventListener("click", onUserRegister);
loginBtn.addEventListener("click", onUserLogin);

function onUserRegister() {
  let email = registerEmailInput.value.trim();
  let password = registerPassInput.value.trim();
  let confirmPassword = registerConfirmPassInput.value.trim();
  if (!email || !password || !confirmPassword || password !== confirmPassword)
    return;
  let newUser = {
    email: email,
    password: password,
  };
  users.push(newUser);
  const newTableRow = document.createElement("tr");
  const emailTd = document.createElement("td");
  const passwordTd = document.createElement("td");
  emailTd.textContent = email;
  passwordTd.textContent = password;
  newTableRow.append(emailTd, passwordTd);
  userTableBody.append(newTableRow);
  registerEmailInput.value = "";
  registerPassInput.value = "";
  registerConfirmPassInput.value = "";
}

function onUserLogin() {
  let email = loginEmailInput.value.trim();
  let password = loginPassInput.value.trim();
  if (!email || !password) return;
  let result = "Not Logged In";
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      result = "Logged In";
      break;
    }
  }
  resultElement.textContent = result;
}
