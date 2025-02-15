// app/routes/__root.tsx - Finally, we need to create the root of our application. This is the entry point for all other routes. The code in this file will wrap all other routes in the application.
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts
} from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Billissimo | A bill tracking app"
      }
    ]
  }),
  component: RootComponent
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💸</text></svg>"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
