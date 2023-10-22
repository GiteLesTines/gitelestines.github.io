window.addEventListener("load", async () => {
    const news = await News.generate()
    news.createIndexElements(document.querySelector(".news"))
})