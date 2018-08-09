function getUrlParams(search) {
  let hashes = search.slice(search.indexOf('?') + 1).split('&')
  let params = {}
  hashes.map(hash => {
      let [key, val] = hash.split('=')
      params[key] = decodeURIComponent(val)
  })

  return params
}

console.log(getUrlParams(window.location.search).ticker)
