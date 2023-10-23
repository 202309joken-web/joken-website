import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroduceAbout from "../../components/website/introduce_about";
import IntroduceFirst from "../../components/website/introduce_first";
// import IntroduceSecond from "../../components/website/introduce_second";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroduceFirst />
        <IntroduceAbout />
        {/* <IntroduceSecond /> */}
        ここがメインの部分ですねはい
      </main>
      <Footer />
    </>
  );
}
