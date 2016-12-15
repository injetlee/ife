$(function(){
	$(".left .first-folder .second-folder .dt").toggle(function(){
		//alert('a');
		$(this).children("dd").toggle();
	},function(){
		//alert('b')
		$(this).children("dd").toggle();
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