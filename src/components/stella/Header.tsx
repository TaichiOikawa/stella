'use client';

import { Button } from '@components/ui/button';
import NavLinks from '@components/ui/nav-links';
import { Avatar } from '@mantine/core';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { IconHammer, IconHome, IconMenu2, IconPhoto, IconSpeakerphone, IconUsers } from '@tabler/icons-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

const links = [
  {
    title: (
      <div className="flex items-center gap-2">
        <IconHome className="size-5" />
        ホーム
      </div>
    ),
    href: '/stella/',
  },
  {
    title: (
      <div className="flex items-center gap-2">
        <IconHammer className="size-5" />
        文化祭準備 [作業]
      </div>
    ),
    href: '/stella/work/',
  },
  {
    title: (
      <div className="flex items-center gap-2">
        <IconSpeakerphone className="size-5" />
        お知らせ
      </div>
    ),
    href: '/stella/announcement/',
  },
  {
    title: (
      <div className="flex items-center gap-2">
        <IconUsers className="size-5" />
        混雑状況登録
      </div>
    ),
    href: '/stella/congestion/',
  },
  {
    title: (
      <div className="flex items-center gap-2">
        <IconPhoto className="size-5" />
        写真投稿
      </div>
    ),
    href: '/stella/photo-collection/',
  },
];

export default function Header({ userName }: { userName: string }) {
  const name = userName.replace(' ', '');

  const returnTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 bg-white/80 text-gray-600 shadow-under backdrop-blur-md backdrop-saturate-150">
      <div className="container mx-auto flex items-center gap-y-1 px-5 py-4">
        <img alt="" onClick={returnTop} src="/stella.svg" width={140} />
        <div className="ml-auto">
          <Avatar color="initials" name={name} size="md" />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="ml-5 size-10" size="icon" variant="outline">
              <IconMenu2 />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex w-72 flex-col justify-between px-8 py-16">
            <div className="flex flex-col gap-y-4">
              <SheetTitle>メニュー</SheetTitle>
              <nav className="flex flex-col gap-y-3">
                <NavLinks links={links} />
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild variant="outline">
                <a href="/">
                  <ChevronLeftIcon />
                  Topへ戻る
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
