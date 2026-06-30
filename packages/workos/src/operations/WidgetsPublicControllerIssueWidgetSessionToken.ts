import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface WidgetsPublicControllerIssueWidgetSessionTokenInput {
  organization_id?: string;
  user_id?: string;
  scopes?: (
    | "widgets:users-table:manage"
    | "widgets:domain-verification:manage"
    | "widgets:sso:manage"
    | "widgets:api-keys:manage"
    | "widgets:dsync:manage"
    | "widgets:audit-log-streaming:manage"
    | "widgets:pipes:manage"
  )[];
}
export const WidgetsPublicControllerIssueWidgetSessionTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
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
          "widgets:pipes:manage",
        ]),
      ),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/widgets/token" }),
  ) as unknown as Schema.Codec<WidgetsPublicControllerIssueWidgetSessionTokenInput>;

// Output Schema
export interface WidgetsPublicControllerIssueWidgetSessionTokenOutput {
  token?: string;
}
export const WidgetsPublicControllerIssueWidgetSessionTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WidgetsPublicControllerIssueWidgetSessionTokenOutput>;

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
