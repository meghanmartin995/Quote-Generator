const quoteTag = document.querySelector("h1")
const authorTag = document.querySelector("p")
const randomTag = document.querySelector("footer img")
const bodyTag = document.querySelector("body")

const getQuote = () => {
fetch("https://api.superhi.com/api/test/quotes/random")
  .then(response => response.json())
  .then(jsonData =>  {
    quoteTag.innerHTML = "&ldquo;" + jsonData.quote + "&rdquo;"
    authorTag.innerHTML = "&mdash; " + jsonData.author
  
  if(jsonData.quote.length > 90 ) {
    quoteTag.classList.add("long")
  } else {
    quoteTag.classList.remove("long")
  }
    bodyTag.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 90%)`
  })
}

getQuote()

randomTag.addEventListener("click", function() {
  getQuote()
})
