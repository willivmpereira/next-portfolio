import { BannerProjectContainer, ContentBanner } from './styled';

interface BannerProjectProps {
  title: string;
  type: string;
  imgUrl: string;
  description: string;
  tags: any;
}

export const BannerProject = ({
  title,
  description,
  type,
  imgUrl,
  tags
}: BannerProjectProps) => {
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
        <ContentBanner>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <ul className="tags">
            {tags[0].tag.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentBanner>
      </div>
    </>
  );
};
