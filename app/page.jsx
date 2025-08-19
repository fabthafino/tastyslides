import Image from "next/image";

export default function Home() {

  return (
  <main>
    {/* hero section
    <section className="min-h-dvh bg-[url(/chef.jpg)] bg-no-repeat bg-center bg-cover bg-fixed">
    <div className=" min-h-dvh bg-black/40 flex items-center justify-center">
    <div className="lg:max-w-4xl max-lg:p-3 space-y-10">
      <h1 className="text-white text-center lg:text-6xl font-extrabold text-4xl">
        Welcome to <span className="text-yellow-600 font-semibold ">Tasty Slides</span></h1>
          <p className="text-gray-200 text-center lg:text-xl text-md">
            Your ultimate destination for delicious and easy-to-make recipes, cooking tips, and food inspiration.
            Whether you're a seasoned chef or a kitchen newbie browse through our recipe collection to discover new flavors, and get creative in the kitchen.
            We're passionate about food and can't wait to share our passion with you <br/> <br />
            <span className="italic font-semibold  text-2xl">Explore, Cook, Enjoy!</span>
          </p>

      <div className=" flex max-md:flex-col items-cetner justify-center gap-10">
        <Link href={"#"} className="bg-yellow-600 text-white px-10 py-5 rounded-md text-xl font-bold 
        hover:bg-yellow-700 transition-colors duration-300 text-center">Get Started</Link>
        <Link href={"#"} className=" bg-gray-200 text-black px-10 py-5 rounded-md text-xl font-bold 
        hover:bg-gray-200 transition-colors duration-300 text-center">Our Story</Link>
      </div> *
    </div>
    </div>
    </section> */}

       {/* HEADLINE */}
   <section>
   <div className="bg-beige-300 py-16 px-6 sm:px-8 lg:px-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* Left Side - Image */}
    <div className="flex justify-center">
      <div className="  w-80 h-80  sm:w-96 sm:h-96">
        <img
          src="welcome.jpg" alt="Chef" className="w-auto h-auto" />
      </div>
    </div>

    {/* Right Side - Content */}
    <div>
      <h2 className="lg:text-5xl text-3xl font-bold text-gray-900 mb-4 ">
        Welcome to <span className="text-yellow-500 font-semibold ">Tasty Slides</span>
      </h2>
      <p className="text-gray-800 mb-6 text-justify ">
      Your ultimate destination for delicious and easy-to-make recipes, cooking tips, and food inspiration. 
      Whether you're a seasoned chef or a kitchen newbie browse through our recipe collection to discover new flavors, and get creative in the kitchen.
      We're passionate about food and can't wait to share our passion with you
      </p>

      {/* Button */}
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full 
      cursor-pointer transition">
        About Us
      </button>
    </div>
  </div>
</div>
        </section>

    {/* popular food section */}
    {/* <section className="space-y-2">
   <div className="items-center justify-center bg-white p-5 space-y-3">
    <h2 className="lg:text-3xl text-2xl font-bold text-black">Popular Foods!</h2>

    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-3 w-full items-center justify-center">
    <div className="relative cursor-pointer space-y-2">
      <div> <img src="jollof.jpg" alt="food" className="rounded-sm object-contain w-full"/></div>
      <div>
        <h2 className="lg:text-2xl text-l font-medium text-center justify-center">Jollof Rice</h2>
      <p className="lg:text-base text-xs px-2 text-justify">A West African classic, is a one-pot wonder that's easy
        to make and packed with spicy goodness. Get ready for a flavor explosion!
      </p>
    </div>
    </div>
    <div className="relative cursor-pointer space-y-2">
      <div> <img src="afang.jpeg" alt="food" className="rounded-sm object-contain w-full"/></div>
      <div>
        <h2 className="lg:text-2xl text-l font-medium text-center justify-center">Afang Soup</h2>
      <p className="lg:text-base text-xs px-2 text-justify">
       Nigeria's deliciously rich & spicy stew made with afang leaves, meat or fish, and a blend of flavorful spices.
       A true West African culinary delight! </p>
    </div>
    </div>
    <div className="relative cursor-pointer space-y-2">
      <div> <img src="egusi.jpg" alt="food" className="rounded-sm object-contain w-full"/></div>
      <div>
        <h2 className="lg:text-2xl text-l font-medium text-center justify-center">Egusi Soup</h2>
      <p className="lg:text-base text-xs px-2 text-justify">
        A Nigerian favorite made with ground melon seeds, vegetables, and your choice of protein.
        Rich, flavorful, and nourishing - a West African classic!</p>
    </div>
    </div>
    <div className="relative cursor-pointer space-y-2">
      <div> <img src="yam.jpg" alt="food" className="rounded-sm object-contain w-full"/></div>
      <div>
        <h2 className="lg:text-2xl text-l font-medium text-center justify-center">Yam and Egg</h2>
      <p className="lg:text-base text-xs px-2 text-justify">
        A match made in heaven! Boiled or fried yam paired with scrambled or fried eggs - a simple satisfying Nigerian combo.
      </p>
    </div>
    </div>
    </div>
  </div>
    </section> */}

    {/* POPULAR FOOD */}
       <section>
 <div className="py-7 sm:px-6 lg:px-13">
  <div className="">
    {/* Header */}
    <div className="flex items-center justify-center mb-5">
      <h2 className="text-2xl font-bold text-black  items-center justify-center uppercase ml-2">Our Most Popular Foods!</h2>
    </div>

    {/* Chefs Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Card 1 */}
      <div className="shadow-md p-3 cursor-pointer">
        <img
          src="jollof.jpg" alt="jollof rice" className="w-auto h-auto rounded-lg" />
        <h3 className="mt-3 ml-2 text-xl font-semibold text-gray-900">Jollof Rice</h3>
      <p className="lg:text-base text-xs px-2 text-justify">A West African classic, is a one-pot wonder that's easy
        to make and packed with spicy goodness. Get ready for a flavor explosion!
      </p>
      </div>

      {/* Card 2 */}
     <div className="shadow-md p-3 cursor-pointer">
        <img
          src="afang.jpeg" alt="Afang Soup" className="w-auto h-auto rounded-lg" />
        <h3 className="mt-3 ml-2 text-xl font-semibold text-gray-900">Afang Soup</h3>
      <p className="lg:text-base text-xs px-2 text-justify">
       Nigeria's deliciously rich & spicy stew made with afang leaves, meat or fish, and a blend of flavorful spices.
       A true West African culinary delight! </p>
      </div>

      {/* Card 3 */}
     <div className="shadow-md p-3 cursor-pointer">
        <img
          src="egusi.jpg" alt="Egusi Soup" className="w-auto h-auto rounded-lg" />
        <h3 className="mt-3 ml-2 text-xl font-semibold text-gray-900">Egusi Soup</h3>
      <p className="lg:text-base text-xs px-2 text-justify">
        A Nigerian favorite made with ground melon seeds, vegetables, and your choice of protein.
        Rich, flavorful, and nourishing - a West African classic!</p>
      </div>

      {/* Card 4 */}
     <div className="shadow-md p-3 cursor-pointer">
        <img
          src="yam.jpg" alt="Yam and Egg" className="w-auto h-auto rounded-lg" />
        <h3 className="mt-3 ml-2 text-xl font-semibold text-gray-900 "><br />Yam and Egg</h3>
      <p className="lg:text-base text-xs px-2 text-justify">
        A match made in heaven! Boiled or fried yam paired with scrambled or fried eggs - 
        a simple satisfying Nigerian combo.</p>
      </div>
      </div>
     </div>
    </div>
  </section>


        {/* choose us section */}
    <section>
   <div className="bg-gray-600 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl font-extrabold text-gray-100   sm:text-4xl">
      WHY CHOOSE US?
    </h2>
    <p className="mt-2 text-gray-300  mx-auto lg:text-xl text-sm">
      Because you get the best food recipes from us.
    </p>

    {/* Feature Grid */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
        <div className="text-green-500 text-4xl mb-4">
         <img src="bee.png" alt="bee" className="w-auto h-25"/>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Healthy Food</h3>
        <p className="mt-2 text-gray-500 text-sm">
          We serve all healthy food here. You can choose any food you like.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
        <div className="text-green-500 text-4xl mb-4">
        <img src="badge.png" alt="bee" className="w-auto h-25"/>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Best Quality</h3>
        <p className="mt-2 text-gray-500 text-sm">
          Our food is excellent. You will get exactly what you want here.
        </p>
      </div>
    </div>
  </div>
</div>
</section>

      {/* content creators section */}
 <section>
 <div className="py-7 sm:px-6 lg:px-13">
  <div className="">
    {/* Header */}
    <div className="flex items-center justify-center mb-5">
      <h2 className="text-2xl font-bold text-black  items-center justify-center uppercase ml-2">Our Top Content Creators</h2>
    </div>

    {/* Chefs Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Card 1 */}
      <div className="shadow-md text-center p-3 cursor-pointer">
        <img
          src="people5.jpg" alt="CC 2" className="w-auto h-auto rounded-lg" />
        <h3 className="mt-3 text-lg font-semibold text-gray-900">John Doe</h3>
      </div>

      {/* Card 2 */}
        <div className="shadow-md text-center p-3 cursor-pointer">
        <img
          src="people2.jpg" alt="CC 2" className="w-auto h-auto rounded-lg" />
        <h3 className="mt-3 text-lg font-semibold text-gray-900">Jane Doe</h3>
      </div>

      {/* Card 3 */}
      <div className="shadow-md text-center p-3 cursor-pointer">
        <img
          src="people3.jpg" alt="CC 3" className="w-auto h-auto rounded-lg" />
        <h3 className="mt-3 text-lg font-semibold text-gray-900">Jane Wick</h3>
      </div>

      {/* Card 4 */}
      <div className="shadow-md text-center p-3 cursor-pointer">
        <img
          src="people1.jpg" alt="CC 4" className="w-auto h-auto rounded-lg" />
        <h3 className="mt-3 text-lg font-semibold text-gray-900">John Wick</h3>
      </div>
      </div>
     </div>
    </div>
  </section>


      {/* NEWSLETTER 1 */}
    <section>
      {/* Content */}
  <div className=" flex flex-col items-center justify-center px-6 py-10 text-center text-gray-800">
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold ">
      Get new contents by <br/>Subscribing to our Newsletter
    </h2>

    {/* Input + Button */}
    <form className="mt-4 flex w-full max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 sm:px2 sm:py-1 text-gray-900 border"
      />
      <button
        type="submit"
        className="bg-orange-500 px-5 py-2 text-white font-medium hover:bg-orange-600 transition"
      >
        Subscribe
      </button>
    </form>
  </div>
  </section>

  </main>
  );
};