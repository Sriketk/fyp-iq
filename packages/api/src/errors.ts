import { Schema } from "effect"

export class UserNotFound extends Schema.TaggedErrorClass<UserNotFound>()(
  "UserNotFound",
  { id: Schema.String },
  { httpApiStatus: 404 },
) {}

export class PostNotFound extends Schema.TaggedErrorClass<PostNotFound>()(
  "PostNotFound",
  { id: Schema.String },
  { httpApiStatus: 404 },
) {}
