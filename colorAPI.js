const fetch = require("node-fetch");

const colorInfo = async (hex) => {
  const result = await fetch(`http://thecolorapi.com/id?hex=${hex}`);
  console.log(await result.json());
};

const colorInfoLink = async (hex) => {
  let result = await fetch(`http://thecolorapi.com/id?hex=${hex}`);
  result = await result.json();
  const pic = result;
  console.log(pic);
  return pic;
};
colorInfoLink("ce181e");
