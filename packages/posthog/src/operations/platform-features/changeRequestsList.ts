import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ChangeRequestsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    action_key: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    requester: Schema.optional(Schema.Number),
    resource_id: Schema.optional(Schema.String),
    resource_type: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/change_requests/",
    }),
  );
export type ChangeRequestsListInput = typeof ChangeRequestsListInput.Type;

// Output Schema
export const ChangeRequestsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        action_key: Schema.String,
        action_version: Schema.Number,
        resource_type: Schema.String,
        resource_id: Schema.NullOr(Schema.String),
        intent: Schema.Unknown,
        intent_display: Schema.Unknown,
        policy_snapshot: Schema.Unknown,
        validation_status: Schema.Literals([
          "valid",
          "invalid",
          "expired",
          "stale",
        ]),
        validation_errors: Schema.NullOr(Schema.Unknown),
        validated_at: Schema.NullOr(Schema.String),
        state: Schema.Literals([
          "pending",
          "approved",
          "applied",
          "rejected",
          "expired",
          "failed",
        ]),
        created_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        applied_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        created_at: Schema.String,
        updated_at: Schema.NullOr(Schema.String),
        expires_at: Schema.String,
        applied_at: Schema.NullOr(Schema.String),
        apply_error: Schema.String,
        result_data: Schema.NullOr(Schema.Unknown),
        approvals: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        can_approve: Schema.Boolean,
        can_cancel: Schema.Boolean,
        is_requester: Schema.Boolean,
        user_decision: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type ChangeRequestsListOutput = typeof ChangeRequestsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param state - Multiple values may be separated by commas.
 */
export const changeRequestsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChangeRequestsListInput,
  outputSchema: ChangeRequestsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
