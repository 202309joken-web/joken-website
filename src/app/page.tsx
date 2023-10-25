import fs from "fs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroduceAbout from "../../components/website/introduce_about";
import IntroduceBlogs from "../../components/website/introduce_blogs";
import IntroduceDescription, {
  IntroDesc,
} from "../../components/website/introduce_description";
import IntroduceFirst from "../../components/website/introduce_first";
import IntroduceSchedule from "../../components/website/introduce_schedule";

export default function Home() {
  const filePath = "public/json/data.json";
  const data: IntroDesc[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return (
    <>
      <Header />
      <main>
        <IntroduceFirst />
        <IntroduceAbout />
        <IntroduceSchedule />
        {data.map((v, index) => (
          <IntroduceDescription
            isTextLeft={index % 2 !== 0}
            blogData={v}
            key={index}
          />
        ))}
        <IntroduceBlogs />
      </main>
      <Footer />
    </>
  );
}
