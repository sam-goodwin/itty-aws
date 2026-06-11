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

// The GET fallback in client.ts puts non-annotated leftover fields into the
// query string. It must flatten plain objects like the annotated path, but
// preserve its own legacy serialization for everything else (notably
// top-level arrays, which have always comma-joined via String()).

describe("buildExtraQueryParams — GET leftover-field fallback", () => {
  it("flattens plain objects to dot-notation", () => {
    expect(
      T.buildExtraQueryParams({ filter: { exact: "a", contains: "b" } }),
    ).toEqual({ "filter.exact": "a", "filter.contains": "b" });
  });

  it("recurses into nested plain objects", () => {
    expect(T.buildExtraQueryParams({ a: { b: { c: 1 } } })).toEqual({
      "a.b.c": "1",
    });
  });

  it("serializes array members of objects as repeated params", () => {
    expect(T.buildExtraQueryParams({ tag: { not: ["a", "b"] } })).toEqual({
      "tag.not": ["a", "b"],
    });
  });

  it("keeps legacy String() serialization for scalars and top-level arrays", () => {
    expect(
      T.buildExtraQueryParams({
        type: "A",
        count: 3,
        flag: false,
        ids: ["1", "2"],
        nul: null,
      }),
    ).toEqual({
      type: "A",
      count: "3",
      flag: "false",
      ids: "1,2",
      nul: "null",
    });
  });

  it("keeps legacy String() serialization for non-plain objects", () => {
    const date = new Date("2026-01-02T03:04:05.000Z");
    expect(T.buildExtraQueryParams({ before: date })).toEqual({
      before: String(date),
    });
  });

  it("skips undefined fields", () => {
    expect(T.buildExtraQueryParams({ a: undefined, b: "x" })).toEqual({
      b: "x",
    });
  });
});
