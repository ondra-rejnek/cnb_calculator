export const parseReadableStream = async (
  stream: ReadableStream
): Promise<string> => {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value, { stream: true });
  }
  return result;
};

export const fetchReadableStream = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Response not ok");
  }
  if (!response.body) {
    throw new Error("Response contains no body");
  }
  const parsedStream = await parseReadableStream(response.body);
  return parsedStream;
};
