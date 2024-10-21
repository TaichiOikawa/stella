import Footer from '@/components/Footer';
import Header from '@/components/root/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stella [Kitami Hokuto]',
  description: '北見北斗高校文化祭運営補助システム「Stella」ダッシューボードです。',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
