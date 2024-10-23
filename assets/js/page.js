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
                    <p>> <a href="/">Retour à l'accueil</a></p>`
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

const onLoaded = []

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

        const usefulHeaderPartElement = document.createElement("div")
        usefulHeaderPartElement.classList.add("header")

        const titleElement = document.createElement("h1")
        titleElement.classList.add("header-title")
        titleElement.innerText = globalTitle

        const menuActivatorElement = document.createElement("h1")
        menuActivatorElement.classList.add("menu-activator")
        menuActivatorElement.appendChild(document.createTextNode("≡ Menu"))
        menuActivatorElement.addEventListener('click', () => {
            menuElement.classList.toggle('active')
        })

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

        const cloudsElement = document.createElement("div")
        cloudsElement.classList.add("clouds")

        usefulHeaderPartElement.appendChild(titleElement)
        usefulHeaderPartElement.appendChild(menuActivatorElement)
        usefulHeaderPartElement.appendChild(menuElement)

        headerElement.appendChild(usefulHeaderPartElement)
        headerElement.appendChild(cloudsElement)

        const containerElement = document.createElement("div")
        containerElement.classList.add("body-container")

        const headerAndPageContainerElement = document.createElement("div")
        headerAndPageContainerElement.classList.add("page-and-header-container")

        const pageContainerElement = document.createElement("div")
        pageContainerElement.classList.add("page-container")
        pageContainerElement.innerHTML = this.body;

        const footerElement = document.createElement("footer")

        const mountainsElement = document.createElement("div")
        mountainsElement.classList.add("mountains")

        const footerItemsElement = document.createElement("div")
        footerItemsElement.classList.add("footer-items")

        for (const footerItem of footer) {
            const footerItemElement = document.createElement("div")
            footerItemElement.classList.add("footer-item")

            const footerItemTitleElement = document.createElement("h1")
            footerItemTitleElement.appendChild(document.createTextNode(footerItem.title))

            const footerItemContentElement = document.createElement("div")
            footerItemContentElement.innerHTML = footerItem.content.replace("{TITLE}", this.title)

            footerItemElement.appendChild(footerItemTitleElement)
            footerItemElement.appendChild(footerItemContentElement)

            footerItemsElement.appendChild(footerItemElement)
        }

        footerElement.appendChild(mountainsElement)
        footerElement.appendChild(footerItemsElement)

        headerAndPageContainerElement.appendChild(headerElement)
        headerAndPageContainerElement.appendChild(pageContainerElement)

        containerElement.appendChild(headerAndPageContainerElement)
        containerElement.appendChild(footerElement)

        document.body.appendChild(containerElement)

        for (const func of onLoaded) {
            func()
        }
    }

}
