
var sale = 1/100;
var shippingRate = 15.00; 
var fadeTime = 300;

$(document).ready(function(){
	recalculateCart();
	$(".giohang-product-box input").change( function() {
  updateQuantity(this);
});

	$('.giohang-product-box button').click( function() {
  removeItem(this);
});

})



function recalculateCart()
{
  var subtotal = 0;
  var total=0;

  $(".giohang-product-box").each(function () {
    subtotal += parseFloat($(this).find(".product-line-price").text());
  });
  
  total= subtotal-subtotal*sale;
  


	$("#subtotal").text(subtotal);

    $("#total").text(total);

}



function updateQuantity(quantityInput)
{

  var productRow = $(quantityInput).parent().parent().parent();
  var price = parseFloat(productRow.find(".price-new").text());
  var quantity = parseFloat($(quantityInput).val());
  var linePrice = price * quantity;

  productRow.find(".product-line-price").each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice);
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


function removeItem(removeButton)
{
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}