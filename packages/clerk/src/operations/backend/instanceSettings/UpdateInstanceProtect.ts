import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const UpdateInstanceProtectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    specter_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(T.Http({ method: "PATCH", path: "/instance/protect" }));
export type UpdateInstanceProtectInput = typeof UpdateInstanceProtectInput.Type;

// Output Schema
export const UpdateInstanceProtectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["instance_protect"]),
    rules_enabled: Schema.Boolean,
    specter_enabled: Schema.Boolean,
  });
export type UpdateInstanceProtectOutput =
  typeof UpdateInstanceProtectOutput.Type;

// The operation
/**
 * Update instance protect settings
 */
export const UpdateInstanceProtect = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateInstanceProtectInput,
    outputSchema: UpdateInstanceProtectOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
