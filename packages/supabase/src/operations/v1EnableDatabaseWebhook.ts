import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1EnableDatabaseWebhookInput {
  ref: string;
}
export const V1EnableDatabaseWebhookInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/database/webhooks/enable",
    }),
  ) as unknown as Schema.Codec<V1EnableDatabaseWebhookInput>;

// Output Schema
export type V1EnableDatabaseWebhookOutput = void;
export const V1EnableDatabaseWebhookOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1EnableDatabaseWebhookOutput>;

// The operation
/**
 * [Beta] Enables Database Webhooks on the project
 *
 * @param ref - Project ref
 */
export const v1EnableDatabaseWebhook = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1EnableDatabaseWebhookInput,
  outputSchema: V1EnableDatabaseWebhookOutput,
  errors: [BadRequest, Forbidden] as const,
}));
