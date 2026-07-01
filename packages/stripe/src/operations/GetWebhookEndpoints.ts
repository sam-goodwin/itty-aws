import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetWebhookEndpointsInput {
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetWebhookEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/webhook_endpoints",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetWebhookEndpointsInput>;

// Output Schema
export interface GetWebhookEndpointsOutput {
  data: {
    api_version: string | null;
    application: string | null;
    created: number;
    description: string | null;
    enabled_events: string[];
    id: string;
    livemode: boolean;
    metadata: Record<string, string>;
    object: "webhook_endpoint";
    secret?: Redacted.Redacted<string>;
    status: string;
    url: string;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetWebhookEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        api_version: Schema.NullOr(Schema.String),
        application: Schema.NullOr(Schema.String),
        created: Schema.Number,
        description: Schema.NullOr(Schema.String),
        enabled_events: Schema.Array(Schema.String),
        id: Schema.String,
        livemode: Schema.Boolean,
        metadata: Schema.Record(Schema.String, Schema.String),
        object: Schema.Literals(["webhook_endpoint"]),
        secret: Schema.optional(SensitiveOutputString),
        status: Schema.String,
        url: Schema.String,
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetWebhookEndpointsOutput>;

// The operation
/**
 * List all webhook endpoints
 *
 * <p>Returns a list of your webhook endpoints.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetWebhookEndpoints = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetWebhookEndpointsInput,
  outputSchema: GetWebhookEndpointsOutput,
}));
