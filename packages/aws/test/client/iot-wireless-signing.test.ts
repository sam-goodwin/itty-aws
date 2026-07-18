import { AwsV4Signer } from "aws4fetch";
import { describe, expect, it } from "vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as Credentials from "../../src/credentials.browser.ts";
import { Endpoint } from "../../src/endpoint.ts";
import { Region } from "../../src/region.ts";
import { updateResourcePosition } from "../../src/services/iot-wireless.ts";

const accessKeyId = "AKIDEXAMPLE";
const secretAccessKey = "test-secret-access-key";
const endpoint = "https://api.iotwireless.us-west-2.amazonaws.com";

describe("IoT Wireless signing", () => {
  it("hashes UpdateResourcePosition's buffered GeoJSON payload", async () => {
    let captured:
      | Parameters<Parameters<typeof HttpClient.make>[0]>[0]
      | undefined;

    const client = HttpClient.make((request) => {
      captured = request;
      return Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response(undefined, {
            status: 200,
            headers: { "content-length": "0" },
          }),
        ),
      );
    });
    const body = JSON.stringify({
      type: "Point",
      coordinates: [-122.33, 47.61, 10],
    });

    await Effect.runPromise(
      updateResourcePosition({
        ResourceIdentifier: "device-id",
        ResourceType: "WirelessDevice",
        GeoJsonPayload: body,
      }).pipe(
        Effect.provide(Layer.succeed(HttpClient.HttpClient, client)),
        Effect.provideService(
          Credentials.Credentials,
          Effect.succeed({
            accessKeyId: Redacted.make(accessKeyId),
            secretAccessKey: Redacted.make(secretAccessKey),
            sessionToken: undefined,
          }),
        ),
        Effect.provideService(Region, Effect.succeed("us-west-2")),
        Effect.provideService(Endpoint, Effect.succeed(endpoint)),
      ),
    );

    expect(captured).toBeDefined();
    expect(captured!.headers["x-amz-content-sha256"]).toBeUndefined();

    const datetime = captured!.headers["x-amz-date"]!;
    const expected = await new AwsV4Signer({
      method: "PATCH",
      url: `${captured!.url}?resourceType=WirelessDevice`,
      body,
      accessKeyId,
      secretAccessKey,
      service: "iotwireless",
      region: "us-west-2",
      datetime,
    }).sign();

    expect(captured!.headers.authorization).toBe(
      expected.headers.get("authorization"),
    );
  });
});
