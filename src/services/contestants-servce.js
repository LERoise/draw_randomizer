import 'whatwg-fetch';

const API_URL = 'http://localhost:3030/';

export function getContestants() {
  return fetch(`${API_URL}`, request).then(data => data.json());
}

const request = {
  method: "GET", // *GET, POST, PUT, DELETE, etc. 
  mode: "cors", // no-cors, cors, *same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
  referrer: "no-referrer"
};