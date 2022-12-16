//cort
let carritoIcon= document.querySelector('#cart-img');
let cartBox= document.querySelector('.carrito');
let closeCarrito= document.querySelector('#close-cart');

//Open Cart
carritoIcon.onclick=()=>{
  cart.classList.add("active");
};

//Close Cart
claseCarrito.onclick=()=>{
  cart.closeCarrito.remove("active");
};

//Cart Working JS
if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready);
} else{
  ready();
}

function ready(){
  //Remove Item From Cart
  var removeCartButton= document.getElementsByClassName('cart-remove');
  console.log(removeCartButton);
  for (var i=0; i<removeCartButton.length; i++){
    var button=removeCartButton[i];
    button.addEventListener('click', removeCarritoIcon);
  }
  var quantityInput=document.getElementsByClassName('cart-quantity')
  for (var i=0; i<quantityInput.length; i++){
    var input=quantityInput[i]
    input.addEventListener('change', quantityChange);
  }
  //Add to Cart
  var addCart= document.getElementsByClassName('añadido-carrito');
  for (var i=0; i<addCart.length; i++){
    var button= addCart[i]
    button.addEventListener("click", addCartClick);
  }
  document
  .getElementsByClassName('btn-buy')[0]
  .addEventListener('click', buyButtonClicked);
}
function buyButtonClicked(){
  alert('Tu pedido está hecho');
  var cartContent=document.getElementsByClassName('cartContent')[0]
  while(cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

//Reomve Item From Cart
function removeCarritoIcon(event){
  var buttonClicked=event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
//Quantity Changes
function quantityChanges(event){
  var input=event.target;
  if(isNaN(input.event)|| input.value<=0){
    input.value=1;
  }
  updatetotal();
}
//Add to cart
function addCartClick(event){
  var button =event.target;
  var shopProducts=button.parentElement;
  var title= shopProducts.getElementsByClassName('product-title')[0].innerText;
  var prece= shopProducts.getElementsByClassName('prece')[0].innerText;
  var productImg= shopProducts.getElementsByClassName('product-img')[0].src;
  addProductToCart(title, prece, productImg);
  updatetotal();
}
function addProductToCart(title, precie, productImg){
  var cartShopBox= document.createElement("div")
  cartShopBox.classList.add("cartBox");
  var carritoIcon= document.getElementsByClassName("cartBox")[0];
  var carritoIconName=carritoIcon.getElementsByClassName("cart-product-title");
  for (var i =0; i< carritoIconName.length; i++){
    if (carritoIconName[i].innerText==title){
      alert("Ya has añadido este articulo al carrito");
      return;
    }
  }
  var cartBoxContent =
                      `<img sec="${productImg}" alt="" class="cart-img">
                      <div class="detail-box">
                          <div class="cart-product-title">${title}</div>
                          <span class="prece">${precie}</span>
                          <input type="number" value="1" class="cart-quantity">
                      </div>
                      <i class='bx bx-x' id="close-cart"><button>x</button></i>`;
}
cartShopBox.innerHTML=cartBoxContent;
carritoIcon.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCarritoIcon)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', removeCarritoIcon)
cartShopBox
  .getElementsByClassName("cart-remove")[0]
  addEventListener("change", removeCarritoIcon);
cartShopBox
  .getElementsByClassName("cart-quantity")[0]
  .addEventListener("change",quantityChanged);

//Update Total 
function updatetotal(){
  var cartContent=document.getElementsByClassName('cart-content')[0];
  var cartBoxes=cartContent.getElementsByClassName('cartBox');
  var total=0;
  for (var i=0; i< cartBoxes.length; i++){
    var cartBox=cartBoxes[i];
    var preceElement=cartBox.getElementsByClassName('prece')[0];
    var quantityElement=cartBox.getElementsByClassName('cart-quantity')[0];
    var prece= parentFloat(preceElement.innerText.replace("$", ""));
    var quantity=quantityElement.value;
    total=total+prece+quantity;
  }
  //If precie
  total=Math.round(total*100)/100;
  document.getElementsByClassName('total-pecie')[0].innerText='$'+total;
  
}