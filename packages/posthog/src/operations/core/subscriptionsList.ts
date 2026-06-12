import * as Schema from "effect/Schema";
import { SubscriptionSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SubscriptionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    created_by: Schema.optional(Schema.String),
    dashboard: Schema.optional(Schema.Number),
    insight: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ordering: Schema.optional(Schema.String),
    resource_type: Schema.optional(Schema.Literals(["dashboard", "insight"])),
    search: Schema.optional(Schema.String),
    target_type: Schema.optional(
      Schema.Literals(["email", "slack", "webhook"]),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/subscriptions/" }),
);
export type SubscriptionsListInput = typeof SubscriptionsListInput.Type;

// Output Schema
export const SubscriptionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => SubscriptionSchema)),
    ),
  });
export type SubscriptionsListOutput = typeof SubscriptionsListOutput.Type;

// The operation
/**
 *
 * @param created_by - Filter by creator user UUID.
 * @param dashboard - Filter by dashboard ID.
 * @param insight - Filter by insight ID.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param ordering - Which field to use when ordering the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param resource_type - Filter by subscription resource: insight vs dashboard export.
 * @param search - A search term.
 * @param target_type - Filter by delivery channel (email, Slack, or webhook).
 */
export const subscriptionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionsListInput,
  outputSchema: SubscriptionsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
