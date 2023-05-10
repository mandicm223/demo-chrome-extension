var domain = window.location.hostname
domain = domain
  .replace('http://', '')
  .replace('http://', '')
  .replace('www.', '')
  .split(/[/?#]/)[0]

chrome.runtime.sendMessage(
  { command: 'fetch', data: { domain: domain } },
  (response) => {
    for (var key in response.data) {
      var coupon = response.data[key]
      console.log(coupon.code)
    }
    console.log()
  },
)
