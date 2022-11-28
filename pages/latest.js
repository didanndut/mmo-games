import Meta from "../components/Meta";
import Header from "../components/Header";
import Latestlist from "../components/Latestlist";
import Footer from "../components/Footer";

export default function Latest() {
  return (
    <div>
      <Meta title="MMO GAMES" />

      <Header />

      <Latestlist />

      <Footer />
    </div>
  );
}