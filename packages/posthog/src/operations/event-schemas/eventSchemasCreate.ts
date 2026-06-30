import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EventSchemasCreateInput {
  project_id: string;
  id?: string;
  event_definition?: string;
  property_group?: {
    id?: string;
    name?: string;
    description?: string;
    properties?: {
      id?: string;
      name?: string;
      property_type?: "DateTime" | "String" | "Numeric" | "Boolean" | "Object";
      is_required?: boolean;
      is_optional_in_types?: boolean;
      description?: string;
      created_at?: string;
      updated_at?: string;
    }[];
    events?: { id?: string; name?: string }[];
    created_at?: string;
    updated_at?: string;
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
  };
  property_group_id?: string;
  created_at?: string;
  updated_at?: string;
}
export const EventSchemasCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    event_definition: Schema.optional(Schema.String),
    property_group: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              property_type: Schema.optional(
                Schema.Literals([
                  "DateTime",
                  "String",
                  "Numeric",
                  "Boolean",
                  "Object",
                ]),
              ),
              is_required: Schema.optional(Schema.Boolean),
              is_optional_in_types: Schema.optional(Schema.Boolean),
              description: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              updated_at: Schema.optional(Schema.String),
            }),
          ),
        ),
        events: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
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
      }),
    ),
    property_group_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/event_schemas/",
    }),
  ) as unknown as Schema.Codec<EventSchemasCreateInput>;

// Output Schema
export interface EventSchemasCreateOutput {
  id?: string;
  event_definition?: string;
  property_group?: {
    id?: string;
    name?: string;
    description?: string;
    properties?: {
      id?: string;
      name?: string;
      property_type?: "DateTime" | "String" | "Numeric" | "Boolean" | "Object";
      is_required?: boolean;
      is_optional_in_types?: boolean;
      description?: string;
      created_at?: string;
      updated_at?: string;
    }[];
    events?: { id?: string; name?: string }[];
    created_at?: string;
    updated_at?: string;
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
  };
  property_group_id?: string;
  created_at?: string;
  updated_at?: string;
}
export const EventSchemasCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    event_definition: Schema.optional(Schema.String),
    property_group: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              property_type: Schema.optional(
                Schema.Literals([
                  "DateTime",
                  "String",
                  "Numeric",
                  "Boolean",
                  "Object",
                ]),
              ),
              is_required: Schema.optional(Schema.Boolean),
              is_optional_in_types: Schema.optional(Schema.Boolean),
              description: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              updated_at: Schema.optional(Schema.String),
            }),
          ),
        ),
        events: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
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
      }),
    ),
    property_group_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSchemasCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventSchemasCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventSchemasCreateInput,
  outputSchema: EventSchemasCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
