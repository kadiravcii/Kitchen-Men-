const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://i.hizliresim.com/m0b72ba.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

function createbutton(btntext){
  let changePageButtons = document.querySelector('#filter')
  let buttons = document.createElement('button')
  buttons.classList.add("btn", "btn-outline-dark", "btn-item")
  buttons.innerHTML = btntext
  changePageButtons.appendChild(buttons)
  buttons.addEventListener('click',changepage)
}


let butonisimleri = ["All","Korea","China","Japan"]

butonisimleri.forEach(item=>{
  createbutton(item)
})
let contmenü = document.querySelector('.section-center')
// let div1 = document.createElement('div')
// div1.className = 'col-sm-6 row menu-items'
// let div2 = document.createElement('div')
// div2.className = 'col-sm-6 row menu-items'
// contmenü.appendChild(div1)
// contmenü.appendChild(div2)


function changepage(){
  
  if(this.innerHTML == "All"){
    asianmenü(menu)
  }
  else{
    let filteredmenu = menu.filter(item => item.category === this.innerHTML)
    
    asianmenü(filteredmenu)
  }
}
asianmenü(menu)
function asianmenü(filteredmenu){
  contmenü.innerHTML=""
  // div2.innerHTML = ""
  filteredmenu.forEach(item=>{
    let imgdiv = document.createElement('div')
    let img = document.createElement('img')
    imgdiv.className = 'col-sm-2 menu-items'
    img.className = 'photo w-75'
    img.src = item.img
    imgdiv.appendChild(img)
    let textdiv = document.createElement('div')
    textdiv.className = 'col-sm-4'
    let h4div = document.createElement('h4')
    h4div.classList.add('menu-title')
    let spanprice = document.createElement('span')
    spanprice.className = 'price'
    let pdiv = document.createElement('p')
    pdiv.className ='menu-info'
    h4div.innerHTML = item.title
    spanprice.innerHTML = item.price
    pdiv.innerHTML = item.desc
    h4div.appendChild(spanprice)
    textdiv.appendChild(h4div)
    textdiv.appendChild(pdiv)
    // if(item.id % 2 == 1){
    //     div1.appendChild(imgdiv)
    //     div1.appendChild(textdiv)
    // }
    // else {
    //   div2.appendChild(imgdiv)
    //   div2.appendChild(textdiv)
    //   let bosluk = document.createElement('div')
    //     bosluk.className = 'bosluk-sağ '
    //     div1.appendChild(bosluk)
    // }
    contmenü.appendChild(imgdiv)
    contmenü.appendChild(textdiv)
    // let bosluk = document.createElement('div')
    //     bosluk.className = 'bosluk'
    //     contmenü.appendChild(bosluk)

    
  })
}