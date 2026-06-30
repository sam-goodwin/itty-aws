import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmPromptsNameArchiveCreateInput {
  project_id: string;
  prompt_name: string;
  id?: string;
  name?: string;
  prompt?: unknown;
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
  outline?: { level?: number; text?: string }[];
}
export const LlmPromptsNameArchiveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    prompt_name: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    prompt: Schema.optional(Schema.Unknown),
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
    outline: Schema.optional(
      Schema.Array(
        Schema.Struct({
          level: Schema.optional(Schema.Number),
          text: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_prompts/name/{prompt_name}/archive/",
    }),
  ) as unknown as Schema.Codec<LlmPromptsNameArchiveCreateInput>;

// Output Schema
export interface LlmPromptsNameArchiveCreateOutput {
  id?: string;
  name?: string;
  prompt?: unknown;
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
  outline?: { level?: number; text?: string }[];
}
export const LlmPromptsNameArchiveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    prompt: Schema.optional(Schema.Unknown),
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
    outline: Schema.optional(
      Schema.Array(
        Schema.Struct({
          level: Schema.optional(Schema.Number),
          text: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LlmPromptsNameArchiveCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmPromptsNameArchiveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmPromptsNameArchiveCreateInput,
    outputSchema: LlmPromptsNameArchiveCreateOutput,
  }),
);
