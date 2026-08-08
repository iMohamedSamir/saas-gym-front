async function fetchAPI<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`/api${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!res.ok) {
    return {} as T;
  }
  return res.json();
}

export async function getHomepage() {
  return fetchAPI<{ doc: Record<string, any> }>("/globals/homepage");
}

export async function getSiteConfig() {
  return fetchAPI<{ doc: Record<string, any> }>("/globals/site-config");
}

export async function getTestimonials() {
  return fetchAPI<{ docs: Array<Record<string, any>> }>(
    "/testimonials?sort=sortOrder"
  );
}

export async function getFaqItems() {
  return fetchAPI<{ docs: Array<Record<string, any>> }>(
    "/faq-items?sort=sortOrder"
  );
}

export async function getTeamMembers() {
  return fetchAPI<{ docs: Array<Record<string, any>> }>(
    "/team-members?sort=sortOrder"
  );
}

export async function getPricingPlans() {
  return fetchAPI<{ docs: Array<Record<string, any>> }>(
    "/pricing-plans?sort=sortOrder"
  );
}

export async function getFeatures() {
  return fetchAPI<{ docs: Array<Record<string, any>> }>(
    "/features?sort=sortOrder");
}

export async function getStats() {
  return fetchAPI<{ docs: Array<Record<string, any>> }>(
    "/stats?sort=sortOrder");
}
