const fetch = require("node-fetch");

// const scrape = async (url) => {
//   const result = await fetch(url, () => {
//     method: "GET",
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   });
// };

//will return top colors
const scrape2 = async (url) => {
  try {
    let response = await fetch(url);
    response = await response.text();

    //gets all the hex colors
    let index = response.match(/[0-9a-f]{6}/gi);
    // console.log(index);
    //will hold the frequencies of colors to find the most popular ones used
    let count = [];

    //find frequencies of hex color occurences
    for (let i = 0; i < index.length; i++) {
      let hex = index[i].toString();
      count[hex] = count[hex] ? count[hex] + 1 : 1;
    }
    console.log(count);
    // const entries = new Map({ count });
    const obj = new Object(count);
    // console.log(obj);

    //get the top hex color
    let max = 0;

    let keys = Object.keys(count);
    // console.log(keys);
    let results = [];
    keys.forEach((key) => {
      //   console.log(key);
      if (count[key] > 10) {
        results.push(key);
      }
    });

    // console.log(results);
  } catch (error) {
    console.error(error);
  }
};

const print = async () => {
  console.log(await scrape2("https://www.nintendo.com/"));
};

print();
