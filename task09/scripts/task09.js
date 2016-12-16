$(function(){
	$(".left .first-folder .second-folder .dt span").toggle(function(){
		//alert('a');
		$(this).children("i:first-child").attr("class","fa fa-chevron-down fa-fw");
		$(this).siblings("dd").toggle();
	},function(){
		//alert('b')
		$(this).children("i:first-child").attr("class","fa fa-chevron-right fa-fw");
		$(this).siblings("dd").toggle();
	});

});
$(function(){
	$(".left .first-folder .av").toggle(function(){
		$(this).siblings().toggle();

	},function(){
		$(this).siblings().toggle();
	})
})
// $(function){
// 	$(".left").css("color","#bbffaa")
// }

// $(function(){
// 	alert('world')
//     var $comment = $('.circle');
//     $(".left").click(function(){
//         if($comment.height()<500){
//             $comment.height($comment.height()+50);
//         }
//     })
// })~