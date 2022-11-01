import ReactMarkdown from "react-markdown";
import { use } from "react";
import { getArticle } from "../../../pages/api/getArticles";
import {PostParams} from '../../../types/index'
export default function Post({ params: { post } }: PostParams) {
  const data = use(
    getArticle({
      article: post.replace(/ /g, ""),
      format: true,
      user: "about7sharks",
      repo: "Markdown",
    })
  );
  return (
    <div className="blog">
      <h1>Post</h1>
      <ReactMarkdown
        linkTarget="_blank"
        children={data.content || "Nothing"}
      />
    </div>
  );
}
