import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroduceAbout from "../../components/website/introduce_about";
import IntroduceBlogs from "../../components/website/introduce_blogs";
import IntroduceDescription from "../../components/website/introduce_description";
import IntroduceFirst from "../../components/website/introduce_first";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroduceFirst />
        <IntroduceAbout />
        <IntroduceDescription isTextLeft={false} />
        <IntroduceDescription isTextLeft={true} />
        <IntroduceBlogs />
        {/* <VerticalDescriptions /> */}
        ここがメインの部分ですねはい
      </main>
      <Footer />
    </>
  );
}
