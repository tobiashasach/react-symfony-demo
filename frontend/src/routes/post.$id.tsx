import { useParams } from "react-router";
import { usePosts } from "../hooks/usePosts";
import { Headline } from "../components/ui/Headline/Headline";
import moment from "moment";

export default function Post() {
  const params = useParams<{ id: string }>();
  const { data } = usePosts(params.id as string);

  if (!data) {
    return "Loading...";
  }

  return (
    <>
      <Headline tag="h1" className="mb-4">
        {data.title}
      </Headline>
      <p>{data.text}</p>
      <time dateTime={data?.createdAt} className="text-neutral-500 mt-6 block">
        {moment(data.createdAt).format("MM/DD/YYYY HH:mm")}
      </time>
    </>
  );
}
