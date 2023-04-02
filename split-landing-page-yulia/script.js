const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const clearBtnLeft = document.querySelectorAll(".btn")[0];
const clearBtnRight = document.querySelectorAll(".btn")[1];
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

// 获取要移除伪类的元素
const myLeft = document.querySelector(".side.left");
const myRight = document.querySelector(".side.right");

// 移除伪类:before
/*新增伪元素样式,用来覆盖原有的样式 完成图片去掉原先伪元素显示*/

clearBtnLeft.addEventListener("click", () => {
    myLeft.classList.add("myClick");
});
clearBtnRight.addEventListener("click", () => {
    myRight.classList.add("myClick");
});
