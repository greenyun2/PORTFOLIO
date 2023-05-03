const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;
let i = 0;

// Main Page Article
for(let el of lists) {
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  i++;
};

/* 회전액션 */
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0;

prev.addEventListener("click", () => {
  num++;
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active == 0) ? active = len : active--;
  activation(active, lists)
})

next.addEventListener("click", () => {
  num--;
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active == len) ? active = 0 : active++;
  activation(active, lists)
});

/* 가운데 있는 패널 활성화 */
let active = 0;

function activation(index, lists) {
  for(let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
};

/* 모달 페이지 */
// 모달 창
const allPage = document.querySelector("#figure");
const background = document.querySelector("body")
const modalPage_1 = document.querySelector("#modalPage_1");
const modalPage_2 = document.querySelector("#modalPage_2");
const modalPage_3 = document.querySelector("#modalPage_3");
const modalPage_4 = document.querySelector("#modalPage_4");
// 버튼 역할
const aboutClick = document.querySelector("#aboutP");
const projectClick = document.querySelector("#projectP");
const resumeClick = document.querySelector("#resumeP");
const contactClick = document.querySelector("#contactP");
// 버튼 역할 2
const aboutClick_2 = document.querySelector("#aboutP_2");
const projectClick_2 = document.querySelector("#projectP_2");
const resumeClick_2 = document.querySelector("#resumeP_2");
const contactClick_2 = document.querySelector("#contactP_2");
// 나가기 버튼 역할
const backAbout = document.querySelector("#backAbout");
const backProject = document.querySelector("#backProject");
const backResume = document.querySelector("#backResume");
const backContact = document.querySelector("#backContact");

// About Page
aboutClick.addEventListener("click" , ()=> {
  modalPage_1.classList.add('show');
  allPage.classList.add('show')
  background.classList.add('show')
});

aboutClick_2.addEventListener("click" , ()=> {
  modalPage_1.classList.add('show');
  allPage.classList.add('show')
  background.classList.add('show')
});

backAbout.addEventListener("click", () => {
  modalPage_1.classList.remove('show');
  allPage.classList.remove('show')
});

// Projects Page
projectClick.addEventListener("click" , ()=> {
  modalPage_2.classList.add('show');
  allPage.classList.add('show')
});

projectClick_2.addEventListener("click" , ()=> {
  modalPage_2.classList.add('show');
  allPage.classList.add('show')
});

backProject.addEventListener("click", () => {
  modalPage_2.classList.remove('show');
  allPage.classList.remove('show')
});
// // Skills Page
resumeClick.addEventListener("click" , ()=> {
  modalPage_3.classList.add('show');
  allPage.classList.add('show')
});

resumeClick_2.addEventListener("click" , ()=> {
  modalPage_3.classList.add('show');
  allPage.classList.add('show')
});

backResume.addEventListener("click", () => {
  modalPage_3.classList.remove('show');
  allPage.classList.remove('show')
});

// Contact Page
contactClick.addEventListener("click" , () =>  { 
  modalPage_4.classList.add('show');
  allPage.classList.add('show')
});

contactClick_2.addEventListener("click" , ()=> {
  modalPage_4.classList.add('show');
  allPage.classList.add('show');
});

backContact.addEventListener("click", () => {
  modalPage_4.classList.remove('show');
  allPage.classList.remove('show')
});

// Slider 
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 600;
let slideMargin = 50;


slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px"

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + "px"
  currentIdx = num;
}

nextBtn.addEventListener("click", () => {
  if(currentIdx < slideCount - 3) {
    moveSlide(currentIdx + 1);
    console.log(currentIdx)
  } else {
    moveSlide(0)
  }
});

prevBtn.addEventListener("click", () => {
  if(currentIdx > 0) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 3)
  }
});

/* Project Page */
const works_1 = document.getElementById("works_1");
const works_2 = document.getElementById("works_2");
const works_3 = document.getElementById("works_3");
const works_4 = document.getElementById("works_4");
const works_5 = document.getElementById("works_5");
const works_6 = document.getElementById("works_6");
const works_7 = document.getElementById("works_7");
const works_8 = document.getElementById("works_8");

works_1.addEventListener("click", (e) => {
  e.preventDefault();
  works_1.style.opacity = 0;
  works_1.style.transform = "translateY(-20px)"

  setTimeout(() => {
    window.location.href = works_1.href;
  }, 300);
});

works_2.addEventListener("click", (e) => {
  e.preventDefault();
  works_2.style.opacity = 0;
  works_2.style.transform = "translateY(-20px)"

  setTimeout(() => {
    window.location.href = works_2.href;
  }, 300);
});

works_3.addEventListener("click", (e) => {
  e.preventDefault();
  works_3.style.opacity = 0;
  works_3.style.transform = "translateY(-20px)"

  setTimeout(() => {
    window.location.href = works_3.href;
  }, 200);
});

works_4.addEventListener("click", (e) => {
  e.preventDefault();
  works_4.style.opacity = 0;
  works_4.style.transform = "translateY(-20px)"

  setTimeout(() => {
    window.location.href = works_4.href;
  }, 300);
});

works_5.addEventListener("click", (e) => {
  e.preventDefault();
  works_5.style.opacity = 0;
  works_5.style.transform = "translateY(-20px)"

  setTimeout(() => {
    window.location.href = works_5.href;
  }, 300);
});

works_6.addEventListener("click", (e) => {
  e.preventDefault();
  works_6.style.opacity = 0;
  works_6.style.transform = "translateY(-20px)"

  setTimeout(() => {
    window.location.href = works_6.href;
  }, 300);
});

works_7.addEventListener("click", (e) => {
  e.preventDefault();
  works_7.style.opacity = 0;
  works_7.style.transform = "translateY(-20px)"

  setTimeout(() => {
    window.location.href = works_7.href;
  }, 300);
});
