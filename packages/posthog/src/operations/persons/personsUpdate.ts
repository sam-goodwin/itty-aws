import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface PersonsUpdateInput {
  id: string;
  project_id: string;
  format?: "csv" | "json";
  name?: string;
  distinct_ids?: string[];
  properties?: unknown;
  created_at?: string;
  uuid?: string;
  last_seen_at?: string | null;
}
export const PersonsUpdateInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
  name: Schema.optional(Schema.String),
  distinct_ids: Schema.optional(Schema.Array(Schema.String)),
  properties: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.String),
  uuid: Schema.optional(Schema.String),
  last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "PUT", path: "/api/projects/{project_id}/persons/{id}/" }),
) as unknown as Schema.Codec<PersonsUpdateInput>;

// Output Schema
export interface PersonsUpdateOutput {
  id?: number;
  name?: string;
  distinct_ids?: string[];
  properties?: unknown;
  created_at?: string;
  uuid?: string;
  last_seen_at?: string | null;
}
export const PersonsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  distinct_ids: Schema.optional(Schema.Array(Schema.String)),
  properties: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.String),
  uuid: Schema.optional(Schema.String),
  last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
}) as unknown as Schema.Codec<PersonsUpdateOutput>;

// The operation
/**
 * Only for setting properties on the person. "properties" from the request data will be updated via a "$set" event.
 * This means that only the properties listed will be updated, but other properties won't be removed nor updated.
 * If you would like to remove a property use the `delete_property` endpoint.
 *
 * @param id - A unique value identifying this person. Accepts both numeric ID and UUID.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PersonsUpdateInput,
  outputSchema: PersonsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
