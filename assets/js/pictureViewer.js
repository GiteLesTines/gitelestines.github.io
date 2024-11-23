class PictureViewer {
    pictures = []
    index = -1

    constructor(pictureContainer, pictureDescription, previousPicture, nextPicture) {
        this.pictureContainer = pictureContainer
        this.pictureDescription = pictureDescription
        previousPicture.addEventListener('click', () => {
            this.next()
        })
        nextPicture.addEventListener('click', () => {
            this.previous()
        })
    }

    addPicture(url) {
        const picture = document.createElement("img")
        picture.classList.add("picture")
        picture.src = url

        if (this.pictures.length === 0) {
            picture.classList.add("current")
            this.index = 0
        }

        this.pictureContainer.appendChild(picture)

        this.pictures.push(picture)
    }

    next() {
        if (this.index < this.pictures.length - 1) {
            this.index++
        } else {
            this.index = 0
        }
        this.updatePicture()
    }

    previous() {
        if (this.index > 0) {
            this.index--
        } else {
            this.index = this.pictures.length - 1
        }
        this.updatePicture()
    }

    updatePicture() {
        for (let index = 0; index < this.pictures.length; index++) {
            this.pictures[index].classList.remove("current")
        }
        this.pictures[this.index].classList.add("current")
    }

}

window.addEventListener('load', async () => {
    const viewer = new PictureViewer(
        document.querySelector(".picture-container"),
        document.querySelector(".picture-description"),
        document.querySelector(".previous-picture"),
        document.querySelector(".next-picture")
    )

    viewer.addPicture("../assets/img/description/Les Tines 1.jpg")
    viewer.addPicture("../assets/img/description/IMG-20240101-WA0019.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231231-WA0018.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231231-WA0011.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231231-WA0008.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231231-WA0007.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231231-WA0003.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231231-WA0002.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231231-WA0001.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231204-WA0010.jpg")
    viewer.addPicture("../assets/img/description/IMG-20231204-WA0006.jpg")
    viewer.addPicture("../assets/img/description/20231231_151242.jpg")
    viewer.addPicture("../assets/img/description/20231231_150106.jpg")
    viewer.addPicture("../assets/img/description/20231231_145919.jpg")
    viewer.addPicture("../assets/img/description/20231231_145914.jpg")
})