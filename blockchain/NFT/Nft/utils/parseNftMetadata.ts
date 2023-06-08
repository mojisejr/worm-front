export function parseNFTMetadata(metadata: string[]): {
  name?: string;
  description?: string;
  image?: string;
  attributes?: { trait_type: string; value: any }[];
}[] {
  if (!metadata || metadata.length <= 0) return [];
  return metadata.map((m) => {
    const buffer = Buffer.from(m.split(",")[1], "base64");
    return JSON.parse(buffer.toString());
  });
}
