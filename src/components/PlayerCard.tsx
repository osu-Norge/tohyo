interface Creator {
  avatar: string;
  name: string;
  description: string;
  osu: string;
  github: string;
  website: string;
}

const PlayerCard = (data: Creator) => (
  <article>
    <p>{data.name}</p>
  </article>
);

export default PlayerCard;
