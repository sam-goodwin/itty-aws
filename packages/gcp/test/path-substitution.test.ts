import { buildRequestParts, getHttpTrait } from "@distilled.cloud/core/traits";
import { describe, expect, it } from "vitest";
import {
  DeleteProjectsRequest,
  GetProjectsRequest,
} from "../src/services/cloudresourcemanager-v3.ts";

// Pins `T.HttpPath` substitution on real generated GCP services. No
// live HTTP — assertions are at the trait level.
describe("GCP HTTP path template substitution", () => {
  it("getProjects: `/` inside `name` is preserved on the wire", () => {
    const ast = (GetProjectsRequest as unknown as { ast: any }).ast;
    const trait = getHttpTrait(ast);
    expect(trait).toBeDefined();

    const parts = buildRequestParts(ast, trait!, {
      name: "projects/my-project",
    });

    expect(parts.path).toBe("v3/projects/my-project");
  });

  it("deleteProjects: `/` inside `name` is preserved on the wire", () => {
    const ast = (DeleteProjectsRequest as unknown as { ast: any }).ast;
    const trait = getHttpTrait(ast);
    expect(trait).toBeDefined();

    const parts = buildRequestParts(ast, trait!, {
      name: "projects/my-project",
    });

    expect(parts.path).toBe("v3/projects/my-project");
  });

  it("non-reserved characters in `name` are still percent-encoded", () => {
    const ast = (GetProjectsRequest as unknown as { ast: any }).ast;
    const trait = getHttpTrait(ast);
    const parts = buildRequestParts(ast, trait!, {
      name: "projects/with space",
    });

    expect(parts.path).toBe("v3/projects/with%20space");
  });
});
