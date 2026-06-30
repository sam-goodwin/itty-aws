import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ListGroupsInput {}
export const ListGroupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v2/rbac/groups" }),
) as unknown as Schema.Codec<ListGroupsInput>;

// Output Schema
export type ListGroupsOutput = {
  description?: string;
  isManaged?: boolean;
  members?: string[];
  name: string;
  roles?: string[];
  id: string;
}[];
export const ListGroupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    description: Schema.optional(Schema.String),
    isManaged: Schema.optional(Schema.Boolean),
    members: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.String,
    roles: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<ListGroupsOutput>;

// The operation
/**
 * List all groups
 *
 * Retrieves all groups in the organization.
 */
export const listGroups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGroupsInput,
  outputSchema: ListGroupsOutput,
}));
