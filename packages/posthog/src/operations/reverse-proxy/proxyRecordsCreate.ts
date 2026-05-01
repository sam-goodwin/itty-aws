import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProxyRecordsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    target_cname: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "waiting",
        "issuing",
        "valid",
        "warning",
        "erroring",
        "deleting",
        "timed_out",
      ]),
    ),
    message: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/proxy_records/",
    }),
  );
export type ProxyRecordsCreateInput = typeof ProxyRecordsCreateInput.Type;

// Output Schema
export const ProxyRecordsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    target_cname: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "waiting",
        "issuing",
        "valid",
        "warning",
        "erroring",
        "deleting",
        "timed_out",
      ]),
    ),
    message: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.Number),
  });
export type ProxyRecordsCreateOutput = typeof ProxyRecordsCreateOutput.Type;

// The operation
/**
 * Create a new managed reverse proxy. Provide the domain you want to proxy through. The response includes the CNAME target you need to add as a DNS record. Once the CNAME is configured, the proxy will be automatically verified and provisioned.
 */
export const proxyRecordsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProxyRecordsCreateInput,
  outputSchema: ProxyRecordsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
