import * as Schema from "effect/Schema";
import {
  _WelcomePopularDashboardSchema,
  _WelcomeRecentActivitySchema,
  _WelcomeSuggestedStepSchema,
  _WelcomeTeamMemberSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WelcomeCurrentRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/welcome/current/",
    }),
  );
export type WelcomeCurrentRetrieveInput =
  typeof WelcomeCurrentRetrieveInput.Type;

// Output Schema
export const WelcomeCurrentRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_name: Schema.optional(Schema.String),
    inviter: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
        }),
      ),
    ),
    team_members: Schema.optional(
      Schema.Array(Schema.suspend(() => _WelcomeTeamMemberSchema)),
    ),
    recent_activity: Schema.optional(
      Schema.Array(Schema.suspend(() => _WelcomeRecentActivitySchema)),
    ),
    popular_dashboards: Schema.optional(
      Schema.Array(Schema.suspend(() => _WelcomePopularDashboardSchema)),
    ),
    products_in_use: Schema.optional(Schema.Array(Schema.String)),
    suggested_next_steps: Schema.optional(
      Schema.Array(Schema.suspend(() => _WelcomeSuggestedStepSchema)),
    ),
    is_organization_first_user: Schema.optional(Schema.Boolean),
  });
export type WelcomeCurrentRetrieveOutput =
  typeof WelcomeCurrentRetrieveOutput.Type;

// The operation
/**
 * Aggregated payload for the invited-user welcome screen.
 */
export const welcomeCurrentRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WelcomeCurrentRetrieveInput,
    outputSchema: WelcomeCurrentRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
