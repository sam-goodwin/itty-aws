import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString, SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostTerminalConfigurationsConfigurationInput {
  configuration: string;
  bbpos_wisepad3?: { splashscreen?: string | "" } | "";
  bbpos_wisepos_e?: { splashscreen?: string | "" } | "";
  cellular?: { enabled: boolean } | "";
  expand?: string[];
  name?: string;
  offline?: { enabled: boolean } | "";
  reboot_window?: { end_hour: number; start_hour: number } | "";
  stripe_s700?: { splashscreen?: string | "" } | "";
  stripe_s710?: { splashscreen?: string | "" } | "";
  tipping?:
    | {
        aed?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        aud?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        cad?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        chf?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        czk?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        dkk?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        eur?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        gbp?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        gip?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        hkd?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        huf?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        jpy?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        mxn?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        myr?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        nok?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        nzd?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        pln?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        ron?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        sek?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        sgd?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
        usd?: {
          fixed_amounts?: number[];
          percentages?: number[];
          smart_tip_threshold?: number;
        };
      }
    | "";
  verifone_m425?: { splashscreen?: string | "" } | "";
  verifone_p400?: { splashscreen?: string | "" } | "";
  verifone_p630?: { splashscreen?: string | "" } | "";
  verifone_ux700?: { splashscreen?: string | "" } | "";
  verifone_v660p?: { splashscreen?: string | "" } | "";
  wifi?:
    | {
        enterprise_eap_peap?: {
          ca_certificate_file?: string;
          password: string | Redacted.Redacted<string>;
          ssid: string;
          username: string;
        };
        enterprise_eap_tls?: {
          ca_certificate_file?: string;
          client_certificate_file: string;
          private_key_file: string;
          private_key_file_password?: string | Redacted.Redacted<string>;
          ssid: string;
        };
        personal_psk?: {
          password: string | Redacted.Redacted<string>;
          ssid: string;
        };
        type: "enterprise_eap_peap" | "enterprise_eap_tls" | "personal_psk";
      }
    | "";
}
export const PostTerminalConfigurationsConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    configuration: Schema.String.pipe(T.PathParam()),
    bbpos_wisepad3: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    bbpos_wisepos_e: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    cellular: Schema.optional(
      Schema.Union([
        Schema.Struct({
          enabled: Schema.Boolean,
        }),
        Schema.Literals([""]),
      ]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    offline: Schema.optional(
      Schema.Union([
        Schema.Struct({
          enabled: Schema.Boolean,
        }),
        Schema.Literals([""]),
      ]),
    ),
    reboot_window: Schema.optional(
      Schema.Union([
        Schema.Struct({
          end_hour: Schema.Number,
          start_hour: Schema.Number,
        }),
        Schema.Literals([""]),
      ]),
    ),
    stripe_s700: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    stripe_s710: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    tipping: Schema.optional(Schema.Unknown),
    verifone_m425: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    verifone_p400: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    verifone_p630: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    verifone_ux700: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    verifone_v660p: Schema.optional(
      Schema.Union([
        Schema.Struct({
          splashscreen: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    wifi: Schema.optional(
      Schema.Union([
        Schema.Struct({
          enterprise_eap_peap: Schema.optional(
            Schema.Struct({
              ca_certificate_file: Schema.optional(Schema.String),
              password: SensitiveString,
              ssid: Schema.String,
              username: Schema.String,
            }),
          ),
          enterprise_eap_tls: Schema.optional(
            Schema.Struct({
              ca_certificate_file: Schema.optional(Schema.String),
              client_certificate_file: Schema.String,
              private_key_file: Schema.String,
              private_key_file_password: Schema.optional(SensitiveString),
              ssid: Schema.String,
            }),
          ),
          personal_psk: Schema.optional(
            Schema.Struct({
              password: SensitiveString,
              ssid: Schema.String,
            }),
          ),
          type: Schema.Literals([
            "enterprise_eap_peap",
            "enterprise_eap_tls",
            "personal_psk",
          ]),
        }),
        Schema.Literals([""]),
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/terminal/configurations/{configuration}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTerminalConfigurationsConfigurationInput>;

// Output Schema
export type PostTerminalConfigurationsConfigurationOutput = unknown;
export const PostTerminalConfigurationsConfigurationOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<PostTerminalConfigurationsConfigurationOutput>;

// The operation
/**
 * Update a Configuration
 *
 * <p>Updates a new <code>Configuration</code> object.</p>
 */
export const PostTerminalConfigurationsConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostTerminalConfigurationsConfigurationInput,
    outputSchema: PostTerminalConfigurationsConfigurationOutput,
  }));
