import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EventDefinitionsByNameRetrieveInput {
  project_id: string;
  name: string;
}
export const EventDefinitionsByNameRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/by_name/",
    }),
  ) as unknown as Schema.Codec<EventDefinitionsByNameRetrieveInput>;

// Output Schema
export interface EventDefinitionsByNameRetrieveOutput {
  id?: string;
  name?: string;
  created_at?: string | null;
  last_seen_at?: string | null;
  last_updated_at?: string;
  tags?: unknown[];
  enforcement_mode?: "allow" | "reject";
  primary_property?: string | null;
  is_action?: boolean;
  action_id?: number;
  is_calculating?: boolean;
  last_calculated_at?: string;
  created_by?: {
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
  post_to_slack?: boolean;
}
export const EventDefinitionsByNameRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_updated_at: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    enforcement_mode: Schema.optional(Schema.Literals(["allow", "reject"])),
    primary_property: Schema.optional(Schema.NullOr(Schema.String)),
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
    post_to_slack: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<EventDefinitionsByNameRetrieveOutput>;

// The operation
/**
 * Get event definition by exact name
 *
 * @param name - The exact event name to look up
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsByNameRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventDefinitionsByNameRetrieveInput,
    outputSchema: EventDefinitionsByNameRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
