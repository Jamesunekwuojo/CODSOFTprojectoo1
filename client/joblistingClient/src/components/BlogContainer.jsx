// BlogContainer.js
import {useState, useEffect} from 'react';
import Blogform from './Blogform';
import BlogCard from './BlogCard';

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);



  useEffect(() => {
    // Fetch the blog posts from localStorage
    const storedBlogs = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setBlogs(storedBlogs);
  }, []);



  
  const addBlogPost = (formData) => {
    setBlogs([...blogs, formData]);
  };

  return (
    <div>
      <Blogform onSubmit={addBlogPost} />
      <div className="mt-4">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            imageSrc={blog.profilePhotoURL} // Assuming this is a URL to the uploaded image
            date={blog.date}
            readTime={blog.readTime}
            title={blog.articleTitle}
            author={blog.authorName}
            articleLink={blog.articleLink} // Assuming there's a link to the full article
          />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
