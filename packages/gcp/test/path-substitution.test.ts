import { describe, expect, it } from "vitest";
import {
  buildRequestParts,
  getHttpTrait,
} from "@distilled.cloud/core/traits";
import {
  GetProjectsRequest,
  DeleteProjectsRequest,
} from "../src/services/cloudresourcemanager-v3.ts";

/**
 * Regression tests for the `flatPath` vs `path` mismatch in the GCP
 * generator. Discovery Documents publish two URL forms per method —
 * `path` (with RFC 6570 reserved-expansion variables, e.g. `v3/{+name}`)
 * and `flatPath` (used purely for documentation, e.g.
 * `v3/projects/{projectsId}`). The generator must emit URL templates
 * whose variable names match the `T.HttpPath(<name>)` annotations on the
 * request schema, otherwise `buildRequestParts` cannot substitute the
 * placeholder and the request URL is left malformed.
 *
 * These tests assert path resolution at the trait level — no live HTTP.
 */
describe("GCP HTTP path template substitution", () => {
  it("substitutes {name} for cloudresourcemanager.getProjects", () => {
    const ast = (GetProjectsRequest as unknown as { ast: any }).ast;
    const trait = getHttpTrait(ast);
    expect(trait).toBeDefined();

    const parts = buildRequestParts(ast, trait!, {
      name: "projects/microagi-research",
    });

    // The resolved path must NOT still contain a `{...}` placeholder.
    expect(parts.path).not.toMatch(/\{[^}]+\}/);

    // GCP REST accepts `%2F` as equivalent to `/` in resource-name
    // path segments — both forms are acceptable as long as the
    // template variable was substituted.
    expect([
      "v3/projects/microagi-research",
      "v3/projects%2Fmicroagi-research",
    ]).toContain(parts.path);
  });

  it("substitutes {name} for cloudresourcemanager.deleteProjects", () => {
    const ast = (DeleteProjectsRequest as unknown as { ast: any }).ast;
    const trait = getHttpTrait(ast);
    expect(trait).toBeDefined();

    const parts = buildRequestParts(ast, trait!, {
      name: "projects/microagi-research",
    });

    expect(parts.path).not.toMatch(/\{[^}]+\}/);
    expect([
      "v3/projects/microagi-research",
      "v3/projects%2Fmicroagi-research",
    ]).toContain(parts.path);
  });
});
