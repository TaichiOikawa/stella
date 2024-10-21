'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function NavLinks({
  links,
}: {
  links: {
    title: string | React.ReactNode;
    href: string;
  }[];
}) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <a
            className={clsx('mr-5 transition hover:text-black', {
              'underline underline-offset-4': pathname === link.href,
            })}
            href={link.href}
            key={link.href}
          >
            {link.title}
          </a>
        );
      })}
    </>
  );
}
