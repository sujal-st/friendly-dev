import type { Route } from "./+types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Friendly Dev | About" },
        { name: "description", content: "Portfolio website" },
    ];
}

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">

      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img src="/images/profile.jpg" alt="profile" className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md" />

        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, I'm Sujal
          </h1>
          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet ipsam nostrum aliquam accusantium inventore, quidem vitae nemo sed est!
          </p>
        </div>
      </div>

      {/* bio */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          My Misison
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium quod atque inventore adipisci iusto repellendus doloremque consequuntur illum quae magni, mollitia totam eveniet aspernatur culpa, rerum esse non. Ut.
        </p>
      </div>

      {/* tech stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">
        Tech I use
      </h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'React',
          'Tailwind',
          'React',
          'Tailwind',
          'React',
          'Tailwind',
          'React',
          'Tailwind',
          'Nodejs'
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">{tech}</li>
        ))}
      </ul>
    </div>
  )
}

export default AboutPage
