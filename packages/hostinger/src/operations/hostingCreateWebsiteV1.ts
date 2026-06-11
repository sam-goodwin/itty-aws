import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const HostingCreateWebsiteV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String,
    order_id: Schema.Number,
    datacenter_code: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/api/hosting/v1/websites" }));
export type HostingCreateWebsiteV1Input =
  typeof HostingCreateWebsiteV1Input.Type;

// Output Schema
export const HostingCreateWebsiteV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingCreateWebsiteV1Output =
  typeof HostingCreateWebsiteV1Output.Type;

// The operation
/**
 * Create website
 *
 * Create a new website for the authenticated client.
 * Provide the domain name and associated order ID to create a new website.
 * The datacenter_code parameter is required when creating the first website
 * on a new hosting plan - this will set up and configure new hosting account
 * in the selected datacenter.
 * Subsequent websites will be hosted on the same datacenter automatically.
 * Website creation takes up to a few minutes to complete. Check the
 * websites list endpoint to see when your new website becomes available.
 */
export const hostingCreateWebsiteV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostingCreateWebsiteV1Input,
    outputSchema: HostingCreateWebsiteV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
