import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { UnprocessableEntity } from "../../errors";

// Input Schema
export const CreateGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/v2/rbac/groups" }));
export type CreateGroupInput = typeof CreateGroupInput.Type;

// Output Schema
export const CreateGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.String,
});
export type CreateGroupOutput = typeof CreateGroupOutput.Type;

// The operation
/**
 * Create group
 *
 * Creates a new group in the organization.
 */
export const createGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateGroupInput,
  outputSchema: CreateGroupOutput,
  errors: [UnprocessableEntity] as const,
}));
