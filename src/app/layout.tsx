import React from 'react';
import type { Metadata } from 'next';
import { getPageMetadata } from "./metadata";

export async function generateMetadata(pageId: string): Promise<Metadata> {
    const pageMetadata = await getPageMetadata(pageId);
    return {
        title: pageMetadata?.title || "Default Title",
        description: pageMetadata?.description || "Default Description",
    };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
