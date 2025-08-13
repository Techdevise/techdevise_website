import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Location from '../components/Location';

const BlogDetail = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const BASE_URL = `${API_BASE_URL}/images`;

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                // Fetch the specific blog
                const blogResponse = await axios.get(`${API_BASE_URL}/api/blogs/${id}`);
                if (blogResponse.data.success) {
                    setBlogData(blogResponse.data.data);
                }

                // Fetch related blogs (excluding current one)
                const blogsResponse = await axios.get(`${API_BASE_URL}/api/blogs`);
                if (blogsResponse.data.success) {
                    setRelatedBlogs(
                        blogsResponse.data.data
                            .filter(blog => blog.id !== id)
                            .slice(0, 3)
                    );
                }
            } catch (error) {
                console.error("Error fetching blog data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [id, API_BASE_URL]);

    if (loading) {
        return <div className="main-container py-10">Loading...</div>;
    }

    if (!blogData) {
        return <div className="main-container py-10">Blog not found</div>;
    }

    return (
        <>
            <div className="bg-[#00000066] h-[4.5rem]"></div>
            <section className='pt-[2.1875rem] pb-[1.8125rem]'>
                <div className="w-full max-w-[60.873rem] mx-auto text-center text-black">
                    <h1 className='text-[42px] font-semibold mb-4'>
                        {blogData.title}
                    </h1>
                    <h6 className='text-[20px] text-[#9F9F9F] font-medium'>
                        {formatDate(blogData.date || blogData.createdAt)}
                    </h6>
                </div>
            </section>
            
            <section className='mb-[4.6875rem]'>
                <div className="main-container">
                    {blogData.image && (
                        <img 
                            src={`${BASE_URL}/${blogData.image}`} 
                            alt="blog" 
                            className='w-full max-h-[583px] rounded-[1.25rem] object-cover block mb-7' 
                        />
                    )}
                    <div className='prose max-w-none text-xl leading-[1.6]'>
                        {blogData.sub_title && (
                            <div dangerouslySetInnerHTML={{ __html: blogData.sub_title }} />
                        )}
                    </div>
                </div>
            </section>
            
            {relatedBlogs.length > 0 && (
                <section className='my-[4.6875rem]'>
                    <div className="main-container">
                        <h2 className='text-[2.625rem] text-black font-semibold mb-[1.6875rem]'>Recent Blog</h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2.0625rem]">
                            {relatedBlogs.map((blog) => (
                                <Link 
                                    to={`/blog-detail/${blog.id}`} 
                                    key={blog.id} 
                                    className='group block'
                                >
                                    <div className="relative">
                                        {blog.image && (
                                            <img 
                                                src={`${BASE_URL}/${blog.image}`} 
                                                alt="blog" 
                                                className='w-full rounded-[1.25rem] object-cover aspect-[1.6/1] block mb-[1.6875rem]' 
                                            />
                                        )}
                                    </div>
                                    <h6 className='text-[#157B6C] text-xl flex gap-[1.125rem] items-center font-semibold mb-4'>
                                        <span>{blog.title}</span>
                                    </h6>
                                    <h5 className='text-xl font-bold text-black mb-1.5'>{blog.heading}</h5>
                                    <p className='text-xl mb-3.5 line-clamp-2'>{blog.sub_title}</p>
                                    <div className='text-[#9F9F9F] text-xl font-medium'>
                                        {formatDate(blog.date || blog.createdAt)}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            
            <Location />
        </>
    );
};

export default BlogDetail;