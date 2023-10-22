class Map {
    path = ""

    constructor(path) {
        this.path = path
    }

    createElement(node) {
        const mapWarningElement = document.createElement("div")
        mapWarningElement.classList.add("map-warning")

        const mapWarningTextElement = document.createElement("p")
        mapWarningTextElement.appendChild(document.createTextNode("Ce site internet utilise la fonctionnalité \"intégration de carte\" créée par Google Maps. Pour la voir s'afficher, vous devez consentir à l'utilisation de cookies par Google. Pour plus d'informations, consultez "))

        const googlePolicyElement = document.createElement("a")
        googlePolicyElement.setAttribute("href", "https://policies.google.com/privacy")
        googlePolicyElement.setAttribute("target", "_blank")
        googlePolicyElement.appendChild(document.createTextNode("la politique de confidentialité de Google"))

        mapWarningTextElement.appendChild(googlePolicyElement)
        mapWarningTextElement.appendChild(document.createTextNode("."))

        const mapActivatorElement = document.createElement("span")
        mapActivatorElement.classList.add("map-activator", "top-separator")
        mapActivatorElement.appendChild(document.createTextNode("Activer la prévisualisation de la carte"))

        mapActivatorElement.addEventListener("click", () => {
            node.innerHTML = ""

            const mapElement = document.createElement("iframe")
            mapElement.classList.add("map")
            mapElement.setAttribute("src", this.path)

            node.appendChild(mapElement)
            node.classList.add("active")
        })

        mapWarningElement.appendChild(mapWarningTextElement)
        mapWarningElement.appendChild(mapActivatorElement)

        node.appendChild(mapWarningElement)
    }

}
