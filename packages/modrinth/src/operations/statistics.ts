import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const StatisticsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/statistics" }));
export type StatisticsInput = typeof StatisticsInput.Type;

// Output Schema
export const StatisticsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projects: Schema.optional(Schema.Number),
  versions: Schema.optional(Schema.Number),
  files: Schema.optional(Schema.Number),
  authors: Schema.optional(Schema.Number),
});
export type StatisticsOutput = typeof StatisticsOutput.Type;

// The operation
/**
 * Various statistics about this Modrinth instance
 */
export const statistics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StatisticsInput,
  outputSchema: StatisticsOutput,
}));
