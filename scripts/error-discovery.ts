#!/usr/bin/env bun
/**
 * Error Discovery Agent
 *
 * Uses the Claude Agent SDK to autonomously discover, document, and patch
 * missing API behavior from vendor specifications.
 *
 * Authentication: uses your Claude Max plan via the Claude Code CLI auth.
 * Make sure you're logged in with `claude` before running.
 *
 * Usage:
 *   bun scripts/error-discovery.ts
 */

import { query } from "@anthropic-ai/claude-agent-sdk";

const prompt = `What is the license used in this repository? Look at the LICENSE file or package.json files to determine this.`;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const DIM = "\x1b[2m";
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const CYAN = "\x1b[36m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const MAGENTA = "\x1b[35m";
const BLUE = "\x1b[34m";

/** Indent every line of `text` by `n` spaces. */
function indent(text: string, n = 2): string {
  const pad = " ".repeat(n);
  return text
    .split("\n")
    .map((l) => pad + l)
    .join("\n");
}

/** Truncate long strings for display. */
function truncate(s: string, max = 500): string {
  if (s.length <= max) return s;
  return s.slice(0, max) + `${DIM}... (${s.length - max} more chars)${RESET}`;
}

/** Pretty-print a JSON-ish value, truncating large strings inside it. */
function formatInput(input: unknown): string {
  if (input == null) return "";
  if (typeof input === "string") return truncate(input);
  try {
    const obj = input as Record<string, unknown>;
    const parts: string[] = [];
    for (const [k, v] of Object.entries(obj)) {
      const val = typeof v === "string" ? truncate(v, 200) : JSON.stringify(v);
      parts.push(`${DIM}${k}:${RESET} ${val}`);
    }
    return parts.join("\n");
  } catch {
    return truncate(JSON.stringify(input, null, 2));
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log(`${BOLD}Starting error-discovery agent...${RESET}\n`);

for await (const message of query({
  prompt,
  options: {
    allowedTools: [
      "Read",
      "Write",
      "Edit",
      "Bash",
      "Glob",
      "Grep",
      "WebSearch",
      "WebFetch",
      "Agent",
      "TodoWrite",
      "NotebookEdit",
    ],
    model: "claude-opus-4-6",
    permissionMode: "bypassPermissions",
    allowDangerouslySkipPermissions: true,
  },
})) {
  switch (message.type) {
    // ----- system init -----
    case "system": {
      if (message.subtype === "init") {
        console.log(`${DIM}Session:  ${message.session_id}${RESET}`);
        console.log(`${DIM}Model:    ${message.model}${RESET}`);
        console.log(`${DIM}Tools:    ${message.tools.join(", ")}${RESET}`);
        console.log(
          `${DIM}Auth:     ${(message as any).apiKeySource ?? "unknown"}${RESET}`,
        );
        console.log("");
      }
      break;
    }

    // ----- assistant turn -----
    case "assistant": {
      for (const block of message.message.content) {
        if (block.type === "thinking" && "thinking" in block) {
          console.log(`\n${MAGENTA}[thinking]${RESET}`);
          console.log(indent((block as any).thinking));
        } else if (block.type === "text" && "text" in block) {
          console.log(`\n${BOLD}${block.text}${RESET}`);
        } else if (block.type === "tool_use") {
          const b = block as any;
          console.log(
            `\n${CYAN}[tool_use] ${b.name}${RESET} ${DIM}(${b.id})${RESET}`,
          );
          if (b.input) {
            console.log(indent(formatInput(b.input)));
          }
        }
      }
      break;
    }

    // ----- tool results (user messages with tool_use_result) -----
    case "user": {
      const msg = message as any;
      // Tool results come back as synthetic user messages
      if (msg.tool_use_result != null) {
        const result = msg.tool_use_result;
        const text =
          typeof result === "string"
            ? result
            : typeof result === "object" && result !== null
              ? JSON.stringify(result, null, 2)
              : String(result);
        console.log(`${YELLOW}[tool_result]${RESET}`);
        console.log(indent(truncate(text, 1000)));
      }
      break;
    }

    // ----- final result -----
    case "result": {
      console.log(`\n${GREEN}${"=".repeat(60)}${RESET}`);
      console.log(`${GREEN}${BOLD}Result: ${message.subtype}${RESET}`);
      console.log(`${GREEN}${"=".repeat(60)}${RESET}`);
      if (message.subtype === "success") {
        console.log(message.result);
      } else {
        console.log("Errors:", (message as any).errors);
      }
      console.log(
        `\n${DIM}Duration: ${(message.duration_ms / 1000).toFixed(1)}s${RESET}`,
      );
      console.log(
        `${DIM}Cost:     $${message.total_cost_usd.toFixed(4)}${RESET}`,
      );
      console.log(`${DIM}Turns:    ${message.num_turns}${RESET}`);
      break;
    }

    // ----- everything else (for debugging) -----
    default: {
      const m = message as any;
      if (m.type === "stream_event") break; // skip partial streaming noise
      console.log(
        `${BLUE}[${m.type}${m.subtype ? `:${m.subtype}` : ""}]${RESET}`,
      );
      break;
    }
  }
}
