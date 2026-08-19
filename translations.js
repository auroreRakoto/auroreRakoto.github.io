/* -------------------------------- */
/* BACKGROUNDS                      */
/* -------------------------------- */

const home =
    document.querySelector(".home");

const menuItems =
    document.querySelectorAll(".menu-item");


const backgrounds = {

    projects:
        "assets/projects.jpg",

    education:
        "assets/education.jpg",

    journey:
        "assets/journey.jpg",

    experience:
        "assets/experience.jpg",

    events:
        "assets/events.jpg",

    personal:
        "assets/personal.jpg"

};


const defaultBackground =
    "assets/default.jpg";


function changeBackground(image) {

    home.style.backgroundImage = `
        linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
        ),
        url("${image}")
    `;

}


function resetBackground() {

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
        () => {

            resetBackground();

        }
    );

});


/* -------------------------------- */
/* LANGUAGE SYSTEM                  */
/* -------------------------------- */

function setLanguage(language) {

    /*
        Si jamais la langue stockée
        n'existe pas, on revient
        à l'anglais.
    */

    if (!translations[language]) {
        language = "en";
    }


    /*
        Sauvegarde le choix
        dans le navigateur.
    */

    localStorage.setItem(
        "language",
        language
    );


    /*
        Change tous les éléments
        avec data-i18n.
    */

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(element => {

        const key =
            element.dataset.i18n;


        if (
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    /*
        Change le bouton
        de langue.
    */

    const currentLanguage =
        document.getElementById(
            "current-language"
        );


    if (currentLanguage) {

        currentLanguage.textContent =
            languageLabels[language];

    }


    /*
        Indique la langue
        au navigateur.
    */

    document.documentElement.lang =
        language;

}


/* -------------------------------- */
/* LANGUAGE BUTTONS                 */
/* -------------------------------- */

const languageButtons =
    document.querySelectorAll(
        "[data-lang]"
    );


languageButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const language =
                button.dataset.lang;

            setLanguage(language);

        }
    );

});


/* -------------------------------- */
/* LOAD SAVED LANGUAGE              */
/* -------------------------------- */

const savedLanguage =
    localStorage.getItem(
        "language"
    );


if (savedLanguage) {

    setLanguage(savedLanguage);

} else {

    setLanguage("en");

}
