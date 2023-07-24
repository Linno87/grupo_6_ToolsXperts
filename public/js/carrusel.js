/* 
window.addEventListener("load", function () {
    new Glider(document.querySelector(".glider"), {
        slidesToShow: 1,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        draggable: true,
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 768,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    duration: 0.90,
                    itemWidth: 50,

                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    duration: 0.25,


                }
            }
        ]
    });
});
new Glider(document.getElementById("related-products").querySelector(".glider"), {

    slidesToShow: 2.5,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    draggable: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                duration: 0.90,
                itemWidth: 50,
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                duration: 0.25,
            }
        }
    ]
});
      new Glider(document.querySelector('.glider'), {
     slidesToScroll: 1,
     slidesToShow: 5.5,
     draggable: true,
     dots: '.dots',
     arrows: {
         prev: '.glider-prev',
         next: '.glider-next'
     }
 }); 
 */