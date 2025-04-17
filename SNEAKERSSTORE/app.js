const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title:"Air Force",
        price: 156,
        colors: [
            {
                code:"black",
                img:"./img/Product/air.png",
            },
            {
                code:"darkblue",
                img:"./img/Product/img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title:"Air Jorden",
        price: 105,
        colors: [
            {
                code:"lightgray",
                img:"./img/Product/jordan.png",
            },
            {
                code:"green",
                img:"./img/Product/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title:"Blazer",
        price: 119,
        colors: [
            {
                code:"pink",
                img:"./img/Product/blazer.png",
            },
            {
                code:"yellow",
                img:"./img/Product/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title:"Crater",
        price: 128,
        colors: [
            {
                code:"black",
                img:"./img/Product/crater.png",
            },
            {
                code:"white",
                img:"./img/Product/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title:"Hippie",
        price: 205,
        colors: [
            {
                code:"orange",
                img:"./img/Product/hippie.png",
            },
            {
                code:"yellow",
                img:"./img/Product/hippie2.png",
            },
        ],
    },
    {
        id: 6,
        title:"Adidas",
        price: 241,
        colors: [
            {
                code:"silver",
                img:"./img/Product/shoes1.png",
            },
            {
                code:"teal",
                img:"./img/Product/shoes6.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change texts of choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener ("click", () => {
    currentProductSizes.forEach((size) => {
    size.style.backgroundcolor = "white";
    size.style.color - "black";
    });
    size.style.backgroundColor - "black";
    size.style.color - "white";
    });
});

    const productButton = document.queryselector (".productButton"); 
    const payment = document.querySelector (".payment");
    const close = document.queryselector(".close");
    
    productButton.addEventListener ("click", () => { 
        payment.style.display = "flex";
    });

    close.addEventListener ("click", () =>{
      payment.style.display = "none";
    });
    
