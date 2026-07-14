import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface GetGroupByIdInput {
  id: string;
}
export const GetGroupByIdInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/rbac/groups/{id}" }),
) as unknown as Schema.Codec<GetGroupByIdInput>;

// Output Schema
export interface GetGroupByIdOutput {
  description?: string;
  isManaged?: boolean;
  members?: ReadonlyArray<string>;
  name: string;
  roles?: ReadonlyArray<string>;
  id: string;
}
export const GetGroupByIdOutput = /*@__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.String,
}) as unknown as Schema.Codec<GetGroupByIdOutput>;

// The operation
/**
 * Get group by ID
 *
 * Retrieves detailed information about a specific group by its unique identifier.
 *
 * @param id - Unique identifier of the group to retrieve
 */
export const getGroupById = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetGroupByIdInput,
  outputSchema: GetGroupByIdOutput,
  errors: [NotFound] as const,
}));
