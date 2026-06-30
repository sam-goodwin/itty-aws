import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostEphemeralKeysInput {
  customer?: string;
  expand?: string[];
  issuing_card?: string;
  nonce?: string;
  verification_session?: string;
}
export const PostEphemeralKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    customer: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    issuing_card: Schema.optional(Schema.String),
    nonce: Schema.optional(Schema.String),
    verification_session: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/v1/ephemeral_keys",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostEphemeralKeysInput>;

// Output Schema
export interface PostEphemeralKeysOutput {
  created: number;
  expires: number;
  id: string;
  livemode: boolean;
  object: "ephemeral_key";
  secret?: Redacted.Redacted<string>;
}
export const PostEphemeralKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    expires: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["ephemeral_key"]),
    secret: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<PostEphemeralKeysOutput>;

// The operation
/**
 * Create an ephemeral key
 *
 * <p>Creates a short-lived API key for a given resource.</p>
 */
export const PostEphemeralKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostEphemeralKeysInput,
  outputSchema: PostEphemeralKeysOutput,
}));
