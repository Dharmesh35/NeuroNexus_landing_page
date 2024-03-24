const handleOnMouseOver = (e) => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

document.addEventListener("DOMContentLoaded", function () {
  for (const box of document.querySelectorAll(".general_box")) {
    box.onmousemove = (e) => handleOnMouseOver(e);
  }
});
