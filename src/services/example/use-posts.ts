import { useMutation, useQuery, useQueryClient } from 'react-query';
import { exampleApi } from '@/services/example';

export const usePosts = () => {
  const queryClient = useQueryClient();
  const posts = useQuery(['posts'], exampleApi.fetchPosts);
  const createPost = useMutation(['createPost'], exampleApi.fetchCreatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
  const updatePost = useMutation(['updatePost'], exampleApi.fetchUpdatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  return { posts, createPost, updatePost };
};
