const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
const weekDayNames = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"]

class Calendars {
    calendars = []

    constructor(reservations) {
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()

        for (let month = currentMonth; month < currentMonth + 12; month++) {
            let verifiedMonth = month
            let verifiedYear = currentYear
            if (month > 11) {
                verifiedMonth -= 12
                verifiedYear += 1
            }

            console.log(verifiedMonth)

            this.calendars.push(new Calendar(reservations, verifiedYear, verifiedMonth))
        }
    }

    createElement(node) {
        const calendarsElement = document.createElement("div")
        calendarsElement.classList.add("calendars")

        for (const calendar of this.calendars) {
            calendar.createElement(calendarsElement)
        }

        node.appendChild(calendarsElement)
    }

}

class Calendar {
    name = ""
    days = []

    constructor(reservations, year, month) {
        this.name = monthNames[month] + " " + year

        const maxDay = new Date(year, month, 0).getDate()

        for (let day = 1; day <= maxDay; day++) {
            this.days.push(new Day(reservations, year, month, day))
        }

        let weekDay = 1
        const firstWeekDay = this.days[0].weekDay
        while (weekDay !== firstWeekDay) {
            this.days.unshift(new FakeDay(""))
            weekDay += 1
        }

        while (this.days.length % 7 !== 0) {
            this.days.push(new FakeDay(""))
        }

    }

    createElement(node) {
        const calendarElement = document.createElement("div")
        calendarElement.classList.add("calendar")

        const calendarTitleElement = document.createElement("h4")
        calendarTitleElement.appendChild(document.createTextNode(this.name))

        const calendarContentElement = document.createElement("table")

        const weekDayBarElement = document.createElement("tr")
        for (const weekDayName in weekDayNames) {
            new FakeDay(weekDayName).createElement(weekDayBarElement)
        }

        calendarContentElement.appendChild(weekDayBarElement)

        const bars = []
        while (this.days.length !== 0) {
            bars.push(this.days.splice(0, 7))
        }

        for (const bar of bars) {
            const barElement = document.createElement("tr")

            for (const day of bar) {
                day.createElement(barElement)
            }

            calendarContentElement.appendChild(barElement)
        }

        calendarElement.appendChild(calendarTitleElement)
        calendarElement.appendChild(calendarContentElement)

        node.appendChild(calendarElement)
    }

}

class Day {
    day = 0
    weekDay = 0
    reserved = false
    passed = false

    constructor(reservations, year, month, day) {
        const currentDate = new Date()
        const dayDate = new Date(year, month, day)

        this.day = day
        this.weekDay = dayDate.getDay() === 0 ? 7 : dayDate.getDay()
        this.reserved = reservations.getReservedDays(year, month).includes(day)
        this.passed = currentDate - dayDate >= 0
    }

    createElement(node) {
        const dayElement = document.createElement("td")
        dayElement.classList.add("day")
        if (this.reserved) dayElement.classList.add("reserved")
        if (this.passed) dayElement.classList.add("passed")
        dayElement.appendChild(document.createTextNode(this.day.toString()))

        node.appendChild(dayElement)
    }

}

class FakeDay {
    content = ""

    constructor(content) {
        this.content = content
    }

    createElement(node) {
        const fakeDayElement = document.createElement("td")
        fakeDayElement.appendChild(document.createTextNode(this.content))

        node.appendChild(fakeDayElement)
    }

}


window.addEventListener('load', async () => {
    try {
        const calendarsElement = document.querySelector(".calendars")
        calendarsElement.innerHTML = ""
        new Calendars(await Reservations.generate()).createElement(calendarsElement)
    } catch (exception) {
        console.error(exception)
        const calendarsElement = document.querySelector(".calendars")
        calendarsElement.innerHTML = '<p style="color: #ff0000; font-weight: bold;">Chargement impossible des disponibilités, veuillez réessayer ultérieurement. Si le problème persiste, veuillez <a href="/contact">nous contacter</a>.</p>'
    }

    try {
        const data = await Data.getJSON(DataPaths.UPDATES)
        const date = new Date(data['reservations']*1000)
        document.querySelector(".last-update").innerText = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear() + "."
    } catch (exception) {

    }
})