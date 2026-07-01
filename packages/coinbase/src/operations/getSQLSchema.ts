import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetSQLSchemaInput {
  database?: "base" | "base_sepolia" | "solana" | "hyperevm";
  table?: string;
}
export const GetSQLSchemaInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database: Schema.optional(
    Schema.Literals(["base", "base_sepolia", "solana", "hyperevm"]),
  ),
  table: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v2/data/query/schema" }),
) as unknown as Schema.Codec<GetSQLSchemaInput>;

// Output Schema
export interface GetSQLSchemaOutput {
  tables?: {
    database?: string;
    table?: string;
    columns?: {
      name?: string;
      type?: string;
      nullable?: boolean;
      description?: string;
      indexOrder?: number;
    }[];
  }[];
}
export const GetSQLSchemaOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tables: Schema.optional(
    Schema.Array(
      Schema.Struct({
        database: Schema.optional(Schema.String),
        table: Schema.optional(Schema.String),
        columns: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              nullable: Schema.optional(Schema.Boolean),
              description: Schema.optional(Schema.String),
              indexOrder: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<GetSQLSchemaOutput>;

// The operation
/**
 * Get schema details
 *
 * Retrieve the schema information for the available tables in the SQL API's indexed data.
 * This includes table names, column definitions, data types, and indexed fields.
 *
 * @param database - The name of the database to query. Defaults to "base" when not specified.
 * @param table - Get the schema for a specific table.
 */
export const getSQLSchema = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSQLSchemaInput,
  outputSchema: GetSQLSchemaOutput,
}));
