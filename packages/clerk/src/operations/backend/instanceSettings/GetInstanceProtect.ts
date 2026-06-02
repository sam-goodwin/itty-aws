import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";

// Input Schema
export const GetInstanceProtectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/instance/protect" }),
  );
export type GetInstanceProtectInput = typeof GetInstanceProtectInput.Type;

// Output Schema
export const GetInstanceProtectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["instance_protect"]),
    rules_enabled: Schema.Boolean,
    specter_enabled: Schema.Boolean,
  });
export type GetInstanceProtectOutput = typeof GetInstanceProtectOutput.Type;

// The operation
/**
 * Get instance protect settings
 */
export const GetInstanceProtect = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceProtectInput,
  outputSchema: GetInstanceProtectOutput,
}));
