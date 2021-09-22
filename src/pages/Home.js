import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const Home = () => (
  <section>
    <h2>Welcome to our page!</h2>
    <p>{lorem.generateParagraphs(2)}</p>
    <p>{lorem.generateParagraphs(3)}</p>
  </section>
);

export default Home;
