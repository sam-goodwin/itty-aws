import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RestoreInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
  backup_id: Schema.optional(Schema.String),
  snapshot_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/restore" }));
export type RestoreInstanceInput = typeof RestoreInstanceInput.Type;

// Output Schema
export const RestoreInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RestoreInstanceOutput = typeof RestoreInstanceOutput.Type;

// The operation
/**
 * Restore Instance
 *
 * Restore an Instance from either `backup_id` or `snapshot_id`.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const restoreInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestoreInstanceInput,
  outputSchema: RestoreInstanceOutput,
  errors: [BadRequest, NotFound] as const,
}));
