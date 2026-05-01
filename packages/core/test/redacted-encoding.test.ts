import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { describe, expect, it } from "vitest";
import * as T from "../src/traits.ts";

// Verifies the fix from #213: when a caller passes a `Redacted<string>` into a
// field declared as plain `Schema.String`, the request encoder unwraps the
// Redacted before `Schema.encodeSync` runs so the wire payload contains the
// real value rather than the literal string `"<redacted>"`.

describe("buildRequestParts — Redacted unwrap", () => {
  it("body field: Redacted<string> is unwrapped into the body", () => {
    const Input = Schema.Struct({
      token: Schema.String,
    }).pipe(T.Http({ method: "POST", path: "/v1/reset" }));

    const httpTrait = T.getHttpTrait(Input.ast)!;
    const parts = T.buildRequestParts(
      Input.ast,
      httpTrait,
      { token: Redacted.make("super-secret-token") },
      Input,
    );

    expect(parts.body).toEqual({ token: "super-secret-token" });
    expect(JSON.stringify(parts.body)).not.toContain("redacted");
  });

  it("path parameter: Redacted<string> is unwrapped into the path", () => {
    const Input = Schema.Struct({
      slug: Schema.String.pipe(T.PathParam()),
    }).pipe(T.Http({ method: "GET", path: "/v1/orgs/{slug}" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      { slug: Redacted.make("acme-private") },
      Input,
    );

    expect(parts.path).toBe("/v1/orgs/acme-private");
    expect(parts.path).not.toContain("redacted");
  });

  it("query parameter: Redacted<string> is unwrapped into the query", () => {
    const Input = Schema.Struct({
      filter: Schema.String.pipe(T.QueryParam("filter")),
    }).pipe(T.Http({ method: "GET", path: "/v1/items" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      { filter: Redacted.make("private-tag") },
      Input,
    );

    expect(parts.query).toEqual({ filter: "private-tag" });
  });

  it("header parameter: Redacted<string> is unwrapped into the header", () => {
    const Input = Schema.Struct({
      apiKey: Schema.String.pipe(T.HeaderParam("X-Api-Key")),
    }).pipe(T.Http({ method: "GET", path: "/v1/me" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      { apiKey: Redacted.make("sk_live_abc123") },
      Input,
    );

    expect(parts.headers).toEqual({ "X-Api-Key": "sk_live_abc123" });
  });

  it("nested object: Redacted values inside nested structs are unwrapped", () => {
    const Input = Schema.Struct({
      credentials: Schema.Struct({
        username: Schema.String,
        password: Schema.String,
      }),
    }).pipe(T.Http({ method: "POST", path: "/v1/login" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      {
        credentials: {
          username: "alice",
          password: Redacted.make("hunter2"),
        },
      },
      Input,
    );

    expect(parts.body).toEqual({
      credentials: { username: "alice", password: "hunter2" },
    });
    expect(JSON.stringify(parts.body)).not.toContain("redacted");
  });

  it("array of Redacted values: each element is unwrapped", () => {
    const Input = Schema.Struct({
      tokens: Schema.Array(Schema.String),
    }).pipe(T.Http({ method: "POST", path: "/v1/batch" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      {
        tokens: [Redacted.make("a"), Redacted.make("b"), "c"],
      },
      Input,
    );

    expect(parts.body).toEqual({ tokens: ["a", "b", "c"] });
  });

  it("plain string still works (no regression)", () => {
    const Input = Schema.Struct({
      token: Schema.String,
    }).pipe(T.Http({ method: "POST", path: "/v1/reset" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      { token: "plain-string-value" },
      Input,
    );

    expect(parts.body).toEqual({ token: "plain-string-value" });
  });
});
