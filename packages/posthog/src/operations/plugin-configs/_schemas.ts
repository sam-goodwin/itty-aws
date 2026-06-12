import * as Schema from "effect/Schema";

export const PluginLogEntrySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  team_id: Schema.optional(Schema.Number),
  plugin_id: Schema.optional(Schema.Number),
  plugin_config_id: Schema.optional(Schema.Number),
  timestamp: Schema.optional(Schema.String),
  source: Schema.optional(Schema.suspend(() => PluginLogEntrySourceEnumSchema)),
  type: Schema.optional(Schema.suspend(() => PluginLogEntryTypeEnumSchema)),
  message: Schema.optional(Schema.String),
  instance_id: Schema.optional(Schema.String),
});
export const PluginLogEntrySourceEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["SYSTEM", "PLUGIN", "CONSOLE"]);
export const PluginLogEntryTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "DEBUG",
    "LOG",
    "INFO",
    "WARN",
    "ERROR",
  ]);
