import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface PersonsBatchByDistinctIdsCreateInput {
  project_id: string;
  format?: "csv" | "json";
  id?: number;
  name?: string;
  distinct_ids?: string[];
  properties?: unknown;
  created_at?: string;
  uuid?: string;
  last_seen_at?: string | null;
}
export const PersonsBatchByDistinctIdsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    distinct_ids: Schema.optional(Schema.Array(Schema.String)),
    properties: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    uuid: Schema.optional(Schema.String),
    last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/persons/batch_by_distinct_ids/",
    }),
  ) as unknown as Schema.Codec<PersonsBatchByDistinctIdsCreateInput>;

// Output Schema
export type PersonsBatchByDistinctIdsCreateOutput = void;
export const PersonsBatchByDistinctIdsCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PersonsBatchByDistinctIdsCreateOutput>;

// The operation
/**
 * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const personsBatchByDistinctIdsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PersonsBatchByDistinctIdsCreateInput,
    outputSchema: PersonsBatchByDistinctIdsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
