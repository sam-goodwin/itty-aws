import * as Schema from "effect/Schema";
import { NotifierWithIdSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetNotifiersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/notifiers" }));
export type GetNotifiersInput = typeof GetNotifiersInput.Type;

// Output Schema
export const GetNotifiersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => NotifierWithIdSchema),
);
export type GetNotifiersOutput = typeof GetNotifiersOutput.Type;

// The operation
/**
 * Lists all configured notifiers. Returns an array of notification configurations including their IDs and current status.
 */
export const getNotifiers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetNotifiersInput,
  outputSchema: GetNotifiersOutput,
}));
