import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TaggersPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string;
  description?: string;
  enabled?: boolean;
  tagger_type?: "llm" | "hog";
  tagger_config?:
    | {
        prompt: string;
        tags: { name: string; description?: string }[];
        min_tags?: number;
        max_tags?: number | null;
      }
    | { source: string; tags?: { name: string; description?: string }[] };
  conditions?: {
    id: string;
    rollout_percentage?: number;
    properties?: Record<string, unknown>[];
  }[];
  model_configuration?: {
    provider:
      | "openai"
      | "anthropic"
      | "gemini"
      | "openrouter"
      | "fireworks"
      | "azure_openai"
      | "together_ai";
    model: string;
    provider_key_id?: string | null;
  } | null;
  deleted?: boolean;
}
export const TaggersPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    tagger_type: Schema.optional(Schema.Literals(["llm", "hog"])),
    tagger_config: Schema.optional(
      Schema.Union([
        Schema.Struct({
          prompt: Schema.String,
          tags: Schema.Array(
            Schema.Struct({
              name: Schema.String,
              description: Schema.optional(Schema.String),
            }),
          ),
          min_tags: Schema.optional(Schema.Number),
          max_tags: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
        Schema.Struct({
          source: Schema.String,
          tags: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                description: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ]),
    ),
    conditions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          rollout_percentage: Schema.optional(Schema.Number),
          properties: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
        }),
      ),
    ),
    model_configuration: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          provider: Schema.Literals([
            "openai",
            "anthropic",
            "gemini",
            "openrouter",
            "fireworks",
            "azure_openai",
            "together_ai",
          ]),
          model: Schema.String,
          provider_key_id: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    deleted: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/taggers/{id}/",
    }),
  ) as unknown as Schema.Codec<TaggersPartialUpdateInput>;

// Output Schema
export interface TaggersPartialUpdateOutput {
  id: string;
  name: string;
  description?: string;
  enabled?: boolean;
  tagger_type?: "llm" | "hog";
  tagger_config:
    | {
        prompt: string;
        tags: { name: string; description?: string }[];
        min_tags?: number;
        max_tags?: number | null;
      }
    | { source: string; tags?: { name: string; description?: string }[] };
  conditions?: {
    id: string;
    rollout_percentage?: number;
    properties?: Record<string, unknown>[];
  }[];
  model_configuration?: {
    provider:
      | "openai"
      | "anthropic"
      | "gemini"
      | "openrouter"
      | "fireworks"
      | "azure_openai"
      | "together_ai";
    model: string;
    provider_key_id?: string | null;
    provider_key_name: string | null;
  } | null;
  created_at: string;
  updated_at: string;
  created_by: {
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
  deleted?: boolean;
}
export const TaggersPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    tagger_type: Schema.optional(Schema.Literals(["llm", "hog"])),
    tagger_config: Schema.Union([
      Schema.Struct({
        prompt: Schema.String,
        tags: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            description: Schema.optional(Schema.String),
          }),
        ),
        min_tags: Schema.optional(Schema.Number),
        max_tags: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
      Schema.Struct({
        source: Schema.String,
        tags: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              description: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ]),
    conditions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          rollout_percentage: Schema.optional(Schema.Number),
          properties: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
        }),
      ),
    ),
    model_configuration: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          provider: Schema.Literals([
            "openai",
            "anthropic",
            "gemini",
            "openrouter",
            "fireworks",
            "azure_openai",
            "together_ai",
          ]),
          model: Schema.String,
          provider_key_id: Schema.optional(Schema.NullOr(Schema.String)),
          provider_key_name: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
    created_by: Schema.Struct({
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
    deleted: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<TaggersPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this tagger.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taggersPartialUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TaggersPartialUpdateInput,
  outputSchema: TaggersPartialUpdateOutput,
}));
