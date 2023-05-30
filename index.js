const submit = document
  .querySelector(".submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const error = document.querySelector(".error");

    if (name.trim() === "" || email.trim() === "") {
      error.style.display = "block";

      //Error message should be gone after 5 seconds
      setTimeout(() => {
        error.style.display = "none";
      }, 5000);
    } else {
      error.style.display = "none";
      alert(
        `Hello ${name}🎉, your form has been submitted successfully. Your email is ${email}.`
      );
    }
  });
