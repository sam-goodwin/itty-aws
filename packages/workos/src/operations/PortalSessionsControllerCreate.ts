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
export interface PortalSessionsControllerCreateInput {
  return_url?: string;
  success_url?: string;
  organization?: string;
  intent?:
    | "sso"
    | "dsync"
    | "audit_logs"
    | "log_streams"
    | "domain_verification"
    | "certificate_renewal"
    | "bring_your_own_key";
  it_contact_emails?: ReadonlyArray<string>;
}
export const PortalSessionsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    return_url: Schema.optional(Schema.String),
    success_url: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
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
    it_contact_emails: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({ method: "POST", path: "/portal/generate_link" }),
  ) as unknown as Schema.Codec<PortalSessionsControllerCreateInput>;

// Output Schema
export interface PortalSessionsControllerCreateOutput {
  link?: string;
}
export const PortalSessionsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    link: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PortalSessionsControllerCreateOutput>;

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
