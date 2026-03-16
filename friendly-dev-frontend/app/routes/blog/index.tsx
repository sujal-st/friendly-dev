import { useState } from "react";
import type { Route } from "./+types/index"
import type { Post, StrapiPost, StrapiResponse } from "~/types";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import BlogFilter from "~/components/BlogFilter";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Friendly Dev | Blog" },
        { name: "description", content: "Portfolio website" },
    ];
}

export async function loader({request}:Route.LoaderArgs):Promise<{posts: Post[]}>{

  const postRes= await fetch(`${import.meta.env.VITE_API_URL}/posts?populate=media&sort=date:desc`);
  
  if(!postRes.ok) throw new Error("Failed to fetch data");

  const postsJson:StrapiResponse<StrapiPost> = await postRes.json();

  const posts=postsJson.data.map((item)=>({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
    date: item.date,
    body: item.body,
    image: item.media?.url ? `${item.media.url}`:'/images/np-image.png'
  }))


  return {posts};

}

function BlogPage({loaderData}:Route.ComponentProps) {
  const [searchQuery, setSearchQuery]= useState("");
  const [currentPage, setCurrentPage]= useState(1);
  const postsPerPage= 5;

  
  const {posts} = loaderData;
  
  const filteredPosts = posts.filter((p)=>{
    const query = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query)
    )
  })

  const totalPages= Math.ceil(filteredPosts.length/postsPerPage);
  const LastIndex = currentPage * postsPerPage;
  const firstIndex = LastIndex - postsPerPage;
  const currentPosts = filteredPosts.slice(firstIndex, LastIndex);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-900">
      <h2 className="text-3xl text-whtie font-bold mb-8">
        Blog
      </h2>
      <BlogFilter searchQuery={searchQuery} onSearchChange={(query)=>{
        setSearchQuery(query);
        setCurrentPage(1);
        }}/>
      <div className="space-y-8">
        {currentPosts.length===0?(<p className="text-center text-gray-400">No posts found</p>
      ):(
        currentPosts.map((p)=>(
        <PostCard key={p.slug} post={p}/>
      ))
      )}
      </div>

      {totalPages>1 &&(
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page)=>setCurrentPage(page)}/>
      )}
    </div>
  )
}

export default BlogPage
