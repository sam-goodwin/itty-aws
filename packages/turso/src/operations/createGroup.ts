import * as Schema from "effect/Schema";
import { ExtensionsSchema, GroupSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict } from "../errors.ts";

// Input Schema
export const CreateGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
  location: Schema.String,
  extensions: Schema.optional(Schema.suspend(() => ExtensionsSchema)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/organizations/{organizationSlug}/groups",
  }),
);
export type CreateGroupInput = typeof CreateGroupInput.Type;

// Output Schema
export const CreateGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group: Schema.optional(Schema.suspend(() => GroupSchema)),
});
export type CreateGroupOutput = typeof CreateGroupOutput.Type;

// The operation
/**
 * Create Group
 *
 * Creates a new group for the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const createGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateGroupInput,
  outputSchema: CreateGroupOutput,
  errors: [BadRequest, Conflict] as const,
}));
