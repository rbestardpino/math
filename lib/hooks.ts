import topics, { Topic } from "@lib/topics";
import { useRouter } from "next/router";

export function useTopic(): Topic {
  const { asPath } = useRouter();
  const topic = topics.find((topic) => topic.fullEndpoint === asPath);
  return topic!;
}
