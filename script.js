//JQuery
const $boxes = $(".box");

$(window).on("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = $(window).height() / 5 * 4;
    console.log(triggerBottom);

    $boxes.each(function () {
        const boxTop = $(this).offset().top - $(window).scrollTop();

        if (boxTop < triggerBottom) {
            $(this).addClass("show");
        } else {
            $(this).removeClass("show");
        }
    });
}

//Vanilla JS

// const boxes = document.querySelectorAll(".box")

// window.addEventListener("scroll", checkBoxes)

// checkBoxes()

// function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5 * 4;
//     console.log(triggerBottom)

//     boxes.forEach(box => {
//         const boxTop = box.getBoundingClientRect().top

//         if (boxTop < triggerBottom) {
//             box.classList.add("show")
//         } else {
//             box.classList.remove("show")
//         }
//     })
// }