onLoaded.push(() => document.querySelector(".home-background").style.display = "flex")

window.addEventListener("load", async () => {
    new Page(document.title, document.body.innerHTML).build()


    //const news = await News.generate()
    //news.createIndexElements(document.querySelector(".news"))
})
