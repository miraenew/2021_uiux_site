$(document).ready(function(){
    const slider1 = $(".slider").bxSlider({
        controls:false
    });
    $(".sliderWrap .nextBtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".sliderWrap .prevBtn").click(function(){
        slider1.goToPrevSlide();
    });
    const slider2 = $(".slider2").bxSlider({
        controls:false,
        pager:false,
        auto:true 
    });
    $(".slider2Wrap .nextBtn").click(function(){
        slider2.goToNextSlide();
    });
    $(".slider2Wrap .prevBtn").click(function(){
        slider2.goToPrevSlide();
    });
    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class"); // value toggle
        console.log(toggle);
        if( toggle == "toggle"){
            // $(".toggle").addClass("active");
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            // $(".toggle").removeClass("active");
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });
    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });
});