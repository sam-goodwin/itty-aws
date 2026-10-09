/**
 * Environment configuration for credentials, endpoints and regions: the
 * small part of `effect/Config` that SDKs use, as plain Effects.
 *
 * Importing `effect/Config` costs about 280 KB of heap per process (it pulls
 * in ConfigProvider, Schema-based parsing and their dependencies), and every
 * SDK whose credentials read the environment paid it at import. These
 * readers do the same lookups without it:
 *
 * - When the caller provided a `ConfigProvider` (found by its context key),
 *   the value comes from that provider, so `ConfigProvider.fromUnknown(...)`
 *   in tests and custom providers on Workers keep working.
 * - Otherwise the value comes from `process.env`, which is what Effect's
 *   default provider reads.
 *
 * A missing variable fails with {@link ConfigMissing} (tag `ConfigError`, like
 * Effect's), which `withDefault`, `option` and `orElse` handle.
 */
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Redact from "effect/Redacted";

/** A required configuration value is missing. */
export class ConfigMissing extends Data.TaggedError("ConfigError")<{
  readonly name: string;
  readonly message: string;
}> {}

const CONFIG_PROVIDER_KEY = "effect/ConfigProvider";

interface ProvidedConfigProvider {
  readonly load: (
    path: ReadonlyArray<string>,
  ) => Effect.Effect<{ readonly _tag: string; readonly value?: string } | undefined, unknown>;
}

const fromEnv = (name: string): string | undefined =>
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.[name];

/** The raw value of `name`, or undefined when unset. */
const lookup = (name: string): Effect.Effect<string | undefined> =>
  Effect.flatMap(Effect.context<never>(), (context) => {
    const provider = context.mapUnsafe.get(CONFIG_PROVIDER_KEY) as
      | ProvidedConfigProvider
      | undefined;
    if (!provider) return Effect.succeed(fromEnv(name));
    return provider.load([name]).pipe(
      Effect.map((node) => (node?._tag === "Value" ? node.value : undefined)),
      Effect.orElseSucceed(() => undefined),
    );
  });

const required = (name: string): Effect.Effect<string, ConfigMissing> =>
  Effect.flatMap(lookup(name), (value) =>
    value === undefined
      ? Effect.fail(new ConfigMissing({ name, message: `Expected ${name} to be set` }))
      : Effect.succeed(value),
  );

/** The string value of environment variable `name`. */
export const String = (name: string): Effect.Effect<string, ConfigMissing> => required(name);

/** The value of `name`, redacted. */
export const Redacted = (name: string): Effect.Effect<Redact.Redacted<string>, ConfigMissing> =>
  Effect.map(required(name), Redact.make);

/** The value as an `Option`: `None` when missing. */
export const option = <A, E, R>(
  self: Effect.Effect<A, E, R>,
): Effect.Effect<Option.Option<A>, never, R> =>
  Effect.catch(Effect.map(self, Option.some), () => Effect.succeed(Option.none<A>()));

/** Use `value` when missing. */
export const withDefault =
  <B>(value: B) =>
  <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A | B, never, R> =>
    Effect.catch(self, () => Effect.succeed(value));

/** Try `that` when missing. */
export const orElse =
  <A2, E2, R2>(that: () => Effect.Effect<A2, E2, R2>) =>
  <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A | A2, E2, R | R2> =>
    Effect.catch(self, () => that());

export const map =
  <A, B>(f: (a: A) => B) =>
  <E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<B, E, R> =>
    Effect.map(self, f);

/** Read every value of a struct of readers. */
export const all = <const T extends Record<string, Effect.Effect<any, any, any>>>(
  readers: T,
): Effect.Effect<
  { -readonly [K in keyof T]: Effect.Success<T[K]> },
  Effect.Error<T[keyof T]>,
  Effect.Services<T[keyof T]>
> => Effect.all(readers) as any;
