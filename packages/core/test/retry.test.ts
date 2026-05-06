import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import * as Category from "../src/category.ts";
import { TooManyRequests } from "../src/errors.ts";
import { makeDefault } from "../src/retry.ts";

describe("makeDefault — server hint precedence", () => {
  it("retries while error is a transient/throttling error", () => {
    const error = new TooManyRequests({ message: "rate-limited" });
    expect(Category.isTransientError(error)).toBe(true);
    expect(Category.isThrottling(error)).toBe(true);
  });

  it("constructs a policy without crashing when error has retryAfter", () =>
    Effect.gen(function* () {
      const error = new TooManyRequests({
        message: "rate-limited",
        retryAfter: Duration.seconds(5),
      });
      const lastError = yield* Ref.make<unknown>(error);
      const policy = makeDefault(lastError);
      expect(policy.while).toBeDefined();
      expect(policy.while!(error)).toBe(true);
      expect(policy.schedule).toBeDefined();
    }).pipe(Effect.runPromise));

  it("schedule terminates after a finite number of attempts even with retryAfter", async () => {
    const error = new TooManyRequests({
      message: "rate-limited",
      // 1ms hint — fast enough to exhaust 5 retries quickly.
      retryAfter: Duration.millis(1),
    });

    let attempts = 0;
    const program = Effect.gen(function* () {
      const lastError = yield* Ref.make<unknown>(error);
      const policy = makeDefault(lastError);
      return yield* Effect.retry(
        Effect.suspend(() => {
          attempts += 1;
          return Effect.fail(error);
        }),
        {
          schedule: policy.schedule,
          while: policy.while,
        },
      );
    });

    const exit = await Effect.runPromiseExit(program);
    expect(exit._tag).toBe("Failure");
    // Default policy is exponential.both(recurs(5)) ⇒ 1 initial + up to 5 retries.
    expect(attempts).toBeGreaterThanOrEqual(2);
    expect(attempts).toBeLessThanOrEqual(6);
  });

  it("retryAfter on the error is a Duration value", () => {
    const error = new TooManyRequests({
      message: "rate-limited",
      retryAfter: Duration.seconds(7),
    });
    expect(Duration.isDuration((error as any).retryAfter)).toBe(true);
    expect(Duration.toSeconds((error as any).retryAfter)).toBe(7);
  });

  it("error without retryAfter is still well-formed", () => {
    const error = new TooManyRequests({ message: "no hint" });
    expect((error as any).retryAfter).toBeUndefined();
  });
});
