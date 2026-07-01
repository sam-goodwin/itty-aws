import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostForwardingRequestsInput {
  expand?: string[];
  metadata?: Record<string, string>;
  payment_method: string;
  replacements: (
    | "card_cvc"
    | "card_expiry"
    | "card_number"
    | "cardholder_name"
    | "request_signature"
  )[];
  request?: { body?: string; headers?: { name: string; value: string }[] };
  url: string;
}
export const PostForwardingRequestsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    payment_method: Schema.String,
    replacements: Schema.Array(
      Schema.Literals([
        "card_cvc",
        "card_expiry",
        "card_number",
        "cardholder_name",
        "request_signature",
      ]),
    ),
    request: Schema.optional(
      Schema.Struct({
        body: Schema.optional(Schema.String),
        headers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
        ),
      }),
    ),
    url: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/forwarding/requests",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostForwardingRequestsInput>;

// Output Schema
export interface PostForwardingRequestsOutput {
  created: number;
  id: string;
  livemode: boolean;
  metadata?: Record<string, string> | null;
  object: "forwarding.request";
  payment_method: string;
  replacements: (
    | "card_cvc"
    | "card_expiry"
    | "card_number"
    | "cardholder_name"
    | "request_signature"
  )[];
  request_context: {
    destination_duration: number;
    destination_ip_address: string;
  } | null;
  request_details: {
    body: string;
    headers: { name: string; value: string }[];
    http_method: "POST";
  } | null;
  response_details: {
    body: string;
    headers: { name: string; value: string }[];
    status: number;
  } | null;
  url: string | null;
}
export const PostForwardingRequestsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    object: Schema.Literals(["forwarding.request"]),
    payment_method: Schema.String,
    replacements: Schema.Array(
      Schema.Literals([
        "card_cvc",
        "card_expiry",
        "card_number",
        "cardholder_name",
        "request_signature",
      ]),
    ),
    request_context: Schema.NullOr(
      Schema.Struct({
        destination_duration: Schema.Number,
        destination_ip_address: Schema.String,
      }),
    ),
    request_details: Schema.NullOr(
      Schema.Struct({
        body: Schema.String,
        headers: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
        http_method: Schema.Literals(["POST"]),
      }),
    ),
    response_details: Schema.NullOr(
      Schema.Struct({
        body: Schema.String,
        headers: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
        status: Schema.Number,
      }),
    ),
    url: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<PostForwardingRequestsOutput>;

// The operation
/**
 * Create a ForwardingRequest
 *
 * <p>Creates a ForwardingRequest object.</p>
 */
export const PostForwardingRequests = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostForwardingRequestsInput,
    outputSchema: PostForwardingRequestsOutput,
  }),
);
