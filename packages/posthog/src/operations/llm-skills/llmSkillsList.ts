import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmSkillsListInput {
  project_id: string;
  category?: string;
  created_by_id?: number;
  limit?: number;
  offset?: number;
  search?: string;
}
export const LlmSkillsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  category: Schema.optional(Schema.String),
  created_by_id: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/llm_skills/" }),
) as unknown as Schema.Codec<LlmSkillsListInput>;

// Output Schema
export interface LlmSkillsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    description?: string;
    license?: string;
    compatibility?: string;
    allowed_tools?: string[];
    metadata?: Record<string, unknown>;
    category?: string;
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
  }[];
}
export const LlmSkillsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        license: Schema.optional(Schema.String),
        compatibility: Schema.optional(Schema.String),
        allowed_tools: Schema.optional(Schema.Array(Schema.String)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        category: Schema.optional(Schema.String),
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
      }),
    ),
  ),
}) as unknown as Schema.Codec<LlmSkillsListOutput>;

// The operation
/**
 *
 * @param category - Filter skills to this exact category. Pass "scout" for Signals scouts, or an empty string to return only uncategorized skills. Omit the parameter entirely to return skills of every category.
 * @param created_by_id - Filter skills by the ID of the user who created them.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Optional substring filter applied to skill names and descriptions.
 */
export const llmSkillsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LlmSkillsListInput,
  outputSchema: LlmSkillsListOutput,
}));
