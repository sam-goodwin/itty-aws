/**
 * Pagination utilities for streaming through paginated API responses.
 *
 * Supports multiple pagination styles:
 * - Page-based (e.g., PlanetScale): page/per_page with next_page number
 * - Cursor-based (e.g., Neon): cursor/limit with next cursor string
 * - Token-based (e.g., AWS): NextToken/MaxResults with continuation tokens
 *
 * Each SDK defines its own pagination trait configuration, and these
 * shared utilities handle the streaming logic.
 *
 * @example
 * ```ts
 * import * as Pagination from "@distilled.cloud/core/pagination";
 *
 * // Page-based pagination
 * const allPages = Pagination.paginatePages(listDatabases, { organization: "my-org" }, {
 *   inputToken: "page",
 *   outputToken: "next_page",
 *   items: "data",
 * });
 * ```
 */
import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import { getPath } from "./traits.ts";

// ============================================================================
// Pagination Trait
// ============================================================================

/**
 * Pagination trait describing how to navigate between pages.
 */
export interface PaginatedTrait {
  /** Pagination strategy */
  mode?: "token" | "page" | "cursor" | "single";
  /** The name of the input member containing the page/cursor token */
  inputToken?: string;
  /** The path to the output member containing the next page/cursor token */
  outputToken?: string;
  /** The path to the output member containing the paginated items */
  items?: string;
  /** The name of the input member that limits page size */
  pageSize?: string;
}

export type PaginationStrategy = <
  Input extends Record<string, unknown>,
  Output,
  E,
  R,
  RequestOptions = never,
>(
  operation: (
    input: Input,
    requestOptions?: RequestOptions,
  ) => Effect.Effect<Output, E, R>,
  input: Input,
  pagination: PaginatedTrait,
  requestOptions?: RequestOptions,
) => Stream.Stream<Output, E, R>;

const missingPaginationConfig = (kind: string) => Stream.die(new Error(kind));

/**
 * Creates a stream for single-shot list endpoints that still expose the paginated API surface.
 */
export const paginateSingle: PaginationStrategy = (
  operation,
  input,
  _pagination,
  requestOptions,
) =>
  Stream.make(input).pipe(
    Stream.mapEffect((requestPayload) =>
      operation(requestPayload, requestOptions),
    ),
  );

// ============================================================================
// Page-based Pagination (PlanetScale style)
// ============================================================================

/**
 * Creates a stream of pages using page-number pagination.
 *
 * @param operation - The paginated operation to call
 * @param input - The initial input (without page parameter)
 * @param pagination - The pagination trait configuration
 * @returns A Stream of full page responses
 */
export const paginatePageNumber = <
  Input extends Record<string, unknown>,
  Output,
  E,
  R,
  RequestOptions = never,
>(
  operation: (
    input: Input,
    requestOptions?: RequestOptions,
  ) => Effect.Effect<Output, E, R>,
  input: Omit<Input, string>,
  pagination: PaginatedTrait,
  requestOptions?: RequestOptions,
): Stream.Stream<Output, E, R> => {
  const inputToken = pagination.inputToken;
  const outputToken = pagination.outputToken;
  const inputRecord = input as Record<string, unknown>;
  if (!inputToken || !outputToken) {
    return missingPaginationConfig(
      "Page-number pagination requires inputToken and outputToken",
    );
  }
  type State = { page: number; done: boolean };
  const startPage =
    typeof inputRecord[inputToken] === "number"
      ? (inputRecord[inputToken] as number)
      : 1;

  const unfoldFn = (state: State) =>
    Effect.gen(function* () {
      if (state.done) {
        return undefined;
      }

      const requestPayload = {
        ...input,
        [inputToken]: state.page,
      } as Input;

      const response = yield* operation(requestPayload, requestOptions);

      const nextPage = getPath(response, outputToken) as
        | number
        | null
        | undefined;

      // Some APIs report the CURRENT page at `outputToken` rather than
      // the next one (e.g. Cloudflare's `result_info.page`). Taking that
      // value as the next page re-requests the same page forever. Only
      // accept an *advancing* page number; otherwise advance by one and
      // terminate when a page comes back with no items (or the token is
      // absent).
      const items = pagination.items
        ? (getPath(response, pagination.items) as
            | readonly unknown[]
            | undefined)
        : undefined;

      const nextState: State = {
        page:
          typeof nextPage === "number" && nextPage > state.page
            ? nextPage
            : state.page + 1,
        done:
          nextPage === null ||
          nextPage === undefined ||
          (items !== undefined && items.length === 0),
      };

      return [response, nextState] as const;
    });

  return Stream.unfold({ page: startPage, done: false } as State, unfoldFn);
};

// ============================================================================
// Cursor-based Pagination (Neon style)
// ============================================================================

/**
 * Creates a stream of pages using cursor-based pagination.
 *
 * @param operation - The paginated operation to call
 * @param input - The initial input (without cursor parameter)
 * @param pagination - The pagination trait configuration
 * @returns A Stream of full page responses
 */
export const paginateCursor = <
  Input extends Record<string, unknown>,
  Output,
  E,
  R,
  RequestOptions = never,
>(
  operation: (
    input: Input,
    requestOptions?: RequestOptions,
  ) => Effect.Effect<Output, E, R>,
  input: Omit<Input, string>,
  pagination: PaginatedTrait,
  requestOptions?: RequestOptions,
): Stream.Stream<Output, E, R> => {
  const inputToken = pagination.inputToken;
  const outputToken = pagination.outputToken;
  const inputRecord = input as Record<string, unknown>;
  if (!inputToken || !outputToken) {
    return missingPaginationConfig(
      "Cursor pagination requires inputToken and outputToken",
    );
  }
  type State = { cursor: string | undefined; done: boolean };
  const startCursor =
    typeof inputRecord[inputToken] === "string"
      ? (inputRecord[inputToken] as string)
      : undefined;

  const unfoldFn = (state: State) =>
    Effect.gen(function* () {
      if (state.done) {
        return undefined;
      }

      const requestPayload = {
        ...input,
        ...(state.cursor ? { [inputToken]: state.cursor } : {}),
      } as Input;

      const response = yield* operation(requestPayload, requestOptions);

      const nextCursor = getPath(response, outputToken) as
        | string
        | null
        | undefined;

      const nextState: State = {
        cursor: nextCursor ?? undefined,
        done: nextCursor === null || nextCursor === undefined,
      };

      return [response, nextState] as const;
    });

  return Stream.unfold({ cursor: startCursor, done: false } as State, unfoldFn);
};

// ============================================================================
// Token-based Pagination (AWS style)
// ============================================================================

/**
 * Creates a stream of pages using token-based pagination.
 *
 * @param operation - The paginated operation to call
 * @param input - The initial input
 * @param pagination - The pagination trait configuration
 * @returns A Stream of full page responses
 */
export const paginateToken = <
  Input extends Record<string, unknown>,
  Output,
  E,
  R,
  RequestOptions = never,
>(
  operation: (
    input: Input,
    requestOptions?: RequestOptions,
  ) => Effect.Effect<Output, E, R>,
  input: Input,
  pagination: PaginatedTrait,
  requestOptions?: RequestOptions,
): Stream.Stream<Output, E, R> => {
  const inputToken = pagination.inputToken;
  const outputToken = pagination.outputToken;
  const inputRecord = input as Record<string, unknown>;
  if (!inputToken || !outputToken) {
    return missingPaginationConfig(
      "Token pagination requires inputToken and outputToken",
    );
  }
  type State = { token: unknown; done: boolean };
  const startToken = inputRecord[inputToken];

  const unfoldFn = (state: State) =>
    Effect.gen(function* () {
      if (state.done) {
        return undefined;
      }

      const requestPayload =
        state.token !== undefined
          ? { ...input, [inputToken]: state.token }
          : input;

      const response = yield* operation(
        requestPayload as Input,
        requestOptions,
      );

      const nextToken = getPath(response, outputToken);

      const nextState: State = {
        token: nextToken,
        done: nextToken === undefined || nextToken === null,
      };

      return [response, nextState] as const;
    });

  return Stream.unfold({ token: startToken, done: false } as State, unfoldFn);
};

/**
 * Shared default pagination dispatcher for SDKs that use generic token/cursor/page traversal.
 */
export const paginateWithDefaults: PaginationStrategy = (
  operation,
  input,
  pagination,
  requestOptions,
) => {
  const mode = pagination.mode ?? "token";

  switch (mode) {
    case "page":
      return paginatePageNumber(operation, input, pagination, requestOptions);
    case "cursor":
      return paginateCursor(operation, input, pagination, requestOptions);
    case "single":
      return missingPaginationConfig(
        "Single-page pagination requires a provider-specific pagination strategy",
      );
    case "token":
    default:
      return paginateToken(operation, input, pagination, requestOptions);
  }
};

// ============================================================================
// Item extraction
// ============================================================================

/**
 * Extracts individual items from a page stream.
 *
 * @param pages - A stream of page responses
 * @param itemsPath - Dot-separated path to the items array in the page response
 * @returns A Stream of individual items
 */
export const extractItems = <Output, Item, E, R>(
  pages: Stream.Stream<Output, E, R>,
  itemsPath: string,
): Stream.Stream<Item, E, R> =>
  pages.pipe(
    Stream.flatMap((page) => {
      const items = getPath(page, itemsPath) as readonly Item[] | undefined;
      return Stream.fromIterable(items ?? []);
    }),
  );
