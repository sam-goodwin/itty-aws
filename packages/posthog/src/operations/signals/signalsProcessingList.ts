import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsProcessingListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/processing/",
    }),
  );
export type SignalsProcessingListInput = typeof SignalsProcessingListInput.Type;

// Output Schema
export const SignalsProcessingListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          paused_until: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  });
export type SignalsProcessingListOutput =
  typeof SignalsProcessingListOutput.Type;

// The operation
/**
 * Return current processing state including pause status.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsProcessingList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsProcessingListInput,
    outputSchema: SignalsProcessingListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
