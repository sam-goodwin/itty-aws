import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventDefinitionsByNameRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/by_name/",
    }),
  );
export type EventDefinitionsByNameRetrieveInput =
  typeof EventDefinitionsByNameRetrieveInput.Type;

// Output Schema
export const EventDefinitionsByNameRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_updated_at: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    enforcement_mode: Schema.optional(Schema.Literals(["allow", "reject"])),
    is_action: Schema.optional(Schema.Boolean),
    action_id: Schema.optional(Schema.Number),
    is_calculating: Schema.optional(Schema.Boolean),
    last_calculated_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    post_to_slack: Schema.optional(Schema.Boolean),
  });
export type EventDefinitionsByNameRetrieveOutput =
  typeof EventDefinitionsByNameRetrieveOutput.Type;

// The operation
/**
 * Get event definition by exact name
 *
 * @param name - The exact event name to look up
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsByNameRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventDefinitionsByNameRetrieveInput,
    outputSchema: EventDefinitionsByNameRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
