import { createFileRoute } from "@tanstack/react-router"
import { useAtomValue } from "@effect/atom-react"
import { ApiClient } from "~/lib/api"

export const Route = (createFileRoute as any)("/")({
  component: Home,
})

const userByIdAtom = ApiClient.query("users", "user.byId", { params: { id: "1" } })

function Home() {
  const result = useAtomValue(userByIdAtom)

  return (
    <div>
      <h1>fyp-iq</h1>
      {result._tag === "Initial" && <p>loading...</p>}
      {result._tag === "Success" && <p>User: {result.value.name}</p>}
      {result._tag === "Failure" && <p>error: {String(result.cause)}</p>}
    </div>
  )
}
