import fs from 'fs';
import {
  IntroduceDescription,
  IntroDescription,
} from '@/components/domains/website/IntroduceDescription';
import {
  IntroduceBlogs,
  BlogSummary,
} from '@/components/domains/website/IntroduceBlogs';
import { IntroduceAbout } from '@/components/domains/website/IntroduceAbout';
import { IntroduceSchedule } from '@/components/domains/website/IntroduceSchedule';
import { IntroduceTop } from '@/components/domains/website/IntroduceTop';
import { Header } from '@/components/commons/Header/Header';
import Footer from '@/components/commons/Footer/Footer';

export default function Home() {
  const filePath = 'public/json/data.json';
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const introDesc: IntroDescription[] = data.introDesc;
  const blogSummaries: BlogSummary[] = data.blogSummary;

  return (
    <>
      <Header />
      <main>
        <IntroduceTop />
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
