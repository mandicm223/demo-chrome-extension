var data = []

function getData() {
  chrome.storage.local.get(['data'], function (result) {
    data = result.data || []
    renderCards(data)
  })
  // getInitialData()
}

function getInitialData() {
  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse,
  ) {
    if (message.command == 'reset') {
      chrome.storage.local.clear(function () {
        var error = chrome.runtime.lastError
        if (error) {
          console.error(error)
        }
        // do something more
      })
    } else if (message.command == 'options') {
      chrome.storage.local.get(['data'], function (result) {
        data = result.data || []
        renderCards(data)
      })
    }
  })
}

const cardsContainer = document.getElementById('container')

function renderCard(domainName, favicon, timestamp, url) {
  const card = document.createElement('div')
  card.classList.add('card')

  const faviconImg = document.createElement('img')
  faviconImg.src = favicon

  const contentD = document.createElement('div')
  card.classList.add('content')

  const urlD = document.createElement('div')
  card.classList.add('url')

  const domainNameP = document.createElement('p')
  domainNameP.textContent = domainName

  const urlA = document.createElement('a')
  urlA.textContent = url
  urlA.href = '#'

  const timestampP = document.createElement('p')
  const date = new Date(timestamp)
  timestampP.textContent = `Visited on: ${date.toLocaleString()}`

  contentD.appendChild(domainNameP)
  contentD.appendChild(timestampP)
  urlD.appendChild(urlA)
  card.appendChild(faviconImg)
  card.appendChild(urlD)
  card.appendChild(contentD)

  cardsContainer.appendChild(card)
}

function renderCards(data) {
  for (let i = 0; i < data.length; i++) {
    const { domainName, favicon, timestamp, url } = data[i]
    renderCard(domainName, favicon, timestamp, url)
  }
}

// function removeCards() {
//   const cards = document.querySelectorAll('.card')
//   .forEach((card) => {
//     card.remove()
//   })
// }

// Render the example data

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.command == 'options') {
//      data = message.data || []
//          renderCards(data)
//   }

//   if (message.command == 'reset') {
//      resetData = message.resetData
//     renderCards(resetData)
//   }
// })

getData()
getInitialData()
