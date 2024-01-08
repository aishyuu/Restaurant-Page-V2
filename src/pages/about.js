function aboutPage(contentDiv) {
    const aboutPageDiv = document.createElement("div");
    const test = document.createElement('h1');
    test.textContent = "ABOUT PAGE HERE"

    aboutPageDiv.appendChild(test);
    contentDiv.appendChild(aboutPageDiv)
}

export {aboutPage as default}