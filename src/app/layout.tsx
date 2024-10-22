import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '北見北斗高校 文化祭2025',
  description: '北見北斗高校文化祭 2025年度の公式サイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <ColorSchemeScript />
      </head>
      <body className={`antialiased`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
