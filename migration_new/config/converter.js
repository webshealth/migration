"use-strict";

const { type } = require("os");

module.exports = async () => {
  var convert = require("xml-js");
  const fs = require("fs");
  var xml = require("fs").readFileSync("./Posts-Export-2023-January-26-0527.xml", "utf8");

  // var list = [];

  var result = convert.xml2json(xml, { compact: true, spaces: 4 });
  const data = JSON.parse(result);
  const titles_and_content_dates = [];
  console.log(data.data.post[0])

  const outPut = data.data.post.filter((i) => {
    if (
      i.Title._text ===
      "Top Blockchain Conferences 2022: Where to get industry insight?"
    ) {
      return true;
    }
  });
  console.log(outPut[0]);

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
