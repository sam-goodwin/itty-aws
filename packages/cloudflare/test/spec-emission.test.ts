import { describe, expect, it } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const testDir = path.dirname(fileURLToPath(import.meta.url));

const cloudflareSpec = (name: string) =>
  path.join(testDir, "..", "specs", "cloudflare", `${name}.openapi.yml`);

describe("cloudflare spec emission", () => {
  it("emits legacy patched errors into canonical service specs", () => {
    const spec = parseYaml(
      fs.readFileSync(cloudflareSpec("accounts"), "utf8"),
    ) as {
      paths: Record<
        string,
        Record<string, { ["x-distilled-errors"]?: Record<string, unknown> }>
      >;
    };

    const updateAccount =
      spec.paths["/accounts/{account_id}"]?.put?.["x-distilled-errors"];
    expect(updateAccount).toBeDefined();
    expect(updateAccount).toHaveProperty("InvalidAccountName");
    expect(updateAccount).toHaveProperty("UpdateAccountTypeNotSupported");
    expect(updateAccount).toHaveProperty("MethodNotAllowed");
  });

  it("emits canonical specs for patch-defined services", () => {
    const spec = parseYaml(
      fs.readFileSync(cloudflareSpec("containers"), "utf8"),
    ) as {
      ["x-distilled-service"]?: string;
      paths: Record<string, Record<string, { operationId?: string }>>;
    };

    expect(spec["x-distilled-service"]).toBe("containers");
    expect(
      spec.paths["/accounts/{account_id}/containers/applications"]?.post
        ?.operationId,
    ).toBe("createContainerApplication");
  });
});
