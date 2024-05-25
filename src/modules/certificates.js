const certificates = () => {
  const docImages = document.querySelectorAll(".sertificate-document"); //a
  const closeModal = (e) => {
    const modalImg = document.querySelector(".document-modal-content>img");
    if (e.target !== modalImg) {
      modalDoc.classList.remove("is-open");
    }
  };
  const modalDoc = document.createElement("div");
  modalDoc.classList.add("document-modal");
  modalDoc.innerHTML = `
  <div class="document-modal-content"><img src="images/documents/original/document4.jpg" alt="" ></div>
  `;
  document.body.appendChild(modalDoc);
  modalDoc.addEventListener("click", closeModal);

  const open = () => {
    modalDoc.classList.add("is-open");
  };
  if (document.querySelector(".sertificate-document")) {
    const docItems = document.querySelectorAll(".documents_item");
    docItems.forEach((doc) => {
      const overlay = doc.querySelector(".document-overlay");
      docImages.src = doc.getAttribute("href");
      doc.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target === overlay) {
          open();
        }
      });
    });
  }
};
export default certificates;
