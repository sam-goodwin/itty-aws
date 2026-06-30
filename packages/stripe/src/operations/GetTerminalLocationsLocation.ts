import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTerminalLocationsLocationInput {
  location: string;
  expand?: string;
}
export const GetTerminalLocationsLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/terminal/locations/{location}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTerminalLocationsLocationInput>;

// Output Schema
export type GetTerminalLocationsLocationOutput =
  | {
      address: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      };
      address_kana?: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
        town: string | null;
      };
      address_kanji?: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
        town: string | null;
      };
      configuration_overrides?: string;
      display_name: string;
      display_name_kana?: string;
      display_name_kanji?: string;
      id: string;
      livemode: boolean;
      metadata: Record<string, string>;
      object: "terminal.location";
      phone?: string;
    }
  | { deleted: true; id: string; object: "terminal.location" };
export const GetTerminalLocationsLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      address: Schema.Struct({
        city: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        line1: Schema.NullOr(Schema.String),
        line2: Schema.NullOr(Schema.String),
        postal_code: Schema.NullOr(Schema.String),
        state: Schema.NullOr(Schema.String),
      }),
      address_kana: Schema.optional(
        Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
          town: Schema.NullOr(Schema.String),
        }),
      ),
      address_kanji: Schema.optional(
        Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
          town: Schema.NullOr(Schema.String),
        }),
      ),
      configuration_overrides: Schema.optional(Schema.String),
      display_name: Schema.String,
      display_name_kana: Schema.optional(Schema.String),
      display_name_kanji: Schema.optional(Schema.String),
      id: Schema.String,
      livemode: Schema.Boolean,
      metadata: Schema.Record(Schema.String, Schema.String),
      object: Schema.Literals(["terminal.location"]),
      phone: Schema.optional(Schema.String),
    }),
    Schema.Struct({
      deleted: Schema.Literals([true]),
      id: Schema.String,
      object: Schema.Literals(["terminal.location"]),
    }),
  ]) as unknown as Schema.Codec<GetTerminalLocationsLocationOutput>;

// The operation
/**
 * Retrieve a Location
 *
 * <p>Retrieves a <code>Location</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTerminalLocationsLocation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTerminalLocationsLocationInput,
    outputSchema: GetTerminalLocationsLocationOutput,
  }));
