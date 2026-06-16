import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { PostCustomers } from "../src/operations/PostCustomers.ts";

const fakeCredentials = Layer.succeed(
  Credentials,
  Effect.succeed({
    apiKey: Redacted.make("sk_test_fake"),
    apiBaseUrl: "https://api.stripe.test",
  }),
);

const customerResponse = {
  created: 1_700_000_000,
  default_source: null,
  description: null,
  email: null,
  id: "cus_test",
  livemode: false,
  object: "customer",
  shipping: null,
};

interface CapturedRequest {
  request?: HttpClientRequest.HttpClientRequest;
}

const captureRequest = (
  captured: CapturedRequest,
): Layer.Layer<HttpClient.HttpClient> =>
  Layer.succeed(
    HttpClient.HttpClient,
    HttpClient.make((request) => {
      captured.request = request;
      return Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response(JSON.stringify(customerResponse), {
            status: 200,
            headers: { "content-type": "application/json" },
          }),
        ),
      );
    }),
  );

const runWithMockStripe = <A, E>(
  effect: Effect.Effect<A, E, Credentials | HttpClient.HttpClient>,
  captured: CapturedRequest,
) =>
  Effect.runPromise(
    effect.pipe(
      Effect.provide(captureRequest(captured)),
      Effect.provide(fakeCredentials),
    ) as Effect.Effect<A, E, never>,
  );

const textBody = (request: HttpClientRequest.HttpClientRequest): string => {
  const body = request.body;
  if (body._tag !== "Uint8Array") {
    throw new Error(`Expected Uint8Array body, received ${body._tag}`);
  }
  return new TextDecoder().decode(body.body);
};

const header = (
  request: HttpClientRequest.HttpClientRequest,
  name: string,
): string | undefined => request.headers[name.toLowerCase()];

describe("Stripe request options", () => {
  it("preserves existing one-argument operation calls", async () => {
    const captured: CapturedRequest = {};

    await runWithMockStripe(
      PostCustomers({
        email: "one-arg@example.com",
      }),
      captured,
    );

    expect(captured.request?.method).toBe("POST");
    expect(captured.request?.url).toBe("https://api.stripe.test/v1/customers");
    expect(header(captured.request!, "Authorization")).toBe(
      "Bearer sk_test_fake",
    );
    expect(header(captured.request!, "Idempotency-Key")).toBeUndefined();
    expect(textBody(captured.request!)).toBe("email=one-arg%40example.com");
  });

  it("maps per-call Stripe request options to headers outside the form body", async () => {
    const captured: CapturedRequest = {};

    await runWithMockStripe(
      PostCustomers(
        {
          email: "request-options@example.com",
          metadata: { order: "order_123" },
        },
        {
          idempotencyKey: "idem_123",
          stripeAccount: "acct_123",
          apiVersion: "2025-01-27.acacia",
        },
      ),
      captured,
    );

    expect(header(captured.request!, "Idempotency-Key")).toBe("idem_123");
    expect(header(captured.request!, "Stripe-Account")).toBe("acct_123");
    expect(header(captured.request!, "Stripe-Context")).toBeUndefined();
    expect(header(captured.request!, "Stripe-Version")).toBe(
      "2025-01-27.acacia",
    );

    const body = textBody(captured.request!);
    expect(body).toContain("email=request-options%40example.com");
    expect(body).toContain("metadata%5Border%5D=order_123");
    expect(body).not.toContain("idempotencyKey");
    expect(body).not.toContain("stripeAccount");
    expect(body).not.toContain("stripeContext");
    expect(body).not.toContain("apiVersion");
    expect(body).not.toContain("Idempotency-Key");
    expect(body).not.toContain("Stripe-Account");
    expect(body).not.toContain("Stripe-Context");
    expect(body).not.toContain("Stripe-Version");
  });

  it("maps stripeContext separately from stripeAccount", async () => {
    const captured: CapturedRequest = {};

    await runWithMockStripe(
      PostCustomers(
        {
          email: "stripe-context@example.com",
        },
        {
          stripeContext: "ctx_123",
        },
      ),
      captured,
    );

    expect(header(captured.request!, "Stripe-Account")).toBeUndefined();
    expect(header(captured.request!, "Stripe-Context")).toBe("ctx_123");
    expect(textBody(captured.request!)).toBe(
      "email=stripe-context%40example.com",
    );
  });
});
