import { Payload } from 'payload';
import path from 'path';
import { home } from './home';

export const seed = async (payload: Payload) => {
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev@payloadcms.com',
      password: 'test',
    }
  });

  const { id: mountainPhotoID } = await payload.create({
    collection: 'media',
    filePath: path.resolve(__dirname, 'mountain-range.jpg'),
    data: {
      alt: 'Mountains',
    },
  });

  const homepageJSON = JSON.parse(JSON.stringify(home).replaceAll('{{MOUNTAIN_IMAGE}}', mountainPhotoID));

  await payload.create({
    collection: 'pages',
    data: homepageJSON,
  })
}