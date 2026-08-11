import * as Duration from "effect/Duration";
import * as Schema from "effect/Schema";
import { describe, expect, it } from "vitest";
import { BatchProcessor } from "../src/layer-collector-0.22.0/processors/batch.ts";
import { OtlpHttpExporter } from "../src/layer-collector-0.22.0/exporters/otlphttp.ts";
import { DebugExporter } from "../src/layer-collector-0.22.0/exporters/debug.ts";
import { OtlpReceiver } from "../src/layer-collector-0.22.0/receivers/otlp.ts";
import { build, components } from "../src/layer-collector-0.22.0/manifest.ts";
import { Service } from "../src/layer-collector-0.22.0/service.ts";

/**
 * Every field is optional unless a patch marks it required, so excess-property
 * checking is what turns a typo into an error. It is not the default, and any
 * consumer that skips it silently drops the misspelt key.
 */
const strict = { onExcessProperty: "error" } as const;

const decode = <A, I>(schema: Schema.Codec<A, I>) =>
  Schema.decodeUnknownSync(schema, strict);
const encode = <A, I>(schema: Schema.Codec<A, I>) =>
  Schema.encodeUnknownSync(schema, strict);

describe("manifest", () => {
  it("records the build the component set came from, not a version", () => {
    expect(build.tag).toBe("layer-collector/0.22.0");
    expect(build.closed).toBe(true);
    expect(build.modules).toEqual({
      "collector-core": "v0.151.0",
      "collector-core-stable": "v1.57.0",
      "collector-contrib": "v0.151.0",
      "collector-lambda": "v0.98.0",
    });
  });

  it("is the closed lambda component set", () => {
    expect(components).toHaveLength(18);
    expect(
      components.filter((c) => c.section === "receivers").map((c) => c.type),
    ).toEqual(["otlp", "telemetryapi"]);
    expect(
      components.filter((c) => c.section === "exporters").map((c) => c.type),
    ).toEqual(["debug", "otlp", "otlphttp", "prometheusremotewrite"]);
    expect(
      components.filter((c) => c.section === "extensions").map((c) => c.type),
    ).toEqual(["basicauth", "sigv4auth"]);
    expect(components.filter((c) => c.section === "processors")).toHaveLength(
      10,
    );
  });
});

describe("decoding", () => {
  it("decodes a valid batch processor from wire form", () => {
    expect(
      decode(BatchProcessor)({
        timeout: "1s",
        send_batch_size: 8192,
        metadata_keys: ["tenant"],
      }),
    ).toEqual({
      // The decoder builds durations from nanoseconds, so compare by value.
      timeout: expect.toSatisfy((d: Duration.Duration) =>
        Duration.equals(d, Duration.seconds(1)),
      ),
      sendBatchSize: 8192,
      metadataKeys: ["tenant"],
    });
  });

  it("rejects a bogus field with a path", () => {
    expect(() => decode(BatchProcessor)({ send_batch_sizes: 1 })).toThrowError(
      /Unexpected key with value 1\s+at \["send_batch_sizes"\]/,
    );
  });

  it("rejects a bogus nested field with the full path", () => {
    expect(() =>
      decode(OtlpHttpExporter)({
        endpoint: "https://example.test",
        sending_queue: { num_consumers: 2, quue_size: 4 },
      }),
    ).toThrowError(/at \["sending_queue"\]\["quue_size"\]/);
  });

  it("requires a patched-required field", () => {
    expect(() => decode(OtlpHttpExporter)({ headers: {} })).toThrowError(
      /Missing key\s+at \["endpoint"\]/,
    );
  });
});

describe("durations", () => {
  it("round-trips through the Go format", () => {
    for (const [text, duration] of [
      ["0s", Duration.zero],
      ["500ms", Duration.millis(500)],
      ["1s", Duration.seconds(1)],
      ["90s", Duration.seconds(90)],
      ["2h", Duration.hours(2)],
      ["250us", Duration.micros(250n)],
      ["7ns", Duration.nanos(7n)],
    ] as const) {
      expect(
        Duration.equals(
          decode(BatchProcessor)({ timeout: text }).timeout!,
          duration,
        ),
      ).toBe(true);
      expect(encode(BatchProcessor)({ timeout: duration })).toEqual({
        timeout: text,
      });
    }
  });

  it("rejects a non-Go duration string", () => {
    expect(() => decode(BatchProcessor)({ timeout: "1 second" })).toThrowError(
      /expected a Go duration/,
    );
  });

  it("refuses to encode an infinite duration", () => {
    expect(() =>
      encode(BatchProcessor)({ timeout: Duration.infinity }),
    ).toThrowError(/infinite Duration has no collector representation/);
  });
});

describe("patched reflector artifacts", () => {
  it("un-squashes the otlphttp exporter's clientconfig to the component root", () => {
    expect(
      encode(OtlpHttpExporter)({
        endpoint: "https://ingest.example.test",
        timeout: Duration.seconds(30),
        compression: "gzip",
        headers: { authorization: "Bearer t" },
      }),
    ).toEqual({
      endpoint: "https://ingest.example.test",
      timeout: "30s",
      compression: "gzip",
      headers: { authorization: "Bearer t" },
    });
  });

  it("types headers as a string map, not an array of {name,value}", () => {
    const config: OtlpHttpExporter = {
      endpoint: "https://x.test",
      // @ts-expect-error the reflector's shape is exactly what the patch removes
      headers: [{ name: "authorization", value: "t" }],
    };
    expect(() => encode(OtlpHttpExporter)(config)).toThrowError();
  });

  it("types the auth authenticator as a component id string", () => {
    expect(
      encode(OtlpHttpExporter)({
        endpoint: "https://x.test",
        auth: { authenticator: "sigv4auth" },
      }),
    ).toEqual({
      endpoint: "https://x.test",
      auth: { authenticator: "sigv4auth" },
    });
  });

  it("types debug verbosity as the config-file enum, not an integer", () => {
    expect(encode(DebugExporter)({ verbosity: "detailed" })).toEqual({
      verbosity: "detailed",
    });
    // @ts-expect-error the reflected type was `integer`
    const config: DebugExporter = { verbosity: 2 };
    expect(() => encode(DebugExporter)(config)).toThrowError();
  });

  it("un-squashes the otlp receiver's serverconfig and netaddr", () => {
    expect(
      encode(OtlpReceiver)({
        protocols: {
          http: { endpoint: "127.0.0.1:4318", includeMetadata: true },
          grpc: { endpoint: "127.0.0.1:4317", transport: "tcp" },
        },
      }),
    ).toEqual({
      protocols: {
        http: { endpoint: "127.0.0.1:4318", include_metadata: true },
        grpc: { endpoint: "127.0.0.1:4317", transport: "tcp" },
      },
    });
  });
});

describe("the service block", () => {
  it("encodes pipelines, the extensions list and telemetry", () => {
    expect(
      encode(Service)({
        extensions: ["sigv4auth"],
        pipelines: {
          traces: {
            receivers: ["otlp", "telemetryapi"],
            processors: ["batch"],
            exporters: ["otlphttp/backend"],
          },
          "logs/audit": {
            receivers: ["otlp"],
            exporters: ["debug"],
          },
        },
        telemetry: {
          logs: {
            level: "warn",
            outputPaths: ["stdout"],
            sampling: { enabled: true, tick: Duration.seconds(10) },
          },
          metrics: { level: "none" },
        },
      }),
    ).toEqual({
      extensions: ["sigv4auth"],
      pipelines: {
        traces: {
          receivers: ["otlp", "telemetryapi"],
          processors: ["batch"],
          exporters: ["otlphttp/backend"],
        },
        "logs/audit": { receivers: ["otlp"], exporters: ["debug"] },
      },
      telemetry: {
        logs: {
          level: "warn",
          output_paths: ["stdout"],
          sampling: { enabled: true, tick: "10s" },
        },
        metrics: { level: "none" },
      },
    });
  });

  it("types pipeline ids as a signal, optionally `/name`-suffixed", () => {
    const ok: Service["pipelines"] = {
      traces: { receivers: ["otlp"], exporters: ["debug"] },
      "logs/audit": { receivers: ["otlp"], exporters: ["debug"] },
    };
    expect(Object.keys(ok)).toHaveLength(2);

    const gated: Service["pipelines"] = {
      // @ts-expect-error `profiles` needs the alpha feature gate this build does not enable
      profiles: { receivers: ["otlp"], exporters: ["debug"] },
    };
    expect(gated).toBeDefined();

    const misspelt: Service["pipelines"] = {
      // @ts-expect-error a pipeline id is a signal, not an arbitrary string
      tracez: { receivers: ["otlp"], exporters: ["debug"] },
    };
    expect(misspelt).toBeDefined();
  });

  it("rejects a misspelt telemetry field where it was written", () => {
    const config: Service = {
      pipelines: { traces: { receivers: ["otlp"], exporters: ["debug"] } },
      // @ts-expect-error `output_paths` is spelt `outputPaths` on the type side
      telemetry: { logs: { output_paths: ["stdout"] } },
    };
    expect(() => encode(Service)(config)).toThrowError(
      /at \["telemetry"\]\["logs"\]\["output_paths"\]/,
    );
  });

  it("rejects a level outside zap's set", () => {
    const config: Service = {
      pipelines: { traces: { receivers: ["otlp"], exporters: ["debug"] } },
      // @ts-expect-error `verbose` is not a zapcore level
      telemetry: { logs: { level: "verbose" } },
    };
    expect(() => encode(Service)(config)).toThrowError(
      /at \["telemetry"\]\["logs"\]\["level"\]/,
    );
  });

  it("requires a pipeline to name its receivers and exporters", () => {
    // @ts-expect-error `exporters` is required
    const config: Service = { pipelines: { traces: { receivers: ["otlp"] } } };
    expect(() => encode(Service)(config)).toThrowError(/Missing key/);
  });
});
