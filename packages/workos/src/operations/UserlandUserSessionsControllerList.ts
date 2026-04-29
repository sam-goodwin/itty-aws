import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserSessionsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/users/{id}/sessions" }),
  );
export type UserlandUserSessionsControllerListInput =
  typeof UserlandUserSessionsControllerListInput.Type;

// Output Schema
export const UserlandUserSessionsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type UserlandUserSessionsControllerListOutput =
  typeof UserlandUserSessionsControllerListOutput.Type;

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
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 */
export const UserlandUserSessionsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserSessionsControllerListInput,
    outputSchema: UserlandUserSessionsControllerListOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
