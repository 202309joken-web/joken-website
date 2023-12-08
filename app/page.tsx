import fs from "fs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import IntroduceAbout from "../components/website/introduce_about";
import IntroduceBlogs, {
  BlogSummary,
} from "../components/website/introduce_blogs";
import IntroduceDescription, {
  IntroDesc,
} from "../components/website/introduce_description";
import IntroduceFirst from "../components/website/introduce_first";
import IntroduceSchedule from "../components/website/introduce_schedule";

export default function Home() {
  const filePath = "public/json/data.json";
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const introDesc: IntroDesc[] = data.introDesc;
  const blogSummaries: BlogSummary[] = data.blogSummary;

  return (
    <>
      <Header />
      <main>
        <IntroduceFirst />
        <IntroduceAbout />
        <IntroduceSchedule />
        {introDesc.map((v, index) => (
          <IntroduceDescription
            isTextLeft={index % 2 !== 0}
            blogData={v}
            key={index}
          />
        ))}
        <IntroduceBlogs blogSummaries={blogSummaries} />
      </main>
      <Footer />
    </>
  );
}
