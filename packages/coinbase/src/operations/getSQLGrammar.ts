import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetSQLGrammarInput {}
export const GetSQLGrammarInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v2/data/query/grammar" }),
) as unknown as Schema.Codec<GetSQLGrammarInput>;

// Output Schema
export type GetSQLGrammarOutput = string;
export const GetSQLGrammarOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<GetSQLGrammarOutput>;

// The operation
/**
 * Get SQL grammar
 *
 * Retrieve the SQL grammar for the SQL API.
 * The SQL queries that are supported by the SQL API are defined in ANTLR4 grammar which is evaluated by server before executing the query. This ensures the safety and soundness of the SQL query before execution.
 * This endpoint returns the ANTLR4 grammar that is used to evaluate the SQL queries so that developers can understand the SQL API and build SQL queries with high confidence and correctness.
 * LLMs interact well with ANTLR4 grammar. You can feed the grammar directly into the LLMs to help generate SQL queries.
 */
export const getSQLGrammar = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSQLGrammarInput,
  outputSchema: GetSQLGrammarOutput,
}));
