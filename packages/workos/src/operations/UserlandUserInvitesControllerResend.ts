import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserInvitesControllerResendInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
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
    T.Http({
      method: "POST",
      path: "/user_management/invitations/{id}/resend",
    }),
  );
export type UserlandUserInvitesControllerResendInput =
  typeof UserlandUserInvitesControllerResendInput.Type;

// Output Schema
export const UserlandUserInvitesControllerResendOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    email: Schema.String,
    state: Schema.Literals(["pending", "accepted", "expired", "revoked"]),
    accepted_at: Schema.NullOr(Schema.String),
    revoked_at: Schema.NullOr(Schema.String),
    expires_at: Schema.String,
    organization_id: Schema.NullOr(Schema.String),
    inviter_user_id: Schema.NullOr(Schema.String),
    accepted_user_id: Schema.NullOr(Schema.String),
    role_slug: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    token: Schema.String,
    accept_invitation_url: Schema.String,
  });
export type UserlandUserInvitesControllerResendOutput =
  typeof UserlandUserInvitesControllerResendOutput.Type;

// The operation
/**
 * Resend an invitation
 *
 * Resends an invitation email to the recipient. The invitation must be in a pending state.
 *
 * @param id - The unique ID of the invitation.
 */
export const UserlandUserInvitesControllerResend =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserInvitesControllerResendInput,
    outputSchema: UserlandUserInvitesControllerResendOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
