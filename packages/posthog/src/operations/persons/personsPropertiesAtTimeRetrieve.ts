import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface PersonsPropertiesAtTimeRetrieveInput {
  project_id: string;
  distinct_id?: string;
  format?: "csv" | "json";
  include_set_once?: boolean;
  person_id?: string;
  timestamp: string;
}
export const PersonsPropertiesAtTimeRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    distinct_id: Schema.optional(Schema.String),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    include_set_once: Schema.optional(Schema.Boolean),
    person_id: Schema.optional(Schema.String),
    timestamp: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persons/properties_at_time/",
    }),
  ) as unknown as Schema.Codec<PersonsPropertiesAtTimeRetrieveInput>;

// Output Schema
export interface PersonsPropertiesAtTimeRetrieveOutput {
  id?: number;
  name?: string;
  distinct_ids?: string[];
  properties?: Record<string, string | null>;
  created_at?: string;
  uuid?: string;
  last_seen_at?: string | null;
  point_in_time_metadata?: {
    queried_timestamp?: string;
    include_set_once?: boolean;
    distinct_id_used?: string | null;
    person_id_used?: string | null;
    query_mode?: string;
    distinct_ids_queried?: string[];
    distinct_ids_count?: number;
  };
}
export const PersonsPropertiesAtTimeRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    distinct_ids: Schema.optional(Schema.Array(Schema.String)),
    properties: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
    created_at: Schema.optional(Schema.String),
    uuid: Schema.optional(Schema.String),
    last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
    point_in_time_metadata: Schema.optional(
      Schema.Struct({
        queried_timestamp: Schema.optional(Schema.String),
        include_set_once: Schema.optional(Schema.Boolean),
        distinct_id_used: Schema.optional(Schema.NullOr(Schema.String)),
        person_id_used: Schema.optional(Schema.NullOr(Schema.String)),
        query_mode: Schema.optional(Schema.String),
        distinct_ids_queried: Schema.optional(Schema.Array(Schema.String)),
        distinct_ids_count: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<PersonsPropertiesAtTimeRetrieveOutput>;

// The operation
/**
 * Get person properties as they existed at a specific point in time.
 * This endpoint reconstructs person properties by querying ClickHouse events
 * for $set and $set_once operations up to the specified timestamp.
 * Query parameters:
 * - distinct_id: The distinct_id of the person
 * - timestamp: ISO datetime string for the point in time (e.g., "2023-06-15T14:30:00Z")
 * - include_set_once: Whether to handle $set_once operations (default: false)
 *
 * @param distinct_id - The distinct_id of the person (mutually exclusive with person_id)
 * @param include_set_once - Whether to handle $set_once operations (default: false)
 * @param person_id - The person_id (UUID) to build properties for (mutually exclusive with distinct_id)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param timestamp - ISO datetime string for the point in time (e.g., '2023-06-15T14:30:00Z')
 */
export const personsPropertiesAtTimeRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PersonsPropertiesAtTimeRetrieveInput,
    outputSchema: PersonsPropertiesAtTimeRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
