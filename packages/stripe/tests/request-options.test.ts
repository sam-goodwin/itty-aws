import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as UrlParams from "effect/unstable/http/UrlParams";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { DeleteProductsId } from "../src/operations/DeleteProductsId.ts";
import { GetPrices } from "../src/operations/GetPrices.ts";
import { PostCustomers } from "../src/operations/PostCustomers.ts";
import { PostProductsId } from "../src/operations/PostProductsId.ts";

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

const priceListResponse = {
  data: [],
  has_more: false,
  object: "list",
  url: "/v1/prices",
};

const productResponse = {
  active: true,
  created: 1_700_000_000,
  default_price: null,
  description: null,
  id: "prod_test",
  images: [],
  livemode: false,
  marketing_features: [],
  metadata: {},
  name: "Test product",
  object: "product",
  package_dimensions: null,
  shippable: null,
  tax_code: null,
  type: "service",
  updated: 1_700_000_000,
  url: null,
};

const deletedProductResponse = {
  deleted: true,
  id: "prod_test",
  object: "product",
};

const responseForRequest = (request: HttpClientRequest.HttpClientRequest) => {
  if (request.method === "GET" && request.url.endsWith("/v1/prices")) {
    return priceListResponse;
  }
  if (request.method === "POST" && request.url.endsWith("/v1/products/prod_test")) {
    return productResponse;
  }
  if (request.method === "DELETE" && request.url.endsWith("/v1/products/prod_test")) {
    return deletedProductResponse;
  }
  return customerResponse;
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
      const responseBody = responseForRequest(request);
      return Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response(JSON.stringify(responseBody), {
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

  it("serializes Stripe GET arrays and nested filters with bracket notation", async () => {
    const captured: CapturedRequest = {};

    await runWithMockStripe(
      GetPrices({
        active: false,
        created: { gte: 1_700_000_000, lt: 1_700_003_600 },
        limit: 100,
        lookup_keys: ["basic", "pro"],
      }),
      captured,
    );

    expect(captured.request?.method).toBe("GET");
    expect(captured.request?.url).toBe("https://api.stripe.test/v1/prices");
    expect(UrlParams.toRecord(captured.request!.urlParams)).toEqual({
      active: "false",
      "created[gte]": "1700000000",
      "created[lt]": "1700003600",
      "lookup_keys[]": ["basic", "pro"],
      limit: "100",
    });
  });

  it("sends Stripe product field clears through form-encoded operations", async () => {
    const captured: CapturedRequest = {};

    await runWithMockStripe(
      PostProductsId({
        id: "prod_test",
        description: "",
        images: "",
        marketing_features: "",
        shippable: "",
      }),
      captured,
    );

    expect(captured.request?.method).toBe("POST");
    expect(captured.request?.url).toBe(
      "https://api.stripe.test/v1/products/prod_test",
    );
    expect(textBody(captured.request!)).toBe(
      "description=&images=&marketing_features=&shippable=",
    );
  });

  it("accepts Stripe boolean delete responses", async () => {
    const captured: CapturedRequest = {};

    const deleted = await runWithMockStripe(
      DeleteProductsId({ id: "prod_test" }),
      captured,
    );

    expect(captured.request?.method).toBe("DELETE");
    expect(captured.request?.url).toBe(
      "https://api.stripe.test/v1/products/prod_test",
    );
    expect(deleted).toEqual(deletedProductResponse);
  });
});
