//*Form toggleMenu();
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
//*End Form toggleMenu();


//*Form toggleContact();
function toggleContact() {
    const toggleContact = document.querySelector(".toggleContact");
    const contactMenu = document.querySelector(".contactMenu");
    toggleContact.classList.toggle("c-active");
    contactMenu.classList.toggle("c-active");
}
//*End Form toggleContact();

//*Swiper Slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});
//*Swiper Slider end
