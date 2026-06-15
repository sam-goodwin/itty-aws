/**
 * Azure ARM long-running-operation (LRO) poller.
 *
 * ARM mutating operations (PUT/PATCH/POST/DELETE) frequently return a `201`/`202`
 * ack and complete asynchronously. This poller drives the ack to a terminal
 * state and resolves the final resource, so callers receive a provisioned
 * resource instead of the intermediate ack body.
 *
 * Polling is expressed with Effect's built-in `Effect.repeat` + `Schedule`: the
 * monitor GET repeats `until` it observes a terminal state, spaced by a schedule
 * that honors each response's `Retry-After` header. The monitor style and final
 * resolution are selected with `Match` rather than branching.
 *
 * Wired into the client via `makeAPI({ ..., pollLongRunning })`; the core client
 * invokes it whenever an operation's `Http` trait carries a `longRunning` marker
 * and the response is an async ack.
 *
 * See https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/async-api-reference.md
 */
import * as Data from "effect/Data";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import { flow } from "effect/Function";
import * as Match from "effect/Match";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import * as Schema from "effect/Schema";
import * as Headers from "effect/unstable/http/Headers";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import type * as UrlParams from "effect/unstable/http/UrlParams";
import { parseRetryAfter } from "@distilled.cloud/core/retry-after";
import { AzureLongRunningOperationFailed } from "./errors.ts";

/** Poll interval used when a monitor response carries no `Retry-After`. */
const DEFAULT_POLL_INTERVAL = Duration.seconds(1);

/** A decoded JSON response: status + headers + tolerant body. */
interface JsonResponse {
  status: number;
  headers: Headers.Headers;
  body: unknown;
}

/**
 * A custom HTTP client that carries the operation's auth + JSON `Accept` on
 * every ARM request and decodes responses to {@link JsonResponse} (tolerating
 * empty/non-JSON bodies, e.g. a `202` ack). Mirrors the configured-client
 * factories in alchemy (`makeHttpStateStore`) and opencode (`Account`).
 */
const makeArmClient = (
  base: HttpClient.HttpClient,
  authHeaders: Headers.Input,
) => {
  const client = base.pipe(
    HttpClient.mapRequest(
      flow(
        HttpClientRequest.setHeaders(authHeaders),
        HttpClientRequest.acceptJson,
      ),
    ),
  );
  const get = (
    url: string,
    urlParams?: UrlParams.UrlParams,
  ): Effect.Effect<JsonResponse, unknown> =>
    client.get(url, { urlParams }).pipe(
      Effect.flatMap((res) =>
        res.json.pipe(
          Effect.catch(() => Effect.succeed(undefined)),
          Effect.map((body) => ({
            status: res.status,
            headers: res.headers,
            body,
          })),
        ),
      ),
    );
  return { get } as const;
};

/** The async-operation monitor fields the poller acts on. */
const MonitorBody = Schema.Struct({
  status: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
      target: Schema.optional(Schema.String),
    }),
  ),
});
type Monitor = typeof MonitorBody.Type;
const readMonitor = Schema.decodeUnknownOption(MonitorBody);
const monitorOf = (body: unknown): Monitor =>
  readMonitor(body).pipe(Option.getOrElse((): Monitor => ({})));

/** Terminal classification of an ARM provisioning/operation status. */
type ProvisioningState = Data.TaggedEnum<{
  InProgress: {};
  Succeeded: {};
  Failed: { readonly status: string };
}>;
const ProvisioningState = Data.taggedEnum<ProvisioningState>();

const classify = (status: string | undefined): ProvisioningState =>
  Match.value(status).pipe(
    Match.when("Succeeded", () => ProvisioningState.Succeeded()),
    Match.whenOr("Failed", "Canceled", "Cancelled", (status) =>
      ProvisioningState.Failed({ status }),
    ),
    Match.orElse(() => ProvisioningState.InProgress()),
  );

/** How the operation reports completion, derived from the ack's headers. */
type Strategy = Data.TaggedEnum<{
  AsyncOperation: { readonly url: string };
  Location: { readonly url: string };
  Direct: {};
}>;
const Strategy = Data.taggedEnum<Strategy>();

const strategyOf = (headers: Headers.Headers): Strategy =>
  Headers.get(headers, "azure-asyncoperation").pipe(
    Option.orElse(() => Headers.get(headers, "operation-location")),
    Option.map((url) => Strategy.AsyncOperation({ url })),
    Option.orElse(() =>
      Headers.get(headers, "location").pipe(
        Option.map((url) => Strategy.Location({ url })),
      ),
    ),
    Option.getOrElse(() => Strategy.Direct()),
  );

/**
 * Poll cadence: each wait honors the most recent response's `Retry-After`
 * (falling back to `DEFAULT_POLL_INTERVAL`). `passthrough` exposes the response
 * to `modifyDelay` so the delay can be derived from its headers.
 */
const pollSchedule = Schedule.spaced(DEFAULT_POLL_INTERVAL).pipe(
  Schedule.setInputType<JsonResponse>(),
  Schedule.passthrough,
  Schedule.modifyDelay((latest) =>
    Effect.succeed(parseRetryAfter(latest.headers) ?? DEFAULT_POLL_INTERVAL),
  ),
);

/** Fail when an async-operation monitor settled on `Failed`/`Canceled`. */
const ensureSucceeded = (
  terminal: JsonResponse,
): Effect.Effect<JsonResponse, AzureLongRunningOperationFailed> => {
  const monitor = monitorOf(terminal.body);
  return ProvisioningState.$match(classify(monitor.status), {
    Failed: ({ status }) =>
      Effect.fail(
        new AzureLongRunningOperationFailed({
          status,
          code: monitor.error?.code,
          message: monitor.error?.message,
          target: monitor.error?.target,
          body: terminal.body,
        }),
      ),
    Succeeded: () => Effect.succeed(terminal),
    InProgress: () => Effect.succeed(terminal),
  });
};

/**
 * Drive an ARM async operation to completion and return the final resource body.
 *
 * Two monitor styles are supported:
 *   - **async-operation** (`Azure-AsyncOperation` / `Operation-Location`): poll
 *     the monitor's JSON `status` until terminal; a `Failed`/`Canceled` status
 *     surfaces as `AzureLongRunningOperationFailed`.
 *   - **location** (`Location`): poll the URL until it stops returning `202`.
 *
 * The provisioned resource is then resolved per ARM's rules (mirroring
 * `@azure/core-lro`'s `findResourceLocation`): a `PUT`/`PATCH` resource — and
 * any `original-uri` operation — lives at the original request URI and is
 * fetched there (the `Location` body for a create is only a stub); otherwise
 * the terminal poll body is the result.
 */
export const pollLongRunning = (args: {
  response: HttpClientResponse.HttpClientResponse;
  request: HttpClientRequest.HttpClientRequest;
  client: HttpClient.HttpClient;
  method: string;
  authHeaders: Record<string, string>;
  finalStateVia?: string;
}): Effect.Effect<unknown, unknown> => {
  const { response, request, client, method, authHeaders, finalStateVia } =
    args;

  const http = makeArmClient(client, authHeaders);

  const pollUntil = (url: string, until: (response: JsonResponse) => boolean) =>
    http.get(url).pipe(Effect.repeat({ schedule: pollSchedule, until }));

  // GET the original request URI for the full resource (carry the original
  // query so `api-version` is preserved).
  const fetchResource = () =>
    http.get(request.url, request.urlParams).pipe(Effect.map((r) => r.body));

  const resolveFinal = (
    terminal: JsonResponse,
  ): Effect.Effect<unknown, unknown> =>
    Match.value({ method, finalStateVia }).pipe(
      // PUT/PATCH create/modify a resource that lives at the request URI.
      Match.when({ method: "PUT" }, fetchResource),
      Match.when({ method: "PATCH" }, fetchResource),
      Match.when({ finalStateVia: "original-uri" }, fetchResource),
      // POST/DELETE (location / async-operation): the terminal poll body is it.
      Match.orElse(() => Effect.succeed(terminal.body)),
    );

  return Strategy.$match(strategyOf(response.headers), {
    AsyncOperation: ({ url }) =>
      pollUntil(
        url,
        (fetched) =>
          !ProvisioningState.$is("InProgress")(
            classify(monitorOf(fetched.body).status),
          ),
      ),
    Location: ({ url }) => pollUntil(url, (fetched) => fetched.status !== 202),
    Direct: () => http.get(request.url, request.urlParams),
  }).pipe(Effect.flatMap(ensureSucceeded), Effect.flatMap(resolveFinal));
};
