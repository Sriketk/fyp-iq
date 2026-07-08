import { BunHttpServer, BunRuntime } from "@effect/platform-bun"
import { Layer } from "effect"
import { HttpRouter } from "effect/unstable/http"
import { HttpApiBuilder, HttpApiSwagger } from "effect/unstable/httpapi"
import { Api } from "@fyp-iq/api"
import { PostsLive, UsersLive } from "./handlers"

const ApiLive = HttpApiBuilder.layer(Api).pipe(
  Layer.provide(UsersLive),
  Layer.provide(PostsLive),
)

const Main = HttpRouter.serve(
  Layer.mergeAll(ApiLive, HttpApiSwagger.layer(Api, { path: "/docs" })),
).pipe(Layer.provide(BunHttpServer.layer({ port: 3001 })))

BunRuntime.runMain(Layer.launch(Main))
