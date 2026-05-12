import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AddIamGroupMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    group_id: Schema.String.pipe(T.PathParam()),
    display_name: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "POST", path: "/v2/groups/{group_id}/members" }));
export type AddIamGroupMemberInput = typeof AddIamGroupMemberInput.Type;

// Output Schema
export const AddIamGroupMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_member: Schema.optional(
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
  });
export type AddIamGroupMemberOutput = typeof AddIamGroupMemberOutput.Type;

// The operation
/**
 * Add Group Member
 *
 * Add a User to a Group.
 *
 * @param group_id - The Group ID.
 */
export const addIamGroupMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddIamGroupMemberInput,
  outputSchema: AddIamGroupMemberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
