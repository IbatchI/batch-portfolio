import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LOCALES,
  getPreferredLocale,
  isValidLocale,
} from "@/src/features/shared/lib/get-preferred-locale";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Skip rewriting if locale is already in the URL.
  // Rewriting here would cause an infinite loop with the rewrite below.
  const hasLocale = LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // No locale in URL — detect from accept-language and rewrite internally
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const locale = getPreferredLocale(acceptLanguage);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
