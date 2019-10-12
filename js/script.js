// Carousel Interface
$(document).ready(function(){
    $('.carousel').carousel({
      interval: 1000
      })
    });
  
  
  
  //Business Interface
  function ShowSummary(getSize,getCrust,getTopping){                                                                                             
      this.size = getSize;
     this.crust = getCrust;
      this.topping = getTopping;
  }
  ShowSummary.prototype.totalSummary=function(){
     return this.getsize + "" + this.getcrust + " " + this.getTopping;
  }
  var sizes= ["small", "medium", "large","x-large"]
  $(document).ready(function(){
   var Amount = 0;
   $("#order").click(function(){
     var checkVal = $("input[name=Yes]:checked").val();
     if(checkVal === "yes") {
       Amount = 400;
       var getLocation = prompt("What is your location?");
       alert("Dear customer your order will be delivered at " +  getLocation  +  "  you will pay an extra 400 Ksh for delivery fee.");
     }
   })
  
   //User Interface
   $("#order").click(function(){
     var Size = parseFloat(document.getElementById("size").value);
     var Crust = parseFloat(document.getElementById("crust").value);
     var Topping = parseFloat(document.getElementById("topping").value);
     var Quantity = parseFloat(document.getElementById("num").value);
     var Total = ((Size + Crust + Topping) * Quantity + Amount);
     alert("You will pay " + Total + " Ksh amount of money.")
     document.getElementById("getsize").innerHTML = Size;
     document.getElementById("getcrust").innerHTML = Crust;
     document.getElementById("gettopping").innerHTML = Topping;
     document.getElementById("sum").innerHTML = Total;
     $(".the-order").show();
    
   });
  });
  