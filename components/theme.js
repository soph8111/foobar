// Caroline
"use strict";

//Vælger temaet efter slider
export function theme(){
    //Sætter først temaet til at være blåt som default
    setTheme('theme-blue');
        //Lytter efter om der bliver ændret ved slideren
        document.querySelector("input[type=checkbox]").addEventListener("change", e => {
            //Hvis der bliver klikket på slideren og temaet er blåt
            if (localStorage.getItem('theme') === 'theme-blue') {  
                        //Sæt temeaet til lyst
                        setTheme('theme-light');
                    } else {
                        //Ellers sæt det til blåt
                        setTheme('theme-blue');
                    }
        });
    }

// Sætter temaet
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    //Sætter class name til at være lig temaet
    document.body.className = themeName;
}
