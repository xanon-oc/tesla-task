const Home = () => {
  return (
    <div>
      <h2 className="grid  h-12 max-w-[170px] text-center p-3 rounded-lg bg-gray-100 text-base font-semibold text-gray-600 mb-6">
        Welcome To TESLA
      </h2>
      {/* Header Banner */}

      <section className="overflow-hidden rounded-xl  bg-[url(https://img.freepik.com/free-photo/electric-car-charging-home-clean-energy-filling-technology_35913-2530.jpg?w=1060&t=st=1687620519~exp=1687621119~hmac=07fea52d6163c791b82561f2d8edc5a4453830c26b33b66a989dbec827c3b048)] bg-cover bg-bottom bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Cars
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Tesla's new cars offer cutting-edge electric technology and
              impressive performance. With sleek designs, long-range
              capabilities, and rapid acceleration, they redefine the driving
              experience. Packed with advanced autonomous features and
              over-the-air updates, Tesla continues to lead the charge in the
              electric vehicle revolution.
            </p>

            <div className="mt-4 sm:mt-8">
              <a className="inline-block rounded-full cursor-pointer bg-gray-200 px-12 py-3 text-sm font-medium text-black hover:text-white transition hover:bg-gray-400 focus:outline-none focus:ring focus:ring-green-400">
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
