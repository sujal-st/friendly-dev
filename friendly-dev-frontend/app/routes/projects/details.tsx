import React from 'react'
import type { Route } from './+types/details'
import type { Project, StrapiProject, StrapiResponse } from '~/types'
import { Link } from 'react-router'

export async function loader({ request, params }: Route.LoaderArgs) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${params.id}&populate=*`)

  if (!res.ok)
    throw new Response('Project not found', { status: 404 })

  const json: StrapiResponse<StrapiProject> = await res.json();

  const item = json.data[0];
  const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured
  }
  return {project};
}



function ProjectDetailsPage({ loaderData }: Route.ComponentProps) {
  const {project} = loaderData;
  return (
    <>
      <Link to='/projects' className='bg-blue-500 px-4 py-1 rounded mb-4'>Back to Projects</Link>
      <div className='w-full grid gap-6 md:grid-cols-2 p-5'>
        <img src={project.image} alt={project.title} />
        <div className='px-5'>
          <h3 className='font-semibold text-xl text-blue-400 mb-4'>{project.title}</h3>
          <p className='text-sm text-gray-300 mb-2'>{project.description}</p>
          <div className='flex justify-between text-sm mb-2'>
            <span>{project.category}</span>
            <span>{(project.date)}</span>
          </div>
          <a href={project.url} target='_blank' className='inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition'>View Live site </a>
        </div>
      </div>
    </>
  )
}

export default ProjectDetailsPage
