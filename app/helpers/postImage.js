export default function postImage(id, extension) {
  const imageUrl = `/images/posts/${id}.${extension}`;
  return imageUrl;
}
