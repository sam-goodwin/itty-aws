import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmSkillsResolveNameRetrieveInput {
  project_id: string;
  skill_name: string;
  before_version?: number;
  limit?: number;
  offset?: number;
  version?: number;
  version_id?: string;
}
export const LlmSkillsResolveNameRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
    before_version: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.Number),
    version_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_skills/resolve/name/{skill_name}/",
    }),
  ) as unknown as Schema.Codec<LlmSkillsResolveNameRetrieveInput>;

// Output Schema
export interface LlmSkillsResolveNameRetrieveOutput {
  skill?: {
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
  };
  versions?: {
    id?: string;
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
    is_latest?: boolean;
  }[];
  has_more?: boolean;
}
export const LlmSkillsResolveNameRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skill: Schema.optional(
      Schema.Struct({
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
      }),
    ),
    versions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
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
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
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
          is_latest: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    has_more: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<LlmSkillsResolveNameRetrieveOutput>;

// The operation
/**
 *
 * @param before_version - Return versions older than this version number. Mutually exclusive with offset.
 * @param limit - Maximum number of versions to return per page (1-100).
 * @param offset - Zero-based offset into version history for pagination. Mutually exclusive with before_version.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific skill version to fetch. If omitted, the latest version is returned.
 * @param version_id - Exact skill version UUID to resolve.
 */
export const llmSkillsResolveNameRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmSkillsResolveNameRetrieveInput,
    outputSchema: LlmSkillsResolveNameRetrieveOutput,
  }));
