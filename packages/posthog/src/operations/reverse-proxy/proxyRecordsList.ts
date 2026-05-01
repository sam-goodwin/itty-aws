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
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        domain: Schema.String,
        target_cname: Schema.String,
        status: Schema.Literals([
          "waiting",
          "issuing",
          "valid",
          "warning",
          "erroring",
          "deleting",
          "timed_out",
        ]),
        message: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
        created_by: Schema.Number,
      }),
    ),
    max_proxy_records: Schema.Number,
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
