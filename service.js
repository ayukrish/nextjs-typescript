export const service = (reqObj) => {
  let { url } = reqObj;
  const { method = 'get', page } = reqObj;
  if (page) {
    url = `${url}?page=${page}`;
  }
  return fetch(url, {
    method,
  })
    .then((response) => {
      if (response.ok) {
        return response.text().then((res) => JSON.parse(res));
      }
      return response.text().then((res) => Promise.reject(res));
    })
    .catch((error) => Promise.reject(error));
};
