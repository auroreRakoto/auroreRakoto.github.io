/* ============================================================ */
/* BACKGROUNDS                                                  */
/* ============================================================ */

const home =
    document.querySelector(
        ".home"
    );


const menuItems =
    document.querySelectorAll(
        ".menu-item"
    );


const backgrounds = {

    projects:
        "/assets/images/home/projects.jpg",

    education:
        "/assets/images/home/education.jpg",

    journey:
        "/assets/images/home/journey.jpg",

    experience:
        "/assets/images/home/experience.jpg",

    events:
        "/assets/images/home/events.jpg",

    personal:
        "/assets/images/home/personal.jpg"

};


const defaultBackground =
    "/assets/images/home/default.jpg";


function changeBackground(image) {

    if (!home) {
        return;
    }


    home.style.backgroundImage = `
        linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
        ),
        url("${image}")
    `;

}


function resetBackground() {

    if (!home) {
        return;
    }


    home.style.backgroundImage = `
        linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
        ),
        url("${defaultBackground}")
    `;

}


menuItems.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            const name =
                item.dataset.bg;


            if (
                name &&
                backgrounds[name]
            ) {

                changeBackground(
                    backgrounds[name]
                );

            }

        }
    );


    item.addEventListener(
        "mouseleave",
        resetBackground
    );

});


/* ============================================================ */
/* LANGUAGE                                                     */
/* ============================================================ */

function setLanguage(language) {

    if (
        typeof translations === "undefined"
    ) {
        return;
    }


    if (!translations[language]) {
        language = "en";
    }


    localStorage.setItem(
        "language",
        language
    );


    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(element => {

        const key =
            element.dataset.i18n;


        const translation =
            translations[language][key];


        if (translation) {

            element.textContent =
                translation;

        }

    });


    const currentLanguage =
        document.getElementById(
            "current-language"
        );


    if (
        currentLanguage &&
        languageLabels[language]
    ) {

        currentLanguage.textContent =
            languageLabels[language];

    }


    document.documentElement.lang =
        language;

}


/* ============================================================ */
/* LANGUAGE BUTTONS                                             */
/* ============================================================ */

const languageButtons =
    document.querySelectorAll(
        "[data-lang]"
    );


languageButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            setLanguage(
                button.dataset.lang
            );

        }
    );

});


/* ============================================================ */
/* INITIAL LANGUAGE                                             */
/* ============================================================ */

const savedLanguage =
    localStorage.getItem(
        "language"
    );


setLanguage(
    savedLanguage || "en"
);