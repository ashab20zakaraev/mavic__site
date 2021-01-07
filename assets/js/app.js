$(function(){
    $('.review__slider').slick({
        prevArrow: '<button class="slider__btn slider__btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
        
        nextArrow: '<button class="slider__btn slider__btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
        
        infinite: false,
        slidesToShow: 1
    });
    
    //Fixed Header and Nav toggle
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfset = $(window).scrollTop();
    
    $(window).on("scroll", function(){
        
       scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
 
    });
    
    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH / 2 ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }
    
    $("#menu__btn").on("click", function(event){
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        header.toggleClass("bg");
        $("body").toggleClass("lock");
    });
    
    //Smooth scroll
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 700);
        
        $("#menu__btn").removeClass("active");
        $("#nav").removeClass("active");
        header.removeClass("bg");
        $("body").removeClass("lock");
    });
    
    //Tabs
    
    const tabBtn  = document.querySelectorAll("#ask__tabs-btn");
    const tabText = document.querySelectorAll(".tabs__text");
    
    tabBtn.forEach(function(item) {
        item.addEventListener("click", function() {
            var currentBtn = item;
            var tabId = currentBtn.getAttribute("data-tab");
            var currentTab = document.querySelector(tabId);
            
            if( !currentBtn.classList.contains("open") ) {
                
                tabBtn.forEach(function(item){
                    item.classList.remove("open");
                });

                tabText.forEach(function(item){
                    item.classList.remove("open");
                });

                currentBtn.classList.add("open");
                currentTab.classList.add("open");
            }
            
            
        });
    });
});









