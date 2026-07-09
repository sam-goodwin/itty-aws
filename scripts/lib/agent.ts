/**
 * Shared agent harness for scripts that use AI coding agents.
 *
 * Provides:
 * - ANSI color constants
 * - Compact tool/result formatting
 * - Todo rendering as checklists
 * - Message/event loggers for Claude Code and Codex
 * - A `runAgent` helper that wraps the selected SDK in Effect
 */

import type { SDKMessage as ClaudeSDKMessage } from "@anthropic-ai/claude-agent-sdk";
import { query } from "@anthropic-ai/claude-agent-sdk";
import {
  type ApprovalMode,
  Codex,
  type ModelReasoningEffort,
  type SandboxMode,
  type ThreadEvent,
  type ThreadItem,
  type Usage,
  type WebSearchMode,
} from "@openai/codex-sdk";
import { Data, Effect } from "effect";

// ============================================================================
// Constants
// ============================================================================

export type AgentProvider = "codex" | "claude";

/** Environment variable used to select the agent provider. */
export const AGENT_PROVIDER_ENV = "DISTILLED_AGENT";

/** Default Codex model across pipeline scripts. */
export const DEFAULT_CODEX_MODEL = "gpt-5.5";

/** Default Claude model across pipeline scripts. */
export const DEFAULT_CLAUDE_MODEL = "claude-opus-4-7";

/**
 * If the SDK produces no messages for this long, we interrupt the query.
 * Defaults to 10 minutes, enough to tolerate long shell commands (installs,
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
// Provider Selection
// ============================================================================

export function parseAgentProvider(
  value: string | undefined,
): AgentProvider | undefined {
  const normalized = value?.trim().toLowerCase();
  if (!normalized) return undefined;
  if (normalized === "codex" || normalized === "openai") return "codex";
  if (normalized === "claude" || normalized === "anthropic") return "claude";
  throw new Error(
    `Invalid ${AGENT_PROVIDER_ENV} value "${value}". Expected "codex" or "claude".`,
  );
}

export function getConfiguredAgentProvider(): AgentProvider | undefined {
  return parseAgentProvider(process.env[AGENT_PROVIDER_ENV]);
}

function resolveAgentProvider(
  provider: AgentProvider | undefined,
): AgentProvider {
  return provider ?? getConfiguredAgentProvider() ?? "claude";
}

function providerLabel(provider: AgentProvider): string {
  return provider === "codex" ? "Codex" : "Claude";
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

  // Claude Read tool: show file path + line count.
  if (
    obj.type === "text" &&
    typeof obj.file === "object" &&
    obj.file !== null
  ) {
    const f = obj.file as Record<string, unknown>;
    return `${f.filePath} (${f.numLines}/${f.totalLines} lines)`;
  }

  // Claude Glob tool: show file count + first few.
  if (Array.isArray(obj.filenames)) {
    const files = obj.filenames as string[];
    const shown = files.slice(0, 5).map((f) => f.replace(/.*[/\\]/, ""));
    const suffix = files.length > 5 ? ` ... +${files.length - 5} more` : "";
    return `${files.length} files: ${shown.join(", ")}${suffix}`;
  }

  // Claude Grep tool: show match count.
  if (typeof obj.numFiles === "number" && typeof obj.content === "string") {
    const lines = obj.content.split("\n").filter(Boolean).length;
    return `${obj.numFiles} files, ${lines} matching lines`;
  }
  if (typeof obj.numFiles === "number" && obj.numFiles === 0) {
    return "no matches";
  }

  // Shell tool: show stdout summary.
  if (typeof obj.stdout === "string") {
    const out = obj.stdout.trim();
    if (!out && typeof obj.stderr === "string" && obj.stderr.trim()) {
      return `stderr: ${truncate(obj.stderr.trim(), 200)}`;
    }
    return summarizeLines(out);
  }

  // Edit/Write tool: show file path.
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

  // Generic fallback: one-line JSON.
  const json = JSON.stringify(obj);
  return truncate(json, 200);
}

function summarizeLines(text: string, maxChars = 500): string {
  const out = text.trim();
  if (!out) return "(empty)";
  const lines = out.split("\n");
  if (lines.length <= 3) return truncate(out, maxChars);
  return `${truncate(lines[0], maxChars)}\n${indent(
    `... ${lines.length - 1} more lines`,
    2,
  )}`;
}

const TODO_ICONS: Record<string, string> = {
  completed: `${GREEN}[x]${RESET}`,
  in_progress: `${YELLOW}[~]${RESET}`,
  pending: `${DIM}[ ]${RESET}`,
  cancelled: `${DIM}[-]${RESET}`,
};

/** Render a Claude TodoWrite input as a compact checklist. */
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

/** Render a Codex todo_list item as a compact checklist. */
export function formatCodexTodos(item: ThreadItem): string {
  if (item.type !== "todo_list") return "";
  return item.items
    .map((t) => {
      const icon = t.completed ? TODO_ICONS.completed : TODO_ICONS.pending;
      return `  ${icon} ${t.text}`;
    })
    .join("\n");
}

function formatUsage(usage: Usage): string {
  return (
    `${usage.input_tokens} input` +
    `, ${usage.cached_input_tokens} cached` +
    `, ${usage.output_tokens} output` +
    `, ${usage.reasoning_output_tokens} reasoning`
  );
}

// ============================================================================
// Message/Event Loggers
// ============================================================================

export function logClaudeMessage(message: ClaudeSDKMessage): void {
  switch (message.type) {
    case "system": {
      if (message.subtype === "init") {
        console.log(`${DIM}Provider: Claude${RESET}`);
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

/** Backwards-compatible alias for callers that logged Claude SDK messages. */
export const logMessage = logClaudeMessage;

export function logCodexEvent(event: ThreadEvent): void {
  switch (event.type) {
    case "thread.started": {
      console.log(`${DIM}Session:  ${event.thread_id}${RESET}`);
      break;
    }

    case "turn.started": {
      console.log(`\n${BLUE}[turn] started${RESET}`);
      break;
    }

    case "item.started": {
      logCodexItem(event.item, "started");
      break;
    }

    case "item.updated": {
      if (event.item.type === "todo_list") {
        logCodexItem(event.item, "updated");
      }
      break;
    }

    case "item.completed": {
      logCodexItem(event.item, "completed");
      break;
    }

    case "turn.completed": {
      console.log(`\n${GREEN}${BOLD}[turn] completed${RESET}`);
      console.log(`${DIM}Usage: ${formatUsage(event.usage)}${RESET}`);
      break;
    }

    case "turn.failed": {
      console.log(`\n${RED}${BOLD}[turn] failed${RESET}`);
      console.log(`${RED}${event.error.message}${RESET}`);
      break;
    }

    case "error": {
      console.log(`\n${RED}[error]${RESET} ${event.message}`);
      break;
    }
  }
}

function logCodexItem(
  item: ThreadItem,
  phase: "started" | "updated" | "completed",
): void {
  switch (item.type) {
    case "agent_message": {
      if (phase === "completed") {
        console.log(`\n${BOLD}${item.text}${RESET}`);
      }
      break;
    }

    case "reasoning": {
      if (phase === "completed" && item.text.trim()) {
        console.log(`\n${MAGENTA}[reasoning]${RESET}`);
        console.log(indent(item.text));
      }
      break;
    }

    case "command_execution": {
      if (phase === "started") {
        console.log(
          `\n${CYAN}[command]${RESET} ${DIM}(${item.id})${RESET}\n${indent(item.command)}`,
        );
      } else if (phase === "completed") {
        const status =
          item.exit_code === 0 ? GREEN : item.exit_code == null ? YELLOW : RED;
        console.log(
          `${status}[command:${item.status}]${RESET} ${DIM}exit ${item.exit_code ?? "?"}${RESET}`,
        );
        if (item.aggregated_output.trim()) {
          console.log(indent(summarizeLines(item.aggregated_output, 800)));
        }
      }
      break;
    }

    case "file_change": {
      if (phase === "completed") {
        const status = item.status === "completed" ? GREEN : RED;
        const files = item.changes
          .map((change) => `${change.kind}:${change.path}`)
          .join(", ");
        console.log(`${status}[file_change:${item.status}]${RESET} ${files}`);
      }
      break;
    }

    case "mcp_tool_call": {
      if (phase === "started") {
        console.log(
          `\n${CYAN}[mcp_tool] ${item.server}.${item.tool}${RESET} ${DIM}(${item.id})${RESET}`,
        );
        console.log(indent(formatInput(item.arguments)));
      } else if (phase === "completed") {
        const status = item.status === "completed" ? GREEN : RED;
        const detail =
          item.error?.message ??
          (item.result ? formatToolResult(item.result) : "(empty)");
        console.log(
          `${status}[mcp_tool:${item.status}]${RESET} ${DIM}${detail}${RESET}`,
        );
      }
      break;
    }

    case "web_search": {
      if (phase === "completed" || phase === "started") {
        console.log(`\n${CYAN}[web_search]${RESET} ${item.query}`);
      }
      break;
    }

    case "todo_list": {
      console.log(`\n${CYAN}[todos]${RESET}`);
      console.log(formatCodexTodos(item));
      break;
    }

    case "error": {
      console.log(`\n${RED}[item_error]${RESET} ${item.message}`);
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
  /** Agent provider to use. Defaults to DISTILLED_AGENT when set, otherwise Claude. */
  readonly provider?: AgentProvider;
  /** Working directory for the agent (defaults to process.cwd()). */
  readonly cwd?: string;
  /** Model to use (defaults per provider). */
  readonly model?: string;
  /** Extra high-priority instructions for this agent turn. */
  readonly systemPromptAppend?: string;
  /** Resume a previous session/thread by ID. */
  readonly resume?: string;
  /** Maximum agentic turns. Claude supports this natively; Codex treats it as prompt guidance. */
  readonly maxTurns?: number;
  /**
   * Abort the session if no messages arrive for this long. Defaults to
   * DEFAULT_INACTIVITY_MS. Pass 0 to disable the watchdog.
   */
  readonly inactivityMs?: number;
  /** Codex sandbox mode. Ignored by Claude. */
  readonly sandboxMode?: SandboxMode;
  /** Codex approval policy. Ignored by Claude. */
  readonly approvalPolicy?: ApprovalMode;
  /** Codex workspace-write network access. Ignored by Claude. */
  readonly networkAccessEnabled?: boolean;
  /** Codex web search mode. Ignored by Claude. */
  readonly webSearchMode?: WebSearchMode;
  /** Codex model reasoning effort. Ignored by Claude. */
  readonly modelReasoningEffort?: ModelReasoningEffort;
}

/** Stats from a single agent run, extracted from the SDK result message when available. */
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
 * Run an AI coding agent, logging all messages to the console. Returns stats
 * from the run and optionally accumulates into a shared stats tracker.
 *
 * Select the provider with `DISTILLED_AGENT=codex` or `DISTILLED_AGENT=claude`,
 * or pass `provider` directly in `AgentOptions`. Defaults to Claude for
 * compatibility with existing scripts.
 */
export const runAgent = (
  opts: AgentOptions,
  stats?: AgentStatsAccumulator,
): Effect.Effect<AgentRunStats, AgentError> =>
  Effect.tryPromise({
    try: async () => {
      const provider = resolveAgentProvider(opts.provider);
      const result =
        provider === "codex"
          ? await runCodexAgent(opts)
          : await runClaudeAgent(opts);
      stats?.add(result);
      return result;
    },
    catch: (err) =>
      new AgentError({
        message: err instanceof Error ? err.message : "Agent SDK query failed",
        cause: err,
      }),
  });

async function runClaudeAgent(opts: AgentOptions): Promise<AgentRunStats> {
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
      model: opts.model ?? DEFAULT_CLAUDE_MODEL,
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
        `\n${RED}Warning: ${providerLabel("claude")} produced no output for ${
          inactivityMs / 1000
        }s; interrupting${RESET}`,
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
      logClaudeMessage(message);
    }
  } finally {
    if (watchdog) clearTimeout(watchdog);
  }

  return {
    sessionId,
    durationMs,
    costUsd,
    turns,
    stalled,
  };
}

async function runCodexAgent(opts: AgentOptions): Promise<AgentRunStats> {
  const model = opts.model ?? DEFAULT_CODEX_MODEL;
  const sandboxMode = opts.sandboxMode ?? "workspace-write";
  const approvalPolicy = opts.approvalPolicy ?? "never";
  const networkAccessEnabled = opts.networkAccessEnabled ?? true;
  const webSearchMode = opts.webSearchMode ?? "live";
  const inactivityMs = opts.inactivityMs ?? DEFAULT_INACTIVITY_MS;

  let sessionId = opts.resume ?? "";
  let stalled = false;
  let turns = 0;
  let failure: string | undefined;
  let usage: Usage | null = null;
  const startedAt = Date.now();
  const controller = new AbortController();

  const codex = new Codex();
  const threadOptions = {
    model,
    sandboxMode,
    workingDirectory: opts.cwd,
    approvalPolicy,
    networkAccessEnabled,
    webSearchMode,
    ...(opts.modelReasoningEffort
      ? { modelReasoningEffort: opts.modelReasoningEffort }
      : {}),
  };
  const thread = opts.resume
    ? codex.resumeThread(opts.resume, threadOptions)
    : codex.startThread(threadOptions);

  console.log(`${DIM}Provider: Codex${RESET}`);
  console.log(`${DIM}Session:  ${sessionId || "(new)"}${RESET}`);
  console.log(`${DIM}Model:    ${model}${RESET}`);
  console.log(`${DIM}Sandbox:  ${sandboxMode}${RESET}`);
  console.log(`${DIM}Approval: ${approvalPolicy}${RESET}`);
  console.log(
    `${DIM}Network:  ${networkAccessEnabled ? "enabled" : "disabled"}${RESET}`,
  );
  console.log(`${DIM}Web:      ${webSearchMode}${RESET}`);
  console.log("");

  let watchdog: NodeJS.Timeout | undefined;
  const resetWatchdog = () => {
    if (inactivityMs <= 0) return;
    if (watchdog) clearTimeout(watchdog);
    watchdog = setTimeout(() => {
      stalled = true;
      console.error(
        `\n${RED}Warning: ${providerLabel("codex")} produced no output for ${
          inactivityMs / 1000
        }s; aborting${RESET}`,
      );
      controller.abort();
    }, inactivityMs);
  };

  try {
    resetWatchdog();
    const { events } = await thread.runStreamed(buildCodexPrompt(opts), {
      signal: controller.signal,
    });

    for await (const event of events) {
      resetWatchdog();

      if (event.type === "thread.started") {
        sessionId = event.thread_id;
      }
      if (event.type === "turn.started") {
        turns++;
      }
      if (event.type === "turn.completed") {
        usage = event.usage;
      }
      if (event.type === "turn.failed") {
        failure = event.error.message;
      }
      if (event.type === "error") {
        failure = event.message;
      }
      logCodexEvent(event);
    }
  } catch (err) {
    if (!stalled) throw err;
  } finally {
    if (watchdog) clearTimeout(watchdog);
  }

  if (failure && !stalled) {
    throw new Error(failure);
  }

  const durationMs = Date.now() - startedAt;
  console.log(`\n${GREEN}${"=".repeat(60)}${RESET}`);
  console.log(
    `${GREEN}${BOLD}Result: ${stalled ? "stalled" : "success"}${RESET}`,
  );
  console.log(`${GREEN}${"=".repeat(60)}${RESET}`);
  console.log(`\n${DIM}Duration: ${(durationMs / 1000).toFixed(1)}s${RESET}`);
  if (usage) {
    console.log(`${DIM}Usage:    ${formatUsage(usage)}${RESET}`);
  }
  console.log(`${DIM}Turns:    ${turns}${RESET}`);

  return {
    sessionId,
    durationMs,
    costUsd: 0,
    turns,
    stalled,
  };
}

function buildCodexPrompt(opts: AgentOptions): string {
  const sections: string[] = [];

  const instructions = opts.systemPromptAppend?.trim();
  if (instructions) {
    sections.push(`## Additional Agent Instructions\n\n${instructions}`);
  }

  if (opts.maxTurns) {
    sections.push(
      `## Turn Budget\n\nComplete this task in no more than ${opts.maxTurns} agentic turn${
        opts.maxTurns === 1 ? "" : "s"
      }.`,
    );
  }

  sections.push(opts.prompt);
  return sections.join("\n\n");
}
