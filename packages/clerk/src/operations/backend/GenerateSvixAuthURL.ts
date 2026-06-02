import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export const GenerateSvixAuthURLInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/webhooks/svix_url" }),
  );
export type GenerateSvixAuthURLInput = typeof GenerateSvixAuthURLInput.Type;

// Output Schema
export const GenerateSvixAuthURLOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    svix_url: Schema.String,
  });
export type GenerateSvixAuthURLOutput = typeof GenerateSvixAuthURLOutput.Type;

// The operation
/**
 * Create a Svix Dashboard URL
 *
 * Generate a new URL for accessing the Svix's management dashboard for that particular instance
 */
export const GenerateSvixAuthURL = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GenerateSvixAuthURLInput,
  outputSchema: GenerateSvixAuthURLOutput,
  errors: [BadRequest] as const,
}));
