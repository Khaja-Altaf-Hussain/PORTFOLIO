const toggle = document.getElementById("menuToggle");
if (toggle) {
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("noScroll", toggle.checked)
    })
}

const words = ["Web Developer", "Data Analyst", "Java Developer", "Python Developer"]
const typingText = document.getElementById("typingSpan");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay)
        }
    }
};
document.addEventListener("DOMContentLoaded", () => { if (words?.length) type() })


const navlinks = document.querySelectorAll(".navlink");
const content = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navlinks.forEach((l) => {
            if (l === link) {
                link.classList.add("active");
            } else {
                l.classList.remove("active");
            }
        })
        const tabName = link.dataset.tab;
        content.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
        menuToggle.checked=false;
        document.body.classList.remove("noScroll");

    });
});

function downloadResume() {
    window.open("./assets/resume.pdf","_blank")
}