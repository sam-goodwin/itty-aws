import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmplifyUIBuilder {
  exchangeCodeForToken(
    input: ExchangeCodeForTokenRequest,
  ): Effect.Effect<
    ExchangeCodeForTokenResponse,
    InvalidParameterException | CommonAwsError
  >;
  getMetadata(
    input: GetMetadataRequest,
  ): Effect.Effect<
    GetMetadataResponse,
    InvalidParameterException | UnauthorizedException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
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
    RefreshTokenResponse,
    InvalidParameterException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
}

export type Amplifyuibuilder = AmplifyUIBuilder;

export interface ActionParameters {
  type?: ComponentProperty;
  url?: ComponentProperty;
  anchor?: ComponentProperty;
  target?: ComponentProperty;
  global?: ComponentProperty;
  model?: string;
  id?: ComponentProperty;
  fields?: Record<string, ComponentProperty>;
  state?: MutationActionSetStateParameter;
}
interface _ApiConfiguration {
  graphQLConfig?: GraphQLRenderConfig;
  dataStoreConfig?: DataStoreRenderConfig;
  noApiConfig?: NoApiRenderConfig;
}

export type ApiConfiguration =
  | (_ApiConfiguration & { graphQLConfig: GraphQLRenderConfig })
  | (_ApiConfiguration & { dataStoreConfig: DataStoreRenderConfig })
  | (_ApiConfiguration & { noApiConfig: NoApiRenderConfig });
export type AppId = string;

export type AssociatedFieldsList = Array<string>;
export type CodegenDependencies = Array<CodegenDependency>;
export interface CodegenDependency {
  name?: string;
  supportedVersion?: string;
  isSemVer?: boolean;
  reason?: string;
}
export interface CodegenFeatureFlags {
  isRelationshipSupported?: boolean;
  isNonModelSupported?: boolean;
}
export interface CodegenGenericDataEnum {
  values: Array<string>;
}
export type CodegenGenericDataEnums = Record<string, CodegenGenericDataEnum>;
export type CodegenGenericDataEnumValuesList = Array<string>;
export interface CodegenGenericDataField {
  dataType: CodegenGenericDataFieldDataType;
  dataTypeValue: string;
  required: boolean;
  readOnly: boolean;
  isArray: boolean;
  relationship?: CodegenGenericDataRelationshipType;
}
export type CodegenGenericDataFieldDataType =
  | "ID"
  | "STRING"
  | "INT"
  | "FLOAT"
  | "AWS_DATE"
  | "AWS_TIME"
  | "AWS_DATE_TIME"
  | "AWS_TIMESTAMP"
  | "AWS_EMAIL"
  | "AWS_URL"
  | "AWS_IP_ADDRESS"
  | "BOOLEAN"
  | "AWS_JSON"
  | "AWS_PHONE"
  | "ENUM"
  | "MODEL"
  | "NON_MODEL";
export type CodegenGenericDataFields = Record<string, CodegenGenericDataField>;
export interface CodegenGenericDataModel {
  fields: Record<string, CodegenGenericDataField>;
  isJoinTable?: boolean;
  primaryKeys: Array<string>;
}
export type CodegenGenericDataModels = Record<string, CodegenGenericDataModel>;
export interface CodegenGenericDataNonModel {
  fields: Record<string, CodegenGenericDataField>;
}
export type CodegenGenericDataNonModelFields = Record<
  string,
  CodegenGenericDataField
>;
export type CodegenGenericDataNonModels = Record<
  string,
  CodegenGenericDataNonModel
>;
export interface CodegenGenericDataRelationshipType {
  type: GenericDataRelationshipType;
  relatedModelName: string;
  relatedModelFields?: Array<string>;
  canUnlinkAssociatedModel?: boolean;
  relatedJoinFieldName?: string;
  relatedJoinTableName?: string;
  belongsToFieldOnRelatedModel?: string;
  associatedFields?: Array<string>;
  isHasManyIndex?: boolean;
}
export interface CodegenJob {
  id: string;
  appId: string;
  environmentName: string;
  renderConfig?: CodegenJobRenderConfig;
  genericDataSchema?: CodegenJobGenericDataSchema;
  autoGenerateForms?: boolean;
  features?: CodegenFeatureFlags;
  status?: CodegenJobStatus;
  statusMessage?: string;
  asset?: CodegenJobAsset;
  tags?: Record<string, string>;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  dependencies?: Array<CodegenDependency>;
}
export interface CodegenJobAsset {
  downloadUrl?: string;
}
export interface CodegenJobGenericDataSchema {
  dataSourceType: CodegenJobGenericDataSourceType;
  models: Record<string, CodegenGenericDataModel>;
  enums: Record<string, CodegenGenericDataEnum>;
  nonModels: Record<string, CodegenGenericDataNonModel>;
}
export type CodegenJobGenericDataSourceType = "DATA_STORE";
interface _CodegenJobRenderConfig {
  react?: ReactStartCodegenJobData;
}

export type CodegenJobRenderConfig = _CodegenJobRenderConfig & {
  react: ReactStartCodegenJobData;
};
export type CodegenJobStatus = "IN_PROGRESS" | "FAILED" | "SUCCEEDED";
export interface CodegenJobSummary {
  appId: string;
  environmentName: string;
  id: string;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
}
export type CodegenJobSummaryList = Array<CodegenJobSummary>;
export type CodegenPrimaryKeysList = Array<string>;
export interface Component {
  appId: string;
  environmentName: string;
  sourceId?: string;
  id: string;
  name: string;
  componentType: string;
  properties: Record<string, ComponentProperty>;
  children?: Array<ComponentChild>;
  variants: Array<ComponentVariant>;
  overrides: Record<string, Record<string, string>>;
  bindingProperties: Record<string, ComponentBindingPropertiesValue>;
  collectionProperties?: Record<string, ComponentDataConfiguration>;
  createdAt: Date | string;
  modifiedAt?: Date | string;
  tags?: Record<string, string>;
  events?: Record<string, ComponentEvent>;
  schemaVersion?: string;
}
export type ComponentBindingProperties = Record<
  string,
  ComponentBindingPropertiesValue
>;
export interface ComponentBindingPropertiesValue {
  type?: string;
  bindingProperties?: ComponentBindingPropertiesValueProperties;
  defaultValue?: string;
}
export interface ComponentBindingPropertiesValueProperties {
  model?: string;
  field?: string;
  predicates?: Array<Predicate>;
  userAttribute?: string;
  bucket?: string;
  key?: string;
  defaultValue?: string;
  slotName?: string;
}
export interface ComponentChild {
  componentType: string;
  name: string;
  properties: Record<string, ComponentProperty>;
  children?: Array<ComponentChild>;
  events?: Record<string, ComponentEvent>;
  sourceId?: string;
}
export type ComponentChildList = Array<ComponentChild>;
export type ComponentCollectionProperties = Record<
  string,
  ComponentDataConfiguration
>;
export interface ComponentConditionProperty {
  property?: string;
  field?: string;
  operator?: string;
  operand?: string;
  then?: ComponentProperty;
  else?: ComponentProperty;
  operandType?: string;
}
export interface ComponentDataConfiguration {
  model: string;
  sort?: Array<SortProperty>;
  predicate?: Predicate;
  identifiers?: Array<string>;
}
export interface ComponentEvent {
  action?: string;
  parameters?: ActionParameters;
  bindingEvent?: string;
}
export type ComponentEvents = Record<string, ComponentEvent>;
export type ComponentList = Array<Component>;
export type ComponentName = string;

export type ComponentOverrides = Record<string, Record<string, string>>;
export type ComponentOverridesValue = Record<string, string>;
export type ComponentProperties = Record<string, ComponentProperty>;
export interface ComponentProperty {
  value?: string;
  bindingProperties?: ComponentPropertyBindingProperties;
  collectionBindingProperties?: ComponentPropertyBindingProperties;
  defaultValue?: string;
  model?: string;
  bindings?: Record<string, FormBindingElement>;
  event?: string;
  userAttribute?: string;
  concat?: Array<ComponentProperty>;
  condition?: ComponentConditionProperty;
  configured?: boolean;
  type?: string;
  importedValue?: string;
  componentName?: string;
  property?: string;
}
export interface ComponentPropertyBindingProperties {
  property: string;
  field?: string;
}
export type ComponentPropertyList = Array<ComponentProperty>;
export interface ComponentSummary {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
  componentType: string;
}
export type ComponentSummaryList = Array<ComponentSummary>;
export type ComponentType = string;

export interface ComponentVariant {
  variantValues?: Record<string, string>;
  overrides?: Record<string, Record<string, string>>;
}
export type ComponentVariants = Array<ComponentVariant>;
export type ComponentVariantValues = Record<string, string>;
export interface CreateComponentData {
  name: string;
  sourceId?: string;
  componentType: string;
  properties: Record<string, ComponentProperty>;
  children?: Array<ComponentChild>;
  variants: Array<ComponentVariant>;
  overrides: Record<string, Record<string, string>>;
  bindingProperties: Record<string, ComponentBindingPropertiesValue>;
  collectionProperties?: Record<string, ComponentDataConfiguration>;
  tags?: Record<string, string>;
  events?: Record<string, ComponentEvent>;
  schemaVersion?: string;
}
export interface CreateComponentRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  componentToCreate: CreateComponentData;
}
export interface CreateComponentResponse {
  entity?: Component;
}
export interface CreateFormData {
  name: string;
  dataType: FormDataTypeConfig;
  formActionType: FormActionType;
  fields: Record<string, FieldConfig>;
  style: FormStyle;
  sectionalElements: Record<string, SectionalElement>;
  schemaVersion: string;
  cta?: FormCTA;
  tags?: Record<string, string>;
  labelDecorator?: string;
}
export interface CreateFormRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  formToCreate: CreateFormData;
}
export interface CreateFormResponse {
  entity?: Form;
}
export interface CreateThemeData {
  name: string;
  values: Array<ThemeValues>;
  overrides?: Array<ThemeValues>;
  tags?: Record<string, string>;
}
export interface CreateThemeRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  themeToCreate: CreateThemeData;
}
export interface CreateThemeResponse {
  entity?: Theme;
}
export interface DataStoreRenderConfig {}
export interface DeleteComponentRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface DeleteFormRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface DeleteThemeRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface ExchangeCodeForTokenRequest {
  provider: string;
  request: ExchangeCodeForTokenRequestBody;
}
export interface ExchangeCodeForTokenRequestBody {
  code: string;
  redirectUri: string;
  clientId?: string;
}
export interface ExchangeCodeForTokenResponse {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}
export interface ExportComponentsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
export interface ExportComponentsResponse {
  entities: Array<Component>;
  nextToken?: string;
}
export interface ExportFormsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
export interface ExportFormsResponse {
  entities: Array<Form>;
  nextToken?: string;
}
export interface ExportThemesRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
export interface ExportThemesResponse {
  entities: Array<Theme>;
  nextToken?: string;
}
export type FeaturesMap = Record<string, string>;
export interface FieldConfig {
  label?: string;
  position?: FieldPosition;
  excluded?: boolean;
  inputType?: FieldInputConfig;
  validations?: Array<FieldValidationConfiguration>;
}
export interface FieldInputConfig {
  type: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  defaultValue?: string;
  descriptiveText?: string;
  defaultChecked?: boolean;
  defaultCountryCode?: string;
  valueMappings?: ValueMappings;
  name?: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  value?: string;
  isArray?: boolean;
  fileUploaderConfig?: FileUploaderFieldConfig;
}
interface _FieldPosition {
  fixed?: FixedPosition;
  rightOf?: string;
  below?: string;
}

export type FieldPosition =
  | (_FieldPosition & { fixed: FixedPosition })
  | (_FieldPosition & { rightOf: string })
  | (_FieldPosition & { below: string });
export type FieldsMap = Record<string, FieldConfig>;
export interface FieldValidationConfiguration {
  type: string;
  strValues?: Array<string>;
  numValues?: Array<number>;
  validationMessage?: string;
}
export interface FileUploaderFieldConfig {
  accessLevel: StorageAccessLevel;
  acceptedFileTypes: Array<string>;
  showThumbnails?: boolean;
  isResumable?: boolean;
  maxFileCount?: number;
  maxSize?: number;
}
export type FixedPosition = "FIRST";
export interface Form {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
  formActionType: FormActionType;
  style: FormStyle;
  dataType: FormDataTypeConfig;
  fields: Record<string, FieldConfig>;
  sectionalElements: Record<string, SectionalElement>;
  schemaVersion: string;
  tags?: Record<string, string>;
  cta?: FormCTA;
  labelDecorator?: string;
}
export type FormActionType = "CREATE" | "UPDATE";
export interface FormBindingElement {
  element: string;
  property: string;
}
export type FormBindings = Record<string, FormBindingElement>;
export interface FormButton {
  excluded?: boolean;
  children?: string;
  position?: FieldPosition;
}
export type FormButtonsPosition = "TOP" | "BOTTOM" | "TOP_AND_BOTTOM";
export interface FormCTA {
  position?: FormButtonsPosition;
  clear?: FormButton;
  cancel?: FormButton;
  submit?: FormButton;
}
export type FormDataSourceType = string;

export interface FormDataTypeConfig {
  dataSourceType: string;
  dataTypeName: string;
}
export type FormInputBindingProperties = Record<
  string,
  FormInputBindingPropertiesValue
>;
export interface FormInputBindingPropertiesValue {
  type?: string;
  bindingProperties?: FormInputBindingPropertiesValueProperties;
}
export interface FormInputBindingPropertiesValueProperties {
  model?: string;
}
export interface FormInputValueProperty {
  value?: string;
  bindingProperties?: FormInputValuePropertyBindingProperties;
  concat?: Array<FormInputValueProperty>;
}
export interface FormInputValuePropertyBindingProperties {
  property: string;
  field?: string;
}
export type FormInputValuePropertyList = Array<FormInputValueProperty>;
export type FormList = Array<Form>;
export type FormName = string;

export interface FormStyle {
  horizontalGap?: FormStyleConfig;
  verticalGap?: FormStyleConfig;
  outerPadding?: FormStyleConfig;
}
interface _FormStyleConfig {
  tokenReference?: string;
  value?: string;
}

export type FormStyleConfig =
  | (_FormStyleConfig & { tokenReference: string })
  | (_FormStyleConfig & { value: string });
export interface FormSummary {
  appId: string;
  dataType: FormDataTypeConfig;
  environmentName: string;
  formActionType: FormActionType;
  id: string;
  name: string;
}
export type FormSummaryList = Array<FormSummary>;
export type GenericDataRelationshipType = "HAS_MANY" | "HAS_ONE" | "BELONGS_TO";
export interface GetCodegenJobRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface GetCodegenJobResponse {
  job?: CodegenJob;
}
export interface GetComponentRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface GetComponentResponse {
  component?: Component;
}
export interface GetFormRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface GetFormResponse {
  form?: Form;
}
export interface GetMetadataRequest {
  appId: string;
  environmentName: string;
}
export interface GetMetadataResponse {
  features: Record<string, string>;
}
export interface GetThemeRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface GetThemeResponse {
  theme?: Theme;
}
export interface GraphQLRenderConfig {
  typesFilePath: string;
  queriesFilePath: string;
  mutationsFilePath: string;
  subscriptionsFilePath: string;
  fragmentsFilePath: string;
}
export type IdentifierList = Array<string>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export type JSModule = "ES2020" | "ESNEXT";
export type JSScript = "JSX" | "TSX" | "JS";
export type JSTarget = "ES2015" | "ES2020";
export type LabelDecorator = string;

export type ListCodegenJobsLimit = number;

export interface ListCodegenJobsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListCodegenJobsResponse {
  entities: Array<CodegenJobSummary>;
  nextToken?: string;
}
export interface ListComponentsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListComponentsResponse {
  entities: Array<ComponentSummary>;
  nextToken?: string;
}
export type ListEntityLimit = number;

export interface ListFormsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFormsResponse {
  entities: Array<FormSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export interface ListThemesRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListThemesResponse {
  entities: Array<ThemeSummary>;
  nextToken?: string;
}
export interface MutationActionSetStateParameter {
  componentName: string;
  property: string;
  set: ComponentProperty;
}
export interface NoApiRenderConfig {}
export type NumValues = Array<number>;
export type OperandType = string;

export interface Predicate {
  or?: Array<Predicate>;
  and?: Array<Predicate>;
  field?: string;
  operator?: string;
  operand?: string;
  operandType?: string;
}
export type PredicateList = Array<Predicate>;
export interface PutMetadataFlagBody {
  newValue: string;
}
export interface PutMetadataFlagRequest {
  appId: string;
  environmentName: string;
  featureName: string;
  body: PutMetadataFlagBody;
}
export type ReactCodegenDependencies = Record<string, string>;
export interface ReactStartCodegenJobData {
  module?: JSModule;
  target?: JSTarget;
  script?: JSScript;
  renderTypeDeclarations?: boolean;
  inlineSourceMap?: boolean;
  apiConfiguration?: ApiConfiguration;
  dependencies?: Record<string, string>;
}
export interface RefreshTokenRequest {
  provider: string;
  refreshTokenBody: RefreshTokenRequestBody;
}
export interface RefreshTokenRequestBody {
  token: string;
  clientId?: string;
}
export interface RefreshTokenResponse {
  accessToken: string;
  expiresIn: number;
}
export type RelatedModelFieldsList = Array<string>;
export declare class ResourceConflictException extends EffectData.TaggedError(
  "ResourceConflictException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface SectionalElement {
  type: string;
  position?: FieldPosition;
  text?: string;
  level?: number;
  orientation?: string;
  excluded?: boolean;
}
export type SectionalElementMap = Record<string, SectionalElement>;
export type SensitiveString = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type SortDirection = "ASC" | "DESC";
export interface SortProperty {
  field: string;
  direction: SortDirection;
}
export type SortPropertyList = Array<SortProperty>;
export interface StartCodegenJobData {
  renderConfig: CodegenJobRenderConfig;
  genericDataSchema?: CodegenJobGenericDataSchema;
  autoGenerateForms?: boolean;
  features?: CodegenFeatureFlags;
  tags?: Record<string, string>;
}
export interface StartCodegenJobRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  codegenJobToCreate: StartCodegenJobData;
}
export interface StartCodegenJobResponse {
  entity?: CodegenJob;
}
export type StorageAccessLevel = "PUBLIC" | "PROTECTED" | "PRIVATE";
export type StrValues = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export interface Theme {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
  createdAt: Date | string;
  modifiedAt?: Date | string;
  values: Array<ThemeValues>;
  overrides?: Array<ThemeValues>;
  tags?: Record<string, string>;
}
export type ThemeList = Array<Theme>;
export type ThemeName = string;

export interface ThemeSummary {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
}
export type ThemeSummaryList = Array<ThemeSummary>;
export interface ThemeValue {
  value?: string;
  children?: Array<ThemeValues>;
}
export interface ThemeValues {
  key?: string;
  value?: ThemeValue;
}
export type ThemeValuesList = Array<ThemeValues>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TokenProviders = string;

export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateComponentData {
  id?: string;
  name?: string;
  sourceId?: string;
  componentType?: string;
  properties?: Record<string, ComponentProperty>;
  children?: Array<ComponentChild>;
  variants?: Array<ComponentVariant>;
  overrides?: Record<string, Record<string, string>>;
  bindingProperties?: Record<string, ComponentBindingPropertiesValue>;
  collectionProperties?: Record<string, ComponentDataConfiguration>;
  events?: Record<string, ComponentEvent>;
  schemaVersion?: string;
}
export interface UpdateComponentRequest {
  appId: string;
  environmentName: string;
  id: string;
  clientToken?: string;
  updatedComponent: UpdateComponentData;
}
export interface UpdateComponentResponse {
  entity?: Component;
}
export interface UpdateFormData {
  name?: string;
  dataType?: FormDataTypeConfig;
  formActionType?: FormActionType;
  fields?: Record<string, FieldConfig>;
  style?: FormStyle;
  sectionalElements?: Record<string, SectionalElement>;
  schemaVersion?: string;
  cta?: FormCTA;
  labelDecorator?: string;
}
export interface UpdateFormRequest {
  appId: string;
  environmentName: string;
  id: string;
  clientToken?: string;
  updatedForm: UpdateFormData;
}
export interface UpdateFormResponse {
  entity?: Form;
}
export interface UpdateThemeData {
  id?: string;
  name?: string;
  values: Array<ThemeValues>;
  overrides?: Array<ThemeValues>;
}
export interface UpdateThemeRequest {
  appId: string;
  environmentName: string;
  id: string;
  clientToken?: string;
  updatedTheme: UpdateThemeData;
}
export interface UpdateThemeResponse {
  entity?: Theme;
}
export type Uuid = string;

export type ValidationsList = Array<FieldValidationConfiguration>;
export interface ValueMapping {
  displayValue?: FormInputValueProperty;
  value: FormInputValueProperty;
}
export type ValueMappingList = Array<ValueMapping>;
export interface ValueMappings {
  values: Array<ValueMapping>;
  bindingProperties?: Record<string, FormInputBindingPropertiesValue>;
}
export declare namespace ExchangeCodeForToken {
  export type Input = ExchangeCodeForTokenRequest;
  export type Output = ExchangeCodeForTokenResponse;
  export type Error = InvalidParameterException | CommonAwsError;
}

export declare namespace GetMetadata {
  export type Input = GetMetadataRequest;
  export type Output = GetMetadataResponse;
  export type Error =
    | InvalidParameterException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
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
  export type Output = RefreshTokenResponse;
  export type Error = InvalidParameterException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
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
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}
