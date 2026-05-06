import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRequestParts, getHttpTrait } from "@distilled.cloud/core/traits";
import * as Schema from "effect/Schema";
import { describe, expect, it } from "vitest";
import { parse as parseYaml } from "yaml";
import {
  GetTunnelCloudflaredConfigurationResponse,
  PutTunnelCloudflaredConfigurationRequest,
  PutTunnelCloudflaredConfigurationResponse,
} from "~/services/zero-trust";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const zeroTrustSpecPath = path.join(
  testDir,
  "..",
  "specs",
  "cloudflare",
  "zero-trust.openapi.yml",
);

describe("ZeroTrust > Tunnel > configuration ingress hostname is optional", () => {
  it("encodes a put request with a catch-all ingress rule (no hostname)", () => {
    const httpTrait = getHttpTrait(
      PutTunnelCloudflaredConfigurationRequest.ast,
    );
    expect(httpTrait).toBeDefined();

    const parts = buildRequestParts(
      PutTunnelCloudflaredConfigurationRequest.ast,
      httpTrait!,
      {
        accountId: "account-123",
        tunnelId: "tunnel-abc",
        config: {
          ingress: [
            { hostname: "test.example.com", service: "http://localhost:8080" },
            { service: "http_status:404" },
          ],
        },
      },
      PutTunnelCloudflaredConfigurationRequest,
    );

    expect(parts.body).toEqual({
      config: {
        ingress: [
          { hostname: "test.example.com", service: "http://localhost:8080" },
          { service: "http_status:404" },
        ],
      },
    });
  });

  it("decodes a get response containing a catch-all ingress rule (no hostname)", () => {
    const decoded = Schema.decodeUnknownSync(
      GetTunnelCloudflaredConfigurationResponse,
    )({
      accountId: "account-123",
      config: {
        ingress: [
          { hostname: "test.example.com", service: "http://localhost:8080" },
          { service: "http_status:404" },
        ],
      },
      source: "cloudflare",
      tunnelId: "tunnel-abc",
      version: 1,
    });

    expect(decoded.config?.ingress).toEqual([
      { hostname: "test.example.com", service: "http://localhost:8080" },
      { service: "http_status:404" },
    ]);
  });

  it("decodes a put response containing a catch-all ingress rule (no hostname)", () => {
    const decoded = Schema.decodeUnknownSync(
      PutTunnelCloudflaredConfigurationResponse,
    )({
      accountId: "account-123",
      config: {
        ingress: [{ service: "http_status:404" }],
      },
      source: "cloudflare",
      tunnelId: "tunnel-abc",
      version: 1,
    });

    expect(decoded.config?.ingress).toEqual([{ service: "http_status:404" }]);
  });

  it("emits ingress without hostname in the required array of the canonical spec", () => {
    const spec = parseYaml(fs.readFileSync(zeroTrustSpecPath, "utf8")) as {
      paths: Record<
        string,
        Record<
          string,
          {
            operationId?: string;
            requestBody?: {
              content: {
                "application/json": {
                  schema: {
                    properties?: {
                      config?: {
                        properties?: {
                          ingress?: { items?: { required?: string[] } };
                        };
                      };
                    };
                  };
                };
              };
            };
            responses?: Record<
              string,
              {
                content?: {
                  "application/json": {
                    schema: {
                      properties?: {
                        config?: {
                          properties?: {
                            ingress?: { items?: { required?: string[] } };
                          };
                        };
                      };
                    };
                  };
                };
              }
            >;
          }
        >
      >;
    };

    const configPath =
      spec.paths["/accounts/{account_id}/cfd_tunnel/{tunnelId}/configurations"];

    const putRequestIngressRequired =
      configPath?.put?.requestBody?.content["application/json"].schema
        .properties?.config?.properties?.ingress?.items?.required;
    expect(putRequestIngressRequired).toBeDefined();
    expect(putRequestIngressRequired).not.toContain("hostname");
    expect(putRequestIngressRequired).toContain("service");

    const putResponseIngressRequired =
      configPath?.put?.responses?.["200"].content?.["application/json"].schema
        .properties?.config?.properties?.ingress?.items?.required;
    expect(putResponseIngressRequired).toBeDefined();
    expect(putResponseIngressRequired).not.toContain("hostname");
    expect(putResponseIngressRequired).toContain("service");

    const getResponseIngressRequired =
      configPath?.get?.responses?.["200"].content?.["application/json"].schema
        .properties?.config?.properties?.ingress?.items?.required;
    expect(getResponseIngressRequired).toBeDefined();
    expect(getResponseIngressRequired).not.toContain("hostname");
    expect(getResponseIngressRequired).toContain("service");
  });
});
