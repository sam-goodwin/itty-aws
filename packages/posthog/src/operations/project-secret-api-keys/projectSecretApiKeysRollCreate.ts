import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProjectSecretApiKeysRollCreateInput {
  id: string;
  project_id: string;
}
export const ProjectSecretApiKeysRollCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/project_secret_api_keys/{id}/roll/",
    }),
  ) as unknown as Schema.Codec<ProjectSecretApiKeysRollCreateInput>;

// Output Schema
export interface ProjectSecretApiKeysRollCreateOutput {
  id?: string;
  label?: string;
  value?: string;
  mask_value?: string | null;
  created_at?: string;
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
  };
  last_used_at?: string | null;
  last_rolled_at?: string | null;
  scopes?: string[];
}
export const ProjectSecretApiKeysRollCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    mask_value: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
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
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_rolled_at: Schema.optional(Schema.NullOr(Schema.String)),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ProjectSecretApiKeysRollCreateOutput>;

// The operation
/**
 * Roll a project secret API key
 *
 * @param id - A unique value identifying this project secret api key.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const projectSecretApiKeysRollCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectSecretApiKeysRollCreateInput,
    outputSchema: ProjectSecretApiKeysRollCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
