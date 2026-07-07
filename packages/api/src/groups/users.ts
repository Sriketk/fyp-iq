import { Schema } from "effect"
import { HttpApiEndpoint, HttpApiGroup, OpenApi } from "effect/unstable/httpapi"
import { User } from "@fyp-iq/schema/user"
import { UserNotFound } from "../errors"

export const UsersGroup = HttpApiGroup.make("users")
  .add(
    HttpApiEndpoint.get("user.byId", "/api/users/:id", {
      params: { id: User.ID },
      success: User.Info,
      error: UserNotFound,
    }).annotateMerge(
      OpenApi.annotations({
        summary: "Get user by id",
        description: "Fetch a single user by their id.",
      }),
    ),
  )
  .add(
    HttpApiEndpoint.post("user.create", "/api/users", {
      payload: Schema.Struct({ name: Schema.String }),
      success: User.Info,
    }).annotateMerge(
      OpenApi.annotations({
        summary: "Create user",
        description: "Create a new user with the given name.",
      }),
    ),
  )
  .add(
    HttpApiEndpoint.get("user.list", "/api/users", {
      success: Schema.Array(User.Info),
    }).annotateMerge(
      OpenApi.annotations({
        summary: "List users",
        description: "Return all known users.",
      }),
    ),
  )
