import Image from "next/image";
import { styled } from "styled-components";

const DivVerticalDescription = styled.div`
  text-align: center;
  padding: 4px;
`;

const ImageOrigin = styled(Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const DivWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;

type Props = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const VerticalDescription = (props: Props) => {
  const title = props.title;
  const imageSrc = props.imageSrc;
  const imageAlt = props.imageAlt;
  const description = props.description;
  return (
    <DivVerticalDescription>
      <ImageOrigin src={imageSrc} width={200} height={200} alt={imageAlt} />
      <DivWrap>
        <h3>{title}</h3>
        <p>{description}</p>
      </DivWrap>
    </DivVerticalDescription>
  );
};
export default VerticalDescription;
