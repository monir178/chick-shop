import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-gradient-radial from-orange-200 to-white w-full min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-heading3-bold font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Welcome to our store! We are passionate about curating the finest
          selection of stylish and sophisticated ladies' fashion and
          accessories. Our mission is to provide you with an unforgettable
          shopping experience, where you can find the perfect pieces to enhance
          your personal style.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Section 1 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="relative w-full h-48">
              <Image
                src="/fashion.jpg"
                alt="Ladies Fashion"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-t-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              Timeless Elegance
            </h2>
            <p className="text-gray-600 mt-2">
              Discover a range of elegant fashion pieces that blend timeless
              design with modern trends, perfect for every woman.
            </p>
          </div>

          {/* Section 2 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="relative w-full h-48">
              <Image
                src="/ladies.jpg"
                alt="Ladies Accessories"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-t-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              Chic Accessories
            </h2>
            <p className="text-gray-600 mt-2">
              From statement pieces to everyday essentials, our curated
              accessories collection offers something for every occasion.
            </p>
          </div>

          {/* Section 3 */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="relative w-full h-48">
              <Image
                src="/women.jpg"
                alt="Women's Style"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-t-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              Empowering Style
            </h2>
            <p className="text-gray-600 mt-2">
              We believe in fashion that empowers. Our collection is designed to
              make you feel confident, bold, and beautiful.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <h2 className="text-heading3-bold font-bold text-gray-800 mb-4 text-center">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 text-center mb-6">
            Founded in 2010, our store began with a simple vision: to offer
            women a curated collection of fashion that seamlessly blends
            elegance with contemporary style. What started as a small boutique
            has evolved into a renowned destination for high-quality ladies'
            fashion and accessories.
          </p>

          <p className="text-lg text-gray-600 text-center">
            Today, we are proud to be a leading name in ladies' fashion. Our
            journey reflects our dedication to quality, style, and the art of
            personal expression. We invite you to be a part of our story and
            discover the pieces that will make your fashion journey
            unforgettable.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="mb-12">
          <h2 className="text-heading3-bold font-bold text-gray-800 mb-4 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/member2.jpg"
                  alt="Team Member 1"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/member1.jpg"
                  alt="Team Member 2"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                John Smith
              </h3>
              <p className="text-gray-600">Creative Director</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/member3.jpg"
                  alt="Team Member 3"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Emily Johnson
              </h3>
              <p className="text-gray-600">Head of Customer Service</p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-12">
          <h2 className="text-heading3-bold font-bold text-gray-800 mb-4 text-center">
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600">
                "I have been shopping here for years and it never disappoints.
                The quality of the dresses and accessories is unparalleled. The
                customer service is always friendly and helpful. Highly
                recommend!"
              </p>
              <p className="text-gray-800 font-semibold mt-2">Jessica Brown</p>
              <p className="text-gray-500 italic">Fashion Enthusiast</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600">
                "The moment I walked into the store, I knew I was in for
                something special. Each piece is carefully selected and the
                attention to detail is evident. My wardrobe has never looked
                better!"
              </p>
              <p className="text-gray-800 font-semibold mt-2">Amanda Clark</p>
              <p className="text-gray-500 italic">Style Blogger</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600">
                "Shopping here has been an amazing experience. The variety of
                styles and the quality of the fabrics are exceptional. I always
                find exactly what I'm looking for, and the staff are always so
                welcoming."
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                Olivia Martinez
              </p>
              <p className="text-gray-500 italic">Fashion Blogger</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600">
                "I was looking for a special outfit for an event, and this store
                came through with flying colors. The personal attention and
                expert advice made all the difference. I felt like a star at my
                event!"
              </p>
              <p className="text-gray-800 font-semibold mt-2">Sophia Johnson</p>
              <p className="text-gray-500 italic">Event Planner</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12 text-center">
          <h2 className="text-heading3-bold font-bold text-gray-800 mb-4 text-center">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li>
              Commitment to Quality: We ensure that every product meets the
              highest standards of quality and craftsmanship.
            </li>
            <li>
              Customer-Centric Approach: Your satisfaction is our priority. We
              strive to provide an exceptional shopping experience.
            </li>
            <li>
              Innovation in Fashion: We continuously update our collection to
              bring you the latest trends and timeless classics.
            </li>
          </ul>
        </div>

        {/* Sustainability Efforts */}
        <div className="mb-12">
          <h2 className="text-heading3-bold font-bold text-gray-800 mb-4 text-center">
            Sustainability Efforts
          </h2>
          <p className="text-lg text-gray-600 text-center">
            We are dedicated to reducing our environmental impact. Our
            sustainable practices include sourcing eco-friendly materials,
            reducing waste, and promoting ethical production processes. Join us
            in making a positive impact on the planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
