import {
  getCollection,
  getEntry,
  type CollectionEntry,
  type CollectionKey,
} from "astro:content";

type PageData = {
  title: string;
  meta_title?: string;
  description?: string;
  image?: string;
  draft?: boolean;
};

export const getSinglePage = async <C extends CollectionKey>(
  collectionName: C,
): Promise<CollectionEntry<C>[]> => {
  const allPages = await getCollection(
    collectionName,
    ({ data, id }) => !(data as PageData)?.draft && !id.startsWith("-"),
  );
  return allPages;
};

export const getListPage = async <C extends CollectionKey>(
  collectionName: C,
  documentId: string = "-index",
): Promise<CollectionEntry<C>> => {
  // Try exact entry first
  let data = (await getEntry(
    collectionName,
    documentId,
  )) as CollectionEntry<C> | null;

  // Fallback: get the first entry in the collection
  if (!data) {
    const entries = await getCollection(collectionName);
    if (entries.length > 0) {
      data = entries[0] as CollectionEntry<C>;
    }
  }

  if (!data) {
    throw new Error(
      `No page found for the collection: ${collectionName} with filename: ${documentId}`,
    );
  }

  return data;
};
