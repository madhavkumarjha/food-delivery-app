import {createClient} from '@sanity/client'; // sanity v5 or later
// import sanityClient from "@sanity/client"; //sanity v4 or less
import ImageBuileder from '@sanity/image-url';

const client = createClient({
    projectId: '6732lphn',
    dataset: 'production',
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2025-08-21', // use a UTC date string
});

const builder = ImageBuileder(client);

export const urlFor = (source) => builder.image(source);

export default client;

// sanity cors add http://localhost:3000
// sanity cors add https://your-production-domain.com