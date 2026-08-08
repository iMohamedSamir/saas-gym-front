let cachedPayload: any = null;
let initPromise: Promise<any> | null = null;

export async function getPayloadInstance() {
  if (cachedPayload) return cachedPayload;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const { getPayload } = await import('payload');
    const config = (await import('@/payload.config')).default;
    cachedPayload = await getPayload({ config });
    return cachedPayload;
  })();

  try {
    return await initPromise;
  } catch (e) {
    initPromise = null;
    throw e;
  }
}
