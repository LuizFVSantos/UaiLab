const controls = document.querySelectorAll(".control");
let currentItem = 0;
const elements = document.querySelectorAll(".elements");
const maxElements = elements.length;

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");
        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
        if (currentItem >= maxElements) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxElements - 1;
        }
        elements[currentItem].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    });
});