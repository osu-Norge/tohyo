import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const authCode = new URLSearchParams(window.location.search).get("code");

  if (authCode) {
    axios
      .post("/auth")
      .then((response) => {
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => (
        <>
          <h1>Something went wrong! Try again later!</h1>
          <p>{error}</p>
        </>
      ));
  }

  return (
    <>
      <Header />
      <main>
        <h1>yeet</h1>
      </main>
      <Footer />
    </>
  );
};

export default Login;
