const Main = () => {
  return (
    <main className="max-w-4xl mx-auto ">
      <section id="hero" className="scroll-mt-40 flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12">
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-00 dark:text-white">
            We Boldy go
            <span className="text-indigo-700 dark:text-indigo-300"> Where No Rocket
            </span>
            Has Gone Before ...
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            We&apos;re building rockets for the next century today. From moon to Mars, Jubiter and byond...
          </p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Think Acme Rockets.
          </p>
        </article>
        <img className="w-1/2" src="/src/assets/img/rocketdab.png" alt="Rocket Dab" />
      </section>


    </main >
  )
}

export default Main