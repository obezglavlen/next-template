import { Post } from '@/types/example';

class ExampleService {
  /* Any nextjs server-side stuff */
}

class ExampleApi {
  fetchPosts(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((r) =>
      r.json()
    );
  }

  fetchCreatePost({ data }: { data: Post }): Promise<Post> {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((r) => r.json());
  }

  fetchUpdatePost({ data, id }: { data: Post; id: Post['id'] }): Promise<Post> {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'PUT',
      body: JSON.stringify(data),
    }).then((r) => r.json());
  }
}

export const exampleApi = new ExampleApi();
export const exampleService = new ExampleService();
