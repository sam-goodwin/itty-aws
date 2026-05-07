import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteEntitlementInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    application_id: Schema.String.pipe(T.PathParam()),
    entitlement_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/applications/{application_id}/entitlements/{entitlement_id}",
  }),
);
export type DeleteEntitlementInput = typeof DeleteEntitlementInput.Type;

// Output Schema
export const DeleteEntitlementOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteEntitlementOutput = typeof DeleteEntitlementOutput.Type;

// The operation
export const deleteEntitlement = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteEntitlementInput,
  outputSchema: DeleteEntitlementOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
