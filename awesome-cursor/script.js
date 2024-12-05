const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (event) => {
  cursor1.style.cssText = cursor2.style.cssText =
    "left:" + event.clientX + "px; top:" + event.clientY + "px";
});
