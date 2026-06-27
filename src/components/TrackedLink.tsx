"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode, Suspense } from "react";

function resolveTrackedUrl(href: string, gclid: string | null): string {
  let finalUrl = href;
  if (!finalUrl.startsWith("http")) {
    finalUrl = "https://www.888casino.com/";
  }

  if (gclid) {
    finalUrl = `${finalUrl}${gclid}`;
  }

  return finalUrl;
}

function TrackedLinkInner({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");
  const finalUrl = resolveTrackedUrl(href, gclid);

  return (
    <Link href={finalUrl} className={className}>
      {children}
    </Link>
  );
}

export default function TrackedLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Suspense
      fallback={
        <Link href={href} className={className}>
          {children}
        </Link>
      }
    >
      <TrackedLinkInner href={href} className={className}>
        {children}
      </TrackedLinkInner>
    </Suspense>
  );
}
