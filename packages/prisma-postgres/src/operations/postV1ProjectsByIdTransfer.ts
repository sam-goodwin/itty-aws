import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PostV1ProjectsByIdTransferInput {
  id: string;
  recipientAccessToken: string;
}
export const PostV1ProjectsByIdTransferInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    recipientAccessToken: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{id}/transfer" }),
  ) as unknown as Schema.Codec<PostV1ProjectsByIdTransferInput>;

// Output Schema
export type PostV1ProjectsByIdTransferOutput = void;
export const PostV1ProjectsByIdTransferOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PostV1ProjectsByIdTransferOutput>;

// The operation
/**
 * Transfer project
 *
 * Transfer the project with the given ID to the new owner's workspace
 */
export const postV1ProjectsByIdTransfer = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostV1ProjectsByIdTransferInput,
  outputSchema: PostV1ProjectsByIdTransferOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
