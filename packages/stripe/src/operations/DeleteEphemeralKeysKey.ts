import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface DeleteEphemeralKeysKeyInput {
  key: string;
  expand?: string[];
}
export const DeleteEphemeralKeysKeyInput =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/ephemeral_keys/{key}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteEphemeralKeysKeyInput>;

// Output Schema
export interface DeleteEphemeralKeysKeyOutput {
  created: number;
  expires: number;
  id: string;
  livemode: boolean;
  object: "ephemeral_key";
  secret?: Redacted.Redacted<string>;
}
export const DeleteEphemeralKeysKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    created: Schema.Number,
    expires: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["ephemeral_key"]),
    secret: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<DeleteEphemeralKeysKeyOutput>;

// The operation
/**
 * Immediately invalidate an ephemeral key
 *
 * <p>Invalidates a short-lived API key for a given resource.</p>
 */
export const DeleteEphemeralKeysKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteEphemeralKeysKeyInput,
  outputSchema: DeleteEphemeralKeysKeyOutput,
}));
