import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateIamGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  display_name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PUT", path: "/v2/groups/{id}" }));
export type UpdateIamGroupInput = typeof UpdateIamGroupInput.Type;

// Output Schema
export const UpdateIamGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateIamGroupOutput = typeof UpdateIamGroupOutput.Type;

// The operation
/**
 * Update Group
 *
 * Update a Group.
 *
 * @param id - The Group ID.
 */
export const updateIamGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateIamGroupInput,
  outputSchema: UpdateIamGroupOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
