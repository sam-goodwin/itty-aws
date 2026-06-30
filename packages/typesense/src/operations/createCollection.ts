import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict } from "../errors.ts";
import { SensitiveString, SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateCollectionInput {
  name: string;
  fields: {
    name: string;
    type: string;
    optional?: boolean;
    facet?: boolean;
    index?: boolean;
    locale?: string;
    sort?: boolean;
    infix?: boolean;
    reference?: string;
    async_reference?: boolean;
    num_dim?: number;
    drop?: boolean;
    store?: boolean;
    vec_dist?: string;
    range_index?: boolean;
    stem?: boolean;
    stem_dictionary?: string;
    token_separators?: string[];
    symbols_to_index?: string[];
    embed?: {
      from: string[];
      model_config: {
        model_name: string;
        api_key?: string | Redacted.Redacted<string>;
        url?: string;
        access_token?: string | Redacted.Redacted<string>;
        refresh_token?: string | Redacted.Redacted<string>;
        client_id?: string;
        client_secret?: string | Redacted.Redacted<string>;
        project_id?: string;
        indexing_prefix?: string;
        query_prefix?: string;
      };
    };
  }[];
  default_sorting_field?: string;
  token_separators?: string[];
  synonym_sets?: string[];
  enable_nested_fields?: boolean;
  symbols_to_index?: string[];
  voice_query_model?: { model_name?: string };
  metadata?: unknown;
}
export const CreateCollectionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  fields: Schema.Array(
    Schema.Struct({
      name: Schema.String,
      type: Schema.String,
      optional: Schema.optional(Schema.Boolean),
      facet: Schema.optional(Schema.Boolean),
      index: Schema.optional(Schema.Boolean),
      locale: Schema.optional(Schema.String),
      sort: Schema.optional(Schema.Boolean),
      infix: Schema.optional(Schema.Boolean),
      reference: Schema.optional(Schema.String),
      async_reference: Schema.optional(Schema.Boolean),
      num_dim: Schema.optional(Schema.Number),
      drop: Schema.optional(Schema.Boolean),
      store: Schema.optional(Schema.Boolean),
      vec_dist: Schema.optional(Schema.String),
      range_index: Schema.optional(Schema.Boolean),
      stem: Schema.optional(Schema.Boolean),
      stem_dictionary: Schema.optional(Schema.String),
      token_separators: Schema.optional(Schema.Array(Schema.String)),
      symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
      embed: Schema.optional(
        Schema.Struct({
          from: Schema.Array(Schema.String),
          model_config: Schema.Struct({
            model_name: Schema.String,
            api_key: Schema.optional(SensitiveString),
            url: Schema.optional(Schema.String),
            access_token: Schema.optional(SensitiveString),
            refresh_token: Schema.optional(SensitiveString),
            client_id: Schema.optional(Schema.String),
            client_secret: Schema.optional(SensitiveString),
            project_id: Schema.optional(Schema.String),
            indexing_prefix: Schema.optional(Schema.String),
            query_prefix: Schema.optional(Schema.String),
          }),
        }),
      ),
    }),
  ),
  default_sorting_field: Schema.optional(Schema.String),
  token_separators: Schema.optional(Schema.Array(Schema.String)),
  synonym_sets: Schema.optional(Schema.Array(Schema.String)),
  enable_nested_fields: Schema.optional(Schema.Boolean),
  symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
  voice_query_model: Schema.optional(
    Schema.Struct({
      model_name: Schema.optional(Schema.String),
    }),
  ),
  metadata: Schema.optional(Schema.Unknown),
}).pipe(
  T.Http({ method: "POST", path: "/collections" }),
) as unknown as Schema.Codec<CreateCollectionInput>;

// Output Schema
export interface CreateCollectionOutput {
  name: string;
  fields: {
    name: string;
    type: string;
    optional?: boolean;
    facet?: boolean;
    index?: boolean;
    locale?: string;
    sort?: boolean;
    infix?: boolean;
    reference?: string;
    async_reference?: boolean;
    num_dim?: number;
    drop?: boolean;
    store?: boolean;
    vec_dist?: string;
    range_index?: boolean;
    stem?: boolean;
    stem_dictionary?: string;
    token_separators?: string[];
    symbols_to_index?: string[];
    embed?: {
      from: string[];
      model_config: {
        model_name: string;
        api_key?: Redacted.Redacted<string>;
        url?: string;
        access_token?: Redacted.Redacted<string>;
        refresh_token?: Redacted.Redacted<string>;
        client_id?: string;
        client_secret?: Redacted.Redacted<string>;
        project_id?: string;
        indexing_prefix?: string;
        query_prefix?: string;
      };
    };
  }[];
  default_sorting_field?: string;
  token_separators?: string[];
  synonym_sets?: string[];
  enable_nested_fields?: boolean;
  symbols_to_index?: string[];
  voice_query_model?: { model_name?: string };
  metadata?: unknown;
  num_documents: number;
  created_at: number;
}
export const CreateCollectionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
    fields: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        type: Schema.String,
        optional: Schema.optional(Schema.Boolean),
        facet: Schema.optional(Schema.Boolean),
        index: Schema.optional(Schema.Boolean),
        locale: Schema.optional(Schema.String),
        sort: Schema.optional(Schema.Boolean),
        infix: Schema.optional(Schema.Boolean),
        reference: Schema.optional(Schema.String),
        async_reference: Schema.optional(Schema.Boolean),
        num_dim: Schema.optional(Schema.Number),
        drop: Schema.optional(Schema.Boolean),
        store: Schema.optional(Schema.Boolean),
        vec_dist: Schema.optional(Schema.String),
        range_index: Schema.optional(Schema.Boolean),
        stem: Schema.optional(Schema.Boolean),
        stem_dictionary: Schema.optional(Schema.String),
        token_separators: Schema.optional(Schema.Array(Schema.String)),
        symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
        embed: Schema.optional(
          Schema.Struct({
            from: Schema.Array(Schema.String),
            model_config: Schema.Struct({
              model_name: Schema.String,
              api_key: Schema.optional(SensitiveOutputString),
              url: Schema.optional(Schema.String),
              access_token: Schema.optional(SensitiveOutputString),
              refresh_token: Schema.optional(SensitiveOutputString),
              client_id: Schema.optional(Schema.String),
              client_secret: Schema.optional(SensitiveOutputString),
              project_id: Schema.optional(Schema.String),
              indexing_prefix: Schema.optional(Schema.String),
              query_prefix: Schema.optional(Schema.String),
            }),
          }),
        ),
      }),
    ),
    default_sorting_field: Schema.optional(Schema.String),
    token_separators: Schema.optional(Schema.Array(Schema.String)),
    synonym_sets: Schema.optional(Schema.Array(Schema.String)),
    enable_nested_fields: Schema.optional(Schema.Boolean),
    symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
    voice_query_model: Schema.optional(
      Schema.Struct({
        model_name: Schema.optional(Schema.String),
      }),
    ),
    metadata: Schema.optional(Schema.Unknown),
    num_documents: Schema.Number,
    created_at: Schema.Number,
  },
) as unknown as Schema.Codec<CreateCollectionOutput>;

// The operation
/**
 * Create a new collection
 *
 * When a collection is created, we give it a name and describe the fields that will be indexed from the documents added to the collection.
 */
export const createCollection = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateCollectionInput,
  outputSchema: CreateCollectionOutput,
  errors: [BadRequest, Conflict] as const,
}));
