import Image from "next/image";

export default function Home() {

  return (
  <main>
    {/* hero section */}
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

      {/* <div className=" flex max-md:flex-col items-cetner justify-center gap-10">
        <Link href={"#"} className="bg-yellow-600 text-white px-10 py-5 rounded-md text-xl font-bold 
        hover:bg-yellow-700 transition-colors duration-300 text-center">Get Started</Link>
        <Link href={"#"} className=" bg-gray-200 text-black px-10 py-5 rounded-md text-xl font-bold 
        hover:bg-gray-200 transition-colors duration-300 text-center">Our Story</Link>
      </div> */}
    </div>
    </div>
    </section>

    {/* new section */}
    <section className="space-y-2">
   <div className="items-center justify-center bg-white p-5 space-y-3">
    <h2 className="lg:text-3xl text-1xl font-bold text-black">Popular Foods!</h2>

    <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 w-full items-center justify-center">
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
    </section>

  </main>
  );
};