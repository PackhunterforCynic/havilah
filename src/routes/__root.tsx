import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CustomCursor } from "../components/cinematic/CustomCursor";
import { SmoothScroll } from "../components/cinematic/SmoothScroll";
import { ParticleField } from "../components/cinematic/ParticleField";
import { Loader } from "../components/cinematic/Loader";
import { Nav } from "../components/cinematic/Nav";
import { Footer } from "../components/cinematic/Footer";
import { FloatingSocials } from "../components/cinematic/FloatingSocials";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-xl tracking-[0.3em] text-foreground">CUT.</h2>
        <p className="font-serif mt-3 italic text-muted-foreground">
          That scene didn't make the final edit.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-gold/60 px-6 py-3 text-[11px] uppercase tracking-[0.4em] text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            Back to studio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl tracking-[0.3em] text-foreground">
          The reel snapped.
        </h1>
        <p className="font-serif mt-3 italic text-muted-foreground">
          Something went wrong on our end. Try again, or head back to the studio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.4em] text-primary-foreground transition hover:bg-gold-soft"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-gold/60 px-6 py-3 text-[11px] uppercase tracking-[0.4em] text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Havilah — Cinematic Multimedia Production" },
      {
        name: "description",
        content:
          "Where Creativity Meets Cinematic Excellence. Films, commercials, music videos and brand stories crafted with award-winning craft.",
      },
      { name: "author", content: "Havilah" },
      { property: "og:title", content: "Havilah — Cinematic Multimedia Production" },
      { property: "og:description", content: "We don't create videos. We create experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Loader />
      <SmoothScroll />
      <CustomCursor />
      <ParticleField />
      <Nav />
      <FloatingSocials />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
