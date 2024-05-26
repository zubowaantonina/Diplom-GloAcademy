const sendForm = () => {
  const forms = document.querySelectorAll(".order-form.rf, .box-modal_body.rf");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const userName = form.querySelector('input[name="fio"]');
      const userPhone = form.querySelector('input[name="phone"]');
      const replyModal = document.querySelector("#responseMessage");
      const modalContent = replyModal.querySelector(".modal-content");
      const closeBtn = replyModal.querySelector(".btn.btn-success.fancyClose");
      const overlay = document.querySelector(".overlay");
      const phoneRequestModal = document.querySelector(".header-modal");
      const servicesModal = document.querySelector(".services-modal");
      const total = document.getElementById("calc-total");

      let data = {
        name: userName.value,
        phone: userPhone.value,
        orderPrice: 0,
      };

      if (total) {
        if (total.textContent !== null && total.textContent !== 0) {
          data.orderPrice = total.textContent;
        }
      }

      if (userName.value === "") {
        userName.classList.add("error");
      } else {
        userName.classList.remove("error");
      }
      userName.addEventListener("focusout", () => {
        userName.classList.remove("error");
      });

      if (
        !/[\d- ]{7,16}/.test(userPhone.value) ||
        !(userPhone.value.match(/\d/g).length >= 7)
      ) {
        userPhone.classList.add("error");
      } else {
        userPhone.classList.remove("error");
      }
      userPhone.addEventListener("focusout", () => {
        userPhone.classList.remove("error");
      });
      if (userName.closest(".error") || userPhone.closest(".error")) {
        return;
      } else {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .catch((error) => error.message);

        userName.value = "";
        userPhone.value = "";
        userPhone.classList.remove("error");
        userName.classList.remove("error");
        phoneRequestModal.style.display = "none";
        servicesModal.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "";
        replyModal.classList.add("show");
        modalContent.innerHTML = "Ваша заявка принята";
        replyModal.style.position = "fixed";
        replyModal.style.left = "38%";
        replyModal.style.top = "40%";
        closeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          replyModal.classList.remove("show");
          modalContent.innerHTML = "";
        });
      }
    });
  });
  // })
};
export default sendForm;
