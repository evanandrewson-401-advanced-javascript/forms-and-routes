const apiCall = (url) => {
  return fetch(url)
    .then(res => res.json());
};

export default apiCall;
