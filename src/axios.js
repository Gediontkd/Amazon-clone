import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://cute-ruby-cricket-gown.cyclic.cloud/'
});

export default instance;