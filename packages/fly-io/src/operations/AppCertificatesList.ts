import * as Schema from "effect/Schema";
import { CertificateSummarySchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AppCertificatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/apps/{app_name}/certificates" }));
export type AppCertificatesListInput = typeof AppCertificatesListInput.Type;

// Output Schema
export const AppCertificatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificates: Schema.optional(
      Schema.Array(Schema.suspend(() => CertificateSummarySchema)),
    ),
    next_cursor: Schema.optional(Schema.String),
    total_count: Schema.optional(Schema.Number),
  });
export type AppCertificatesListOutput = typeof AppCertificatesListOutput.Type;

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
