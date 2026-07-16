import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface UserlandUserSessionsControllerListInput {
  id: string;
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
}
export const UserlandUserSessionsControllerListInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/users/{id}/sessions" }),
  ) as unknown as Schema.Codec<UserlandUserSessionsControllerListInput>;

// Output Schema
export interface UserlandUserSessionsControllerListOutput {
  object?: string;
  list_metadata?: { before: string | null; after: string | null };
  data?: ReadonlyArray<{
    object: string;
    id: string;
    impersonator?: { email: string; reason: string | null };
    ip_address: string | null;
    organization_id?: string;
    user_agent: string | null;
    user_id: string;
    auth_method:
      | "cross_app_auth"
      | "external_auth"
      | "impersonation"
      | "magic_code"
      | "migrated_session"
      | "oauth"
      | "passkey"
      | "password"
      | "sso"
      | "unknown";
    status: "active" | "expired" | "revoked";
    expires_at: string;
    ended_at: string | null;
    created_at: string;
    updated_at: string;
  }>;
}
export const UserlandUserSessionsControllerListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.String,
          id: Schema.String,
          impersonator: Schema.optional(
            Schema.Struct({
              email: Schema.String,
              reason: Schema.NullOr(Schema.String),
            }),
          ),
          ip_address: Schema.NullOr(Schema.String),
          organization_id: Schema.optional(Schema.String),
          user_agent: Schema.NullOr(Schema.String),
          user_id: Schema.String,
          auth_method: Schema.Literals([
            "cross_app_auth",
            "external_auth",
            "impersonation",
            "magic_code",
            "migrated_session",
            "oauth",
            "passkey",
            "password",
            "sso",
            "unknown",
          ]),
          status: Schema.Literals(["active", "expired", "revoked"]),
          expires_at: Schema.String,
          ended_at: Schema.NullOr(Schema.String),
          created_at: Schema.String,
          updated_at: Schema.String,
        }),
      ),
    ),
  }) as unknown as Schema.Codec<UserlandUserSessionsControllerListOutput>;

// The operation
/**
 * List sessions
 *
 * Get a list of all active sessions for a specific user.
 *
 * @param id - The ID of the user.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 */
export const UserlandUserSessionsControllerList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserSessionsControllerListInput,
    outputSchema: UserlandUserSessionsControllerListOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
