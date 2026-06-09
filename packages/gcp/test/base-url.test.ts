import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import * as crm from "../src/services/cloudresourcemanager-v3.ts";

// Asserts the per-service `rootUrl` fallback resolves the full
// request URL, captured via a mock `HttpClient`.

const fakeCredentials = Layer.succeed(
  Credentials,
  Effect.succeed({
    accessToken: Redacted.make("ya29.fake-test-token"),
    project: "fake-test-project",
  }),
);

const captureUrl = (sink: {
  url?: string;
}): Layer.Layer<HttpClient.HttpClient> =>
  Layer.succeed(
    HttpClient.HttpClient,
    HttpClient.make((request) => {
      sink.url = request.url;
      return Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response("{}", {
            status: 200,
            headers: { "content-type": "application/json" },
          }),
        ),
      );
    }),
  );

describe("GCP base URL resolution", () => {
  it("prepends Service.rootUrl to the resolved path on getProjects", async () => {
    const sink: { url?: string } = {};

    const program = Effect.gen(function* () {
      const getProjects = yield* crm.getProjects;
      yield* getProjects({ name: "projects/my-project" });
    });

    await Effect.runPromise(
      program.pipe(
        Effect.provide(captureUrl(sink)),
        Effect.provide(fakeCredentials),
      ),
    );

    expect(sink.url).toBe(
      "https://cloudresourcemanager.googleapis.com/v3/projects/my-project",
    );
  });

  it("prepends Service.rootUrl on deleteProjects too", async () => {
    const sink: { url?: string } = {};

    const program = Effect.gen(function* () {
      const deleteProjects = yield* crm.deleteProjects;
      yield* deleteProjects({ name: "projects/my-project" });
    });

    await Effect.runPromise(
      program.pipe(
        Effect.provide(captureUrl(sink)),
        Effect.provide(fakeCredentials),
      ),
    );

    expect(sink.url).toBe(
      "https://cloudresourcemanager.googleapis.com/v3/projects/my-project",
    );
  });
});
