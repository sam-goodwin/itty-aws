import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const WidgetsPublicControllerIssueWidgetSessionTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String,
    user_id: Schema.optional(Schema.String),
    scopes: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "widgets:users-table:manage",
          "widgets:domain-verification:manage",
          "widgets:sso:manage",
          "widgets:api-keys:manage",
          "widgets:dsync:manage",
          "widgets:audit-log-streaming:manage",
        ]),
      ),
    ),
  }).pipe(T.Http({ method: "POST", path: "/widgets/token" }));
export type WidgetsPublicControllerIssueWidgetSessionTokenInput =
  typeof WidgetsPublicControllerIssueWidgetSessionTokenInput.Type;

// Output Schema
export const WidgetsPublicControllerIssueWidgetSessionTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  });
export type WidgetsPublicControllerIssueWidgetSessionTokenOutput =
  typeof WidgetsPublicControllerIssueWidgetSessionTokenOutput.Type;

// The operation
/**
 * Generate a widget token
 *
 * Generate a widget token scoped to an organization and user with the specified scopes.
 */
export const WidgetsPublicControllerIssueWidgetSessionToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WidgetsPublicControllerIssueWidgetSessionTokenInput,
    outputSchema: WidgetsPublicControllerIssueWidgetSessionTokenOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
