import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { Post, StrapiPost, StrapiResponse } from "~/types";
import { Link } from "react-router";

export async function loader({ request, params }: Route.LoaderArgs) {
    const { slug } = params;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=media`);

    if (!res.ok) throw new Error("Failed to fetch data");

    const postJson: StrapiResponse<StrapiPost> = await res.json();

    if(!postJson.data.length) throw new Response("Not Found", {status:404})

    const item = postJson.data[0];

    const post ={
        id: item.id,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
        date: item.date,
        body: item.body,
        image: item.media?.url ? `${item.media.url}` : '/images/np-image.png'
    }

    return {post};
}

type BlogPostDetailProps = {
    loaderData: {
        post: Post    
    }
}

function details({ loaderData }: BlogPostDetailProps) {
    const { post } = loaderData;

    return (
        <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">{post.title}</h1>
            <p className="text-gray-400">{new Date(post.date).toDateString()}</p>
            <img src={post.image} alt={post.title} className="w-full h-64 rounded"/>
            <div className="prose prose-invert max-w-none mb-12">
                <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
            <Link to="/blog" className="text-white p-2 rounded-sm bg-blue-600 hover:bg-blue-800 transition">Back to Blog</Link>
        </div>
    )
}

export default details
