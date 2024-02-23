import fs from 'fs';
import Footer from '../components/commons/Footer/Footer';
import Header from '../components/commons/Header/Header';
import IntroduceDescription, {
  IntroDesc,
} from '@/components/website/IntroduceDescription';
import IntroduceBlogs, {
  BlogSummary,
} from '@/components/website/IntroduceBlogs';
import IntroduceFirst from '@/components/website/IntroduceFirst';
import IntroduceAbout from '@/components/website/IntroduceAbout';
import IntroduceSchedule from '@/components/website/IntroduceSchedule';

export default function Home() {
  const filePath = 'public/json/data.json';
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

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
