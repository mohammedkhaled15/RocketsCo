const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Testimonials
      </h2>
      <figure className="my-12">
        <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black ">
          <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-0 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:leading-zero after:text-white after:opacity-25 after:content-['\201D']  dark:text-slate-400 sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            eligendi illum quas a repellendus incidunt quia voluptatibus ex. Est
            officiis nisi, labore reiciendis cupiditate debitis? Minima sequi
            deleniti aliquam reiciendis.
          </p>
        </blockquote>
        <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
          &#8212; Lorem ipsum dolor, sit amet consectetur.
        </figcaption>
      </figure>

      <figure className="my-12">
        <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black ">
          <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-0 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:leading-zero after:text-white after:opacity-25 after:content-['\201D']  dark:text-slate-400 sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            eligendi illum quas a repellendus incidunt quia voluptatibus ex. Est
            officiis nisi, labore reiciendis cupiditate debitis? Minima sequi
            deleniti aliquam reiciendis.
          </p>
        </blockquote>
        <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
          &#8212; Lorem ipsum dolor, sit amet consectetur.
        </figcaption>
      </figure>
    </section>
  );
};

export default Testimonials;
