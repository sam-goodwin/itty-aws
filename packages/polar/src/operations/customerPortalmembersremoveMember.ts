import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const CustomerPortalmembersremoveMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/customer-portal/members/{id}" }),
  );
export type CustomerPortalmembersremoveMemberInput =
  typeof CustomerPortalmembersremoveMemberInput.Type;

// Output Schema
export const CustomerPortalmembersremoveMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomerPortalmembersremoveMemberOutput =
  typeof CustomerPortalmembersremoveMemberOutput.Type;

// The operation
/**
 * Remove Member
 *
 * Remove a member from the team.
 * Only available to owners and billing managers of team customers.
 * Rules:
 * - Cannot remove yourself
 * - Cannot remove the only owner
 */
export const customerPortalmembersremoveMember =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalmembersremoveMemberInput,
    outputSchema: CustomerPortalmembersremoveMemberOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
