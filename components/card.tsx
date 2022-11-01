import { PostData } from "../types";
import Link from 'next/link'
import Image from "next/image";
export const Card = ({
  content,
  data: { title, date, author, location, image, summary, tags },
}: PostData) => {
  return (
    <div className="card">
      <img key={title} src={image} width={320} height={320} alt={summary} />
      <h1>
        {title} <span>Date: {date.toString()}</span>
      </h1>
      {/* <span>{tags}</span> */}
      <Link href={"blog/"+title}>View</Link >
    </div>
  );
};
