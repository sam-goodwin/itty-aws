import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostCustomersCustomerSourcesInput {
  customer: string;
  expand?: string[];
  metadata?: Record<string, string>;
  source: string;
  validate?: boolean;
}
export const PostCustomersCustomerSourcesInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    source: Schema.String,
    validate: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customers/{customer}/sources",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostCustomersCustomerSourcesInput>;

// Output Schema
export type PostCustomersCustomerSourcesOutput = unknown;
export const PostCustomersCustomerSourcesOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PostCustomersCustomerSourcesOutput>;

// The operation
/**
 * Create a card
 *
 * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
 * <p>If the card’s owner has no default card, then the new card will become the default.
 * However, if the owner already has a default, then it will not change.
 * To change the default, you should <a href="/api/customers/update">update the customer</a> to have a new <code>default_source</code>.</p>
 */
export const PostCustomersCustomerSources =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostCustomersCustomerSourcesInput,
    outputSchema: PostCustomersCustomerSourcesOutput,
  }));
