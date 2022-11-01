import { use } from "react";
import { getArticles } from "../../pages/api/getArticles";
import { Card } from "../../components/card";
export default function Blog() {
  const data = use(getArticles({ user: "about7sharks", repo: "Markdown" }));
  return (
    <div className="journal">
      <h1>Journal</h1>
      {data?.map((post) => (
        <Card key={post.title} {...post} />
      ))}
    </div>
  );
}
