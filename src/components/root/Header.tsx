'use client';

import { Button } from '@components/ui/button';
import NavLinks from '@components/ui/nav-links';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@components/ui/sheet';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { IconMenu2 } from '@tabler/icons-react';

const links = [
  { title: 'ホーム', href: '/' },
  { title: 'お知らせ', href: '/information/' },
  { title: 'スケジュール', href: '/schedule/' },
];

function LoginButton() {
  return (
    <div className="flex flex-col gap-2">
      {/* TODO */}
      {/* <Button asChild variant="outline">
        <Link href="/login">
          <EnterIcon className="size-4" />
          生徒ログイン
        </Link>
      </Button> */}
      <Button asChild variant="outline">
        <a href="/stella">
          Stella
          <ChevronRightIcon className="size-4" />
        </a>
      </Button>
    </div>
  );
}

export default function Header() {
  const returnTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <header className="sticky top-0 bg-white/80 text-gray-600 shadow-under backdrop-blur-md backdrop-saturate-150">
      <div className="container mx-auto flex items-center gap-y-1 px-5 py-4">
        <a className="mb-0 flex cursor-pointer items-center font-medium text-gray-900" onClick={returnTop}>
          <h1 className="ml-3 text-2xl">北見北斗高校 文化祭</h1>
        </a>
        <div className="ml-auto text-base">
          <nav className="hidden flex-wrap items-center justify-center md:flex">
            <NavLinks links={links} />
            <LoginButton />
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="size-10 md:hidden" size="icon" variant="ghost">
                <IconMenu2 />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex w-56 flex-col justify-between px-8 py-16">
              <div className="flex flex-col gap-y-4">
                <SheetTitle>メニュー</SheetTitle>
                <nav className="flex flex-col gap-y-3">
                  <NavLinks links={links} />
                </nav>
              </div>
              <LoginButton />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
