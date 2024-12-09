'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "全部") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// modal variables
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalNextBtn = document.querySelector("[data-modal-next-btn]");
const modalPreBtn = document.querySelector("[data-modal-pre-btn]");
const projectItem = document.querySelectorAll("[data-project-item]");
// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
// modal toggle function
const projectModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}
// add click event to all modal items
for (let i = 0; i < projectItem.length; i++) {

  projectItem[i].addEventListener("click", function () {
    //modalImg.src = this.querySelector("[data-project-photo]").src;
    let modalImgArr = this.querySelectorAll("[data-project-photo]");
    let modalIndex = 0;
    modalImg.src = modalImgArr[modalIndex].src;
    modalImg.alt = this.querySelector("[data-project-photo]").alt;
    modalTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-project-text]").innerHTML;
    
    modalNextBtn.addEventListener("click", () => {
      modalImg.classList.add("active");
      if( modalIndex < modalImgArr.length-1 ) { modalIndex ++ ; }
      else { modalIndex = 0} ;      
      modalImg.src = modalImgArr[modalIndex].src;
      setTimeout( () => {
        modalImg.classList.remove("active");
      },600)
    });
    modalPreBtn.addEventListener("click", () => {
      modalImg.classList.add("active");
      if( modalIndex > 0 ) { modalIndex -- ; }
      else { modalIndex = modalImgArr.length-1} ;      
      modalImg.src = modalImgArr[modalIndex].src;
      setTimeout( () => {
        modalImg.classList.remove("active");
      },600)
    });

    projectModalFunc();

  });

}
// add click event to modal close button
modalCloseBtn.addEventListener("click", projectModalFunc);
overlay.addEventListener("click", projectModalFunc);


// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}