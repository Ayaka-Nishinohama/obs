$(function() {
	
$(".MuiButtonBase-root").on("click", function () {
    $(".MuiList-root").animate({
	opacity: 0,
	transform: translateX(150px);
    },
    2000
	);
});
