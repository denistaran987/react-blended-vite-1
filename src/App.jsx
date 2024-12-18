import article from './data/article.json';
import stats from './data/stats.json';
import forbes from './data/forbes.json';
import transactions from './data/transactions.json';

import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

const { poster, tag, title, description, name, avatar, postedAt } = article;

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={poster}
          tag={tag}
          title={title}
          description={description}
          name={name}
          avatar={avatar}
          postedAt={postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory items={transactions} />
      </Container>
    </Section>
  );
};
