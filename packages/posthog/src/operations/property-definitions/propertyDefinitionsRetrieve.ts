import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface PropertyDefinitionsRetrieveInput {
  id: string;
  project_id: string;
}
export const PropertyDefinitionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/property_definitions/{id}/",
    }),
  ) as unknown as Schema.Codec<PropertyDefinitionsRetrieveInput>;

// Output Schema
export interface PropertyDefinitionsRetrieveOutput {
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
}
export const PropertyDefinitionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    is_seen_on_filtered_events: Schema.optional(Schema.NullOr(Schema.Boolean)),
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
    hidden: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }) as unknown as Schema.Codec<PropertyDefinitionsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this property definition.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const propertyDefinitionsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PropertyDefinitionsRetrieveInput,
    outputSchema: PropertyDefinitionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
