// ==========================================================================
// Firebase ML API (firebaseml v2beta)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "firebaseml",
  version: "v2beta",
  rootUrl: "https://firebaseml.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudAiplatformV1beta1LogprobsResultCandidate {
  /** The token's string representation. */
  token?: string;
  /** The token's numerical ID. While the `token` field provides the string representation of the token, the `token_id` is the numerical representation that the model uses internally. This can be useful for developers who want to build custom logic based on the model's vocabulary. */
  tokenId?: number;
  /** The log probability of this token. A higher value indicates that the model was more confident in this token. The log probability can be used to assess the relative likelihood of different tokens and to identify when the model is uncertain. */
  logProbability?: number;
}

export const GoogleCloudAiplatformV1beta1LogprobsResultCandidate: Schema.Codec<GoogleCloudAiplatformV1beta1LogprobsResultCandidate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    tokenId: Schema.optional(Schema.Number),
    logProbability: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1LogprobsResultCandidate",
  });

export interface GoogleCloudAiplatformV1beta1LogprobsResultTopCandidates {
  /** The list of candidate tokens, sorted by log probability in descending order. */
  candidates?: ReadonlyArray<GoogleCloudAiplatformV1beta1LogprobsResultCandidate>;
}

export const GoogleCloudAiplatformV1beta1LogprobsResultTopCandidates: Schema.Codec<GoogleCloudAiplatformV1beta1LogprobsResultTopCandidates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    candidates: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1LogprobsResultCandidate),
    ),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1LogprobsResultTopCandidates",
  });

export interface GoogleCloudAiplatformV1beta1LogprobsResult {
  /** A list of the top candidate tokens at each decoding step. The length of this list is equal to the total number of decoding steps. */
  topCandidates?: ReadonlyArray<GoogleCloudAiplatformV1beta1LogprobsResultTopCandidates>;
  /** A list of the chosen candidate tokens at each decoding step. The length of this list is equal to the total number of decoding steps. Note that the chosen candidate might not be in `top_candidates`. */
  chosenCandidates?: ReadonlyArray<GoogleCloudAiplatformV1beta1LogprobsResultCandidate>;
}

export const GoogleCloudAiplatformV1beta1LogprobsResult: Schema.Codec<GoogleCloudAiplatformV1beta1LogprobsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topCandidates: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1LogprobsResultTopCandidates),
    ),
    chosenCandidates: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1LogprobsResultCandidate),
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1LogprobsResult" });

export interface GoogleCloudAiplatformV1beta1FileData {
  /** Required. The IANA standard MIME type of the source data. */
  mimeType?: string;
  /** Optional. The display name of the file. Used to provide a label or filename to distinguish files. This field is only returned in `PromptMessage` for prompt management. It is used in the Gemini calls only when server side tools (`code_execution`, `google_search`, and `url_context`) are enabled. */
  displayName?: string;
  /** Required. The URI of the file in Google Cloud Storage. */
  fileUri?: string;
}

export const GoogleCloudAiplatformV1beta1FileData: Schema.Codec<GoogleCloudAiplatformV1beta1FileData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    fileUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1FileData" });

export interface GoogleCloudAiplatformV1beta1RagRetrievalConfigHybridSearch {
  /** Optional. Alpha value controls the weight between dense and sparse vector search results. The range is [0, 1], while 0 means sparse vector search only and 1 means dense vector search only. The default value is 0.5 which balances sparse and dense vector search equally. */
  alpha?: number;
}

export const GoogleCloudAiplatformV1beta1RagRetrievalConfigHybridSearch: Schema.Codec<GoogleCloudAiplatformV1beta1RagRetrievalConfigHybridSearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alpha: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1RagRetrievalConfigHybridSearch",
  });

export interface GoogleCloudAiplatformV1beta1AuthConfigGoogleServiceAccountConfig {
  /** Optional. The service account that the extension execution service runs as. - If the service account is specified, the `iam.serviceAccounts.getAccessToken` permission should be granted to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) on the specified service account. - If not specified, the Vertex AI Extension Service Agent will be used to execute the Extension. */
  serviceAccount?: string;
}

export const GoogleCloudAiplatformV1beta1AuthConfigGoogleServiceAccountConfig: Schema.Codec<GoogleCloudAiplatformV1beta1AuthConfigGoogleServiceAccountConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1AuthConfigGoogleServiceAccountConfig",
  });

export interface GoogleCloudAiplatformV1beta1AuthConfigOauthConfig {
  /** The service account used to generate access tokens for executing the Extension. - If the service account is specified, the `iam.serviceAccounts.getAccessToken` permission should be granted to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) on the provided service account. */
  serviceAccount?: string;
  /** Access token for extension endpoint. Only used to propagate token from [[ExecuteExtensionRequest.runtime_auth_config]] at request time. */
  accessToken?: string;
}

export const GoogleCloudAiplatformV1beta1AuthConfigOauthConfig: Schema.Codec<GoogleCloudAiplatformV1beta1AuthConfigOauthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    accessToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1AuthConfigOauthConfig",
  });

export interface GoogleCloudAiplatformV1beta1AuthConfigOidcConfig {
  /** OpenID Connect formatted ID token for extension endpoint. Only used to propagate token from [[ExecuteExtensionRequest.runtime_auth_config]] at request time. */
  idToken?: string;
  /** The service account used to generate an OpenID Connect (OIDC)-compatible JWT token signed by the Google OIDC Provider (accounts.google.com) for extension endpoint (https://cloud.google.com/iam/docs/create-short-lived-credentials-direct#sa-credentials-oidc). - The audience for the token will be set to the URL in the server url defined in the OpenApi spec. - If the service account is provided, the service account should grant `iam.serviceAccounts.getOpenIdToken` permission to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents). */
  serviceAccount?: string;
}

export const GoogleCloudAiplatformV1beta1AuthConfigOidcConfig: Schema.Codec<GoogleCloudAiplatformV1beta1AuthConfigOidcConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1AuthConfigOidcConfig",
  });

export interface GoogleCloudAiplatformV1beta1AuthConfigApiKeyConfig {
  /** Optional. The name of the SecretManager secret version resource storing the API key. Format: `projects/{project}/secrets/{secrete}/versions/{version}` - If both `api_key_secret` and `api_key_string` are specified, this field takes precedence over `api_key_string`. - If specified, the `secretmanager.versions.access` permission should be granted to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) on the specified resource. */
  apiKeySecret?: string;
  /** Optional. The API key to be used in the request directly. */
  apiKeyString?: string;
  /** Optional. The location of the API key. */
  httpElementLocation?:
    | "HTTP_IN_UNSPECIFIED"
    | "HTTP_IN_QUERY"
    | "HTTP_IN_HEADER"
    | "HTTP_IN_PATH"
    | "HTTP_IN_BODY"
    | "HTTP_IN_COOKIE"
    | (string & {});
  /** Optional. The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name. */
  name?: string;
}

export const GoogleCloudAiplatformV1beta1AuthConfigApiKeyConfig: Schema.Codec<GoogleCloudAiplatformV1beta1AuthConfigApiKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKeySecret: Schema.optional(Schema.String),
    apiKeyString: Schema.optional(Schema.String),
    httpElementLocation: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1AuthConfigApiKeyConfig",
  });

export interface GoogleCloudAiplatformV1beta1AuthConfigHttpBasicAuthConfig {
  /** Required. The name of the SecretManager secret version resource storing the base64 encoded credentials. Format: `projects/{project}/secrets/{secrete}/versions/{version}` - If specified, the `secretmanager.versions.access` permission should be granted to Vertex AI Extension Service Agent (https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) on the specified resource. */
  credentialSecret?: string;
}

export const GoogleCloudAiplatformV1beta1AuthConfigHttpBasicAuthConfig: Schema.Codec<GoogleCloudAiplatformV1beta1AuthConfigHttpBasicAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    credentialSecret: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1AuthConfigHttpBasicAuthConfig",
  });

export interface GoogleCloudAiplatformV1beta1AuthConfig {
  /** Config for Google Service Account auth. */
  googleServiceAccountConfig?: GoogleCloudAiplatformV1beta1AuthConfigGoogleServiceAccountConfig;
  /** Config for user oauth. */
  oauthConfig?: GoogleCloudAiplatformV1beta1AuthConfigOauthConfig;
  /** Config for user OIDC auth. */
  oidcConfig?: GoogleCloudAiplatformV1beta1AuthConfigOidcConfig;
  /** Type of auth scheme. */
  authType?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "NO_AUTH"
    | "API_KEY_AUTH"
    | "HTTP_BASIC_AUTH"
    | "GOOGLE_SERVICE_ACCOUNT_AUTH"
    | "OAUTH"
    | "OIDC_AUTH"
    | (string & {});
  /** Config for API key auth. */
  apiKeyConfig?: GoogleCloudAiplatformV1beta1AuthConfigApiKeyConfig;
  /** Config for HTTP Basic auth. */
  httpBasicAuthConfig?: GoogleCloudAiplatformV1beta1AuthConfigHttpBasicAuthConfig;
}

export const GoogleCloudAiplatformV1beta1AuthConfig: Schema.Codec<GoogleCloudAiplatformV1beta1AuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleServiceAccountConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1AuthConfigGoogleServiceAccountConfig,
    ),
    oauthConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1AuthConfigOauthConfig,
    ),
    oidcConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1AuthConfigOidcConfig,
    ),
    authType: Schema.optional(Schema.String),
    apiKeyConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1AuthConfigApiKeyConfig,
    ),
    httpBasicAuthConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1AuthConfigHttpBasicAuthConfig,
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1AuthConfig" });

export interface GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingLlmRanker {
  /** Optional. The model name used for ranking. See [Supported models](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/inference#supported-models). */
  modelName?: string;
}

export const GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingLlmRanker: Schema.Codec<GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingLlmRanker> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingLlmRanker",
  });

export interface GoogleCloudAiplatformV1beta1ModelArmorConfig {
  /** Optional. The resource name of the Model Armor template to use for prompt screening. A Model Armor template is a set of customized filters and thresholds that define how Model Armor screens content. If specified, Model Armor will use this template to check the user's prompt for safety and security risks before it is sent to the model. The name must be in the format `projects/{project}/locations/{location}/templates/{template}`. */
  promptTemplateName?: string;
  /** Optional. The resource name of the Model Armor template to use for response screening. A Model Armor template is a set of customized filters and thresholds that define how Model Armor screens content. If specified, Model Armor will use this template to check the model's response for safety and security risks before it is returned to the user. The name must be in the format `projects/{project}/locations/{location}/templates/{template}`. */
  responseTemplateName?: string;
}

export const GoogleCloudAiplatformV1beta1ModelArmorConfig: Schema.Codec<GoogleCloudAiplatformV1beta1ModelArmorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promptTemplateName: Schema.optional(Schema.String),
    responseTemplateName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ModelArmorConfig" });

export interface GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingRankService {
  /** Optional. The model name of the rank service. Format: `semantic-ranker-512@latest` */
  modelName?: string;
}

export const GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingRankService: Schema.Codec<GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingRankService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingRankService",
  });

export interface GoogleCloudAiplatformV1beta1RagRetrievalConfigRanking {
  /** Optional. Config for Rank Service. */
  rankService?: GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingRankService;
  /** Optional. Config for LlmRanker. */
  llmRanker?: GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingLlmRanker;
}

export const GoogleCloudAiplatformV1beta1RagRetrievalConfigRanking: Schema.Codec<GoogleCloudAiplatformV1beta1RagRetrievalConfigRanking> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rankService: Schema.optional(
      GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingRankService,
    ),
    llmRanker: Schema.optional(
      GoogleCloudAiplatformV1beta1RagRetrievalConfigRankingLlmRanker,
    ),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1RagRetrievalConfigRanking",
  });

export interface GoogleCloudAiplatformV1beta1RagRetrievalConfigFilter {
  /** Optional. Only returns contexts with vector distance smaller than the threshold. */
  vectorDistanceThreshold?: number;
  /** Optional. String for metadata filtering. */
  metadataFilter?: string;
  /** Optional. Only returns contexts with vector similarity larger than the threshold. */
  vectorSimilarityThreshold?: number;
}

export const GoogleCloudAiplatformV1beta1RagRetrievalConfigFilter: Schema.Codec<GoogleCloudAiplatformV1beta1RagRetrievalConfigFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vectorDistanceThreshold: Schema.optional(Schema.Number),
    metadataFilter: Schema.optional(Schema.String),
    vectorSimilarityThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1RagRetrievalConfigFilter",
  });

export interface GoogleCloudAiplatformV1beta1RagRetrievalConfig {
  /** Optional. The number of contexts to retrieve. */
  topK?: number;
  /** Optional. Config for Hybrid Search. */
  hybridSearch?: GoogleCloudAiplatformV1beta1RagRetrievalConfigHybridSearch;
  /** Optional. Config for ranking and reranking. */
  ranking?: GoogleCloudAiplatformV1beta1RagRetrievalConfigRanking;
  /** Optional. Config for filters. */
  filter?: GoogleCloudAiplatformV1beta1RagRetrievalConfigFilter;
}

export const GoogleCloudAiplatformV1beta1RagRetrievalConfig: Schema.Codec<GoogleCloudAiplatformV1beta1RagRetrievalConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topK: Schema.optional(Schema.Number),
    hybridSearch: Schema.optional(
      GoogleCloudAiplatformV1beta1RagRetrievalConfigHybridSearch,
    ),
    ranking: Schema.optional(
      GoogleCloudAiplatformV1beta1RagRetrievalConfigRanking,
    ),
    filter: Schema.optional(
      GoogleCloudAiplatformV1beta1RagRetrievalConfigFilter,
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1RagRetrievalConfig" });

export interface GoogleCloudAiplatformV1beta1VertexRagStoreRagResource {
  /** Optional. RagCorpora resource name. Format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}` */
  ragCorpus?: string;
  /** Optional. rag_file_id. The files should be in the same rag_corpus set in rag_corpus field. */
  ragFileIds?: ReadonlyArray<string>;
}

export const GoogleCloudAiplatformV1beta1VertexRagStoreRagResource: Schema.Codec<GoogleCloudAiplatformV1beta1VertexRagStoreRagResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ragCorpus: Schema.optional(Schema.String),
    ragFileIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1VertexRagStoreRagResource",
  });

export interface GoogleCloudAiplatformV1beta1VertexRagStore {
  /** Optional. The retrieval config for the Rag query. */
  ragRetrievalConfig?: GoogleCloudAiplatformV1beta1RagRetrievalConfig;
  /** Optional. Deprecated. Please use rag_resources instead. */
  ragCorpora?: ReadonlyArray<string>;
  /** Optional. Only return results with vector distance smaller than the threshold. */
  vectorDistanceThreshold?: number;
  /** Optional. Currently only supported for Gemini Multimodal Live API. In Gemini Multimodal Live API, if `store_context` bool is specified, Gemini will leverage it to automatically memorize the interactions between the client and Gemini, and retrieve context when needed to augment the response generation for users' ongoing and future interactions. */
  storeContext?: boolean;
  /** Optional. The representation of the rag source. It can be used to specify corpus only or ragfiles. Currently only support one corpus or multiple files from one corpus. In the future we may open up multiple corpora support. */
  ragResources?: ReadonlyArray<GoogleCloudAiplatformV1beta1VertexRagStoreRagResource>;
  /** Optional. Number of top k results to return from the selected corpora. */
  similarityTopK?: number;
}

export const GoogleCloudAiplatformV1beta1VertexRagStore: Schema.Codec<GoogleCloudAiplatformV1beta1VertexRagStore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ragRetrievalConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1RagRetrievalConfig,
    ),
    ragCorpora: Schema.optional(Schema.Array(Schema.String)),
    vectorDistanceThreshold: Schema.optional(Schema.Number),
    storeContext: Schema.optional(Schema.Boolean),
    ragResources: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1VertexRagStoreRagResource),
    ),
    similarityTopK: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1VertexRagStore" });

export interface GoogleCloudAiplatformV1beta1VertexAISearchDataStoreSpec {
  /** Full resource name of DataStore, such as Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}` */
  dataStore?: string;
  /** Optional. Filter specification to filter documents in the data store specified by data_store field. For more information on filtering, see [Filtering](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata) */
  filter?: string;
}

export const GoogleCloudAiplatformV1beta1VertexAISearchDataStoreSpec: Schema.Codec<GoogleCloudAiplatformV1beta1VertexAISearchDataStoreSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStore: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1VertexAISearchDataStoreSpec",
  });

export interface GoogleCloudAiplatformV1beta1VertexAISearch {
  /** Optional. Number of search results to return per query. The default value is 10. The maximumm allowed value is 10. */
  maxResults?: number;
  /** Optional. Fully-qualified Vertex AI Search data store resource ID. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}` */
  datastore?: string;
  /** Specifications that define the specific DataStores to be searched, along with configurations for those data stores. This is only considered for Engines with multiple data stores. It should only be set if engine is used. */
  dataStoreSpecs?: ReadonlyArray<GoogleCloudAiplatformV1beta1VertexAISearchDataStoreSpec>;
  /** Optional. Fully-qualified Vertex AI Search engine resource ID. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` */
  engine?: string;
  /** Optional. Filter strings to be passed to the search API. */
  filter?: string;
}

export const GoogleCloudAiplatformV1beta1VertexAISearch: Schema.Codec<GoogleCloudAiplatformV1beta1VertexAISearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number),
    datastore: Schema.optional(Schema.String),
    dataStoreSpecs: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1VertexAISearchDataStoreSpec),
    ),
    engine: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1VertexAISearch" });

export interface GoogleCloudAiplatformV1beta1ExternalApiElasticSearchParams {
  /** The ElasticSearch search template to use. */
  searchTemplate?: string;
  /** Optional. Number of hits (chunks) to request. When specified, it is passed to Elasticsearch as the `num_hits` param. */
  numHits?: number;
  /** The ElasticSearch index to use. */
  index?: string;
}

export const GoogleCloudAiplatformV1beta1ExternalApiElasticSearchParams: Schema.Codec<GoogleCloudAiplatformV1beta1ExternalApiElasticSearchParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchTemplate: Schema.optional(Schema.String),
    numHits: Schema.optional(Schema.Number),
    index: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ExternalApiElasticSearchParams",
  });

export interface GoogleCloudAiplatformV1beta1ApiAuthApiKeyConfig {
  /** Required. The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version} */
  apiKeySecretVersion?: string;
  /** The API key string. Either this or `api_key_secret_version` must be set. */
  apiKeyString?: string;
}

export const GoogleCloudAiplatformV1beta1ApiAuthApiKeyConfig: Schema.Codec<GoogleCloudAiplatformV1beta1ApiAuthApiKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKeySecretVersion: Schema.optional(Schema.String),
    apiKeyString: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ApiAuthApiKeyConfig",
  });

export interface GoogleCloudAiplatformV1beta1ApiAuth {
  /** The API secret. */
  apiKeyConfig?: GoogleCloudAiplatformV1beta1ApiAuthApiKeyConfig;
}

export const GoogleCloudAiplatformV1beta1ApiAuth: Schema.Codec<GoogleCloudAiplatformV1beta1ApiAuth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKeyConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1ApiAuthApiKeyConfig,
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ApiAuth" });

export interface GoogleCloudAiplatformV1beta1ExternalApiSimpleSearchParams {}

export const GoogleCloudAiplatformV1beta1ExternalApiSimpleSearchParams: Schema.Codec<GoogleCloudAiplatformV1beta1ExternalApiSimpleSearchParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ExternalApiSimpleSearchParams",
  });

export interface GoogleCloudAiplatformV1beta1ExternalApi {
  /** Parameters for the elastic search API. */
  elasticSearchParams?: GoogleCloudAiplatformV1beta1ExternalApiElasticSearchParams;
  /** The API spec that the external API implements. */
  apiSpec?:
    | "API_SPEC_UNSPECIFIED"
    | "SIMPLE_SEARCH"
    | "ELASTIC_SEARCH"
    | (string & {});
  /** The endpoint of the external API. The system will call the API at this endpoint to retrieve the data for grounding. Example: https://acme.com:443/search */
  endpoint?: string;
  /** The authentication config to access the API. Deprecated. Please use auth_config instead. */
  apiAuth?: GoogleCloudAiplatformV1beta1ApiAuth;
  /** Parameters for the simple search API. */
  simpleSearchParams?: GoogleCloudAiplatformV1beta1ExternalApiSimpleSearchParams;
  /** The authentication config to access the API. */
  authConfig?: GoogleCloudAiplatformV1beta1AuthConfig;
}

export const GoogleCloudAiplatformV1beta1ExternalApi: Schema.Codec<GoogleCloudAiplatformV1beta1ExternalApi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elasticSearchParams: Schema.optional(
      GoogleCloudAiplatformV1beta1ExternalApiElasticSearchParams,
    ),
    apiSpec: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    apiAuth: Schema.optional(GoogleCloudAiplatformV1beta1ApiAuth),
    simpleSearchParams: Schema.optional(
      GoogleCloudAiplatformV1beta1ExternalApiSimpleSearchParams,
    ),
    authConfig: Schema.optional(GoogleCloudAiplatformV1beta1AuthConfig),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ExternalApi" });

export interface GoogleCloudAiplatformV1beta1Retrieval {
  /** Set to use data source powered by Vertex RAG store. User data is uploaded via the VertexRagDataService. */
  vertexRagStore?: GoogleCloudAiplatformV1beta1VertexRagStore;
  /** Optional. Deprecated. This option is no longer supported. */
  disableAttribution?: boolean;
  /** Set to use data source powered by Vertex AI Search. */
  vertexAiSearch?: GoogleCloudAiplatformV1beta1VertexAISearch;
  /** Use data source powered by external API for grounding. */
  externalApi?: GoogleCloudAiplatformV1beta1ExternalApi;
}

export const GoogleCloudAiplatformV1beta1Retrieval: Schema.Codec<GoogleCloudAiplatformV1beta1Retrieval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertexRagStore: Schema.optional(GoogleCloudAiplatformV1beta1VertexRagStore),
    disableAttribution: Schema.optional(Schema.Boolean),
    vertexAiSearch: Schema.optional(GoogleCloudAiplatformV1beta1VertexAISearch),
    externalApi: Schema.optional(GoogleCloudAiplatformV1beta1ExternalApi),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1Retrieval" });

export interface GoogleCloudAiplatformV1beta1EnterpriseWebSearch {
  /** Optional. Sites with confidence level chosen & above this value will be blocked from the search results. */
  blockingConfidence?:
    | "PHISH_BLOCK_THRESHOLD_UNSPECIFIED"
    | "BLOCK_LOW_AND_ABOVE"
    | "BLOCK_MEDIUM_AND_ABOVE"
    | "BLOCK_HIGH_AND_ABOVE"
    | "BLOCK_HIGHER_AND_ABOVE"
    | "BLOCK_VERY_HIGH_AND_ABOVE"
    | "BLOCK_ONLY_EXTREMELY_HIGH"
    | (string & {});
  /** Optional. List of domains to be excluded from the search results. The default limit is 2000 domains. */
  excludeDomains?: ReadonlyArray<string>;
}

export const GoogleCloudAiplatformV1beta1EnterpriseWebSearch: Schema.Codec<GoogleCloudAiplatformV1beta1EnterpriseWebSearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockingConfidence: Schema.optional(Schema.String),
    excludeDomains: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1EnterpriseWebSearch",
  });

export interface GoogleCloudAiplatformV1beta1ToolCodeExecution {}

export const GoogleCloudAiplatformV1beta1ToolCodeExecution: Schema.Codec<GoogleCloudAiplatformV1beta1ToolCodeExecution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ToolCodeExecution",
  });

export interface GoogleCloudAiplatformV1beta1UrlContext {}

export const GoogleCloudAiplatformV1beta1UrlContext: Schema.Codec<GoogleCloudAiplatformV1beta1UrlContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAiplatformV1beta1UrlContext",
  });

export interface GoogleCloudAiplatformV1beta1ToolExaAiSearch {
  /** Optional. This field can be used to pass any parameter from the Exa.ai Search API. */
  customConfigs?: Record<string, unknown>;
  /** Required. The API key for ExaAiSearch. */
  apiKey?: string;
}

export const GoogleCloudAiplatformV1beta1ToolExaAiSearch: Schema.Codec<GoogleCloudAiplatformV1beta1ToolExaAiSearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customConfigs: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    apiKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ToolExaAiSearch" });

export interface GoogleCloudAiplatformV1beta1Schema {
  /** Optional. The format of the data. For `NUMBER` type, format can be `float` or `double`. For `INTEGER` type, format can be `int32` or `int64`. For `STRING` type, format can be `email`, `byte`, `date`, `date-time`, `password`, and other formats to further refine the data type. */
  format?: string;
  /** Optional. Allows referencing another schema definition to use in place of this schema. The value must be a valid reference to a schema in `defs`. For example, the following schema defines a reference to a schema node named "Pet": type: object properties: pet: ref: #/defs/Pet defs: Pet: type: object properties: name: type: string The value of the "pet" property is a reference to the schema node named "Pet". See details in https://json-schema.org/understanding-json-schema/structuring */
  ref?: string;
  /** Optional. If type is `INTEGER` or `NUMBER`, `minimum` specifies the minimum allowed value. */
  minimum?: number;
  /** Optional. Data type of the schema field. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "STRING"
    | "NUMBER"
    | "INTEGER"
    | "BOOLEAN"
    | "ARRAY"
    | "OBJECT"
    | "NULL"
    | (string & {});
  /** Optional. If type is `STRING`, `max_length` specifies the maximum length of the string. */
  maxLength?: string;
  /** Optional. `defs` provides a map of schema definitions that can be reused by `ref` elsewhere in the schema. Only allowed at root level of the schema. */
  defs?: Record<string, GoogleCloudAiplatformV1beta1Schema>;
  /** Optional. If type is `ARRAY`, `min_items` specifies the minimum number of items in an array. */
  minItems?: string;
  /** Optional. If type is `INTEGER` or `NUMBER`, `maximum` specifies the maximum allowed value. */
  maximum?: number;
  /** Optional. If type is `OBJECT`, `properties` is a map of property names to schema definitions for each property of the object. */
  properties?: Record<string, GoogleCloudAiplatformV1beta1Schema>;
  /** Optional. Indicates if the value of this field can be null. */
  nullable?: boolean;
  /** Optional. Example of an instance of this schema. */
  example?: unknown;
  /** Optional. If type is `STRING`, `pattern` specifies a regular expression that the string must match. */
  pattern?: string;
  /** Optional. Title for the schema. */
  title?: string;
  /** Optional. The instance must be valid against any (one or more) of the subschemas listed in `any_of`. */
  anyOf?: ReadonlyArray<GoogleCloudAiplatformV1beta1Schema>;
  /** Optional. If `type` is `OBJECT`, specifies how to handle properties not defined in `properties`. If it is a boolean `false`, no additional properties are allowed. If it is a schema, additional properties are allowed if they conform to the schema. */
  additionalProperties?: unknown;
  /** Optional. If type is `ARRAY`, `items` specifies the schema of elements in the array. */
  items?: GoogleCloudAiplatformV1beta1Schema;
  /** Optional. Default value to use if the field is not specified. */
  default?: unknown;
  /** Optional. If type is `OBJECT`, `required` lists the names of properties that must be present. */
  required?: ReadonlyArray<string>;
  /** Optional. If type is `STRING`, `min_length` specifies the minimum length of the string. */
  minLength?: string;
  /** Optional. Describes the data. The model uses this field to understand the purpose of the schema and how to use it. It is a best practice to provide a clear and descriptive explanation for the schema and its properties here, rather than in the prompt. */
  description?: string;
  /** Optional. Order of properties displayed or used where order matters. This is not a standard field in OpenAPI specification, but can be used to control the order of properties. */
  propertyOrdering?: ReadonlyArray<string>;
  /** Optional. If type is `ARRAY`, `max_items` specifies the maximum number of items in an array. */
  maxItems?: string;
  /** Optional. If type is `OBJECT`, `min_properties` specifies the minimum number of properties that can be provided. */
  minProperties?: string;
  /** Optional. If type is `OBJECT`, `max_properties` specifies the maximum number of properties that can be provided. */
  maxProperties?: string;
  /** Optional. Possible values of the field. This field can be used to restrict a value to a fixed set of values. To mark a field as an enum, set `format` to `enum` and provide the list of possible values in `enum`. For example: 1. To define directions: `{type:STRING, format:enum, enum:["EAST", "NORTH", "SOUTH", "WEST"]}` 2. To define apartment numbers: `{type:INTEGER, format:enum, enum:["101", "201", "301"]}` */
  enum?: ReadonlyArray<string>;
}

export const GoogleCloudAiplatformV1beta1Schema: Schema.Codec<GoogleCloudAiplatformV1beta1Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      format: Schema.optional(Schema.String),
      ref: Schema.optional(Schema.String),
      minimum: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.String),
      maxLength: Schema.optional(Schema.String),
      defs: Schema.optional(
        Schema.Record(Schema.String, GoogleCloudAiplatformV1beta1Schema),
      ),
      minItems: Schema.optional(Schema.String),
      maximum: Schema.optional(Schema.Number),
      properties: Schema.optional(
        Schema.Record(Schema.String, GoogleCloudAiplatformV1beta1Schema),
      ),
      nullable: Schema.optional(Schema.Boolean),
      example: Schema.optional(Schema.Unknown),
      pattern: Schema.optional(Schema.String),
      title: Schema.optional(Schema.String),
      anyOf: Schema.optional(Schema.Array(GoogleCloudAiplatformV1beta1Schema)),
      additionalProperties: Schema.optional(Schema.Unknown),
      items: Schema.optional(GoogleCloudAiplatformV1beta1Schema),
      default: Schema.optional(Schema.Unknown),
      required: Schema.optional(Schema.Array(Schema.String)),
      minLength: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      propertyOrdering: Schema.optional(Schema.Array(Schema.String)),
      maxItems: Schema.optional(Schema.String),
      minProperties: Schema.optional(Schema.String),
      maxProperties: Schema.optional(Schema.String),
      enum: Schema.optional(Schema.Array(Schema.String)),
    }),
  ).annotate({
    identifier: "GoogleCloudAiplatformV1beta1Schema",
  }) as any as Schema.Codec<GoogleCloudAiplatformV1beta1Schema>;

export interface GoogleCloudAiplatformV1beta1FunctionDeclaration {
  /** Required. The name of the function to call. Must start with a letter or an underscore. Must be a-z, A-Z, 0-9, or contain underscores, dots, colons and dashes, with a maximum length of 128. */
  name?: string;
  /** Optional. Description and purpose of the function. Model uses it to decide how and whether to call the function. */
  description?: string;
  /** Optional. Describes the parameters to this function in JSON Schema Object format. Reflects the Open API 3.03 Parameter Object. string Key: the name of the parameter. Parameter names are case sensitive. Schema Value: the Schema defining the type used for the parameter. For function with no parameters, this can be left unset. Parameter names must start with a letter or an underscore and must only contain chars a-z, A-Z, 0-9, or underscores with a maximum length of 64. Example with 1 required and 1 optional parameter: type: OBJECT properties: param1: type: STRING param2: type: INTEGER required: - param1 */
  parameters?: GoogleCloudAiplatformV1beta1Schema;
  /** Optional. Describes the parameters to the function in JSON Schema format. The schema must describe an object where the properties are the parameters to the function. For example: ``` { "type": "object", "properties": { "name": { "type": "string" }, "age": { "type": "integer" } }, "additionalProperties": false, "required": ["name", "age"], "propertyOrdering": ["name", "age"] } ``` This field is mutually exclusive with `parameters`. */
  parametersJsonSchema?: unknown;
  /** Optional. Describes the output from this function in JSON Schema format. The value specified by the schema is the response value of the function. This field is mutually exclusive with `response`. */
  responseJsonSchema?: unknown;
  /** Optional. Specifies the function Behavior. If not specified, the system keeps the current function call behavior. This field is currently only supported by the BidiGenerateContent method. */
  behavior?: "UNSPECIFIED" | "BLOCKING" | "NON_BLOCKING" | (string & {});
  /** Optional. Describes the output from this function in JSON Schema format. Reflects the Open API 3.03 Response Object. The Schema defines the type used for the response value of the function. */
  response?: GoogleCloudAiplatformV1beta1Schema;
}

export const GoogleCloudAiplatformV1beta1FunctionDeclaration: Schema.Codec<GoogleCloudAiplatformV1beta1FunctionDeclaration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    parameters: Schema.optional(GoogleCloudAiplatformV1beta1Schema),
    parametersJsonSchema: Schema.optional(Schema.Unknown),
    responseJsonSchema: Schema.optional(Schema.Unknown),
    behavior: Schema.optional(Schema.String),
    response: Schema.optional(GoogleCloudAiplatformV1beta1Schema),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1FunctionDeclaration",
  });

export interface GoogleCloudAiplatformV1beta1GoogleMaps {
  /** Optional. Deprecated: The Google Maps contextual widget behavior in Grounding with Google Maps is being deprecated; this field is planned for removal and no longer has any effect once removed. If true, include the widget context token in the response. */
  enableWidget?: boolean;
}

export const GoogleCloudAiplatformV1beta1GoogleMaps: Schema.Codec<GoogleCloudAiplatformV1beta1GoogleMaps> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableWidget: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1GoogleMaps" });

export interface GoogleCloudAiplatformV1beta1ToolGoogleSearchImageSearch {}

export const GoogleCloudAiplatformV1beta1ToolGoogleSearchImageSearch: Schema.Codec<GoogleCloudAiplatformV1beta1ToolGoogleSearchImageSearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ToolGoogleSearchImageSearch",
  });

export interface GoogleCloudAiplatformV1beta1ToolGoogleSearchWebSearch {}

export const GoogleCloudAiplatformV1beta1ToolGoogleSearchWebSearch: Schema.Codec<GoogleCloudAiplatformV1beta1ToolGoogleSearchWebSearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ToolGoogleSearchWebSearch",
  });

export interface GoogleCloudAiplatformV1beta1ToolGoogleSearchSearchTypes {
  /** Optional. Setting this field enables image search. Image bytes are returned. */
  imageSearch?: GoogleCloudAiplatformV1beta1ToolGoogleSearchImageSearch;
  /** Optional. Setting this field enables web search. Only text results are returned. */
  webSearch?: GoogleCloudAiplatformV1beta1ToolGoogleSearchWebSearch;
}

export const GoogleCloudAiplatformV1beta1ToolGoogleSearchSearchTypes: Schema.Codec<GoogleCloudAiplatformV1beta1ToolGoogleSearchSearchTypes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageSearch: Schema.optional(
      GoogleCloudAiplatformV1beta1ToolGoogleSearchImageSearch,
    ),
    webSearch: Schema.optional(
      GoogleCloudAiplatformV1beta1ToolGoogleSearchWebSearch,
    ),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ToolGoogleSearchSearchTypes",
  });

export interface GoogleCloudAiplatformV1beta1ToolGoogleSearch {
  /** Optional. The set of search types to enable. If not set, web search is enabled by default. */
  searchTypes?: GoogleCloudAiplatformV1beta1ToolGoogleSearchSearchTypes;
  /** Optional. List of domains to be excluded from the search results. The default limit is 2000 domains. Example: ["amazon.com", "facebook.com"]. */
  excludeDomains?: ReadonlyArray<string>;
  /** Optional. Sites with confidence level chosen & above this value will be blocked from the search results. */
  blockingConfidence?:
    | "PHISH_BLOCK_THRESHOLD_UNSPECIFIED"
    | "BLOCK_LOW_AND_ABOVE"
    | "BLOCK_MEDIUM_AND_ABOVE"
    | "BLOCK_HIGH_AND_ABOVE"
    | "BLOCK_HIGHER_AND_ABOVE"
    | "BLOCK_VERY_HIGH_AND_ABOVE"
    | "BLOCK_ONLY_EXTREMELY_HIGH"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1ToolGoogleSearch: Schema.Codec<GoogleCloudAiplatformV1beta1ToolGoogleSearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchTypes: Schema.optional(
      GoogleCloudAiplatformV1beta1ToolGoogleSearchSearchTypes,
    ),
    excludeDomains: Schema.optional(Schema.Array(Schema.String)),
    blockingConfidence: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ToolGoogleSearch" });

export interface GoogleCloudAiplatformV1beta1ToolParallelAiSearch {
  /** Optional. Deprecated: Use `enable_zero_data_retention` instead. Instructs Vertex Grounding to use Parallel's Zero Data Retention Marketplace product. If this value is "false" or omitted, the Parallel Web Search for Grounding standard subscription will be used. If this value is "true", the Parallel Web Search for Grounding - ZDR subscription will be used. */
  enableDataRetention?: boolean;
  /** Optional. Instructs Vertex Grounding to use Parallel's Zero Data Retention Marketplace product. If this value is "false" or omitted, the Parallel Web Search for Grounding standard subscription will be used. If this value is "true", the Parallel Web Search for Grounding - ZDR subscription will be used. */
  enableZeroDataRetention?: boolean;
  /** Optional. Custom configs for ParallelAiSearch. This field can be used to pass any parameter from the Parallel.ai Search API. See the Parallel.ai documentation for the full list of available parameters and their usage: https://docs.parallel.ai/api-reference/search-beta/search Currently only `source_policy`, `excerpts`, `max_results`, `mode`, `fetch_policy` can be set via this field. For example: { "source_policy": { "include_domains": ["google.com", "wikipedia.org"], "exclude_domains": ["example.com"] }, "fetch_policy": { "max_age_seconds": 3600 } } */
  customConfigs?: Record<string, unknown>;
  /** Optional. The API key for ParallelAiSearch. If an API key is not provided, the system will attempt to verify access by checking for an active Parallel.ai subscription through the Google Cloud Marketplace. See https://docs.parallel.ai/search/search-quickstart for more details. */
  apiKey?: string;
}

export const GoogleCloudAiplatformV1beta1ToolParallelAiSearch: Schema.Codec<GoogleCloudAiplatformV1beta1ToolParallelAiSearch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableDataRetention: Schema.optional(Schema.Boolean),
    enableZeroDataRetention: Schema.optional(Schema.Boolean),
    customConfigs: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    apiKey: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ToolParallelAiSearch",
  });

export interface GoogleCloudAiplatformV1beta1ToolComputerUse {
  /** Required. The environment being operated. */
  environment?:
    | "ENVIRONMENT_UNSPECIFIED"
    | "ENVIRONMENT_BROWSER"
    | "ENVIRONMENT_MOBILE"
    | "ENVIRONMENT_DESKTOP"
    | (string & {});
  /** Optional. Enables the prompt injection detection check on computer-use request. */
  enablePromptInjectionDetection?: boolean;
  /** Optional. By default, [predefined functions](https://cloud.google.com/vertex-ai/generative-ai/docs/computer-use#supported-actions) are included in the final model call. Some of them can be explicitly excluded from being automatically included. This can serve two purposes: 1. Using a more restricted / different action space. 2. Improving the definitions / instructions of predefined functions. */
  excludedPredefinedFunctions?: ReadonlyArray<string>;
}

export const GoogleCloudAiplatformV1beta1ToolComputerUse: Schema.Codec<GoogleCloudAiplatformV1beta1ToolComputerUse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.String),
    enablePromptInjectionDetection: Schema.optional(Schema.Boolean),
    excludedPredefinedFunctions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ToolComputerUse" });

export interface GoogleCloudAiplatformV1beta1DynamicRetrievalConfig {
  /** The mode of the predictor to be used in dynamic retrieval. */
  mode?: "MODE_UNSPECIFIED" | "MODE_DYNAMIC" | (string & {});
  /** Optional. The threshold to be used in dynamic retrieval. If not set, a system default value is used. */
  dynamicThreshold?: number;
}

export const GoogleCloudAiplatformV1beta1DynamicRetrievalConfig: Schema.Codec<GoogleCloudAiplatformV1beta1DynamicRetrievalConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    dynamicThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1DynamicRetrievalConfig",
  });

export interface GoogleCloudAiplatformV1beta1GoogleSearchRetrieval {
  /** Specifies the dynamic retrieval configuration for the given source. */
  dynamicRetrievalConfig?: GoogleCloudAiplatformV1beta1DynamicRetrievalConfig;
}

export const GoogleCloudAiplatformV1beta1GoogleSearchRetrieval: Schema.Codec<GoogleCloudAiplatformV1beta1GoogleSearchRetrieval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicRetrievalConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1DynamicRetrievalConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GoogleSearchRetrieval",
  });

export interface GoogleCloudAiplatformV1beta1Tool {
  /** Optional. Retrieval tool type. System will always execute the provided retrieval tool(s) to get external knowledge to answer the prompt. Retrieval results are presented to the model for generation. */
  retrieval?: GoogleCloudAiplatformV1beta1Retrieval;
  /** Optional. Tool to support searching public web data, powered by Vertex AI Search and Sec4 compliance. */
  enterpriseWebSearch?: GoogleCloudAiplatformV1beta1EnterpriseWebSearch;
  /** Optional. CodeExecution tool type. Enables the model to execute code as part of generation. */
  codeExecution?: GoogleCloudAiplatformV1beta1ToolCodeExecution;
  /** Optional. Tool to support URL context retrieval. */
  urlContext?: GoogleCloudAiplatformV1beta1UrlContext;
  /** Optional. Uses Exa.ai to search for information to answer user queries. The search results will be grounded on Exa.ai and presented to the model for response generation */
  exaAiSearch?: GoogleCloudAiplatformV1beta1ToolExaAiSearch;
  /** Optional. Function tool type. One or more function declarations to be passed to the model along with the current user query. Model may decide to call a subset of these functions by populating FunctionCall in the response. User should provide a FunctionResponse for each function call in the next turn. Based on the function responses, Model will generate the final response back to the user. Maximum 512 function declarations can be provided. */
  functionDeclarations?: ReadonlyArray<GoogleCloudAiplatformV1beta1FunctionDeclaration>;
  /** Optional. GoogleMaps tool type. Tool to support Google Maps in Model. */
  googleMaps?: GoogleCloudAiplatformV1beta1GoogleMaps;
  /** Optional. GoogleSearch tool type. Tool to support Google Search in Model. Powered by Google. */
  googleSearch?: GoogleCloudAiplatformV1beta1ToolGoogleSearch;
  /** Optional. If specified, Vertex AI will use Parallel.ai to search for information to answer user queries. The search results will be grounded on Parallel.ai and presented to the model for response generation */
  parallelAiSearch?: GoogleCloudAiplatformV1beta1ToolParallelAiSearch;
  /** Optional. Tool to support the model interacting directly with the computer. If enabled, it automatically populates computer-use specific Function Declarations. */
  computerUse?: GoogleCloudAiplatformV1beta1ToolComputerUse;
  /** Optional. Specialized retrieval tool that is powered by Google Search. */
  googleSearchRetrieval?: GoogleCloudAiplatformV1beta1GoogleSearchRetrieval;
}

export const GoogleCloudAiplatformV1beta1Tool: Schema.Codec<GoogleCloudAiplatformV1beta1Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retrieval: Schema.optional(GoogleCloudAiplatformV1beta1Retrieval),
    enterpriseWebSearch: Schema.optional(
      GoogleCloudAiplatformV1beta1EnterpriseWebSearch,
    ),
    codeExecution: Schema.optional(
      GoogleCloudAiplatformV1beta1ToolCodeExecution,
    ),
    urlContext: Schema.optional(GoogleCloudAiplatformV1beta1UrlContext),
    exaAiSearch: Schema.optional(GoogleCloudAiplatformV1beta1ToolExaAiSearch),
    functionDeclarations: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1FunctionDeclaration),
    ),
    googleMaps: Schema.optional(GoogleCloudAiplatformV1beta1GoogleMaps),
    googleSearch: Schema.optional(GoogleCloudAiplatformV1beta1ToolGoogleSearch),
    parallelAiSearch: Schema.optional(
      GoogleCloudAiplatformV1beta1ToolParallelAiSearch,
    ),
    computerUse: Schema.optional(GoogleCloudAiplatformV1beta1ToolComputerUse),
    googleSearchRetrieval: Schema.optional(
      GoogleCloudAiplatformV1beta1GoogleSearchRetrieval,
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1Tool" });

export interface GoogleCloudAiplatformV1beta1PartMediaResolution {
  /** The tokenization quality used for given media. */
  level?:
    | "MEDIA_RESOLUTION_UNSPECIFIED"
    | "MEDIA_RESOLUTION_LOW"
    | "MEDIA_RESOLUTION_MEDIUM"
    | "MEDIA_RESOLUTION_HIGH"
    | "MEDIA_RESOLUTION_ULTRA_HIGH"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1PartMediaResolution: Schema.Codec<GoogleCloudAiplatformV1beta1PartMediaResolution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1PartMediaResolution",
  });

export interface GoogleCloudAiplatformV1beta1VideoMetadata {
  /** Optional. The frame rate of the video sent to the model. If not specified, the default value is 1.0. The valid range is (0.0, 24.0]. */
  fps?: number;
  /** Optional. The start offset of the video. */
  startOffset?: string;
  /** Optional. The end offset of the video. */
  endOffset?: string;
}

export const GoogleCloudAiplatformV1beta1VideoMetadata: Schema.Codec<GoogleCloudAiplatformV1beta1VideoMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fps: Schema.optional(Schema.Number),
    startOffset: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1VideoMetadata" });

export interface GoogleCloudAiplatformV1beta1FunctionResponseBlob {
  /** Required. The IANA standard MIME type of the source data. */
  mimeType?: string;
  /** Optional. Display name of the blob. Used to provide a label or filename to distinguish blobs. This field is only returned in PromptMessage for prompt management. It is currently used in the Gemini GenerateContent calls only when server side tools (code_execution, google_search, and url_context) are enabled. */
  displayName?: string;
  /** Required. Raw bytes. */
  data?: string;
}

export const GoogleCloudAiplatformV1beta1FunctionResponseBlob: Schema.Codec<GoogleCloudAiplatformV1beta1FunctionResponseBlob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1FunctionResponseBlob",
  });

export interface GoogleCloudAiplatformV1beta1FunctionResponseFileData {
  /** Required. The IANA standard MIME type of the source data. */
  mimeType?: string;
  /** Optional. Display name of the file data. Used to provide a label or filename to distinguish file datas. This field is only returned in PromptMessage for prompt management. It is currently used in the Gemini GenerateContent calls only when server side tools (code_execution, google_search, and url_context) are enabled. */
  displayName?: string;
  /** Required. URI. */
  fileUri?: string;
}

export const GoogleCloudAiplatformV1beta1FunctionResponseFileData: Schema.Codec<GoogleCloudAiplatformV1beta1FunctionResponseFileData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    fileUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1FunctionResponseFileData",
  });

export interface GoogleCloudAiplatformV1beta1FunctionResponsePart {
  /** Inline media bytes. */
  inlineData?: GoogleCloudAiplatformV1beta1FunctionResponseBlob;
  /** URI based data. */
  fileData?: GoogleCloudAiplatformV1beta1FunctionResponseFileData;
}

export const GoogleCloudAiplatformV1beta1FunctionResponsePart: Schema.Codec<GoogleCloudAiplatformV1beta1FunctionResponsePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inlineData: Schema.optional(
      GoogleCloudAiplatformV1beta1FunctionResponseBlob,
    ),
    fileData: Schema.optional(
      GoogleCloudAiplatformV1beta1FunctionResponseFileData,
    ),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1FunctionResponsePart",
  });

export interface GoogleCloudAiplatformV1beta1FunctionResponse {
  /** Required. The function response in JSON object format. Use "output" key to specify function output and "error" key to specify error details (if any). If "output" and "error" keys are not specified, then whole "response" is treated as function output. */
  response?: Record<string, unknown>;
  /** Optional. Ordered `Parts` that constitute a function response. Parts may have different IANA MIME types. */
  parts?: ReadonlyArray<GoogleCloudAiplatformV1beta1FunctionResponsePart>;
  /** Optional. The id of the function call this response is for. Populated by the client to match the corresponding function call `id`. */
  id?: string;
  /** Required. The name of the function to call. Matches FunctionDeclaration.name and FunctionCall.name. */
  name?: string;
  /** Optional. Specifies how the response should be scheduled in the conversation. Only applicable to NON_BLOCKING function calls, is ignored otherwise. Defaults to WHEN_IDLE. */
  scheduling?:
    | "SCHEDULING_UNSPECIFIED"
    | "SILENT"
    | "WHEN_IDLE"
    | "INTERRUPT"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1FunctionResponse: Schema.Codec<GoogleCloudAiplatformV1beta1FunctionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    parts: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1FunctionResponsePart),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    scheduling: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1FunctionResponse" });

export interface GoogleCloudAiplatformV1beta1ExecutableCode {
  /** Required. Programming language of the `code`. */
  language?: "LANGUAGE_UNSPECIFIED" | "PYTHON" | (string & {});
  /** Required. The code to be executed. */
  code?: string;
}

export const GoogleCloudAiplatformV1beta1ExecutableCode: Schema.Codec<GoogleCloudAiplatformV1beta1ExecutableCode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    language: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ExecutableCode" });

export interface GoogleCloudAiplatformV1beta1CodeExecutionResult {
  /** Required. Outcome of the code execution. */
  outcome?:
    | "OUTCOME_UNSPECIFIED"
    | "OUTCOME_OK"
    | "OUTCOME_FAILED"
    | "OUTCOME_DEADLINE_EXCEEDED"
    | (string & {});
  /** Optional. Contains stdout when code execution is successful, stderr or other description otherwise. */
  output?: string;
}

export const GoogleCloudAiplatformV1beta1CodeExecutionResult: Schema.Codec<GoogleCloudAiplatformV1beta1CodeExecutionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outcome: Schema.optional(Schema.String),
    output: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1CodeExecutionResult",
  });

export interface GoogleCloudAiplatformV1beta1PartialArg {
  /** Optional. Represents a double value. */
  numberValue?: number;
  /** Required. A JSON Path (RFC 9535) to the argument being streamed. https://datatracker.ietf.org/doc/html/rfc9535. e.g. "$.foo.bar[0].data". */
  jsonPath?: string;
  /** Optional. Represents a string value. */
  stringValue?: string;
  /** Optional. Represents a boolean value. */
  boolValue?: boolean;
  /** Optional. Whether this is not the last part of the same json_path. If true, another PartialArg message for the current json_path is expected to follow. */
  willContinue?: boolean;
  /** Optional. Represents a null value. */
  nullValue?: "NULL_VALUE" | (string & {});
}

export const GoogleCloudAiplatformV1beta1PartialArg: Schema.Codec<GoogleCloudAiplatformV1beta1PartialArg> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberValue: Schema.optional(Schema.Number),
    jsonPath: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    willContinue: Schema.optional(Schema.Boolean),
    nullValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1PartialArg" });

export interface GoogleCloudAiplatformV1beta1FunctionCall {
  /** Optional. Whether this is the last part of the FunctionCall. If true, another partial message for the current FunctionCall is expected to follow. */
  willContinue?: boolean;
  /** Optional. The name of the function to call. Matches FunctionDeclaration.name. */
  name?: string;
  /** Optional. The function parameters and values in JSON object format. See FunctionDeclaration.parameters for parameter details. */
  args?: Record<string, unknown>;
  /** Optional. The partial argument value of the function call. If provided, represents the arguments/fields that are streamed incrementally. */
  partialArgs?: ReadonlyArray<GoogleCloudAiplatformV1beta1PartialArg>;
  /** Optional. The unique id of the function call. If populated, the client to execute the `function_call` and return the response with the matching `id`. */
  id?: string;
}

export const GoogleCloudAiplatformV1beta1FunctionCall: Schema.Codec<GoogleCloudAiplatformV1beta1FunctionCall> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    willContinue: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    partialArgs: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1PartialArg),
    ),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1FunctionCall" });

export interface GoogleCloudAiplatformV1beta1Blob {
  /** Required. The IANA standard MIME type of the source data. */
  mimeType?: string;
  /** Optional. The display name of the blob. Used to provide a label or filename to distinguish blobs. This field is only returned in `PromptMessage` for prompt management. It is used in the Gemini calls only when server-side tools (`code_execution`, `google_search`, and `url_context`) are enabled. */
  displayName?: string;
  /** Required. The raw bytes of the data. */
  data?: string;
}

export const GoogleCloudAiplatformV1beta1Blob: Schema.Codec<GoogleCloudAiplatformV1beta1Blob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1Blob" });

export interface GoogleCloudAiplatformV1beta1Part {
  /** Optional. The URI-based data of the part. This can be used to include files from Google Cloud Storage. */
  fileData?: GoogleCloudAiplatformV1beta1FileData;
  /** per part media resolution. Media resolution for the input media. */
  mediaResolution?: GoogleCloudAiplatformV1beta1PartMediaResolution;
  /** Optional. An opaque signature for the thought so it can be reused in subsequent requests. */
  thoughtSignature?: string;
  /** Optional. Video metadata. The metadata should only be specified while the video data is presented in inline_data or file_data. */
  videoMetadata?: GoogleCloudAiplatformV1beta1VideoMetadata;
  /** Optional. The result of a function call. This is used to provide the model with the result of a function call that it predicted. */
  functionResponse?: GoogleCloudAiplatformV1beta1FunctionResponse;
  /** Optional. Code generated by the model that is intended to be executed. */
  executableCode?: GoogleCloudAiplatformV1beta1ExecutableCode;
  /** Optional. The result of executing the ExecutableCode. */
  codeExecutionResult?: GoogleCloudAiplatformV1beta1CodeExecutionResult;
  /** Optional. Indicates whether the `part` represents the model's thought process or reasoning. */
  thought?: boolean;
  /** Optional. A predicted function call returned from the model. This contains the name of the function to call and the arguments to pass to the function. */
  functionCall?: GoogleCloudAiplatformV1beta1FunctionCall;
  /** Optional. The inline data content of the part. This can be used to include images, audio, or video in a request. */
  inlineData?: GoogleCloudAiplatformV1beta1Blob;
  /** Optional. The text content of the part. When sent from the VSCode Gemini Code Assist extension, references to @mentioned items will be converted to markdown boldface text. For example `@my-repo` will be converted to and sent as `**my-repo**` by the IDE agent. */
  text?: string;
}

export const GoogleCloudAiplatformV1beta1Part: Schema.Codec<GoogleCloudAiplatformV1beta1Part> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileData: Schema.optional(GoogleCloudAiplatformV1beta1FileData),
    mediaResolution: Schema.optional(
      GoogleCloudAiplatformV1beta1PartMediaResolution,
    ),
    thoughtSignature: Schema.optional(Schema.String),
    videoMetadata: Schema.optional(GoogleCloudAiplatformV1beta1VideoMetadata),
    functionResponse: Schema.optional(
      GoogleCloudAiplatformV1beta1FunctionResponse,
    ),
    executableCode: Schema.optional(GoogleCloudAiplatformV1beta1ExecutableCode),
    codeExecutionResult: Schema.optional(
      GoogleCloudAiplatformV1beta1CodeExecutionResult,
    ),
    thought: Schema.optional(Schema.Boolean),
    functionCall: Schema.optional(GoogleCloudAiplatformV1beta1FunctionCall),
    inlineData: Schema.optional(GoogleCloudAiplatformV1beta1Blob),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1Part" });

export interface GoogleCloudAiplatformV1beta1Content {
  /** Required. A list of Part objects that make up a single message. Parts of a message can have different MIME types. A Content message must have at least one Part. */
  parts?: ReadonlyArray<GoogleCloudAiplatformV1beta1Part>;
  /** Optional. The producer of the content. Must be either 'user' or 'model'. If not set, the service will default to 'user'. */
  role?: string;
}

export const GoogleCloudAiplatformV1beta1Content: Schema.Codec<GoogleCloudAiplatformV1beta1Content> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(Schema.Array(GoogleCloudAiplatformV1beta1Part)),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1Content" });

export interface GoogleCloudAiplatformV1beta1SafetySetting {
  /** Required. The harm category to be blocked. */
  category?:
    | "HARM_CATEGORY_UNSPECIFIED"
    | "HARM_CATEGORY_HATE_SPEECH"
    | "HARM_CATEGORY_DANGEROUS_CONTENT"
    | "HARM_CATEGORY_HARASSMENT"
    | "HARM_CATEGORY_SEXUALLY_EXPLICIT"
    | "HARM_CATEGORY_CIVIC_INTEGRITY"
    | "HARM_CATEGORY_IMAGE_HATE"
    | "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT"
    | "HARM_CATEGORY_IMAGE_HARASSMENT"
    | "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"
    | "HARM_CATEGORY_JAILBREAK"
    | (string & {});
  /** Required. The threshold for blocking content. If the harm probability exceeds this threshold, the content will be blocked. */
  threshold?:
    | "HARM_BLOCK_THRESHOLD_UNSPECIFIED"
    | "BLOCK_LOW_AND_ABOVE"
    | "BLOCK_MEDIUM_AND_ABOVE"
    | "BLOCK_ONLY_HIGH"
    | "BLOCK_NONE"
    | "OFF"
    | (string & {});
  /** Optional. The method for blocking content. If not specified, the default behavior is to use the probability score. */
  method?:
    | "HARM_BLOCK_METHOD_UNSPECIFIED"
    | "SEVERITY"
    | "PROBABILITY"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1SafetySetting: Schema.Codec<GoogleCloudAiplatformV1beta1SafetySetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    threshold: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1SafetySetting" });

export interface GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode {
  /** The model routing preference. */
  modelRoutingPreference?:
    | "UNKNOWN"
    | "PRIORITIZE_QUALITY"
    | "BALANCED"
    | "PRIORITIZE_COST"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode: Schema.Codec<GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelRoutingPreference: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode",
  });

export interface GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode {
  /** The name of the model to use. Only public LLM models are accepted. */
  modelName?: string;
}

export const GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode: Schema.Codec<GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode",
  });

export interface GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig {
  /** In this mode, the model is selected automatically based on the content of the request. */
  autoMode?: GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode;
  /** In this mode, the model is specified manually. */
  manualMode?: GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode;
}

export const GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig: Schema.Codec<GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoMode: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigAutoRoutingMode,
    ),
    manualMode: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfigManualRoutingMode,
    ),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig",
  });

export interface GoogleCloudAiplatformV1beta1GenerationConfigModelConfig {
  /** Required. Feature selection preference. */
  featureSelectionPreference?:
    | "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED"
    | "PRIORITIZE_QUALITY"
    | "BALANCED"
    | "PRIORITIZE_COST"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1GenerationConfigModelConfig: Schema.Codec<GoogleCloudAiplatformV1beta1GenerationConfigModelConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureSelectionPreference: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GenerationConfigModelConfig",
  });

export interface GoogleCloudAiplatformV1beta1AudioResponseFormat {
  /** Optional. The MIME type of the audio output. */
  mimeType?:
    | "MIME_TYPE_UNSPECIFIED"
    | "AUDIO_MP3"
    | "AUDIO_OGG_OPUS"
    | "AUDIO_L16"
    | "AUDIO_WAV"
    | "AUDIO_ALAW"
    | "AUDIO_MULAW"
    | (string & {});
  /** Optional. Delivery mode for the generated content. */
  delivery?: "DELIVERY_UNSPECIFIED" | "INLINE" | "URI" | (string & {});
  /** Optional. Bit rate in bits per second (bps). Only applicable for compressed formats (MP3, Opus). */
  bitRate?: number;
  /** Optional. Sample rate for the generated audio in Hertz. */
  sampleRate?: number;
}

export const GoogleCloudAiplatformV1beta1AudioResponseFormat: Schema.Codec<GoogleCloudAiplatformV1beta1AudioResponseFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    delivery: Schema.optional(Schema.String),
    bitRate: Schema.optional(Schema.Number),
    sampleRate: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1AudioResponseFormat",
  });

export interface GoogleCloudAiplatformV1beta1ImageResponseFormat {
  /** Optional. The aspect ratio for the image output. */
  aspectRatio?:
    | "ASPECT_RATIO_UNSPECIFIED"
    | "ASPECT_RATIO_ONE_BY_ONE"
    | "ASPECT_RATIO_TWO_BY_THREE"
    | "ASPECT_RATIO_THREE_BY_TWO"
    | "ASPECT_RATIO_THREE_BY_FOUR"
    | "ASPECT_RATIO_FOUR_BY_THREE"
    | "ASPECT_RATIO_FOUR_BY_FIVE"
    | "ASPECT_RATIO_FIVE_BY_FOUR"
    | "ASPECT_RATIO_NINE_BY_SIXTEEN"
    | "ASPECT_RATIO_SIXTEEN_BY_NINE"
    | "ASPECT_RATIO_TWENTY_ONE_BY_NINE"
    | "ASPECT_RATIO_ONE_BY_EIGHT"
    | "ASPECT_RATIO_EIGHT_BY_ONE"
    | "ASPECT_RATIO_ONE_BY_FOUR"
    | "ASPECT_RATIO_FOUR_BY_ONE"
    | (string & {});
  /** Optional. The size of the image output. */
  imageSize?:
    | "IMAGE_SIZE_UNSPECIFIED"
    | "IMAGE_SIZE_FIVE_TWELVE"
    | "IMAGE_SIZE_ONE_K"
    | "IMAGE_SIZE_TWO_K"
    | "IMAGE_SIZE_FOUR_K"
    | (string & {});
  /** Optional. The MIME type of the image output. */
  mimeType?: "MIME_TYPE_UNSPECIFIED" | "IMAGE_JPEG" | (string & {});
  /** Optional. Delivery mode for the generated content. */
  delivery?: "DELIVERY_UNSPECIFIED" | "INLINE" | "URI" | (string & {});
}

export const GoogleCloudAiplatformV1beta1ImageResponseFormat: Schema.Codec<GoogleCloudAiplatformV1beta1ImageResponseFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aspectRatio: Schema.optional(Schema.String),
    imageSize: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    delivery: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ImageResponseFormat",
  });

export interface GoogleCloudAiplatformV1beta1TextResponseFormat {
  /** Optional. The IANA standard MIME type of the response. */
  mimeType?:
    | "MIME_TYPE_UNSPECIFIED"
    | "APPLICATION_JSON"
    | "TEXT_PLAIN"
    | (string & {});
  /** Optional. The JSON schema that the output should conform to. Only applicable when mime_type is APPLICATION_JSON. */
  schema?: unknown;
}

export const GoogleCloudAiplatformV1beta1TextResponseFormat: Schema.Codec<GoogleCloudAiplatformV1beta1TextResponseFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1TextResponseFormat" });

export interface GoogleCloudAiplatformV1beta1VideoResponseFormat {
  /** Optional. Delivery mode for the generated content. */
  delivery?: "DELIVERY_UNSPECIFIED" | "INLINE" | "URI" | (string & {});
  /** Optional. The Google Cloud Storage URI to store the video output. Required for Vertex if delivery is URI. */
  gcsUri?: string;
  /** The aspect ratio for the video output. */
  aspectRatio?:
    | "ASPECT_RATIO_UNSPECIFIED"
    | "ASPECT_RATIO_SIXTEEN_BY_NINE"
    | "ASPECT_RATIO_NINE_BY_SIXTEEN"
    | (string & {});
  /** Optional. The duration for the video output. */
  duration?: string;
}

export const GoogleCloudAiplatformV1beta1VideoResponseFormat: Schema.Codec<GoogleCloudAiplatformV1beta1VideoResponseFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delivery: Schema.optional(Schema.String),
    gcsUri: Schema.optional(Schema.String),
    aspectRatio: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1VideoResponseFormat",
  });

export interface GoogleCloudAiplatformV1beta1ResponseFormat {
  /** Audio output format. */
  audio?: GoogleCloudAiplatformV1beta1AudioResponseFormat;
  /** Image output format. */
  image?: GoogleCloudAiplatformV1beta1ImageResponseFormat;
  /** Text output format. */
  text?: GoogleCloudAiplatformV1beta1TextResponseFormat;
  /** Video output format. */
  video?: GoogleCloudAiplatformV1beta1VideoResponseFormat;
}

export const GoogleCloudAiplatformV1beta1ResponseFormat: Schema.Codec<GoogleCloudAiplatformV1beta1ResponseFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audio: Schema.optional(GoogleCloudAiplatformV1beta1AudioResponseFormat),
    image: Schema.optional(GoogleCloudAiplatformV1beta1ImageResponseFormat),
    text: Schema.optional(GoogleCloudAiplatformV1beta1TextResponseFormat),
    video: Schema.optional(GoogleCloudAiplatformV1beta1VideoResponseFormat),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ResponseFormat" });

export interface GoogleCloudAiplatformV1beta1PrebuiltVoiceConfig {
  /** The name of the prebuilt voice to use. */
  voiceName?: string;
}

export const GoogleCloudAiplatformV1beta1PrebuiltVoiceConfig: Schema.Codec<GoogleCloudAiplatformV1beta1PrebuiltVoiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    voiceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1PrebuiltVoiceConfig",
  });

export interface GoogleCloudAiplatformV1beta1ReplicatedVoiceConfig {
  /** Optional. The mimetype of the voice sample. The only currently supported value is `audio/wav`. This represents 16-bit signed little-endian wav data, with a 24kHz sampling rate. `mime_type` will default to `audio/wav` if not set. */
  mimeType?: string;
  /** Optional. The sample of the custom voice. */
  voiceSampleAudio?: string;
}

export const GoogleCloudAiplatformV1beta1ReplicatedVoiceConfig: Schema.Codec<GoogleCloudAiplatformV1beta1ReplicatedVoiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    voiceSampleAudio: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ReplicatedVoiceConfig",
  });

export interface GoogleCloudAiplatformV1beta1VoiceConfig {
  /** The configuration for a prebuilt voice. */
  prebuiltVoiceConfig?: GoogleCloudAiplatformV1beta1PrebuiltVoiceConfig;
  /** Optional. The configuration for a replicated voice. This enables users to replicate a voice from an audio sample. */
  replicatedVoiceConfig?: GoogleCloudAiplatformV1beta1ReplicatedVoiceConfig;
}

export const GoogleCloudAiplatformV1beta1VoiceConfig: Schema.Codec<GoogleCloudAiplatformV1beta1VoiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prebuiltVoiceConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1PrebuiltVoiceConfig,
    ),
    replicatedVoiceConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1ReplicatedVoiceConfig,
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1VoiceConfig" });

export interface GoogleCloudAiplatformV1beta1SpeakerVoiceConfig {
  /** Required. The name of the speaker. This should be the same as the speaker name used in the prompt. */
  speaker?: string;
  /** Required. The configuration for the voice of this speaker. */
  voiceConfig?: GoogleCloudAiplatformV1beta1VoiceConfig;
}

export const GoogleCloudAiplatformV1beta1SpeakerVoiceConfig: Schema.Codec<GoogleCloudAiplatformV1beta1SpeakerVoiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speaker: Schema.optional(Schema.String),
    voiceConfig: Schema.optional(GoogleCloudAiplatformV1beta1VoiceConfig),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1SpeakerVoiceConfig" });

export interface GoogleCloudAiplatformV1beta1MultiSpeakerVoiceConfig {
  /** Required. A list of configurations for the voices of the speakers. Exactly two speaker voice configurations must be provided. */
  speakerVoiceConfigs?: ReadonlyArray<GoogleCloudAiplatformV1beta1SpeakerVoiceConfig>;
}

export const GoogleCloudAiplatformV1beta1MultiSpeakerVoiceConfig: Schema.Codec<GoogleCloudAiplatformV1beta1MultiSpeakerVoiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    speakerVoiceConfigs: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1SpeakerVoiceConfig),
    ),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1MultiSpeakerVoiceConfig",
  });

export interface GoogleCloudAiplatformV1beta1SpeechConfig {
  /** The configuration for the voice to use. */
  voiceConfig?: GoogleCloudAiplatformV1beta1VoiceConfig;
  /** Optional. The language code (ISO 639-1) for the speech synthesis. */
  languageCode?: string;
  /** The configuration for a multi-speaker text-to-speech request. This field is mutually exclusive with `voice_config`. */
  multiSpeakerVoiceConfig?: GoogleCloudAiplatformV1beta1MultiSpeakerVoiceConfig;
}

export const GoogleCloudAiplatformV1beta1SpeechConfig: Schema.Codec<GoogleCloudAiplatformV1beta1SpeechConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    voiceConfig: Schema.optional(GoogleCloudAiplatformV1beta1VoiceConfig),
    languageCode: Schema.optional(Schema.String),
    multiSpeakerVoiceConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1MultiSpeakerVoiceConfig,
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1SpeechConfig" });

export interface GoogleCloudAiplatformV1beta1ImageConfigImageOutputOptions {
  /** Optional. The image format that the output should be saved as. */
  mimeType?: string;
  /** Optional. The compression quality of the output image. */
  compressionQuality?: number;
}

export const GoogleCloudAiplatformV1beta1ImageConfigImageOutputOptions: Schema.Codec<GoogleCloudAiplatformV1beta1ImageConfigImageOutputOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    compressionQuality: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1ImageConfigImageOutputOptions",
  });

export interface GoogleCloudAiplatformV1beta1ImageConfig {
  /** Optional. Controls whether prominent people (celebrities) generation is allowed. If used with personGeneration, personGeneration enum would take precedence. For instance, if ALLOW_NONE is set, all person generation would be blocked. If this field is unspecified, the default behavior is to allow prominent people. */
  prominentPeople?:
    | "PROMINENT_PEOPLE_UNSPECIFIED"
    | "ALLOW_PROMINENT_PEOPLE"
    | "BLOCK_PROMINENT_PEOPLE"
    | (string & {});
  /** Optional. The desired aspect ratio for the generated images. The following aspect ratios are supported: "1:1" "2:3", "3:2" "3:4", "4:3" "4:5", "5:4" "9:16", "16:9" "21:9" */
  aspectRatio?: string;
  /** Optional. Controls whether the model can generate people. */
  personGeneration?:
    | "PERSON_GENERATION_UNSPECIFIED"
    | "ALLOW_ALL"
    | "ALLOW_ADULT"
    | "ALLOW_NONE"
    | (string & {});
  /** Optional. The image output format for generated images. */
  imageOutputOptions?: GoogleCloudAiplatformV1beta1ImageConfigImageOutputOptions;
  /** Optional. Specifies the size of generated images. Supported values are `1K`, `2K`, `4K`. If not specified, the model will use default value `1K`. */
  imageSize?: string;
}

export const GoogleCloudAiplatformV1beta1ImageConfig: Schema.Codec<GoogleCloudAiplatformV1beta1ImageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prominentPeople: Schema.optional(Schema.String),
    aspectRatio: Schema.optional(Schema.String),
    personGeneration: Schema.optional(Schema.String),
    imageOutputOptions: Schema.optional(
      GoogleCloudAiplatformV1beta1ImageConfigImageOutputOptions,
    ),
    imageSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ImageConfig" });

export interface GoogleCloudAiplatformV1beta1GenerationConfigThinkingConfig {
  /** Optional. The token budget for the model's thinking process. The model will make a best effort to stay within this budget. This can be used to control the trade-off between response quality and latency. */
  thinkingBudget?: number;
  /** Optional. If true, the model will include its thoughts in the response. "Thoughts" are the intermediate steps the model takes to arrive at the final response. They can provide insights into the model's reasoning process and help with debugging. If this is true, thoughts are returned only when available. */
  includeThoughts?: boolean;
  /** Optional. The number of thoughts tokens that the model should generate. */
  thinkingLevel?:
    | "THINKING_LEVEL_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "MINIMAL"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1GenerationConfigThinkingConfig: Schema.Codec<GoogleCloudAiplatformV1beta1GenerationConfigThinkingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thinkingBudget: Schema.optional(Schema.Number),
    includeThoughts: Schema.optional(Schema.Boolean),
    thinkingLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GenerationConfigThinkingConfig",
  });

export interface GoogleCloudAiplatformV1beta1GenerationConfig {
  /** Optional. The token resolution at which input media content is sampled. This is used to control the trade-off between the quality of the response and the number of tokens used to represent the media. A higher resolution allows the model to perceive more detail, which can lead to a more nuanced response, but it will also use more tokens. This does not affect the image dimensions sent to the model. */
  mediaResolution?:
    | "MEDIA_RESOLUTION_UNSPECIFIED"
    | "MEDIA_RESOLUTION_LOW"
    | "MEDIA_RESOLUTION_MEDIUM"
    | "MEDIA_RESOLUTION_HIGH"
    | (string & {});
  /** Optional. Specifies the top-k sampling threshold. The model considers only the top k most probable tokens for the next token. This can be useful for generating more coherent and less random text. For example, a `top_k` of 40 means the model will choose the next word from the 40 most likely words. */
  topK?: number;
  /** Optional. Penalizes tokens that have already appeared in the generated text. A positive value encourages the model to generate more diverse and less repetitive text. Valid values can range from [-2.0, 2.0]. */
  presencePenalty?: number;
  /** Optional. Routing configuration. */
  routingConfig?: GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig;
  /** Optional. Config for model selection. */
  modelConfig?: GoogleCloudAiplatformV1beta1GenerationConfigModelConfig;
  /** Optional. Controls the randomness of the output. A higher temperature results in more creative and diverse responses, while a lower temperature makes the output more predictable and focused. The valid range is (0.0, 2.0]. */
  temperature?: number;
  /** Optional. Specifies the nucleus sampling threshold. The model considers only the smallest set of tokens whose cumulative probability is at least `top_p`. This helps generate more diverse and less repetitive responses. For example, a `top_p` of 0.9 means the model considers tokens until the cumulative probability of the tokens to select from reaches 0.9. It's recommended to adjust either temperature or `top_p`, but not both. */
  topP?: number;
  /** Optional. The number of candidate responses to generate. A higher `candidate_count` can provide more options to choose from, but it also consumes more resources. This can be useful for generating a variety of responses and selecting the best one. */
  candidateCount?: number;
  /** Optional. The maximum number of tokens to generate in the response. A token is approximately four characters. The default value varies by model. This parameter can be used to control the length of the generated text and prevent overly long responses. */
  maxOutputTokens?: number;
  /** Optional. A seed for the random number generator. By setting a seed, you can make the model's output mostly deterministic. For a given prompt and parameters (like temperature, top_p, etc.), the model will produce the same response every time. However, it's not a guaranteed absolute deterministic behavior. This is different from parameters like `temperature`, which control the *level* of randomness. `seed` ensures that the "random" choices the model makes are the same on every run, making it essential for testing and ensuring reproducible results. */
  seed?: number;
  /** Optional. New response format field for the model to configure output formatting and delivery. */
  responseFormat?: ReadonlyArray<GoogleCloudAiplatformV1beta1ResponseFormat>;
  /** Optional. Penalizes tokens based on their frequency in the generated text. A positive value helps to reduce the repetition of words and phrases. Valid values can range from [-2.0, 2.0]. */
  frequencyPenalty?: number;
  /** Optional. The modalities of the response. The model will generate a response that includes all the specified modalities. For example, if this is set to `[TEXT, IMAGE]`, the response will include both text and an image. */
  responseModalities?: ReadonlyArray<
    | "MODALITY_UNSPECIFIED"
    | "TEXT"
    | "IMAGE"
    | "AUDIO"
    | "VIDEO"
    | (string & {})
  >;
  /** Optional. If set to true, the log probabilities of the output tokens are returned. Log probabilities are the logarithm of the probability of a token appearing in the output. A higher log probability means the token is more likely to be generated. This can be useful for analyzing the model's confidence in its own output and for debugging. */
  responseLogprobs?: boolean;
  /** Optional. A list of character sequences that will stop the model from generating further tokens. If a stop sequence is generated, the output will end at that point. This is useful for controlling the length and structure of the output. For example, you can use ["\n", "###"] to stop generation at a new line or a specific marker. */
  stopSequences?: ReadonlyArray<string>;
  /** Optional. The speech generation config. */
  speechConfig?: GoogleCloudAiplatformV1beta1SpeechConfig;
  /** Optional. Config for image generation features. Deprecated: Use `response_format.image` instead. */
  imageConfig?: GoogleCloudAiplatformV1beta1ImageConfig;
  /** Optional. The IANA standard MIME type of the response. The model will generate output that conforms to this MIME type. Supported values include 'text/plain' (default) and 'application/json'. The model needs to be prompted to output the appropriate response type, otherwise the behavior is undefined. Deprecated: Use `response_format` instead. */
  responseMimeType?: string;
  /** Optional. When this field is set, response_schema must be omitted and response_mime_type must be set to `application/json`. Deprecated: Use `response_format` instead. */
  responseJsonSchema?: unknown;
  /** Optional. Lets you to specify a schema for the model's response, ensuring that the output conforms to a particular structure. This is useful for generating structured data such as JSON. The schema is a subset of the [OpenAPI 3.0 schema object](https://spec.openapis.org/oas/v3.0.3#schema) object. When this field is set, you must also set the `response_mime_type` to `application/json`. Deprecated: Use `response_format` instead. */
  responseSchema?: GoogleCloudAiplatformV1beta1Schema;
  /** Optional. Configuration for thinking features. An error will be returned if this field is set for models that don't support thinking. */
  thinkingConfig?: GoogleCloudAiplatformV1beta1GenerationConfigThinkingConfig;
  /** Optional. If enabled, the model will detect emotions and adapt its responses accordingly. For example, if the model detects that the user is frustrated, it may provide a more empathetic response. */
  enableAffectiveDialog?: boolean;
  /** Optional. If enabled, audio timestamps will be included in the request to the model. This can be useful for synchronizing audio with other modalities in the response. */
  audioTimestamp?: boolean;
  /** Optional. The number of top log probabilities to return for each token. This can be used to see which other tokens were considered likely candidates for a given position. A higher value will return more options, but it will also increase the size of the response. */
  logprobs?: number;
}

export const GoogleCloudAiplatformV1beta1GenerationConfig: Schema.Codec<GoogleCloudAiplatformV1beta1GenerationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mediaResolution: Schema.optional(Schema.String),
    topK: Schema.optional(Schema.Number),
    presencePenalty: Schema.optional(Schema.Number),
    routingConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerationConfigRoutingConfig,
    ),
    modelConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerationConfigModelConfig,
    ),
    temperature: Schema.optional(Schema.Number),
    topP: Schema.optional(Schema.Number),
    candidateCount: Schema.optional(Schema.Number),
    maxOutputTokens: Schema.optional(Schema.Number),
    seed: Schema.optional(Schema.Number),
    responseFormat: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1ResponseFormat),
    ),
    frequencyPenalty: Schema.optional(Schema.Number),
    responseModalities: Schema.optional(Schema.Array(Schema.String)),
    responseLogprobs: Schema.optional(Schema.Boolean),
    stopSequences: Schema.optional(Schema.Array(Schema.String)),
    speechConfig: Schema.optional(GoogleCloudAiplatformV1beta1SpeechConfig),
    imageConfig: Schema.optional(GoogleCloudAiplatformV1beta1ImageConfig),
    responseMimeType: Schema.optional(Schema.String),
    responseJsonSchema: Schema.optional(Schema.Unknown),
    responseSchema: Schema.optional(GoogleCloudAiplatformV1beta1Schema),
    thinkingConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerationConfigThinkingConfig,
    ),
    enableAffectiveDialog: Schema.optional(Schema.Boolean),
    audioTimestamp: Schema.optional(Schema.Boolean),
    logprobs: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1GenerationConfig" });

export interface GoogleCloudAiplatformV1beta1FunctionCallingConfig {
  /** Optional. Function calling mode. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "AUTO"
    | "ANY"
    | "NONE"
    | "VALIDATED"
    | (string & {});
  /** Optional. Function names to call. Only set when the Mode is ANY. Function names should match FunctionDeclaration.name. With mode set to ANY, model will predict a function call from the set of function names provided. */
  allowedFunctionNames?: ReadonlyArray<string>;
  /** Optional. When set to true, arguments of a single function call will be streamed out in multiple parts/contents/responses. Partial parameter results will be returned in the `FunctionCall.partial_args` field. */
  streamFunctionCallArguments?: boolean;
}

export const GoogleCloudAiplatformV1beta1FunctionCallingConfig: Schema.Codec<GoogleCloudAiplatformV1beta1FunctionCallingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    allowedFunctionNames: Schema.optional(Schema.Array(Schema.String)),
    streamFunctionCallArguments: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1FunctionCallingConfig",
  });

export interface LatLng {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
}

export const LatLng: Schema.Codec<LatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LatLng" });

export interface GoogleCloudAiplatformV1beta1RetrievalConfig {
  /** The location of the user. */
  latLng?: LatLng;
  /** The language code of the user. */
  languageCode?: string;
}

export const GoogleCloudAiplatformV1beta1RetrievalConfig: Schema.Codec<GoogleCloudAiplatformV1beta1RetrievalConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1RetrievalConfig" });

export interface GoogleCloudAiplatformV1beta1ToolConfig {
  /** Optional. Function calling config. */
  functionCallingConfig?: GoogleCloudAiplatformV1beta1FunctionCallingConfig;
  /** Optional. Retrieval config. */
  retrievalConfig?: GoogleCloudAiplatformV1beta1RetrievalConfig;
}

export const GoogleCloudAiplatformV1beta1ToolConfig: Schema.Codec<GoogleCloudAiplatformV1beta1ToolConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    functionCallingConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1FunctionCallingConfig,
    ),
    retrievalConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1RetrievalConfig,
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ToolConfig" });

export interface GoogleCloudAiplatformV1beta1GenerateContentRequest {
  /** Optional. The name of the cached content used as context to serve the prediction. Note: only used in explicit caching, where users can have control over caching (e.g. what content to cache) and enjoy guaranteed cost savings. Format: `projects/{project}/locations/{location}/cachedContents/{cachedContent}` */
  cachedContent?: string;
  /** Optional. Settings for prompt and response sanitization using the Model Armor service. If supplied, safety_settings must not be supplied. */
  modelArmorConfig?: GoogleCloudAiplatformV1beta1ModelArmorConfig;
  /** Optional. A list of `Tools` the model may use to generate the next response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. */
  tools?: ReadonlyArray<GoogleCloudAiplatformV1beta1Tool>;
  /** Optional. The user provided system instructions for the model. Note: only text should be used in parts and content in each part will be in a separate paragraph. */
  systemInstruction?: GoogleCloudAiplatformV1beta1Content;
  /** Optional. The labels with user-defined metadata for the request. It is used for billing and reporting only. Label keys and values can be no longer than 63 characters (Unicode codepoints) and can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
  /** Required. The content of the current conversation with the model. For single-turn queries, this is a single instance. For multi-turn queries, this is a repeated field that contains conversation history + latest request. */
  contents?: ReadonlyArray<GoogleCloudAiplatformV1beta1Content>;
  /** Optional. Per request settings for blocking unsafe content. Enforced on GenerateContentResponse.candidates. */
  safetySettings?: ReadonlyArray<GoogleCloudAiplatformV1beta1SafetySetting>;
  /** Optional. Generation config. */
  generationConfig?: GoogleCloudAiplatformV1beta1GenerationConfig;
  /** Optional. Tool config. This config is shared for all tools provided in the request. */
  toolConfig?: GoogleCloudAiplatformV1beta1ToolConfig;
}

export const GoogleCloudAiplatformV1beta1GenerateContentRequest: Schema.Codec<GoogleCloudAiplatformV1beta1GenerateContentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cachedContent: Schema.optional(Schema.String),
    modelArmorConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1ModelArmorConfig,
    ),
    tools: Schema.optional(Schema.Array(GoogleCloudAiplatformV1beta1Tool)),
    systemInstruction: Schema.optional(GoogleCloudAiplatformV1beta1Content),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    contents: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1Content),
    ),
    safetySettings: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1SafetySetting),
    ),
    generationConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerationConfig,
    ),
    toolConfig: Schema.optional(GoogleCloudAiplatformV1beta1ToolConfig),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GenerateContentRequest",
  });

export interface ModelOperationMetadata {
  /** The name of the model we are creating/updating The name must have the form `projects/{project_id}/models/{model_id}` */
  name?: string;
  basicOperationStatus?:
    | "BASIC_OPERATION_STATUS_UNSPECIFIED"
    | "BASIC_OPERATION_STATUS_UPLOADING"
    | "BASIC_OPERATION_STATUS_VERIFYING"
    | (string & {});
}

export const ModelOperationMetadata: Schema.Codec<ModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    basicOperationStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "ModelOperationMetadata" });

export interface GoogleCloudAiplatformV1beta1ModalityTokenCount {
  /** The number of tokens counted for this modality. */
  tokenCount?: number;
  /** The modality that this token count applies to. */
  modality?:
    | "MODALITY_UNSPECIFIED"
    | "TEXT"
    | "IMAGE"
    | "VIDEO"
    | "AUDIO"
    | "DOCUMENT"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1ModalityTokenCount: Schema.Codec<GoogleCloudAiplatformV1beta1ModalityTokenCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenCount: Schema.optional(Schema.Number),
    modality: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1ModalityTokenCount" });

export interface GoogleCloudAiplatformV1beta1Segment {
  /** Output only. The index of the `Part` object that this segment belongs to. This is useful for associating the segment with a specific part of the content. */
  partIndex?: number;
  /** Output only. The text of the segment. */
  text?: string;
  /** Output only. The end index of the segment in the `Part`, measured in bytes. This marks the end of the segment and is exclusive, meaning the segment includes content up to, but not including, the byte at this index. */
  endIndex?: number;
  /** Output only. The start index of the segment in the `Part`, measured in bytes. This marks the beginning of the segment and is inclusive, meaning the byte at this index is the first byte of the segment. */
  startIndex?: number;
}

export const GoogleCloudAiplatformV1beta1Segment: Schema.Codec<GoogleCloudAiplatformV1beta1Segment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partIndex: Schema.optional(Schema.Number),
    text: Schema.optional(Schema.String),
    endIndex: Schema.optional(Schema.Number),
    startIndex: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1Segment" });

export interface GoogleCloudAiplatformV1beta1SafetyRating {
  /** Output only. The harm category of this rating. */
  category?:
    | "HARM_CATEGORY_UNSPECIFIED"
    | "HARM_CATEGORY_HATE_SPEECH"
    | "HARM_CATEGORY_DANGEROUS_CONTENT"
    | "HARM_CATEGORY_HARASSMENT"
    | "HARM_CATEGORY_SEXUALLY_EXPLICIT"
    | "HARM_CATEGORY_CIVIC_INTEGRITY"
    | "HARM_CATEGORY_IMAGE_HATE"
    | "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT"
    | "HARM_CATEGORY_IMAGE_HARASSMENT"
    | "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT"
    | "HARM_CATEGORY_JAILBREAK"
    | (string & {});
  /** Output only. The probability score of harm for this category. */
  probabilityScore?: number;
  /** Output only. The overwritten threshold for the safety category of Gemini 2.0 image out. If minors are detected in the output image, the threshold of each safety category will be overwritten if user sets a lower threshold. */
  overwrittenThreshold?:
    | "HARM_BLOCK_THRESHOLD_UNSPECIFIED"
    | "BLOCK_LOW_AND_ABOVE"
    | "BLOCK_MEDIUM_AND_ABOVE"
    | "BLOCK_ONLY_HIGH"
    | "BLOCK_NONE"
    | "OFF"
    | (string & {});
  /** Output only. The probability of harm for this category. */
  probability?:
    | "HARM_PROBABILITY_UNSPECIFIED"
    | "NEGLIGIBLE"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  /** Output only. Indicates whether the content was blocked because of this rating. */
  blocked?: boolean;
  /** Output only. The severity of harm for this category. */
  severity?:
    | "HARM_SEVERITY_UNSPECIFIED"
    | "HARM_SEVERITY_NEGLIGIBLE"
    | "HARM_SEVERITY_LOW"
    | "HARM_SEVERITY_MEDIUM"
    | "HARM_SEVERITY_HIGH"
    | (string & {});
  /** Output only. The severity score of harm for this category. */
  severityScore?: number;
}

export const GoogleCloudAiplatformV1beta1SafetyRating: Schema.Codec<GoogleCloudAiplatformV1beta1SafetyRating> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    probabilityScore: Schema.optional(Schema.Number),
    overwrittenThreshold: Schema.optional(Schema.String),
    probability: Schema.optional(Schema.String),
    blocked: Schema.optional(Schema.Boolean),
    severity: Schema.optional(Schema.String),
    severityScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1SafetyRating" });

export interface GoogleCloudAiplatformV1beta1GroundingMetadataSourceFlaggingUri {
  /** The URI that can be used to flag the content. */
  flagContentUri?: string;
  /** The ID of the place or review. */
  sourceId?: string;
}

export const GoogleCloudAiplatformV1beta1GroundingMetadataSourceFlaggingUri: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingMetadataSourceFlaggingUri> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flagContentUri: Schema.optional(Schema.String),
    sourceId: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1GroundingMetadataSourceFlaggingUri",
  });

export interface GoogleCloudAiplatformV1beta1GroundingSupport {
  /** The confidence scores for the support references. This list is parallel to the `grounding_chunk_indices` list. A score is a value between 0.0 and 1.0, with a higher score indicating a higher confidence that the reference supports the claim. For Gemini 2.0 and before, this list has the same size as `grounding_chunk_indices`. For Gemini 2.5 and later, this list is empty and should be ignored. */
  confidenceScores?: ReadonlyArray<number>;
  /** A list of indices into the `grounding_chunks` field of the `GroundingMetadata` message. These indices specify which grounding chunks support the claim made in the content segment. For example, if this field has the values `[1, 3]`, it means that `grounding_chunks[1]` and `grounding_chunks[3]` are the sources for the claim in the content segment. */
  groundingChunkIndices?: ReadonlyArray<number>;
  /** The content segment that this support message applies to. */
  segment?: GoogleCloudAiplatformV1beta1Segment;
  /** Indices into the `rendered_parts` field of the `GroundingMetadata` message. These indices specify which rendered parts are associated with this support message. */
  renderedParts?: ReadonlyArray<number>;
}

export const GoogleCloudAiplatformV1beta1GroundingSupport: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingSupport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidenceScores: Schema.optional(Schema.Array(Schema.Number)),
    groundingChunkIndices: Schema.optional(Schema.Array(Schema.Number)),
    segment: Schema.optional(GoogleCloudAiplatformV1beta1Segment),
    renderedParts: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1GroundingSupport" });

export interface GoogleCloudAiplatformV1beta1RetrievalMetadata {
  /** Optional. A score indicating how likely it is that a Google Search query could help answer the prompt. The score is in the range of `[0, 1]`. A score of 1 means the model is confident that a search will be helpful, and 0 means it is not. This score is populated only when Google Search grounding and dynamic retrieval are enabled. The score is used to determine whether to trigger a search. */
  googleSearchDynamicRetrievalScore?: number;
}

export const GoogleCloudAiplatformV1beta1RetrievalMetadata: Schema.Codec<GoogleCloudAiplatformV1beta1RetrievalMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleSearchDynamicRetrievalScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1RetrievalMetadata" });

export interface GoogleCloudAiplatformV1beta1SearchEntryPoint {
  /** Optional. An HTML snippet that can be embedded in a web page or an application's webview. This snippet displays a search result, including the title, URL, and a brief description of the search result. */
  renderedContent?: string;
  /** Optional. A base64-encoded JSON object that contains a list of search queries and their corresponding search URLs. This information can be used to build a custom search UI. */
  sdkBlob?: string;
}

export const GoogleCloudAiplatformV1beta1SearchEntryPoint: Schema.Codec<GoogleCloudAiplatformV1beta1SearchEntryPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    renderedContent: Schema.optional(Schema.String),
    sdkBlob: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1SearchEntryPoint" });

export interface GoogleCloudAiplatformV1beta1RagChunkPageSpan {
  /** Page where chunk ends in the document. Inclusive. 1-indexed. */
  lastPage?: number;
  /** Page where chunk starts in the document. Inclusive. 1-indexed. */
  firstPage?: number;
}

export const GoogleCloudAiplatformV1beta1RagChunkPageSpan: Schema.Codec<GoogleCloudAiplatformV1beta1RagChunkPageSpan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastPage: Schema.optional(Schema.Number),
    firstPage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1RagChunkPageSpan" });

export interface GoogleCloudAiplatformV1beta1RagChunk {
  /** The ID of the chunk. */
  chunkId?: string;
  /** The content of the chunk. */
  text?: string;
  /** If populated, represents where the chunk starts and ends in the document. */
  pageSpan?: GoogleCloudAiplatformV1beta1RagChunkPageSpan;
  /** The ID of the file that the chunk belongs to. */
  fileId?: string;
}

export const GoogleCloudAiplatformV1beta1RagChunk: Schema.Codec<GoogleCloudAiplatformV1beta1RagChunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    chunkId: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    pageSpan: Schema.optional(GoogleCloudAiplatformV1beta1RagChunkPageSpan),
    fileId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1RagChunk" });

export interface GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext {
  /** The URI of the retrieved data source. */
  uri?: string;
  /** Output only. The full resource name of the referenced Vertex AI Search document. This is used to identify the specific document that was retrieved. The format is `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. */
  documentName?: string;
  /** The content of the retrieved data source. */
  text?: string;
  /** Additional context for a Retrieval-Augmented Generation (RAG) retrieval result. This is populated only when the RAG retrieval tool is used. */
  ragChunk?: GoogleCloudAiplatformV1beta1RagChunk;
  /** The title of the retrieved data source. */
  title?: string;
}

export const GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    documentName: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    ragChunk: Schema.optional(GoogleCloudAiplatformV1beta1RagChunk),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext",
  });

export interface GoogleCloudAiplatformV1beta1GroundingChunkWeb {
  /** The domain of the web page that contains the evidence. This can be used to filter out low-quality sources. */
  domain?: string;
  /** The title of the web page that contains the evidence. */
  title?: string;
  /** The URI of the web page that contains the evidence. */
  uri?: string;
}

export const GoogleCloudAiplatformV1beta1GroundingChunkWeb: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingChunkWeb> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1GroundingChunkWeb" });

export interface GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSourcesReviewSnippet {
  /** The ID of the review that is being referenced. */
  reviewId?: string;
  /** A link to show the review on Google Maps. */
  googleMapsUri?: string;
  /** The title of the review. */
  title?: string;
}

export const GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSourcesReviewSnippet: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSourcesReviewSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewId: Schema.optional(Schema.String),
    googleMapsUri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSourcesReviewSnippet",
  });

export interface GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSources {
  /** Snippets of reviews that were used to generate the answer. */
  reviewSnippets?: ReadonlyArray<GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSourcesReviewSnippet>;
}

export const GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSources: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reviewSnippets: Schema.optional(
      Schema.Array(
        GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSourcesReviewSnippet,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSources",
  });

export interface GoogleCloudAiplatformV1beta1GroundingChunkMapsRoute {
  /** The total distance of the route, in meters. */
  distanceMeters?: number;
  /** The total duration of the route. */
  duration?: string;
  /** An encoded polyline of the route. See https://developers.google.com/maps/documentation/utilities/polylinealgorithm */
  encodedPolyline?: string;
}

export const GoogleCloudAiplatformV1beta1GroundingChunkMapsRoute: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingChunkMapsRoute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distanceMeters: Schema.optional(Schema.Number),
    duration: Schema.optional(Schema.String),
    encodedPolyline: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GroundingChunkMapsRoute",
  });

export interface GoogleCloudAiplatformV1beta1GroundingChunkMaps {
  /** The URI of the place. */
  uri?: string;
  /** The title of the place. */
  title?: string;
  /** The sources that were used to generate the place answer. This includes review snippets and photos that were used to generate the answer, as well as URIs to flag content. */
  placeAnswerSources?: GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSources;
  /** This Place's resource name, in `places/{place_id}` format. This can be used to look up the place in the Google Maps API. */
  placeId?: string;
  /** Output only. Route information. */
  route?: GoogleCloudAiplatformV1beta1GroundingChunkMapsRoute;
  /** The text of the place answer. */
  text?: string;
}

export const GoogleCloudAiplatformV1beta1GroundingChunkMaps: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingChunkMaps> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    placeAnswerSources: Schema.optional(
      GoogleCloudAiplatformV1beta1GroundingChunkMapsPlaceAnswerSources,
    ),
    placeId: Schema.optional(Schema.String),
    route: Schema.optional(GoogleCloudAiplatformV1beta1GroundingChunkMapsRoute),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1GroundingChunkMaps" });

export interface GoogleCloudAiplatformV1beta1GroundingChunkImage {
  /** The URI of the image. */
  imageUri?: string;
  /** The URI of the image search result page. */
  sourceUri?: string;
  /** The title of the image search result page. */
  title?: string;
  /** The domain of the image search result page. */
  domain?: string;
}

export const GoogleCloudAiplatformV1beta1GroundingChunkImage: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingChunkImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    sourceUri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GroundingChunkImage",
  });

export interface GoogleCloudAiplatformV1beta1GroundingChunk {
  /** A grounding chunk from a data source retrieved by a retrieval tool, such as Vertex AI Search. See the `RetrievedContext` message for details */
  retrievedContext?: GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext;
  /** A grounding chunk from a web page, typically from Google Search. See the `Web` message for details. */
  web?: GoogleCloudAiplatformV1beta1GroundingChunkWeb;
  /** A grounding chunk from Google Maps. See the `Maps` message for details. */
  maps?: GoogleCloudAiplatformV1beta1GroundingChunkMaps;
  /** A grounding chunk from an image search result. See the `Image` message for details. */
  image?: GoogleCloudAiplatformV1beta1GroundingChunkImage;
}

export const GoogleCloudAiplatformV1beta1GroundingChunk: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingChunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retrievedContext: Schema.optional(
      GoogleCloudAiplatformV1beta1GroundingChunkRetrievedContext,
    ),
    web: Schema.optional(GoogleCloudAiplatformV1beta1GroundingChunkWeb),
    maps: Schema.optional(GoogleCloudAiplatformV1beta1GroundingChunkMaps),
    image: Schema.optional(GoogleCloudAiplatformV1beta1GroundingChunkImage),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1GroundingChunk" });

export interface GoogleCloudAiplatformV1beta1GroundingMetadata {
  /** Optional. Output only. A list of URIs that can be used to flag a place or review for inappropriate content. This field is populated only when the grounding source is Google Maps. */
  sourceFlaggingUris?: ReadonlyArray<GoogleCloudAiplatformV1beta1GroundingMetadataSourceFlaggingUri>;
  /** Optional. The image search queries that were used to generate the content. This field is populated only when the grounding source is Google Search with the Image Search search_type enabled. */
  imageSearchQueries?: ReadonlyArray<string>;
  /** Optional. A list of grounding supports that connect the generated content to the grounding chunks. This field is populated when the grounding source is Google Search or Vertex AI Search. */
  groundingSupports?: ReadonlyArray<GoogleCloudAiplatformV1beta1GroundingSupport>;
  /** Optional. The web search queries that were used to generate the content. This field is populated only when the grounding source is Google Search. */
  webSearchQueries?: ReadonlyArray<string>;
  /** Optional. Output only. Deprecated: The Google Maps contextual widget behavior in Grounding with Google Maps is being deprecated; this field is planned for removal and will no longer be populated once removed. A token that can be used to render a Google Maps widget with the contextual data. This field is populated only when the grounding source is Google Maps. */
  googleMapsWidgetContextToken?: string;
  /** Optional. The queries that were executed by the retrieval tools. This field is populated only when the grounding source is a retrieval tool, such as Vertex AI Search. */
  retrievalQueries?: ReadonlyArray<string>;
  /** Optional. Output only. Metadata related to the retrieval grounding source. */
  retrievalMetadata?: GoogleCloudAiplatformV1beta1RetrievalMetadata;
  /** Optional. A web search entry point that can be used to display search results. This field is populated only when the grounding source is Google Search. */
  searchEntryPoint?: GoogleCloudAiplatformV1beta1SearchEntryPoint;
  /** A list of supporting references retrieved from the grounding source. This field is populated when the grounding source is Google Search, Vertex AI Search, or Google Maps. */
  groundingChunks?: ReadonlyArray<GoogleCloudAiplatformV1beta1GroundingChunk>;
}

export const GoogleCloudAiplatformV1beta1GroundingMetadata: Schema.Codec<GoogleCloudAiplatformV1beta1GroundingMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceFlaggingUris: Schema.optional(
      Schema.Array(
        GoogleCloudAiplatformV1beta1GroundingMetadataSourceFlaggingUri,
      ),
    ),
    imageSearchQueries: Schema.optional(Schema.Array(Schema.String)),
    groundingSupports: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1GroundingSupport),
    ),
    webSearchQueries: Schema.optional(Schema.Array(Schema.String)),
    googleMapsWidgetContextToken: Schema.optional(Schema.String),
    retrievalQueries: Schema.optional(Schema.Array(Schema.String)),
    retrievalMetadata: Schema.optional(
      GoogleCloudAiplatformV1beta1RetrievalMetadata,
    ),
    searchEntryPoint: Schema.optional(
      GoogleCloudAiplatformV1beta1SearchEntryPoint,
    ),
    groundingChunks: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1GroundingChunk),
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1GroundingMetadata" });

export interface GoogleCloudAiplatformV1beta1UrlMetadata {
  /** The URL retrieved by the tool. */
  retrievedUrl?: string;
  /** The status of the URL retrieval. */
  urlRetrievalStatus?:
    | "URL_RETRIEVAL_STATUS_UNSPECIFIED"
    | "URL_RETRIEVAL_STATUS_SUCCESS"
    | "URL_RETRIEVAL_STATUS_ERROR"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1UrlMetadata: Schema.Codec<GoogleCloudAiplatformV1beta1UrlMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retrievedUrl: Schema.optional(Schema.String),
    urlRetrievalStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1UrlMetadata" });

export interface Firebaseml_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Firebaseml_Date: Schema.Codec<Firebaseml_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Firebaseml_Date" });

export interface GoogleCloudAiplatformV1beta1Citation {
  /** Output only. The start index of the citation in the content. */
  startIndex?: number;
  /** Output only. The license of the source of the citation. */
  license?: string;
  /** Output only. The URI of the source of the citation. */
  uri?: string;
  /** Output only. The title of the source of the citation. */
  title?: string;
  /** Output only. The end index of the citation in the content. */
  endIndex?: number;
  /** Output only. The publication date of the source of the citation. */
  publicationDate?: Firebaseml_Date;
}

export const GoogleCloudAiplatformV1beta1Citation: Schema.Codec<GoogleCloudAiplatformV1beta1Citation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    license: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    endIndex: Schema.optional(Schema.Number),
    publicationDate: Schema.optional(Firebaseml_Date),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1Citation" });

export interface GoogleCloudAiplatformV1beta1CitationMetadata {
  /** Output only. A list of citations for the content. */
  citations?: ReadonlyArray<GoogleCloudAiplatformV1beta1Citation>;
}

export const GoogleCloudAiplatformV1beta1CitationMetadata: Schema.Codec<GoogleCloudAiplatformV1beta1CitationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    citations: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1Citation),
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1CitationMetadata" });

export interface GoogleCloudAiplatformV1beta1CountTokensRequest {
  /** Optional. A list of `Tools` the model may use to generate the next response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. */
  tools?: ReadonlyArray<GoogleCloudAiplatformV1beta1Tool>;
  /** Optional. Generation config that the model will use to generate the response. */
  generationConfig?: GoogleCloudAiplatformV1beta1GenerationConfig;
  /** Optional. The instances that are the input to token counting call. Schema is identical to the prediction schema of the underlying model. */
  instances?: ReadonlyArray<unknown>;
  /** Optional. The name of the publisher model requested to serve the prediction. Format: `projects/{project}/locations/{location}/publishers/* /models/*` */
  model?: string;
  /** Optional. Input content. */
  contents?: ReadonlyArray<GoogleCloudAiplatformV1beta1Content>;
  /** Optional. The user provided system instructions for the model. Note: only text should be used in parts and content in each part will be in a separate paragraph. */
  systemInstruction?: GoogleCloudAiplatformV1beta1Content;
}

export const GoogleCloudAiplatformV1beta1CountTokensRequest: Schema.Codec<GoogleCloudAiplatformV1beta1CountTokensRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(GoogleCloudAiplatformV1beta1Tool)),
    generationConfig: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerationConfig,
    ),
    instances: Schema.optional(Schema.Array(Schema.Unknown)),
    model: Schema.optional(Schema.String),
    contents: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1Content),
    ),
    systemInstruction: Schema.optional(GoogleCloudAiplatformV1beta1Content),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1CountTokensRequest" });

export interface GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata {
  /** Output only. A detailed breakdown of the token count for each modality in the cached content. */
  cacheTokensDetails?: ReadonlyArray<GoogleCloudAiplatformV1beta1ModalityTokenCount>;
  /** The total number of tokens in the generated candidates. */
  candidatesTokenCount?: number;
  /** Output only. The number of tokens in the cached content that was used for this request. */
  cachedContentTokenCount?: number;
  /** Output only. A detailed breakdown by modality of the token counts from the results of tool executions, which are provided back to the model as input. */
  toolUsePromptTokensDetails?: ReadonlyArray<GoogleCloudAiplatformV1beta1ModalityTokenCount>;
  /** The total number of tokens for the entire request. This is the sum of `prompt_token_count`, `candidates_token_count`, `tool_use_prompt_token_count`, and `thoughts_token_count`. */
  totalTokenCount?: number;
  /** Output only. The number of tokens in the results from tool executions, which are provided back to the model as input, if applicable. */
  toolUsePromptTokenCount?: number;
  /** Output only. The number of tokens that were part of the model's generated "thoughts" output, if applicable. */
  thoughtsTokenCount?: number;
  /** The total number of tokens in the prompt. This includes any text, images, or other media provided in the request. When `cached_content` is set, this also includes the number of tokens in the cached content. */
  promptTokenCount?: number;
  /** Output only. The traffic type for this request. */
  trafficType?:
    | "TRAFFIC_TYPE_UNSPECIFIED"
    | "ON_DEMAND"
    | "ON_DEMAND_PRIORITY"
    | "ON_DEMAND_FLEX"
    | "PROVISIONED_THROUGHPUT"
    | (string & {});
  /** Output only. A detailed breakdown of the token count for each modality in the prompt. */
  promptTokensDetails?: ReadonlyArray<GoogleCloudAiplatformV1beta1ModalityTokenCount>;
  /** Output only. A detailed breakdown of the token count for each modality in the generated candidates. */
  candidatesTokensDetails?: ReadonlyArray<GoogleCloudAiplatformV1beta1ModalityTokenCount>;
}

export const GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata: Schema.Codec<GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cacheTokensDetails: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1ModalityTokenCount),
    ),
    candidatesTokenCount: Schema.optional(Schema.Number),
    cachedContentTokenCount: Schema.optional(Schema.Number),
    toolUsePromptTokensDetails: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1ModalityTokenCount),
    ),
    totalTokenCount: Schema.optional(Schema.Number),
    toolUsePromptTokenCount: Schema.optional(Schema.Number),
    thoughtsTokenCount: Schema.optional(Schema.Number),
    promptTokenCount: Schema.optional(Schema.Number),
    trafficType: Schema.optional(Schema.String),
    promptTokensDetails: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1ModalityTokenCount),
    ),
    candidatesTokensDetails: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1ModalityTokenCount),
    ),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata",
  });

export interface GoogleCloudAiplatformV1beta1CountTokensResponse {
  /** The total number of billable characters counted across all instances from the request. */
  totalBillableCharacters?: number;
  /** Output only. List of modalities that were processed in the request input. */
  promptTokensDetails?: ReadonlyArray<GoogleCloudAiplatformV1beta1ModalityTokenCount>;
  /** The total number of tokens counted across all instances from the request. */
  totalTokens?: number;
}

export const GoogleCloudAiplatformV1beta1CountTokensResponse: Schema.Codec<GoogleCloudAiplatformV1beta1CountTokensResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalBillableCharacters: Schema.optional(Schema.Number),
    promptTokensDetails: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1ModalityTokenCount),
    ),
    totalTokens: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1CountTokensResponse",
  });

export interface GoogleCloudAiplatformV1beta1UrlContextMetadata {
  /** Output only. A list of URL metadata, with one entry for each URL retrieved by the tool. */
  urlMetadata?: ReadonlyArray<GoogleCloudAiplatformV1beta1UrlMetadata>;
}

export const GoogleCloudAiplatformV1beta1UrlContextMetadata: Schema.Codec<GoogleCloudAiplatformV1beta1UrlContextMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urlMetadata: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1UrlMetadata),
    ),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1UrlContextMetadata" });

export interface GoogleCloudAiplatformV1beta1Candidate {
  /** Output only. Metadata returned when the model uses the `url_context` tool to get information from a user-provided URL. */
  urlContextMetadata?: GoogleCloudAiplatformV1beta1UrlContextMetadata;
  /** Output only. The detailed log probability information for the tokens in this candidate. This is useful for debugging, understanding model uncertainty, and identifying potential "hallucinations". */
  logprobsResult?: GoogleCloudAiplatformV1beta1LogprobsResult;
  /** Output only. The content of the candidate. */
  content?: GoogleCloudAiplatformV1beta1Content;
  /** Output only. The 0-based index of this candidate in the list of generated responses. This is useful for distinguishing between multiple candidates when `candidate_count` > 1. */
  index?: number;
  /** Output only. A list of ratings for the safety of a response candidate. There is at most one rating per category. */
  safetyRatings?: ReadonlyArray<GoogleCloudAiplatformV1beta1SafetyRating>;
  /** Output only. Metadata returned when grounding is enabled. It contains the sources used to ground the generated content. */
  groundingMetadata?: GoogleCloudAiplatformV1beta1GroundingMetadata;
  /** Output only. The average log probability of the tokens in this candidate. This is a length-normalized score that can be used to compare the quality of candidates of different lengths. A higher average log probability suggests a more confident and coherent response. */
  avgLogprobs?: number;
  /** Output only. A collection of citations that apply to the generated content. */
  citationMetadata?: GoogleCloudAiplatformV1beta1CitationMetadata;
  /** Output only. Describes the reason the model stopped generating tokens in more detail. This field is returned only when `finish_reason` is set. */
  finishMessage?: string;
  /** Output only. The reason why the model stopped generating tokens. If empty, the model has not stopped generating. */
  finishReason?:
    | "FINISH_REASON_UNSPECIFIED"
    | "STOP"
    | "MAX_TOKENS"
    | "SAFETY"
    | "RECITATION"
    | "OTHER"
    | "BLOCKLIST"
    | "PROHIBITED_CONTENT"
    | "SPII"
    | "MALFORMED_FUNCTION_CALL"
    | "MODEL_ARMOR"
    | "IMAGE_SAFETY"
    | "IMAGE_PROHIBITED_CONTENT"
    | "IMAGE_RECITATION"
    | "IMAGE_OTHER"
    | "UNEXPECTED_TOOL_CALL"
    | "NO_IMAGE"
    | (string & {});
}

export const GoogleCloudAiplatformV1beta1Candidate: Schema.Codec<GoogleCloudAiplatformV1beta1Candidate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urlContextMetadata: Schema.optional(
      GoogleCloudAiplatformV1beta1UrlContextMetadata,
    ),
    logprobsResult: Schema.optional(GoogleCloudAiplatformV1beta1LogprobsResult),
    content: Schema.optional(GoogleCloudAiplatformV1beta1Content),
    index: Schema.optional(Schema.Number),
    safetyRatings: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1SafetyRating),
    ),
    groundingMetadata: Schema.optional(
      GoogleCloudAiplatformV1beta1GroundingMetadata,
    ),
    avgLogprobs: Schema.optional(Schema.Number),
    citationMetadata: Schema.optional(
      GoogleCloudAiplatformV1beta1CitationMetadata,
    ),
    finishMessage: Schema.optional(Schema.String),
    finishReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAiplatformV1beta1Candidate" });

export interface GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback {
  /** Output only. The reason why the prompt was blocked. */
  blockReason?:
    | "BLOCKED_REASON_UNSPECIFIED"
    | "SAFETY"
    | "OTHER"
    | "BLOCKLIST"
    | "PROHIBITED_CONTENT"
    | "MODEL_ARMOR"
    | "IMAGE_SAFETY"
    | "JAILBREAK"
    | (string & {});
  /** Output only. A readable message that explains the reason why the prompt was blocked. */
  blockReasonMessage?: string;
  /** Output only. A list of safety ratings for the prompt. There is one rating per category. */
  safetyRatings?: ReadonlyArray<GoogleCloudAiplatformV1beta1SafetyRating>;
}

export const GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback: Schema.Codec<GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockReason: Schema.optional(Schema.String),
    blockReasonMessage: Schema.optional(Schema.String),
    safetyRatings: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1SafetyRating),
    ),
  }).annotate({
    identifier:
      "GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback",
  });

export interface GoogleCloudAiplatformV1beta1GenerateContentResponse {
  /** Output only. Timestamp when the request is made to the server. */
  createTime?: string;
  /** Output only. The model version used to generate the response. */
  modelVersion?: string;
  /** Usage metadata about the response(s). */
  usageMetadata?: GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata;
  /** Output only. Generated candidates. */
  candidates?: ReadonlyArray<GoogleCloudAiplatformV1beta1Candidate>;
  /** Output only. Content filter results for a prompt sent in the request. Note: Sent only in the first stream chunk. Only happens when no candidates were generated due to content violations. */
  promptFeedback?: GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback;
  /** Output only. response_id is used to identify each response. It is the encoding of the event_id. */
  responseId?: string;
}

export const GoogleCloudAiplatformV1beta1GenerateContentResponse: Schema.Codec<GoogleCloudAiplatformV1beta1GenerateContentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    modelVersion: Schema.optional(Schema.String),
    usageMetadata: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata,
    ),
    candidates: Schema.optional(
      Schema.Array(GoogleCloudAiplatformV1beta1Candidate),
    ),
    promptFeedback: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerateContentResponsePromptFeedback,
    ),
    responseId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAiplatformV1beta1GenerateContentResponse",
  });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface CountTokensProjectsLocationsPublishersModelsRequest {
  /** Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` */
  endpoint: string;
  /** Request body */
  body?: GoogleCloudAiplatformV1beta1CountTokensRequest;
}

export const CountTokensProjectsLocationsPublishersModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint: Schema.String.pipe(T.HttpPath("endpoint")),
    body: Schema.optional(GoogleCloudAiplatformV1beta1CountTokensRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta/{+endpoint}:countTokens",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CountTokensProjectsLocationsPublishersModelsRequest>;

export type CountTokensProjectsLocationsPublishersModelsResponse =
  GoogleCloudAiplatformV1beta1CountTokensResponse;
export const CountTokensProjectsLocationsPublishersModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAiplatformV1beta1CountTokensResponse;

export type CountTokensProjectsLocationsPublishersModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Perform a token counting. */
export const countTokensProjectsLocationsPublishersModels: API.OperationMethod<
  CountTokensProjectsLocationsPublishersModelsRequest,
  CountTokensProjectsLocationsPublishersModelsResponse,
  CountTokensProjectsLocationsPublishersModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CountTokensProjectsLocationsPublishersModelsRequest,
  output: CountTokensProjectsLocationsPublishersModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StreamGenerateContentProjectsLocationsPublishersModelsRequest {
  /** Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/* /models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` */
  model: string;
  /** Request body */
  body?: GoogleCloudAiplatformV1beta1GenerateContentRequest;
}

export const StreamGenerateContentProjectsLocationsPublishersModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.String.pipe(T.HttpPath("model")),
    body: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerateContentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta/{+model}:streamGenerateContent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<StreamGenerateContentProjectsLocationsPublishersModelsRequest>;

export type StreamGenerateContentProjectsLocationsPublishersModelsResponse =
  GoogleCloudAiplatformV1beta1GenerateContentResponse;
export const StreamGenerateContentProjectsLocationsPublishersModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAiplatformV1beta1GenerateContentResponse;

export type StreamGenerateContentProjectsLocationsPublishersModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generate content with multimodal inputs with streaming support. */
export const streamGenerateContentProjectsLocationsPublishersModels: API.OperationMethod<
  StreamGenerateContentProjectsLocationsPublishersModelsRequest,
  StreamGenerateContentProjectsLocationsPublishersModelsResponse,
  StreamGenerateContentProjectsLocationsPublishersModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StreamGenerateContentProjectsLocationsPublishersModelsRequest,
  output: StreamGenerateContentProjectsLocationsPublishersModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateContentProjectsLocationsPublishersModelsRequest {
  /** Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/* /models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` */
  model: string;
  /** Request body */
  body?: GoogleCloudAiplatformV1beta1GenerateContentRequest;
}

export const GenerateContentProjectsLocationsPublishersModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.String.pipe(T.HttpPath("model")),
    body: Schema.optional(
      GoogleCloudAiplatformV1beta1GenerateContentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2beta/{+model}:generateContent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateContentProjectsLocationsPublishersModelsRequest>;

export type GenerateContentProjectsLocationsPublishersModelsResponse =
  GoogleCloudAiplatformV1beta1GenerateContentResponse;
export const GenerateContentProjectsLocationsPublishersModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAiplatformV1beta1GenerateContentResponse;

export type GenerateContentProjectsLocationsPublishersModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generate content with multimodal inputs. */
export const generateContentProjectsLocationsPublishersModels: API.OperationMethod<
  GenerateContentProjectsLocationsPublishersModelsRequest,
  GenerateContentProjectsLocationsPublishersModelsResponse,
  GenerateContentProjectsLocationsPublishersModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateContentProjectsLocationsPublishersModelsRequest,
  output: GenerateContentProjectsLocationsPublishersModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
