import * as Schema from "effect/Schema";
import {
  terminal_configuration_configuration_resource_cellular_configSchema,
  terminal_configuration_configuration_resource_device_type_specific_configSchema,
  terminal_configuration_configuration_resource_offline_configSchema,
  terminal_configuration_configuration_resource_reboot_windowSchema,
  terminal_configuration_configuration_resource_tippingSchema,
  terminal_configuration_configuration_resource_wifi_configSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTerminalConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bbpos_wisepad3: Schema.optional(
      Schema.Struct({
        splashscreen: Schema.optional(Schema.Unknown),
      }),
    ),
    bbpos_wisepos_e: Schema.optional(
      Schema.Struct({
        splashscreen: Schema.optional(Schema.Unknown),
      }),
    ),
    cellular: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    offline: Schema.optional(Schema.Unknown),
    reboot_window: Schema.optional(
      Schema.Struct({
        end_hour: Schema.Number,
        start_hour: Schema.Number,
      }),
    ),
    stripe_s700: Schema.optional(
      Schema.Struct({
        splashscreen: Schema.optional(Schema.Unknown),
      }),
    ),
    stripe_s710: Schema.optional(
      Schema.Struct({
        splashscreen: Schema.optional(Schema.Unknown),
      }),
    ),
    tipping: Schema.optional(Schema.Unknown),
    verifone_p400: Schema.optional(
      Schema.Struct({
        splashscreen: Schema.optional(Schema.Unknown),
      }),
    ),
    wifi: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/terminal/configurations",
      contentType: "form-urlencoded",
    }),
  );
export type PostTerminalConfigurationsInput =
  typeof PostTerminalConfigurationsInput.Type;

// Output Schema
export const PostTerminalConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bbpos_wisepad3: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    bbpos_wisepos_e: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    cellular: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_cellular_configSchema,
      ),
    ),
    id: Schema.String,
    is_account_default: Schema.NullOr(Schema.Boolean),
    livemode: Schema.Boolean,
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["terminal.configuration"]),
    offline: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_offline_configSchema,
      ),
    ),
    reboot_window: Schema.optional(
      Schema.suspend(
        () => terminal_configuration_configuration_resource_reboot_windowSchema,
      ),
    ),
    stripe_s700: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    stripe_s710: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    tipping: Schema.optional(
      Schema.suspend(
        () => terminal_configuration_configuration_resource_tippingSchema,
      ),
    ),
    verifone_p400: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    wifi: Schema.optional(
      Schema.suspend(
        () => terminal_configuration_configuration_resource_wifi_configSchema,
      ),
    ),
  });
export type PostTerminalConfigurationsOutput =
  typeof PostTerminalConfigurationsOutput.Type;

// The operation
/**
 * Create a Configuration
 *
 * <p>Creates a new <code>Configuration</code> object.</p>
 */
export const PostTerminalConfigurations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostTerminalConfigurationsInput,
    outputSchema: PostTerminalConfigurationsOutput,
  }),
);
