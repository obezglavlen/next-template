import { useMutation, useQuery, useQueryClient } from 'react-query';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const fetchPosts = (): Promise<Post[]> => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((r) =>
    r.json()
  );
};

const fetchCreatePost = ({ data }: { data: Post }): Promise<Post> => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((r) => r.json());
};

const fetchUpdatePost = ({
  data,
  id,
}: {
  data: Post;
  id: Post['id'];
}): Promise<Post> => {
  return fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'PUT',
    body: JSON.stringify(data),
  }).then((r) => r.json());
};

export const usePosts = () => {
  const queryClient = useQueryClient();
  const posts = useQuery(['posts'], fetchPosts);
  const createPost = useMutation(['createPost'], fetchCreatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
  const updatePost = useMutation(['updatePost'], fetchUpdatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  return { posts, createPost, updatePost };
};
