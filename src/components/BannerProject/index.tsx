import { BannerProjectContainer } from './styled';

interface BannerProjectProps {
  title: string;
  type: string;
  imgUrl: string;
  description: string;
}

export const BannerProject = ({
  title,
  description,
  type,
  imgUrl
}: BannerProjectProps) => {
  console.log(description);
  return (
    <>
      <BannerProjectContainer imgUrl={imgUrl}>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </BannerProjectContainer>

      <div className="container">
        <p dangerouslySetInnerHTML={{ __html: description }}>
                        </p>
      </div>
    </>
  );
};
