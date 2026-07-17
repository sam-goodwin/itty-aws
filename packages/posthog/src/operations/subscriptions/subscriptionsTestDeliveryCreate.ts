import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SubscriptionsTestDeliveryCreateInput {
  id: number;
  project_id: string;
}
export const SubscriptionsTestDeliveryCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/subscriptions/{id}/test-delivery/",
    }),
  ) as unknown as Schema.Codec<SubscriptionsTestDeliveryCreateInput>;

// Output Schema
export type SubscriptionsTestDeliveryCreateOutput = void;
export const SubscriptionsTestDeliveryCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SubscriptionsTestDeliveryCreateOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this subscription.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const subscriptionsTestDeliveryCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionsTestDeliveryCreateInput,
    outputSchema: SubscriptionsTestDeliveryCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
