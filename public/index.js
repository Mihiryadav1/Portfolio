// portfolio tabbed component
const p_btn = document.querySelector('.portfolio-btn');

const p_btn_item = document.querySelectorAll('.p-btn');
// all button item references
const p_img_ele = document.querySelectorAll('.img-overlay');
//image reference

p_btn.addEventListener('click', (e) => {
  //to get on which button the user is clicking we use target function
  const p_btn_item_clicked = e.target;
  console.log(p_btn_item_clicked);
  p_btn_item.forEach((curele) => curele.classList.remove('p-btn-active'));

  p_btn_item_clicked.classList.add('p-btn-active');


  // to fetch the number from data attribute we use DATASET function
  // with btnNum in front this value has been taken from the html
  const btn_no = p_btn_item_clicked.dataset.btnNum;
  console.log(btn_no);
  const img_active = document.querySelectorAll(`.p-btn--${btn_no}`);
  p_img_ele.forEach((curele) => curele.classList.add("p-img-not-active"));
  img_active.forEach((curele) => curele.classList.remove("p-img-not-active"));

});


//   Swiper JS Library
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500, disableOnInteraction: false,

  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




var scrollEle = document.getElementById('scrollbtn');
window.onscroll = function () {
  scrollfun();
}
function scrollfun() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    scrollEle.style.display = "block";
  }
  else {
    scrollEle.style.display = "none";
  }


}
function topFun() {
  document.body.scrollTop = "0"
  document.documentElement.scrollTop = "0"
  // console.log("hello");

}



//  animate number
const counter_number = document.querySelectorAll(".counter-numbers");
const speed = 10; //range
counter_number.forEach((curele) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curele.dataset.number);
    // console.log(targetNumber);
    const initial_Number = parseInt(curele.innerText)
     console.log(initial_Number);
    //to remove decimal part of number trunc function is used
    const increment_Number = Math.trunc(targetNumber / speed);
     console.log(increment_Number);
    if (initial_Number < targetNumber) {
      curele.innerText = `${initial_Number + increment_Number}+`;
      setTimeout(updateNumber, 100);
    }

  };
  updateNumber();
});


// RESPONSIVE NAVBAR  COMPONENT
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerEle = document.querySelector('.header');

mobile_nav.addEventListener('click', () => {
  headerEle.classList.toggle('active');

})
const myJsMedia = () => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,



    });

  }
  else {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,



    });

  }
}

// media query using JS for carousel
const widthSize = window.matchMedia("(max-width:700px)");
myJsMedia(widthSize);
//attach event listner on state change
widthSize.addEventListener('change', myJsMedia);

