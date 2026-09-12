import Button from "./button";
import duckMeat from "../assets/duck.jpeg";

function HomeStory() {
  return (
    <>
      <section className="grid grid-cols-1 gap-10 items-center px-6 py-20 md:py-28 md:gap-16 sm:grid-cols-[1.3fr_0.7fr] md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <img
            src={duckMeat}
            alt="braa"
            className="w-full aspect-9/10 object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl uppercase">our story</h2>
          <p>
            This is where we're from. We know what it looks like. We know what
            it tastes like. We've simply brought it somewhere beautiful.
          </p>
          <Button
            link="/story"
            className="border-b border-terracotta text-ink px-0 py-2  hover:border-b-2 hover:text-terracotta transition-colors duration-150"
          >
            OUR STORY
          </Button>
        </div>
      </section>
    </>
  );
}
export default HomeStory;
