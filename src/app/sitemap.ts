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
            url: `${BASE_URL}image-optimize/whatsapp`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}image-optimize/twitter`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}image-optimize/tiktok`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}image-optimize/linkedin`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}image-optimize/instagram`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}image-optimize/facebook`,
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
            url: `${BASE_URL}text-repeater`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}text-to-audio`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}word-counter`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}privacy-policy`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}term-and-conditions`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}contact`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}about`,
            lastModified: new Date(),
        },
    ]
}