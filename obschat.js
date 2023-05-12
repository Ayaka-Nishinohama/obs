$(".MuiButtonBase-root").on("click", function () {
    $(".MuiList-root>div:nth-child(1)").animate({
	opacity: 0,
	transform: translateX(150px);
    },
    2000
	);
});
