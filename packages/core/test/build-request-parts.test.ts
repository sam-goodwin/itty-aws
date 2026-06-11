import * as Schema from "effect/Schema";
import { describe, expect, it } from "vitest";
import * as T from "../src/traits.ts";

// RFC 6570 expansion semantics in `buildRequestParts`: `{+name}` keeps
// `/` literal, `{name}` percent-encodes it.

describe("buildRequestParts — RFC 6570 path expansion", () => {
  it("reserved expansion {+name} preserves `/` literally", () => {
    const Input = Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
    }).pipe(T.Http({ method: "GET", path: "v3/{+name}" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      { name: "projects/my-project" },
      Input,
    );

    expect(parts.path).toBe("v3/projects/my-project");
  });

  it("simple expansion {name} percent-encodes `/`", () => {
    const Input = Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
    }).pipe(T.Http({ method: "GET", path: "v3/{name}" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      { name: "projects/my-project" },
      Input,
    );

    expect(parts.path).toBe("v3/projects%2Fmy-project");
  });

  it("reserved expansion still encodes characters outside RFC 3986 reserved+unreserved", () => {
    const Input = Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
    }).pipe(T.Http({ method: "GET", path: "v3/{+name}" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      { name: "projects/with space" },
      Input,
    );

    expect(parts.path).toBe("v3/projects/with%20space");
  });

  it("reserved expansion preserves a value that is purely RFC 3986 reserved", () => {
    const Input = Schema.Struct({
      resource: Schema.String.pipe(T.HttpPath("resource")),
    }).pipe(T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }));

    const parts = T.buildRequestParts(
      Input.ast,
      T.getHttpTrait(Input.ast)!,
      { resource: "projects/p/locations/global/keyRings/kr" },
      Input,
    );

    expect(parts.path).toBe(
      "v1/projects/p/locations/global/keyRings/kr:getIamPolicy",
    );
  });
});

// OpenAPI `deepObject`-style query params: Cloudflare list endpoints model
// filters as nested structs (e.g. DNS listRecords `name: { exact }`) that
// must serialize as `name.exact=value` — NOT `name=[object Object]`, which
// the server treats as a filter that matches nothing.

describe("buildRequestParts — deepObject query params", () => {
  const Input = Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    name: Schema.optional(
      Schema.Struct({
        contains: Schema.optional(Schema.String),
        exact: Schema.optional(Schema.String),
      }),
    ).pipe(T.HttpQuery("name")),
    tag: Schema.optional(
      Schema.Struct({
        not: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(T.HttpQuery("tag")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/dns_records" }));

  const build = (input: Record<string, unknown>) =>
    T.buildRequestParts(Input.ast, T.getHttpTrait(Input.ast)!, input, Input);

  it("flattens a struct query param to dot-notation keys", () => {
    const parts = build({
      zoneId: "z1",
      name: { exact: "api.example.com" },
      type: "A",
    });

    expect(parts.query).toEqual({
      "name.exact": "api.example.com",
      type: "A",
    });
  });

  it("flattens multiple members of the same struct", () => {
    const parts = build({
      zoneId: "z1",
      name: { exact: "api.example.com", contains: "example" },
    });

    expect(parts.query).toEqual({
      "name.exact": "api.example.com",
      "name.contains": "example",
    });
  });

  it("serializes array members as repeated dot-notation params", () => {
    const parts = build({ zoneId: "z1", tag: { not: ["a", "b"] } });

    expect(parts.query).toEqual({ "tag.not": ["a", "b"] });
  });

  it("skips undefined and null struct members", () => {
    const parts = build({
      zoneId: "z1",
      name: { exact: "api.example.com", contains: undefined },
    });

    expect(parts.query).toEqual({ "name.exact": "api.example.com" });
  });

  it("keeps scalar and array query params unchanged", () => {
    const ScalarInput = Schema.Struct({
      type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
      id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
    }).pipe(T.Http({ method: "GET", path: "/things" }));

    const parts = T.buildRequestParts(
      ScalarInput.ast,
      T.getHttpTrait(ScalarInput.ast)!,
      { type: "A", id: ["1", "2"] },
      ScalarInput,
    );

    expect(parts.query).toEqual({ type: "A", id: ["1", "2"] });
  });
});
