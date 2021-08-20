# URL Shortener

## The App

A web application that allows users to take a long URL and convert it to a shortened URL similar to https://goo.gl/.

- [x] The program has a form that accepts the long URL.
- [x] The program generates a short local URL like short/abc1234 and stores the short URL and the long URL together in a persistent data store.
- [x] The program redirects visitors to the long URL when the short URL is visited.
- [x] The program tracks the number of times a short URL is visited.
- [x] The program has a statistics page for the short URL, /stats/abc123. Visiting this URL should show the short URL, the long URL, and the number of times the short URL was accessed.

### Constraints

- [x] This app uses a persistent datastore that others can use.
- [ ] Don’t allow an invalid URL to be entered into the form.

## Running the App

clone
then runn `npm i` and `npm start` in both server and client folders.
