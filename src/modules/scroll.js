const scroll = () => {
  const scrollBtns = document.querySelectorAll(".smooth-scroll");
  const bodies = document.querySelectorAll("body");
  scrollBtns.forEach((btn) => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 540) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      bodies.forEach((body) => {
        body.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });
};
export default scroll;
