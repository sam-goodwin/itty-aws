/**
 * Shared agent harness for scripts that use the Claude Agent SDK.
 *
 * Provides:
 * - ANSI color constants
 * - Tool result formatting (compact summaries instead of raw JSON)
 * - TodoWrite rendering as checklists
 * - A unified message logger for SDKMessage streams
 * - A `runAgent` helper that wraps the SDK `query()` call in Effect
 */

import { query, type SDKMessage } from "@anthropic-ai/claude-agent-sdk";
import { Data, Effect } from "effect";

// ============================================================================
// Constants
// ============================================================================

/** Default model across every pipeline script. */
export const DEFAULT_MODEL = "claude-opus-4-7";

/**
 * If the SDK produces no messages for this long, we interrupt the query.
 * Defaults to 10 minutes — enough to tolerate long `Bash` tool calls (installs,
 * codegen) but short enough to catch genuine stalls.
 */
export const DEFAULT_INACTIVITY_MS = 10 * 60 * 1000;

// ============================================================================
// Error Types
// ============================================================================

export class AgentError extends Data.TaggedError("AgentError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {}

// ============================================================================
// ANSI Helpers
// ============================================================================

export const DIM = "\x1b[2m";
export const RESET = "\x1b[0m";
export const BOLD = "\x1b[1m";
export const CYAN = "\x1b[36m";
export const YELLOW = "\x1b[33m";
export const GREEN = "\x1b[32m";
export const MAGENTA = "\x1b[35m";
export const BLUE = "\x1b[34m";
export const RED = "\x1b[31m";

export function indent(text: string, n = 2): string {
  const pad = " ".repeat(n);
  return text
    .split("\n")
    .map((l) => pad + l)
    .join("\n");
}

export function truncate(s: string, max = 500): string {
  if (s.length <= max) return s;
  return s.slice(0, max) + `${DIM}... (${s.length - max} more chars)${RESET}`;
}

// ============================================================================
// Tool Output Formatting
// ============================================================================

export function formatInput(input: unknown): string {
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

/** Summarize a tool result for compact display. */
export function formatToolResult(result: unknown): string {
  if (result == null) return "(empty)";
  if (typeof result === "string") return truncate(result, 200);

  const obj = result as Record<string, unknown>;

  // Read tool — show file path + line count
  if (
    obj.type === "text" &&
    typeof obj.file === "object" &&
    obj.file !== null
  ) {
    const f = obj.file as Record<string, unknown>;
    return `${f.filePath} (${f.numLines}/${f.totalLines} lines)`;
  }

  // Glob tool — show file count + first few
  if (Array.isArray(obj.filenames)) {
    const files = obj.filenames as string[];
    const shown = files.slice(0, 5).map((f) => f.replace(/.*[/\\]/, ""));
    const suffix = files.length > 5 ? ` ... +${files.length - 5} more` : "";
    return `${files.length} files: ${shown.join(", ")}${suffix}`;
  }

  // Grep tool — show match count
  if (typeof obj.numFiles === "number" && typeof obj.content === "string") {
    const lines = obj.content.split("\n").filter(Boolean).length;
    return `${obj.numFiles} files, ${lines} matching lines`;
  }
  if (typeof obj.numFiles === "number" && obj.numFiles === 0) {
    return "no matches";
  }

  // Bash tool — show stdout summary
  if (typeof obj.stdout === "string") {
    const out = obj.stdout.trim();
    if (!out && typeof obj.stderr === "string" && obj.stderr.trim()) {
      return `stderr: ${truncate(obj.stderr.trim(), 200)}`;
    }
    const lines = out.split("\n");
    if (lines.length <= 3) return out;
    return `${lines[0]}\n${indent(`... ${lines.length - 1} more lines`, 2)}`;
  }

  // Edit/Write tool — show file path
  if (typeof obj.filePath === "string") {
    const gd = obj.gitDiff as Record<string, unknown> | undefined;
    const additions =
      gd && typeof gd.additions === "number" ? `+${gd.additions}` : "";
    const deletions =
      gd && typeof gd.deletions === "number" ? `-${gd.deletions}` : "";
    const diff =
      additions || deletions
        ? ` (${[additions, deletions].filter(Boolean).join("/")})`
        : "";
    return `${obj.filePath}${diff}`;
  }

  // Generic fallback — one-line JSON
  const json = JSON.stringify(obj);
  return truncate(json, 200);
}

const TODO_ICONS: Record<string, string> = {
  completed: `${GREEN}[x]${RESET}`,
  in_progress: `${YELLOW}[~]${RESET}`,
  pending: `${DIM}[ ]${RESET}`,
  cancelled: `${DIM}[-]${RESET}`,
};

/** Render a TodoWrite input as a compact checklist. */
export function formatTodos(input: unknown): string {
  if (input == null || typeof input !== "object") return "";
  const todos = (input as { todos?: unknown }).todos;
  if (!Array.isArray(todos)) return "";
  return todos
    .map((t: { status?: string; content?: string }) => {
      const icon = TODO_ICONS[t.status ?? ""] ?? "[ ]";
      return `  ${icon} ${t.content ?? ""}`;
    })
    .join("\n");
}

// ============================================================================
// Message Logger
// ============================================================================

export function logMessage(message: SDKMessage): void {
  switch (message.type) {
    case "system": {
      if (message.subtype === "init") {
        console.log(`${DIM}Session:  ${message.session_id}${RESET}`);
        console.log(`${DIM}Model:    ${message.model}${RESET}`);
        console.log(`${DIM}Tools:    ${message.tools.join(", ")}${RESET}`);
        console.log(
          `${DIM}Auth:     ${message.apiKeySource ?? "unknown"}${RESET}`,
        );
        console.log("");
      }
      break;
    }

    case "assistant": {
      for (const block of message.message.content) {
        if (block.type === "thinking") {
          console.log(`\n${MAGENTA}[thinking]${RESET}`);
          console.log(indent(block.thinking));
        } else if (block.type === "text") {
          console.log(`\n${BOLD}${block.text}${RESET}`);
        } else if (block.type === "tool_use") {
          if (block.name === "TodoWrite") {
            console.log(`\n${CYAN}[todos]${RESET}`);
            console.log(formatTodos(block.input));
          } else {
            console.log(
              `\n${CYAN}[tool_use] ${block.name}${RESET} ${DIM}(${block.id})${RESET}`,
            );
            if (block.input) {
              console.log(indent(formatInput(block.input)));
            }
          }
        }
      }
      break;
    }

    case "user": {
      if (message.tool_use_result != null) {
        console.log(
          `${YELLOW}[tool_result]${RESET} ${DIM}${formatToolResult(message.tool_use_result)}${RESET}`,
        );
      }
      break;
    }

    case "result": {
      console.log(`\n${GREEN}${"=".repeat(60)}${RESET}`);
      console.log(`${GREEN}${BOLD}Result: ${message.subtype}${RESET}`);
      console.log(`${GREEN}${"=".repeat(60)}${RESET}`);
      if (message.subtype === "success") {
        console.log(message.result);
      } else {
        console.log("Errors:", message.errors);
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

    default: {
      if (message.type === "stream_event") break;
      const subtype = "subtype" in message ? `:${message.subtype}` : "";
      console.log(`${BLUE}[${message.type}${subtype}]${RESET}`);
      break;
    }
  }
}

// ============================================================================
// Agent Runner
// ============================================================================

export interface AgentOptions {
  /** The prompt to send to the agent. */
  readonly prompt: string;
  /** Working directory for the agent (defaults to process.cwd()). */
  readonly cwd?: string;
  /** Model to use (defaults to DEFAULT_MODEL). */
  readonly model?: string;
  /** Extra text appended to the Claude Code system prompt. */
  readonly systemPromptAppend?: string;
  /** Resume a previous session by ID. */
  readonly resume?: string;
  /** Maximum agentic turns. */
  readonly maxTurns?: number;
  /**
   * Abort the session if no messages arrive for this long. Defaults to
   * DEFAULT_INACTIVITY_MS. Pass 0 to disable the watchdog.
   */
  readonly inactivityMs?: number;
}

/** Stats from a single agent run, extracted from the SDK result message. */
export interface AgentRunStats {
  readonly sessionId: string;
  readonly durationMs: number;
  readonly costUsd: number;
  readonly turns: number;
  /** True if the watchdog interrupted the session for inactivity. */
  readonly stalled: boolean;
}

/** Mutable accumulator for tracking stats across multiple agent runs. */
export class AgentStatsAccumulator {
  runs = 0;
  totalDurationMs = 0;
  totalCostUsd = 0;
  totalTurns = 0;
  stalls = 0;

  add(stats: AgentRunStats): void {
    this.runs++;
    this.totalDurationMs += stats.durationMs;
    this.totalCostUsd += stats.costUsd;
    this.totalTurns += stats.turns;
    if (stats.stalled) this.stalls++;
  }

  /** Print a formatted summary line. */
  print(): void {
    console.log(`\n${DIM}${"─".repeat(60)}${RESET}`);
    const stallSuffix =
      this.stalls > 0 ? `  |  ${RED}${this.stalls} stall(s)${RESET}` : "";
    console.log(
      `${BOLD}Totals:${RESET}  ` +
        `${this.runs} run${this.runs !== 1 ? "s" : ""}  |  ` +
        `${(this.totalDurationMs / 1000).toFixed(1)}s  |  ` +
        `$${this.totalCostUsd.toFixed(4)}  |  ` +
        `${this.totalTurns} turns` +
        stallSuffix,
    );
  }
}

/**
 * Run a Claude Agent SDK query with all tools enabled, logging all messages
 * to the console. Returns stats from the run. Optionally accumulates into
 * a shared stats tracker.
 *
 * If the SDK produces no messages for `inactivityMs`, the query is interrupted
 * and the returned stats have `stalled: true` — the caller can resume via
 * session ID.
 */
export const runAgent = (
  opts: AgentOptions,
  stats?: AgentStatsAccumulator,
): Effect.Effect<AgentRunStats, AgentError> =>
  Effect.tryPromise({
    try: async () => {
      let sessionId = "";
      let durationMs = 0;
      let costUsd = 0;
      let turns = 0;
      let stalled = false;

      const inactivityMs = opts.inactivityMs ?? DEFAULT_INACTIVITY_MS;
      const q = query({
        prompt: opts.prompt,
        options: {
          cwd: opts.cwd,
          model: opts.model ?? DEFAULT_MODEL,
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
          systemPrompt: {
            type: "preset",
            preset: "claude_code",
            append: opts.systemPromptAppend ?? "",
          },
          settingSources: ["project"],
          permissionMode: "bypassPermissions",
          allowDangerouslySkipPermissions: true,
          ...(opts.resume ? { resume: opts.resume } : {}),
          ...(opts.maxTurns ? { maxTurns: opts.maxTurns } : {}),
        },
      });

      let watchdog: NodeJS.Timeout | undefined;
      const resetWatchdog = () => {
        if (inactivityMs <= 0) return;
        if (watchdog) clearTimeout(watchdog);
        watchdog = setTimeout(() => {
          stalled = true;
          console.error(
            `\n${RED}⚠️  Agent produced no output for ${inactivityMs / 1000}s — interrupting${RESET}`,
          );
          q.interrupt().catch(() => {
            // Interrupt best-effort; iterator will terminate either way.
          });
        }, inactivityMs);
      };

      try {
        resetWatchdog();
        for await (const message of q) {
          resetWatchdog();

          if (message.type === "system" && message.subtype === "init") {
            sessionId = message.session_id;
          }
          if (message.type === "result") {
            durationMs = message.duration_ms;
            costUsd = message.total_cost_usd;
            turns = message.num_turns;
          }
          logMessage(message);
        }
      } finally {
        if (watchdog) clearTimeout(watchdog);
      }

      const result: AgentRunStats = {
        sessionId,
        durationMs,
        costUsd,
        turns,
        stalled,
      };
      stats?.add(result);
      return result;
    },
    catch: (err) =>
      new AgentError({
        message: "Agent SDK query failed",
        cause: err,
      }),
  });
