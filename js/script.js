/* =================================
   KARUKARU FOUNDATION JAVASCRIPT
================================= */


/* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");

const successMessage =
    document.getElementById("successMessage");

const sendButton =
    document.getElementById("sendButton");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            /* Stop Formspree from opening */
            event.preventDefault();


            /* Change button */
            sendButton.disabled = true;

            sendButton.textContent = "Sending...";


            /* Get form information */
            const formData =
                new FormData(contactForm);


            try {

                /* Send form to Formspree */
                const response = await fetch(
                    contactForm.action,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );


                /* SUCCESS */

                if (response.ok) {

                    successMessage.textContent =
                        "Thank you! Your message has been sent successfully. 💚";

                    successMessage.classList.add("show");


                    /* Clear form */
                    contactForm.reset();


                    /* Change button */
                    sendButton.textContent =
                        "Message Sent ✓";


                    /*
                       Return button to normal
                       after a few seconds
                    */

                    setTimeout(function () {

                        sendButton.disabled = false;

                        sendButton.textContent =
                            "Send Message";

                    }, 4000);


                }

                /* ERROR FROM FORMSPREE */

                else {

                    successMessage.textContent =
                        "Sorry, your message could not be sent. Please try again.";

                    successMessage.classList.add("show");


                    sendButton.disabled = false;

                    sendButton.textContent =
                        "Send Message";
                }


            }

            /* INTERNET / CONNECTION ERROR */

            catch (error) {

                successMessage.textContent =
                    "Something went wrong. Please check your internet connection and try again.";

                successMessage.classList.add("show");


                sendButton.disabled = false;

                sendButton.textContent =
                    "Send Message";

            }

        }
    );

}
