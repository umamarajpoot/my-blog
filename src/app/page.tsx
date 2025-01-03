

import BlogPosts from '@/components/BlogPosts';
import GridComponent from '@/components/GridComponent';
import Header from '@/components/Header';
import RecentPosts from '@/components/RecentPosts';

export default function Home() {
  return (
  <div>
    <Header />
    <RecentPosts/>
    <GridComponent/>
    <BlogPosts/>
   </div>
  );
}
