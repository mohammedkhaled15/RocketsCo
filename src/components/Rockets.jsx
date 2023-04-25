const Rockets = () => {
  return (
    <section
      id="rockets"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-m-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Rockets
      </h2>
      <ul className="mx-auto my-12 flex list-none flex-col items-center justify-center gap-8 sm:flex-row">
        {[
          {
            img: "/imgs/rocketman.png",
            title: "Explorer",
            largeP: "$",
            smallP: "Affordable Exploration",
          },
          {
            img: "/imgs/rocketride.png",
            title: "Adventurer",
            largeP: "$$",
            smallP: "Best Selling Rockets!",
          },
          {
            img: "/imgs/rocketlaunch.png",
            title: "Infinity",
            largeP: "$$$",
            smallP: "Luxury Starship ",
          },
        ].map((item) => {
          return (
            <li
              key={item.title}
              className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6"
            >
              <img src={item.img} className="mb-6 w-1/2" alt="Explorer" />
              <h3 className="hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                {item.largeP}
              </h3>
              <p className="mt-2 text-center text-3xl text-slate-900 dark:text-white">
                {item.title}
              </p>
              <p className="mt-2 text-center text-2xl text-slate-900 dark:text-white sm:hidden">
                {item.smallP}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Rockets;
