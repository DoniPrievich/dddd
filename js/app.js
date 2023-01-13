gsap.registerPlugin(ScrollTrigger);
// 0

function gsapSlide() {
    $(window).resize(function () {
        var window_width = $(window).width();
        if (window_width > 850) {
            gsap.to('.stroke4_content__left', {
                scrollTrigger: {
                    trigger: '.stroke4_content_right_block1',
                    start: "top bottom",
                    // markers:true,
                    scrub: true
                },
                background: "red",

            })
            // 1
            gsap.to('.stroke4_content__left', {
                scrollTrigger: {
                    trigger: '.stroke4_content_right_block1',
                    start: "bottom 50%",
                    // markers:true,
                    scrub: true
                },
                background: "red",

            })

            //2
            gsap.to('.stroke4_content__left', {
                scrollTrigger: {
                    trigger: '.stroke4_content_right_block2',
                    start: "bottom 50%",
                    scrub: true
                },
                background: "green",

            })
            //3
            gsap.to('.stroke4_content__left', {
                scrollTrigger: {
                    trigger: '.stroke4_content_right_block3',
                    start: "bottom 50%",
                    scrub: true
                },
                background: "blue",

            })
            //4
            gsap.to('.stroke4_content__left', {
                scrollTrigger: {
                    trigger: '.stroke4_content_right_block4',
                    start: "bottom 50%",
                    scrub: true
                },
                background: "gold",

            })
            //5
            gsap.to('.stroke4_content__left', {
                scrollTrigger: {
                    trigger: '.stroke4_content_right_block5',
                    start: "bottom 50%",
                    scrub: true
                },
                background: "black",

            });

        }
    })
}
gsapSlide()



// swipper//////////////////////////////
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



//   slider stroke 4///////////

let slideArry = [
    {
        img: "./images/stroke4/slide_1.png",
        title: "among us",
        info: "orem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel illo vitae har neque voluptate ipsam molestias sed quia officia non esse sapiente laborum officiis natus ipsa aperiam doloribus repudiandae"
    },
    {
        img: "./images/stroke4/slide_2.png",
        title: "among us",
        info: "rem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel illo vitae har neque voluptate ipsam molestias sed quia officia non esse sapiente laborum officiis natus ipsa aperiam doloribus repudiandae"
    },
    {
        img: "./images/stroke4/slide_3.png",
        title: "among us",
        info: "orem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel illo vitae har neque voluptate ipsam molestias sed quia officia non esse sapiente laborum officiis natus ipsa aperiam doloribus repudiandae"
    },
]
let body = document.body;

let btnOpen = document.querySelector('.menu_open');
let btnClose = document.querySelector('.nav_left_links__close');
let nav_Menu = document.querySelector('.nav_left_links');
let slid_Idex = 0;

btnOpen.addEventListener('click', () => {
    nav_Menu.classList.add('nav_left_links-active');
    body.classList.add('body-hiddn')
})
btnClose.addEventListener('click', () => {
    nav_Menu.classList.remove('nav_left_links-active');
    body.classList.remove('body-hiddn')
})

window.addEventListener("click", (event) => {
    const data = event.target
    if (data.hasAttribute("data-stroke4_content__left_prev")) {
        if (slid_Idex > 0) {
            slid_Idex--
        } else {
            slid_Idex = slideArry.length - 1
        };
        document.querySelector(".stroke4_content__left__2").style.background = 'url( ' + slideArry[slid_Idex].img + ')'
        console.log(slid_Idex)
        const infoDiv =
            `<div class="stroke4_content_right_block stroke4_content_right_block1" data-stroke4_right_block_2>
                        <h1>${slideArry[slid_Idex].title}</h1>
                        <p>${slideArry[slid_Idex].info}</p>
                        <button class="btn_learMore">связатся с нами <i class="fa-solid fa-arrow-right-long"></i></button>
                    </div>`
        document.querySelector("[data-stroke4_right_block_2]").remove()
        document.querySelector('.stroke4_content__right__2').insertAdjacentHTML("beforeend", infoDiv)

    }
    if (data.hasAttribute("data-stroke4_content__left_next")) {
        if (slid_Idex < slideArry.length - 1) {
            slid_Idex++
        } else {
            slid_Idex = 0
        };
        document.querySelector(".stroke4_content__left__2").style.background = 'url( ' + slideArry[slid_Idex].img + ')'
        console.log(slid_Idex)
        const infoDiv =
            `<div class="stroke4_content_right_block stroke4_content_right_block1" data-stroke4_right_block_2>
                        <h1>${slideArry[slid_Idex].title}</h1>
                        <p>${slideArry[slid_Idex].info}</p>
                        <button class="btn_learMore">связатся с нами <i class="fa-solid fa-arrow-right-long"></i></button>
                    </div>`
        document.querySelector("[data-stroke4_right_block_2]").remove()
        document.querySelector('.stroke4_content__right__2').insertAdjacentHTML("beforeend", infoDiv)

    }

});



// CRM window ////////////////////////

function open__windowCRM() {
    let crmForm__window = document.querySelector('.crmForm__window');
    body.classList.toggle('body-hiddn')
    crmForm__window.style.top = "0%";
    document.querySelector('.crmForm__window_close').addEventListener('click', () => {
        crmForm__window.style.top = "-100%"
        body.classList.remove('body-hiddn')
    })
}

// CRM window ////////////////////////



