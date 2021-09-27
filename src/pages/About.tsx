import styles from "./About.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CreatorCard from "../components/CreatorCard";
import creators from "../data/creators.json";

const About = () => (
  <>
    <Header />
    <main>
      <h1>What is Tōhyō?</h1>
      <p>
        Tōhyō is a webapp that aims to simplify the top osu! players of
        CURRENT_YEAR vote. It does so by getting rid of the old forum post
        voting system that requires manual vote counting and verifaction. By
        forcing every user to follow a strict voting scheme you eliminate the
        need to discard votes while also enabling the automation of counting
        them. This also enables us to create generate statistics and graphs that
        can give insight into how different types of osu! players vote.
      </p>
      <h2>What data do you collect?</h2>
      <h2>Creators</h2>
      <div className={styles.creatorContainer}>
        {creators.data.map((creator) => (
          <CreatorCard key={creator.name} {...creator} />
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default About;
