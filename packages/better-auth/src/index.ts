/**
 * better-auth SDK for Effect.
 *
 * An Effect-native client for a self-hosted [better-auth](https://better-auth.com)
 * server's HTTP API — email/password auth, sessions, social linking, and
 * account management — with exhaustive error typing and retry policies.
 *
 * @example
 * ```ts
 * import * as BetterAuth from "@distilled.cloud/better-auth";
 * import * as Effect from "effect/Effect";
 *
 * const program = Effect.gen(function* () {
 *   const { token } = yield* BetterAuth.signInEmail({
 *     email: "a@b.com",
 *     password: "correct-horse",
 *   });
 *   const session = yield* BetterAuth.getSession({}).pipe(
 *     Effect.provide(BetterAuth.layer({ baseUrl, token })),
 *   );
 *   return session;
 * });
 * ```
 */
export * from "./credentials.ts";
export * as Category from "./category.ts";
export * as T from "./traits.ts";
export * as Retry from "./retry.ts";
export { API } from "./client.ts";
export * from "./errors.ts";
export * from "./schemas.ts";
export * from "./operations/index.ts";
export { SensitiveString, SensitiveNullableString } from "./sensitive.ts";
