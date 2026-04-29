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
export const PortalSessionsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    return_url: Schema.optional(Schema.String),
    success_url: Schema.optional(Schema.String),
    organization: Schema.String,
    intent: Schema.optional(
      Schema.Literals([
        "sso",
        "dsync",
        "audit_logs",
        "log_streams",
        "domain_verification",
        "certificate_renewal",
        "bring_your_own_key",
      ]),
    ),
    intent_options: Schema.optional(
      Schema.Struct({
        sso: Schema.optional(
          Schema.Struct({
            bookmark_slug: Schema.optional(Schema.String),
            provider_type: Schema.optional(Schema.String),
          }),
        ),
        domain_verification: Schema.optional(
          Schema.Struct({
            domain_name: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    it_contact_emails: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/portal/generate_link" }));
export type PortalSessionsControllerCreateInput =
  typeof PortalSessionsControllerCreateInput.Type;

// Output Schema
export const PortalSessionsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    link: Schema.String,
  });
export type PortalSessionsControllerCreateOutput =
  typeof PortalSessionsControllerCreateOutput.Type;

// The operation
/**
 * Generate a Portal Link
 *
 * Generate a Portal Link scoped to an Organization.
 */
export const PortalSessionsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PortalSessionsControllerCreateInput,
    outputSchema: PortalSessionsControllerCreateOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
