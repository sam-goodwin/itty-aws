import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = join(import.meta.dirname ?? process.cwd(), "../../..");
const packageRoot = join(repoRoot, "packages/polar");

describe("Polar SDK full artifacts", () => {
  it("keeps package exports aligned with source and build entrypoints", async () => {
    const packageJson = JSON.parse(
      await readFile(join(packageRoot, "package.json"), "utf8"),
    );

    expect(packageJson.files).toEqual(expect.arrayContaining(["lib", "src"]));
    expect(packageJson.sideEffects).toBe(false);
    expect(packageJson.module).toBe("src/index.ts");

    for (const [exportPath, entrypoint] of Object.entries(
      packageJson.exports as Record<
        string,
        { types: string; bun: string; default: string }
      >,
    )) {
      expect(entrypoint.types, exportPath).toMatch(/^\.\/lib\/.+\.d\.ts$/);
      expect(entrypoint.bun, exportPath).toMatch(/^\.\/src\/.+\.ts$/);
      expect(entrypoint.default, exportPath).toMatch(/^\.\/lib\/.+\.js$/);

      await expect(
        access(join(packageRoot, entrypoint.bun)),
        exportPath,
      ).resolves.toBeUndefined();
    }
  });

  it("keeps the root module exporting the public Polar SDK surface", async () => {
    const index = await readFile(join(packageRoot, "src/index.ts"), "utf8");

    expect(index).toContain('export * from "./credentials.ts";');
    expect(index).toContain('export * as Category from "./category.ts";');
    expect(index).toContain('export * as T from "./traits.ts";');
    expect(index).toContain('export * as Retry from "./retry.ts";');
    expect(index).toContain('export { API } from "./client.ts";');
    expect(index).toContain('export * from "./errors.ts";');
    expect(index).toContain("SensitiveString");
    expect(index).toContain("SensitiveNullableString");
  });

  it("wires generation and cleanup scripts into package metadata", async () => {
    const packageJson = JSON.parse(
      await readFile(join(packageRoot, "package.json"), "utf8"),
    );

    expect(packageJson.scripts.generate).toContain("scripts/generate.ts");
    expect(packageJson.scripts.generate).toContain("oxlint --fix src");
    expect(packageJson.scripts.nuke).toBe("bun scripts/nuke.ts");
    expect(packageJson.scripts["specs:fetch"]).toContain(
      "https://api.polar.sh/openapi.json",
    );
  });

  it("keeps the Polar OpenAPI generator configured with patches and operation errors", async () => {
    const generator = await readFile(
      join(packageRoot, "scripts/generate.ts"),
      "utf8",
    );

    expect(generator).toContain("generateFromOpenAPI");
    expect(generator).toContain("distilled-spec-polar/specs/openapi.json");
    expect(generator).toContain('patchDir: path.join(rootDir, "patches")');
    expect(generator).toContain("includeOperationErrors: true");
    expect(generator).toContain("skipDeprecated: true");
  });

  it("keeps the nuke script and shared nuke workflow registered for Polar", async () => {
    const nukeScript = await readFile(
      join(packageRoot, "scripts/nuke.ts"),
      "utf8",
    );
    const nukeWorkflow = await readFile(
      join(repoRoot, ".github/workflows/nuke.yml"),
      "utf8",
    );

    for (const resource of [
      "WebhookEndpoint",
      "CheckoutLink",
      "Discount",
      "CustomField",
      "Benefit",
      "File",
      "Product",
      "Meter",
      "Customer",
      "OrganizationAccessToken",
    ]) {
      expect(nukeScript).toContain(`type: "${resource}"`);
    }

    expect(nukeScript).toContain('"MetricDashboard"');
    expect(nukeScript).toContain('Flag.boolean("dry-run")');
    expect(nukeScript).toContain("nuke-config.json");
    expect(nukeScript).toContain("CredentialsFromEnv");

    expect(nukeWorkflow).toContain("polar:");
    expect(nukeWorkflow).toContain("nuke-polar:");
    expect(nukeWorkflow).toContain("working-directory: packages/polar");
    expect(nukeWorkflow).toContain("POLAR_ACCESS_TOKEN");
    expect(nukeWorkflow).toContain("POLAR_SERVER: sandbox");
  });

  it("keeps the Polar CI job wired to sandbox credentials", async () => {
    const testWorkflow = await readFile(
      join(repoRoot, ".github/workflows/test.yml"),
      "utf8",
    );

    expect(testWorkflow).toContain("ci-polar:");
    expect(testWorkflow).toContain("working-directory: packages/polar");
    expect(testWorkflow).toContain("POLAR_ACCESS_TOKEN");
    expect(testWorkflow).toContain("POLAR_ORGANIZATION_ID");
    expect(testWorkflow).toContain("POLAR_SERVER: sandbox");
  });

  it("keeps Polar registered in package preview and release workflows", async () => {
    const prPackageWorkflow = await readFile(
      join(repoRoot, ".github/workflows/pr-package.yml"),
      "utf8",
    );
    const releaseWorkflow = await readFile(
      join(repoRoot, ".github/workflows/release.yml"),
      "utf8",
    );

    expect(prPackageWorkflow).toContain('"polar"');
    expect(prPackageWorkflow).toContain("polar:");
    expect(releaseWorkflow).toContain("packages/polar/package.json");
    expect(releaseWorkflow).toContain("- polar");
  });

  it("documents Polar sandbox credentials and operation imports", async () => {
    const readme = await readFile(join(packageRoot, "README.md"), "utf8");

    expect(readme).toContain("@distilled.cloud/polar");
    expect(readme).toContain("@distilled.cloud/polar/Credentials");
    expect(readme).toContain("@distilled.cloud/polar/Operations");
    expect(readme).toContain("POLAR_ACCESS_TOKEN");
    expect(readme).toContain("POLAR_SERVER=sandbox");
    expect(readme).toContain("POLAR_ORGANIZATION_ID");
    expect(readme).toContain("https://sandbox-api.polar.sh");
  });
});
