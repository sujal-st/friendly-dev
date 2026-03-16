import { Link } from 'react-router';
import type { Post } from '~/types'

type LatestPostsProps = {
    posts: Post[];
    count?: number
}

function LatestPosts({ posts, count = 3 }: LatestPostsProps) {


    return (
        <section className='max-w-6xl mx-auto px-6 py-12'>
            <h2 className="text-2xl font-bold mb-6 text-white">
                Latest Posts
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p)=>(
                    <Link 
                        className='block p-4 border border-gray-700 rounded-lg bg-gray-800 hover:shadow-md transition'
                        key={p.slug}
                        to={`/blog/${p.slug}`}>
                        <h3 className="text-lg font-semibold text-blue-400 mb-1">
                            {p.title}
                        </h3>

                        <p className='text-gray-300 text-sm'>{p.excerpt}</p>
                        <span className='text-xs block mt-3 text-gray-400'>{new Date(p.date).toDateString()}</span>
                    </Link>
                )).slice(0,count)}
            </div>
        </section>
    )
}

export default LatestPosts
