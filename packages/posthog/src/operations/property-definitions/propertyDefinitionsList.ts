import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface PropertyDefinitionsListInput {
  project_id: string;
  event_names?: string;
  exclude_core_properties?: boolean;
  exclude_hidden?: boolean;
  exclude_restricted?: boolean;
  excluded_properties?: string;
  filter_by_event_names?: string;
  group_type_index?: number;
  is_feature_flag?: string;
  is_numerical?: string;
  limit?: number;
  offset?: number;
  properties?: string;
  search?: string;
  type?: "event" | "person" | "group" | "session";
  verified?: string;
}
export const PropertyDefinitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    event_names: Schema.optional(Schema.String),
    exclude_core_properties: Schema.optional(Schema.Boolean),
    exclude_hidden: Schema.optional(Schema.Boolean),
    exclude_restricted: Schema.optional(Schema.Boolean),
    excluded_properties: Schema.optional(Schema.String),
    filter_by_event_names: Schema.optional(Schema.String),
    group_type_index: Schema.optional(Schema.Number),
    is_feature_flag: Schema.optional(Schema.String),
    is_numerical: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    properties: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["event", "person", "group", "session"]),
    ),
    verified: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/property_definitions/",
    }),
  ) as unknown as Schema.Codec<PropertyDefinitionsListInput>;

// Output Schema
export interface PropertyDefinitionsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    description?: string | null;
    tags?: unknown[];
    is_numerical?: boolean;
    updated_at?: string;
    updated_by?: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    } | null;
    is_seen_on_filtered_events?: boolean | null;
    property_type?:
      | "DateTime"
      | "String"
      | "Numeric"
      | "Boolean"
      | "Duration"
      | ""
      | null;
    verified?: boolean;
    verified_at?: string | null;
    verified_by?: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    } | null;
    hidden?: boolean | null;
  }[];
}
export const PropertyDefinitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.NullOr(Schema.String)),
          tags: Schema.optional(Schema.Array(Schema.Unknown)),
          is_numerical: Schema.optional(Schema.Boolean),
          updated_at: Schema.optional(Schema.String),
          updated_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(
                  Schema.NullOr(
                    Schema.Union([
                      Schema.Literals([
                        "engineering",
                        "data",
                        "product",
                        "founder",
                        "leadership",
                        "marketing",
                        "sales",
                        "other",
                      ]),
                      Schema.Literals([""]),
                    ]),
                  ),
                ),
              }),
            ),
          ),
          is_seen_on_filtered_events: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          property_type: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "DateTime",
                  "String",
                  "Numeric",
                  "Boolean",
                  "Duration",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
          verified: Schema.optional(Schema.Boolean),
          verified_at: Schema.optional(Schema.NullOr(Schema.String)),
          verified_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(
                  Schema.NullOr(
                    Schema.Union([
                      Schema.Literals([
                        "engineering",
                        "data",
                        "product",
                        "founder",
                        "leadership",
                        "marketing",
                        "sales",
                        "other",
                      ]),
                      Schema.Literals([""]),
                    ]),
                  ),
                ),
              }),
            ),
          ),
          hidden: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PropertyDefinitionsListOutput>;

// The operation
/**
 *
 * @param event_names - If sent, response value will have `is_seen_on_filtered_events` populated. JSON-encoded
 * @param exclude_core_properties - Whether to exclude core properties
 * @param exclude_hidden - Whether to exclude properties marked as hidden
 * @param exclude_restricted - Whether to exclude properties that the current user does not have read access to via field-level access control
 * @param excluded_properties - JSON-encoded list of excluded properties
 * @param filter_by_event_names - Whether to return only properties for events in `event_names`. Note: this event scoping does not apply to feature flag properties ($feature/*), which are global and not tracked per-event; to retrieve feature flags use is_feature_flag=true instead.
 * @param group_type_index - What group type is the property for. Only should be set if `type=group`
 * @param is_feature_flag - Whether to return only (or excluding) feature flag properties ($feature/*). Flags are global, not per-event, so they can't be scoped by event_names/filter_by_event_names — pass is_feature_flag=true to list them all.
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
