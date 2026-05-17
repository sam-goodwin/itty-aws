import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ConsumeEntitlementInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    entitlement_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/applications/{application_id}/entitlements/{entitlement_id}/consume",
    }),
  );
export type ConsumeEntitlementInput = typeof ConsumeEntitlementInput.Type;

// Output Schema
export const ConsumeEntitlementOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConsumeEntitlementOutput = typeof ConsumeEntitlementOutput.Type;

// The operation
export const consumeEntitlement = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConsumeEntitlementInput,
  outputSchema: ConsumeEntitlementOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
