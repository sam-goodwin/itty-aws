import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmSkillsNameFilesDestroyInput {
  file_path: string;
  project_id: string;
  skill_name: string;
  base_version?: number;
}
export const LlmSkillsNameFilesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    file_path: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
    base_version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/llm_skills/name/{skill_name}/files/{file_path}/",
    }),
  ) as unknown as Schema.Codec<LlmSkillsNameFilesDestroyInput>;

// Output Schema
export interface LlmSkillsNameFilesDestroyOutput {
  id?: string;
  name?: string;
  description?: string;
  body?: string;
  license?: string;
  compatibility?: string;
  allowed_tools?: string[];
  metadata?: Record<string, unknown>;
  category?: string;
  files?: { path?: string; content_type?: string }[];
  outline?: { level?: number; text?: string }[];
  version?: number;
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
  created_at?: string;
  updated_at?: string;
  deleted?: boolean;
  is_latest?: boolean;
  latest_version?: number;
  version_count?: number;
  first_version_created_at?: string;
}
export const LlmSkillsNameFilesDestroyOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    body: Schema.optional(Schema.String),
    license: Schema.optional(Schema.String),
    compatibility: Schema.optional(Schema.String),
    allowed_tools: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    category: Schema.optional(Schema.String),
    files: Schema.optional(
      Schema.Array(
        Schema.Struct({
          path: Schema.optional(Schema.String),
          content_type: Schema.optional(Schema.String),
        }),
      ),
    ),
    outline: Schema.optional(
      Schema.Array(
        Schema.Struct({
          level: Schema.optional(Schema.Number),
          text: Schema.optional(Schema.String),
        }),
      ),
    ),
    version: Schema.optional(Schema.Number),
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
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    is_latest: Schema.optional(Schema.Boolean),
    latest_version: Schema.optional(Schema.Number),
    version_count: Schema.optional(Schema.Number),
    first_version_created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LlmSkillsNameFilesDestroyOutput>;

// The operation
/**
 *
 * @param base_version - Latest version you are editing from. If provided, the request fails with 409 when another write has landed in the meantime.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmSkillsNameFilesDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: LlmSkillsNameFilesDestroyInput,
  outputSchema: LlmSkillsNameFilesDestroyOutput,
}));
