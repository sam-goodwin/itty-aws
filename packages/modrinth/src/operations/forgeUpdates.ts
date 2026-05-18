import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ForgeUpdatesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_slug: Schema.String.pipe(T.PathParam()),
  neoforge: Schema.optional(Schema.Literals(["only", "include"])),
}).pipe(
  T.Http({ method: "GET", path: "/updates/{id_or_slug}/forge_updates.json" }),
);
export type ForgeUpdatesInput = typeof ForgeUpdatesInput.Type;

// Output Schema
export const ForgeUpdatesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  homepage: Schema.optional(Schema.String),
  promos: Schema.optional(
    Schema.Struct({
      "{version}-recommended": Schema.optional(Schema.String),
      "{version}-latest": Schema.optional(Schema.String),
    }),
  ),
});
export type ForgeUpdatesOutput = typeof ForgeUpdatesOutput.Type;

// The operation
/**
 * Forge Updates JSON file
 *
 * If you're a Forge mod developer, your Modrinth mods have an automatically generated `updates.json` using the
 * [Forge Update Checker](https://docs.minecraftforge.net/en/latest/misc/updatechecker/).
 * The only setup is to insert the URL into the `[[mods]]` section of your `mods.toml` file as such:
 * ```toml
 * [[mods]]
 * # the other stuff here - ID, version, display name, etc.
 * updateJSONURL = "https://api.modrinth.com/updates/{slug|ID}/forge_updates.json"
 * ```
 * Replace `{slug|id}` with the slug or ID of your project.
 * Modrinth will handle the rest! When you update your mod, Forge will notify your users that their copy of your mod is out of date.
 * Make sure that the version format you use for your Modrinth releases is the same as the version format you use in your `mods.toml`.
 * If you use a format such as `1.2.3-forge` or `1.2.3+1.19` with your Modrinth releases but your `mods.toml` only has `1.2.3`,
 * the update checker may not function properly.
 * If you're using NeoForge, NeoForge versions will, by default, not appear in the default URL.
 * You will need to add `?neoforge=only` to show your NeoForge-only versions, or `?neoforge=include` for both.
 * ```toml
 * [[mods]]
 * # the other stuff here - ID, version, display name, etc.
 * updateJSONURL = "https://api.modrinth.com/updates/{slug|ID}/forge_updates.json?neoforge=only"
 * ```
 *
 * @param id_or_slug - The ID or slug of the project
 * @param neoforge - Whether to include NeoForge versions. Can be `only` (NeoForge-only versions), `include` (both Forge and NeoForge versions), or omitted (Forge-only versions).
 */
export const forgeUpdates = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ForgeUpdatesInput,
  outputSchema: ForgeUpdatesOutput,
  errors: [BadRequest] as const,
}));
