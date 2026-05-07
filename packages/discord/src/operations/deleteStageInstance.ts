import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteStageInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/stage-instances/{channel_id}" }));
export type DeleteStageInstanceInput = typeof DeleteStageInstanceInput.Type;

// Output Schema
export const DeleteStageInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteStageInstanceOutput = typeof DeleteStageInstanceOutput.Type;

// The operation
export const deleteStageInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteStageInstanceInput,
  outputSchema: DeleteStageInstanceOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
