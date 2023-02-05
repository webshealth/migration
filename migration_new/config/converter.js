"use-strict";

const { type } = require("os");

module.exports = async () => {
  var convert = require("xml-js");
  const Papa = require("papaparse");
  const fs = require("fs");
  var xml = require("fs").readFileSync(
    "./Coin-Bureau-Final-Export.xml",
    "utf8"
  );

  var list = [];

  var result = convert.xml2json(xml, { compact: true, spaces: 4 });
  const data = JSON.parse(result);
  const returnPrimaryCategory = (primaryID) => {
    const categoryData = {
      Adoption: {
        id: 1,
        attributes: {
          name: "Adoption",
          createdAt: "2022-09-15T11:54:59.190Z",
          updatedAt: "2022-09-16T10:55:18.892Z",
          publishedAt: "2022-09-15T11:55:01.737Z",
          locale: "en",
          slug: "adoption",
          primaryID: 233,
        },
      },
      Analysis: {
        id: 2,
        attributes: {
          name: "Analysis",
          createdAt: "2022-09-15T11:55:18.866Z",
          updatedAt: "2022-09-16T10:55:36.962Z",
          publishedAt: "2022-09-15T11:55:33.510Z",
          locale: "en",
          slug: "analysis",
          primaryID: 16,
        },
      },
      Blockchain: {
        id: 3,
        attributes: {
          name: "Blockchain",
          createdAt: "2022-09-15T11:55:44.812Z",
          updatedAt: "2022-09-16T10:55:56.438Z",
          publishedAt: "2022-09-15T11:55:48.835Z",
          locale: "en",
          slug: "blockchain",
          primaryID: 198,
        },
      },
      Defi: {
        id: 4,
        attributes: {
          name: "Defi",
          createdAt: "2022-09-16T10:56:11.452Z",
          updatedAt: "2022-09-16T10:56:12.235Z",
          publishedAt: "2022-09-16T10:56:12.232Z",
          locale: "en",
          slug: "defi",
          primaryID: 2113,
        },
      },
      Education: {
        id: 5,
        attributes: {
          name: "Education",
          createdAt: "2022-09-16T10:56:41.459Z",
          updatedAt: "2022-09-16T10:56:42.185Z",
          publishedAt: "2022-09-16T10:56:42.182Z",
          locale: "en",
          slug: "education",
          primaryID: 24,
        },
      },
      "Guest Post": {
        id: 6,
        attributes: {
          name: "Guest Post",
          createdAt: "2022-09-16T10:56:59.597Z",
          updatedAt: "2022-09-16T10:57:00.269Z",
          publishedAt: "2022-09-16T10:57:00.266Z",
          locale: "en",
          slug: "guest-post",
          primaryID: 1019,
        },
      },
      Guides: {
        id: 7,
        attributes: {
          name: "Guides",
          createdAt: "2022-09-16T10:57:14.830Z",
          updatedAt: "2022-09-16T10:57:15.575Z",
          publishedAt: "2022-09-16T10:57:15.573Z",
          locale: "en",
          slug: "guides",
          primaryID: 2412,
        },
      },
      Ico: {
        id: 8,
        attributes: {
          name: "Ico",
          createdAt: "2022-09-16T10:57:26.610Z",
          updatedAt: "2022-09-16T10:57:27.334Z",
          publishedAt: "2022-09-16T10:57:27.333Z",
          locale: "en",
          slug: "ico",
          primaryID: 258,
        },
      },
      Interview: {
        id: 9,
        attributes: {
          name: "Interview",
          createdAt: "2022-09-16T10:57:42.689Z",
          updatedAt: "2022-09-16T10:57:43.455Z",
          publishedAt: "2022-09-16T10:57:43.452Z",
          locale: "en",
          slug: "interview",
          primaryID: 788,
        },
      },
      Mining: {
        id: 10,
        attributes: {
          name: "Mining",
          createdAt: "2022-09-16T10:57:55.263Z",
          updatedAt: "2022-09-16T10:57:56.049Z",
          publishedAt: "2022-09-16T10:57:56.046Z",
          locale: "en",
          slug: "mining",
          primaryID: 1091,
        },
      },
      News: {
        id: 11,
        attributes: {
          name: "News",
          createdAt: "2022-09-16T10:58:07.576Z",
          updatedAt: "2022-09-16T10:58:08.550Z",
          publishedAt: "2022-09-16T10:58:08.548Z",
          locale: "en",
          slug: "news",
          primaryID: 4,
        },
      },
      "Press Release": {
        id: 12,
        attributes: {
          name: "Press Release",
          createdAt: "2022-09-16T10:58:27.878Z",
          updatedAt: "2022-09-16T10:58:29.080Z",
          publishedAt: "2022-09-16T10:58:29.078Z",
          locale: "en",
          slug: "press-release",
          primaryID: 1030,
        },
      },
      Review: {
        id: 13,
        attributes: {
          name: "Review",
          createdAt: "2022-09-16T10:58:42.367Z",
          updatedAt: "2022-09-16T10:58:43.446Z",
          publishedAt: "2022-09-16T10:58:43.444Z",
          locale: "en",
          slug: "review",
          primaryID: 422,
        },
      },
      Services: {
        id: 14,
        attributes: {
          name: "Services",
          createdAt: "2022-09-16T10:59:09.369Z",
          updatedAt: "2022-09-16T10:59:29.759Z",
          publishedAt: "2022-09-16T10:59:29.757Z",
          locale: "en",
          slug: "services",
          primaryID: 37,
        },
      },
      "Smart Contracts": {
        id: 15,
        attributes: {
          name: "Smart Contracts",
          createdAt: "2022-09-16T10:59:49.821Z",
          updatedAt: "2022-09-16T10:59:50.809Z",
          publishedAt: "2022-09-16T10:59:50.807Z",
          locale: "en",
          slug: "smart-contracts",
          primaryID: 229,
        },
      },
      Technology: {
        id: 16,
        attributes: {
          name: "Technology",
          createdAt: "2022-09-16T11:00:09.377Z",
          updatedAt: "2022-09-16T11:00:10.215Z",
          publishedAt: "2022-09-16T11:00:10.213Z",
          locale: "en",
          slug: "technology",
          primaryID: 2565,
        },
      },
      Trading: {
        id: 17,
        attributes: {
          name: "Trading",
          createdAt: "2022-09-16T11:00:23.672Z",
          updatedAt: "2022-09-16T11:00:24.407Z",
          publishedAt: "2022-09-16T11:00:24.404Z",
          locale: "en",
          slug: "trading",
          primaryID: 1622,
        },
      },
      Uncategorized: {
        id: 18,
        attributes: {
          name: "Uncategorized",
          createdAt: "2022-09-16T11:00:50.645Z",
          updatedAt: "2022-09-16T11:00:51.471Z",
          publishedAt: "2022-09-16T11:00:51.469Z",
          locale: "en",
          slug: "uncategorized",
          primaryID: 1,
        },
      },
    };
    for (const [key, value] of Object.entries(categoryData)) {
      if (primaryID == value.attributes.primaryID) {
        return [value.attributes.primaryID, value.id, value.attributes.name];
      }
    }
  };

  const outPut = data.data.post.filter((i) => {
    if (i.Categories._text.split("|").length > 1) {
      return true;
    }
  });
  // .map((it) => {
  //   list.push({
  //     URL: it.Permalink._text,
  //     No: it.Categories._text.split("|").length,
  //     F_One: it.Categories._text.split("|")[0],
  //     s_One: it.Categories._text.split("|")[1],
  //     primaryID: returnPrimaryCategory(
  //       Number(it._yoast_wpseo_primary_category._text)
  //     ),
  //   });
  // });
  console.log(outPut[0]);

  // const csv = Papa.unparse(list);
  // fs.writeFile("output.txt", csv, (err) => {
  //   if (err) throw err;
  //   console.log("The file was saved!");
  // });

  // await Promise.all(
  //   data.rss.channel.item.map((item) => {
  //     // console.log(item["wp:postmeta"]);
  //     a.push({ titles: "title1", contenet: "content1" });
  //   })
  // );
};
