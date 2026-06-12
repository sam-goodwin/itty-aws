import * as Schema from "effect/Schema";
import { bank_accountSchema, cardSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTokensInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.optional(
    Schema.Struct({
      business_type: Schema.optional(
        Schema.Literals([
          "company",
          "government_entity",
          "individual",
          "non_profit",
        ]),
      ),
      company: Schema.optional(
        Schema.Struct({
          address: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
          address_kana: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              town: Schema.optional(Schema.String),
            }),
          ),
          address_kanji: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              town: Schema.optional(Schema.String),
            }),
          ),
          directors_provided: Schema.optional(Schema.Boolean),
          directorship_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          executives_provided: Schema.optional(Schema.Boolean),
          export_license_id: Schema.optional(Schema.String),
          export_purpose_code: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          name_kana: Schema.optional(Schema.String),
          name_kanji: Schema.optional(Schema.String),
          owners_provided: Schema.optional(Schema.Boolean),
          ownership_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          ownership_declaration_shown_and_signed: Schema.optional(
            Schema.Boolean,
          ),
          ownership_exemption_reason: Schema.optional(
            Schema.Literals([
              "",
              "qualified_entity_exceeds_ownership_threshold",
              "qualifies_as_financial_institution",
            ]),
          ),
          phone: Schema.optional(Schema.String),
          registration_date: Schema.optional(Schema.Unknown),
          registration_number: Schema.optional(Schema.String),
          representative_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          structure: Schema.optional(
            Schema.Literals([
              "",
              "free_zone_establishment",
              "free_zone_llc",
              "government_instrumentality",
              "governmental_unit",
              "incorporated_non_profit",
              "incorporated_partnership",
              "limited_liability_partnership",
              "llc",
              "multi_member_llc",
              "private_company",
              "private_corporation",
              "private_partnership",
              "public_company",
              "public_corporation",
              "public_partnership",
              "registered_charity",
              "single_member_llc",
              "sole_establishment",
              "sole_proprietorship",
              "tax_exempt_government_instrumentality",
              "unincorporated_association",
              "unincorporated_non_profit",
              "unincorporated_partnership",
            ]),
          ),
          tax_id: Schema.optional(Schema.String),
          tax_id_registrar: Schema.optional(Schema.String),
          vat_id: Schema.optional(Schema.String),
          verification: Schema.optional(
            Schema.Struct({
              document: Schema.optional(
                Schema.Struct({
                  back: Schema.optional(Schema.String),
                  front: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        }),
      ),
      individual: Schema.optional(
        Schema.Struct({
          address: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
          address_kana: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              town: Schema.optional(Schema.String),
            }),
          ),
          address_kanji: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              town: Schema.optional(Schema.String),
            }),
          ),
          dob: Schema.optional(Schema.Unknown),
          email: Schema.optional(Schema.String),
          first_name: Schema.optional(Schema.String),
          first_name_kana: Schema.optional(Schema.String),
          first_name_kanji: Schema.optional(Schema.String),
          full_name_aliases: Schema.optional(Schema.Unknown),
          gender: Schema.optional(Schema.String),
          id_number: Schema.optional(Schema.String),
          id_number_secondary: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          last_name_kana: Schema.optional(Schema.String),
          last_name_kanji: Schema.optional(Schema.String),
          maiden_name: Schema.optional(Schema.String),
          metadata: Schema.optional(Schema.Unknown),
          phone: Schema.optional(Schema.String),
          political_exposure: Schema.optional(
            Schema.Literals(["existing", "none"]),
          ),
          registered_address: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
          relationship: Schema.optional(
            Schema.Struct({
              director: Schema.optional(Schema.Boolean),
              executive: Schema.optional(Schema.Boolean),
              owner: Schema.optional(Schema.Boolean),
              percent_ownership: Schema.optional(Schema.Unknown),
              title: Schema.optional(Schema.String),
            }),
          ),
          ssn_last_4: Schema.optional(Schema.String),
          verification: Schema.optional(
            Schema.Struct({
              additional_document: Schema.optional(
                Schema.Struct({
                  back: Schema.optional(Schema.String),
                  front: Schema.optional(Schema.String),
                }),
              ),
              document: Schema.optional(
                Schema.Struct({
                  back: Schema.optional(Schema.String),
                  front: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        }),
      ),
      tos_shown_and_accepted: Schema.optional(Schema.Boolean),
    }),
  ),
  bank_account: Schema.optional(
    Schema.Struct({
      account_holder_name: Schema.optional(Schema.String),
      account_holder_type: Schema.optional(
        Schema.Literals(["company", "individual"]),
      ),
      account_number: Schema.String,
      account_type: Schema.optional(
        Schema.Literals(["checking", "futsu", "savings", "toza"]),
      ),
      country: Schema.String,
      currency: Schema.optional(Schema.String),
      payment_method: Schema.optional(Schema.String),
      routing_number: Schema.optional(Schema.String),
    }),
  ),
  card: Schema.optional(Schema.Unknown),
  customer: Schema.optional(Schema.String),
  cvc_update: Schema.optional(
    Schema.Struct({
      cvc: Schema.String,
    }),
  ),
  expand: Schema.optional(Schema.Array(Schema.String)),
  person: Schema.optional(
    Schema.Struct({
      additional_tos_acceptances: Schema.optional(
        Schema.Struct({
          account: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
      address: Schema.optional(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
        }),
      ),
      address_kana: Schema.optional(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
          town: Schema.optional(Schema.String),
        }),
      ),
      address_kanji: Schema.optional(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
          town: Schema.optional(Schema.String),
        }),
      ),
      dob: Schema.optional(Schema.Unknown),
      documents: Schema.optional(
        Schema.Struct({
          company_authorization: Schema.optional(
            Schema.Struct({
              files: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
          passport: Schema.optional(
            Schema.Struct({
              files: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
          visa: Schema.optional(
            Schema.Struct({
              files: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        }),
      ),
      email: Schema.optional(Schema.String),
      first_name: Schema.optional(Schema.String),
      first_name_kana: Schema.optional(Schema.String),
      first_name_kanji: Schema.optional(Schema.String),
      full_name_aliases: Schema.optional(Schema.Unknown),
      gender: Schema.optional(Schema.String),
      id_number: Schema.optional(Schema.String),
      id_number_secondary: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      last_name_kana: Schema.optional(Schema.String),
      last_name_kanji: Schema.optional(Schema.String),
      maiden_name: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Unknown),
      nationality: Schema.optional(Schema.String),
      phone: Schema.optional(Schema.String),
      political_exposure: Schema.optional(
        Schema.Literals(["existing", "none"]),
      ),
      registered_address: Schema.optional(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
        }),
      ),
      relationship: Schema.optional(
        Schema.Struct({
          authorizer: Schema.optional(Schema.Boolean),
          director: Schema.optional(Schema.Boolean),
          executive: Schema.optional(Schema.Boolean),
          legal_guardian: Schema.optional(Schema.Boolean),
          owner: Schema.optional(Schema.Boolean),
          percent_ownership: Schema.optional(Schema.Unknown),
          representative: Schema.optional(Schema.Boolean),
          title: Schema.optional(Schema.String),
        }),
      ),
      ssn_last_4: Schema.optional(Schema.String),
      us_cfpb_data: Schema.optional(
        Schema.Struct({
          ethnicity_details: Schema.optional(
            Schema.Struct({
              ethnicity: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "cuban",
                    "hispanic_or_latino",
                    "mexican",
                    "not_hispanic_or_latino",
                    "other_hispanic_or_latino",
                    "prefer_not_to_answer",
                    "puerto_rican",
                  ]),
                ),
              ),
              ethnicity_other: Schema.optional(Schema.String),
            }),
          ),
          race_details: Schema.optional(
            Schema.Struct({
              race: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "african_american",
                    "american_indian_or_alaska_native",
                    "asian",
                    "asian_indian",
                    "black_or_african_american",
                    "chinese",
                    "ethiopian",
                    "filipino",
                    "guamanian_or_chamorro",
                    "haitian",
                    "jamaican",
                    "japanese",
                    "korean",
                    "native_hawaiian",
                    "native_hawaiian_or_other_pacific_islander",
                    "nigerian",
                    "other_asian",
                    "other_black_or_african_american",
                    "other_pacific_islander",
                    "prefer_not_to_answer",
                    "samoan",
                    "somali",
                    "vietnamese",
                    "white",
                  ]),
                ),
              ),
              race_other: Schema.optional(Schema.String),
            }),
          ),
          self_identified_gender: Schema.optional(Schema.String),
        }),
      ),
      verification: Schema.optional(
        Schema.Struct({
          additional_document: Schema.optional(
            Schema.Struct({
              back: Schema.optional(Schema.String),
              front: Schema.optional(Schema.String),
            }),
          ),
          document: Schema.optional(
            Schema.Struct({
              back: Schema.optional(Schema.String),
              front: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
  pii: Schema.optional(
    Schema.Struct({
      id_number: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/tokens",
    contentType: "form-urlencoded",
  }),
);
export type PostTokensInput = typeof PostTokensInput.Type;

// Output Schema
export const PostTokensOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bank_account: Schema.optional(Schema.suspend(() => bank_accountSchema)),
  card: Schema.optional(Schema.suspend(() => cardSchema)),
  client_ip: Schema.NullOr(Schema.String),
  created: Schema.Number,
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["token"]),
  type: Schema.String,
  used: Schema.Boolean,
});
export type PostTokensOutput = typeof PostTokensOutput.Type;

// The operation
/**
 * Create a CVC update token
 *
 * <p>Creates a single-use token that represents a bank account’s details.
 * You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a <a href="#accounts">connected account</a> where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a> is <code>application</code>, which includes Custom accounts.</p>
 */
export const PostTokens = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostTokensInput,
  outputSchema: PostTokensOutput,
}));
