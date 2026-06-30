import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const TaggersPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    tagger_type: Schema.optional(Schema.Literals(["llm", "hog"])),
    tagger_config: Schema.optional(Schema.Unknown),
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
    model_configuration: Schema.optional(Schema.Unknown),
    deleted: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/taggers/{id}/",
    }),
  );
export type TaggersPartialUpdateInput = typeof TaggersPartialUpdateInput.Type;

// Output Schema
export const TaggersPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    tagger_type: Schema.optional(Schema.Literals(["llm", "hog"])),
    tagger_config: Schema.Unknown,
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
    model_configuration: Schema.optional(Schema.Unknown),
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
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    deleted: Schema.optional(Schema.Boolean),
  });
export type TaggersPartialUpdateOutput = typeof TaggersPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this tagger.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taggersPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TaggersPartialUpdateInput,
    outputSchema: TaggersPartialUpdateOutput,
  }),
);
