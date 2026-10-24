/**
 * Per-scope access-token cache shared by the credential providers --
 * hand-written.
 */
import * as Clock from "effect/Clock";
import * as Deferred from "effect/Deferred";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import type * as Redacted from "effect/Redacted";

/** An access token and the time it expires (epoch milliseconds). */
export interface AccessToken {
  readonly token: Redacted.Redacted<string>;
  readonly expiresOnMs: number;
}

/** Refresh a cached token this long before it expires. */
export const DEFAULT_REFRESH_WINDOW_MS = 5 * 60 * 1000;

interface Entry<E> {
  readonly token?: AccessToken;
  readonly inflight?: Deferred.Deferred<AccessToken, E>;
}

type Claim<E> =
  | { readonly _tag: "Fresh"; readonly token: AccessToken }
  | { readonly _tag: "Wait"; readonly deferred: Deferred.Deferred<AccessToken, E> }
  | { readonly _tag: "Request"; readonly deferred: Deferred.Deferred<AccessToken, E> };

/**
 * Wrap a token request in a cache keyed by scope. A cached token is reused
 * until `refreshWindowMs` before it expires. Concurrent callers that find no
 * fresh token share one request. The request runs detached, so an
 * interrupted caller never strands the others. A failed refresh falls back
 * to the cached token while that token has not expired yet.
 */
export const makeTokenCache = <E>(
  request: (scope: string) => Effect.Effect<AccessToken, E>,
  options: { readonly refreshWindowMs?: number } = {},
): ((scope: string) => Effect.Effect<Redacted.Redacted<string>, E>) => {
  const refreshWindowMs = options.refreshWindowMs ?? DEFAULT_REFRESH_WINDOW_MS;
  const entries = new Map<string, Entry<E>>();

  const settle = (scope: string, exit: Exit.Exit<AccessToken, E>, now: number) => {
    const previous = entries.get(scope)?.token;
    if (Exit.isSuccess(exit)) {
      entries.set(scope, { token: exit.value });
      return exit;
    }
    if (previous !== undefined) {
      entries.set(scope, { token: previous });
      if (previous.expiresOnMs > now) return Exit.succeed(previous);
    } else {
      entries.delete(scope);
    }
    return exit;
  };

  return (scope) =>
    Effect.gen(function* () {
      const now = yield* Clock.currentTimeMillis;
      // Check and claim in one synchronous step so two fibers cannot both
      // start a request for the same scope.
      const claim = yield* Effect.sync((): Claim<E> => {
        const entry = entries.get(scope);
        if (entry?.token !== undefined && entry.token.expiresOnMs - now > refreshWindowMs) {
          return { _tag: "Fresh", token: entry.token };
        }
        if (entry?.inflight !== undefined) return { _tag: "Wait", deferred: entry.inflight };
        const deferred = Deferred.makeUnsafe<AccessToken, E>();
        entries.set(scope, { token: entry?.token, inflight: deferred });
        return { _tag: "Request", deferred };
      });
      if (claim._tag === "Fresh") return claim.token.token;
      if (claim._tag === "Request") {
        yield* request(scope).pipe(
          Effect.exit,
          Effect.flatMap((exit) =>
            Clock.currentTimeMillis.pipe(
              Effect.flatMap((settledAt) =>
                Deferred.done(claim.deferred, settle(scope, exit, settledAt)),
              ),
            ),
          ),
          Effect.forkDetach,
        );
      }
      const token = yield* Deferred.await(claim.deferred);
      return token.token;
    });
};
