class Reservations {
    reservations = {}

    constructor(reservations) {
        this.reservations = reservations
    }

    getReservedDays(year, month) {
        year = year.toString()
        month = month.toString()

        if (!Object.keys(this.reservations).includes(year)) {
            return []
        }

        const months = this.reservations[year]
        if (!Object.keys(months).includes(month)) {
            return []
        }

        return months[month]
    }

    static async generate() {
        return new Reservations(await Data.getJSON(DataPaths.RESERVATIONS))
    }

}
