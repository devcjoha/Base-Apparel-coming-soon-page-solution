document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("email-form");
  const emailInput = document.getElementById("email-input");
  const errorIcon = document.getElementById("error-icon");
  const errorMsg = document.getElementById("error-msg");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function displayError(show) {
    if (show) {
        emailInput.classList.add("error-state");
      errorIcon.classList.remove("hidden");
      console.log(errorIcon);
      errorMsg.classList.remove("hidden");


    } else {
      errorIcon.classList.add("hidden");
      errorMsg.classList.add("hidden");

      emailInput.classList.remove("error-state");
 
    }
  }

  emailInput.addEventListener("input", () => {
   

    if (emailInput.classList.contains("error-state")) {
      // Llama a la función de error, pero le dice que oculte (false)
      displayError(false);
    }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (email === "" || !emailRegex.test(email)) {
      displayError(true);
    } else {
      displayError(false);
      alert("Thanks for subscribing!");
      emailInput.value = "";
      emailInput.focus();
    }
  });

  //   emailInput.addEventListener("input", () => {
  //     if (emailInput.classList.contains("error-state")) {
  //       displayError(false);
  //     }
  //   });
  //   displayError(false);
});
