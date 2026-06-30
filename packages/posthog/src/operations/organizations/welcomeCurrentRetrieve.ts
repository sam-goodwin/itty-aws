import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WelcomeCurrentRetrieveInput {
  organization_id: string;
}
export const WelcomeCurrentRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/welcome/current/",
    }),
  ) as unknown as Schema.Codec<WelcomeCurrentRetrieveInput>;

// Output Schema
export interface WelcomeCurrentRetrieveOutput {
  organization_name?: string;
  inviter?: { name?: string; email?: string } | null;
  team_members?: {
    name?: string;
    email?: string;
    avatar?: string | null;
    role?: string;
    last_active?: "today" | "this_week" | "inactive" | "never";
  }[];
  recent_activity?: {
    type?: string;
    actor_name?: string;
    entity_name?: string;
    entity_url?: string | null;
    timestamp?: string;
  }[];
  popular_dashboards?: {
    id?: number;
    name?: string;
    description?: string;
    team_id?: number;
    url?: string;
  }[];
  products_in_use?: string[];
  suggested_next_steps?: {
    label?: string;
    href?: string;
    reason?: string;
    docs_href?: string;
    product_key?: string;
  }[];
  is_organization_first_user?: boolean;
}
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
  }) as unknown as Schema.Codec<WelcomeCurrentRetrieveOutput>;

// The operation
/**
 * Aggregated payload for the invited-user welcome screen.
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const welcomeCurrentRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WelcomeCurrentRetrieveInput,
    outputSchema: WelcomeCurrentRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
