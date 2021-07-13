const fetchOptions = {
  baseUrl: 'http://localhost:3003/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
};

const appFetch = (url, method="GET", data) => {
  const fullUrl = fetchOptions.baseUrl + url;
  return fetch(fullUrl, {
    ...fetchOptions,
    method,
    body: JSON.stringify(data)
  })
  .then((res) => {
    // console.log(res)
    if (res.status === 200) {
      return res.json();
    }
  })
  .catch((err) => {
    console.error('ERROR fetching: ', err)
  })
}

export default appFetch;