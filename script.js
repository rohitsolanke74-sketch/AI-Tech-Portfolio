/* =========================================
   MOSKO — INTERACTIONS
========================================= */


/* =========================================
   CURSOR GLOW
========================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (event) => {

    if (!cursorGlow) return;

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});



/* =========================================
   NAVBAR
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================
   SMOOTH NAVIGATION
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });



/* =========================================
   FEEDBACK
========================================= */

function sendFeedback() {

    const feedbackBox =
        document.getElementById(
            "feedbackMessage"
        );


    if (!feedbackBox) return;


    const message =
        feedbackBox.value.trim();


    if (message === "") {

        alert(
            "Please write your feedback first."
        );

        feedbackBox.focus();

        return;

    }


    window.open(
        "https://www.instagram.com/_rohit_1949/",
        "_blank"
    );

}



/* =========================================
   PROJECT CARD TILT
========================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth < 800) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const rotateX =
                ((y / rect.height) - 0.5) * -4;


            const rotateY =
                ((x / rect.width) - 0.5) * 4;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-7px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});



/* =========================================
   YEAR
========================================= */

console.log(
    "MOSKO — Creative Digital Studio"
);
