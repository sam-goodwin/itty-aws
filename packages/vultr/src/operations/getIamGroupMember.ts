import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetIamGroupMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    group_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/v2/groups/{group_id}/members/{id}" }));
export type GetIamGroupMemberInput = typeof GetIamGroupMemberInput.Type;

// Output Schema
export const GetIamGroupMemberOutput =
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
export type GetIamGroupMemberOutput = typeof GetIamGroupMemberOutput.Type;

// The operation
/**
 * Get Group Member
 *
 * Get information about a Group Member.
 *
 * @param group_id - The Group ID.
 * @param id - The Group Member ID.
 */
export const getIamGroupMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIamGroupMemberInput,
  outputSchema: GetIamGroupMemberOutput,
  errors: [Forbidden, NotFound] as const,
}));
