const servicesModal = () => {
  const servicesRequestBtns = document.querySelectorAll(".service-button");
  const servicesModal = document.querySelector(".services-modal");
  const servicesModalCloseBtn = servicesModal.querySelector(
    ".services-modal__close"
  );
  const overlay = document.querySelector(".overlay");

  servicesRequestBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      servicesModal.style.display = "flex";
      overlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });
  servicesModalCloseBtn.addEventListener("click", () => {
    servicesModal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = ""; //возвращает прокрутку
  });

  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".services-modal")) {
      servicesModal.style.display = "none";
      overlay.style.display = "none";
    }
  });
};
export default servicesModal;
