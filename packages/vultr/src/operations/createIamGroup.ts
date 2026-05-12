import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateIamGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  display_name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v2/groups" }));
export type CreateIamGroupInput = typeof CreateIamGroupInput.Type;

// Output Schema
export const CreateIamGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateIamGroupOutput = typeof CreateIamGroupOutput.Type;

// The operation
/**
 * Create Group
 *
 * Create a new IAM Group.
 */
export const createIamGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateIamGroupInput,
  outputSchema: CreateIamGroupOutput,
  errors: [BadRequest, Forbidden] as const,
}));
