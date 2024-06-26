import { BASE_URL } from '@/config/constants'
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    const allRoutes = [
        { slug: "jpeg-to-webp"}, 
        { slug: "webp-to-png"},
        { slug: "webp-to-jpeg"}, 
        { slug: 'png-to-webp' },
        { slug: 'png-to-jpeg'},
        { slug: 'jpeg-to-png'},
    ];
    const imageCovertRoutes = [];

    allRoutes.map((route)=>imageCovertRoutes.push({url: `${BASE_URL}image-convert/${route.slug}`, lastModified: new Date(), }))
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}image-optimize`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}image-resizer`,
            lastModified: new Date(),
        },
        ...imageCovertRoutes,
        {
            url: `${BASE_URL}text-to-bold`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}text-to-italic`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}text-to-audio`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}word-counter`,
            lastModified: new Date(),
        }
    ]
}