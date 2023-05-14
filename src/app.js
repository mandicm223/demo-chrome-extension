var domain = window.location.hostname.split(/[/?#]/)[0]

var web_url = window.location.hostname

var timestamp = formatDate(new Date())

var favicon = faviconURL(domain)

const button = document.createElement('button')
button.className = 'submit_website'
button.textContent = 'Submit'
document.body.appendChild(button)

// const reset_button = document.createElement('button')
// reset_button.className = 'reset_website'
// reset_button.textContent = 'Reset'
// document.body.appendChild(reset_button)

button.addEventListener('click', () => {
  chrome.runtime.sendMessage(
    {
      domainName: domain,
      favicon: favicon,
      url: web_url,
      timestamp: timestamp,
      command: 'options',
    },
    (response) => {
      for (var key in response.data) {
        var coupon = response.data[key]
        console.log(coupon.code)
      }
    },
  )
})

// reset_button.addEventListener('click', () => {
//   chrome.runtime.sendMessage(
//     {
//       command: 'reset',
//       domainName: 'No data available yey',
//       favicon: 'aa',
//       timestamp: 'No data available yey',
//     },
//     (response) => {
//       for (var key in response.data) {
//         var coupon = response.data[key]
//         console.log(coupon.code)
//       }
//     },
//   )
// })

function faviconURL(domain) {
  const url = new URL(
    `https://s2.googleusercontent.com/s2/favicons?domain=${domain}`,
  )
  url.searchParams.set('pageUrl', domain)
  url.searchParams.set('size', '32')
  return url.toString()
}

function formatDate(d) {
  var year = d.getFullYear()
  var month = addLeadingZero(d.getMonth())
  var day = addLeadingZero(d.getDay())
  var hours = d.getHours()
  var minutes = d.getMinutes()
  var seconds = d.getSeconds()
  return (
    year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  )
}

function addLeadingZero(n) {
  return n < 10 ? '0' + n : '' + n
}

// var submitCoupon = function (domain) {
//   console.log('submit coupon', { domain })
//   chrome.runtime.sendMessage(
//     {
//       command: 'post',
//       data: { domain: domain },
//     },
//     (response) => {
//       // submitCoupon_callback(response.data, domain)
//       console.log(response)
//     },
//   )
// }
// /////////////////////////////////////////////////////////////////////////////
