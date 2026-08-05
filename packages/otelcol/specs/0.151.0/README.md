# `specs/0.151.0`

Vendored JSON Schemas, one per component, reflected out of the OpenTelemetry
Collector's Go config structs. **Do not edit them** — every divergence between
what the reflector describes (the Go *types*) and what the collector actually
reads (the config *file format*) is corrected by an RFC 6902 chain in
`../../patches/0.151.0/`.

## What this set is

The exact component set of the AWS-managed Lambda collector extension release
`layer-collector/0.22.0` (open-telemetry/opentelemetry-lambda), whose default
build pins:

| module   | version                      |
| -------- | ---------------------------- |
| core     | `v0.151.0` / `v1.57.0`       |
| contrib  | `v0.151.0`                   |
| lambda   | `v0.98.0` (telemetryapi, decouple, coldstart) |

The build is **closed**: it is compiled without the `lambdacomponents.custom`
tag, so `collector/lambdacomponents/default.go` registers exactly these 18
components and nothing else. No connectors — a `spanmetrics` connector exists
in the repository but `default.go` does not register it.

## Regenerating

The schemas are produced by an OCB build plus
[pavolloffay/opentelemetry-collector-config-schema](https://github.com/pavolloffay/opentelemetry-collector-config-schema).
The full recipe, including the two wrinkles it needs, lives in that clone's
`.scratchpad/STATE.md`:

```sh
cd ~/Developer/opentelemetry-collector-config-schema
./.bin/builder --config manifest-0.151.0-lambda.yaml --skip-compilation
cp build/schema_generator.go build/schema_generator_test.go build-lambda/
cd build-lambda && go mod vendor \
  && SCHEMA_OUTPUT_DIR=../schemas/0.151.0-lambda go test -run TestGenerateAllSchemas -v
```

Two things that recipe has to keep doing:

- The three lambda modules are not on `proxy.golang.org`, so the OCB manifest
  wires them with `replaces:` pointing at a local clone of the tag.
- `telemetryapireceiver.NewFactory` takes an `extensionID string` while OCB
  emits a zero-argument call, so `components.go` needs a one-line hand-patch
  after generation.

Copy the result here, dropping `exporter_otlp_grpc.json` and
`exporter_otlp_http.json` — they are byte-identical aliases of
`exporter_otlp.json` and `exporter_otlphttp.json`.
