var domain = window.location.hostname
domain = domain
  .replace('http://', '')
  .replace('http://', '')
  .replace('www.', '')
  .split(/[/?#]/)[0]

chrome.runtime.sendMessage(
  { command: 'fetch', data: { domain: domain } },
  (response) => {
    parseCoupons(response.data, domain)
  },
)

console.log(domain)
