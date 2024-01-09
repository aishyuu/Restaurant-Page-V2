function homePage(contentDiv) {
    // Creating about page div
    const homePageDiv = document.createElement("div");
    homePageDiv.classList.add("page", "home-page")

    // Creating Headline
    const headline = document.createElement('h1');
    headline.textContent = "Join us for your next meal today!"

    homePageDiv.appendChild(headline);

    // Creating Subline
    const subline = document.createElement('p');
    subline.textContent = "You won't regret it"
    homePageDiv.appendChild(subline);

    contentDiv.appendChild(homePageDiv);
}

export {homePage as default}