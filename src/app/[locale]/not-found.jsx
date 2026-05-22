import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const translations = await getTranslations("NotFound");

  return (
    <main className="flex min-h-screen items-center justify-center bg-page-background">
      <section className="max-w-xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase text-brand-orange">
          404
        </p>
        <h1 className="text-4xl font-semibold text-page-foreground sm:text-5xl">
          {translations("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-text-muted">
          {translations("description")}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-dark-surface px-6 text-sm font-semibold text-white transition hover:bg-dark-soft"
        >
          {translations("button")}
        </Link>
      </section>
    </main>
  );
}
