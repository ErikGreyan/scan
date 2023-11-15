"use strict";

window.addEventListener("load", () => {

    const button = document.getElementById("button");
    button.addEventListener("click", () => {
        const img = document.querySelector(".img");
        const input = document.querySelector(".url");
        const error = document.querySelector(".error");
        const errorButton = document.getElementById("error_button");

        if (input.value.length > 0) {
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
            img.classList.remove("hidden");
        } else {
            error.classList.add("active");
        }

        errorButton.addEventListener("click", () => {
            error.classList.remove("active");
        });
    });
});