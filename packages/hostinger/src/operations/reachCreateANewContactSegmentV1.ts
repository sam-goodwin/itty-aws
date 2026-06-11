import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ReachCreateANewContactSegmentV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    conditions: Schema.Array(
      Schema.Struct({
        operator: Schema.optional(
          Schema.Literals([
            "equals",
            "not_equals",
            "contains",
            "not_contains",
            "gte",
            "lte",
            "exists",
            "within_last_days",
            "not_within_last_days",
            "older_than_days",
            "processed",
            "not_processed",
            "delivered",
            "not_delivered",
            "dropped",
            "not_dropped",
            "bounced",
            "not_bounced",
            "opened",
            "not_opened",
            "clicked",
            "not_clicked",
            "unsubscribed",
            "not_unsubscribed",
          ]),
        ),
        value: Schema.optional(Schema.Unknown),
        attribute: Schema.optional(
          Schema.Literals([
            "note",
            "comment",
            "domain",
            "integration",
            "source",
            "name",
            "surname",
            "email",
            "subscribed_at",
            "unsubscribed_at",
            "subscription_status",
            "processed",
            "opened",
            "clicked",
            "delivered",
            "bounced",
            "unsubscribed",
            "dropped",
            "tag",
            "campaigns",
          ]),
        ),
      }),
    ),
    logic: Schema.Literals(["AND", "OR"]),
  }).pipe(
    T.Http({ method: "POST", path: "/api/reach/v1/segmentation/segments" }),
  );
export type ReachCreateANewContactSegmentV1Input =
  typeof ReachCreateANewContactSegmentV1Input.Type;

// Output Schema
export const ReachCreateANewContactSegmentV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    query: Schema.optional(Schema.Array(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type ReachCreateANewContactSegmentV1Output =
  typeof ReachCreateANewContactSegmentV1Output.Type;

// The operation
/**
 * Create a new contact segment
 *
 * Create a new contact segment.
 * This endpoint allows creating a new contact segment that can be used to organize contacts.
 * The segment can be configured with specific criteria like email, name, subscription status, etc.
 */
export const reachCreateANewContactSegmentV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReachCreateANewContactSegmentV1Input,
    outputSchema: ReachCreateANewContactSegmentV1Output,
    errors: [UnprocessableEntity] as const,
  }));
