import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio.whitemouse.dev',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://portfolio.whitemouse.dev/services',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://portfolio.whitemouse.dev/resume',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://portfolio.whitemouse.dev/work',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://portfolio.whitemouse.dev/contact',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ];
}
