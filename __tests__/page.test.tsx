import Information from '@/app/(overview)/information/page';
import Home from '@/app/(overview)/page';
import Schedule from '@/app/(overview)/schedule/page';
import StudentAnnouncement from '@/app/stella/announcement/page';
import CongestionManage from '@/app/stella/congestion/page';
import Dashboard from '@/app/stella/page';
import PhotoCollection from '@/app/stella/photo-collection/page';
import Work from '@/app/stella/work/page';
import { render } from '@testing-library/react';

describe('Page Test: /', () => {
  it('Page Rendering', () => {
    render(<Home />);
  });
});

describe('Page Test: /information/', () => {
  it('Page Rendering', () => {
    render(<Information />);
  });
});

describe('Page Test: /schedule/', () => {
  it('Page Rendering', () => {
    render(<Schedule />);
  });
});

describe('Page Test: /stella/', () => {
  it('Page Rendering', () => {
    render(<Dashboard />);
  });
});

describe('Page Test: /stella/work/', () => {
  it('Page Rendering', () => {
    render(<Work />);
  });
});

describe('Page Test: /stella/announcement/', () => {
  it('Page Rendering', () => {
    render(<StudentAnnouncement />);
  });
});

describe('Page Test: /stella/congestion/', () => {
  it('Page Rendering', () => {
    render(<CongestionManage />);
  });
});

describe('Page Test: /stella/photo-collection/', () => {
  it('Page Rendering', () => {
    render(<PhotoCollection />);
  });
});
