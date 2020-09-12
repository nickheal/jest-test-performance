export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeFasterThan(target: number): CustomMatcherResult
    }
  }
}
