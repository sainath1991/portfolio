import { Link, useLoaderData } from "react-router"
import Localizer from "../components/Localizer"

export default function BLogDetails() {
  const data = useLoaderData()
  return(
    <>
      <div class="px-40">
        <h2 class="text-3xl font-medium py-2">{data.title}</h2>
        <p class="py-2"><Localizer date={ data.createdAt }/></p>
        <p class="py-2">{data.description}</p>
        <div class="py-2">
          <Link class="border-1 rounded-lg border-black p-2 hover:bg-gray-400" to={'/blog'}>Back</Link>
        </div>
      </div>
    </>
  )
}

export const getBlogDetails = async ({params}) => {
  const res = await fetch(`http://localhost:3030/api/blogs/${params.id}`, {
    method: "GET",
  })
  const data = await res.json()
  return data
}