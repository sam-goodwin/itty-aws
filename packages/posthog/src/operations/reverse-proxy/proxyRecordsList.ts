import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProxyRecordsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/organizations/{organization_id}/proxy_records/",
  }),
);
export type ProxyRecordsListInput = typeof ProxyRecordsListInput.Type;

// Output Schema
export const ProxyRecordsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
    max_proxy_records: Schema.optional(Schema.Number),
  }),
);
export type ProxyRecordsListOutput = typeof ProxyRecordsListOutput.Type;

// The operation
/**
 * List all reverse proxies configured for the organization. Returns proxy records along with the maximum number allowed by the current plan.
 */
export const proxyRecordsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProxyRecordsListInput,
  outputSchema: ProxyRecordsListOutput,
  errors: [Forbidden, NotFound] as const,
}));
