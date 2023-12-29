




let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}




let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})






$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        // autoplay: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            


            900: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
});



$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            


            900: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});











