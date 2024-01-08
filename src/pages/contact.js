function contactPage(contentDiv) {
    const contactPageDiv = document.createElement("div");
    const test = document.createElement('h1');
    test.textContent = "CONTACT PAGE HERE"

    contactPageDiv.appendChild(test);
    contentDiv.appendChild(contactPageDiv)
}

export {contactPage as default}