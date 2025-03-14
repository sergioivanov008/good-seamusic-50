import { prisma } from './prisma';

async function artistsSeed() {
	await prisma.$executeRaw`TRUNCATE TABLE "Artists" RESTART IDENTITY CASCADE`;

	await prisma.artists.createMany({
		data: [
			{
				artist_name: 'Super Artist1',
				description: 'Super Artist1 description',
				photo_url: 'http://www.www.com/1',
			},
			{
				artist_name: 'Super Artist2',
				description: 'Super Artist2 description',
				photo_url: 'http://www.www.com/2',
			},
			{
				artist_name: 'Super Artist3',
				description: 'Super Artist3 description',
				photo_url: 'http://www.www.com/3',
			},
		],
	});
}

async function producersSeed() {
	await prisma.$executeRaw`TRUNCATE TABLE "Producers" RESTART IDENTITY CASCADE`;

	await prisma.producers.createMany({
		data: [
			{
				producer_name: 'Super Producer',
				description: 'Super Producer description',
				photo_url: 'http://www.www.com',
			},
			{
				producer_name: 'Super Producer2',
				description: 'Super Producer2 description',
				photo_url: 'http://www.www.com',
			},
		],
	});
}

async function tagSeed() {
	await prisma.$executeRaw`TRUNCATE TABLE "Tags" RESTART IDENTITY CASCADE`;

	await prisma.tags.createMany({
		data: [
			{
				tag_name: 'Deep house',
				description: 'Deep house style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Trap',
				description: 'Trap style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Minimal',
				description: 'Minimal style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Indie rock',
				description: 'Indie rock style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Metal',
				description: 'Metal style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Mitol',
				description: 'Mitol style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Funk',
				description: 'Funk style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Electronica',
				description: 'Electronica style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Rock',
				description: 'Rock style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Chill-wave',
				description: 'Chill-wave style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'NU Disco',
				description: 'NU Disco style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'NE Disco',
				description: 'NE Disco style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Acoustic',
				description: 'Acoustic style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Folk',
				description: 'Folk style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Lo-fi',
				description: 'Lo-fi style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'Indie-pop',
				description: 'Indie-pop style',
				artist_id: 1,
				producer_id: 1,
			},
			{
				tag_name: 'R&B',
				description: 'R&B style',
				artist_id: 1,
				producer_id: 1,
			},
		],
	});
}

async function main() {
	try {
		// await artistsSeed();
		// await producersSeed();
		await tagSeed();
	} catch (e) {
		console.error(e);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
