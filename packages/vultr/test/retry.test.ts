/**
 * Throttling + transient retry wiring tests.
 *
 * Vultr's prose docs declare every endpoint may return 429
 * (with `Retry-After`) and 5xx, but the spec declares neither per
 * operation. The runtime path handles this via
 * `client.ts:matchError` → `HTTP_STATUS_MAP[status]` → pre-categorized
 * classes from `@distilled.cloud/core/errors`. These tests verify the
 * categories that `Vultr.Retry.throttling` and `Vultr.Retry.transient`
 * match on are correctly attached, and that the retry policies are
 * a stable identity over a successful call.
 *
 * Note: we tried to provoke a real 429 by firing 200 parallel
 * `listRegions` against Vultr — their limiter never fired. Vultr's
 * actual rate limit is looser than the documented "30 req/s per IP".
 * Live 429 observation is therefore out of reach for a sandboxed
 * test; we settle for category-trait verification + a happy-path
 * retry-wrap so any future regression to either side gets caught.
 *
 * Run with:
 *   VULTR_API_KEY=<key> bunx vitest run packages/vultr/test/retry.test.ts
 */
import * as Category from "@distilled.cloud/core/category";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";

import { CredentialsFromEnv } from "../src/credentials.ts";
import {
  BadGateway,
  GatewayTimeout,
  InternalServerError,
  ServiceUnavailable,
  TooManyRequests,
} from "../src/errors.ts";
import { listRegions } from "../src/operations/index.ts";
import * as Retry from "../src/retry.ts";

const LiveLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

const runLive = <A, E>(eff: Effect.Effect<A, E, never>): Promise<A> =>
  // biome-ignore lint/suspicious/noExplicitAny: tests need to cross the layer boundary
  Effect.runPromise(eff.pipe(Effect.provide(LiveLayer)) as any);

describe("Vultr retry category attachment (synthetic)", () => {
  // Verifies the sdk-core categories Sam called out are wired to the
  // classes that surface from HTTP_STATUS_MAP at runtime. Regression
  // guard against accidentally re-exporting a non-categorized variant.

  it("TooManyRequests → ThrottlingError + retryable", () => {
    const err = new TooManyRequests({ message: "synthetic" });
    expect(Category.hasCategory(err, Category.ThrottlingError)).toBe(true);
    expect(Category.isRetryable(err)).toBe(true);
  });

  it("InternalServerError → ServerError + retryable", () => {
    const err = new InternalServerError({ message: "synthetic" });
    expect(Category.hasCategory(err, Category.ServerError)).toBe(true);
    expect(Category.isRetryable(err)).toBe(true);
  });

  it("BadGateway → ServerError + retryable", () => {
    const err = new BadGateway({ message: "synthetic" });
    expect(Category.hasCategory(err, Category.ServerError)).toBe(true);
    expect(Category.isRetryable(err)).toBe(true);
  });

  it("ServiceUnavailable → ServerError + retryable", () => {
    const err = new ServiceUnavailable({ message: "synthetic" });
    expect(Category.hasCategory(err, Category.ServerError)).toBe(true);
    expect(Category.isRetryable(err)).toBe(true);
  });

  it("GatewayTimeout → ServerError + retryable", () => {
    const err = new GatewayTimeout({ message: "synthetic" });
    expect(Category.hasCategory(err, Category.ServerError)).toBe(true);
    expect(Category.isRetryable(err)).toBe(true);
  });
});

describe("Vultr retry policies (live happy path)", () => {
  it(
    "Retry.throttling wraps a successful call without altering it",
    { timeout: 30_000 },
    async () => {
      const result = await runLive(
        listRegions({}).pipe(Retry.throttling, Effect.timeout("20 seconds")),
      );
      expect(result.regions).toBeDefined();
      expect((result.regions ?? []).length).toBeGreaterThan(0);
    },
  );

  it(
    "Retry.transient wraps a successful call without altering it",
    { timeout: 30_000 },
    async () => {
      const result = await runLive(
        listRegions({}).pipe(Retry.transient, Effect.timeout("20 seconds")),
      );
      expect(result.regions).toBeDefined();
      expect((result.regions ?? []).length).toBeGreaterThan(0);
    },
  );
});
