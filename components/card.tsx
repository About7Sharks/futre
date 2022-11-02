"use client";

import { PostData } from "../types";
import { useRouter } from "next/navigation";

export const Card = ({ data: { title, image, summary } }: PostData) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("blog/" + title)} className="card">
      <h3>{title}</h3>
      <img key={title} src={image} width={320} height={320} alt={summary} />
    </div>
  );
};
