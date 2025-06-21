import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const list = await redis.lrange('entries', 0, 1000);
  const data = list.map(JSON.parse);
  res.status(200).json(data);
}
