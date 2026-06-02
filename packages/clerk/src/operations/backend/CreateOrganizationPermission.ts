import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const CreateOrganizationPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    key: Schema.String,
    description: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/organization_permissions" }));
export type CreateOrganizationPermissionInput =
  typeof CreateOrganizationPermissionInput.Type;

// Output Schema
export const CreateOrganizationPermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["permission"]),
    id: Schema.String,
    name: Schema.String,
    key: Schema.String,
    description: Schema.String,
    type: Schema.String,
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type CreateOrganizationPermissionOutput =
  typeof CreateOrganizationPermissionOutput.Type;

// The operation
/**
 * Create a new organization permission
 *
 * Creates a new organization permission for the given instance.
 */
export const CreateOrganizationPermission =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateOrganizationPermissionInput,
    outputSchema: CreateOrganizationPermissionOutput,
    errors: [
      BadRequest,
      PaymentRequired,
      NotFound,
      UnprocessableEntity,
    ] as const,
  }));
