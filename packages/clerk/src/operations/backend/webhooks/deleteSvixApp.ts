import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest } from "../../../errors.ts";

// Input Schema
export const DeleteSvixAppInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "DELETE", path: "/webhooks/svix" }));
export type DeleteSvixAppInput = typeof DeleteSvixAppInput.Type;

// Output Schema
export const DeleteSvixAppOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteSvixAppOutput = typeof DeleteSvixAppOutput.Type;

// The operation
/**
 * Delete a Svix app
 *
 * Delete a Svix app and disassociate it from the current instance
 */
export const deleteSvixApp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteSvixAppInput,
  outputSchema: DeleteSvixAppOutput,
  errors: [BadRequest] as const,
}));
