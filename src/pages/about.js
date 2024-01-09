function aboutPage(contentDiv) {
    // Creating about page div
    const aboutPageDiv = document.createElement("div");
    aboutPageDiv.classList.add("page", "about-page");

    // Creating image header div
    const imageHeaderDiv = document.createElement("div");
    imageHeaderDiv.classList.add("about-page-img-header")

    // Creating About Us Header Text
    const aboutH = document.createElement("h1");
    aboutH.classList.add('about-page-header');
    aboutH.textContent = "About Us";

    // Creating About Us Inner Text
    const aboutText = document.createElement("p");
    aboutText.classList.add('about-page-text');
    aboutText.textContent = "Pizzanista! brings seditiously delicious pizza to Southern California; made from fresh, locally-sourced ingredients. Founded in October 2010 by legendary professional skateboarder Salman Agah, Pizzanista! blends the historic flavor and thin-crust style of New York pizza with California’s abundance of fresh produce and small-batch ingredients. Family owned and operated, Pizzanista! features traditional hand-tossed pizza dough made fresh daily using 200-year old sourdough cultures from Naples, hand-milled marinara sauce made from California tomatoes, innovative pizza toppings, and farm-fresh salads. Dine-in, take-out, delivery, and pizza by the slice are available.\n\nStay tuned for more upcoming guest chef nights and culinary/artistic collaborations. Pizzanista! looks forward to serving you!"

    aboutPageDiv.appendChild(imageHeaderDiv);
    aboutPageDiv.appendChild(aboutH);
    aboutPageDiv.appendChild(aboutText);
    contentDiv.appendChild(aboutPageDiv);
    
}

export {aboutPage as default}