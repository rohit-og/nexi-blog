import { blog_data } from "@/assets/assets";
import { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "py-1 px-4"
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "py-1 px-4"
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "py-1 px-4"
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "py-1 px-4"
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog, index) => {
            return (
              <BlogItem
                key={index}
                id={blog.id}
                image={blog.image}
                title={blog.description}
                category={blog.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
