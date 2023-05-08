"use client";

import { useTransition } from "react";
import { likeTweet, Tweet } from "./actions";

type Props = {
  tweet: Tweet;
};

export default function LikeButton({ tweet }: Props) {
  let [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={async () => {
        startTransition(() => likeTweet(tweet.id));
      }}
    >
      {tweet.likes} Likes {isPending && "(Pending)"}
    </button>
  );
}
