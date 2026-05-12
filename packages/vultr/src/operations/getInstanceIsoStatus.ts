import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceIsoStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}/iso" }));
export type GetInstanceIsoStatusInput = typeof GetInstanceIsoStatusInput.Type;

// Output Schema
export const GetInstanceIsoStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iso_status: Schema.optional(
      Schema.Struct({
        iso_id: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetInstanceIsoStatusOutput = typeof GetInstanceIsoStatusOutput.Type;

// The operation
/**
 * Get Instance ISO Status
 *
 * Get the ISO status for an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const getInstanceIsoStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetInstanceIsoStatusInput,
    outputSchema: GetInstanceIsoStatusOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
