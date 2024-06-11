import { BASE_URL } from '@/config/constants'
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            //   changeFrequency: 'yearly',
            //   priority: 1,
        },
        // {
        //     url: `${BASE_URL}/about`,
        //     lastModified: new Date(),
        //     //   changeFrequency: 'monthly',
        //     //   priority: 0.8,
        // },
        // {
        //     url: `${BASE_URL}/careers`,
        //     lastModified: new Date(),
        // },
        // {
        //     url: `${BASE_URL}/services`,
        //     lastModified: new Date(),
        // },
        // {
        //     url: `${BASE_URL}/projects`,
        //     lastModified: new Date(),
        // },
        // {
        //     url: `${BASE_URL}/research`,
        //     lastModified: new Date(),
        // },
    ]
}