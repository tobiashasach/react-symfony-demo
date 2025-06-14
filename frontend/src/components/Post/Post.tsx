import moment from "moment";
import type { Post as PostType } from "../../types/Post";
import { Headline, type HeadlineProps } from "../ui/Headline/Headline";
import {
  createdStyes,
  metaStyes,
  paragraphStlyes,
  postStyles,
} from "./Post.styles";
import { Link } from "react-router";
import { PostDelete } from "./PostDelete";

type PostProps = { titleTag?: HeadlineProps["tag"] } & PostType;

export function Post({
  id,
  title,
  text,
  titleTag = "h2",
  createdAt,
}: PostProps) {
  return (
    <article className={postStyles()}>
      <Link to={"/post/" + id}>
        <Headline className="mb-2" tag={titleTag}>
          {title}
        </Headline>
      </Link>
      <p className={paragraphStlyes()}>{text}</p>
      <div className={metaStyes()}>
        <time dateTime={createdAt} className={createdStyes()}>
          {moment(createdAt).format("MM/DD/YYYY HH:mm")}
        </time>
        <PostDelete id={id} />
      </div>
    </article>
  );
}
