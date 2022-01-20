const form = document.querySelector("#form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let errorCount = 0;

form.addEventListener("submit", (e) => {
  checkInputs();
  if (errorCount > 0) {
    e.preventDefault();
  }
  errorCount = 0;
});

const checkInputs = () => {
  if (firstName.value === "" || firstName.value == null) {
    setError(firstName, "First Name cannot be empty");
    errorCount++;
  } else {
    setSuccess(firstName);
  }

  if (lastName.value === "" || lastName.value == null) {
    setError(lastName, "Last Name cannot be empty");
    errorCount++;
  } else {
    setSuccess(lastName);
  }

  if (email.value === "" || email.value == null) {
    setError(email, "Email cannot be empty");
    errorCount++;
  } else if (!isValidEmail(email.value)) {
    setError(email, "Looks like this is not an email");
    errorCount++;
  } else {
    setSuccess(email);
  }

  if (password.value === "" || password.value == null) {
    setError(password, "Password cannot be empty");
    errorCount++;
  } else if (password.value.length <= 8) {
    setError(password, "Password cannot be less than 8 characters");
    errorCount++;
  } else {
    setSuccess(password);
  }
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
  const inputWrap = element.parentElement;
  const errorSpan = inputWrap.querySelector(".error-message");

  errorSpan.innerText = message;
  inputWrap.classList.add("invalid");
};

const setSuccess = (element) => {
  const inputWrap = element.parentElement;
  inputWrap.classList.remove("invalid");
};
