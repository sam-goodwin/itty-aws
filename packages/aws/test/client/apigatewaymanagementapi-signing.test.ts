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
import { postToConnection } from "../../src/services/apigatewaymanagementapi.ts";

const accessKeyId = "AKIDEXAMPLE";
const secretAccessKey = "test-secret-access-key";
const endpoint = "https://abc123.execute-api.us-west-2.amazonaws.com/test";

describe("ApiGatewayManagementApi signing", () => {
  it("hashes PostToConnection's buffered frame in the SigV4 canonical request", async () => {
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

    await Effect.runPromise(
      postToConnection({
        ConnectionId: "connection-id==",
        Data: "echo:hello-websocket",
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
    expect(captured!.url).toBe(`${endpoint}/@connections/connection-id%3D%3D`);
    expect(captured!.headers["x-amz-content-sha256"]).toBeUndefined();

    const datetime = captured!.headers["x-amz-date"]!;
    const expected = await new AwsV4Signer({
      method: "POST",
      url: captured!.url,
      body: "echo:hello-websocket",
      accessKeyId,
      secretAccessKey,
      service: "execute-api",
      region: "us-west-2",
      datetime,
    }).sign();

    expect(captured!.headers.authorization).toBe(
      expected.headers.get("authorization"),
    );
    expect(
      await new AwsV4Signer({
        method: "POST",
        url: captured!.url,
        body: "echo:hello-websocket",
        accessKeyId,
        secretAccessKey,
        service: "execute-api",
        region: "us-west-2",
        datetime,
      }).canonicalString(),
    ).toContain("/test/%40connections/connection-id%253D%253D");
  });
});
