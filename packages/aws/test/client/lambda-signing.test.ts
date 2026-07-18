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
import { invoke } from "../../src/services/lambda.ts";

const accessKeyId = "AKIDEXAMPLE";
const secretAccessKey = "test-secret-access-key";
const endpoint = "https://lambda.us-west-2.amazonaws.com";

describe("Lambda signing", () => {
  it("hashes Invoke's buffered payload in the SigV4 canonical request", async () => {
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
    const body = JSON.stringify({ operation: "durable-test" });

    await Effect.runPromise(
      invoke({
        FunctionName: "test-function",
        DurableExecutionName: "stable-execution",
        Payload: body,
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
      method: "POST",
      url: captured!.url,
      body,
      headers: { "x-amz-durable-execution-name": "stable-execution" },
      accessKeyId,
      secretAccessKey,
      service: "lambda",
      region: "us-west-2",
      datetime,
    }).sign();

    expect(captured!.headers.authorization).toBe(
      expected.headers.get("authorization"),
    );
  });
});
