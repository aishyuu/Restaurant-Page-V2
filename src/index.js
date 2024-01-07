import './style.css'

function site() {
    // main content div selection
    const allContent = document.querySelector("#content");

    // header div creation
    const header = document.createElement("div");
    header.classList.add('header');

    // Content in Header
    const logo = document.createElement("h1");
    logo.classList.add('header-logo');
    logo.textContent = "Yum-Yum!";

    header.appendChild(logo);

    allContent.appendChild(header);
}

site()