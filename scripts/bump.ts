import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const REPO = "alchemy-run/distilled";
const PACKAGES_DIR = join(process.cwd(), "packages");

async function checkNpmVersion(
  packageName: string,
  version: string,
): Promise<boolean> {
  try {
    const response = await fetch(
      `https://registry.npmjs.org/${packageName}/${version}`,
    );
    return response.ok;
  } catch {
    return false;
  }
}

async function checkGithubTag(version: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO}/git/refs/tags/v${version}`,
    );
    return response.ok;
  } catch {
    return false;
  }
}

async function getPackageDirs(): Promise<string[]> {
  const entries = await readdir(PACKAGES_DIR, { withFileTypes: true });
  const dirs: string[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pkgJsonPath = join(PACKAGES_DIR, entry.name, "package.json");
      try {
        await readFile(pkgJsonPath, "utf-8");
        dirs.push(entry.name);
      } catch {
        // not a package directory, skip
      }
    }
  }
  return dirs;
}

// --- Main ---

const versionInput = process.argv[2];

if (!versionInput) {
  console.error(
    "Please provide a version number or bump type (major, minor, patch)",
  );
  process.exit(1);
}

// Read current version from core as the source of truth
const corePackageJsonPath = join(PACKAGES_DIR, "core", "package.json");
const corePackageJson = JSON.parse(
  await readFile(corePackageJsonPath, "utf-8"),
);

let newVersion = "";

if (["major", "minor", "patch"].includes(versionInput)) {
  const currentVersion = corePackageJson.version;
  const versionMatch = currentVersion.match(/^(\d+)\.(\d+)\.(\d+)/);

  if (!versionMatch) {
    console.error(`Invalid current version format: ${currentVersion}`);
    process.exit(1);
  }

  const [, major, minor, patch] = versionMatch.map(Number);

  switch (versionInput) {
    case "major":
      newVersion = `${major + 1}.0.0`;
      break;
    case "minor":
      newVersion = `${major}.${minor + 1}.0`;
      break;
    case "patch":
      newVersion = `${major}.${minor}.${patch + 1}`;
      break;
    default:
      throw new Error(`Invalid bump type: ${versionInput}`);
  }

  console.log(
    `Bumping ${versionInput} version: ${currentVersion} -> ${newVersion}`,
  );
} else {
  if (!/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(versionInput)) {
    console.error(
      "Version must be in format x.y.z or x.y.z-pre or use 'major', 'minor', 'patch'",
    );
    process.exit(1);
  }

  newVersion = versionInput;
  console.log(`Setting specific version: ${newVersion}`);
}

// Check if version already exists on npm (check core package as representative)
const npmExists = await checkNpmVersion(corePackageJson.name, newVersion);
if (npmExists) {
  console.error(`Version ${newVersion} already exists on npm`);
  process.exit(1);
}

const githubTagExists = await checkGithubTag(newVersion);
if (githubTagExists) {
  console.error(`Tag v${newVersion} already exists on GitHub`);
  process.exit(1);
}

// Update version in ALL packages and collect their npm names
const packageDirs = await getPackageDirs();
const packageNames: Set<string> = new Set();

for (const dir of packageDirs) {
  const pkgJsonPath = join(PACKAGES_DIR, dir, "package.json");
  const pkgJson = JSON.parse(await readFile(pkgJsonPath, "utf-8"));
  pkgJson.version = newVersion;
  await writeFile(pkgJsonPath, `${JSON.stringify(pkgJson, null, 2)}\n`);
  packageNames.add(pkgJson.name);
  console.log(`  Updated ${pkgJson.name} to ${newVersion}`);
}

// Update workspace versions in bun.lock so bun pm pack resolves workspace:* correctly.
// Only target entries whose "name" matches one of our workspace packages.
// The lockfile format has "name": "..." immediately before "version": "..." for each
// workspace entry, so we match that pair specifically.
const lockfilePath = join(process.cwd(), "bun.lock");
try {
  const lockfile = await readFile(lockfilePath, "utf-8");
  const lines = lockfile.split("\n");
  let updated = false;

  for (let i = 1; i < lines.length; i++) {
    const versionMatch = lines[i].match(/^(\s*"version": ")[^"]*(".*)/);
    if (!versionMatch) continue;

    // Look at the previous line for a "name" field matching one of our packages
    const nameMatch = lines[i - 1].match(/"name": "([^"]*)"/);
    if (!nameMatch || !packageNames.has(nameMatch[1])) continue;

    lines[i] = `${versionMatch[1]}${newVersion}${versionMatch[2]}`;
    updated = true;
    console.log(`  Updated ${nameMatch[1]} version in bun.lock`);
  }

  if (updated) {
    await writeFile(lockfilePath, lines.join("\n"));
  }
} catch {
  // bun.lock may not exist (e.g. fresh clone before install)
  console.log(`  Skipped bun.lock update (file not found)`);
}

// --- Update CHANGELOG.md ---

/**
 * Parse conventional commits since the last git tag and generate a changelog
 * entry matching the format used in CHANGELOG.md (mirroring changelogithub output).
 */
function generateChangelogEntry(version: string): string {
  // Find the previous tag
  let prevTag = "";
  try {
    prevTag = execSync("git describe --tags --abbrev=0 HEAD", {
      encoding: "utf-8",
    }).trim();
  } catch {
    // No previous tag — include all commits
  }

  // Get commits since last tag (or all commits if no tag)
  const range = prevTag ? `${prevTag}...HEAD` : "HEAD";
  let logOutput = "";
  try {
    logOutput = execSync(
      `git log ${range} --no-merges --format="%H %s" -- .`,
      { encoding: "utf-8" },
    ).trim();
  } catch {
    // git log failed — empty changelog
  }

  if (!logOutput) {
    const date = new Date().toISOString().slice(0, 10);
    return `## [v${version}](https://github.com/${REPO}/releases/tag/v${version}) (${date})\n\n*No significant changes*\n`;
  }

  const features: string[] = [];
  const fixes: string[] = [];

  for (const line of logOutput.split("\n")) {
    if (!line.trim()) continue;

    const spaceIdx = line.indexOf(" ");
    const hash = line.slice(0, spaceIdx);
    const shortHash = hash.slice(0, 7);
    const subject = line.slice(spaceIdx + 1);

    // Skip release commits
    if (subject.startsWith("chore(release)")) continue;
    // Skip non-feat/fix commits (chore, ci, docs, etc.)
    if (
      !subject.startsWith("feat") &&
      !subject.startsWith("fix") &&
      !subject.startsWith("perf")
    )
      continue;

    // Parse conventional commit: type(scope): description (#PR)
    const match = subject.match(
      /^(feat|fix|perf)(?:\(([^)]*)\))?\s*:\s*(.+)$/,
    );
    if (!match) continue;

    const [, type, scope, description] = match;

    // Extract PR number if present
    const prMatch = description.match(/\(#(\d+)\)\s*$/);
    const prNum = prMatch ? prMatch[1] : null;
    const descClean = prMatch
      ? description.slice(0, prMatch.index).trim()
      : description.trim();

    // Extract author from git log
    let author = "";
    try {
      author = execSync(`git log -1 --format="%an" ${hash}`, {
        encoding: "utf-8",
      }).trim();
    } catch {
      // skip author
    }

    // Build the line
    let entry = scope ? `- **${scope}**: ${descClean}` : `- ${descClean}`;

    if (author) {
      // Try to get GitHub username from commit
      let ghUser = "";
      try {
        const email = execSync(`git log -1 --format="%ae" ${hash}`, {
          encoding: "utf-8",
        }).trim();
        // GitHub noreply emails have the format: user@users.noreply.github.com or ID+user@...
        const noreplyMatch = email.match(
          /(?:\d+\+)?([^@]+)@users\.noreply\.github\.com/,
        );
        if (noreplyMatch) {
          ghUser = noreplyMatch[1];
        }
      } catch {
        // skip
      }

      if (ghUser) {
        entry += ` - by @${ghUser}`;
      } else {
        entry += ` - by ${author}`;
      }
    }

    if (prNum) {
      entry += ` in [#${prNum}](https://github.com/${REPO}/pull/${prNum})`;
    }

    entry += ` [(${shortHash})](https://github.com/${REPO}/commit/${hash})`;

    if (type === "feat") {
      features.push(entry);
    } else {
      fixes.push(entry);
    }
  }

  const date = new Date().toISOString().slice(0, 10);
  const parts: string[] = [
    `## [v${version}](https://github.com/${REPO}/releases/tag/v${version}) (${date})`,
  ];

  if (features.length === 0 && fixes.length === 0) {
    parts.push("", "*No significant changes*");
  } else {
    if (features.length > 0) {
      parts.push("", "### Features", "", ...features);
    }
    if (fixes.length > 0) {
      parts.push("", "### Bug Fixes", "", ...fixes);
    }
  }

  return parts.join("\n") + "\n";
}

const changelogPath = join(process.cwd(), "CHANGELOG.md");
const changelogEntry = generateChangelogEntry(newVersion);

try {
  if (existsSync(changelogPath)) {
    const existing = await readFile(changelogPath, "utf-8");
    // Insert new entry after the "# Changelog" header
    const headerEnd = existing.indexOf("\n\n");
    if (headerEnd !== -1) {
      const header = existing.slice(0, headerEnd);
      const rest = existing.slice(headerEnd + 2);
      await writeFile(
        changelogPath,
        `${header}\n\n${changelogEntry}\n${rest}`,
      );
    } else {
      // No double newline found — just prepend after first line
      const firstNewline = existing.indexOf("\n");
      const header = existing.slice(0, firstNewline);
      const rest = existing.slice(firstNewline + 1);
      await writeFile(
        changelogPath,
        `${header}\n\n${changelogEntry}\n${rest}`,
      );
    }
  } else {
    await writeFile(
      changelogPath,
      `# Changelog\n\n${changelogEntry}`,
    );
  }
  console.log(`  Updated CHANGELOG.md`);
} catch (err) {
  console.error(`  Failed to update CHANGELOG.md: ${err}`);
}

console.log(`\nUpdated all packages to version ${newVersion}`);
