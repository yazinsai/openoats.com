type Release = {
  tagName: string | null;
  publishedAt: string | null;
};

export async function getLatestRelease(): Promise<Release> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/yazinsai/OpenOats/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "openoats-landing",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return { tagName: null, publishedAt: null };
    const data = (await res.json()) as { tag_name?: string; published_at?: string };
    return {
      tagName: data.tag_name ?? null,
      publishedAt: data.published_at ?? null,
    };
  } catch {
    return { tagName: null, publishedAt: null };
  }
}
