export default function ProductFeatures(){
    return(
<div className="bg-white">
  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        About Us
      </h2>
      <p className="mt-4 text-gray-500">
        At [Your Brand Name], we believe in bringing the finest trends to your
        wardrobe. Each piece of clothing is crafted with attention to detail,
        blending comfort and style. From casual wear to elegant outfits, our
        collection is designed to suit your personality.
      </p>
      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Our Vision</dt>
          <dd className="mt-2 text-sm text-gray-500">
            To inspire confidence and make every individual feel unique through
            fashion.
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Our Materials</dt>
          <dd className="mt-2 text-sm text-gray-500">
            We use high-quality fabrics that are sustainably sourced to ensure
            maximum comfort.
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Our Designs</dt>
          <dd className="mt-2 text-sm text-gray-500">
            Our designs are timeless yet trendy, catering to both modern and
            classic tastes.
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Sizing &amp; Fit</dt>
          <dd className="mt-2 text-sm text-gray-500">
            We offer a wide range of sizes, ensuring that everyone finds the
            perfect fit.
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Care Instructions</dt>
          <dd className="mt-2 text-sm text-gray-500">
            Easy-to-maintain fabrics that allow you to look your best with
            minimal effort.
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Sustainability</dt>
          <dd className="mt-2 text-sm text-gray-500">
            Committed to reducing our environmental impact by using eco-friendly
            materials.
          </dd>
        </div>
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img
        src="https://www.shutterstock.com/image-photo/rack-stylish-clothes-next-white-600nw-1529694911.jpg"
        alt="Stylish clothing on a rack."
        className="rounded-lg bg-gray-100"
      />
      <img
        src="https://i0.wp.com/fashion2apparel.com/wp-content/uploads/2022/06/fashion-designing-steps.jpg?fit=600%2C415&quality=100&ssl=1"
        alt="Designer creating a fashion piece."
        className="rounded-lg bg-gray-100"
      />
      <img
        src="https://manofmany.com/_next/image?url=https%3A%2F%2Fapi.manofmany.com%2Fwp-content%2Fuploads%2F2023%2F06%2F10-Most-Famous-Male-Models-of-All-Time.jpg&w=1200&q=75"
        alt="Model wearing a modern outfit."
        className="rounded-lg bg-gray-100 "
      />
      <img
        src="https://img.freepik.com/free-photo/close-up-wool-texture-details_23-2149620438.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720483200&semt=ais_user"
        alt="Close-up of fabric detail."
        className="rounded-lg bg-gray-100"
      />
    </div>
  </div>
</div>
    )
}