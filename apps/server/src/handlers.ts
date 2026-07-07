import { Effect } from "effect"
import { HttpApiBuilder } from "effect/unstable/httpapi"
import { Api } from "@fyp-iq/api"
import { PostNotFound, UserNotFound } from "@fyp-iq/api/errors"

export const UsersLive = HttpApiBuilder.group(Api, "users", (h) =>
  h
    .handle("user.byId", ({ params }) =>
      params.id === "1"
        ? Effect.succeed({ id: params.id, name: "Alice" })
        : Effect.fail(new UserNotFound({ id: params.id })),
    )
    .handle("user.create", ({ payload }) =>
      Effect.sync(() => ({ id: crypto.randomUUID(), name: payload.name })),
    )
    .handle("user.list", () =>
      Effect.succeed([
        { id: "1", name: "Alice" },
        { id: "2", name: "Bob" },
      ]),
    ),
)

export const PostsLive = HttpApiBuilder.group(Api, "posts", (h) =>
  h
    .handle("post.byId", ({ params }) =>
      params.id === "1"
        ? Effect.succeed({ id: params.id, title: "Hello", authorId: "1" })
        : Effect.fail(new PostNotFound({ id: params.id })),
    )
    .handle("post.create", ({ payload }) =>
      Effect.sync(() => ({
        id: crypto.randomUUID(),
        title: payload.title,
        authorId: payload.authorId,
      })),
    )
    .handle("post.list", () =>
      Effect.succeed([
        { id: "1", title: "Hello", authorId: "1" },
        { id: "2", title: "World", authorId: "2" },
      ]),
    ),
)
