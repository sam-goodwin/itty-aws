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
