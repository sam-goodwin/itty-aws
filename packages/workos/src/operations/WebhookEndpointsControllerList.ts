import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface WebhookEndpointsControllerListInput {
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
}
export const WebhookEndpointsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/webhook_endpoints" }),
  ) as unknown as Schema.Codec<WebhookEndpointsControllerListInput>;

// Output Schema
export interface WebhookEndpointsControllerListOutput {
  object?: string;
  data?: ReadonlyArray<{
    object?: string;
    id?: string;
    endpoint_url?: string;
    secret?: Redacted.Redacted<string>;
    status?: "enabled" | "disabled";
    events?: ReadonlyArray<string>;
    created_at?: string;
    updated_at?: string;
  }>;
  list_metadata?: { before: string | null; after: string | null };
}
export const WebhookEndpointsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          endpoint_url: Schema.optional(Schema.String),
          secret: Schema.optional(SensitiveOutputString),
          status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
          events: Schema.optional(Schema.Array(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WebhookEndpointsControllerListOutput>;

// The operation
/**
 * List Webhook Endpoints
 *
 * Get a list of all of your existing webhook endpoints.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 */
export const WebhookEndpointsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhookEndpointsControllerListInput,
    outputSchema: WebhookEndpointsControllerListOutput,
  }));
