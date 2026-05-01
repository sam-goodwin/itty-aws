import * as Schema from "effect/Schema";
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
    organization_name: Schema.String,
    inviter: Schema.NullOr(
      Schema.Struct({
        name: Schema.String,
        email: Schema.String,
      }),
    ),
    team_members: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        email: Schema.String,
        avatar: Schema.NullOr(Schema.String),
        role: Schema.String,
        last_active: Schema.Literals([
          "today",
          "this_week",
          "inactive",
          "never",
        ]),
      }),
    ),
    recent_activity: Schema.Array(
      Schema.Struct({
        type: Schema.String,
        actor_name: Schema.String,
        entity_name: Schema.String,
        entity_url: Schema.NullOr(Schema.String),
        timestamp: Schema.String,
      }),
    ),
    popular_dashboards: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        name: Schema.String,
        description: Schema.String,
        team_id: Schema.Number,
        url: Schema.String,
      }),
    ),
    products_in_use: Schema.Array(Schema.String),
    suggested_next_steps: Schema.Array(
      Schema.Struct({
        label: Schema.String,
        href: Schema.String,
        reason: Schema.String,
        docs_href: Schema.optional(Schema.String),
        product_key: Schema.optional(Schema.String),
      }),
    ),
    is_organization_first_user: Schema.Boolean,
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
