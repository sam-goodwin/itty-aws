import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTerminalLocationsInput {
  address?: {
    city?: string;
    country: string;
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
  configuration_overrides?: string;
  display_name?: string;
  display_name_kana?: string;
  display_name_kanji?: string;
  expand?: string[];
  metadata?: Record<string, string> | "";
  phone?: string;
}
export const PostTerminalLocationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(
      Schema.Struct({
        city: Schema.optional(Schema.String),
        country: Schema.String,
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
    configuration_overrides: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
    display_name_kana: Schema.optional(Schema.String),
    display_name_kanji: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    phone: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/terminal/locations",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTerminalLocationsInput>;

// Output Schema
export interface PostTerminalLocationsOutput {
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
export const PostTerminalLocationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PostTerminalLocationsOutput>;

// The operation
/**
 * Create a Location
 *
 * <p>Creates a new <code>Location</code> object.
 * For further details, including which address fields are required in each country, see the <a href="/docs/terminal/fleet/locations">Manage locations</a> guide.</p>
 */
export const PostTerminalLocations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostTerminalLocationsInput,
    outputSchema: PostTerminalLocationsOutput,
  }),
);
