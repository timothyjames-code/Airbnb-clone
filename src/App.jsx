import Navbar from "./componants/Navbar";
import { Hero } from "./componants/Hero";
import { Card } from "./componants/Card";
import data from "./data";

const cards = data.map((item) => {
  return <Card key={item.key} item={item} />;
});

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
