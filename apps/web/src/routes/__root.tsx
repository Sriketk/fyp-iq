import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router"
import { RegistryProvider } from "@effect/atom-react"
import type { ReactNode } from "react"

export const Route = (createRootRoute as any)({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "fyp-iq" },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <RegistryProvider>
        <Outlet />
      </RegistryProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
