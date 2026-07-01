import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetForwardingRequestsIdInput {
  id: string;
  expand?: string;
}
export const GetForwardingRequestsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/forwarding/requests/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetForwardingRequestsIdInput>;

// Output Schema
export interface GetForwardingRequestsIdOutput {
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
export const GetForwardingRequestsIdOutput =
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
  }) as unknown as Schema.Codec<GetForwardingRequestsIdOutput>;

// The operation
/**
 * Retrieve a ForwardingRequest
 *
 * <p>Retrieves a ForwardingRequest object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetForwardingRequestsId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetForwardingRequestsIdInput,
    outputSchema: GetForwardingRequestsIdOutput,
  }),
);
