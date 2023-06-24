const Information = () => {
  return (
    <div>
      <h2 className="grid h-12 max-w-[230px] text-center p-3 rounded-lg bg-gray-100 text-base font-semibold text-gray-600 mb-6">
        Information About TESLA
      </h2>

      {/* Information */}

      <div className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <p className="text-center font-bold text-green-500 md:text-left">
                Who we are
              </p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Operational since 2003
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Tesla is a groundbreaking electric car company founded in 2003
                by Elon Musk.
              </p>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://electrek.co/wp-content/uploads/sites/3/2021/01/Tesla-Gigafactory-NY.jpg"
                  loading="lazy"
                  alt="Tesla factory"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About us
              </h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Tesla is a pioneering electric car company founded by Elon Musk.
                It has revolutionized the automotive industry with its range of
                high-performance electric vehicles, including the Model S, Model
                3, Model X, and Model Y. Tesla's cars offer impressive range,
                rapid acceleration, and cutting-edge autonomous features. The
                company's commitment to sustainability, innovative technology,
                and supercharger network has propelled it to become a global
                leader in the electric vehicle market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
