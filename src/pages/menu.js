import menu from '../assets/data/menuData.json'

function menuPage(contentDiv) {
    const menuPageDiv = document.createElement("div");
    menuPageDiv.classList.add("menu-page")
    
    for (const key in menu) {
        const element = menu[key];
        const menuSectionTitle = document.createElement('h1');
        menuSectionTitle.textContent = key;
        menuSectionTitle.classList.add('menu-section-title')
        menuPageDiv.appendChild(menuSectionTitle)

        const menuSection = document.createElement("div");
        menuSection.classList.add("menu-section")
        for (let index = 0; index < element.length; index++) {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item-div");

            const menuItemTitle = document.createElement("h1");
            menuItemTitle.classList.add("menu-item-title");
            menuItemTitle.textContent = element[index].name;
            menuItem.appendChild(menuItemTitle);

            const menuItemDescription = document.createElement("p");
            menuItemDescription.classList.add("menu-item-description")
            menuItemDescription.textContent = element[index].description;
            menuItem.appendChild(menuItemDescription)

            menuSection.appendChild(menuItem)
        }
        menuPageDiv.appendChild(menuSection)
    }
    contentDiv.appendChild(menuPageDiv)
}

export {menuPage as default}