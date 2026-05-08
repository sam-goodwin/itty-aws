import { describe, expect, it } from "vitest";
import { buildRequestParts, getHttpTrait } from "@distilled.cloud/core/traits";
import { transformCloudflareRequestParts } from "~/client/api";
import { CreateAssetUploadRequest, PutScriptRequest } from "~/services/workers";
import {
  PutPhasForAccountRequest,
  PutPhasForZoneRequest,
} from "~/services/rulesets";

describe("client api", () => {
  it("maps createAssetUpload jwtToken to a bearer authorization header", () => {
    const httpTrait = getHttpTrait(CreateAssetUploadRequest.ast);
    expect(httpTrait).toBeDefined();

    const parts = buildRequestParts(
      CreateAssetUploadRequest.ast,
      httpTrait!,
      {
        accountId: "account-123",
        base64: true,
        jwtToken: "upload-session-jwt",
        body: { asset: "ZGF0YQ==" },
      },
      CreateAssetUploadRequest,
    );

    expect(parts.headers).toEqual({
      Authorization: "upload-session-jwt",
    });
    expect(parts.body).toEqual({ asset: "ZGF0YQ==" });

    const transformed = transformCloudflareRequestParts({
      pathTemplate: httpTrait!.path,
      parts,
    });

    expect(transformed.headers).toEqual({
      Authorization: "Bearer upload-session-jwt",
    });
    expect(transformed.body).toEqual({ asset: "ZGF0YQ==" });
  });

  it("does not double-prefix an existing bearer header", () => {
    const transformed = transformCloudflareRequestParts({
      pathTemplate: "/accounts/{account_id}/workers/assets/upload",
      parts: {
        path: "/accounts/account-123/workers/assets/upload",
        query: {},
        headers: { Authorization: "Bearer upload-session-jwt" },
        body: undefined,
        isMultipart: true,
      },
    });

    expect(transformed.headers).toEqual({
      Authorization: "Bearer upload-session-jwt",
    });
  });

  it("encodes Worker script uploads with ratelimit bindings", () => {
    const httpTrait = getHttpTrait(PutScriptRequest.ast);
    expect(httpTrait).toBeDefined();

    const parts = buildRequestParts(
      PutScriptRequest.ast,
      httpTrait!,
      {
        accountId: "account-123",
        scriptName: "rate-limited-worker",
        metadata: {
          mainModule: "index.mjs",
          compatibilityDate: "2026-03-17",
          bindings: [
            {
              type: "ratelimit",
              name: "PUBLIC_SIGNUP_THROTTLE",
              namespaceId: "10005",
              simple: {
                limit: 1,
                period: 60,
              },
            },
          ],
        },
        files: [
          new File(["export default {}"], "index.mjs", {
            type: "application/javascript+module",
          }),
        ],
      },
      PutScriptRequest,
    );

    expect(parts.body).toMatchObject({
      metadata: {
        main_module: "index.mjs",
        compatibility_date: "2026-03-17",
        bindings: [
          {
            type: "ratelimit",
            name: "PUBLIC_SIGNUP_THROTTLE",
            namespace_id: "10005",
            simple: {
              limit: 1,
              period: 60,
            },
          },
        ],
      },
    });
  });

  describe("accountOrZone-scoped operations (putPhas)", () => {
    it("putPhasForAccount binds account scope into the URL", () => {
      const httpTrait = getHttpTrait(PutPhasForAccountRequest.ast);
      expect(httpTrait?.path).toBe(
        "/accounts/{account_id}/rulesets/phases/{rulesetPhase}/entrypoint",
      );

      const parts = buildRequestParts(
        PutPhasForAccountRequest.ast,
        httpTrait!,
        {
          accountId: "account-123",
          rulesetPhase: "http_request_firewall_custom",
          description: "test",
        },
        PutPhasForAccountRequest,
      );

      expect(parts.path).toBe(
        "/accounts/account-123/rulesets/phases/http_request_firewall_custom/entrypoint",
      );
    });

    it("putPhasForZone binds zone scope into the URL", () => {
      const httpTrait = getHttpTrait(PutPhasForZoneRequest.ast);
      expect(httpTrait?.path).toBe(
        "/zones/{zone_id}/rulesets/phases/{rulesetPhase}/entrypoint",
      );

      const parts = buildRequestParts(
        PutPhasForZoneRequest.ast,
        httpTrait!,
        {
          zoneId: "zone-123",
          rulesetPhase: "http_request_firewall_custom",
          description: "test",
        },
        PutPhasForZoneRequest,
      );

      expect(parts.path).toBe(
        "/zones/zone-123/rulesets/phases/http_request_firewall_custom/entrypoint",
      );
    });

  });
});
