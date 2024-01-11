
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getLatestsPosts } from '@/src/query/post.query';
import { Post } from '@/src/features/post/post';

export default async function Home() {
  const session = await getAuthSession();
const posts = await getLatestsPosts();
  return(
    <div className='divide-y divide-muted'>
        {posts.map(p => 
            (
                <Post key={p.id} post={p} />
            ))}
    </div>
  
  )
}