export function parsePotMetadata(metadata: string[]): {
  name?: string;
  description?: string;
  images?: string;
}[] {
  if (!metadata || metadata.length <= 0) return [];
  return metadata.map((m) => {
    const buffer = Buffer.from(m.split(",")[1], "base64");
    return JSON.parse(buffer.toString());
  });
}
