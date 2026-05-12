import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const UpdateAdvancedOptionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "PUT", path: "/databases/{databaseId}/advanced-options" }),
  );
export type UpdateAdvancedOptionsInput = typeof UpdateAdvancedOptionsInput.Type;

// Output Schema
export const UpdateAdvancedOptionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateAdvancedOptionsOutput =
  typeof UpdateAdvancedOptionsOutput.Type;

// The operation
/**
 * Update Advanced Options
 *
 * Updates an advanced configuration option for the Managed Database (MySQL, PostgreSQL, and Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const updateAdvancedOptions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateAdvancedOptionsInput,
    outputSchema: UpdateAdvancedOptionsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
