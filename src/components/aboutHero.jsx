export default function AboutHero(){
    return(
        <div className="relative  overflow-hidden  py-24 sm:py-32">
  <img
    src="https://img.freepik.com/premium-photo/toy-shopping-cart-with-boxes-blue-background_339191-217.jpg"
    alt="E-commerce Background"
    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
  />

  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-5xl font-semibold tracking-tight text-Blck sm:text-7xl">
        Your Shopping Destination
      </h2>
      <p className="mt-8 text-lg font-medium text-Black sm:text-xl/8">
        Discover the best products at unbeatable prices. Join millions of
        satisfied customers on their shopping journey!
      </p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-Black sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">
          Shop Categories <span aria-hidden="true">→</span>
        </a>
        <a href="#">
          Daily Deals <span aria-hidden="true">→</span>
        </a>
        <a href="#">
          Customer Reviews <span aria-hidden="true">→</span>
        </a>
        <a href="#">
          Shipping &amp; Returns <span aria-hidden="true">→</span>
        </a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-900">Happy Customers</dt>
          <dd className="text-4xl font-semibold tracking-tight text-Black">
            1M+
          </dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-900">Products Sold</dt>
          <dd className="text-4xl font-semibold tracking-tight text-Black">
            500k+
          </dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-900">Available Categories</dt>
          <dd className="text-4xl font-semibold tracking-tight text-Black">
            100+
          </dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-900">Worldwide Shipping</dt>
          <dd className="text-4xl font-semibold tracking-tight text-Black">
            Yes
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>

    )
}