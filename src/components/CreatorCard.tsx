import styles from "./CreatorCard.module.css";

interface Creator {
  avatar: string;
  name: string;
  description: string;
  osu: string;
  github: string;
  website: string;
}

const PlayerCard = (data: Creator) => (
  <article className={styles.card}>
    <div className="circular-container">
      <img
        src={data.avatar}
        alt={`${data.name} avatar`}
        className={`circular ${styles.image}`}
      />
    </div>
    <h3 className={styles.name}>{data.name}</h3>
    <p className={styles.description}>{data.description}</p>
    <div className={styles.links}>
      <a href={data.osu}>osu!</a>
      <a href={data.github}>github</a>
      <a href={data.website}>website</a>
    </div>
  </article>
);

export default PlayerCard;
