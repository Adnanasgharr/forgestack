"use client";
import Image from "next/image";
import { useState, useMemo, useRef } from "react";

export default function ResourceTabs({ resources }) {
  const categoryOrder = [
    "All",
    "Tools",
    "Fonts",
    "Color",
    "Icons",
    "Inspiration",
    "Technologies",
    "Components",
    "YT Channels",
  ];

  const categoriesFromData = [
    ...new Set(resources.map((item) => item.fields.category)),
  ];

  const categories = categoryOrder.filter(
    (cat) => cat === "All" || categoriesFromData.includes(cat)
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  // 🆕 Create a ref for scrolling to top
  const listRef = useRef(null);

  const filteredResources = useMemo(() => {
    return activeCategory === "All"
      ? resources
      : resources.filter((item) => item.fields.category === activeCategory);
  }, [activeCategory, resources]);

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResources = filteredResources.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    // 🆕 Scroll to top of list when changing category
    listRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // 🆕 Scroll to top of list when changing page
    listRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full md:px-10 p-4 bg-black" ref={listRef}>
      {/* Tabs */}
      <div className="sticky top-5 md:p-4 p-2 z-50 md:w-[80%] w-full mx-auto bg-black/90 backdrop-blur-md flex justify-center items-center mb-8 rounded-2xl shadow">
        <div
          className="flex items-center gap-2 md:gap-3 overflow-x-auto whitespace-nowrap"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2  rounded-xl text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "text-gray-300 bg-[#0D0D0D] hover:bg-[#2A2A2A] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered List */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {currentResources.map((item) => (
          <a
            key={item.sys.id}
            href={`/resources/${item.fields.slug}`}
            className="block border group border-[#2F2F2F] rounded-4xl p-5 shadow-sm hover:border-[#00ADB5] transition bg-[#0D0D0D]"
          >
            {item.fields.icon && (
              <div className="w-full mb-3 h-60 rounded-4xl overflow-hidden">
                <Image
                  src={`https:${item.fields.icon.fields.file.url}`}
                  alt={item.fields.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-4xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )}
            <div className="mt-8">
              <h2 className="mb-2 text-xl font-semibold">
                {item.fields.title}
              </h2>
              {item.fields.tags && (
                <p className="text-sm text-gray-500">
                  {item.fields.tags.join(", ")}
                </p>
              )}
              <div className="flex items-center justify-between">
                <p className="inline-block px-2 py-1 mt-4 text-sm text-black bg-white rounded-full">
                  {item.fields.category}
                </p>
                <div className="aspect-square w-8 rounded-xl bg-gray-400 hidden items-center justify-center group-hover:flex">
                  <i className="ri-arrow-right-up-line text-2xl font-light"></i>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10 mb-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-zinc-700 bg-black text-white hover:bg-zinc-900 disabled:opacity-40 transition"
          >
            ← Previous
          </button>
          <span className="text-[#CCCCCC]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-zinc-700 bg-black text-white hover:bg-zinc-900 disabled:opacity-40 transition"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}
