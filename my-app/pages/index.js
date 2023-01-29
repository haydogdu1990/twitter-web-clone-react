import MainTweet from "@/components/main-tweet";
import React from "react";

import Layout from "../components/layout";

function HomePage() {
  return (
    <Layout>
      <MainTweet
        name="Hasan Aydoğdu"
        slug="hsnaydgd"
        datetime={new Date("2023-01-29")}
        text={`Just earned the Gold Badge for

Problem Solving on HackerRank!
        `}
      ></MainTweet>

      <MainTweet
        name="Hasan Aydoğdu"
        slug="hsnaydgd"
        datetime={new Date("2023-01-27")}
        text={`Github repositories resume-json-css
+It pulls the data from the json file and loads it into the page.
+The page can be displayed in different views using different css templates.`}
      ></MainTweet>
    </Layout>
  );
}

export default HomePage;
