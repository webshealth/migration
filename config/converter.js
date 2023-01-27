"use-strict";

module.exports = async () => {
  var convert = require("xml-js");
  const fs = require("fs");
  var xml = require("fs").readFileSync("./New CoinBureau.xml", "utf8");

  // var list = [];

  var result = convert.xml2json(xml, { compact: true, spaces: 4 });
  const data = JSON.parse(result);
  const titles_and_content_dates = [];

  data.data.post.map((i) => {
    
    // if (i.Title._text !== undefined) {
    //   titles_and_dates.push({
    //     name: i.Title._text,
    //     updateDate: i.PostModifiedDate._text,
    //   });
    // }
  });

  fs.writeFile(
    "titles_and_dates.txt",
    JSON.stringify(titles_and_dates),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );

  // await Promise.all(
  //   data.rss.channel.item.map((item) => {
  //     // console.log(item["wp:postmeta"]);
  //     a.push({ titles: "title1", contenet: "content1" });
  //   })
  // );
};
