import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingListAvailableDatacentersV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order_id: Schema.Number,
  }).pipe(T.Http({ method: "GET", path: "/api/hosting/v1/datacenters" }));
export type HostingListAvailableDatacentersV1Input =
  typeof HostingListAvailableDatacentersV1Input.Type;

// Output Schema
export const HostingListAvailableDatacentersV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      title: Schema.optional(Schema.String),
      code: Schema.optional(Schema.String),
      coordinates: Schema.optional(
        Schema.Struct({
          latitude: Schema.optional(Schema.Number),
          longitude: Schema.optional(Schema.Number),
        }),
      ),
    }),
  );
export type HostingListAvailableDatacentersV1Output =
  typeof HostingListAvailableDatacentersV1Output.Type;

// The operation
/**
 * List available datacenters
 *
 * Retrieve a list of datacenters available for setting up hosting plans
 * based on available datacenter capacity and hosting plan of your order.
 * The first item in the list is the best match for your specific order
 * requirements.
 *
 * @param order_id - Order ID
 */
export const hostingListAvailableDatacentersV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingListAvailableDatacentersV1Input,
    outputSchema: HostingListAvailableDatacentersV1Output,
  }));
