let productId1 = 531966267;  
let productId2 = 531966272;  
let productId3 = 531966271;
const container=document.querySelector(".container");
const message=document.querySelector('.message');
const car1=document.querySelector(".box1");
const car2=document.querySelector(".box2");
const car3=document.querySelector(".box3");

function assembleCar() {
container.style.opacity=0;  
message.style.opacity=1;
}

Ecwid.OnCartChanged.add(function() {
    Ecwid.Cart.get(function(cart) {
        if (cart.items.length === 3) {
            assembleCar();
        }
    });
});

car1.onclick=()=>{
    Ecwid.Cart.addProduct(productId1);
};
car2.onclick=()=>
    {
    Ecwid.Cart.addProduct(productId2);
};
car3.onclick=()=>{
    Ecwid.Cart.addProduct(productId3);
};

