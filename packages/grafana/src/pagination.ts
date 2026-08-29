/**
 * Pagination for Grafana's structured `/apis` resources.
 *
 * List responses use the Kubernetes-style shape
 * `{ metadata: { continue?: string }, items: [...] }`.  The generated
 * operation carries `outputToken: "metadata.continue"`, so this strategy
 * follows the nested cursor and stops on an absent, null, or empty token.
 */
import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import * as Pagination from "@distilled.cloud/core/pagination";

const missingConfiguration = (message: string) =>
  Stream.die(new Error(message));

/** Follow Grafana's nested `metadata.continue` cursor safely. */
export const paginateGrafana: Pagination.PaginationStrategy = (
  operation,
  input,
  pagination,
) => {
  const inputToken = pagination.inputToken;
  const outputToken = pagination.outputToken;
  if (!inputToken || !outputToken) {
    return missingConfiguration(
      "Grafana pagination requires inputToken and outputToken",
    );
  }

  type State = { readonly token: unknown; readonly done: boolean };
  const startToken = input[inputToken];

  return Stream.unfold(
    { token: startToken, done: false } satisfies State,
    (state: State) =>
      Effect.gen(function* () {
        if (state.done) return undefined;

        const requestPayload =
          state.token === undefined ||
          state.token === null ||
          state.token === ""
            ? input
            : ({ ...input, [inputToken]: state.token } as typeof input);
        const response = yield* operation(requestPayload);
        const nextToken = Pagination.getPath(response, outputToken);
        const done =
          Pagination.isTerminalToken(nextToken) ||
          (state.token !== undefined && nextToken === state.token);

        return [response, { token: nextToken, done }] as const;
      }),
  );
};

/** Alias used by generated service modules. */
export const grafanaPagination = paginateGrafana;

/** Alias matching the other packages' concise pagination exports. */
export const paginate = paginateGrafana;

/** Compatibility name used by generated service modules. */
export const paginateCursor = paginateGrafana;
