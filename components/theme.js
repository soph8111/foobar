"use strict";

//Vælger temaet efter slider
export function theme(){
    setTheme('theme-blue');
        document.querySelector("input[type=checkbox]").addEventListener("change", e => {
            if (localStorage.getItem('theme') === 'theme-blue') {
                        setTheme('theme-light');
                    } else {
                        setTheme('theme-blue');
                    }
        });
    }

// Sætter temaet
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    console.log(themeName);
}
