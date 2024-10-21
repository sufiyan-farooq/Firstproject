export default function Feature(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img
        alt="feature"
        className="object-cover object-center h-full w-full"
        src="https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg"
      />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
     
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Premium Clothing
          </h2>
          <p className="leading-relaxed text-base">
            Discover our exclusive range of premium clothing, tailored to suit
            all styles and preferences. Elevate your wardrobe with trendy
            outfits.
          </p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            Shop Now
            
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Sustainable Fashion
          </h2>
          <p className="leading-relaxed text-base">
            Our sustainable clothing collection combines comfort and style while
            promoting eco-friendly practices. Look great while caring for the
            planet.
          </p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
  
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Customer Support
          </h2>
          <p className="leading-relaxed text-base">
            Need help with your order or sizing? Our customer support team is
            here to assist you. Reach out to us for any queries, we're just a
            call away.
          </p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}