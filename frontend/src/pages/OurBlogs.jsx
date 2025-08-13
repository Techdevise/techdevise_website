import SearchAlt from "/Search_alt.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// state images
import state1 from "/state1.webp";
import state2 from "/state2.webp";
import state3 from "/state3.webp";
import flag1 from "/flag1.svg";
import flag2 from "/flag2.svg";
import flag3 from "/flag3.svg";
import Location from "../components/Location";

const OurBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const BASE_URL = `${API_BASE_URL}/images`;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/blogs`);
        if (response.data.success) {
          setBlogs(response.data.data);
          setFilteredBlogs(response.data.data);
        } else {
          console.error("Error fetching blogs:", response.data.message);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Search filter logic
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query) ||
      blog.sub_title.toLowerCase().includes(query)
    );
    setFilteredBlogs(filtered);
  }, [searchQuery, blogs]);

  const addressList = [
    {
      bgimage: state1,
      flag: flag1,
      countryName: "India",
      address:
        "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071",
    },
    {
      bgimage: state2,
      flag: flag2,
      countryName: "United States",
      address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
    },
    {
      bgimage: state3,
      flag: flag3,
      countryName: "Netherland",
      address: "Paleisstraat 1, 1012 RB Amsterdam, Netherlands",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-[#00000066] h-[5.5rem]"></div>
      <section className="pt-[2.1875rem] pb-[3.125rem]">
        <div className="w-full max-w-[74.3125rem] mx-auto text-center text-black">
          <h1 className="text-[4rem] font-bold leading-[1] ">Our Blogs</h1>
          <p className="text-xl font-medium">
            Stay informed with the latest trends, insights, and expert advice in
            technology, business solutions, and industry innovations. Explore
            our blogs for valuable knowledge and updates.
          </p>

          {/* Search Input */}
          <div className="w-full max-w-[44.125rem] mx-auto mt-5 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog by topic or keyword"
              className="w-full text-xl font-medium text-[#9F9F9F] bg-[#F5F5F5] py-4 pl-[3.75rem] pr-4 rounded-[.625rem] outline-pine-400"
            />
            <img
              src={SearchAlt}
              alt="search icon"
              className="absolute w-6 h-6 top-4 left-4 z-10"
            />
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="my-[4.6875rem]">
        <div className="main-container">
          {filteredBlogs.length > 0 && (
  <div className="border border-[#157B6C] p-[1.0625rem] rounded-[1.25rem] max-lg:flex-col flex gap-[2rem] items-center mb-[3.125rem]">
    <img
      src={`${BASE_URL}/${filteredBlogs[0].image}`}
      alt={filteredBlogs[0].title}
      className="w-[42rem] md:max-w-1/2 max-w-full rounded-[1.25rem] object-cover"
    />
    <div className="grow">
      <h6 className="text-[#157B6C] text-xl flex gap-[1.125rem] items-center font-semibold mb-4">
        <span>{filteredBlogs[0].title}</span>
        <i className="w-2 h-2 rounded-2xl bg-[#157B6C] "></i>
        <span>{filteredBlogs[0].readTime}</span>
      </h6>
      <h3 className="text-[2.625rem] font-semibold mb-4">
        {filteredBlogs[0].sub_title}
      </h3>
      <p className="text-[#9F9F9F] text-xl font-medium">
        {formatDate(filteredBlogs[0].date)}
      </p>
    </div>
  </div>
)}

          {/* Filtered Blogs */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2.0625rem]">
            {filteredBlogs.map((item) => (
              <div key={item.id} className="group">
                <Link to={`/blog-detail/${item.id}`} className="block">
                  <div className="relative">
                    <img
                      src={`${BASE_URL}/${item.image}`}
                      alt="blog"
                      className="w-full rounded-[1.25rem] object-cover aspect-[1.6/1] block mb-[1.6875rem]"
                    />
                  </div>
                  <h6 className="text-[#157B6C] text-xl flex gap-[1.125rem] items-center font-semibold mb-4">
                    <span>{item.title}</span>
                    <span>{item.readTime}</span>
                  </h6>
                  <p className="text-xl mb-3.5">{item.sub_title}</p>
                  <div className="text-[#9F9F9F] text-xl font-medium">
                    {formatDate(item.date)}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="my-[4.6875rem]">
        <div className="main-container">
          <h2 className="text-[2.625rem] text-black font-semibold  mb-[1.6875rem]">
            Recent Blog
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2.0625rem]">
            {filteredBlogs.slice(0, 3).map((item, index) => (
              <div key={index} className="group">
                <Link to={`/blog-detail/${item.id}`} className="block">
                  <div className="relative">
                    <img
                      src={`${BASE_URL}/${item.image}`}
                      alt="blog"
                      className="w-full rounded-[1.25rem] object-cover aspect-[1.6/1] block mb-[1.6875rem]"
                    />
                  </div>
                  <h6 className="text-[#157B6C] text-xl flex gap-[1.125rem] items-center font-semibold mb-4">
                    <span>{item.title}</span> <span>{item.readTime}</span>
                  </h6>
                  <p className="text-xl mb-3.5 ">{item.sub_title}</p>
                </Link>
                <Link
                  to={item.link}
                  className="text-[#9F9F9F] text-xl font-medium underline"
                >
                  {item.tiem}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <Location />
    </>
  );
};

export default OurBlogs;
