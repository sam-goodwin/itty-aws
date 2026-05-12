import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetIamGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  show_last_activity: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/v2/groups/{id}" }));
export type GetIamGroupInput = typeof GetIamGroupInput.Type;

// Output Schema
export const GetIamGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      display_name: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      status: Schema.optional(Schema.Literals(["active", "deleted"])),
      date_created: Schema.optional(Schema.String),
      date_updated: Schema.optional(Schema.String),
      last_activity: Schema.optional(Schema.String),
      members: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            display_name: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            first_name: Schema.optional(Schema.String),
            last_name: Schema.optional(Schema.String),
            active: Schema.optional(Schema.Boolean),
            service_user: Schema.optional(Schema.Boolean),
            date_created: Schema.optional(Schema.String),
            date_updated: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
});
export type GetIamGroupOutput = typeof GetIamGroupOutput.Type;

// The operation
/**
 * Get Group
 *
 * Get information about a Group.
 *
 * @param id - The Group ID.
 * @param show_last_activity - Set to `true` to include the `last_activity` field in the response.
 */
export const getIamGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIamGroupInput,
  outputSchema: GetIamGroupOutput,
  errors: [Forbidden, NotFound] as const,
}));
