import { type Tweet } from "./actions";
import LikeButton from "./LikeButton";
import LikeButtonOptitmistic from "./LikeButtonOptimistic";

export default async function TweetBox({ id }: { id: string }) {
  const tweet: Tweet = await fetch(
    `http://localhost:3000/api/tweets?id=${id}`,
    {
      next: { tags: [`tweets:${id}`] },
    }
  ).then((res) => res.json());

  return (
    <div>
      <p>{tweet.tweet}</p>
      <LikeButtonOptitmistic tweet={tweet as Tweet} />
      <LikeButton tweet={tweet as Tweet} />
    </div>
  );
}
