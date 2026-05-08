import { NodeServices } from "@effect/platform-node";
import {
  afterAll as _afterAll,
  beforeAll as _beforeAll,
  it,
} from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Logger from "effect/Logger";
import { MinimumLogLevel } from "effect/References";
import * as Scope from "effect/Scope";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import * as HttpClient from "effect/unstable/http/HttpClient";
import { Credentials, CredentialsFromEnv } from "~/credentials";
import * as Retry from "~/retry";
import { makeDefault } from "@distilled.cloud/core/retry";

type Provided =
  | Scope.Scope
  | HttpClient.HttpClient
  | Credentials
  | Retry.Retry;

const platform = Layer.mergeAll(
  NodeServices.layer,
  FetchHttpClient.layer,
  Logger.layer([Logger.consolePretty()]),
);

const TestLayer = Layer.mergeAll(platform, CredentialsFromEnv);

type TestCase =
  | Effect.Effect<void, any, Provided>
  | (() => Effect.Effect<void, any, Provided>);

function resolveTestCase(
  testCase: TestCase,
): Effect.Effect<void, any, Provided> {
  return typeof testCase === "function" ? testCase() : testCase;
}

export function test(
  name: string,
  options: { timeout?: number },
  testCase: TestCase,
): void;

export function test(name: string, testCase: TestCase): void;

export function test(
  name: string,
  ...args: [{ timeout?: number }, TestCase] | [TestCase]
) {
  const [options = {}, testCase] =
    args.length === 1 ? [undefined, args[0]] : args;

  return it(
    name,
    async () => {
      await Effect.runPromise(
        provideTestEnv(Effect.scoped(resolveTestCase(testCase))),
      );
    },
    options.timeout ?? 120_000,
  );
}

test.skip = function (
  name: string,
  ...args: [{ timeout?: number }, TestCase] | [TestCase]
) {
  const [options = {}] = args.length === 1 ? [undefined] : args;
  return it.skip(name, () => {}, options.timeout ?? 120_000);
};

test.skipIf = function (condition: boolean): typeof test {
  const skipIfIt = it.skipIf(condition);
  return Object.assign(
    (
      name: string,
      ...args: [{ timeout?: number }, TestCase] | [TestCase]
    ) => {
      const [options = {}, testCase] =
        args.length === 1 ? [undefined, args[0]] : args;

      return skipIfIt(
        name,
        async () => {
          await Effect.runPromise(
            provideTestEnv(Effect.scoped(resolveTestCase(testCase))),
          );
        },
        options.timeout ?? 120_000,
      );
    },
    { skip: test.skip, skipIf: test.skipIf },
  ) as typeof test;
};

export async function run<E>(
  effect: Effect.Effect<void, E, Provided>,
): Promise<void> {
  await Effect.runPromise(provideTestEnv(Effect.scoped(effect)));
}

export const beforeAll = (
  effect: Effect.Effect<void, any, Provided>,
  timeout?: number,
) => _beforeAll(() => run(effect), timeout ?? 120_000);

export const afterAll = (
  effect: Effect.Effect<void, any, Provided>,
  timeout?: number,
) => _afterAll(() => run(effect), timeout ?? 120_000);

function provideTestEnv<A, E, R extends Provided>(
  effect: Effect.Effect<A, E, R>,
) {
  return effect.pipe(
    Effect.provideService(
      MinimumLogLevel,
      process.env.DEBUG ? "Debug" : "Info",
    ),
    Effect.provide(TestLayer),
    Retry.policy(makeDefault),
  );
}

/**
 * Get the PostHog project ID from environment.
 * Throws if not set.
 */
export const getProjectId = (): string => {
  const projectId = process.env.POSTHOG_PROJECT_ID;
  if (!projectId) {
    throw new Error("POSTHOG_PROJECT_ID environment variable is not set");
  }
  return projectId;
};

/**
 * Short random hex string generated once per test run.
 * Append this to resource names so parallel test runs don't collide.
 *
 * Example: `distilled-posthog-action-${name}-${testRunId}`
 */
export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);
