import { describe, expect, it } from "@effect/vitest";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as Credentials from "../src/credentials.browser.ts";
import * as Region from "../src/region.ts";
import { listBuckets } from "../src/services/s3.ts";

/**
 * A credentials layer always establishes a region — see `ResolvedCredentials`
 * — and `Region` is the optional override on top of it. These cover both
 * halves: where credentials get their region from, and that an override wins.
 *
 * The environment is supplied through a ConfigProvider rather than by
 * mutating `process.env`, because the default provider does not re-read the
 * environment per call and mutation leaks between cases.
 */
const withEnv = (env: Record<string, string>) =>
  Effect.provideService(
    ConfigProvider.ConfigProvider,
    ConfigProvider.fromUnknown(env),
  );

describe("credentials carry a region", () => {
  it.effect("takes it from AWS_REGION", () =>
    Credentials.regionFromEnv.pipe(
      withEnv({ AWS_REGION: "ap-southeast-2" }),
      Effect.map((region) => {
        expect(region).toBe("ap-southeast-2");
      }),
    ),
  );

  it.effect("falls back to AWS_DEFAULT_REGION", () =>
    Credentials.regionFromEnv.pipe(
      withEnv({ AWS_DEFAULT_REGION: "sa-east-1" }),
      Effect.map((region) => {
        expect(region).toBe("sa-east-1");
      }),
    ),
  );

  it.effect("fails with MissingRegion when the environment is silent", () =>
    Credentials.regionFromEnv.pipe(
      withEnv({}),
      Effect.flip,
      Effect.map((error) => {
        // A credential-resolution failure like any other, not a defect: the
        // caller's fix is the same shape as for a missing access key.
        expect(error._tag).toBe("Alchemy::AWS::MissingRegion");
        expect(error.hints?.join(" ")).toContain("AWS_REGION");
      }),
    ),
  );

  it.effect("prefers an explicit region over the environment", () =>
    Effect.gen(function* () {
      const resolved = yield* yield* Credentials.Credentials;
      expect(resolved.region).toBe("eu-west-1");
    }).pipe(
      Effect.provide(
        Credentials.fromCredentials(
          { accessKeyId: "AKIA", secretAccessKey: "secret" },
          "eu-west-1",
        ),
      ),
      withEnv({ AWS_REGION: "us-east-1" }),
    ),
  );

  it.effect("mock credentials carry one", () =>
    Effect.gen(function* () {
      const resolved = yield* yield* Credentials.Credentials;
      expect(resolved.region).toBe("us-east-1");
    }).pipe(Effect.provide(Credentials.mock)),
  );
});

describe("Region overrides the credentials' region", () => {
  /** Captures the signed URL without reaching the network. */
  const capturing = (urls: string[]) =>
    HttpClient.make((request) => {
      urls.push(request.url);
      return Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response(
            '<?xml version="1.0"?><ListAllMyBucketsResult><Buckets/></ListAllMyBucketsResult>',
            { status: 200, headers: { "content-type": "application/xml" } },
          ),
        ),
      );
    });

  it("uses the credentials' region when nothing overrides it", async () => {
    const urls: string[] = [];
    await Effect.runPromise(
      listBuckets({}).pipe(
        Effect.provideService(HttpClient.HttpClient, capturing(urls)),
        Effect.provide(Credentials.mock),
        Effect.asVoid,
        Effect.orDie,
      ),
    );
    expect(urls[0]).toContain("us-east-1");
  });

  it("uses a provided Region instead", async () => {
    const urls: string[] = [];
    await Effect.runPromise(
      listBuckets({}).pipe(
        Effect.provideService(HttpClient.HttpClient, capturing(urls)),
        Effect.provide(Credentials.mock),
        Effect.provide(Region.of("eu-west-2")),
        Effect.asVoid,
        Effect.orDie,
      ),
    );
    expect(urls[0]).toContain("eu-west-2");
    expect(urls[0]).not.toContain("us-east-1");
  });
});
