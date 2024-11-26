
var cartcount=0;

$(document).ready(function () {
	// chọn màu sắc product detail
			$(".color-choose .color-circle").click(function(){
				$(".color-choose .color-circle").removeClass("checked");
				$(this).addClass("checked");
			})
	// thong tin chi tiet
			$("#flip").click(function(){
				$("#panel-detail").slideToggle("slow");
				$("#product-fade1").fadeToggle(3000);
				$("#product-fade2").fadeToggle(6000);
			})
	// gio hang
			$(".product-box").click(function(){
				cartcount++;
				$("#cart-count").text(cartcount);
				var scale ="scale(1."+ cartcount/10+")";
				 // animate
				var cart= $("#shopping-card");
				cart.animate({bottom:"200px",opacity: '0'},"slow");
				cart.animate({bottom:"150px",opacity: '1'},20);
				$("#shopping-card").css("transform",scale);

			})

			$(".top-menue .search-tool").click(function(){
				$("#top-menue-seachbar").slideToggle("slow");
				$("#top-menue-seachbar .container").fadeToggle(2000);
			})
	// jquery for menue 
			$(".header .top-menue .menue li").hover(function(){
				$(this).find("ul:first").slideDown(300);
			},
				function(){
				$(this).find("ul:first").hide(200);
				}
			)
})








