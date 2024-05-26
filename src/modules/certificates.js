const certificates = () => {
  const docImages = document.querySelectorAll(".sertificate-document"); //a

  const modalDoc = document.createElement("div");
  modalDoc.innerHTML = `
  <div class="document-modal-content"><img src="images/documents/original/document4.jpg" alt="" ></div>
  `;
  modalDoc.classList.add("document-modal");
  document.body.appendChild(modalDoc);

  const closeModal = (e) => {
    const modalImg = document.querySelector(".document-modal-content>img");
    if (e.target !== modalImg) {
      modalDoc.classList.remove("is-open");
    }
  };
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
  modalDoc.addEventListener("click", closeModal);
};
export default certificates;
