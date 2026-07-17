import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ActionsReferencesListInput {
  id: number;
  project_id: string;
  format?: "csv" | "json";
}
export const ActionsReferencesListInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/actions/{id}/references/",
    }),
  ) as unknown as Schema.Codec<ActionsReferencesListInput>;

// Output Schema
export type ActionsReferencesListOutput = {
  type?: string;
  id?: string;
  name?: string;
  url?: string;
  created_at?: string | null;
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
}[];
export const ActionsReferencesListOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      url: Schema.optional(Schema.String),
      created_at: Schema.optional(Schema.NullOr(Schema.String)),
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
  ) as unknown as Schema.Codec<ActionsReferencesListOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this action.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const actionsReferencesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ActionsReferencesListInput,
  outputSchema: ActionsReferencesListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
