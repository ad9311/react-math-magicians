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
  <section className="pt-2">
    <h2 className="fs-4">Welcome to our page!</h2>
    <p className="fs-2">{lorem.generateParagraphs(2)}</p>
    <p className="fs-2">{lorem.generateParagraphs(3)}</p>
  </section>
);

export default Home;
