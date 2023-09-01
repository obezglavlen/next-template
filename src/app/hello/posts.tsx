'use client';
import { usePosts } from '@/services/example/use-posts';
import { FC } from 'react';

export const Posts: FC = () => {
  const { posts, createPost, updatePost } = usePosts();

  return (
    !posts.isLoading && (
      <div style={{ backgroundColor: 'black', color: 'white', padding: '1em' }}>
        <button
          onClick={() =>
            createPost.mutate({
              data: { id: 666, title: 'Test', body: 'Tetstt', userId: 1 },
            })
          }
        >
          Add post
        </button>
        {posts.data?.map?.((post, idx) => (
          <div
            key={post.id}
            style={{
              padding: '0.5em',
              backgroundColor: idx % 2 === 0 ? '#20202f' : '#06060f',
            }}
          >
            <span>
              {post.title} - {post.userId}
            </span>
            <div>{post.body}</div>
          </div>
        ))}
      </div>
    )
  );
};
