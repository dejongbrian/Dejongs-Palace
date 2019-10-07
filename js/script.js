$(document).ready(function(){
$('.carousel').carousel({
  interval: 1000
  })
});
 
  var pizza=["size","topping","crust","quantity"]
  var size=["small","medium","large","x-large"]
  var topping=["mushrooms","pineapple","olives","bell pepper","ham","chicken pieces"]
  var crust=["Thin & Crispy","Deep Pan","Classic Crust","Cheesy Crust","Gluten free crust"]
  var sizePrice=[0]

function Pizza(topping,size,crust,quantity){
  this.selectedTopping=topping;
  this.selectedSize=size;
  this.selectedCrust=crust;
  this.selectedQuantity=quantity;
}


function sizePrice(topping,size,crust){
  return this.selectedSize + this.selectedTopping + this.selectedCrust  
}



function Total(sizePrice,quantity,delivery){
  this.sizePrice=sizePrice;
  this.selectedQuantity=quantity;
  this.delivery=delivery;
}


//sizePrice//
 pizza.prototype.sizePrice=function(){
   var sizePrice=0;
   if (this.sizePrice==="small"){
     return sizePrice =+1;
   } else if (this.sizePrice==="medium"){
     return sizePrice =+2;
   }else if (this.sizePrice==="large"){
     return sizePrice =+3;
   }else if (this.sizePrice==="x-large"){
     return sizePrice =+4;
   }else{
     return sizePrice =+0;
   }
 }
//pizzaToppings//
pizza.prototype.topping=function(){
  var topping=0;
  if(this.topping==="0"){
    return topping = "mushrooms";
  }else if(this.topping==="1"){
    return topping="pineapple";
  }else if(this.topping==="2"){
    return topping="olives";
  }else if(this.topping==="3"){
    return topping="bell pepper";
  }else if(this.topping==="4"){
    return topping="ham"
  }else if(this.topping==="5"){
    return topping="chicken pieces";
  }else{
    return topping="none";
  }
}
//pizza crust//
pizza.prototype.crust=function(){
  var crust=0;
  if(this.crust==="0"){
    return crust="Thin & Crispy";
  }else if(this.crust==="1"){
    return crust="Deep Pan";
  }else if(this.crust==="2"){
    return crust="Classic Crust";
  }else if(this.crust==="3"){
    return crust="Cheesy Crust";
  }else if(this.crust==="4"){
    return crust="Gluten free crust";
  }else{
    return crust="none;"
  }
}


//user logic//

$(document).ready(function(){
  var selectedtopping =(".topping option:selected").val();
  var selectedsize =(".size option:selected").val();
  var selectedsrust =(".crust option:selected").val();
 
  
});

function order(){
    alert ("Your order is" +"" );
  }




  
