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

let menu__container = document.querySelector('.menu-container');

function renderItem(menuItems){
      let menuCard = '';
      menuItems.forEach((item,index) => {
        menuCard += `

            <div class=" col-lg-3 col-md-3 col-sm-12  border border-line menu-item p-1 m-1 animate__animated animate__fade">
                <div class="card">
                  <img src="${item.img}" alt="images" class="card-img-top" height="250px"/>
                  <div class="card-body">
                    <h3 class="text-center">${item.title}</h3>
                    <p class="text-center">${item.desc}</p>
                    <div class="d-flex justify-content-center">
                      <button type="button" class="btn bg-line">Add to Card</button>
                    </div>
                  </div>
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

let categoryBtnList = ''
let menuBtnContainer = document.querySelector('.menu-btn-container')

function creatMenuBtn(){
  categoryType.forEach(category=>{
      categoryBtnList += `
                          <div class="col-md-2 d-flex flex-column">
                            <a href="#" class="my-2"><img src="icons/item_menu1.png" alt="items" style="width:80px;aspect-ratio:1;margin-inline:30%;"/></a>
                            <p class="text-line text-center btn btn-info cat-btn" data-category-type='${category}'>${category}</p>
                          </div>
                        `;
  })
  menuBtnContainer.innerHTML = categoryBtnList

  const catBtns = document.querySelectorAll('.cat-btn')

catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        menu__container.innerHTML = " ";
        let btnCategory = btn.getAttribute('data-category-type');
        const filteredMenu = menu.filter(item => item.category === btnCategory);
        renderItem(filteredMenu);  
    });
});

}

window.onload = function () {
  const defaultCategory = categoryType[0]; 
  const defaultMenu = menu.filter(item => item.category === defaultCategory);
  renderItem(defaultMenu);
}
  


