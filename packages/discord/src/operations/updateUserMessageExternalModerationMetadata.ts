import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateUserMessageExternalModerationMetadataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id_1: Schema.String.pipe(T.PathParam()),
    user_id_2: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata",
    }),
  );
export type UpdateUserMessageExternalModerationMetadataInput =
  typeof UpdateUserMessageExternalModerationMetadataInput.Type;

// Output Schema
export const UpdateUserMessageExternalModerationMetadataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateUserMessageExternalModerationMetadataOutput =
  typeof UpdateUserMessageExternalModerationMetadataOutput.Type;

// The operation
/**
 * Update the external moderation metadata for a user message (DM).
 */
export const updateUserMessageExternalModerationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateUserMessageExternalModerationMetadataInput,
    outputSchema: UpdateUserMessageExternalModerationMetadataOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
