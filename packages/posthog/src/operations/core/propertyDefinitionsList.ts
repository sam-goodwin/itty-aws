import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PropertyDefinitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    event_names: Schema.optional(Schema.String),
    exclude_core_properties: Schema.optional(Schema.Boolean),
    exclude_hidden: Schema.optional(Schema.Boolean),
    excluded_properties: Schema.optional(Schema.String),
    filter_by_event_names: Schema.optional(Schema.Boolean),
    group_type_index: Schema.optional(Schema.Number),
    is_feature_flag: Schema.optional(Schema.Boolean),
    is_numerical: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    properties: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["event", "person", "group", "session"]),
    ),
    verified: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/property_definitions/",
    }),
  );
export type PropertyDefinitionsListInput =
  typeof PropertyDefinitionsListInput.Type;

// Output Schema
export const PropertyDefinitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        description: Schema.optional(Schema.NullOr(Schema.String)),
        tags: Schema.optional(Schema.Array(Schema.Unknown)),
        is_numerical: Schema.Boolean,
        updated_at: Schema.String,
        updated_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        is_seen_on_filtered_events: Schema.NullOr(Schema.Boolean),
        property_type: Schema.optional(Schema.Unknown),
        verified: Schema.optional(Schema.Boolean),
        verified_at: Schema.NullOr(Schema.String),
        verified_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        hidden: Schema.optional(Schema.NullOr(Schema.Boolean)),
      }),
    ),
  });
export type PropertyDefinitionsListOutput =
  typeof PropertyDefinitionsListOutput.Type;

// The operation
/**
 *
 * @param event_names - If sent, response value will have `is_seen_on_filtered_events` populated. JSON-encoded
 * @param exclude_core_properties - Whether to exclude core properties
 * @param exclude_hidden - Whether to exclude properties marked as hidden
 * @param excluded_properties - JSON-encoded list of excluded properties
 * @param filter_by_event_names - Whether to return only properties for events in `event_names`
 * @param group_type_index - What group type is the property for. Only should be set if `type=group`
 * @param is_feature_flag - Whether to return only (or excluding) feature flag properties
 * @param is_numerical - Whether to return only (or excluding) numerical property definitions
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param properties - Comma-separated list of properties to filter
 * @param search - Searches properties by name
 * @param type - What property definitions to return

* `event` - event
* `person` - person
* `group` - group
* `session` - session
 * @param verified - Filter by verified status. True returns only verified, false returns only unverified.
 */
export const propertyDefinitionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PropertyDefinitionsListInput,
    outputSchema: PropertyDefinitionsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
