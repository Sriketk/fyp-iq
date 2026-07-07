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
// Without pipe (desugared, nested inside-out):
//   x.pipe(f, g) === g(f(x))
// const ApiLive = Layer.provide(PostsLive)(
//   Layer.provide(UsersLive)(HttpApiBuilder.layer(Api)),
// )

const Main = HttpRouter.serve(
  Layer.mergeAll(ApiLive, HttpApiSwagger.layer(Api, { path: "/docs" })),
).pipe(Layer.provide(BunHttpServer.layer({ port: 3001 })))
// Without pipe (desugared, nested inside-out):
// const Main = Layer.provide(BunHttpServer.layer({ port: 3001 }))(
//   HttpRouter.serve(
//     Layer.mergeAll(ApiLive, HttpApiSwagger.layer(Api, { path: "/docs" })),
//   ),
// )

BunRuntime.runMain(Layer.launch(Main))
