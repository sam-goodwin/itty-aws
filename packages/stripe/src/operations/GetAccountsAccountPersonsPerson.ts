import * as Schema from "effect/Schema";
import {
  addressSchema,
  legal_entity_dobSchema,
  legal_entity_person_verificationSchema,
  person_additional_tos_acceptancesSchema,
  person_relationshipSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAccountsAccountPersonsPersonInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    person: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/accounts/{account}/persons/{person}",
      contentType: "form-urlencoded",
    }),
  );
export type GetAccountsAccountPersonsPersonInput =
  typeof GetAccountsAccountPersonsPersonInput.Type;

// Output Schema
export const GetAccountsAccountPersonsPersonOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(Schema.String),
    additional_tos_acceptances: Schema.optional(
      Schema.suspend(() => person_additional_tos_acceptancesSchema),
    ),
    address: Schema.optional(Schema.suspend(() => addressSchema)),
    address_kana: Schema.optional(Schema.Unknown),
    address_kanji: Schema.optional(Schema.Unknown),
    created: Schema.Number,
    dob: Schema.optional(Schema.suspend(() => legal_entity_dobSchema)),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.NullOr(Schema.String)),
    first_name_kana: Schema.optional(Schema.NullOr(Schema.String)),
    first_name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
    full_name_aliases: Schema.optional(Schema.Array(Schema.String)),
    future_requirements: Schema.optional(Schema.Unknown),
    gender: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.String,
    id_number_provided: Schema.optional(Schema.Boolean),
    id_number_secondary_provided: Schema.optional(Schema.Boolean),
    last_name: Schema.optional(Schema.NullOr(Schema.String)),
    last_name_kana: Schema.optional(Schema.NullOr(Schema.String)),
    last_name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
    maiden_name: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    nationality: Schema.optional(Schema.NullOr(Schema.String)),
    object: Schema.Literals(["person"]),
    phone: Schema.optional(Schema.NullOr(Schema.String)),
    political_exposure: Schema.optional(Schema.Literals(["existing", "none"])),
    registered_address: Schema.optional(Schema.suspend(() => addressSchema)),
    relationship: Schema.optional(
      Schema.suspend(() => person_relationshipSchema),
    ),
    requirements: Schema.optional(Schema.Unknown),
    ssn_last_4_provided: Schema.optional(Schema.Boolean),
    us_cfpb_data: Schema.optional(Schema.Unknown),
    verification: Schema.optional(
      Schema.suspend(() => legal_entity_person_verificationSchema),
    ),
  });
export type GetAccountsAccountPersonsPersonOutput =
  typeof GetAccountsAccountPersonsPersonOutput.Type;

// The operation
/**
 * Retrieve a person
 *
 * <p>Retrieves an existing person.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetAccountsAccountPersonsPerson =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetAccountsAccountPersonsPersonInput,
    outputSchema: GetAccountsAccountPersonsPersonOutput,
  }));
