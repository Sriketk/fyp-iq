import { Schema } from "effect"
import { HttpApiEndpoint, HttpApiGroup, OpenApi } from "effect/unstable/httpapi"
import { Post } from "@fyp-iq/schema/post"
import { PostNotFound } from "../errors"

export const PostsGroup = HttpApiGroup.make("posts")
  .add(
    HttpApiEndpoint.get("post.byId", "/api/posts/:id", {
      params: { id: Post.ID },
      success: Post.Info,
      error: PostNotFound,
    }).annotateMerge(
      OpenApi.annotations({
        summary: "Get post by id",
        description: "Fetch a single post by its id.",
      }),
    ),
  )
  .add(
    HttpApiEndpoint.post("post.create", "/api/posts", {
      payload: Schema.Struct({
        title: Schema.String,
        authorId: Schema.String,
      }),
      success: Post.Info,
    }).annotateMerge(
      OpenApi.annotations({
        summary: "Create post",
        description: "Create a new post with the given title and author.",
      }),
    ),
  )
  .add(
    HttpApiEndpoint.get("post.list", "/api/posts", {
      success: Schema.Array(Post.Info),
    }).annotateMerge(
      OpenApi.annotations({
        summary: "List posts",
        description: "Return all known posts.",
      }),
    ),
  )
