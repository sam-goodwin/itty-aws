import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface CreateGroupInput {
  description?: string;
  isManaged?: boolean;
  members?: ReadonlyArray<string>;
  name: string;
  roles?: ReadonlyArray<string>;
}
export const CreateGroupInput = /*@__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/v2/rbac/groups" }),
) as unknown as Schema.Codec<CreateGroupInput>;

// Output Schema
export interface CreateGroupOutput {
  description?: string;
  isManaged?: boolean;
  members?: ReadonlyArray<string>;
  name: string;
  roles?: ReadonlyArray<string>;
  id: string;
}
export const CreateGroupOutput = /*@__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.String,
}) as unknown as Schema.Codec<CreateGroupOutput>;

// The operation
/**
 * Create group
 *
 * Creates a new group in the organization.
 */
export const createGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateGroupInput,
  outputSchema: CreateGroupOutput,
  errors: [UnprocessableEntity] as const,
}));
