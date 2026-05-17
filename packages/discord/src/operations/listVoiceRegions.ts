import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListVoiceRegionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/voice/regions" }));
export type ListVoiceRegionsInput = typeof ListVoiceRegionsInput.Type;

// Output Schema
export const ListVoiceRegionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    custom: Schema.Boolean,
    deprecated: Schema.Boolean,
    optimal: Schema.Boolean,
  }),
);
export type ListVoiceRegionsOutput = typeof ListVoiceRegionsOutput.Type;

// The operation
export const listVoiceRegions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListVoiceRegionsInput,
  outputSchema: ListVoiceRegionsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
