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
import { updateThingShadow } from "../../src/services/iot-data-plane.ts";

const accessKeyId = "AKIDEXAMPLE";
const secretAccessKey = "test-secret-access-key";
const endpoint = "https://data-ats.iot.us-west-2.amazonaws.com";

describe("IoT Data Plane signing", () => {
  it("hashes UpdateThingShadow's buffered payload in the SigV4 canonical request", async () => {
    let captured:
      | Parameters<Parameters<typeof HttpClient.make>[0]>[0]
      | undefined;

    const client = HttpClient.make((request) => {
      captured = request;
      return Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response("{}", {
            status: 200,
            headers: { "content-type": "application/json" },
          }),
        ),
      );
    });
    const payload = JSON.stringify({ state: { desired: { led: "on" } } });

    await Effect.runPromise(
      updateThingShadow({ thingName: "test-thing", payload }).pipe(
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
      method: "POST",
      url: captured!.url,
      body: payload,
      accessKeyId,
      secretAccessKey,
      service: "iotdata",
      region: "us-west-2",
      datetime,
    }).sign();

    expect(captured!.headers.authorization).toBe(
      expected.headers.get("authorization"),
    );
  });
});
