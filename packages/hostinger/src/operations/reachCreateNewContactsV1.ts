import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ReachCreateNewContactsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileUuid: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    surname: Schema.optional(Schema.NullOr(Schema.String)),
    phone: Schema.optional(Schema.NullOr(Schema.String)),
    note: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/reach/v1/profiles/{profileUuid}/contacts",
    }),
  );
export type ReachCreateNewContactsV1Input =
  typeof ReachCreateNewContactsV1Input.Type;

// Output Schema
export const ReachCreateNewContactsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type ReachCreateNewContactsV1Output =
  typeof ReachCreateNewContactsV1Output.Type;

// The operation
/**
 * Create new contacts
 *
 * Create a new contact in the email marketing system.
 * This endpoint allows you to create a new contact with basic information like name, email, and surname.
 * If double opt-in is enabled, the contact will be created with a pending status
 * and a confirmation email will be sent.
 *
 * @param profileUuid - Profile uuid parameter
 */
export const reachCreateNewContactsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReachCreateNewContactsV1Input,
    outputSchema: ReachCreateNewContactsV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
