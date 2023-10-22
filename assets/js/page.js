const globalTitle = "Les Tines"

const menu = [
    {
        "title": "ACCUEIL",
        "location": "/"
    },
    {
        "title": "LOCALISATION",
        "location": "/location"
    },
    {
        "title": "DESCRIPTION",
        "location": "/description"
    },
    {
        "title": "RÉSERVATION",
        "location": "/reservation"
    },
    {
        "title": "RESSOURCES",
        "location": "/resources"
    },
    {
        "title": "CONTACT",
        "location": "/contact"
    }
]

const footer = [
    {
        "title": "Navigation",
        "content": `<p>Vous consultez la page "{TITLE}"</p>
                    <p><a href="/">> Retour à l'accueil</a></p>`
    },
    {
        "title": "Liens utiles",
        "content": `<p><a href="/legal-notice">Mentions légales</a></p>
                    <p><a href="/sitemap">Plan du site</a></p>`
    },
    {
        "title": "Informations",
        "content": `<p>Pour nous contacter, rendez-vous sur Contact.</p>`
    }
]

class Page {
    title = "..."
    body = "..."

    constructor(title, body) {
        this.title = title
        this.body = body
    }

    build() {
        document.body.innerHTML = ""

        document.title = this.title + " - " + globalTitle

        const headerElement = document.createElement("header")
        headerElement.classList.add("bottom-border")

        const titleElement = document.createElement("h1")
        titleElement.innerText = globalTitle

        const menuElement = document.createElement("div")
        menuElement.classList.add("menu")

        for (const menuItem of menu) {
            const menuItemElement = document.createElement("div")
            menuItemElement.classList.add("menu-item")

            const menuItemAnchorElement = document.createElement("a")
            menuItemAnchorElement.setAttribute("href", menuItem.location)
            menuItemAnchorElement.appendChild(document.createTextNode(menuItem.title))

            menuItemElement.appendChild(menuItemAnchorElement)

            menuElement.appendChild(menuItemElement)
        }

        //const menuActivatorElement = document.createElement("span")
        //menuActivatorElement.classList.add("menu-element")
        //menuActivatorElement.classList.add("menu-activator")
        //menuActivatorElement.appendChild(document.createTextNode("MENU"))

        //menuActivatorElement.addEventListener('click', () => {
        //    menuElement.classList.toggle('active')
        //})

        headerElement.appendChild(titleElement)
        headerElement.appendChild(menuElement)
        //headerElement.appendChild(menuActivatorElement)

        const pageContainerElement = document.createElement("div")
        pageContainerElement.classList.add("page-container")
        pageContainerElement.innerHTML = this.body;

        const footerElement = document.createElement("footer")
        footerElement.classList.add("top-border")

        for (const footerItem of footer) {
            const footerItemElement = document.createElement("div")
            footerItemElement.classList.add("footer-item")

            const footerItemTitleElement = document.createElement("h1")
            footerItemTitleElement.appendChild(document.createTextNode(footerItem.title))

            const footerItemContentElement = document.createElement("div")
            footerItemContentElement.innerHTML = footerItem.content.replace("{TITLE}", this.title)

            footerItemElement.appendChild(footerItemTitleElement)
            footerItemElement.appendChild(footerItemContentElement)

            footerElement.appendChild(footerItemElement)
        }

        document.body.appendChild(headerElement)
        document.body.appendChild(pageContainerElement)
        document.body.appendChild(footerElement)
    }

}
