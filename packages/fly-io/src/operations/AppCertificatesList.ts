import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppCertificatesListInput {
  app_name: string;
  filter?: string;
  cursor?: string;
  limit?: number;
}
export const AppCertificatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/apps/{app_name}/certificates" }),
  ) as unknown as Schema.Codec<AppCertificatesListInput>;

// Output Schema
export interface AppCertificatesListOutput {
  certificates?: {
    acme_alpn_configured?: boolean;
    acme_dns_configured?: boolean;
    acme_http_configured?: boolean;
    acme_requested?: boolean;
    configured?: boolean;
    created_at?: string;
    dns_provider?: string;
    has_custom_certificate?: boolean;
    has_fly_certificate?: boolean;
    hostname?: string;
    ownership_txt_configured?: boolean;
    status?: string;
    updated_at?: string;
  }[];
  next_cursor?: string;
  total_count?: number;
}
export const AppCertificatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificates: Schema.optional(
      Schema.Array(
        Schema.Struct({
          acme_alpn_configured: Schema.optional(Schema.Boolean),
          acme_dns_configured: Schema.optional(Schema.Boolean),
          acme_http_configured: Schema.optional(Schema.Boolean),
          acme_requested: Schema.optional(Schema.Boolean),
          configured: Schema.optional(Schema.Boolean),
          created_at: Schema.optional(Schema.String),
          dns_provider: Schema.optional(Schema.String),
          has_custom_certificate: Schema.optional(Schema.Boolean),
          has_fly_certificate: Schema.optional(Schema.Boolean),
          hostname: Schema.optional(Schema.String),
          ownership_txt_configured: Schema.optional(Schema.Boolean),
          status: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    next_cursor: Schema.optional(Schema.String),
    total_count: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<AppCertificatesListOutput>;

// The operation
/**
 * List certificates for app
 *
 * @param app_name - Fly App Name
 * @param filter - Hostname filter (substring match)
 * @param cursor - Pagination cursor from previous response
 * @param limit - Number of results per page (default 25, max 500)
 */
export const AppCertificatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppCertificatesListInput,
  outputSchema: AppCertificatesListOutput,
  errors: [Forbidden, NotFound] as const,
}));
