const result = fetch("https://dummyjson.com/products/category/smartphones")
  .then(function (result) {
    return result.json();
  }) 
  .then(function (result) {
    displayData(result.products);
  }); 

function displayData(arr) {
  arr.forEach(function (item) {
    const cardsArea = document.querySelector(".cards-area");
    const div1 = document.createElement("div");
    div1.classList = "col-md-4 col-sm-12";
    const div2 = document.createElement("div");
    div2.classList = "card-mb-3";
    const img = document.createElement("img");
    img.src = item.images[0];
    img.classList = "card-img-top";
    const div3 = document.createElement("div");
    div3.classList = "card-body";
    const h5 = document.createElement("h5");
    h5.classList = "card-titl";
    h5.innerText = item.title;
    const p2 = document.createElement("p");
    p2.classList = "card-tex p3";
    p2.innerText = item.price;
    const p3 = document.createElement("p");
    p3.classList = "card-tex p2";
    p3.innerHTML = "price:";
    const p4 = document.createElement("p");
    p4.classList = "card-tex p3";
    p4.innerHTML = "$";
    div3.append(h5);
    div3.append(p3);
    div3.append(p2);
    div3.append(p4);
    div2.append(img);
    div2.append(div3);
    div1.append(div2);
    cardsArea.append(div1);

  });
}
    
const country = document.querySelector("#country")
const res = document.querySelector("#res")
const contr = document.querySelectorAll("#contr")
// console.log(contr);
let p =Array(contr).id;
// console.log(p)
Array(country).forEach(contr =>{
  contr.addEventListener('click',()=>{
res.innerHTML=p;
console.log(p);
  }

  )
})


// country.addEventListener('click', () => {
//   res.innerHTML= p
//     }

// )
//  country.addEventListener('click',function(event){
//     countryValue=event.target.value;
//     res.innerHTML = countryValue;
// }
// )





// let searchBox =document.querySelector('.search-box')
// let searchIcon =document.querySelector('#search-icon')

// // searchIcon.click =function(){
// //     searchBox.classList.add('active')
// // }
// searchIcon.addEventListener=('click',()=>{
//         searchBox.classList.toggle("openSearch")
// })