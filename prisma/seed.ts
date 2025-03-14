import { prisma } from "./prisma";

async function artistsSeed() {
  await prisma.$executeRaw`TRUNCATE TABLE "Artists" RESTART IDENTITY CASCADE`;

  await prisma.artists.createMany({
    data: [{
      artist_name: 'Super Artist1',
      description: 'Super Artist1 description',
      photo_url:   'http://www.www.com/1'
    },
    {
      artist_name: 'Super Artist2',
      description: 'Super Artist2 description',
      photo_url:   'http://www.www.com/2'
    },
    {
      artist_name: 'Super Artist3',
      description: 'Super Artist3 description',
      photo_url:   'http://www.www.com/3'
    }],
  });
};

async function producersSeed() {
  await prisma.$executeRaw`TRUNCATE TABLE "Producers" RESTART IDENTITY CASCADE`;

  await prisma.producers.createMany({
    data: [{
      producer_name: 'Super Producer',
      description: 'Super Producer description',
      photo_url: 'http://www.www.com'
    },
    {
      producer_name: 'Super Producer2',
      description: 'Super Producer2 description',
      photo_url: 'http://www.www.com'
    }]
  });
};

async function tagSeed() {
  await prisma.$executeRaw`TRUNCATE TABLE "Tags" RESTART IDENTITY CASCADE`;

  await prisma.tags.createMany({
    data: [
      {
        tag_name: 'Hip-hop',
        description: 'Hip-hop style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'Reggae',
        description: 'Reggae style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'Pop',
        description: 'Pop style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'Jazz',
        description: 'Jazz style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'Rock',
        description: 'Rock style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'Electronic',
        description: 'Electronic style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'R&B',
        description: 'R&B style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'Classical',
        description: 'Classical style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'Country',
        description: 'Country style',
        artist_id: 1,
        producer_id: 1
      },
      {
        tag_name: 'Blues',
        description: 'Blues style',
        artist_id: 1,
        producer_id: 1
      },
    ],
  });
};

async function main() {
  try {
    await artistsSeed();
    await producersSeed();
    await tagSeed();
  } catch (e) {
    console.error(e);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
