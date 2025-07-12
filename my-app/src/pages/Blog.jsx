import { Link, useLoaderData } from "react-router";
import Footer from "../components/Footer";
import Localizer from "../components/Localizer";

export default function Blog() {
  const data = useLoaderData()
  return (
    <>
      <div className="text-4xl font-bold px-40 py-10">Blog</div>
      <div className="flex flex-col mx-40">
        { data.map( (item, index) => (
          <div key={item.id}>
            <div className="font-semibold text-2xl"><Link to={`${item.id}`}>{item.title}</Link></div>
            <div className="mt-2">
              <Localizer date={item.createdAt} />
              {/* <span>12 Feb 2019</span> */}
              <span className="px-5">|</span>
              <span className="text-gray-400">Express, Handlebars</span>
            </div>
            <div className="mt-2 border-b-1 border-gray-500 mb-5 pb-5">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export const blogsLoader = async () => {
  const res = await fetch('http://localhost:3030/api/blogs', {
    method: "GET",
  })
  const data = await res.json()
  return data
}
