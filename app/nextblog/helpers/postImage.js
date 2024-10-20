export default function postImage(id, extension) {
  const imageUrl = `/images/nextblog/${id}.${extension}`;
  return imageUrl;
}
