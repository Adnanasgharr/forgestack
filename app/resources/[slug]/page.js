import Navbarr from "@/components/Navbarr";
import { getResourceBySlug } from "@/lib/contentful";
import Backbtn from "@/components/Backbtn";


export default async function ResourcePage({ params }) {
  const { slug } = await params; // ✅ wait for params
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    return <p className="p-6 text-red-500">Resource not found!</p>;
  }

  const { title, description, category, tags, icon, url } = resource.fields;

  return (
    <main className="w-full h-full ">
      <Navbarr />
      <Backbtn />
      <div className="grid w-full h-full md:grid-cols-2 p-4">
        <div className="md:p-7">
          <div className="md:w-full  aspect-square rounded-2xl border-4 bg-[radial-gradient(ellipse_at_49%_57%,#2247136e_9%,#00000057)] border-zinc-600 flex items-center justify-center ">
            <div className="w-3/4 aspect-square">
              {icon && icon.fields?.file?.url && (
                <img
                  src={`https:${icon.fields.file.url}`}
                  alt={title}
                  className="object-cover w-full h-full rounded-2xl"
                />
              )}
            </div>
          </div>
        </div>
        <div className="pt-12 md:p-7 ">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">{title}</h1>
          <p className="text-lg text-[#CCCCCC]">{description}</p>

          {url && (
            <a
              href={url}
              target="_blank"
              className="inline-block px-10 py-4 my-10 text-xl font-bold text-black bg-amber-50 rounded-xl"
            >
              Visit Source
            </a>
          )}
          <div className="border-y-2 border-zinc-800 py-3 grid grid-cols-[1fr_2fr] w-full">
            <p>
              <strong>Category</strong>
            </p>
            <p className="text-md text-[#CCCCCC]">{category}</p>
          </div>

          <div className="grid grid-cols-[1fr_2fr] h-50 w-full">
            <div className="">
              <p className="py-3 text-md">
                <strong>Tags</strong>
              </p>
            </div>
            <div className="">
              <div>
                {tags?.map((tag, index) => (
                  <p
                    className="border-b-2 border-zinc-800 py-3 text-md text-[#CCCCCC]"
                    key={index}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
