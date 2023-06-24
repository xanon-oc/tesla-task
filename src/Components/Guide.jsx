const Guide = () => {
  return (
    <div>
      <h2 className="grid  h-12 max-w-[170px] text-center p-3 rounded-lg bg-gray-100 text-base font-semibold text-gray-600 mb-6">
        TESLA Guide
      </h2>
      <div className="space-y-4">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">
              Tesla Model S: The Electric Luxury Sedan
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Flagship electric sedan, luxurious and spacious interior,
            exceptional driving range (up to 400+ miles), lightning-fast
            acceleration (0-60 mph in under 2 seconds), advanced Autopilot
            capabilities for enhanced safety and convenience, over-the-air
            software updates for continuous improvement, access to Tesla's
            Supercharger network.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">
              Tesla Model 3: Affordable Electric Excellence
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Affordable yet high-performance electric sedan, impressive driving
            range (up to 300+ miles), sleek and minimalist interior design,
            quick acceleration (0-60 mph in as little as 3.1 seconds), standard
            Autopilot functionality for advanced driver assistance, built-in
            access to Supercharger network, extensive charging infrastructure
            for convenient charging options.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">
              Tesla Model X: The Futuristic Electric SUV
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Innovative all-electric SUV with distinctive falcon-wing doors,
            spacious and versatile interior with seating for up to seven adults,
            exceptional range (up to 350+ miles), powerful acceleration (0-60
            mph in around 2.5 seconds), advanced safety features like Tesla's
            Autopilot system, towing capability, access to Supercharger network
            for convenient long-distance travel.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">
              Tesla Model Y: The Compact Electric Crossover
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Compact and versatile electric crossover with impressive range (up
            to 300+ miles), ample cargo space and seating for up to seven,
            seamless integration with Tesla ecosystem, responsive acceleration
            (0-60 mph in as little as 3.5 seconds), Autopilot functionality for
            enhanced safety, compatibility with Supercharger network for
            convenient charging on the go.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Guide;
