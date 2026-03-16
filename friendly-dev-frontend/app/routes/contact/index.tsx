import React from 'react'
import type { Route } from './+types'

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Friendly Dev | Contact" },
        { name: "description", content: "Portfolio website" },
    ];
}

// export async function action({request}:Route.ActionArgs){
//     const formData = await request.formData();
//     const name= formData.get('name') as string;
//     const email= formData.get('email') as string;
//     const subject= formData.get('subject') as string;
//     const message= formData.get('message') as string;

//     const errors:Record<string,string> = {};

//     if(!name) errors.name = "Name is required";
//     if(!email){
//         errors.email = "Email is required";
//     }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
//         errors.email = "Invalid email format";
//     }
//     if(!subject) errors.subject = "Subject is required";
//     if(!message) errors.message = "Message is required";

//     if(Object.keys(errors).length>0){
//         return {errors}
//     }

//     const data={
//         name,
//         email,
//         subject,
//         message
//     }

//     return {message: "Form submitted successfully", data}
// }

function ContactPage({actionData}:Route.ComponentProps) {

    // const errors = actionData?.errors || {};

    return (
        <>
            <h2 className='h2 text-3xl font-bold text-white mb-8 text-center'
            >
                Contact Me
            </h2>

            {/* {actionData?.message ? (
                <p className='text-green-200 text-center rounded bg-green-700 py-2 mb-2'>{actionData.message}</p>
            ): null} */}
            <form action='https://formspree.io/f/mpqyyqlq' method='post' className='space-y-5'>
                <div>
                    <label htmlFor='name' className='text-sm text-gray-300 block font-medium'>
                        Full Name
                    </label>
                    <input type="text" className='px-2 w-full mt-1 py-2 border border-gray-700 rounded-lg bg-gray-800' id='name' name="name"/>
                    {/* {errors.name && (
                        <p className='text-red-500 bg-gray-700 mt-3 rounded-sm p-2'>{errors.name}</p>
                    )} */}
                </div>
                <div>
                    <label htmlFor='email' className='text-sm text-gray-300 block font-medium'>
                        Email
                    </label>
                    <input type="email" className='px-2 w-full mt-1 py-2 border border-gray-700 rounded-lg bg-gray-800' id='email' name="email"/>
                    {/* {errors.email && (
                        <p className='text-red-500 bg-gray-700 mt-3 rounded-sm p-2'>{errors.email}</p>
                    )} */}
                </div>
                <div>
                    <label htmlFor='subject' className='text-sm text-gray-300 block font-medium'>
                        Subject
                    </label>
                    <input type="text" className='px-2 w-full mt-1 py-2 border border-gray-700 rounded-lg bg-gray-800' id='subject' name="subject"/>
                    {/* {errors.subject && (
                        <p className='text-red-500 bg-gray-700 mt-3 rounded-sm p-2'>{errors.subject}</p>
                    )} */}
                </div>
                <div>
                    <label htmlFor='message' className='text-sm text-gray-300 block font-medium'>
                        Message
                    </label>
                    <textarea className='px-2 w-full mt-1 py-2 border border-gray-700 rounded-lg bg-gray-800' id='message' name="message"/>
                    {/* {errors.message && (
                        <p className='text-red-500 bg-gray-700 mt-3 rounded-sm p-2'>{errors.message}</p>
                    )} */}
                </div>

                <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 cursour-pointer'>
                    Send Message
                </button>
            </form>
        </>
    )
}

export default ContactPage
