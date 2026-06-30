import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostTerminalConnectionTokensInput {
  expand?: string[];
  location?: string;
}
export const PostTerminalConnectionTokensInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/terminal/connection_tokens",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTerminalConnectionTokensInput>;

// Output Schema
export interface PostTerminalConnectionTokensOutput {
  location?: string;
  object: "terminal.connection_token";
  secret: Redacted.Redacted<string>;
}
export const PostTerminalConnectionTokensOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    object: Schema.Literals(["terminal.connection_token"]),
    secret: SensitiveOutputString,
  }) as unknown as Schema.Codec<PostTerminalConnectionTokensOutput>;

// The operation
/**
 * Create a Connection Token
 *
 * <p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>
 */
export const PostTerminalConnectionTokens =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTerminalConnectionTokensInput,
    outputSchema: PostTerminalConnectionTokensOutput,
  }));
