'use client';

import VerticalDescription from '@/components/domains/website/DivVerticalDescription';
import { styled } from 'styled-components';

const DivVerticalDescriptions = styled.div`
  padding: 60px 0;
  background: #eee;
`;

const DivVerticalDescriptionContainer = styled.div`
  background: #eee;
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;
`;

const VerticalDescriptions = () => {
  const arrData = [
    {
      title: 'サンプルタイトル',
      description: 'こんにちは今回はタイピング練習をしていこうと思います。',
      imageSrc: '/images/myself_2022-04-22.jpg',
      imageAlt: '俺や',
    },
    {
      title: 'サンプルタイトル',
      description: 'こんにちは今回はタイピング練習をしていこうと思います。',
      imageSrc: '/images/myself_2022-04-22.jpg',
      imageAlt: '俺や',
    },
    {
      title: 'サンプルタイトル',
      description: 'こんにちは今回はタイピング練習をしていこうと思います。',
      imageSrc: '/images/myself_2022-04-22.jpg',
      imageAlt: '俺や',
    },
  ];

  return (
    <DivVerticalDescriptions>
      <DivVerticalDescriptionContainer>
        {arrData.map((data, index) => (
          <VerticalDescription
            title={data.title}
            description={data.description}
            imageSrc={data.imageSrc}
            imageAlt={data.imageAlt}
            key={index}
          />
        ))}
      </DivVerticalDescriptionContainer>
    </DivVerticalDescriptions>
  );
};
export default VerticalDescriptions;
