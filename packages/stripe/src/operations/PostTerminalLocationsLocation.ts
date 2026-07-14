import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTerminalLocationsLocationInput {
  location: string;
  address?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
  };
  address_kana?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
    town?: string;
  };
  address_kanji?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
    town?: string;
  };
  configuration_overrides?: string | "";
  display_name?: string | "";
  display_name_kana?: string | "";
  display_name_kanji?: string | "";
  expand?: string[];
  metadata?: Record<string, string> | "";
  phone?: string | "";
}
export const PostTerminalLocationsLocationInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
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
    configuration_overrides: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    display_name: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    display_name_kana: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    display_name_kanji: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    phone: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/terminal/locations/{location}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTerminalLocationsLocationInput>;

// Output Schema
export type PostTerminalLocationsLocationOutput =
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
export const PostTerminalLocationsLocationOutput =
  /*@__PURE__*/ Schema.Union([
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
  ]) as unknown as Schema.Codec<PostTerminalLocationsLocationOutput>;

// The operation
/**
 * Update a Location
 *
 * <p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export const PostTerminalLocationsLocation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostTerminalLocationsLocationInput,
    outputSchema: PostTerminalLocationsLocationOutput,
  }));
