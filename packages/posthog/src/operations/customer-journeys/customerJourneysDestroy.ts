import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const CustomerJourneysDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/customer_journeys/{id}/",
    }),
  );
export type CustomerJourneysDestroyInput =
  typeof CustomerJourneysDestroyInput.Type;

// Output Schema
export const CustomerJourneysDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomerJourneysDestroyOutput =
  typeof CustomerJourneysDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this customer journey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerJourneysDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerJourneysDestroyInput,
    outputSchema: CustomerJourneysDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
