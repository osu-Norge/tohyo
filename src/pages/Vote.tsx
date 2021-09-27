import styles from "./Vote.module.css";

import { useForm } from "react-hook-form";

import Header from "../components/Header";
import Footer from "../components/Footer";

import players from "../data/players.json";

type FormData = {
  player1: number;
  player2: number;
  player3: number;
  player4: number;
  player5: number;
};

type Player = {
  id: number;
  name: string;
};

const Vote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (formData: FormData) => console.log("data", formData);
  console.log("error", errors);

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.select}>
            <select {...register("player1")}>
              {players.data.map((player: Player) => (
                <option value={player.id}>{player.name}</option>
              ))}
            </select>
          </div>
          <input type="submit" />
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Vote;
