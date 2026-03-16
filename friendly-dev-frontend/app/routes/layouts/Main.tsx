import { Outlet } from "react-router"
import Hero from "~/components/Hero";
import type { Route } from "../home/+types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Friendly Dev" },
        { name: "description", content: "Portfolio website" },
    ];
}

function MainLayout() {
  return (
    <>
    <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet/>
    </section>
    </>
  )
}

export default MainLayout
