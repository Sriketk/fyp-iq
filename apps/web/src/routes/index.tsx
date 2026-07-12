import { createFileRoute } from "@tanstack/react-router"

export const Route = (createFileRoute as any)("/")({
  component: Home,
})

function Home() {
  return (
    <div>
      <h1>fyp-iq</h1>
      <p>ai watches your fyp. gets you a score.</p>
    </div>
  )
}
