import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CohortsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    groups: Schema.optional(Schema.Unknown),
    deleted: Schema.optional(Schema.Boolean),
    filters: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          properties: Schema.Struct({
            type: Schema.Literals(["AND", "OR"]),
            values: Schema.Array(Schema.Unknown),
          }),
        }),
      ),
    ),
    query: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.optional(Schema.NullOr(Schema.Number)),
    pending_version: Schema.optional(Schema.NullOr(Schema.Number)),
    is_calculating: Schema.optional(Schema.Boolean),
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
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_calculation: Schema.optional(Schema.NullOr(Schema.String)),
    last_backfill_person_properties_at: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    errors_calculating: Schema.optional(Schema.Number),
    last_error_message: Schema.optional(Schema.NullOr(Schema.String)),
    count: Schema.optional(Schema.NullOr(Schema.Number)),
    is_static: Schema.optional(Schema.Boolean),
    cohort_type: Schema.optional(Schema.Unknown),
    experiment_set: Schema.optional(Schema.Array(Schema.Number)),
    _create_in_folder: Schema.optional(Schema.String),
    _create_static_person_ids: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/cohorts/{id}/",
    }),
  );
export type CohortsPartialUpdateInput = typeof CohortsPartialUpdateInput.Type;

// Output Schema
export const CohortsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    groups: Schema.optional(Schema.Unknown),
    deleted: Schema.optional(Schema.Boolean),
    filters: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          properties: Schema.Struct({
            type: Schema.Literals(["AND", "OR"]),
            values: Schema.Array(Schema.Unknown),
          }),
        }),
      ),
    ),
    query: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.NullOr(Schema.Number),
    pending_version: Schema.NullOr(Schema.Number),
    is_calculating: Schema.Boolean,
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
    created_at: Schema.NullOr(Schema.String),
    last_calculation: Schema.NullOr(Schema.String),
    last_backfill_person_properties_at: Schema.NullOr(Schema.String),
    errors_calculating: Schema.Number,
    last_error_message: Schema.NullOr(Schema.String),
    count: Schema.NullOr(Schema.Number),
    is_static: Schema.optional(Schema.Boolean),
    cohort_type: Schema.optional(Schema.Unknown),
    experiment_set: Schema.Array(Schema.Number),
    _create_in_folder: Schema.optional(Schema.String),
    _create_static_person_ids: Schema.optional(Schema.Array(Schema.String)),
  });
export type CohortsPartialUpdateOutput = typeof CohortsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CohortsPartialUpdateInput,
    outputSchema: CohortsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
