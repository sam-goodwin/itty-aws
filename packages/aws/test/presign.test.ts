import { describe, expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Credentials from "../src/credentials.browser.ts";
import { Endpoint } from "../src/endpoint.ts";
import { presignS3Url, presignUrl } from "../src/presign.ts";
import { Region } from "../src/region.ts";

const staticCredentials = Credentials.fromCredentials({
  accessKeyId: "AKIDEXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY",
});

const staticCredentialsWithSessionToken = Credentials.fromCredentials({
  accessKeyId: "AKIDEXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY",
  sessionToken: "THESESSIONTOKEN",
});

const region = Layer.succeed(Region, Effect.succeed("us-east-1"));

const layers = Layer.mergeAll(staticCredentials, region);

const DATETIME = "20260101T000000Z";

describe("Presign", () => {
  describe("presignS3Url", () => {
    it.effect("mints a virtual-hosted-style presigned GET URL", () =>
      Effect.gen(function* () {
        const signed = yield* presignS3Url({
          bucket: "my-bucket",
          key: "path/to/object.txt",
          datetime: DATETIME,
        });
        const url = new URL(signed);
        expect(url.origin).toBe("https://my-bucket.s3.us-east-1.amazonaws.com");
        expect(url.pathname).toBe("/path/to/object.txt");
        expect(url.searchParams.get("X-Amz-Algorithm")).toBe(
          "AWS4-HMAC-SHA256",
        );
        expect(url.searchParams.get("X-Amz-Credential")).toBe(
          "AKIDEXAMPLE/20260101/us-east-1/s3/aws4_request",
        );
        expect(url.searchParams.get("X-Amz-Date")).toBe(DATETIME);
        expect(url.searchParams.get("X-Amz-Expires")).toBe("900");
        expect(url.searchParams.get("X-Amz-SignedHeaders")).toBe("host");
        expect(url.searchParams.get("X-Amz-Signature")).toMatch(
          /^[0-9a-f]{64}$/,
        );
      }).pipe(Effect.provide(layers)),
    );

    it.effect("is deterministic for a fixed datetime and credentials", () =>
      Effect.gen(function* () {
        const options = {
          bucket: "my-bucket",
          key: "object.txt",
          datetime: DATETIME,
        } as const;
        const first = yield* presignS3Url(options);
        const second = yield* presignS3Url(options);
        expect(first).toBe(second);
      }).pipe(Effect.provide(layers)),
    );

    it.effect("signs content-type into PUT URLs", () =>
      Effect.gen(function* () {
        const signed = yield* presignS3Url({
          method: "PUT",
          bucket: "my-bucket",
          key: "upload.json",
          contentType: "application/json",
          expiresIn: 3600,
          datetime: DATETIME,
        });
        const url = new URL(signed);
        expect(url.searchParams.get("X-Amz-Expires")).toBe("3600");
        expect(url.searchParams.get("X-Amz-SignedHeaders")).toBe(
          "content-type;host",
        );
      }).pipe(Effect.provide(layers)),
    );

    it.effect("signs response-content-type overrides into GET URLs", () =>
      Effect.gen(function* () {
        const signed = yield* presignS3Url({
          bucket: "my-bucket",
          key: "report.bin",
          responseContentType: "application/pdf",
          datetime: DATETIME,
        });
        const url = new URL(signed);
        expect(url.searchParams.get("response-content-type")).toBe(
          "application/pdf",
        );
        // pre-signature query params participate in the signature
        const without = yield* presignS3Url({
          bucket: "my-bucket",
          key: "report.bin",
          datetime: DATETIME,
        });
        expect(new URL(without).searchParams.get("X-Amz-Signature")).not.toBe(
          url.searchParams.get("X-Amz-Signature"),
        );
      }).pipe(Effect.provide(layers)),
    );

    it.effect("URI-encodes the key while preserving slashes", () =>
      Effect.gen(function* () {
        const signed = yield* presignS3Url({
          bucket: "my-bucket",
          key: "dir with spaces/file+name.txt",
          datetime: DATETIME,
        });
        const url = new URL(signed);
        expect(url.pathname).toBe("/dir%20with%20spaces/file%2Bname.txt");
      }).pipe(Effect.provide(layers)),
    );

    it.effect("includes the session token when present", () =>
      Effect.gen(function* () {
        const signed = yield* presignS3Url({
          bucket: "my-bucket",
          key: "object.txt",
          datetime: DATETIME,
        });
        const url = new URL(signed);
        expect(url.searchParams.get("X-Amz-Security-Token")).toBe(
          "THESESSIONTOKEN",
        );
      }).pipe(
        Effect.provide(
          Layer.mergeAll(staticCredentialsWithSessionToken, region),
        ),
      ),
    );

    it.effect("honors an explicit region over the Region service", () =>
      Effect.gen(function* () {
        const signed = yield* presignS3Url({
          bucket: "my-bucket",
          key: "object.txt",
          region: "eu-west-1",
          datetime: DATETIME,
        });
        const url = new URL(signed);
        expect(url.host).toBe("my-bucket.s3.eu-west-1.amazonaws.com");
        expect(url.searchParams.get("X-Amz-Credential")).toBe(
          "AKIDEXAMPLE/20260101/eu-west-1/s3/aws4_request",
        );
      }).pipe(Effect.provide(layers)),
    );

    it.effect("uses path-style URLs under a custom Endpoint", () =>
      Effect.gen(function* () {
        const signed = yield* presignS3Url({
          bucket: "my-bucket",
          key: "object.txt",
          datetime: DATETIME,
        });
        const url = new URL(signed);
        expect(url.origin).toBe("http://localhost:4566");
        expect(url.pathname).toBe("/my-bucket/object.txt");
        expect(url.searchParams.get("X-Amz-Signature")).toMatch(
          /^[0-9a-f]{64}$/,
        );
      }).pipe(
        Effect.provide(
          Layer.mergeAll(
            layers,
            Layer.succeed(Endpoint, Effect.succeed("http://localhost:4566/")),
          ),
        ),
      ),
    );
  });

  describe("presignUrl", () => {
    it.effect("presigns an arbitrary URL for any service", () =>
      Effect.gen(function* () {
        const signed = yield* presignUrl({
          method: "POST",
          url: "https://abc123.execute-api.us-east-1.amazonaws.com/prod/orders?limit=10",
          service: "execute-api",
          expiresIn: 60,
          datetime: DATETIME,
        });
        const url = new URL(signed);
        expect(url.searchParams.get("limit")).toBe("10");
        expect(url.searchParams.get("X-Amz-Expires")).toBe("60");
        expect(url.searchParams.get("X-Amz-Credential")).toBe(
          "AKIDEXAMPLE/20260101/us-east-1/execute-api/aws4_request",
        );
        expect(url.searchParams.get("X-Amz-Signature")).toMatch(
          /^[0-9a-f]{64}$/,
        );
      }).pipe(Effect.provide(layers)),
    );
  });
});
