const modalRequest = () => {
  const requestBtn = document.querySelector("#header .button");
  const overlay = document.querySelector(".overlay");
  const requestModal = document.querySelector(".header-modal");
  const closeBtn = requestModal.querySelector(".header-modal__close");

  requestBtn.addEventListener("click", () => {
    requestModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    overlay.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    requestModal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = ""; //возвращает прокрутку
  });
  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".header-modal")) {
      requestModal.style.display = "none";
      overlay.style.display = "none";
    }
  });
};
export default modalRequest;
