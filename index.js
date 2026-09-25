/* EMAIL CONNECT */

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_5nkjjjq",
      "template_bo5469r",
      event.target,
      "gOnJO2ySsNliAPJWj",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavaible. Please contact me directly at aiyannast@outlook.com",
      );
    });
}

/* MODAL TOGGLE */

let isModalOpen = false;
function toggleModal () {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}