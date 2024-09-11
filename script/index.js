import { menu } from "./products.js";

const observer = new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  })
},{
  root:null,
  rootMargin:'0px',
  threshold:0.5
})

let boxes = document.querySelectorAll('.box');
boxes.forEach(box=> {
  observer.observe(box);
})
window.addEventListener("DOMContentLoaded", function () {
  renderItem(menu)
  creatMenuBtn()
});

console.log(menu)

let menu__container = document.querySelector('.menu-container');
let menuCard = '';


function renderItem(menuItems){
      menuItems.forEach(item => {
        menuCard += `
            <div class="col-md-3 col-sm-12 col-lg-3 border border-line menu-item p-1 m-1">
                <div class="align-item-center justify-content-center d-flex p-1">
                    <img src='${item.img}' height="150px" class="border border-3 border-info">
                </div>
                <div>
                    <h3>${item.title}</h3>
                    <hr>
                </div>
                <div class="mt-0">
                    <p>${item.desc}</p>
                    <p class="btn btn-outline-info">Add to cart</p>
                </div>
            </div>
        `;
    });
    
    menu__container.innerHTML = menuCard;
}

let categoryType = []

menu.forEach(item=>{
  if(!categoryType.includes(item.category)){
    categoryType.push(item.category);
  }
})

console.log(categoryType);

let categoryBtnList = ''
let menuBtnContainer = document.querySelector('.menu-btn-container')

function creatMenuBtn(){
  categoryType.forEach(category=>{
      categoryBtnList += `
                          <div class="col-md-2 ">
                            <a href="#"><img src="icons/item_menu1.png" alt="items"/></a>
                            <p class="text-line text-center btn btn-info cat-btn" data-category-type='${category}'>${category}</p>
                          </div>
                        `
  })
  menuBtnContainer.innerHTML = categoryBtnList
}



