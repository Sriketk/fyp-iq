import { HttpApi, OpenApi } from "effect/unstable/httpapi"
import { UsersGroup } from "./groups/users"
import { PostsGroup } from "./groups/posts"

export const Api = HttpApi.make("fyp-iq")
  .add(UsersGroup)
  .add(PostsGroup)
  .annotateMerge(
    OpenApi.annotations({
      title: "fyp-iq API",
      version: "0.0.0",
      description: "fyp-iq HTTP API surface.",
    }),
  )
