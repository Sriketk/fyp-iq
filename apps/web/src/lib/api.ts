import { FetchHttpClient } from "effect/unstable/http"
import { AtomHttpApi } from "effect/unstable/reactivity"
import { Api } from "@fyp-iq/api"

export class ApiClient extends AtomHttpApi.Service<ApiClient>()("ApiClient", {
  api: Api,
  httpClient: FetchHttpClient.layer,
  baseUrl: "http://localhost:3001",
}) {}
