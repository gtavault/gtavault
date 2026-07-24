import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gtavaulthq.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/news`, lastModified: new Date() },
    { url: `${baseUrl}/vehicles`, lastModified: new Date() },
    { url: `${baseUrl}/guides`, lastModified: new Date() },
    { url: `${baseUrl}/story`, lastModified: new Date() },
    { url: `${baseUrl}/heists`, lastModified: new Date() },
    { url: `${baseUrl}/media`, lastModified: new Date() },
    { url: `${baseUrl}/weekly`, lastModified: new Date() },
    { url: `${baseUrl}/report`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
  ];
}