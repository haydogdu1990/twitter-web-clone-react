import MainTweet from "@/components/main-tweet";
import React from "react";

import Layout from "../components/layout";
import tweetPhoto from "../components/images/fun.jpg";

function HomePage() {
  return (
    <Layout>
      <MainTweet
        name="Hasan Aydoğdu"
        slug="hsnaydgd"
        datetime={new Date("2023-01-29")}
        text={`Just earned the Gold Badge for

Problem Solving on HackerRank!`}
        replyValue="3"
        retweetValue=""
        likeValue="13"
      ></MainTweet>

      <MainTweet
        name="Hasan Aydoğdu"
        slug="hsnaydgd"
        datetime={new Date("2023-01-27")}
        text={`Github repositories resume-json-css
+It pulls the data from the json file and loads it into the page.
+The page can be displayed in different views using different css templates.`}
        replyValue="8"
        retweetValue="2"
        likeValue="15"
      ></MainTweet>

      <MainTweet
        name="Hasan Aydoğdu"
        slug="hsnaydgd"
        datetime={new Date("2023-01-27")}
        text={`We are going to the fun...`}
        replyValue="15"
        retweetValue="6"
        likeValue="142"
        tweetPhoto={tweetPhoto}
      ></MainTweet>
    </Layout>
  );
}

export default HomePage;
