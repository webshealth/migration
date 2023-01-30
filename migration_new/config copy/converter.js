"use-strict";

module.exports = async () => {
  var convert = require("xml-js");
  const fs = require("fs");
  var xml = require("fs").readFileSync("./New CoinBureau.xml", "utf8");

  // var list = [];

  var result = convert.xml2json(xml, { compact: true, spaces: 4 });
  const data = JSON.parse(result);
  const titles_and_content_dates = [];

  console.log(data);

  // const outPut = data.data.post.filter((i) => {
  //   if (
  //     i.Title._text ===
  //     "Top Blockchain Conferences 2022: Where to get industry insight?"
  //   ) {
  //     return true;
  //   }
  // });
  // console.log(outPut);

  // fs.writeFile(
  //   "titles_and_dates.txt",
  //   JSON.stringify(titles_and_dates),
  //   function (err) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log("The file was saved!");
  //   }
  // );

  // await Promise.all(
  //   data.rss.channel.item.map((item) => {
  //     // console.log(item["wp:postmeta"]);
  //     a.push({ titles: "title1", contenet: "content1" });
  //   })
  // );
};
