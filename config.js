const dev = false;

if (dev) url = "http://localhost:3000/";
else url = "https://back-tripizy.herokuapp.com/";
export default {
  DOMAIN: url,
  dev: dev
};
