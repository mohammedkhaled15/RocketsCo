const Rockets = () => {
  return (
    <section id="rockets" className="p-6 my-12 scroll-m-20">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Our Rockets
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center justify-center gap-8">
        {
          [
            {
              img: "/src/assets/img/rocketman.png",
              title: "Explorer",
              largeP: "$",
              smallP: "Affordable Exploration"
            },
            {
              img: "/src/assets/img/rocketride.png",
              title: "Adventurer",
              largeP: "$$",
              smallP: "Best Selling Rockets!"
            },
            {
              img: "/src/assets/img/rocketlaunch.png",
              title: "Infinity",
              largeP: "$$$",
              smallP: "Luxury Starship "
            },
          ].map(item => {
            return (
              <li key={item.title} className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
                <img src={item.img} className="w-1/2 mb-6" alt="Explorer" />
                <h3 className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">{item.largeP}</h3>
                <p className="text-3xl mt-2 text-center text-slate-900 dark:text-white">{item.title}</p>
                <p className="sm:hidden text-2xl text-center mt-2 text-slate-900 dark:text-white">{item.smallP}</p>
              </li>
            )
          })
        }

      </ul>
    </section>
  )
}

export default Rockets