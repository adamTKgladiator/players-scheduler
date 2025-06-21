import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  const { player, date, time } = req.body;
  if (!player || !date || !time) return res.status(400).end('Missing fields');
  const entry = JSON.stringify({ player, date, time });
  await redis.lpush('entries', entry);
  res.status(200).end('OK');
}
