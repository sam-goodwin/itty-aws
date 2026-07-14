import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProxyRecordsRetrieveInput {
  id: string;
  organization_id: string;
}
export const ProxyRecordsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/proxy_records/{id}/",
    }),
  ) as unknown as Schema.Codec<ProxyRecordsRetrieveInput>;

// Output Schema
export interface ProxyRecordsRetrieveOutput {
  id?: string;
  domain?: string;
  target_cname?: string;
  status?:
    | "waiting"
    | "issuing"
    | "valid"
    | "warning"
    | "erroring"
    | "deleting"
    | "timed_out";
  message?: string | null;
  created_at?: string;
  updated_at?: string;
  created_by?: number;
}
export const ProxyRecordsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProxyRecordsRetrieveOutput>;

// The operation
/**
 * Get details of a specific reverse proxy by ID. Returns the full configuration including domain, CNAME target, and current provisioning status.
 *
 * @param id - A UUID string identifying this proxy record.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const proxyRecordsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProxyRecordsRetrieveInput,
  outputSchema: ProxyRecordsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
