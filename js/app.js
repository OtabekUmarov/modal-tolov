let btns = document.querySelectorAll('.btn')
let productCount = 0
let mainPage = document.querySelector('.modal3 .main')
let circle = document.getElementById('circle')
let val = document.querySelector('.val')


btns.forEach(btn => {
  btn.addEventListener('click', ()=>{
    let page = btn.getAttribute('data-page')
    if(page == 'modal4') {
      circle.classList.add('active')
      val.style.display = 'none'
      setTimeout(() => {
        document.querySelector('.modal.active').classList.remove('active')
        document.querySelector('.'+page).classList.add('active')
        circle.classList.remove('active')
        val.style.display = 'block'
      }, 1500);
    }
    else {
      document.querySelector('.modal.active').classList.remove('active')
      document.querySelector('.'+page).classList.add('active')
    }
    if (page == 'modal3') {
      productCount = document.querySelector('.modal2 input:checked').value
      show(productCount)
    }
  })
})


function show(count){
  mainPage.innerHTML = ''
  for (let i = 0; i < count; i++) {
    mainPage.innerHTML +=
    `
    <div class="item">
    <div class="title">Product ${i+1} <img src="img/clear.png" alt=""></div>
    <label>
    <div class="mtitle">Enter main keyword for the product</div>
    <input type="text" placeholder="for example, sylicon wine cup">
    </label>
    </div>
    <div class="item">
    <label>
          <div class="mtitle">Enter link to the similar product as a reference</div>
          <input type="text" placeholder="https://...">
          </label>
          </div>
          `
        }
      }
      
      
let product = document.querySelector('.product')
var a = 2
function add(){
  product.innerHTML += `
  <div class="item">
  <div class="title">Product ${a}</div>
  <label>
    <div class="mtitle">Enter main keyword for the product</div>
    <input type="text" placeholder="for example, sylicon wine cup">
  </label>
</div>
<div class="item">
  <label>
    <div class="mtitle">Enter link to the similar product as a reference</div>
    <input type="text" placeholder="https://...">
  </label>
</div>
  `
  a++
}