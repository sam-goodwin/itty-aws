import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import * as crm from "../src/services/cloudresourcemanager-v3.ts";

// Mocks the HttpClient to return GCP-style error envelopes and asserts
// that the typed error surface preserves the structured fields
// (`status`, `details[]`) that GCP returns alongside the human-readable
// `message`. Without this, HTTP-status-only matching forces consumers
// to disambiguate sub-cases by string-matching the `message`, which is
// fragile and locale-dependent.

const fakeCredentials = Layer.succeed(
  Credentials,
  Effect.succeed({
    accessToken: Redacted.make("ya29.fake-test-token"),
    project: "fake-test-project",
  }),
);

const respondWith = (
  status: number,
  body: unknown,
): Layer.Layer<HttpClient.HttpClient> =>
  Layer.succeed(
    HttpClient.HttpClient,
    HttpClient.make((request) =>
      Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response(JSON.stringify(body), {
            status,
            headers: { "content-type": "application/json" },
          }),
        ),
      ),
    ),
  );

describe("GCP error envelope decoding", () => {
  it("BadRequest: surfaces gRPC status and details[] from the error envelope", async () => {
    // The exact 400 GCP returns from cloudbilling.updateBillingInfo
    // when the billing account's project-attach quota is exhausted.
    // Captured live, then redacted: the response shape (HTTP 400 +
    // `FAILED_PRECONDITION` + a `QuotaFailure` detail with a
    // remediation link) is canonical for this class of error.
    const errorBody = {
      error: {
        code: 400,
        message: "Precondition check failed.",
        status: "FAILED_PRECONDITION",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.QuotaFailure",
            violations: [
              {
                subject: "billingAccounts/01A860-D25444-D4B584",
                description:
                  "Cloud billing quota exceeded: https://support.google.com/code/contact/billing_quota_increase",
              },
            ],
          },
        ],
      },
    };

    // Catching by tag narrows to the per-service inline `BadRequest`
    // class, which declares `status` and `details` as part of its
    // Schema — so the assertions below access them without any casts.
    // That's the whole point: structured info reaches the user with
    // full type-safety.
    const program = Effect.gen(function* () {
      const getProjects = yield* crm.getProjects;
      return yield* getProjects({ name: "projects/test" });
    }).pipe(
      Effect.catchTag("BadRequest", (e) =>
        Effect.succeed({
          tag: e._tag,
          message: e.message,
          status: e.status,
          details: e.details,
        }),
      ),
    );

    const result = await Effect.runPromise(
      program.pipe(
        Effect.provide(respondWith(400, errorBody)),
        Effect.provide(fakeCredentials),
      ),
    );

    expect(result.tag).toBe("BadRequest");
    expect(result.message).toBe("Precondition check failed.");
    expect(result.status).toBe("FAILED_PRECONDITION");
    expect(result.details).toBeDefined();
    expect(result.details).toHaveLength(1);
    expect((result.details![0] as { "@type": string })["@type"]).toBe(
      "type.googleapis.com/google.rpc.QuotaFailure",
    );
  });

  it("NotFound: details optional — undefined when omitted by the server", async () => {
    // GCP returns NotFound without a structured `details[]` for many
    // operations. The schema field stays optional so this still narrows
    // cleanly.
    const errorBody = {
      error: {
        code: 404,
        message: "Project does not exist or caller lacks access.",
        status: "NOT_FOUND",
      },
    };

    const program = Effect.gen(function* () {
      const getProjects = yield* crm.getProjects;
      return yield* getProjects({ name: "projects/missing" });
    }).pipe(
      Effect.catchTag("NotFound", (e) =>
        Effect.succeed({
          tag: e._tag,
          status: e.status,
          details: e.details,
        }),
      ),
    );

    const result = await Effect.runPromise(
      program.pipe(
        Effect.provide(respondWith(404, errorBody)),
        Effect.provide(fakeCredentials),
      ),
    );

    expect(result.tag).toBe("NotFound");
    expect(result.status).toBe("NOT_FOUND");
    expect(result.details).toBeUndefined();
  });

  it("Forbidden: handles missing `error` envelope (legacy bare-string body) without throwing", async () => {
    // GCP normally returns the structured envelope, but some quota /
    // edge endpoints have been observed returning bare strings. The
    // parse should fall through with undefined fields rather than
    // crashing the matcher.
    const errorBody = "permission denied";

    const program = Effect.gen(function* () {
      const getProjects = yield* crm.getProjects;
      return yield* getProjects({ name: "projects/x" });
    }).pipe(
      Effect.catchTag("Forbidden", (e) =>
        Effect.succeed({
          tag: e._tag,
          status: e.status,
          details: e.details,
        }),
      ),
    );

    const result = await Effect.runPromise(
      program.pipe(
        Effect.provide(respondWith(403, errorBody)),
        Effect.provide(fakeCredentials),
      ),
    );

    expect(result.tag).toBe("Forbidden");
    // No envelope → no structured fields, but the error class is still
    // chosen by HTTP status and the message falls back to the status code.
    expect(result.status).toBeUndefined();
    expect(result.details).toBeUndefined();
  });
});
