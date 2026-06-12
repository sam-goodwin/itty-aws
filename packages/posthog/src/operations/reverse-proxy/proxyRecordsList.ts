import * as Schema from "effect/Schema";
import { ProxyRecordListResponseSchema } from "./_schemas.ts";
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
  Schema.suspend(() => ProxyRecordListResponseSchema),
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
