import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VersionListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/tag/game_version" }));
export type VersionListInput = typeof VersionListInput.Type;

// Output Schema
export const VersionListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    version: Schema.String,
    version_type: Schema.Literals(["release", "snapshot", "alpha", "beta"]),
    date: Schema.String,
    major: Schema.Boolean,
  }),
);
export type VersionListOutput = typeof VersionListOutput.Type;

// The operation
/**
 * Get a list of game versions
 *
 * Gets an array of game versions and information about them
 */
export const versionList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VersionListInput,
  outputSchema: VersionListOutput,
}));
