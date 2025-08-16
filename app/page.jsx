import Image from "next/image";

export default function Home() {

  return (
  <main className="min-h-dvh bg-[url(/chef.jpg)] bg-no-repeat bg-center bg-cover bg-fixed">
    <section className=" min-h-dvh bg-black/40 flex items-center justify-center">
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
    </section>

  </main>
  );
};