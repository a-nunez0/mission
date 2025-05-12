const themeSelector = document.querySelector("#theme-selector");
const logo = document.querySelector(".logo");

function changeTheme() {
    const body = document.querySelector("body");

    if (themeSelector.value === "dark") {
        body.classList.add("dark");
        logo.src = "ByuiLogo_white.png";
    }
    else {
        body.classList.remove("dark");
        logo.src = "ByuiLogo.webp";
    }
    
}

themeSelector.addEventListener("change", changeTheme);