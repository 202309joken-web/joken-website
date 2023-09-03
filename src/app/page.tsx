import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroduceFirst from "../../components/website/introduce_first";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroduceFirst />
        ここがメインの部分ですねはい
      </main>
      <Footer />
    </>
  );
}
