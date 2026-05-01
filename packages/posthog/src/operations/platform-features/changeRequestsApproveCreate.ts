import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ChangeRequestsApproveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    action_key: Schema.optional(Schema.String),
    action_version: Schema.optional(Schema.Number),
    resource_type: Schema.optional(Schema.String),
    resource_id: Schema.optional(Schema.NullOr(Schema.String)),
    intent: Schema.optional(Schema.Unknown),
    intent_display: Schema.optional(Schema.Unknown),
    policy_snapshot: Schema.optional(Schema.Unknown),
    validation_status: Schema.optional(
      Schema.Literals(["valid", "invalid", "expired", "stale"]),
    ),
    validation_errors: Schema.optional(Schema.NullOr(Schema.Unknown)),
    validated_at: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.optional(
      Schema.Literals([
        "pending",
        "approved",
        "applied",
        "rejected",
        "expired",
        "failed",
      ]),
    ),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    applied_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    expires_at: Schema.optional(Schema.String),
    applied_at: Schema.optional(Schema.NullOr(Schema.String)),
    apply_error: Schema.optional(Schema.String),
    result_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    approvals: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    can_approve: Schema.optional(Schema.Boolean),
    can_cancel: Schema.optional(Schema.Boolean),
    is_requester: Schema.optional(Schema.Boolean),
    user_decision: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/change_requests/{id}/approve/",
    }),
  );
export type ChangeRequestsApproveCreateInput =
  typeof ChangeRequestsApproveCreateInput.Type;

// Output Schema
export const ChangeRequestsApproveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    action_key: Schema.optional(Schema.String),
    action_version: Schema.optional(Schema.Number),
    resource_type: Schema.optional(Schema.String),
    resource_id: Schema.optional(Schema.NullOr(Schema.String)),
    intent: Schema.optional(Schema.Unknown),
    intent_display: Schema.optional(Schema.Unknown),
    policy_snapshot: Schema.optional(Schema.Unknown),
    validation_status: Schema.optional(
      Schema.Literals(["valid", "invalid", "expired", "stale"]),
    ),
    validation_errors: Schema.optional(Schema.NullOr(Schema.Unknown)),
    validated_at: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.optional(
      Schema.Literals([
        "pending",
        "approved",
        "applied",
        "rejected",
        "expired",
        "failed",
      ]),
    ),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    applied_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    expires_at: Schema.optional(Schema.String),
    applied_at: Schema.optional(Schema.NullOr(Schema.String)),
    apply_error: Schema.optional(Schema.String),
    result_data: Schema.optional(Schema.NullOr(Schema.Unknown)),
    approvals: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    can_approve: Schema.optional(Schema.Boolean),
    can_cancel: Schema.optional(Schema.Boolean),
    is_requester: Schema.optional(Schema.Boolean),
    user_decision: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ChangeRequestsApproveCreateOutput =
  typeof ChangeRequestsApproveCreateOutput.Type;

// The operation
/**
 * Approve a change request.
 * If quorum is reached, automatically applies the change immediately.
 *
 * @param id - A UUID string identifying this change request.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const changeRequestsApproveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ChangeRequestsApproveCreateInput,
    outputSchema: ChangeRequestsApproveCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
