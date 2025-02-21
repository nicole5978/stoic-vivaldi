const quoteContainer = document.querySelector("#quote")
const authorContainer = document.querySelector("#author")

const quote = fetch("https://stoic-quotes.com/api/quote")
  .then((response) => response.json())
  .then((data) => {
    quoteContainer.innerHTML = data.text
    authorContainer.innerHTML = `&mdash; ${data.author}`
  })
