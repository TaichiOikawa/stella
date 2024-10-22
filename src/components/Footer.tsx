import { HomeIcon, InstagramLogoIcon } from '@radix-ui/react-icons';

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <div className="text-center font-sans text-sm text-gray-500 sm:text-left">
            <div className="my-3 flex justify-center sm:justify-start">
              <img alt="Stella Icon" src="/stella.svg" width={110} />
            </div>
            <p>
              Stella © 2024 TaichiOikawa
              <br />
              Hokkaido Kitami Hokuto High School
            </p>
            <p className="pt-3 text-gray-600">このサイトは北見北斗高校 生徒会執行部が運営しています</p>
          </div>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="ml-3 text-gray-500" href="http://www.kitamihokuto.hokkaido-c.ed.jp/" target="_blank">
              <HomeIcon className="size-6" style={{ marginTop: '1px' }} />
            </a>
            <a className="ml-3 text-gray-500" href="https://www.instagram.com/kitami_hokuto.hs/" target="_blank">
              <InstagramLogoIcon className="size-6" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
