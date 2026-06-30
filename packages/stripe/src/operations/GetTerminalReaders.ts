import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetTerminalReadersInput {
  device_type?:
    | "bbpos_chipper2x"
    | "bbpos_wisepad3"
    | "bbpos_wisepos_e"
    | "mobile_phone_reader"
    | "simulated_stripe_s700"
    | "simulated_stripe_s710"
    | "simulated_verifone_m425"
    | "simulated_verifone_p630"
    | "simulated_verifone_ux700"
    | "simulated_verifone_v660p"
    | "simulated_wisepos_e"
    | "stripe_m2"
    | "stripe_s700"
    | "stripe_s710"
    | "verifone_P400"
    | "verifone_m425"
    | "verifone_p630"
    | "verifone_ux700"
    | "verifone_v660p";
  ending_before?: string;
  expand?: string;
  limit?: number;
  location?: string;
  serial_number?: string;
  starting_after?: string;
  status?: "offline" | "online";
}
export const GetTerminalReadersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device_type: Schema.optional(
      Schema.Literals([
        "bbpos_chipper2x",
        "bbpos_wisepad3",
        "bbpos_wisepos_e",
        "mobile_phone_reader",
        "simulated_stripe_s700",
        "simulated_stripe_s710",
        "simulated_verifone_m425",
        "simulated_verifone_p630",
        "simulated_verifone_ux700",
        "simulated_verifone_v660p",
        "simulated_wisepos_e",
        "stripe_m2",
        "stripe_s700",
        "stripe_s710",
        "verifone_P400",
        "verifone_m425",
        "verifone_p630",
        "verifone_ux700",
        "verifone_v660p",
      ]),
    ),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    location: Schema.optional(Schema.String),
    serial_number: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["offline", "online"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/terminal/readers",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTerminalReadersInput>;

// Output Schema
export interface GetTerminalReadersOutput {
  data: {
    action: unknown;
    device_sw_version: string | null;
    device_type:
      | "bbpos_chipper2x"
      | "bbpos_wisepad3"
      | "bbpos_wisepos_e"
      | "mobile_phone_reader"
      | "simulated_stripe_s700"
      | "simulated_stripe_s710"
      | "simulated_verifone_m425"
      | "simulated_verifone_p630"
      | "simulated_verifone_ux700"
      | "simulated_verifone_v660p"
      | "simulated_wisepos_e"
      | "stripe_m2"
      | "stripe_s700"
      | "stripe_s710"
      | "verifone_P400"
      | "verifone_m425"
      | "verifone_p630"
      | "verifone_ux700"
      | "verifone_v660p";
    id: string;
    ip_address: string | null;
    label: string;
    last_seen_at: number | null;
    livemode: boolean;
    location:
      | string
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
      | null;
    metadata: Record<string, string>;
    object: "terminal.reader";
    serial_number: string;
    status: "offline" | "online" | null;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetTerminalReadersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        action: Schema.Unknown,
        device_sw_version: Schema.NullOr(Schema.String),
        device_type: Schema.Literals([
          "bbpos_chipper2x",
          "bbpos_wisepad3",
          "bbpos_wisepos_e",
          "mobile_phone_reader",
          "simulated_stripe_s700",
          "simulated_stripe_s710",
          "simulated_verifone_m425",
          "simulated_verifone_p630",
          "simulated_verifone_ux700",
          "simulated_verifone_v660p",
          "simulated_wisepos_e",
          "stripe_m2",
          "stripe_s700",
          "stripe_s710",
          "verifone_P400",
          "verifone_m425",
          "verifone_p630",
          "verifone_ux700",
          "verifone_v660p",
        ]),
        id: Schema.String,
        ip_address: Schema.NullOr(Schema.String),
        label: Schema.String,
        last_seen_at: Schema.NullOr(Schema.Number),
        livemode: Schema.Boolean,
        location: Schema.NullOr(
          Schema.Union([
            Schema.String,
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
          ]),
        ),
        metadata: Schema.Record(Schema.String, Schema.String),
        object: Schema.Literals(["terminal.reader"]),
        serial_number: Schema.String,
        status: Schema.NullOr(Schema.Literals(["offline", "online"])),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetTerminalReadersOutput>;

// The operation
/**
 * List all Readers
 *
 * <p>Returns a list of <code>Reader</code> objects.</p>
 *
 * @param device_type - Filters readers by device type
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param location - A location ID to filter the response list to only readers at the specific location
 * @param serial_number - Filters readers by serial number
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - A status filter to filter readers to only offline or online readers
 */
export const GetTerminalReaders = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTerminalReadersInput,
  outputSchema: GetTerminalReadersOutput,
}));
