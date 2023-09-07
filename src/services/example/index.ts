import { Post } from '@/types/example';
import type {QueryFunctionContext} from 'react-query'

class ExampleService {
  /* Any nextjs server-side stuff */
}

class ExampleApi {
  fetchPosts({ signal }: QueryFunctionContext): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts', { signal }).then(
      (r) => r.json()
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
