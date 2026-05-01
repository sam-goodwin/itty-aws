#!/usr/bin/env bun
/**
 * Post a release announcement to Discord as a single embed. The body is read
 * verbatim from the CHANGELOG.md entry that bump.ts wrote, so Discord matches
 * the GitHub Release copy exactly.
 *
 * Reads DISCORD_WEBHOOK from the environment. Silently no-ops if unset.
 *
 * Usage: bun scripts/discord-notify.ts <tag>
 *   e.g. bun scripts/discord-notify.ts v0.14.1
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const REPO = "alchemy-run/distilled";
// Discord embed description hard limit.
const EMBED_DESCRIPTION_LIMIT = 4096;

const tag = process.argv[2];
if (!tag) {
  console.error("Usage: bun scripts/discord-notify.ts <tag>");
  process.exit(1);
}

const webhook = process.env.DISCORD_WEBHOOK;
if (!webhook) {
  console.log("DISCORD_WEBHOOK not set, skipping Discord notification");
  process.exit(0);
}

// Pull the entry for this tag out of CHANGELOG.md. bump.ts writes each entry
// with a heading like `## [v0.14.0](https://github.com/.../tag/v0.14.0) (date)`.
const changelogPath = join(process.cwd(), "CHANGELOG.md");
const changelog = await readFile(changelogPath, "utf-8");
const headingMarker = `## [${tag}]`;
const start = changelog.indexOf(headingMarker);
if (start === -1) {
  console.error(`CHANGELOG.md has no entry for ${tag}`);
  process.exit(1);
}
// Skip past the heading line itself to start at the body.
const afterHeading = changelog.indexOf("\n", start);
const after = changelog.slice(afterHeading + 1);
// Stop at the next `## ` heading (the previous version's entry).
const nextHeadingIdx = after.indexOf("\n## ");
const rawBody = (nextHeadingIdx === -1 ? after : after.slice(0, nextHeadingIdx)).trim();

// CHANGELOG.md is formatted for GitHub Releases. Discord renders neither HTML
// entities nor the `<samp>` tag, so swap them for plain-text/markdown
// equivalents before posting.
const body = rawBody
  .replace(/&nbsp;/g, " ")
  .replace(/<\/?samp>/g, "`")
  // Discord only renders #, ##, ### as headings; drop deeper levels.
  .replace(/^#{4,6}\s+/gm, "")
  // Strip any other stray HTML tags just in case.
  .replace(/<\/?[a-z][^>]*>/gi, "");

const releaseUrl = `https://github.com/${REPO}/releases/tag/${tag}`;
const description = `${body}\n\n[Full release notes →](${releaseUrl})`;

if (description.length > EMBED_DESCRIPTION_LIMIT) {
  console.error(
    `Changelog (${description.length} chars) exceeds Discord embed description limit (${EMBED_DESCRIPTION_LIMIT}). Trim the changelog or split the release.`,
  );
  process.exit(1);
}

const channel = tag.includes("-") ? "prerelease" : "release";

const res = await fetch(webhook, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    username: "Distilled Releases",
    embeds: [
      {
        title: `Distilled ${tag} (${channel}) released`,
        url: releaseUrl,
        description,
      },
    ],
    allowed_mentions: { parse: [] },
  }),
});

if (!res.ok) {
  console.error(`Discord webhook failed: ${res.status} ${await res.text()}`);
  process.exit(1);
}
console.log(`Posted Discord release notification for ${tag}`);
