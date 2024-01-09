import menu from '../assets/data/menuData.json'

function menuPage(contentDiv) {
    const menuPageDiv = document.createElement("div");
    const test = document.createElement('h1');
    test.textContent = "MENU PAGE HERE"
    
    // for (const key in menu) {
    //     const element = menu[key];
    //     for (let index = 0; index < menu[key].length; index++) {
    //         console.log(menu[key][index].name)
    //     }
    // }

    menuPageDiv.appendChild(test);
    contentDiv.appendChild(menuPageDiv)
}

export {menuPage as default}