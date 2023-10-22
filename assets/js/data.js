class Data {

    static async getResponse(path) {
        return await fetch("https://raw.githubusercontent.com/GiteSabotDeVenus/data/main/" + path, {headers: new Headers()})
    }

    static async getJSON(path) {
        return await (await this.getResponse(path)).json()
    }

    static async getText(path) {
        return await (await this.getResponse(path)).text()
    }

}

class DataPaths {
    static RESERVATIONS = "reservations.json"
    static UPDATES = "updates.json"
    static NEWS = "news.json"
}
