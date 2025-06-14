import { Post } from "../components/Post/Post";
import { Headline } from "../components/ui/Headline/Headline";
import { List } from "../components/ui/List/List";
import { PostForm } from "../forms/PostForm";
import { usePosts } from "../hooks/usePosts";

export default function Home() {
  const { data } = usePosts();

  const postLength = data?.length ? data.length : 0;

  return (
    <>
      <Headline tag="h1" className="mb-8">
        Posts
      </Headline>
      <PostForm className="mb-8" />
      <p className="mb-4 border-b-1 pb-2 border-neutral-200">
        There {postLength == 1 ? "is" : "are"} currently: {postLength}&nbsp;
        {postLength == 1 ? "Post" : "Posts"}
      </p>
      <List
        items={data?.map((post) => ({
          key: String(post.id),
          element: <Post key={post.id} {...post} />,
        }))}
      />
    </>
  );
}
