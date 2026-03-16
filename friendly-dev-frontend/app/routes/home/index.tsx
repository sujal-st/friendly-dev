import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import LatestPosts from "~/components/LatestPosts";
import type { Project, StrapiPost, StrapiProject, StrapiResponse } from "~/types";
import type { Post } from "~/types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Friendly Dev | Welcome" },
        { name: "description", content: "Portfolio website" },
    ];
}


export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
    const url = new URL(request.url);
    const [projectRes, postRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`),
        fetch(`${import.meta.env.VITE_API_URL}/posts?sort=date:desc&populate=media`)
    ]);

    const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
    if (!projectRes.ok || !postRes.ok) throw new Error("Failed to fetch projects or posts")

    const postJson: StrapiResponse<StrapiPost> = await postRes.json();

    const [projects, posts] = await Promise.all([
        projectJson.data.map((item) => (
            {
                id: item.id,
                documentId: item.documentId,
                title: item.title,
                description: item.description,
                image: item.image?.url ? `${item.image.url}` : '/images/no-iamge.png',
                url: item.url,
                date: item.date,
                category: item.category,
                featured: item.featured
            }
        )),
        postJson.data.map((item) => (
            {
                id: item.id,
                title: item.title,
                excerpt: item.excerpt,
                image: item.media?.url ? `${item.media.url}` : '/images/no-iamge.png',
                slug: item.slug,
                date: item.date,
                body: item.body,
            }
        ))
    ])

    return { projects, posts }
}

function HomePage({ loaderData }: Route.ComponentProps) {
    const { projects, posts } = loaderData as { projects: Project[], posts: Post[] }



    return (
        <>
            <FeaturedProjects projects={projects} count={2} />
            <LatestPosts posts={posts} />
        </>
    )
}
export default HomePage;
