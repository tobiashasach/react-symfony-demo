import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Header } from "./components/Header/Header";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { mainStyles } from "./root.styles";
import { Breadcrumb } from "./components/Breadcrumb/Breadcrumb";

export function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" className="bg-grey-200">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Demo</title>
        <Meta />
        <Links />
      </head>
      <body className="pt-32 pb-16">
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className={mainStyles()}>
            <Breadcrumb />
            {children}
          </main>
          <ReactQueryDevtools />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
