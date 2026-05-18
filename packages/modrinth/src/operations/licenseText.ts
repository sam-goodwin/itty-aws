import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const LicenseTextInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/tag/license/{id}" }));
export type LicenseTextInput = typeof LicenseTextInput.Type;

// Output Schema
export const LicenseTextOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  body: Schema.optional(Schema.String),
});
export type LicenseTextOutput = typeof LicenseTextOutput.Type;

// The operation
/**
 * Get the text and title of a license
 *
 * @param id - The license ID to get the text of
 */
export const licenseText = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicenseTextInput,
  outputSchema: LicenseTextOutput,
  errors: [BadRequest] as const,
}));
