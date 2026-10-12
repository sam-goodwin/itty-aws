# @distilled.cloud/scaleway

Effect-native Scaleway SDK, generated from the OpenAPI documents Scaleway
publishes on its [developer portal](https://www.scaleway.com/en/developers/api/)
(one per API version, e.g.
[Instance v1](https://www.scaleway.com/en/developers/api/instance/v1/schema.yml)).

## Installation

```bash
npm install @distilled.cloud/scaleway effect
```

## Quick start

```ts
import { Config, Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/http/FetchHttpClient";
import * as Scaleway from "@distilled.cloud/scaleway";

const program = Effect.gen(function* () {
  const project_id = yield* Config.String("SCW_DEFAULT_PROJECT_ID");

  // `region` is optional: it defaults to SCW_DEFAULT_REGION (fr-par).
  const vpc = yield* Scaleway.vpcV2.createVPC({ name: "distilled-example", project_id });
  const { private_networks } = yield* Scaleway.vpcV2.listPrivateNetworks({ vpc_id: vpc.id });
  yield* Scaleway.vpcV2.deleteVPC({ vpc_id: vpc.id! });

  return { vpc: vpc.id, privateNetworks: private_networks?.length };
});

const Live = Layer.mergeAll(
  FetchHttpClient.layer,
  Scaleway.CredentialsFromEnv,
  Scaleway.ScalewayProtocol,
);

program.pipe(Effect.provide(Live), Effect.runPromise);
```

## Modules

One module per Scaleway API and version, named after it: `instanceV1`,
`instanceV2alpha1`, `blockV1`, `k8sV1`, `lbZonedV1`, `rdbV1`, `vpcV2`,
`iamV1alpha1`, `accountProjectV3`, `containersV1`, `functionsV1beta1`,
`secretManagerV1beta1`, `domainV2beta1`, … — every document on the developer
portal except the `test` API, which `api.scaleway.com` does not serve.
Operations deprecated upstream are not generated. Member names are
Scaleway's wire names (`project_id`, `commercial_type`, `page_size`).

## Auth

`SCW_SECRET_KEY` as `X-Auth-Token` (and as `Authorization: Bearer` for
Generative APIs on `api.scaleway.ai`). Optional: `SCW_DEFAULT_REGION`
(default `fr-par`) and `SCW_DEFAULT_ZONE` (default `fr-par-1`) fill a call's
`region` / `zone` when it leaves them out; `SCW_API_URL` replaces
`https://api.scaleway.com`. `SCW_DEFAULT_PROJECT_ID` and
`SCW_DEFAULT_ORGANIZATION_ID` are read into the credentials for callers but
never added to a request. The `~/.config/scw/config.yaml` profile file is not
read — export its values instead.

```ts
import * as Redacted from "effect/Redacted";

Scaleway.credentials({
  secretKey: Redacted.make(process.env.SCW_SECRET_KEY!),
  region: "nl-ams",
  zone: "nl-ams-1",
});
```

## Pagination

List operations stream every page with `.pages(input)` or every item with
`.items(input)`: `page` / `page_size` lists stop once `total_count` items are
read (Instance v1's `X-Total-Count` header is folded into `total_count`), and
`page_token` lists follow `next_page_token`.

```ts
import * as Stream from "effect/Stream";

const servers = Scaleway.instanceV1.listServers.items({ zone: "fr-par-1" }).pipe(Stream.runCollect);
```

## Errors

Failures are dispatched on Scaleway's error `type`, as the official SDKs do:
`InvalidArgumentsError`, `DeniedAuthenticationError`,
`PermissionsDeniedError`, `QuotasExceededError`, `ResourceNotFoundError`,
`ResourceExpiredError`, `ResourceLockedError`, `TransientStateError`
(retried by the default policy), `AlreadyExistsError`,
`PreconditionFailedError` and `OutOfStockError`; `too_many_requests` is
core's `TooManyRequests`. A failure without a recognised `type` falls back
to the HTTP status class, then `UnknownScalewayError`.

```ts
Scaleway.instanceV1.getServer({ server_id }).pipe(
  Effect.catchTag("ResourceNotFoundError", () => Effect.succeed(undefined)),
);
```

## Streaming (Generative APIs)

`createChatCompletion` / `createResponse` with `stream: true` answer
server-sent events, which a generated operation cannot decode. Use the
streaming helpers instead:

```ts
import * as Stream from "effect/Stream";

const text = Scaleway.streamChatCompletion({
  project_id,
  model: "llama-3.1-8b-instruct",
  messages: [{ role: "user", content: "Say hello" }],
}).pipe(
  Stream.map((chunk) => chunk.choices[0]?.delta.content ?? ""),
  Stream.mkString,
);
```

`streamResponse` does the same for the Responses API. A failure before the
first event is the usual typed error.

## File downloads

Operations that answer a file (kubeconfigs, database certificates, invoices,
DNS zone exports, contract PDFs) return Scaleway's JSON file object —
`{ name, content_type, content }`, `content` base64 — as the Go SDK and CLI
read it. Each also has a `…Raw` twin that asks for the file itself
(`?dl=1`, as the JS SDK does) and answers a `Uint8Array`:

```ts
const pdf = yield* Scaleway.accountContractV3.downloadContractSignatureRaw({
  contract_signature_id,
  locale: "en_US",
});
```

## Responses and `null`

Scaleway writes unset fields as `null`; the protocol drops `null` properties
before decoding, as the official SDKs do, so an unset field is absent.

## Known limits

- `generativeApisOpenaiV1.createAudioTranscription`: the spec declares a JSON
  body with `file` as an object, but the OpenAI-compatible endpoint takes a
  multipart upload, so the generated call cannot send audio.
- Some parameters the API requires are optional in the types: one-of
  groups (`marketplaceV2.listLocalImages` needs one of `image_id` /
  `image_label` / `version_id`) and `locale` on
  `accountContractV3.downloadContractSignature`, which the spec marks
  optional. The API answers `InvalidArgumentsError` naming the field.
- APIs that Scaleway's SDKs cover but its developer portal publishes no
  OpenAPI for are not generated: the regional Load Balancer API
  (`/lb/v1/regions/…`, use `lbZonedV1`), Dedibox billing / RPN / IPv6 blocks,
  Billing v2, Dataviz, Search and Object Storage admin.
