import * as API from "@distilled.cloud/core/api";
import { debugHttp } from "@distilled.cloud/core/debug";
import {
  ConfigError,
  HTTP_STATUS_MAP,
  InternalServerError,
  type API_ERRORS,
} from "@distilled.cloud/core/errors";
import {
  buildRequest,
  getAnn,
  getPropAnn,
  getProps,
  mapKeys,
  matchTypedError,
  resolveNode,
} from "@distilled.cloud/core/protocol-http";
import { unwrapRedactedDeep, wrapSensitive } from "@distilled.cloud/core/protocol-rest";
import { validateResponse } from "@distilled.cloud/core/response-validation";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { httpSymbol } from "@distilled.cloud/core/trait";
/**
 * AzureProtocol -- hand-written.
 *
 * Speaks Azure Resource Manager's bearer-authenticated JSON REST protocol.
 * The generic request/response machinery lives in
 * `@distilled.cloud/core/protocol-http`; this module supplies what is
 * Azure's own (which is why this is a bespoke protocol rather than a
 * `makeRestProtocol` instantiation):
 *
 *   request:  credentials -> `Authorization: Bearer <token>` + base URL
 *             (default https://management.azure.com), resolved from the
 *             calling fiber on every request; a `{subscriptionId}` path
 *             placeholder the caller didn't fill is injected from
 *             credentials; the operation's baked `apiVersion` (see
 *             `traits.ts`) is appended as `?api-version=` -- ARM requires it
 *             on every call
 *
 *             data-plane operations (`keyvault-secrets`, `storage-blob`, …)
 *             instead build the base URL from their `host` template and the
 *             caller's `HostLabel()` members (`vaultBaseUrl`, `url`,
 *             `endpoint`), add their constant query/headers, send
 *             `apiVersion` as a header where the service wants one
 *             (Storage's `x-ms-version`), and authenticate with
 *             `Config.tokenFor(audience)` when the credentials provide it;
 *             a data-plane operation with no known audience fails with
 *             `MissingTokenAudience` rather than receive the ARM token, and
 *             an `anonymous` one (Confidential Ledger identity) sends none
 *
 *             hand-written models (manual-specs: Service Bus / Event Hubs
 *             messaging, Cosmos DB, Kudu) add `JsonHeader` members (sent as
 *             one JSON header, e.g. `BrokerProperties`), header maps with an
 *             empty prefix (custom properties), `jsonContentType` bodies
 *             (`application/vnd.microsoft.servicebus.json`), `emptyBody`
 *             writes, and Cosmos DB's `authScheme: "cosmos-aad"`
 *             (`type=aad&ver=1.0&sig=<token>`, URL-encoded)
 *
 *             pageable operations (`x-ms-pageable`, see convert.ts): an
 *             input carrying a page's `nextLink` is a GET of that absolute
 *             URL as-is, with the same auth headers; core's cursor
 *             strategy feeds each page's `nextLink` back in (`.pages()` /
 *             `.items()`)
 *
 *   response: 2xx JSON is the payload (no envelope; sensitive members
 *             delivered as `Redacted`); errors are matched first against the
 *             operation's own typed errors (wire matchers in the model, only
 *             hand-written models declare any), then like distilled v0's
 *             Azure client:
 *               1. ARM envelope `{ error: { code, message, target } }` (flat
 *                  `{ code, message }` fallback) -> `AZURE_ERROR_CODE_MAP`
 *                  dispatch on `error.code` (~35 codes -> ~20 typed classes)
 *               2. core `HTTP_STATUS_MAP` by status (Retry-After honored via
 *                  `parseRetryAfterForStatus`)
 *               3. unmapped 5xx -> retryable `InternalServerError`
 *               4. `UnknownAzureError` catch-all
 */
import * as Effect from "effect/Effect";
import * as HttpBody from "effect/http/HttpBody";
import type * as HttpClient from "effect/http/HttpClient";
import type * as HttpClientError from "effect/http/HttpClientError";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import type * as AST from "effect/SchemaAST";
import {
  type AzureCredentialsError,
  type Config,
  Credentials,
  DEFAULT_API_BASE_URL,
  MissingTokenAudience,
} from "./credentials.ts";
import {
  AZURE_ERROR_CODE_MAP,
  matchAzureErrorMessage,
  type AzureApiError,
  AzureParseError,
  UnknownAzureError,
} from "./errors.ts";
import {
  binaryBodyMember,
  decodeXmlBody,
  encodeXmlBody,
  hasPayloadValue,
  isXmlShaped,
  jsonBodyMember,
  parseXmlError,
  readStorageHeaders,
  splitSas,
  takePrefixHeaders,
  withoutXmlBodyMembers,
} from "./storage.ts";
import { jsonHeaderSymbol, type HttpTrait } from "./traits.ts";

/**
 * Error channel shared by every generated Azure operation. Generated service
 * files annotate operations with `API.OperationMethod<I, O, AzureOpError,
 * AzureOpContext>` explicitly so the compiler never infers these back out of
 * the schema generics. Errors are entirely client-level (v0 parity:
 * `includeOperationErrors=false` -- generated ops carry no per-op unions).
 */
export type AzureOpError =
  | InstanceType<(typeof API_ERRORS)[number]>
  | AzureApiError
  | UnknownAzureError
  | AzureParseError
  | ConfigError
  | AzureCredentialsError
  | MissingTokenAudience
  | HttpClientError.HttpClientError;

/** Context (requirements) shared by every generated Azure operation. */
export type AzureOpContext = Credentials | HttpClient.HttpClient;

// Bridge: Protocol.decode is typed as Effect<unknown> (no error channel),
// but Azure failures are real typed errors surfaced through AzureOpError.
// Fail with the instance and erase the type here; the generated operation
// annotations reintroduce it for callers.
const fail = (e: unknown): Effect.Effect<never> => Effect.fail(e) as Effect.Effect<never>;

// ---------------------------------------------------------------------------
// Error-body parsing
// ---------------------------------------------------------------------------

interface ArmError {
  code?: string;
  message?: string;
  target?: string;
  /** Codes/messages of `error.details[]` (e.g. a generic `ValidationError`
   * whose real cause is a nested detail code). */
  details?: ReadonlyArray<{ code?: string; message?: string }>;
}

/**
 * Extract `{ code, message, target }` from an ARM error body: the
 * `{ error: { code, message, target } }` envelope first, the flat
 * `{ code, message }` shape as a fallback (v0 parity).
 */
const parseArmError = (body: unknown): ArmError | undefined => {
  // Some RPs (e.g. Microsoft.GuestConfiguration) return a bare JSON string.
  if (typeof body === "string") return body ? { message: body } : undefined;
  if (body === null || typeof body !== "object") return undefined;
  const b = body as Record<string, unknown>;
  const inner =
    b.error !== null && typeof b.error === "object" ? (b.error as Record<string, unknown>) : b;
  // Microsoft.Web (and other legacy RPs) return PascalCase `Code`/`Message`.
  const field = (name: string) => {
    const value = inner[name] ?? inner[name[0]!.toUpperCase() + name.slice(1)];
    return typeof value === "string" ? value : undefined;
  };
  const code = field("code");
  const message = field("message");
  const target = field("target");
  if (code === undefined && message === undefined) return undefined;
  const details = Array.isArray(inner.details)
    ? inner.details.flatMap((d: unknown) =>
        d !== null && typeof d === "object"
          ? [
              {
                code:
                  typeof (d as { code?: unknown }).code === "string"
                    ? ((d as { code: string }).code as string)
                    : undefined,
                message:
                  typeof (d as { message?: unknown }).message === "string"
                    ? ((d as { message: string }).message as string)
                    : undefined,
              },
            ]
          : [],
      )
    : undefined;
  return { code, message, target, details };
};

// ---------------------------------------------------------------------------
// Encode
// ---------------------------------------------------------------------------

// The protocol layer is memoized per process by `API.make`, so the build
// must not capture credentials -- `encode` resolves Credentials from the
// calling fiber's context on every request instead. Its ConfigError channel
// is erased at this boundary (Protocol effects carry none) and reintroduced
// for callers by the generated AzureOpError annotations.
const encode = ({ input, inputAst }: { readonly input: unknown; readonly inputAst: AST.AST }) =>
  Effect.gen(function* () {
    const resolveCredentials: Effect.Effect<Config> = (yield* Credentials) as Effect.Effect<Config>;
    const http = getAnn(inputAst, httpSymbol) as HttpTrait | undefined;
    let unwrapped = unwrapRedactedDeep(input);
    // Storage / Tables: an endpoint URL that already carries a SAS query
    // (`https://acct.blob.core.windows.net/?sv=…&sig=…`) is its own
    // credential -- the query rides on the request and no token is sent.
    let sas: string | undefined;
    if (http?.apiVersionHeader === "x-ms-version" && http.hostRaw !== undefined) {
      const values = (unwrapped ?? {}) as Record<string, unknown>;
      for (const name of http.hostRaw) {
        const value = values[name];
        const split = typeof value === "string" ? splitSas(value) : undefined;
        if (split === undefined) continue;
        sas = split.sas;
        unwrapped = { ...values, [name]: split.base };
        break;
      }
    }
    // An unauthenticated data-plane operation (or a SAS-signed one) needs no
    // credentials, so it never mints a token.
    const creds =
      http?.anonymous === true || sas !== undefined ? undefined : yield* resolveCredentials;

    // Data-plane operations name their own endpoint (`{vaultBaseUrl}`,
    // `https://{dpsName}.azure-devices-provisioning.net`) and token audience;
    // ARM operations go to `apiBaseUrl` with the ARM token.
    let baseUrl = creds?.apiBaseUrl ?? DEFAULT_API_BASE_URL;
    let fields = unwrapped;
    if (http?.host !== undefined) {
      const host = buildHost(http, unwrapped);
      if (typeof host !== "string") return yield* fail(host);
      baseUrl = host;
      fields = withoutHostMembers(http.host, unwrapped);
    }
    // Pageable operations: a page's `nextLink` is never sent as a member.
    const nextLink = nextLinkOf(http, unwrapped);
    if (http?.nextLink !== undefined) fields = withoutMember(fields, http.nextLink);
    // The ARM token only goes to ARM. A data-plane host gets a token for its
    // own audience (a static token is sent as-is), and none when its
    // audience is unknown.
    let token: Redacted.Redacted<string> | undefined;
    if (creds !== undefined) {
      if (http?.host === undefined) {
        token = creds.bearerToken;
      } else if (http.audience === undefined) {
        return yield* fail(
          new MissingTokenAudience({
            message: `no token audience is known for the data-plane operation ${http.uri}`,
            uri: http.uri,
          }),
        );
      } else {
        const audience = audienceFor(http, http.audience, baseUrl);
        token = creds.tokenFor !== undefined ? yield* creds.tokenFor(audience) : creds.bearerToken;
      }
    }

    // Data planes: header maps (Storage `x-ms-meta-*`, Service Bus custom
    // properties), JSON-encoded headers (`BrokerProperties`) and Storage's
    // XML body leave the generic builder's input; they are sent below.
    let prefixHeaders: Record<string, string> = {};
    let xmlBody: string | undefined;
    if (http?.host !== undefined && fields !== null && typeof fields === "object") {
      const taken = takePrefixHeaders(inputAst, fields as Record<string, unknown>);
      const json = takeJsonHeaders(inputAst, taken.input);
      prefixHeaders = { ...taken.headers, ...json.headers };
      fields = json.input;
      if (http.storage === true && http.xmlRoot !== undefined) {
        xmlBody = encodeXmlBody(http.xmlRoot, inputAst, json.input);
        fields = withoutXmlBodyMembers(inputAst, json.input);
      }
    }

    let authorization: string | undefined;
    if (token !== undefined) {
      authorization =
        http?.authScheme === "cosmos-aad"
          ? encodeURIComponent(`type=aad&ver=1.0&sig=${Redacted.value(token)}`)
          : `Bearer ${Redacted.value(token)}`;
    }

    const headers: Record<string, string> = {
      ...(authorization !== undefined ? { Authorization: authorization } : {}),
      // ARM speaks JSON; without this, some resource providers negotiate
      // another media type (API Management returns policies as raw XML).
      // Storage answers in its own media types (XML lists, raw bytes).
      ...(http?.storage === true ? {} : { Accept: http?.accept ?? "application/json" }),
      ...http?.headers,
      ...(http?.apiVersion !== undefined && http.apiVersionHeader !== undefined
        ? { [http.apiVersionHeader]: http.apiVersion }
        : {}),
      // Storage and Tables want the request time on every authorized call.
      ...(http?.apiVersionHeader === "x-ms-version"
        ? { "x-ms-date": new Date().toUTCString() }
        : {}),
      ...prefixHeaders,
    };

    // The next page of a pageable operation: GET its `nextLink` as-is with
    // the same auth. The link already carries `api-version` and the skip
    // token; a version is added only when the link has none.
    if (nextLink !== undefined) {
      let url = resolveNextLink(nextLink, baseUrl);
      if (
        http?.apiVersion &&
        http.apiVersionHeader === undefined &&
        !/[?&]api-version=/.test(url)
      ) {
        url += `${url.includes("?") ? "&" : "?"}api-version=${encodeURIComponent(http.apiVersion)}`;
      }
      if (sas !== undefined && !/[?&]sig=/.test(url)) {
        url += `${url.includes("?") ? "&" : "?"}${sas}`;
      }
      return HttpClientRequest.setHeaders(HttpClientRequest.get(url), headers);
    }

    let request = buildRequest({
      input: fields,
      inputAst,
      baseUrl,
      headers,
    });
    if (xmlBody !== undefined) {
      request = HttpClientRequest.setBody(request, HttpBody.text(xmlBody, "application/xml"));
    } else if (
      (http?.storage === true || http?.emptyBody === true) &&
      (http.method === "PUT" || http.method === "POST" || http.method === "PATCH") &&
      !hasPayloadValue(inputAst, fields)
    ) {
      // A write without a payload (create container, flush, clear range,
      // Service Bus peek-lock) sends a zero-length body: Storage and
      // Service Bus answer 411 without `Content-Length`, and the builder's
      // `{}` JSON fallback is not a Storage body.
      request = HttpClientRequest.setBody(request, HttpBody.uint8Array(new Uint8Array(0)));
    } else if (http?.jsonContentType !== undefined && request.body._tag === "Uint8Array") {
      // A JSON body under the service's own media type, sent exactly (a
      // charset parameter turns a Service Bus batch into one message).
      request = HttpClientRequest.setBody(
        request,
        HttpBody.uint8Array(request.body.body, http.jsonContentType),
      );
    }

    // Azure-specific URL rewrites, applied to the built request:
    //  1. `{subscriptionId}` left unfilled by the caller is injected from
    //     credentials (v0 parity: users set AZURE_SUBSCRIPTION_ID once and
    //     individual operations pick it up automatically).
    //  2. A data-plane operation's omitted optional label and constant query
    //     (`restype=container`).
    //  3. ARM requires `api-version` on every call -- the version baked into
    //     the operation's Http trait at generation time is appended unless
    //     the URL already carries one (or the operation sends it as a header).
    let url = request.url;
    if (url.includes("{subscriptionId}")) {
      if (!creds?.subscriptionId) {
        return yield* fail(
          new ConfigError({
            message: `${http?.uri ?? "this operation"} needs a subscriptionId: pass it or configure one on the credentials`,
          }),
        );
      }
      url = url.split("{subscriptionId}").join(encodeURIComponent(creds.subscriptionId));
    }
    // A data-plane path label the spec documents as optional (Key Vault's
    // `{secret-version}`) is an empty segment when omitted.
    if (http?.host !== undefined) {
      const q = url.indexOf("?");
      const path = q >= 0 ? url.slice(0, q) : url;
      if (path.includes("{")) url = path.replace(/\{[^}/]+\}/g, "") + (q >= 0 ? url.slice(q) : "");
    }
    for (const [key, value] of Object.entries(http?.query ?? {})) {
      const pair = value === "" ? encodeURIComponent(key) : `${key}=${encodeURIComponent(value)}`;
      url += `${url.includes("?") ? "&" : "?"}${pair}`;
    }
    if (http?.apiVersion && http.apiVersionHeader === undefined && !/[?&]api-version=/.test(url)) {
      url += `${url.includes("?") ? "&" : "?"}api-version=${encodeURIComponent(http.apiVersion)}`;
    }
    if (sas !== undefined) url += `${url.includes("?") ? "&" : "?"}${sas}`;
    if (url !== request.url) {
      request = HttpClientRequest.setUrl(request, url);
    }
    return request;
  });

/** The operation's audience, or the one its `audienceByHost` names for this endpoint. */
const audienceFor = (http: HttpTrait, fallback: string, baseUrl: string): string => {
  if (http.audienceByHost === undefined) return fallback;
  let host: string;
  try {
    host = new URL(baseUrl).hostname.toLowerCase();
  } catch {
    return fallback;
  }
  for (const [suffix, audience] of Object.entries(http.audienceByHost)) {
    if (host.endsWith(suffix)) return audience;
  }
  return fallback;
};

const HOST_PLACEHOLDER = /\{([^}]+)\}/g;

/**
 * Fill a data-plane host template from the input. Members listed in
 * `hostRaw` are URLs (`https://my-vault.vault.azure.net/`) and go in verbatim
 * without their trailing `/`; the rest are URL-encoded name parts.
 */
const buildHost = (http: HttpTrait, input: unknown): string | ConfigError => {
  const values = (input ?? {}) as Record<string, unknown>;
  const missing: string[] = [];
  const url = http.host!.replace(HOST_PLACEHOLDER, (_match, name: string) => {
    const value = values[name] ?? http.hostDefaults?.[name];
    if (value === undefined || value === null || value === "") {
      missing.push(name);
      return "";
    }
    const text = String(value);
    return http.hostRaw?.includes(name) ? text.replace(/\/+$/, "") : encodeURIComponent(text);
  });
  if (missing.length > 0) {
    return new ConfigError({
      message: `missing endpoint input for ${http.uri}: ${missing.join(", ")}`,
    });
  }
  return url.replace(/\/+$/, "");
};

/** `T.JsonHeader(name)` members of a schema, read once per schema. */
const jsonHeaderPlans = /*@__PURE__*/ new WeakMap<
  AST.AST,
  ReadonlyArray<{ readonly key: string; readonly header: string; readonly type: AST.AST }>
>();
const jsonHeaderMembers = (ast: AST.AST) => {
  let members = jsonHeaderPlans.get(ast);
  if (members !== undefined) return members;
  members = getProps(resolveNode(ast)).flatMap((prop) => {
    const header = getPropAnn(prop, jsonHeaderSymbol);
    return typeof header === "string" ? [{ key: String(prop.name), header, type: prop.type }] : [];
  });
  jsonHeaderPlans.set(ast, members);
  return members;
};

/**
 * Split the input's JSON-encoded header members off into headers
 * (`brokerProperties: { label: "M1" }` → `BrokerProperties: {"Label":"M1"}`);
 * returns the input without them.
 */
const takeJsonHeaders = (
  inputAst: AST.AST,
  input: Record<string, unknown>,
): { readonly input: Record<string, unknown>; readonly headers: Record<string, string> } => {
  const members = jsonHeaderMembers(inputAst);
  if (members.length === 0) return { input, headers: {} };
  const rest = { ...input };
  const headers: Record<string, string> = {};
  for (const m of members) {
    const value = rest[m.key];
    delete rest[m.key];
    if (value !== undefined) headers[m.header] = JSON.stringify(mapKeys(m.type, value, "encode"));
  }
  return { input: rest, headers };
};

/** The output's JSON-encoded header members, parsed and mapped to their TS names. */
const readJsonHeaders = (
  outputAst: AST.AST,
  headers: Record<string, string | undefined>,
): Effect.Effect<Record<string, unknown>, AzureParseError> =>
  Effect.try({
    try: () => {
      const out: Record<string, unknown> = {};
      for (const m of jsonHeaderMembers(outputAst)) {
        const raw = headers[m.header.toLowerCase()];
        if (raw === undefined || raw.trim() === "") continue;
        out[m.key] = mapKeys(m.type, JSON.parse(raw), "decode");
      }
      return out;
    },
    catch: (cause) => new AzureParseError({ body: undefined, cause }),
  });

/** The input without the members that only fill the host template. */
const withoutHostMembers = (template: string, input: unknown): unknown => {
  if (input === null || typeof input !== "object") return input;
  const rest = { ...(input as Record<string, unknown>) };
  for (const [, name] of template.matchAll(HOST_PLACEHOLDER)) delete rest[name!];
  return rest;
};

/** The page URL a pageable operation's input carries, if any (`""` is none). */
const nextLinkOf = (http: HttpTrait | undefined, input: unknown): string | undefined => {
  if (http?.nextLink === undefined || input === null || typeof input !== "object") return undefined;
  const value = (input as Record<string, unknown>)[http.nextLink];
  return typeof value === "string" && value !== "" ? value : undefined;
};

/** The input without one member. */
const withoutMember = (input: unknown, name: string): unknown => {
  if (input === null || typeof input !== "object" || !(name in input)) return input;
  const rest = { ...(input as Record<string, unknown>) };
  delete rest[name];
  return rest;
};

/**
 * A `nextLink` is absolute (Azure's guidelines require it); a path-relative
 * one some data planes send resolves against the operation's endpoint.
 */
const resolveNextLink = (link: string, baseUrl: string): string => {
  if (/^https?:\/\//i.test(link)) return link;
  try {
    return new URL(link, `${baseUrl}/`).toString();
  } catch {
    return link;
  }
};

// ---------------------------------------------------------------------------
// Decode
// ---------------------------------------------------------------------------

const decode = ({
  response,
  outputAst,
  errors,
}: {
  readonly response: HttpClientResponse.HttpClientResponse;
  readonly outputAst: AST.AST;
  readonly errors: ReadonlyArray<unknown>;
}) =>
  Effect.gen(function* () {
    const status = response.status;
    const headers = response.headers as Record<string, string | undefined>;

    // A raw-bytes body (Storage download, Service Bus message): the body is
    // the bytes, the rest are headers. A 204 (no message within the
    // receive timeout) has no body at all.
    const bytesMember = status < 400 ? binaryBodyMember(outputAst) : undefined;
    if (bytesMember !== undefined) {
      const buffer = yield* response.arrayBuffer.pipe(Effect.orDie);
      if (debugHttp()) {
        console.error(`[distilled] <- ${status} (${buffer.byteLength} bytes)`);
      }
      const decodedHeaders = yield* readJsonHeaders(outputAst, headers).pipe(Effect.catch(fail));
      const mapped = yield* validateResponse(
        outputAst,
        {
          ...readStorageHeaders(outputAst, headers),
          ...decodedHeaders,
          ...(status === 204 ? {} : { [bytesMember]: new Uint8Array(buffer) }),
        },
        (cause) => new AzureParseError({ body: undefined, cause }),
      ).pipe(Effect.catch(fail));
      return wrapSensitive(outputAst, mapped);
    }

    // Read as text and parse tolerantly -- error pages are often non-JSON.
    const text = (yield* response.text.pipe(Effect.orDie)) ?? "";
    if (debugHttp()) {
      console.error(`[distilled] <- ${status} ${text.slice(0, 400)}`);
    }
    let json: unknown;
    let nonJson = false;
    if (text.trim().length > 0) {
      try {
        json = JSON.parse(text);
      } catch {
        nonJson = true;
      }
    }

    if (status >= 400) {
      const body = nonJson ? text : json;
      // Storage: `<Error><Code>…</Code><Message>…</Message></Error>`, or only
      // the `x-ms-error-code` header (a HEAD has no body).
      const storageCode = headers["x-ms-error-code"];
      let arm: ArmError | undefined = nonJson ? parseXmlError(text) : parseArmError(json);
      if (storageCode !== undefined && arm?.code === undefined) {
        arm = { ...arm, code: storageCode };
      }

      // 0. The operation's own typed errors (hand-written data-plane models
      //    such as Service Bus or Cosmos DB declare them with wire matchers
      //    on status, body and headers); the most specific matcher wins.
      const typed = matchTypedError(
        errors,
        status,
        [
          {
            code: arm?.code !== undefined && /^\d+$/.test(arm.code) ? Number(arm.code) : undefined,
            message: arm?.message ?? (nonJson ? text.trim() : ""),
          },
        ],
        { body, headers },
      );
      if (typed !== undefined) return yield* fail(typed);

      // 1. Match by Azure error code first for richer typed errors.
      const AzureErrorClass =
        (arm !== undefined ? matchAzureErrorMessage(arm) : undefined) ??
        (arm?.code !== undefined ? AZURE_ERROR_CODE_MAP[arm.code] : undefined);
      if (AzureErrorClass) {
        return yield* fail(
          new AzureErrorClass({
            message: arm!.message,
            code: arm!.code,
            target: arm!.target,
          }),
        );
      }

      // 1b. A generic top-level code (e.g. `ValidationError`) whose nested
      //     `details[].code` is mapped.
      const detail = arm?.details?.find(
        (d) => d.code !== undefined && AZURE_ERROR_CODE_MAP[d.code],
      );
      if (detail !== undefined) {
        const DetailErrorClass = AZURE_ERROR_CODE_MAP[detail.code!]!;
        return yield* fail(
          new DetailErrorClass({
            message: detail.message ?? arm!.message,
            code: detail.code,
            target: arm!.target,
          }),
        );
      }

      // 2. Fall back to standard HTTP status errors (Retry-After honored on
      //    retryable statuses).
      const StatusErrorClass = HTTP_STATUS_MAP[status as keyof typeof HTTP_STATUS_MAP];
      if (StatusErrorClass) {
        return yield* fail(
          new StatusErrorClass({
            message: arm?.message ?? (nonJson && text.trim() ? text.trim() : ""),
            retryAfter: parseRetryAfterForStatus(status, headers),
          } as any),
        );
      }

      // 3. Unmapped 5xx -> retryable server error.
      if (status >= 500) {
        return yield* fail(
          new InternalServerError({
            message: arm?.message ?? `HTTP ${status}`,
            retryAfter: parseRetryAfterForStatus(status, headers),
          }),
        );
      }

      // 4. Unknown Azure error.
      return yield* fail(
        new UnknownAzureError({
          code: arm?.code,
          message: arm?.message,
          target: arm?.target,
          body,
        }),
      );
    }

    // 2xx: the response body IS the payload (ARM has no success envelope),
    // plus the response headers the output declares -- the
    // `Azure-AsyncOperation` / `Location` status monitor of a long-running
    // operation's 202, for example.
    // Wire->TS key mapping is schema-driven; `RawResponseRoot` responses are
    // the body verbatim (mapKeys handles arrays/scalars structurally either
    // way). Strict mode (core/response-validation) checks the mapped body
    // against the output schema. Sensitive members are delivered as
    // `Redacted`.
    //
    // Storage answers lists and properties in XML (`<EnumerationResults>`),
    // read against the output schema's XML member names. Header members are
    // typed (numbers, booleans) and header maps (`x-ms-meta-*`) collected.
    let body: unknown = nonJson ? text : (json ?? {});
    // A JSON body carried in one member next to header members (a Cosmos DB
    // document with its `etag` and request charge).
    const payloadMember = jsonBodyMember(outputAst);
    if (payloadMember !== undefined) {
      body = mapKeys(
        outputAst,
        text.trim().length > 0 ? { [payloadMember]: nonJson ? text : json } : {},
        "decode",
      );
    } else if (nonJson && text.trimStart().startsWith("<") && isXmlShaped(outputAst)) {
      const xml = yield* Effect.try({
        try: () => decodeXmlBody(outputAst, text),
        catch: (cause) => new AzureParseError({ body: text, cause }),
      }).pipe(Effect.catch(fail));
      body = xml;
    } else {
      body = mapKeys(outputAst, body, "decode");
    }
    const decodedHeaders = yield* readJsonHeaders(outputAst, headers).pipe(Effect.catch(fail));
    const withHeaders =
      body !== null && typeof body === "object" && !Array.isArray(body)
        ? {
            ...(body as Record<string, unknown>),
            ...readStorageHeaders(outputAst, headers),
            ...decodedHeaders,
          }
        : body;
    const mapped = yield* validateResponse(
      outputAst,
      withHeaders,
      (cause) => new AzureParseError({ body: nonJson ? text : json, cause }),
    ).pipe(Effect.catch(fail));
    return wrapSensitive(outputAst, mapped);
  });

export const AzureProtocol: Layer.Layer<API.Protocol> = /*@__PURE__*/ Layer.succeed(
  API.Protocol,
  /*@__PURE__*/ API.Protocol.of({
    // Erase encode's Credentials requirement (resolved on the calling
    // fiber; see the note above `encode`).
    encode: (args) => encode(args) as Effect.Effect<HttpClientRequest.HttpClientRequest>,
    decode,
  }),
);
