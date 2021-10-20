$(document).ready(function(){
    $(".visual").bxSlider({
        controls:false,
        pager:false
    });
    $(".sponserWrap").bxSlider({
        controls:false,
        pager:false
    });

    if(window.innerWidth > 700){
    $(".mainLi").mouseover(function(){
        $(".subMenu").stop().slideDown();
    });
    $(".mainLi").mouseout(function(){
        $(".subMenu").stop().slideUp();
    });
}else{
    
}


    /////////////////////////////////////
    $(".toggle").click(function(){
        var toggle = $(".toggle").attr("class");

    if( toggle == "toggle"){
        $(".toggle").addClass("active");
        $(".gnb").show();
        $(".gnb").animate({"left":"0"},300);
    }else {
        $(".toggle").removeClass("active");
        $(".gnb").hide();
        $(".gnb").animate({"left":"-100%"},300);
    }
    });
    $(window).resize(function(){
        $(".gnb").attr("style","");
        $(".toggle").removeClass("active");
    });
});