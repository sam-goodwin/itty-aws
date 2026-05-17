import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const SetChannelPermissionOverwriteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    overwrite_id: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.Unknown),
    allow: Schema.optional(Schema.NullOr(Schema.Number)),
    deny: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/channels/{channel_id}/permissions/{overwrite_id}",
    }),
  );
export type SetChannelPermissionOverwriteInput =
  typeof SetChannelPermissionOverwriteInput.Type;

// Output Schema
export const SetChannelPermissionOverwriteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SetChannelPermissionOverwriteOutput =
  typeof SetChannelPermissionOverwriteOutput.Type;

// The operation
export const setChannelPermissionOverwrite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SetChannelPermissionOverwriteInput,
    outputSchema: SetChannelPermissionOverwriteOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
