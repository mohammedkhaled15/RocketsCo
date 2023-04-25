const Main = () => {
  return (
    <main className="mx-auto max-w-4xl ">
      <section
        id="hero"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="text-slate-00 max-w-md text-center text-4xl font-bold dark:text-white sm:text-left sm:text-5xl">
            We Boldy go
            <span className="text-indigo-700 dark:text-indigo-300">
              {" "}
              Where No Rocket
            </span>
            Has Gone Before ...
          </h2>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
            We&apos;re building rockets for the next century today. From moon to
            Mars, Jubiter and byond...
          </p>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
            Think Acme Rockets.
          </p>
        </article>
        <img
          className="w-1/2"
          src="/img/rocketdab.png"
          alt="Rocket Dab"
        />
      </section>
    </main>
  );
};

export default Main;
