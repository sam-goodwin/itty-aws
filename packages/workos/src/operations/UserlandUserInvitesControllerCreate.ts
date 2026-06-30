import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface UserlandUserInvitesControllerCreateInput {
  email?: string;
  organization_id?: string;
  role_slug?: string;
  expires_in_days?: number;
  inviter_user_id?: string;
  locale?:
    | "af"
    | "am"
    | "ar"
    | "bg"
    | "bn"
    | "bs"
    | "ca"
    | "cs"
    | "da"
    | "de"
    | "de-DE"
    | "el"
    | "en"
    | "en-AU"
    | "en-CA"
    | "en-GB"
    | "en-US"
    | "es"
    | "es-419"
    | "es-ES"
    | "es-US"
    | "et"
    | "fa"
    | "fi"
    | "fil"
    | "fr"
    | "fr-BE"
    | "fr-CA"
    | "fr-FR"
    | "fy"
    | "gl"
    | "gu"
    | "ha"
    | "he"
    | "hi"
    | "hr"
    | "hu"
    | "hy"
    | "id"
    | "is"
    | "it"
    | "it-IT"
    | "ja"
    | "jv"
    | "ka"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "lt"
    | "lv"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "my"
    | "nb"
    | "ne"
    | "nl"
    | "nl-BE"
    | "nl-NL"
    | "nn"
    | "no"
    | "pa"
    | "pl"
    | "pt"
    | "pt-BR"
    | "pt-PT"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sq"
    | "sr"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "th"
    | "tr"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "zh"
    | "zh-CN"
    | "zh-HK"
    | "zh-TW"
    | "zu";
}
export const UserlandUserInvitesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    role_slug: Schema.optional(Schema.String),
    expires_in_days: Schema.optional(Schema.Number),
    inviter_user_id: Schema.optional(Schema.String),
    locale: Schema.optional(
      Schema.Literals([
        "af",
        "am",
        "ar",
        "bg",
        "bn",
        "bs",
        "ca",
        "cs",
        "da",
        "de",
        "de-DE",
        "el",
        "en",
        "en-AU",
        "en-CA",
        "en-GB",
        "en-US",
        "es",
        "es-419",
        "es-ES",
        "es-US",
        "et",
        "fa",
        "fi",
        "fil",
        "fr",
        "fr-BE",
        "fr-CA",
        "fr-FR",
        "fy",
        "gl",
        "gu",
        "ha",
        "he",
        "hi",
        "hr",
        "hu",
        "hy",
        "id",
        "is",
        "it",
        "it-IT",
        "ja",
        "jv",
        "ka",
        "kk",
        "km",
        "kn",
        "ko",
        "lt",
        "lv",
        "mk",
        "ml",
        "mn",
        "mr",
        "ms",
        "my",
        "nb",
        "ne",
        "nl",
        "nl-BE",
        "nl-NL",
        "nn",
        "no",
        "pa",
        "pl",
        "pt",
        "pt-BR",
        "pt-PT",
        "ro",
        "ru",
        "sk",
        "sl",
        "sq",
        "sr",
        "sv",
        "sw",
        "ta",
        "te",
        "th",
        "tr",
        "uk",
        "ur",
        "uz",
        "vi",
        "zh",
        "zh-CN",
        "zh-HK",
        "zh-TW",
        "zu",
      ]),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/invitations" }),
  ) as unknown as Schema.Codec<UserlandUserInvitesControllerCreateInput>;

// Output Schema
export interface UserlandUserInvitesControllerCreateOutput {
  object?: string;
  id?: string;
  email?: string;
  state?: "pending" | "accepted" | "expired" | "revoked";
  accepted_at?: string | null;
  revoked_at?: string | null;
  expires_at?: string;
  organization_id?: string | null;
  inviter_user_id?: string | null;
  accepted_user_id?: string | null;
  role_slug?: string | null;
  created_at?: string;
  updated_at?: string;
  token?: string;
  accept_invitation_url?: string;
}
export const UserlandUserInvitesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals(["pending", "accepted", "expired", "revoked"]),
    ),
    accepted_at: Schema.optional(Schema.NullOr(Schema.String)),
    revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
    expires_at: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    inviter_user_id: Schema.optional(Schema.NullOr(Schema.String)),
    accepted_user_id: Schema.optional(Schema.NullOr(Schema.String)),
    role_slug: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    accept_invitation_url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UserlandUserInvitesControllerCreateOutput>;

// The operation
/**
 * Send an invitation
 *
 * Sends an invitation email to the recipient.
 */
export const UserlandUserInvitesControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserInvitesControllerCreateInput,
    outputSchema: UserlandUserInvitesControllerCreateOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
