import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CustomerJourneysCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    insight: Schema.Number,
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    created_by: Schema.NullOr(Schema.Number),
    updated_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/customer_journeys/",
    }),
  );
export type CustomerJourneysCreateInput =
  typeof CustomerJourneysCreateInput.Type;

// Output Schema
export const CustomerJourneysCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    insight: Schema.Number,
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    created_by: Schema.NullOr(Schema.Number),
    updated_at: Schema.NullOr(Schema.String),
  });
export type CustomerJourneysCreateOutput =
  typeof CustomerJourneysCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerJourneysCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerJourneysCreateInput,
    outputSchema: CustomerJourneysCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
