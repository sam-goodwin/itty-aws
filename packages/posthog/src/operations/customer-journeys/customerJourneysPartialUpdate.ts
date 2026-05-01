import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CustomerJourneysPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    insight: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/customer_journeys/{id}/",
    }),
  );
export type CustomerJourneysPartialUpdateInput =
  typeof CustomerJourneysPartialUpdateInput.Type;

// Output Schema
export const CustomerJourneysPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    insight: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type CustomerJourneysPartialUpdateOutput =
  typeof CustomerJourneysPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this customer journey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerJourneysPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerJourneysPartialUpdateInput,
    outputSchema: CustomerJourneysPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
