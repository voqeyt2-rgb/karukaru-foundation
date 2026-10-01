// KARUKARU FOUNDATION
// Contact form

const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received by KARUKARU FOUNDATION."
    );

    form.reset();

});