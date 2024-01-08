function menuPage(contentDiv) {
    const menuPageDiv = document.createElement("div");
    const test = document.createElement('h1');
    test.textContent = "MENU PAGE HERE"

    menuPageDiv.appendChild(test);
    contentDiv.appendChild(menuPageDiv)
}

export {menuPage as default}