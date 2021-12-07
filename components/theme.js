"use strict";

export default function toggleTheme(){
    document.querySelector("input[type=checkbox]").addEventListener("change", e => {
        console.log("hello");
        document.querySelectorAll("fieldset").forEach(field => field.classList.toggle("theme2"));
        document.querySelectorAll("#Group-177 path").forEach(path => path.classList.toggle("theme2"));
    });
}