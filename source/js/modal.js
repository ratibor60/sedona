const modal = document.querySelector(".modal");
const modalFailure = document.querySelector(".modal-failure");
const modalSuccess = document.querySelector(".modal-success");
const modalClose = modal.querySelector(".modal--close");
const modalButton = modal.querySelector(".modal-button");
const form = document.querySelector(".form");
const submitButton = form.querySelector(".form-review__button");

submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--open");
});

modalButton.addEventListener("click", function () {
  modal.classList.remove("modal--open");
  modal.classList.add("modal--close");
});
