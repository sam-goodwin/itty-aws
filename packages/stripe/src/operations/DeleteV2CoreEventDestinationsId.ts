import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteV2CoreEventDestinationsIdInput {
  id: string;
}
export const DeleteV2CoreEventDestinationsIdInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v2/core/event_destinations/{id}" }),
  ) as unknown as Schema.Codec<DeleteV2CoreEventDestinationsIdInput>;

// Output Schema
export interface DeleteV2CoreEventDestinationsIdOutput {
  id: string;
  object?: string;
}
export const DeleteV2CoreEventDestinationsIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    object: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DeleteV2CoreEventDestinationsIdOutput>;

// The operation
/**
 * Delete an Event Destination
 *
 * Delete an event destination.
 *
 * @param id - Identifier for the event destination to delete.
 */
export const DeleteV2CoreEventDestinationsId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteV2CoreEventDestinationsIdInput,
    outputSchema: DeleteV2CoreEventDestinationsIdOutput,
  }));
