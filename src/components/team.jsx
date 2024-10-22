


export default function Team(){
    return(
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
        OUR TEAM
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Meet the team behind our e-commerce platform. From product development to customer experience, we work together to bring you the best online shopping experience.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
            src="https://ogletree.fr/app/uploads/karinXwebsite.png"
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Sarah Lee
            </h2>
            <h3 className="text-gray-500 mb-3">Product Manager</h3>
            <p className="mb-4">
              Sarah oversees the entire product development process, ensuring the best shopping experience and product quality for our customers.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
            src="https://cdn-01.cms-ap-v2i.applyflow.com/pinnacle-people/wp-content/uploads/2023/09/slide-2.png"
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              James Robinson
            </h2>
            <h3 className="text-gray-500 mb-3">UX/UI Designer</h3>
            <p className="mb-4">
              James crafts intuitive and beautiful user interfaces to ensure that shopping on our platform is seamless and enjoyable.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
            src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg"
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Maria Johnson
            </h2>
            <h3 className="text-gray-500 mb-3">Marketing Specialist</h3>
            <p className="mb-4">
              Maria develops innovative marketing campaigns to keep our customers informed about new arrivals, sales, and exclusive offers.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
            src="https://ogletree.com/app/uploads/people/alexandre-abitbol.jpg"
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Alex Kim
            </h2>
            <h3 className="text-gray-500 mb-3">Backend Developer</h3>
            <p className="mb-4">
              Alex ensures that our site is always running smoothly and efficiently, from handling payments to managing inventory.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}