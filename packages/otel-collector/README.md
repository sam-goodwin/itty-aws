# `@distilled.cloud/otel-collector`

Typed `effect/Schema` codecs for OpenTelemetry Collector configuration,
generated from the JSON Schemas reflected out of the collector's own Go config
structs.

Schema-only: this package has no client, no operations and no protocol. What it
gives you is one `Schema.Codec` per component whose **type** side is the
ergonomic TypeScript surface (camelCase, `Duration.Duration`) and whose
**encoded** side is exactly what the collector's config loader reads
(snake_case, Go duration strings). Emitting a config is `Schema.encodeSync` —
the same pass that validates it.

```ts
import * as Schema from "effect/Schema";
import * as Duration from "effect/Duration";
import { OtlpHttpExporter } from "@distilled.cloud/otel-collector/layer-collector-0.22.0";

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

## The axis is the BUILD, not a version

A collector binary contains exactly the components its OCB manifest listed, and
that manifest pins core, contrib and (here) the lambda-only modules
**independently**. No single upstream version names the set, so every directory
is keyed on the build **tag**:

```
specs/{build}/           vendored reflected JSON Schemas — never edited
specs/{build}/build.json the tag, the module pins, the component set
manual-specs/{build}/    hand-authored specs for what the reflector cannot see
patches/{build}/         RFC 6902 chains, { kind, description, patches }
scripts/generate.ts      JSON-Schema-subset -> effect/Schema compiler
src/{build}/             generated modules + manifest — never edited
```

Today there is one build: `layer-collector-0.22.0`, the AWS-managed Lambda
collector extension layer, which resolves to core `v0.151.0` / `v1.57.0`,
contrib `v0.151.0` and the lambda modules `v0.98.0`. The same pins are readable
at runtime from the generated `build` const.

Regenerate with `bun run generate`. The generator is deterministic: same
inputs, byte-identical output.

## The `service` block comes from `manual-specs/`

`service` is not a component — there is no factory for the reflector to walk,
so there is no schema for it upstream. `manual-specs/{build}/service.json` is
hand-authored from the Go source vendored into this build
(`service/config.go`, `service/pipelines/config.go`,
`service/telemetry/otelconftelemetry`) and runs through the same compiler, so
`Service`, `ServicePipeline`, `ServicePipelineId` and `ServiceTelemetry` are
generated like everything else.

It is deliberately narrower than the Go struct: the declarative-config subtrees
that `telemetry` squashes in (`metrics.readers`, `metrics.views`,
`traces.processors`, `logs.processors`) are otelconf v0.3.0 documents rather
than collector config, and nothing here can validate them, so they are omitted
rather than guessed. Their defaults still apply, and `metrics.level: none`
turns the built-in Prometheus reader off.

## Why there are patches — and the two kinds

Every patch file declares a `kind`, because the two reasons a patch exists are
not interchangeable.

### `"kind": "schema-truth"` (120 ops)

The reflector describes the collector's Go **types**; the collector reads a
config **file format**. Where the two disagree, the spec is patched — never the
generated output, and never with a special case in the compiler. Any build
would need these:

| artifact | reflected as | real config shape |
| --- | --- | --- |
| `headers` | `[{name, value}]` | `{ [name]: value }` |
| `auth.authenticator` | `object` | a component-id `string` |
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

### `"kind": "build-policy"` (8 ops, `*.policy.json`)

The field is real, but **this** build registers no component that could give it
a value, so the collector's own config validation would reject every
configuration that sets it. That is a statement about the build, which is why
these live on the build axis:

| removed | why |
| --- | --- |
| `middlewares` on both OTLP exporters, `prometheusremotewrite` and both otlp-receiver listeners | the closed lambda build registers no middleware extension |
| `sending_queue.storage` on `debug`, `otlp`, `otlphttp` | the closed lambda build registers no storage extension |
| `profiles` as a `service.pipelines` key | `service/pipelines/config.go` rejects a profiles pipeline unless the alpha `service.profilesSupport` feature gate is on, and the Lambda extension does not enable it |

The rule is narrow on purpose: **policy removes only what this build's config
loader would reject.** `otlphttp.profiles_endpoint` and the filter processor's
`profiles` block therefore stay — the loader accepts both regardless of which
pipelines exist, so removing them would be this package inventing a
restriction the collector does not have.
