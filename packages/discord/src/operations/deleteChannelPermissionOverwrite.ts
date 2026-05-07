import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteChannelPermissionOverwriteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    overwrite_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/channels/{channel_id}/permissions/{overwrite_id}",
    }),
  );
export type DeleteChannelPermissionOverwriteInput =
  typeof DeleteChannelPermissionOverwriteInput.Type;

// Output Schema
export const DeleteChannelPermissionOverwriteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteChannelPermissionOverwriteOutput =
  typeof DeleteChannelPermissionOverwriteOutput.Type;

// The operation
export const deleteChannelPermissionOverwrite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteChannelPermissionOverwriteInput,
    outputSchema: DeleteChannelPermissionOverwriteOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
