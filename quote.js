const quoteTag = document.querySelector("h1")
const authorTag = document.querySelector("p")
const randomTag = document.querySelector("footer img")

let data = []
const getQuote = () => {
  if (data.length > 0 ) {
    const randomQuote = data[Math.floor(data.length * Math.random())]
    quoteTag.innerHTML = randomQuote.quote
    authorTag.innerHTML = randomQuote.author
  }
}

getQuote()

randomTag.addEventListener("click", function() {
  getQuote()
})
