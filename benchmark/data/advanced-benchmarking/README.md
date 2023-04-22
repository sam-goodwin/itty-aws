[🏠 Home](../../../README.md) | [⬅️ Reports index](../../README.md)

# Benchmark report

> **Branch: `advanced-benchmarking`<br />Date: `Sun, 16 Apr 2023 12:51:58 GMT`**

## TL;DR

- `itty-aws` improves cold boot initialization time by 50% and overall cold boot time by 25%.
- On warm starts, `itty-aws` is comparable to AWS SDKs.
- In most metrics, `itty-aws` is more stable and consistent across invocations and runtimes.
- The latency of `itty-aws` API calls is longer than its alternatives, which has a negative impact on the duration of the function, especially during cold starts.

## Cold starts

### Cold starts total duration

In cold start situations, `ìtty-aws` improves the total duration of functions in each scenario by nearly 25%. It also improves duration consistency in most situations, except in `Node.js 18.x` with the `@aws-sdk` from the runtime. `itty-aws` also brings more consistency across execution environments. This apparent overall improvement hides different realities discussed later.

![coldStarts-totalDuration](./coldStarts-totalDuration.png)

### Cold starts init duration

As expected, in cold start situations, `itty-aws` improves init duration a lot, by nearly 50%. It also improves consistency across invocations and execution environments.

![coldStarts-initDuration](./coldStarts-initDuration.png)

### Cold starts duration

In cold start situations, the `itty-aws` functions last longer than their `aws-sdk` and `@aws-sdk` alternatives. This is more than offset by improvements in initialization time, which provide the overall performance gains described previously. However, `itty-aws` improves consistency across all execution contexts.

![coldStarts-duration](./coldStarts-duration.png)

### Cold starts API call latency

Analysis of API call latency during cold starts reveals that `itty-aws` performs worse than its alternatives in this regard. Even more compared to `@aws-sdk`. This is probably what impacts the duration of the functions the most in our setup. This is our best hint to improve the overall performance of `itty-aws` even further.

![coldStarts-apiCallLatency](./coldStarts-apiCallLatency.png)

### Cold starts HTTP Request latency

`itty-aws` does not provide the necessary hooks to measure HTTP requests latency, either as an event emitter like `aws-sdk` or through a middleware architecture like `@aws-sdk`. It would be a good improvement to further analyze its performance.

![coldStarts-httpRequestLatency](./coldStarts-httpRequestLatency.png)

### Cold starts max memory

`itty-aws` uses less memory and is way more stable in this regard than AWS SDKs.

![coldStarts-maxMemory](./coldStarts-maxMemory.png)

## Warm starts

### Warm starts duration

In warm start situations, functions duration are extremly short in any context. However `itty-aws` always performs better and provides more consistency than AWS SDKs.

![warmStarts-duration](./warmStarts-duration.png)

### Warm starts API call latency

In warm start situations, `itty-aws` is on-par with `aws-sdk` and `@aws-sdk` with extremely good performance, below 8ms. `@aws-sdk` performs slightly better however.

![warmStarts-apiCallLatency](./warmStarts-apiCallLatency.png)

### Warm starts HTTP request latency

`itty-aws` does not provide the necessary hooks to measure HTTP requests latency, either as an event emitter like `aws-sdk` or through a middleware architecture like `@aws-sdk`. It would be a good improvement to further analyze its performance.

![warmStarts-httpRequestLatency](./warmStarts-httpRequestLatency.png)

### Warm starts max memory

`itty-aws` uses less memory than AWS SDKs.

![warmStarts-maxMemory](./warmStarts-maxMemory.png)
