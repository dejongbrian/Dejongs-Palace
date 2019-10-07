
$(document).ready(function(){
  $('.carousel').carousel({
    interval: 1000
    })
  });
   //User  logic
   $("button#order").click(function(){
       var inputSize = $("select#size").val();
       var inputCrust = $("select#crust").val();
       var inputQuant = $("input#quantity").val();
       var inputToppings = $("input#topp");
       var newPizza = new Pizza(inputSize, inputCrust, inputQuant, inputToppings)
      
       $("p#message").append("Your total will be: Ksh. "+newPizza.getCost()+);
      });