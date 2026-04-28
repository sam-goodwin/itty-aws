import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const CustomerJourneysListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/customer_journeys/",
    }),
  );
export type CustomerJourneysListInput = typeof CustomerJourneysListInput.Type;

// Output Schema
export const CustomerJourneysListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        insight: Schema.Number,
        name: Schema.String,
        description: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
        created_by: Schema.NullOr(Schema.Number),
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type CustomerJourneysListOutput = typeof CustomerJourneysListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerJourneysList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerJourneysListInput,
    outputSchema: CustomerJourneysListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
