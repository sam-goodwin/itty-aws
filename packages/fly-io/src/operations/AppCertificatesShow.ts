import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppCertificatesShowInput {
  app_name: string;
  hostname: string;
}
export const AppCertificatesShowInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    hostname: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/apps/{app_name}/certificates/{hostname}" }),
  ) as unknown as Schema.Codec<AppCertificatesShowInput>;

// Output Schema
export interface AppCertificatesShowOutput {
  acme_requested?: boolean;
  certificates?: {
    created_at?: string;
    expires_at?: string;
    issued?: {
      certificate_authority?: string;
      expires_at?: string;
      type?: "rsa" | "ecdsa";
    }[];
    issuer?: string;
    source?: "custom" | "fly";
    status?: "active" | "pending_ownership" | "pending_validation";
  }[];
  configured?: boolean;
  dns_provider?: string;
  dns_requirements?: {
    a?: string[];
    aaaa?: string[];
    acme_challenge?: { name?: string; target?: string };
    cname?: string;
    ownership?: { app_value?: string; name?: string; org_value?: string };
  };
  hostname?: string;
  rate_limited_until?: string;
  status?: string;
  validation?: {
    alpn_configured?: boolean;
    dns_configured?: boolean;
    http_configured?: boolean;
    ownership_txt_configured?: boolean;
  };
  validation_errors?: {
    code?: string;
    message?: string;
    remediation?: string;
    timestamp?: string;
  }[];
}
export const AppCertificatesShowOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acme_requested: Schema.optional(Schema.Boolean),
    certificates: Schema.optional(
      Schema.Array(
        Schema.Struct({
          created_at: Schema.optional(Schema.String),
          expires_at: Schema.optional(Schema.String),
          issued: Schema.optional(
            Schema.Array(
              Schema.Struct({
                certificate_authority: Schema.optional(Schema.String),
                expires_at: Schema.optional(Schema.String),
                type: Schema.optional(Schema.Literals(["rsa", "ecdsa"])),
              }),
            ),
          ),
          issuer: Schema.optional(Schema.String),
          source: Schema.optional(Schema.Literals(["custom", "fly"])),
          status: Schema.optional(
            Schema.Literals([
              "active",
              "pending_ownership",
              "pending_validation",
            ]),
          ),
        }),
      ),
    ),
    configured: Schema.optional(Schema.Boolean),
    dns_provider: Schema.optional(Schema.String),
    dns_requirements: Schema.optional(
      Schema.Struct({
        a: Schema.optional(Schema.Array(Schema.String)),
        aaaa: Schema.optional(Schema.Array(Schema.String)),
        acme_challenge: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
          }),
        ),
        cname: Schema.optional(Schema.String),
        ownership: Schema.optional(
          Schema.Struct({
            app_value: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            org_value: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    hostname: Schema.optional(Schema.String),
    rate_limited_until: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    validation: Schema.optional(
      Schema.Struct({
        alpn_configured: Schema.optional(Schema.Boolean),
        dns_configured: Schema.optional(Schema.Boolean),
        http_configured: Schema.optional(Schema.Boolean),
        ownership_txt_configured: Schema.optional(Schema.Boolean),
      }),
    ),
    validation_errors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          remediation: Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AppCertificatesShowOutput>;

// The operation
/**
 * Get certificate details
 *
 * @param app_name - Fly App Name
 * @param hostname - Certificate Hostname
 */
export const AppCertificatesShow = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppCertificatesShowInput,
  outputSchema: AppCertificatesShowOutput,
  errors: [Forbidden, NotFound] as const,
}));
