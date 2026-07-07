export * as User from "./user"

import { Schema } from "effect"

export const ID = Schema.String
export type ID = typeof ID.Type

export interface Info extends Schema.Schema.Type<typeof Info> {}
export const Info = Schema.Struct({
  id: ID,
  name: Schema.String,
})
