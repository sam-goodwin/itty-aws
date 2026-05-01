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
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          avatar: Schema.optional(Schema.NullOr(Schema.String)),
          role: Schema.optional(Schema.String),
          last_active: Schema.optional(
            Schema.Literals(["today", "this_week", "inactive", "never"]),
          ),
        }),
      ),
    ),
    recent_activity: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          actor_name: Schema.optional(Schema.String),
          entity_name: Schema.optional(Schema.String),
          entity_url: Schema.optional(Schema.NullOr(Schema.String)),
          timestamp: Schema.optional(Schema.String),
        }),
      ),
    ),
    popular_dashboards: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          team_id: Schema.optional(Schema.Number),
          url: Schema.optional(Schema.String),
        }),
      ),
    ),
    products_in_use: Schema.optional(Schema.Array(Schema.String)),
    suggested_next_steps: Schema.optional(
      Schema.Array(
        Schema.Struct({
          label: Schema.optional(Schema.String),
          href: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          docs_href: Schema.optional(Schema.String),
          product_key: Schema.optional(Schema.String),
        }),
      ),
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
