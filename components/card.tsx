import { PostData } from "../types";
import Link from 'next/link'

export const Card = ({
  content,
  data: { title, date, author, location, image, summary, tags },
}: PostData) => {
  return (
    <div className="card">
      <img src={image} alt={summary} />
      <h1>
        {title} <span>Date: {date}</span>
      </h1>
      <span>{tags}</span>
      <Link href={"blog/"+title}>View</Link >
    </div>
  );
};
