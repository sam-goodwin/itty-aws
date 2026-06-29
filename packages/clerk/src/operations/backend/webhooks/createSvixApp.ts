import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest } from "../../../errors.ts";

// Input Schema
export const CreateSvixAppInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/webhooks/svix" }));
export type CreateSvixAppInput = typeof CreateSvixAppInput.Type;

// Output Schema
export const CreateSvixAppOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  svix_url: Schema.String,
});
export type CreateSvixAppOutput = typeof CreateSvixAppOutput.Type;

// The operation
/**
 * Create a Svix app
 *
 * Create a Svix app and associate it with the current instance
 */
export const createSvixApp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateSvixAppInput,
  outputSchema: CreateSvixAppOutput,
  errors: [BadRequest] as const,
}));
