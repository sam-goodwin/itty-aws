import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EvaluationsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Literals(["active", "paused", "error"])),
    status_reason: Schema.optional(Schema.Unknown),
    evaluation_type: Schema.optional(Schema.Literals(["llm_judge", "hog"])),
    evaluation_config: Schema.optional(Schema.Unknown),
    output_type: Schema.optional(Schema.Literals(["boolean"])),
    output_config: Schema.optional(
      Schema.Struct({
        allows_na: Schema.optional(Schema.Boolean),
      }),
    ),
    conditions: Schema.optional(Schema.Unknown),
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
          ]),
          model: Schema.String,
          provider_key_id: Schema.optional(Schema.NullOr(Schema.String)),
          provider_key_name: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
    deleted: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/evaluations/{id}/",
    }),
  );
export type EvaluationsPartialUpdateInput =
  typeof EvaluationsPartialUpdateInput.Type;

// Output Schema
export const EvaluationsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    status: Schema.Literals(["active", "paused", "error"]),
    status_reason: Schema.Unknown,
    evaluation_type: Schema.Literals(["llm_judge", "hog"]),
    evaluation_config: Schema.optional(Schema.Unknown),
    output_type: Schema.Literals(["boolean"]),
    output_config: Schema.optional(
      Schema.Struct({
        allows_na: Schema.optional(Schema.Boolean),
      }),
    ),
    conditions: Schema.optional(Schema.Unknown),
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
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    deleted: Schema.optional(Schema.Boolean),
  });
export type EvaluationsPartialUpdateOutput =
  typeof EvaluationsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this evaluation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const evaluationsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EvaluationsPartialUpdateInput,
    outputSchema: EvaluationsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
