import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmplifyUIBuilder {
  createComponent(
    input: CreateComponentRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceConflictException | ServiceQuotaExceededException | CommonAwsError
  >;
  createForm(
    input: CreateFormRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceConflictException | ServiceQuotaExceededException | CommonAwsError
  >;
  createTheme(
    input: CreateThemeRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceConflictException | ServiceQuotaExceededException | CommonAwsError
  >;
  deleteComponent(
    input: DeleteComponentRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  deleteForm(
    input: DeleteFormRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  deleteTheme(
    input: DeleteThemeRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  exchangeCodeForToken(
    input: ExchangeCodeForTokenRequest,
  ): Effect.Effect<
    {},
    InvalidParameterException | CommonAwsError
  >;
  exportComponents(
    input: ExportComponentsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | CommonAwsError
  >;
  exportForms(
    input: ExportFormsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | CommonAwsError
  >;
  exportThemes(
    input: ExportThemesRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | CommonAwsError
  >;
  getCodegenJob(
    input: GetCodegenJobRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getComponent(
    input: GetComponentRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getForm(
    input: GetFormRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getMetadata(
    input: GetMetadataRequest,
  ): Effect.Effect<
    {},
    InvalidParameterException | UnauthorizedException | CommonAwsError
  >;
  getTheme(
    input: GetThemeRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listCodegenJobs(
    input: ListCodegenJobsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ThrottlingException | CommonAwsError
  >;
  listComponents(
    input: ListComponentsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | CommonAwsError
  >;
  listForms(
    input: ListFormsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listThemes(
    input: ListThemesRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | CommonAwsError
  >;
  putMetadataFlag(
    input: PutMetadataFlagRequest,
  ): Effect.Effect<
    {},
    InvalidParameterException | UnauthorizedException | CommonAwsError
  >;
  refreshToken(
    input: RefreshTokenRequest,
  ): Effect.Effect<
    {},
    InvalidParameterException | CommonAwsError
  >;
  startCodegenJob(
    input: StartCodegenJobRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ThrottlingException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateComponent(
    input: UpdateComponentRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceConflictException | CommonAwsError
  >;
  updateForm(
    input: UpdateFormRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceConflictException | CommonAwsError
  >;
  updateTheme(
    input: UpdateThemeRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidParameterException | ResourceConflictException | CommonAwsError
  >;
}

export type Amplifyuibuilder = AmplifyUIBuilder;

export interface ActionParameters {
}
export type ApiConfiguration = never;
export type AppId = string;

export type AssociatedFieldsList = Array<unknown>;
export type CodegenDependencies = Array<unknown>;
export interface CodegenDependency {
}
export interface CodegenFeatureFlags {
}
export interface CodegenGenericDataEnum {
}
export type CodegenGenericDataEnums = Record<string, unknown>;
export type CodegenGenericDataEnumValuesList = Array<unknown>;
export interface CodegenGenericDataField {
}
export type CodegenGenericDataFieldDataType = never;
export type CodegenGenericDataFields = Record<string, unknown>;
export interface CodegenGenericDataModel {
}
export type CodegenGenericDataModels = Record<string, unknown>;
export interface CodegenGenericDataNonModel {
}
export type CodegenGenericDataNonModelFields = Record<string, unknown>;
export type CodegenGenericDataNonModels = Record<string, unknown>;
export interface CodegenGenericDataRelationshipType {
}
export interface CodegenJob {
}
export interface CodegenJobAsset {
}
export interface CodegenJobGenericDataSchema {
}
export type CodegenJobGenericDataSourceType = never;
export type CodegenJobRenderConfig = never;
export type CodegenJobStatus = never;
export interface CodegenJobSummary {
}
export type CodegenJobSummaryList = Array<unknown>;
export type CodegenPrimaryKeysList = Array<unknown>;
export interface Component {
}
export type ComponentBindingProperties = Record<string, unknown>;
export interface ComponentBindingPropertiesValue {
}
export interface ComponentBindingPropertiesValueProperties {
}
export interface ComponentChild {
}
export type ComponentChildList = Array<unknown>;
export type ComponentCollectionProperties = Record<string, unknown>;
export interface ComponentConditionProperty {
}
export interface ComponentDataConfiguration {
}
export interface ComponentEvent {
}
export type ComponentEvents = Record<string, unknown>;
export type ComponentList = Array<unknown>;
export type ComponentName = string;

export type ComponentOverrides = Record<string, unknown>;
export type ComponentOverridesValue = Record<string, unknown>;
export type ComponentProperties = Record<string, unknown>;
export interface ComponentProperty {
}
export interface ComponentPropertyBindingProperties {
}
export type ComponentPropertyList = Array<unknown>;
export interface ComponentSummary {
}
export type ComponentSummaryList = Array<unknown>;
export type ComponentType = string;

export interface ComponentVariant {
}
export type ComponentVariants = Array<unknown>;
export type ComponentVariantValues = Record<string, unknown>;
export interface CreateComponentData {
}
export interface CreateComponentRequest {
}
export interface CreateComponentResponse {
}
export interface CreateFormData {
}
export interface CreateFormRequest {
}
export interface CreateFormResponse {
}
export interface CreateThemeData {
}
export interface CreateThemeRequest {
}
export interface CreateThemeResponse {
}
export interface DataStoreRenderConfig {
}
export interface DeleteComponentRequest {
}
export interface DeleteFormRequest {
}
export interface DeleteThemeRequest {
}
export interface ExchangeCodeForTokenRequest {
}
export interface ExchangeCodeForTokenRequestBody {
}
export interface ExchangeCodeForTokenResponse {
}
export interface ExportComponentsRequest {
}
export interface ExportComponentsResponse {
}
export interface ExportFormsRequest {
}
export interface ExportFormsResponse {
}
export interface ExportThemesRequest {
}
export interface ExportThemesResponse {
}
export type FeaturesMap = Record<string, unknown>;
export interface FieldConfig {
}
export interface FieldInputConfig {
}
export type FieldPosition = never;
export type FieldsMap = Record<string, unknown>;
export interface FieldValidationConfiguration {
}
export interface FileUploaderFieldConfig {
}
export type FixedPosition = never;
export interface Form {
}
export type FormActionType = never;
export interface FormBindingElement {
}
export type FormBindings = Record<string, unknown>;
export interface FormButton {
}
export type FormButtonsPosition = never;
export interface FormCTA {
}
export type FormDataSourceType = string;

export interface FormDataTypeConfig {
}
export type FormInputBindingProperties = Record<string, unknown>;
export interface FormInputBindingPropertiesValue {
}
export interface FormInputBindingPropertiesValueProperties {
}
export interface FormInputValueProperty {
}
export interface FormInputValuePropertyBindingProperties {
}
export type FormInputValuePropertyList = Array<unknown>;
export type FormList = Array<unknown>;
export type FormName = string;

export interface FormStyle {
}
export type FormStyleConfig = never;
export interface FormSummary {
}
export type FormSummaryList = Array<unknown>;
export type GenericDataRelationshipType = never;
export interface GetCodegenJobRequest {
}
export interface GetCodegenJobResponse {
}
export interface GetComponentRequest {
}
export interface GetComponentResponse {
}
export interface GetFormRequest {
}
export interface GetFormResponse {
}
export interface GetMetadataRequest {
}
export interface GetMetadataResponse {
}
export interface GetThemeRequest {
}
export interface GetThemeResponse {
}
export interface GraphQLRenderConfig {
}
export type IdentifierList = Array<unknown>;
export interface InternalServerException {
}
export interface InvalidParameterException {
}
export type JSModule = never;
export type JSScript = never;
export type JSTarget = never;
export type LabelDecorator = string;

export type ListCodegenJobsLimit = number;

export interface ListCodegenJobsRequest {
}
export interface ListCodegenJobsResponse {
}
export interface ListComponentsRequest {
}
export interface ListComponentsResponse {
}
export type ListEntityLimit = number;

export interface ListFormsRequest {
}
export interface ListFormsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListThemesRequest {
}
export interface ListThemesResponse {
}
export interface MutationActionSetStateParameter {
}
export interface NoApiRenderConfig {
}
export type NumValues = Array<unknown>;
export type OperandType = string;

export interface Predicate {
}
export type PredicateList = Array<unknown>;
export interface PutMetadataFlagBody {
}
export interface PutMetadataFlagRequest {
}
export type ReactCodegenDependencies = Record<string, unknown>;
export interface ReactStartCodegenJobData {
}
export interface RefreshTokenRequest {
}
export interface RefreshTokenRequestBody {
}
export interface RefreshTokenResponse {
}
export type RelatedModelFieldsList = Array<unknown>;
export interface ResourceConflictException {
}
export interface ResourceNotFoundException {
}
export interface SectionalElement {
}
export type SectionalElementMap = Record<string, unknown>;
export type SensitiveString = string;

export interface ServiceQuotaExceededException {
}
export type SortDirection = never;
export interface SortProperty {
}
export type SortPropertyList = Array<unknown>;
export interface StartCodegenJobData {
}
export interface StartCodegenJobRequest {
}
export interface StartCodegenJobResponse {
}
export type StorageAccessLevel = never;
export type StrValues = Array<unknown>;
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type Tags = Record<string, unknown>;
export type TagValue = string;

export interface Theme {
}
export type ThemeList = Array<unknown>;
export type ThemeName = string;

export interface ThemeSummary {
}
export type ThemeSummaryList = Array<unknown>;
export interface ThemeValue {
}
export interface ThemeValues {
}
export type ThemeValuesList = Array<unknown>;
export interface ThrottlingException {
}
export type TokenProviders = string;

export interface UnauthorizedException {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateComponentData {
}
export interface UpdateComponentRequest {
}
export interface UpdateComponentResponse {
}
export interface UpdateFormData {
}
export interface UpdateFormRequest {
}
export interface UpdateFormResponse {
}
export interface UpdateThemeData {
}
export interface UpdateThemeRequest {
}
export interface UpdateThemeResponse {
}
export type Uuid = string;

export type ValidationsList = Array<unknown>;
export interface ValueMapping {
}
export type ValueMappingList = Array<unknown>;
export interface ValueMappings {
}
export declare namespace CreateComponent {
  export type Input = CreateComponentRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceConflictException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateForm {
  export type Input = CreateFormRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceConflictException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateTheme {
  export type Input = CreateThemeRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceConflictException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace DeleteComponent {
  export type Input = DeleteComponentRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteForm {
  export type Input = DeleteFormRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTheme {
  export type Input = DeleteThemeRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ExchangeCodeForToken {
  export type Input = ExchangeCodeForTokenRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ExportComponents {
  export type Input = ExportComponentsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ExportForms {
  export type Input = ExportFormsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ExportThemes {
  export type Input = ExportThemesRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace GetCodegenJob {
  export type Input = GetCodegenJobRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetComponent {
  export type Input = GetComponentRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetForm {
  export type Input = GetFormRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMetadata {
  export type Input = GetMetadataRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetTheme {
  export type Input = GetThemeRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListCodegenJobs {
  export type Input = ListCodegenJobsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListComponents {
  export type Input = ListComponentsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ListForms {
  export type Input = ListFormsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThemes {
  export type Input = ListThemesRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace PutMetadataFlag {
  export type Input = PutMetadataFlagRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RefreshToken {
  export type Input = RefreshTokenRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | CommonAwsError;
}

export declare namespace StartCodegenJob {
  export type Input = StartCodegenJobRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateComponent {
  export type Input = UpdateComponentRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceConflictException
    | CommonAwsError;
}

export declare namespace UpdateForm {
  export type Input = UpdateFormRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceConflictException
    | CommonAwsError;
}

export declare namespace UpdateTheme {
  export type Input = UpdateThemeRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceConflictException
    | CommonAwsError;
}

