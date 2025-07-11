import myImage from "../assets/my-image.jpg"
import otherImage from "../assets/image.png"
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="grid grid-cols-3 pt-25">
        <div className="col-span-2 px-40 py-10">
          <p className="text-[44px] font-bold">Hi, I am John,<br /> Creative Technologist</p>
          <p className="pt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <a className="px-7 py-2 mt-7 inline-block bg-orange-500 text-white">Download Resume</a>
        </div>
        <div className="py-10">
          <img className="w-60 h-60 rounded-full object-cover" src={myImage} alt="my image" />
        </div>
      </div>
      <div className="px-40 bg-slate-100">
        <div className="flex justify-between pt-3">
          <p className="text-[20px]">Recent posts</p>
          <p className="text-base text-blue-400"><a>View All</a></p></div>
        <div className="grid grid-cols-2 mt-3 pb-5 gap-x-7">
          <div className="bg-white p-5">
            <p className="font-bold text-2xl pb-5">Making a design system from scratch</p>
            <p className="pb-5">12 Feb 2020 | Design, Pattern</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className="bg-white p-5">
            <p className="font-bold text-2xl pb-5">Making a design system from scratch</p>
            <p className="pb-5">12 Feb 2020 | Design, Pattern</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
      <div className="px-40">
        <p className="py-4">Featured works</p>
        <div className="flex border-b-1 border-gray-400 mb-5 pb-5">
          <div className="">
            <img className="block w-[500px] h-[140px] object-cover rounded-[5px]" src={otherImage} />
          </div>
          <div className="flex flex-col ml-5">
            <div className="text-xl font-bold">Designing Dashboards</div>
            <div className="mt-2">
              <span className="bg-black rounded-full text-white font-semibold px-4 py-0.5">2020</span>
              <span className="mx-10 text-gray-400">Dashboard</span>
            </div>
            <p className="mt-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex border-b-1 border-gray-400 mb-5 pb-5">
          <div className="">
            <img className="block w-[500px] h-[140px] object-cover rounded-[5px]" src={otherImage} />
          </div>
          <div className="flex flex-col ml-5">
            <div className="text-xl font-bold">Designing Dashboards</div>
            <div className="mt-2">
              <span className="bg-black rounded-full text-white font-semibold px-4 py-0.5">2020</span>
              <span className="mx-10 text-gray-400">Dashboard</span>
            </div>
            <p className="mt-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex border-b-1 border-gray-400 mb-5 pb-5">
          <div className="">
            <img className="block w-[500px] h-[140px] object-cover rounded-[5px]" src={otherImage} />
          </div>
          <div className="flex flex-col ml-5">
            <div className="text-xl font-bold">Designing Dashboards</div>
            <div className="mt-2">
              <span className="bg-black rounded-full text-white font-semibold px-4 py-0.5">2020</span>
              <span className="mx-10 text-gray-400">Dashboard</span>
            </div>
            <p className="mt-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;