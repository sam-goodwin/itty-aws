import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { describe, expect, it } from "vitest";
import { Oauth2clientsoauth2createClientOutput } from "../src/operations/oauth2clientsoauth2createClient.ts";
import { OrganizationAccessTokenscreateOutput } from "../src/operations/organizationAccessTokenscreate.ts";

describe("generated Polar schema quality", () => {
  it("redacts organization access token create responses", () => {
    const decoded = Schema.decodeUnknownSync(
      OrganizationAccessTokenscreateOutput,
    )({
      organization_access_token: {
        created_at: "2026-01-01T00:00:00Z",
        modified_at: null,
        id: "00000000-0000-4000-8000-000000000000",
        scopes: ["organizations:read"],
        expires_at: null,
        comment: "test token",
        last_used_at: null,
        organization_id: "00000000-0000-4000-8000-000000000000",
      },
      token: "test-token-value",
    });

    expect(Redacted.isRedacted(decoded.token)).toBe(true);
    expect(decoded.organization_access_token.modified_at).toBeNull();
    expect(decoded.organization_access_token.expires_at).toBeNull();
    expect(decoded.organization_access_token.last_used_at).toBeNull();
  });

  it("types and redacts OAuth client registration responses", () => {
    const decoded = Schema.decodeUnknownSync(
      Oauth2clientsoauth2createClientOutput,
    )({
      redirect_uris: ["https://example.com/callback"],
      token_endpoint_auth_method: "client_secret_post",
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      client_name: "test client",
      scope: "openid profile email",
      client_id: "polar_ci_test",
      client_secret: "secret",
      client_id_issued_at: 1777997728,
      client_secret_expires_at: 0,
      registration_client_uri:
        "https://sandbox-api.polar.sh/v1/oauth2/register/polar_ci_test",
      registration_access_token: "registration-secret",
    });

    expect(decoded.response_types).toEqual(["code"]);
    expect(Redacted.isRedacted(decoded.client_secret)).toBe(true);
    expect(Redacted.isRedacted(decoded.registration_access_token)).toBe(true);
  });
});
