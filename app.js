let container = document.querySelector(".container");
let formbox = document.querySelector(".form-box");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let inputgroup = document.querySelector(".input-group");
let inputfield = document.querySelector(".input-field");
let namebox = document.querySelector("#namebox");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirmpassword = document.querySelector(".confirm-password");
let confirmbox = document.querySelector("#confirmbox");
let signup = document.querySelector(".Sign-Up");
let signin = document.querySelector(".Sign-In");
let forgotPassword = document.querySelector(".forgot-password");
let account = document.querySelector(".account") 
let signinlink = document.querySelector(".signinlink")

signin.addEventListener("click", () => {
  namebox.style.display = "none";
  email.value = "";
  password.value = "";
  confirmbox.style.display = "none";
  forgotPassword.style.display="block"
  account.style.display = "none"
  title.innerHTML = "Sign In";
  signup.classList.add("disable");
  signin.classList.add("disable");
  underline.style.transform = "translateX(35px)";
});

signup.addEventListener("click", () => {
  namebox.style.display = "block";
  confirmbox.style.display = "block";
  forgotPassword.style.display = "none"
  account.style.display = ""
  title.innerHTML = "Sign Up";
  signup.classList.remove("disable");
  signin.classList.remove("disable");
  underline.style.transform = "translateX(0px)";
});

signinlink.addEventListener("click",() => {
  namebox.style.display = "none";
  email.value = "";
  password.value = "";
  confirmbox.style.display = "none";
  forgotPassword.style.display="block"
  account.style.display = "none"
  title.innerHTML = "Sign In";
  signup.classList.add("disable");
  signin.classList.add("disable");
  underline.style.transform = "translateX(35px)";
})