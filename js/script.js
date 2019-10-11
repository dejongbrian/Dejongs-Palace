
// $(document).ready(function(){
//   $('.carousel').carousel({
//     interval: 1000
//     })
//   });
   //User //
   
   function updateTotal($form)
   {
      var total = 0;
      var selectedsize = $form.find('input[name="selectedsize"]:checked').data('price');
      if (!isNaN(selectedsize))
      {
          total += selectedsize;
      }
      var topping=$form.find('input[name="selectedtopping"]:selected').data('price');
      if (!isNaN(selectedtopping))
      {
          total += selectedtopping;
      }
      var selectedcrust = $form.find('select[name="selectedcrust"] option:ckecked').data('price');
      if (!isNaN(selectedcrust))
      {
          total += selectedcrust;
      }
      $form.find('input[name="total"]').val(total);
   }
   $(document).ready(function() {
      $('#sizeform1 input[name="selectedsize"]').change(function () {
          var $form = $(this).closest('form');
          updateTotal($form);
      });
      $('#toppingform1 input[name="selectedtopping"]').change(function (){
          var $form= $(this).closest('form');
          updateTotal($form);
      });
      $('#crustform1 select[name="selectedcrust"]').change(function () {
          var $form = $(this).closest('form');
          updateTotal($form);
      });
   
      $("#deliver").click(function(){
        alert("Your order will be delivered within 40min stay updated will deliver soon")
      })
   });