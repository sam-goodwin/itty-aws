import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetDataCenterListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/vps/v1/data-centers" }),
  );
export type VPSGetDataCenterListV1Input =
  typeof VPSGetDataCenterListV1Input.Type;

// Output Schema
export const VPSGetDataCenterListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      location: Schema.optional(Schema.NullOr(Schema.String)),
      city: Schema.optional(Schema.NullOr(Schema.String)),
      continent: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  );
export type VPSGetDataCenterListV1Output =
  typeof VPSGetDataCenterListV1Output.Type;

// The operation
/**
 * Get data center list
 *
 * Retrieve all available data centers.
 * Use this endpoint to view location options before deploying VPS instances.
 */
export const VPSGetDataCenterListV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetDataCenterListV1Input,
    outputSchema: VPSGetDataCenterListV1Output,
  }),
);
