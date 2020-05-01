# jest-test-performance

[![Codecov Coverage](https://img.shields.io/codecov/c/github/nickheal/jest-test-performance/master.svg?style=flat)](https://codecov.io/gh/nickheal/jest-test-performance/)
![GitHub](https://img.shields.io/github/license/nickheal/jest-test-performance)

## Purpose

jest-test-performance is a package designed to simplify testing performance.

Performance is notoriously difficult to test in a meaningful way. It varies by network, machine, and all sorts of circumstances outside our control. And it's affected by our psychology; a page that loads something quickly feels faster even if it is just a skeleton of how the page will look.

That doesn't change the fact that performance is meaningful, and we shouldn't disregard it because it's difficult.

This package distills performance down to a single millisecond score that it expects a function to take to run. It can't take in to account every machine, browser, or network, but it provides a baseline based on an average machine, that we can test against.

I would recommend using this more in integration than unit tests, unless you are confident that you have a distinct unit that is a bottleneck.

## Installation

Add to your project using `npm i -D jest-test-performance`

## Usage

First you need to import the package during the jest setup.

```javascript
"jest": {
  "setupFilesAfterEnv": ["jest-test-performance"]
}
```

And then you can use the condition during assertions.

```javascript
it('should run faster than 100ms', async () => {
  const dummyFunction = () => {};
  await expect(dummyFunction).toBeFasterThan(100);
});
```
