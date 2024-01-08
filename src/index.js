import './style.css'
import aboutPage from './pages/about';
import menuPage from './pages/menu';
import contactPage from './pages/contact';


function pageLoader(contentDiv, activeTab, pageName) {
    if(pageName === activeTab) {
        console.log("Nope, not changing it");
        return pageName;
    }
    
    const pageDiv = document.querySelector('.page-content');
    pageDiv.innerHTML = ""

    switch (pageName) {
        case 'About':
            aboutPage(contentDiv);
            return 'About';
        case 'Menu':
            menuPage(contentDiv);
            return 'Menu';
        case 'Contact':
            contactPage(contentDiv);
            return 'Contact';
        default:
            break;
    }
}

function site() {
    // main content div selection
    const allContent = document.querySelector("#content");

    // header div creation
    const header = document.createElement("div");
    header.classList.add('header');

    // page content creation
    const pageDiv = document.createElement("div");
    pageDiv.classList.add('page-content');
    aboutPage(pageDiv);

    // Content in Header
    const logo = document.createElement("h1");
    logo.classList.add('header-logo');
    logo.textContent = "Yum-Yum-Pizza!";

    header.appendChild(logo);

    allContent.appendChild(header);

    // Tab Header Declaration
    const tabsDiv = document.createElement("div");
    tabsDiv.classList.add('header-tabs')

    // Tab Content
    const tabNames = ['About', 'Menu', 'Contact'];
    let activeTab = 'About';
    for (let index = 0; index < tabNames.length; index++) {
        const tabIndiv = document.createElement('button');
        tabIndiv.classList.add("tab-indiv")
        tabIndiv.textContent = tabNames[index];
        tabsDiv.appendChild(tabIndiv);

        tabIndiv.addEventListener('click', () => {
            activeTab = pageLoader(pageDiv, activeTab, tabNames[index]);
        })
    }

    header.appendChild(tabsDiv);
    allContent.appendChild(pageDiv);
}

site()