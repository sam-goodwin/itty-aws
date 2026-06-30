import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1ListAllSsoProviderInput {
  ref: string;
}
export const V1ListAllSsoProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/config/auth/sso/providers",
    }),
  ) as unknown as Schema.Codec<V1ListAllSsoProviderInput>;

// Output Schema
export interface V1ListAllSsoProviderOutput {
  items: {
    id: string;
    saml?: {
      id: string;
      entity_id: string;
      metadata_url?: string;
      metadata_xml?: string;
      attribute_mapping?: {
        keys: Record<
          string,
          {
            name?: string;
            names?: string[];
            default?: {} | number | string | boolean;
            array?: boolean;
          }
        >;
      };
      name_id_format?:
        | "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
        | "urn:oasis:names:tc:SAML:2.0:nameid-format:transient"
        | "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
        | "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent";
    };
    domains?: {
      id: string;
      domain?: string;
      created_at?: string;
      updated_at?: string;
    }[];
    created_at?: string;
    updated_at?: string;
  }[];
}
export const V1ListAllSsoProviderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        saml: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            entity_id: Schema.String,
            metadata_url: Schema.optional(Schema.String),
            metadata_xml: Schema.optional(Schema.String),
            attribute_mapping: Schema.optional(
              Schema.Struct({
                keys: Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    names: Schema.optional(Schema.Array(Schema.String)),
                    default: Schema.optional(
                      Schema.Union([
                        Schema.Struct({}),
                        Schema.Number,
                        Schema.String,
                        Schema.Boolean,
                      ]),
                    ),
                    array: Schema.optional(Schema.Boolean),
                  }),
                ),
              }),
            ),
            name_id_format: Schema.optional(
              Schema.Literals([
                "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified",
                "urn:oasis:names:tc:SAML:2.0:nameid-format:transient",
                "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress",
                "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent",
              ]),
            ),
          }),
        ),
        domains: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              domain: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              updated_at: Schema.optional(Schema.String),
            }),
          ),
        ),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<V1ListAllSsoProviderOutput>;

// The operation
/**
 * Lists all SSO providers
 *
 * @param ref - Project ref
 */
export const v1ListAllSsoProvider = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1ListAllSsoProviderInput,
    outputSchema: V1ListAllSsoProviderOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
