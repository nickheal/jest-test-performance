import getPerformance from 'test-performance';

export default async (func, time) => {
  const result = await getPerformance(func);
  return [result < time, result];
}
