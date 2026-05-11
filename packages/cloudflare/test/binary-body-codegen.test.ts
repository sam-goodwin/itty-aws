import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { describe, expect, it } from "vitest";

const testDir = path.dirname(fileURLToPath(import.meta.url));

const cloudflareSpec = (name: string) =>
  path.join(testDir, "..", "specs", "cloudflare", `${name}.openapi.yml`);

const generatedService = (name: string) =>
  path.join(testDir, "..", "src", "services", `${name}.ts`);

const readSpec = (name: string) =>
  parseYaml(fs.readFileSync(cloudflareSpec(name), "utf8")) as {
    paths: Record<
      string,
      Record<
        string,
        {
          requestBody?: {
            content?: Record<string, unknown>;
          };
          responses?: Record<
            string,
            { content?: Record<string, unknown> } | undefined
          >;
        }
      >
    >;
  };

const readGeneratedService = (name: string) =>
  fs.readFileSync(generatedService(name), "utf8");

// `application/octet-stream` request and response bodies must NOT be encoded
// as `multipart/form-data` — the upstream Cloudflare R2 PutObject API rejects
// multipart uploads with error code 10028 ("multipart/form-data enhancement
// not implemented"). The binary-body codegen path was added so distilled can
// faithfully model these operations.
describe("binary HTTP body codegen", () => {
  describe("emitted OpenAPI spec", () => {
    const spec = readSpec("r2");

    it("emits R2 putObject with application/octet-stream request body", () => {
      const putObject =
        spec.paths[
          "/accounts/{account_id}/r2/buckets/{bucketName}/objects/{objectName}"
        ]?.put;
      expect(putObject?.requestBody?.content).toBeDefined();
      const contentTypes = Object.keys(putObject!.requestBody!.content!);
      expect(contentTypes).toEqual(["application/octet-stream"]);
      expect(contentTypes).not.toContain("multipart/form-data");
    });

    it("emits R2 getObject with application/octet-stream response body", () => {
      const getObject =
        spec.paths[
          "/accounts/{account_id}/r2/buckets/{bucketName}/objects/{objectName}"
        ]?.get;
      const ok = getObject?.responses?.["200"];
      expect(ok?.content).toBeDefined();
      const contentTypes = Object.keys(ok!.content!);
      expect(contentTypes).toEqual(["application/octet-stream"]);
    });
  });

  describe("generated R2 service file", () => {
    const r2Source = readGeneratedService("r2");

    it("emits putObject body as BinaryBodySchema, not UploadableSchema", () => {
      // The PutObjectRequest must use the raw-body schema and the binary
      // contentType trait. UploadableSchema is for multipart form-data file
      // fields and would route the body through the wrong runtime path.
      const putObjectRequest = r2Source.match(
        /export const PutObjectRequest[\s\S]*?(?=export type PutObjectResponse)/,
      )?.[0];
      expect(putObjectRequest).toBeDefined();
      expect(putObjectRequest!).toMatch(
        /body:\s*BinaryBodySchema\.pipe\(T\.HttpBody\(\)\)/,
      );
      expect(putObjectRequest!).not.toMatch(/UploadableSchema/);
      expect(putObjectRequest!).not.toMatch(/HttpFormDataFile/);
      expect(putObjectRequest!).toMatch(
        /T\.Http\(\{[\s\S]*?contentType:\s*"binary"[\s\S]*?\}\)/,
      );
      expect(putObjectRequest!).not.toMatch(
        /T\.Http\(\{[\s\S]*?contentType:\s*"multipart"[\s\S]*?\}\)/,
      );
    });

    it("emits getObject response as { body: Stream<Uint8Array>, ...headers }", () => {
      const getObjectResponse = r2Source.match(
        /export interface GetObjectResponse[\s\S]*?(?=export type GetObjectError|export const getObject:)/,
      )?.[0];
      expect(getObjectResponse).toBeDefined();

      // S3-style response: streaming body field + typed metadata headers.
      expect(getObjectResponse!).toMatch(
        /body:\s*Stream\.Stream<Uint8Array,\s*HttpClientError\.HttpClientError>/,
      );
      expect(getObjectResponse!).toMatch(/etag\?:\s*string/);
      expect(getObjectResponse!).toMatch(/contentType\?:\s*string/);
      expect(getObjectResponse!).toMatch(/contentLength\?:\s*number/);
      expect(getObjectResponse!).toMatch(/lastModified\?:\s*string/);

      // Schema uses BinaryResponseBody marker for the body field and
      // HttpResponseHeader for each header.
      expect(getObjectResponse!).toMatch(
        /body:\s*BinaryStreamResponseSchema\.pipe\(T\.BinaryResponseBody\(\)\)/,
      );
      expect(getObjectResponse!).toMatch(
        /etag:\s*Schema\.optional\(Schema\.String\)\.pipe\(T\.HttpResponseHeader\("etag"\)\)/,
      );
      expect(getObjectResponse!).toMatch(
        /contentLength:\s*Schema\.optional\(Schema\.Number\)\.pipe\(T\.HttpResponseHeader\("content-length"\)\)/,
      );

      // Regression: must not be the multipart upload schema.
      expect(getObjectResponse!).not.toMatch(/UploadableSchema/);
      expect(getObjectResponse!).not.toMatch(/HttpFormDataFile/);
    });

    it("emits getObject request trait with responseContentType: \"binary\"", () => {
      const getObjectRequest = r2Source.match(
        /export const GetObjectRequest[\s\S]*?(?=export interface GetObjectResponse|export type GetObjectResponse)/,
      )?.[0];
      expect(getObjectRequest).toBeDefined();
      expect(getObjectRequest!).toMatch(
        /T\.Http\(\{[\s\S]*?responseContentType:\s*"binary"[\s\S]*?\}\)/,
      );
    });

    it("imports BinaryBodySchema and BinaryStreamResponseSchema from ../schemas", () => {
      expect(r2Source).toMatch(
        /import\s*\{\s*BinaryBodySchema\s*\}\s*from\s*"\.\.\/schemas\.ts"/,
      );
      expect(r2Source).toMatch(
        /import\s*\{\s*BinaryStreamResponseSchema\s*\}\s*from\s*"\.\.\/schemas\.ts"/,
      );
    });

    it("imports Stream and HttpClientError types when binary download responses exist", () => {
      expect(r2Source).toMatch(
        /import\s+type\s+\*\s+as\s+Stream\s+from\s+"effect\/Stream"/,
      );
      expect(r2Source).toMatch(
        /import\s+type\s+\*\s+as\s+HttpClientError\s+from\s+"effect\/unstable\/http\/HttpClientError"/,
      );
    });
  });
});
