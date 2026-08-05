# `@distilled.cloud/otelcol`

Typed `effect/Schema` codecs for OpenTelemetry Collector component
configuration, generated from the JSON Schemas reflected out of the
collector's own Go config structs.

Schema-only: this package has no client, no operations and no protocol. What it
gives you is one `Schema.Codec` per component whose **type** side is the
ergonomic TypeScript surface (camelCase, `Duration.Duration`) and whose
**encoded** side is exactly what the collector's config loader reads
(snake_case, Go duration strings). Emitting a config is `Schema.encodeSync` —
the same pass that validates it.

```ts
import * as Schema from "effect/Schema";
import * as Duration from "effect/Duration";
import { OtlpHttpExporter } from "@distilled.cloud/otelcol/0.151.0";

Schema.encodeUnknownSync(OtlpHttpExporter, { onExcessProperty: "error" })({
  endpoint: "https://ingest.example.com",
  timeout: Duration.seconds(30),
  headers: { authorization: "Bearer …" },
});
// => { endpoint: "https://ingest.example.com", timeout: "30s", headers: { … } }
```

> `onExcessProperty: "error"` is not the default. Every field is optional
> unless a patch marks it required, so without it a misspelt key is silently
> dropped rather than rejected.

## Layout

```
specs/{version}/         vendored reflected JSON Schemas — never edited
patches/{version}/       RFC 6902 chains, distilled's { description, patches } shape
scripts/generate.ts      JSON-Schema-subset -> effect/Schema compiler
src/{version}/           generated modules + a components manifest — never edited
```

Regenerate with `bun run generate`. The generator is deterministic: same
inputs, byte-identical output.

## Why there are patches

The reflector describes the collector's Go **types**; the collector reads a
config **file format**. Where the two disagree, the spec is patched — never the
generated output, and never with a special case in the compiler:

| artifact | reflected as | real config shape |
| --- | --- | --- |
| `headers` | `[{name, value}]` | `{ [name]: value }` |
| `auth.authenticator`, `sending_queue.storage`, `middlewares[].id` | `object` | a component-id `string` |
| `debug.verbosity` | `integer` | `basic` \| `normal` \| `detailed` |
| `sending_queue.sizer`, `.batch.sizer` | `object` | `requests` \| `items` \| `bytes` |
| OTLP exporters' `clientconfig` / `timeoutconfig` | nested object | squashed to the component root |
| `prometheusremotewrite`'s `clientconfig` / `timeoutsettings` | nested object | squashed to the component root |
| otlp receiver's `http.serverconfig`, both listeners' `netaddr` | nested object | squashed to the listener root |
| `cookies` | empty `object` | `{ enabled?: boolean }` |

The compiler **hard-errors** on an `object` with neither `properties` nor
`additionalProperties` — that is precisely the reflector rendering an opaque Go
type, and letting it through as `unknown` would let a wrong config compile. The
error names the path and demands a patch.

`middlewares` and `sending_queue.storage` are **removed** rather than typed: the
0.151.0 lambda build registers no middleware and no storage extension, so no
valid value for either exists.
