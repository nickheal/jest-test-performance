import getPerformance from 'test-performance';

export default async (func: Function, time: number) => {
  const result = await getPerformance(func);
  return [result < time, result];
}
