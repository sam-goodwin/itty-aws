import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventDefinitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/",
    }),
  );
export type EventDefinitionsListInput = typeof EventDefinitionsListInput.Type;

// Output Schema
export const EventDefinitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        owner: Schema.optional(Schema.NullOr(Schema.Number)),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        tags: Schema.optional(Schema.Array(Schema.Unknown)),
        created_at: Schema.NullOr(Schema.String),
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
        last_seen_at: Schema.NullOr(Schema.String),
        last_updated_at: Schema.String,
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
        enforcement_mode: Schema.optional(Schema.Literals(["allow", "reject"])),
        is_action: Schema.Boolean,
        action_id: Schema.Number,
        is_calculating: Schema.Boolean,
        last_calculated_at: Schema.String,
        created_by: Schema.Struct({
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
        post_to_slack: Schema.optional(Schema.Boolean),
        default_columns: Schema.optional(Schema.Array(Schema.String)),
        media_preview_urls: Schema.Array(Schema.String),
      }),
    ),
  });
export type EventDefinitionsListOutput = typeof EventDefinitionsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventDefinitionsListInput,
    outputSchema: EventDefinitionsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
