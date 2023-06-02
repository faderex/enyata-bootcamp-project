const submit = document
  .querySelector(".submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const error = document.querySelector(".error");

    //Checks if either the name or email field is empty by trimming the values and comparing them to an empty string
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
