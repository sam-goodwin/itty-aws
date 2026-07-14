import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CustomerJourneysDestroyInput {
  id: string;
  project_id: string;
}
export const CustomerJourneysDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/customer_journeys/{id}/",
    }),
  ) as unknown as Schema.Codec<CustomerJourneysDestroyInput>;

// Output Schema
export type CustomerJourneysDestroyOutput = void;
export const CustomerJourneysDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomerJourneysDestroyOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerJourneysDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomerJourneysDestroyInput,
  outputSchema: CustomerJourneysDestroyOutput,
}));
