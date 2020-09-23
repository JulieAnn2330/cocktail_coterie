

//***************************HOMEWORK FILE


$(document).ready(function () {
  // Getting references to our form and inputs
  let loginForm = $("form.login");
  let emailInput = $("#email-popup");
  let passwordInput = $("#password-popup");
  

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    console.log("onclick")
    console.log(emailInput)
    console.log(passwordInput)
    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData)
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function () {
        window.location.replace("/profile");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});
