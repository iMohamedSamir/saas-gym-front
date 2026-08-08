const PAYLOAD_URL = process.env.PAYLOAD_URL || "http://localhost:3001";

interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export async function getPayloadData<T>(
  collection: string,
): Promise<T | null> {
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/${collection}?limit=1`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Payload API error for ${collection}: ${res.status}`);
      return null;
    }
    const data: PayloadResponse<T> = await res.json();
    return data.docs[0] ?? null;
  } catch (err) {
    console.error(`Failed to fetch ${collection} from Payload:`, err);
    return null;
  }
}
