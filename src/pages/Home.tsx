import BlogCard from '../shared/components/BlogCard.component';
import { Header } from '../shared/components/Header.component';

export const HomePage = () => {
  return (
    <>
      <section style={{ width: '100%' }}>
        <Header />

        <section
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns:
              'var(--blog-card-width) var(--blog-card-width) var(--blog-card-width)',
            justifyContent: 'center',
            gridGap: '10px',
            marginTop: '20px',
          }}
        >
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
        </section>
      </section>
    </>
  );
};
