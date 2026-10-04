import ExploreCard from "../components/exploreCard";
import Homecarousel from "../components/carousel";
import Hero from "../components/Hero";
import HomeStory from "../components/homeStory";
import duckMeat from "../assets/duck.jpeg";
function Home() {
  const exploreCards = [
    {
      id: "menu",
      title: "Menu",
      image: duckMeat,
      link: "/menu",
    },
    {
      id: "reservations",
      title: "Reservations",
      image: duckMeat,
      link: "/reservations",
    },
    {
      id: "space",
      title: "Our Space",
      image: duckMeat,
      link: "/space",
    },
    {
      id: "home",
      title: "Home",
      image: duckMeat,
      link: "/",
    },
  ];
  return (
    <>
      <Hero></Hero>
      <HomeStory></HomeStory>
      <div>
        <h2 className="font-display text-3xl text-ink">EXPLORE</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 min-h-[40vh] gap-2 p-2">
          {exploreCards.map((card) => (
            <ExploreCard
              key={card.id}
              description={card.title}
              imageUrl={card.image}
              link={card.link}
            />
          ))}
        </div>
      </div>
      <Homecarousel />
    </>
  );
}

export default Home;
