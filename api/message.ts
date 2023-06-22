const fetcher = async () => {
  const res = await fetch("/api/messages");
  const { messages } = await res.json();
  return messages;
};

export default fetcher;
