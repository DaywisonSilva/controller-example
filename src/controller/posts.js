import axios from '../helpers/axios';

export async function getPosts() {
  const posts = await axios.get('posts')

  return posts;
}
