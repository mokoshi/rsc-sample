import { type Tweet } from "./actions";
import TweetForm from "./TweetForm";
// import LikeButton from "./LikeButton";
// import LikeButtonOptitmistic from "./LikeButtonOptimistic";
import TweetBox from "./TweetBox";

export default async function Home() {
  const tweets: Tweet[] = await fetch("http://localhost:3000/api/tweets", {
    next: { tags: ["tweets"] },
  }).then((res) => res.json());

  return (
    <main>
      <TweetForm />

      {/* <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <p>{tweet.tweet}</p>
            <LikeButtonOptitmistic tweet={tweet as Tweet} />
            <LikeButton tweet={tweet as Tweet} />
          </li>
        ))}
      </ul> */}
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <TweetBox id={tweet.id} />
          </li>
        ))}
      </ul>
    </main>
  );
}
