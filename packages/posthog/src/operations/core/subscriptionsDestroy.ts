import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SubscriptionsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/subscriptions/{id}/",
    }),
  );
export type SubscriptionsDestroyInput = typeof SubscriptionsDestroyInput.Type;

// Output Schema
export const SubscriptionsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SubscriptionsDestroyOutput = typeof SubscriptionsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A unique integer value identifying this subscription.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const subscriptionsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionsDestroyInput,
    outputSchema: SubscriptionsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
