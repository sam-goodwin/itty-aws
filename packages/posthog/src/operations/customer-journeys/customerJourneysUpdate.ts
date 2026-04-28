import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const CustomerJourneysUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    insight: Schema.Number,
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    created_by: Schema.NullOr(Schema.Number),
    updated_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/environments/{project_id}/customer_journeys/{id}/",
    }),
  );
export type CustomerJourneysUpdateInput =
  typeof CustomerJourneysUpdateInput.Type;

// Output Schema
export const CustomerJourneysUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    insight: Schema.Number,
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    created_by: Schema.NullOr(Schema.Number),
    updated_at: Schema.NullOr(Schema.String),
  });
export type CustomerJourneysUpdateOutput =
  typeof CustomerJourneysUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this customer journey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerJourneysUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerJourneysUpdateInput,
    outputSchema: CustomerJourneysUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
