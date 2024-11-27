import ArticleCard from "./ArticleCard"
import { useBlogs } from "../shared/BlogContext"
import { Blog } from "../types"
import React from "react"

interface ArticleListProps {
  onEdit: (blog: Blog) => void
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogs();
  return (
    <div>
      <div className="ml-[5rem]">
        {blogs.map((blog)=>
         <ArticleCard 
         key={blog.id}
         article={blog}
         onDelete={() =>deleteBlog(blog.id)}
         onEdit={() => onEdit(blog)}
         />
        )}
       
      </div>


    </div>
  )
}

export default ArticleList
