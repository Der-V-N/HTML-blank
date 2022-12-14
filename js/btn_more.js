document.addEventListener("DOMContentLoaded", function () {
  const limit = 4;
  const nextOpen = (wrapper, button) => {
    const boxs = wrapper.querySelectorAll(".team__item"),
      len = boxs.length - 2,
      endBox = wrapper.querySelector(".nextstop"),
      index = [...boxs].indexOf(endBox) + limit;
    if (endBox) endBox.classList.remove("nextstop");
    if (index < len) boxs[index].classList.add("nextstop");
    else button.remove()
  }
  document.querySelectorAll(".team__list").forEach(wrapper => {
    const button = wrapper.nextElementSibling;
    button.addEventListener("click", nextOpen.bind(null, wrapper, button));
    nextOpen(wrapper, button);
  })
});
