import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "AmplifyUIBuilder",
  serviceShapeName: "AmplifyUIBuilder",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "amplifyuibuilder" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-08-11");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://amplifyuibuilder-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://amplifyuibuilder-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://amplifyuibuilder.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://amplifyuibuilder.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceConflictException
  extends /*@__PURE__*/ S.TaggedError<ResourceConflictException>()(
    "ResourceConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export type ComponentName = string;
export type ComponentType = string;
export interface ComponentPropertyBindingProperties {
  property: string;
  field?: string;
}
export interface FormBindingElement {
  element: string;
  property: string;
}
export type FormBindings = { [key: string]: FormBindingElement | undefined };
export type ComponentPropertyList = ComponentProperty[];
export interface ComponentConditionProperty {
  property?: string;
  field?: string;
  operator?: string;
  operand?: string;
  then?: ComponentProperty;
  else?: ComponentProperty;
  operandType?: string;
}
export interface ComponentProperty {
  value?: string;
  bindingProperties?: ComponentPropertyBindingProperties;
  collectionBindingProperties?: ComponentPropertyBindingProperties;
  defaultValue?: string;
  model?: string;
  bindings?: { [key: string]: FormBindingElement | undefined };
  event?: string;
  userAttribute?: string;
  concat?: ComponentProperty[];
  condition?: ComponentConditionProperty;
  configured?: boolean;
  type?: string;
  importedValue?: string;
  componentName?: string;
  property?: string;
}
export type ComponentProperties = { [key: string]: ComponentProperty | undefined };
export interface MutationActionSetStateParameter {
  componentName: string;
  property: string;
  set: ComponentProperty;
}
export interface ActionParameters {
  type?: ComponentProperty;
  url?: ComponentProperty;
  anchor?: ComponentProperty;
  target?: ComponentProperty;
  global?: ComponentProperty;
  model?: string;
  id?: ComponentProperty;
  fields?: { [key: string]: ComponentProperty | undefined };
  state?: MutationActionSetStateParameter;
}
export interface ComponentEvent {
  action?: string;
  parameters?: ActionParameters;
  bindingEvent?: string;
}
export type ComponentEvents = { [key: string]: ComponentEvent | undefined };
export interface ComponentChild {
  componentType: string;
  name: string;
  properties: { [key: string]: ComponentProperty | undefined };
  children?: ComponentChild[];
  events?: { [key: string]: ComponentEvent | undefined };
  sourceId?: string;
}
export type ComponentChildList = ComponentChild[];
export type ComponentVariantValues = { [key: string]: string | undefined };
export type ComponentOverridesValue = { [key: string]: string | undefined };
export type ComponentOverrides = {
  [key: string]: { [key: string]: string | undefined } | undefined;
};
export interface ComponentVariant {
  variantValues?: { [key: string]: string | undefined };
  overrides?: { [key: string]: { [key: string]: string | undefined } | undefined };
}
export type ComponentVariants = ComponentVariant[];
export type OperandType = string;
export interface Predicate {
  or?: Predicate[];
  and?: Predicate[];
  field?: string;
  operator?: string;
  operand?: string;
  operandType?: string;
}
export type PredicateList = Predicate[];
export interface ComponentBindingPropertiesValueProperties {
  model?: string;
  field?: string;
  predicates?: Predicate[];
  userAttribute?: string;
  bucket?: string;
  key?: string;
  defaultValue?: string;
  slotName?: string;
}
export interface ComponentBindingPropertiesValue {
  type?: string;
  bindingProperties?: ComponentBindingPropertiesValueProperties;
  defaultValue?: string;
}
export type ComponentBindingProperties = {
  [key: string]: ComponentBindingPropertiesValue | undefined;
};
export type SortDirection = "ASC" | "DESC" | (string & {});
export interface SortProperty {
  field: string;
  direction: SortDirection;
}
export type SortPropertyList = SortProperty[];
export type IdentifierList = string[];
export interface ComponentDataConfiguration {
  model: string;
  sort?: SortProperty[];
  predicate?: Predicate;
  identifiers?: string[];
}
export type ComponentCollectionProperties = {
  [key: string]: ComponentDataConfiguration | undefined;
};
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export interface CreateComponentData {
  name: string;
  sourceId?: string;
  componentType: string;
  properties: { [key: string]: ComponentProperty | undefined };
  children?: ComponentChild[];
  variants: ComponentVariant[];
  overrides: { [key: string]: { [key: string]: string | undefined } | undefined };
  bindingProperties: { [key: string]: ComponentBindingPropertiesValue | undefined };
  collectionProperties?: { [key: string]: ComponentDataConfiguration | undefined };
  tags?: { [key: string]: string | undefined };
  events?: { [key: string]: ComponentEvent | undefined };
  schemaVersion?: string;
}
export interface CreateComponentRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  componentToCreate: CreateComponentData;
}
export type Uuid = string;
export interface Component {
  appId: string;
  environmentName: string;
  sourceId?: string;
  id: string;
  name: string;
  componentType: string;
  properties: { [key: string]: ComponentProperty | undefined };
  children?: ComponentChild[];
  variants: ComponentVariant[];
  overrides: { [key: string]: { [key: string]: string | undefined } | undefined };
  bindingProperties: { [key: string]: ComponentBindingPropertiesValue | undefined };
  collectionProperties?: { [key: string]: ComponentDataConfiguration | undefined };
  createdAt: Date;
  modifiedAt?: Date;
  tags?: { [key: string]: string | undefined };
  events?: { [key: string]: ComponentEvent | undefined };
  schemaVersion?: string;
}
export interface CreateComponentResponse {
  entity?: Component;
}
export type FormName = string;
export type FormDataSourceType = string;
export interface FormDataTypeConfig {
  dataSourceType: string;
  dataTypeName: string;
}
export type FormActionType = "create" | "update" | (string & {});
export type FixedPosition = "first" | (string & {});
export type FieldPosition =
  | { fixed: FixedPosition; rightOf?: never; below?: never }
  | { fixed?: never; rightOf: string; below?: never }
  | { fixed?: never; rightOf?: never; below: string };
export interface FormInputValuePropertyBindingProperties {
  property: string;
  field?: string;
}
export type FormInputValuePropertyList = FormInputValueProperty[];
export interface FormInputValueProperty {
  value?: string;
  bindingProperties?: FormInputValuePropertyBindingProperties;
  concat?: FormInputValueProperty[];
}
export interface ValueMapping {
  displayValue?: FormInputValueProperty;
  value: FormInputValueProperty;
}
export type ValueMappingList = ValueMapping[];
export interface FormInputBindingPropertiesValueProperties {
  model?: string;
}
export interface FormInputBindingPropertiesValue {
  type?: string;
  bindingProperties?: FormInputBindingPropertiesValueProperties;
}
export type FormInputBindingProperties = {
  [key: string]: FormInputBindingPropertiesValue | undefined;
};
export interface ValueMappings {
  values: ValueMapping[];
  bindingProperties?: { [key: string]: FormInputBindingPropertiesValue | undefined };
}
export type StorageAccessLevel = "public" | "protected" | "private" | (string & {});
export type StrValues = string[];
export interface FileUploaderFieldConfig {
  accessLevel: StorageAccessLevel;
  acceptedFileTypes: string[];
  showThumbnails?: boolean;
  isResumable?: boolean;
  maxFileCount?: number;
  maxSize?: number;
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
export type NumValues = number[];
export interface FieldValidationConfiguration {
  type: string;
  strValues?: string[];
  numValues?: number[];
  validationMessage?: string;
}
export type ValidationsList = FieldValidationConfiguration[];
export interface FieldConfig {
  label?: string;
  position?: FieldPosition;
  excluded?: boolean;
  inputType?: FieldInputConfig;
  validations?: FieldValidationConfiguration[];
}
export type FieldsMap = { [key: string]: FieldConfig | undefined };
export type FormStyleConfig =
  | { tokenReference: string; value?: never }
  | { tokenReference?: never; value: string };
export interface FormStyle {
  horizontalGap?: FormStyleConfig;
  verticalGap?: FormStyleConfig;
  outerPadding?: FormStyleConfig;
}
export interface SectionalElement {
  type: string;
  position?: FieldPosition;
  text?: string;
  level?: number;
  orientation?: string;
  excluded?: boolean;
}
export type SectionalElementMap = { [key: string]: SectionalElement | undefined };
export type FormButtonsPosition = "top" | "bottom" | "top_and_bottom" | (string & {});
export interface FormButton {
  excluded?: boolean;
  children?: string;
  position?: FieldPosition;
}
export interface FormCTA {
  position?: FormButtonsPosition;
  clear?: FormButton;
  cancel?: FormButton;
  submit?: FormButton;
}
export type LabelDecorator = string;
export interface CreateFormData {
  name: string;
  dataType: FormDataTypeConfig;
  formActionType: FormActionType;
  fields: { [key: string]: FieldConfig | undefined };
  style: FormStyle;
  sectionalElements: { [key: string]: SectionalElement | undefined };
  schemaVersion: string;
  cta?: FormCTA;
  tags?: { [key: string]: string | undefined };
  labelDecorator?: string;
}
export interface CreateFormRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  formToCreate: CreateFormData;
}
export interface Form {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
  formActionType: FormActionType;
  style: FormStyle;
  dataType: FormDataTypeConfig;
  fields: { [key: string]: FieldConfig | undefined };
  sectionalElements: { [key: string]: SectionalElement | undefined };
  schemaVersion: string;
  tags?: { [key: string]: string | undefined };
  cta?: FormCTA;
  labelDecorator?: string;
}
export interface CreateFormResponse {
  entity?: Form;
}
export type ThemeName = string;
export interface ThemeValue {
  value?: string;
  children?: ThemeValues[];
}
export interface ThemeValues {
  key?: string;
  value?: ThemeValue;
}
export type ThemeValuesList = ThemeValues[];
export interface CreateThemeData {
  name: string;
  values: ThemeValues[];
  overrides?: ThemeValues[];
  tags?: { [key: string]: string | undefined };
}
export interface CreateThemeRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  themeToCreate: CreateThemeData;
}
export interface Theme {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
  createdAt: Date;
  modifiedAt?: Date;
  values: ThemeValues[];
  overrides?: ThemeValues[];
  tags?: { [key: string]: string | undefined };
}
export interface CreateThemeResponse {
  entity?: Theme;
}
export interface DeleteComponentRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface DeleteComponentResponse {}
export interface DeleteFormRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface DeleteFormResponse {}
export interface DeleteThemeRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface DeleteThemeResponse {}
export type TokenProviders = string;
export type SensitiveString = string | redacted.Redacted<string>;
export interface ExchangeCodeForTokenRequestBody {
  code: string | redacted.Redacted<string>;
  redirectUri: string;
  clientId?: string | redacted.Redacted<string>;
}
export interface ExchangeCodeForTokenRequest {
  provider: string;
  request: ExchangeCodeForTokenRequestBody;
}
export interface ExchangeCodeForTokenResponse {
  accessToken: string | redacted.Redacted<string>;
  expiresIn: number;
  refreshToken: string | redacted.Redacted<string>;
}
export interface ExportComponentsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
export type ComponentList = Component[];
export interface ExportComponentsResponse {
  entities: Component[];
  nextToken?: string;
}
export interface ExportFormsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
export type FormList = Form[];
export interface ExportFormsResponse {
  entities: Form[];
  nextToken?: string;
}
export interface ExportThemesRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
export type ThemeList = Theme[];
export interface ExportThemesResponse {
  entities: Theme[];
  nextToken?: string;
}
export type AppId = string;
export interface GetCodegenJobRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export type JSModule = "es2020" | "esnext" | (string & {});
export type JSTarget = "es2015" | "es2020" | (string & {});
export type JSScript = "jsx" | "tsx" | "js" | (string & {});
export interface GraphQLRenderConfig {
  typesFilePath: string;
  queriesFilePath: string;
  mutationsFilePath: string;
  subscriptionsFilePath: string;
  fragmentsFilePath: string;
}
export interface DataStoreRenderConfig {}
export interface NoApiRenderConfig {}
export type ApiConfiguration =
  | { graphQLConfig: GraphQLRenderConfig; dataStoreConfig?: never; noApiConfig?: never }
  | { graphQLConfig?: never; dataStoreConfig: DataStoreRenderConfig; noApiConfig?: never }
  | { graphQLConfig?: never; dataStoreConfig?: never; noApiConfig: NoApiRenderConfig };
export type ReactCodegenDependencies = { [key: string]: string | undefined };
export interface ReactStartCodegenJobData {
  module?: JSModule;
  target?: JSTarget;
  script?: JSScript;
  renderTypeDeclarations?: boolean;
  inlineSourceMap?: boolean;
  apiConfiguration?: ApiConfiguration;
  dependencies?: { [key: string]: string | undefined };
}
export type CodegenJobRenderConfig = { react: ReactStartCodegenJobData };
export type CodegenJobGenericDataSourceType = "DataStore" | (string & {});
export type CodegenGenericDataFieldDataType =
  | "ID"
  | "String"
  | "Int"
  | "Float"
  | "AWSDate"
  | "AWSTime"
  | "AWSDateTime"
  | "AWSTimestamp"
  | "AWSEmail"
  | "AWSURL"
  | "AWSIPAddress"
  | "Boolean"
  | "AWSJSON"
  | "AWSPhone"
  | "Enum"
  | "Model"
  | "NonModel"
  | (string & {});
export type GenericDataRelationshipType = "HAS_MANY" | "HAS_ONE" | "BELONGS_TO" | (string & {});
export type RelatedModelFieldsList = string[];
export type AssociatedFieldsList = string[];
export interface CodegenGenericDataRelationshipType {
  type: GenericDataRelationshipType;
  relatedModelName: string;
  relatedModelFields?: string[];
  canUnlinkAssociatedModel?: boolean;
  relatedJoinFieldName?: string;
  relatedJoinTableName?: string;
  belongsToFieldOnRelatedModel?: string;
  associatedFields?: string[];
  isHasManyIndex?: boolean;
}
export interface CodegenGenericDataField {
  dataType: CodegenGenericDataFieldDataType;
  dataTypeValue: string;
  required: boolean;
  readOnly: boolean;
  isArray: boolean;
  relationship?: CodegenGenericDataRelationshipType;
}
export type CodegenGenericDataFields = { [key: string]: CodegenGenericDataField | undefined };
export type CodegenPrimaryKeysList = string[];
export interface CodegenGenericDataModel {
  fields: { [key: string]: CodegenGenericDataField | undefined };
  isJoinTable?: boolean;
  primaryKeys: string[];
}
export type CodegenGenericDataModels = { [key: string]: CodegenGenericDataModel | undefined };
export type CodegenGenericDataEnumValuesList = string[];
export interface CodegenGenericDataEnum {
  values: string[];
}
export type CodegenGenericDataEnums = { [key: string]: CodegenGenericDataEnum | undefined };
export type CodegenGenericDataNonModelFields = {
  [key: string]: CodegenGenericDataField | undefined;
};
export interface CodegenGenericDataNonModel {
  fields: { [key: string]: CodegenGenericDataField | undefined };
}
export type CodegenGenericDataNonModels = { [key: string]: CodegenGenericDataNonModel | undefined };
export interface CodegenJobGenericDataSchema {
  dataSourceType: CodegenJobGenericDataSourceType;
  models: { [key: string]: CodegenGenericDataModel | undefined };
  enums: { [key: string]: CodegenGenericDataEnum | undefined };
  nonModels: { [key: string]: CodegenGenericDataNonModel | undefined };
}
export interface CodegenFeatureFlags {
  isRelationshipSupported?: boolean;
  isNonModelSupported?: boolean;
}
export type CodegenJobStatus = "in_progress" | "failed" | "succeeded" | (string & {});
export interface CodegenJobAsset {
  downloadUrl?: string;
}
export interface CodegenDependency {
  name?: string;
  supportedVersion?: string;
  isSemVer?: boolean;
  reason?: string;
}
export type CodegenDependencies = CodegenDependency[];
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
  tags?: { [key: string]: string | undefined };
  createdAt?: Date;
  modifiedAt?: Date;
  dependencies?: CodegenDependency[];
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
export type FeaturesMap = { [key: string]: string | undefined };
export interface GetMetadataResponse {
  features: { [key: string]: string | undefined };
}
export interface GetThemeRequest {
  appId: string;
  environmentName: string;
  id: string;
}
export interface GetThemeResponse {
  theme?: Theme;
}
export type ListCodegenJobsLimit = number;
export interface ListCodegenJobsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface CodegenJobSummary {
  appId: string;
  environmentName: string;
  id: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
export type CodegenJobSummaryList = CodegenJobSummary[];
export interface ListCodegenJobsResponse {
  entities: CodegenJobSummary[];
  nextToken?: string;
}
export type ListEntityLimit = number;
export interface ListComponentsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ComponentSummary {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
  componentType: string;
}
export type ComponentSummaryList = ComponentSummary[];
export interface ListComponentsResponse {
  entities: ComponentSummary[];
  nextToken?: string;
}
export interface ListFormsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface FormSummary {
  appId: string;
  dataType: FormDataTypeConfig;
  environmentName: string;
  formActionType: FormActionType;
  id: string;
  name: string;
}
export type FormSummaryList = FormSummary[];
export interface ListFormsResponse {
  entities: FormSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
export interface ListThemesRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ThemeSummary {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
}
export type ThemeSummaryList = ThemeSummary[];
export interface ListThemesResponse {
  entities: ThemeSummary[];
  nextToken?: string;
}
export interface PutMetadataFlagBody {
  newValue: string;
}
export interface PutMetadataFlagRequest {
  appId: string;
  environmentName: string;
  featureName: string;
  body: PutMetadataFlagBody;
}
export interface PutMetadataFlagResponse {}
export interface RefreshTokenRequestBody {
  token: string | redacted.Redacted<string>;
  clientId?: string | redacted.Redacted<string>;
}
export interface RefreshTokenRequest {
  provider: string;
  refreshTokenBody: RefreshTokenRequestBody;
}
export interface RefreshTokenResponse {
  accessToken: string | redacted.Redacted<string>;
  expiresIn: number;
}
export interface StartCodegenJobData {
  renderConfig: CodegenJobRenderConfig;
  genericDataSchema?: CodegenJobGenericDataSchema;
  autoGenerateForms?: boolean;
  features?: CodegenFeatureFlags;
  tags?: { [key: string]: string | undefined };
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
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateComponentData {
  id?: string;
  name?: string;
  sourceId?: string;
  componentType?: string;
  properties?: { [key: string]: ComponentProperty | undefined };
  children?: ComponentChild[];
  variants?: ComponentVariant[];
  overrides?: { [key: string]: { [key: string]: string | undefined } | undefined };
  bindingProperties?: { [key: string]: ComponentBindingPropertiesValue | undefined };
  collectionProperties?: { [key: string]: ComponentDataConfiguration | undefined };
  events?: { [key: string]: ComponentEvent | undefined };
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
  fields?: { [key: string]: FieldConfig | undefined };
  style?: FormStyle;
  sectionalElements?: { [key: string]: SectionalElement | undefined };
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
  values: ThemeValues[];
  overrides?: ThemeValues[];
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
export type CreateComponentError =
  | InternalServerException
  | InvalidParameterException
  | ResourceConflictException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a new component for an Amplify app.
 */
export const createComponent: API.OperationMethod<
  CreateComponentRequest,
  CreateComponentResponse,
  CreateComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<CreateComponentRequest>,
  output: __S(31) as any as S.Schema<CreateComponentResponse>,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceConflictException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateComponent",
}));

export type CreateFormError =
  | InternalServerException
  | InvalidParameterException
  | ResourceConflictException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a new form for an Amplify app.
 */
export const createForm: API.OperationMethod<
  CreateFormRequest,
  CreateFormResponse,
  CreateFormError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<CreateFormRequest>,
  output: __S(58) as any as S.Schema<CreateFormResponse>,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceConflictException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateForm",
}));

export type CreateThemeError =
  | InternalServerException
  | InvalidParameterException
  | ResourceConflictException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a theme to apply to the components in an Amplify app.
 */
export const createTheme: API.OperationMethod<
  CreateThemeRequest,
  CreateThemeResponse,
  CreateThemeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<CreateThemeRequest>,
  output: __S(65) as any as S.Schema<CreateThemeResponse>,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceConflictException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTheme",
}));

export type DeleteComponentError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a component from an Amplify app.
 */
export const deleteComponent: API.OperationMethod<
  DeleteComponentRequest,
  DeleteComponentResponse,
  DeleteComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<DeleteComponentRequest>,
  output: __S(67) as any as S.Schema<DeleteComponentResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteComponent",
}));

export type DeleteFormError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a form from an Amplify app.
 */
export const deleteForm: API.OperationMethod<
  DeleteFormRequest,
  DeleteFormResponse,
  DeleteFormError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<DeleteFormRequest>,
  output: __S(67) as any as S.Schema<DeleteFormResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteForm",
}));

export type DeleteThemeError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a theme from an Amplify app.
 */
export const deleteTheme: API.OperationMethod<
  DeleteThemeRequest,
  DeleteThemeResponse,
  DeleteThemeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<DeleteThemeRequest>,
  output: __S(67) as any as S.Schema<DeleteThemeResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTheme",
}));

export type ExchangeCodeForTokenError = InvalidParameterException | CommonErrors;
/**
 * This is for internal use.
 *
 * Amplify uses this action to exchange an access code for a token.
 */
export const exchangeCodeForToken: API.OperationMethod<
  ExchangeCodeForTokenRequest,
  ExchangeCodeForTokenResponse,
  ExchangeCodeForTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<ExchangeCodeForTokenRequest>,
  output: __S(72) as any as S.Schema<ExchangeCodeForTokenResponse>,
  errors: [InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExchangeCodeForToken",
}));

export type ExportComponentsError =
  | InternalServerException
  | InvalidParameterException
  | CommonErrors;
/**
 * Exports component configurations to code that is ready to integrate into an Amplify app.
 */
export const exportComponents: API.PaginatedOperationMethod<
  ExportComponentsRequest,
  ExportComponentsResponse,
  ExportComponentsError,
  Credentials | HttpClient.HttpClient,
  Component
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(73) as any as S.Schema<ExportComponentsRequest>,
  output: __S(75) as any as S.Schema<ExportComponentsResponse>,
  errors: [InternalServerException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportComponents",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "entities" } as const,
})) as any;

export type ExportFormsError = InternalServerException | InvalidParameterException | CommonErrors;
/**
 * Exports form configurations to code that is ready to integrate into an Amplify app.
 */
export const exportForms: API.PaginatedOperationMethod<
  ExportFormsRequest,
  ExportFormsResponse,
  ExportFormsError,
  Credentials | HttpClient.HttpClient,
  Form
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(76) as any as S.Schema<ExportFormsRequest>,
  output: __S(78) as any as S.Schema<ExportFormsResponse>,
  errors: [InternalServerException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportForms",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "entities" } as const,
})) as any;

export type ExportThemesError = InternalServerException | InvalidParameterException | CommonErrors;
/**
 * Exports theme configurations to code that is ready to integrate into an Amplify app.
 */
export const exportThemes: API.PaginatedOperationMethod<
  ExportThemesRequest,
  ExportThemesResponse,
  ExportThemesError,
  Credentials | HttpClient.HttpClient,
  Theme
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(79) as any as S.Schema<ExportThemesRequest>,
  output: __S(81) as any as S.Schema<ExportThemesResponse>,
  errors: [InternalServerException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportThemes",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "entities" } as const,
})) as any;

export type GetCodegenJobError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns an existing code generation job.
 */
export const getCodegenJob: API.OperationMethod<
  GetCodegenJobRequest,
  GetCodegenJobResponse,
  GetCodegenJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<GetCodegenJobRequest>,
  output: __S(102) as any as S.Schema<GetCodegenJobResponse>,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCodegenJob",
}));

export type GetComponentError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns an existing component for an Amplify app.
 */
export const getComponent: API.OperationMethod<
  GetComponentRequest,
  GetComponentResponse,
  GetComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103) as any as S.Schema<GetComponentRequest>,
  output: __S(104) as any as S.Schema<GetComponentResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetComponent",
}));

export type GetFormError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns an existing form for an Amplify app.
 */
export const getForm: API.OperationMethod<
  GetFormRequest,
  GetFormResponse,
  GetFormError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105) as any as S.Schema<GetFormRequest>,
  output: __S(106) as any as S.Schema<GetFormResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetForm",
}));

export type GetMetadataError = InvalidParameterException | UnauthorizedException | CommonErrors;
/**
 * Returns existing metadata for an Amplify app.
 */
export const getMetadata: API.OperationMethod<
  GetMetadataRequest,
  GetMetadataResponse,
  GetMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107) as any as S.Schema<GetMetadataRequest>,
  output: __S(108) as any as S.Schema<GetMetadataResponse>,
  errors: [InvalidParameterException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMetadata",
}));

export type GetThemeError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns an existing theme for an Amplify app.
 */
export const getTheme: API.OperationMethod<
  GetThemeRequest,
  GetThemeResponse,
  GetThemeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<GetThemeRequest>,
  output: __S(110) as any as S.Schema<GetThemeResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTheme",
}));

export type ListCodegenJobsError =
  | InternalServerException
  | InvalidParameterException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a list of code generation jobs for a specified Amplify app and backend environment.
 */
export const listCodegenJobs: API.PaginatedOperationMethod<
  ListCodegenJobsRequest,
  ListCodegenJobsResponse,
  ListCodegenJobsError,
  Credentials | HttpClient.HttpClient,
  CodegenJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(111) as any as S.Schema<ListCodegenJobsRequest>,
  output: __S(114) as any as S.Schema<ListCodegenJobsResponse>,
  errors: [InternalServerException, InvalidParameterException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodegenJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "entities",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListComponentsError =
  | InternalServerException
  | InvalidParameterException
  | CommonErrors;
/**
 * Retrieves a list of components for a specified Amplify app and backend
 * environment.
 */
export const listComponents: API.PaginatedOperationMethod<
  ListComponentsRequest,
  ListComponentsResponse,
  ListComponentsError,
  Credentials | HttpClient.HttpClient,
  ComponentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(115) as any as S.Schema<ListComponentsRequest>,
  output: __S(118) as any as S.Schema<ListComponentsResponse>,
  errors: [InternalServerException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComponents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "entities",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFormsError = InternalServerException | InvalidParameterException | CommonErrors;
/**
 * Retrieves a list of forms for a specified Amplify app and backend environment.
 */
export const listForms: API.PaginatedOperationMethod<
  ListFormsRequest,
  ListFormsResponse,
  ListFormsError,
  Credentials | HttpClient.HttpClient,
  FormSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(119) as any as S.Schema<ListFormsRequest>,
  output: __S(122) as any as S.Schema<ListFormsResponse>,
  errors: [InternalServerException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListForms",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "entities",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns a list of tags for a specified Amazon Resource Name (ARN).
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(124) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListThemesError = InternalServerException | InvalidParameterException | CommonErrors;
/**
 * Retrieves a list of themes for a specified Amplify app and backend
 * environment.
 */
export const listThemes: API.PaginatedOperationMethod<
  ListThemesRequest,
  ListThemesResponse,
  ListThemesError,
  Credentials | HttpClient.HttpClient,
  ThemeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(125) as any as S.Schema<ListThemesRequest>,
  output: __S(128) as any as S.Schema<ListThemesResponse>,
  errors: [InternalServerException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThemes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "entities",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutMetadataFlagError = InvalidParameterException | UnauthorizedException | CommonErrors;
/**
 * Stores the metadata information about a feature on a form.
 */
export const putMetadataFlag: API.OperationMethod<
  PutMetadataFlagRequest,
  PutMetadataFlagResponse,
  PutMetadataFlagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130) as any as S.Schema<PutMetadataFlagRequest>,
  output: __S(67) as any as S.Schema<PutMetadataFlagResponse>,
  errors: [InvalidParameterException, UnauthorizedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMetadataFlag",
}));

export type RefreshTokenError = InvalidParameterException | CommonErrors;
/**
 * This is for internal use.
 *
 * Amplify uses this action to refresh a previously issued access token that might have expired.
 */
export const refreshToken: API.OperationMethod<
  RefreshTokenRequest,
  RefreshTokenResponse,
  RefreshTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132) as any as S.Schema<RefreshTokenRequest>,
  output: __S(133) as any as S.Schema<RefreshTokenResponse>,
  errors: [InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RefreshToken",
}));

export type StartCodegenJobError =
  | InternalServerException
  | InvalidParameterException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts a code generation job for a specified Amplify app and backend environment.
 */
export const startCodegenJob: API.OperationMethod<
  StartCodegenJobRequest,
  StartCodegenJobResponse,
  StartCodegenJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135) as any as S.Schema<StartCodegenJobRequest>,
  output: __S(136) as any as S.Schema<StartCodegenJobResponse>,
  errors: [InternalServerException, InvalidParameterException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCodegenJob",
}));

export type TagResourceError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Tags the resource with a tag key and value.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137) as any as S.Schema<TagResourceRequest>,
  output: __S(67) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Untags a resource with a specified Amazon Resource Name (ARN).
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(138) as any as S.Schema<UntagResourceRequest>,
  output: __S(67) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateComponentError =
  | InternalServerException
  | InvalidParameterException
  | ResourceConflictException
  | CommonErrors;
/**
 * Updates an existing component.
 */
export const updateComponent: API.OperationMethod<
  UpdateComponentRequest,
  UpdateComponentResponse,
  UpdateComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140) as any as S.Schema<UpdateComponentRequest>,
  output: __S(31) as any as S.Schema<UpdateComponentResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceConflictException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateComponent",
}));

export type UpdateFormError =
  | InternalServerException
  | InvalidParameterException
  | ResourceConflictException
  | CommonErrors;
/**
 * Updates an existing form.
 */
export const updateForm: API.OperationMethod<
  UpdateFormRequest,
  UpdateFormResponse,
  UpdateFormError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142) as any as S.Schema<UpdateFormRequest>,
  output: __S(58) as any as S.Schema<UpdateFormResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceConflictException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateForm",
}));

export type UpdateThemeError =
  | InternalServerException
  | InvalidParameterException
  | ResourceConflictException
  | CommonErrors;
/**
 * Updates an existing theme.
 */
export const updateTheme: API.OperationMethod<
  UpdateThemeRequest,
  UpdateThemeResponse,
  UpdateThemeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(144) as any as S.Schema<UpdateThemeRequest>,
  output: __S(65) as any as S.Schema<UpdateThemeResponse>,
  errors: [InternalServerException, InvalidParameterException, ResourceConflictException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTheme",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ property: S.String, field: S.optional(S.String) }),
      ).annotate({
        identifier: "ComponentPropertyBindingProperties",
      });
    case 1:
      return S.suspend(() => S.Struct({ element: S.String, property: S.String })).annotate({
        identifier: "FormBindingElement",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(1).pipe(S.optional));
    case 3:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ComponentProperty> => __S(5)).annotate({
          identifier: "ComponentProperty",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          property: S.optional(S.String),
          field: S.optional(S.String),
          operator: S.optional(S.String),
          operand: S.optional(S.String),
          then: S.optional(
            S.suspend((): S.Schema<ComponentProperty> => __S(5)).annotate({
              identifier: "ComponentProperty",
            }),
          ),
          else: S.optional(
            S.suspend((): S.Schema<ComponentProperty> => __S(5)).annotate({
              identifier: "ComponentProperty",
            }),
          ),
          operandType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ComponentConditionProperty",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.String),
          bindingProperties: S.optional(__S(0)),
          collectionBindingProperties: S.optional(__S(0)),
          defaultValue: S.optional(S.String),
          model: S.optional(S.String),
          bindings: S.optional(__S(2)),
          event: S.optional(S.String),
          userAttribute: S.optional(S.String),
          concat: S.optional(
            S.suspend(() => __S(3)).annotate({
              identifier: "ComponentPropertyList",
            }),
          ),
          condition: S.optional(
            S.suspend((): S.Schema<ComponentConditionProperty> => __S(4)).annotate({
              identifier: "ComponentConditionProperty",
            }),
          ),
          configured: S.optional(S.Boolean),
          type: S.optional(S.String),
          importedValue: S.optional(S.String),
          componentName: S.optional(S.String),
          property: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentProperty" });
    case 6:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend((): S.Schema<ComponentProperty> => __S(5))
          .annotate({ identifier: "ComponentProperty" })
          .pipe(S.optional),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ componentName: S.String, property: S.String, set: __S(5) }),
      ).annotate({
        identifier: "MutationActionSetStateParameter",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(__S(5)),
          url: S.optional(__S(5)),
          anchor: S.optional(__S(5)),
          target: S.optional(__S(5)),
          global: S.optional(__S(5)),
          model: S.optional(S.String),
          id: S.optional(__S(5)),
          fields: S.optional(__S(6)),
          state: S.optional(__S(7)),
        }),
      ).annotate({ identifier: "ActionParameters" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(S.String),
          parameters: S.optional(__S(8)),
          bindingEvent: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentEvent" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(9).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          componentType: S.String,
          name: S.String,
          properties: __S(6),
          children: S.optional(
            S.suspend(() => __S(12)).annotate({ identifier: "ComponentChildList" }),
          ),
          events: S.optional(__S(10)),
          sourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentChild" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ComponentChild> => __S(11)).annotate({
          identifier: "ComponentChild",
        }),
      );
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(13).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          variantValues: S.optional(__S(13)),
          overrides: S.optional(__S(14)),
        }),
      ).annotate({ identifier: "ComponentVariant" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15));
    case 1:
      return S.suspend(() =>
        S.Struct({
          or: S.optional(S.suspend(() => __S(18)).annotate({ identifier: "PredicateList" })),
          and: S.optional(S.suspend(() => __S(18)).annotate({ identifier: "PredicateList" })),
          field: S.optional(S.String),
          operator: S.optional(S.String),
          operand: S.optional(S.String),
          operandType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Predicate" });
    case 2:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Predicate> => __S(17)).annotate({
          identifier: "Predicate",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          model: S.optional(S.String),
          field: S.optional(S.String),
          predicates: S.optional(__S(18)),
          userAttribute: S.optional(S.String),
          bucket: S.optional(S.String),
          key: S.optional(S.String),
          defaultValue: S.optional(S.String),
          slotName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ComponentBindingPropertiesValueProperties",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          bindingProperties: S.optional(__S(19)),
          defaultValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ComponentBindingPropertiesValue",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(20).pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ field: S.String, direction: S.String })).annotate({
        identifier: "SortProperty",
      });
    case 7:
      return S.Array(__S(22));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          model: S.String,
          sort: S.optional(__S(23)),
          predicate: S.optional(__S(17)),
          identifiers: S.optional(__S(24)),
        }),
      ).annotate({
        identifier: "ComponentDataConfiguration",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(25).pipe(S.optional));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          sourceId: S.optional(S.String),
          componentType: S.String,
          properties: __S(6),
          children: S.optional(__S(12)),
          variants: __S(16),
          overrides: __S(14),
          bindingProperties: __S(21),
          collectionProperties: S.optional(__S(26)),
          tags: S.optional(__S(27)),
          events: S.optional(__S(10)),
          schemaVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateComponentData" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          componentToCreate: __S(28).pipe(T.HttpPayload()).annotate({
            identifier: "CreateComponentData",
          }),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/app/{appId}/environment/{environmentName}/components",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateComponentRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          environmentName: S.String,
          sourceId: S.optional(S.String),
          id: S.String,
          name: S.String,
          componentType: S.String,
          properties: __S(6),
          children: S.optional(__S(12)),
          variants: __S(16),
          overrides: __S(14),
          bindingProperties: __S(21),
          collectionProperties: S.optional(__S(26)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          modifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(27)),
          events: S.optional(__S(10)),
          schemaVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "Component" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          entity: S.optional(__S(30)).pipe(T.HttpPayload()).annotate({ identifier: "Component" }),
        }),
      ).annotate({ identifier: "CreateComponentResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ dataSourceType: S.String, dataTypeName: S.String }),
      ).annotate({ identifier: "FormDataTypeConfig" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ fixed: S.String }),
        /*@__PURE__*/ S.Struct({ rightOf: S.String }),
        /*@__PURE__*/ S.Struct({ below: S.String }),
      ]);
    case 2:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<FormInputValueProperty> => __S(35)).annotate({
          identifier: "FormInputValueProperty",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.String),
          bindingProperties: S.optional(__S(0)),
          concat: S.optional(
            S.suspend(() => __S(34)).annotate({
              identifier: "FormInputValuePropertyList",
            }),
          ),
        }),
      ).annotate({ identifier: "FormInputValueProperty" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          displayValue: S.optional(__S(35)),
          value: __S(35),
        }),
      ).annotate({ identifier: "ValueMapping" });
    case 5:
      return S.Array(__S(36));
    case 6:
      return S.suspend(() => S.Struct({ model: S.optional(S.String) })).annotate({
        identifier: "FormInputBindingPropertiesValueProperties",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          bindingProperties: S.optional(__S(38)),
        }),
      ).annotate({
        identifier: "FormInputBindingPropertiesValue",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(39).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          values: __S(37),
          bindingProperties: S.optional(__S(40)),
        }),
      ).annotate({ identifier: "ValueMappings" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accessLevel: S.String,
          acceptedFileTypes: __S(24),
          showThumbnails: S.optional(S.Boolean),
          isResumable: S.optional(S.Boolean),
          maxFileCount: S.optional(S.Number),
          maxSize: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FileUploaderFieldConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          required: S.optional(S.Boolean),
          readOnly: S.optional(S.Boolean),
          placeholder: S.optional(S.String),
          defaultValue: S.optional(S.String),
          descriptiveText: S.optional(S.String),
          defaultChecked: S.optional(S.Boolean),
          defaultCountryCode: S.optional(S.String),
          valueMappings: S.optional(__S(41)),
          name: S.optional(S.String),
          minValue: S.optional(S.Number),
          maxValue: S.optional(S.Number),
          step: S.optional(S.Number),
          value: S.optional(S.String),
          isArray: S.optional(S.Boolean),
          fileUploaderConfig: S.optional(__S(42)),
        }),
      ).annotate({ identifier: "FieldInputConfig" });
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          strValues: S.optional(__S(24)),
          numValues: S.optional(__S(44)),
          validationMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FieldValidationConfiguration",
      });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          label: S.optional(S.String),
          position: S.optional(__S(33)),
          excluded: S.optional(S.Boolean),
          inputType: S.optional(__S(43)),
          validations: S.optional(__S(46)),
        }),
      ).annotate({ identifier: "FieldConfig" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(47).pipe(S.optional));
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tokenReference: S.String }),
        /*@__PURE__*/ S.Struct({ value: S.String }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          horizontalGap: S.optional(__S(49)),
          verticalGap: S.optional(__S(49)),
          outerPadding: S.optional(__S(49)),
        }),
      ).annotate({ identifier: "FormStyle" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          position: S.optional(__S(33)),
          text: S.optional(S.String),
          level: S.optional(S.Number),
          orientation: S.optional(S.String),
          excluded: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SectionalElement" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(51).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          excluded: S.optional(S.Boolean),
          children: S.optional(S.String),
          position: S.optional(__S(33)),
        }),
      ).annotate({ identifier: "FormButton" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          position: S.optional(S.String),
          clear: S.optional(__S(53)),
          cancel: S.optional(__S(53)),
          submit: S.optional(__S(53)),
        }),
      ).annotate({ identifier: "FormCTA" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          dataType: __S(32),
          formActionType: S.String,
          fields: __S(48),
          style: __S(50),
          sectionalElements: __S(52),
          schemaVersion: S.String,
          cta: S.optional(__S(54)),
          tags: S.optional(__S(27)),
          labelDecorator: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateFormData" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          formToCreate: __S(55).pipe(T.HttpPayload()).annotate({
            identifier: "CreateFormData",
          }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/app/{appId}/environment/{environmentName}/forms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFormRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          environmentName: S.String,
          id: S.String,
          name: S.String,
          formActionType: S.String,
          style: __S(50),
          dataType: __S(32),
          fields: __S(48),
          sectionalElements: __S(52),
          schemaVersion: S.String,
          tags: S.optional(__S(27)),
          cta: S.optional(__S(54)),
          labelDecorator: S.optional(S.String),
        }),
      ).annotate({ identifier: "Form" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          entity: S.optional(__S(57)).pipe(T.HttpPayload()).annotate({ identifier: "Form" }),
        }),
      ).annotate({ identifier: "CreateFormResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.String),
          children: S.optional(
            S.suspend(() => __S(61)).annotate({ identifier: "ThemeValuesList" }),
          ),
        }),
      ).annotate({ identifier: "ThemeValue" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          value: S.optional(
            S.suspend((): S.Schema<ThemeValue> => __S(59)).annotate({
              identifier: "ThemeValue",
            }),
          ),
        }),
      ).annotate({ identifier: "ThemeValues" });
    case 5:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ThemeValues> => __S(60)).annotate({
          identifier: "ThemeValues",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: __S(61),
          overrides: S.optional(__S(61)),
          tags: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "CreateThemeData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          themeToCreate: __S(62).pipe(T.HttpPayload()).annotate({
            identifier: "CreateThemeData",
          }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/app/{appId}/environment/{environmentName}/themes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateThemeRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          environmentName: S.String,
          id: S.String,
          name: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          modifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          values: __S(61),
          overrides: S.optional(__S(61)),
          tags: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "Theme" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          entity: S.optional(__S(64)).pipe(T.HttpPayload()).annotate({ identifier: "Theme" }),
        }),
      ).annotate({ identifier: "CreateThemeResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/app/{appId}/environment/{environmentName}/components/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteComponentRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteComponentResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/app/{appId}/environment/{environmentName}/forms/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFormRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/app/{appId}/environment/{environmentName}/themes/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteThemeRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          code: SensitiveString,
          redirectUri: S.String,
          clientId: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ExchangeCodeForTokenRequestBody",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          provider: S.String.pipe(T.HttpLabel("provider")),
          request: __S(70).pipe(T.HttpPayload()).annotate({
            identifier: "ExchangeCodeForTokenRequestBody",
          }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tokens/{provider}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ExchangeCodeForTokenRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accessToken: SensitiveString,
          expiresIn: S.Number,
          refreshToken: SensitiveString,
        }),
      ).annotate({
        identifier: "ExchangeCodeForTokenResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/export/app/{appId}/environment/{environmentName}/components",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExportComponentsRequest" });
    case 2:
      return S.Array(__S(30));
    case 3:
      return S.suspend(() =>
        S.Struct({ entities: __S(74), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ExportComponentsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/export/app/{appId}/environment/{environmentName}/forms",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExportFormsRequest" });
    case 5:
      return S.Array(__S(57));
    case 6:
      return S.suspend(() =>
        S.Struct({ entities: __S(77), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ExportFormsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/export/app/{appId}/environment/{environmentName}/themes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExportThemesRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(64));
    case 1:
      return S.suspend(() =>
        S.Struct({ entities: __S(80), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ExportThemesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/app/{appId}/environment/{environmentName}/codegen-jobs/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCodegenJobRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          typesFilePath: S.String,
          queriesFilePath: S.String,
          mutationsFilePath: S.String,
          subscriptionsFilePath: S.String,
          fragmentsFilePath: S.String,
        }),
      ).annotate({ identifier: "GraphQLRenderConfig" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ graphQLConfig: __S(83) }),
        /*@__PURE__*/ S.Struct({ dataStoreConfig: __S(67) }),
        /*@__PURE__*/ S.Struct({ noApiConfig: __S(67) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          module: S.optional(S.String),
          target: S.optional(S.String),
          script: S.optional(S.String),
          renderTypeDeclarations: S.optional(S.Boolean),
          inlineSourceMap: S.optional(S.Boolean),
          apiConfiguration: S.optional(__S(84)),
          dependencies: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "ReactStartCodegenJobData" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ react: __S(85) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          relatedModelName: S.String,
          relatedModelFields: S.optional(__S(24)),
          canUnlinkAssociatedModel: S.optional(S.Boolean),
          relatedJoinFieldName: S.optional(S.String),
          relatedJoinTableName: S.optional(S.String),
          belongsToFieldOnRelatedModel: S.optional(S.String),
          associatedFields: S.optional(__S(24)),
          isHasManyIndex: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "CodegenGenericDataRelationshipType",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataType: S.String,
          dataTypeValue: S.String,
          required: S.Boolean,
          readOnly: S.Boolean,
          isArray: S.Boolean,
          relationship: S.optional(__S(87)),
        }),
      ).annotate({ identifier: "CodegenGenericDataField" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(88).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          fields: __S(89),
          isJoinTable: S.optional(S.Boolean),
          primaryKeys: __S(24),
        }),
      ).annotate({ identifier: "CodegenGenericDataModel" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(90).pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ values: __S(24) })).annotate({
        identifier: "CodegenGenericDataEnum",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(92).pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ fields: __S(89) })).annotate({
        identifier: "CodegenGenericDataNonModel",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(94).pipe(S.optional));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataSourceType: S.String,
          models: __S(91),
          enums: __S(93),
          nonModels: __S(95),
        }),
      ).annotate({
        identifier: "CodegenJobGenericDataSchema",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          isRelationshipSupported: S.optional(S.Boolean),
          isNonModelSupported: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CodegenFeatureFlags" });
    case 2:
      return S.suspend(() => S.Struct({ downloadUrl: S.optional(S.String) })).annotate({
        identifier: "CodegenJobAsset",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          supportedVersion: S.optional(S.String),
          isSemVer: S.optional(S.Boolean),
          reason: S.optional(S.String),
        }),
      ).annotate({ identifier: "CodegenDependency" });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          appId: S.String,
          environmentName: S.String,
          renderConfig: S.optional(__S(86)),
          genericDataSchema: S.optional(__S(96)),
          autoGenerateForms: S.optional(S.Boolean),
          features: S.optional(__S(97)),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          asset: S.optional(__S(98)),
          tags: S.optional(__S(27)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          modifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dependencies: S.optional(__S(100)),
        }),
      ).annotate({ identifier: "CodegenJob" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          job: S.optional(__S(101)).pipe(T.HttpPayload()).annotate({ identifier: "CodegenJob" }),
        }),
      ).annotate({ identifier: "GetCodegenJobResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/app/{appId}/environment/{environmentName}/components/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetComponentRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          component: S.optional(__S(30))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "Component" }),
        }),
      ).annotate({ identifier: "GetComponentResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app/{appId}/environment/{environmentName}/forms/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFormRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          form: S.optional(__S(57)).pipe(T.HttpPayload()).annotate({ identifier: "Form" }),
        }),
      ).annotate({ identifier: "GetFormResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app/{appId}/environment/{environmentName}/metadata" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMetadataRequest" });
    case 4:
      return S.suspend(() => S.Struct({ features: __S(13) })).annotate({
        identifier: "GetMetadataResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/app/{appId}/environment/{environmentName}/themes/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetThemeRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          theme: S.optional(__S(64)).pipe(T.HttpPayload()).annotate({ identifier: "Theme" }),
        }),
      ).annotate({ identifier: "GetThemeResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/app/{appId}/environment/{environmentName}/codegen-jobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListCodegenJobsRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          environmentName: S.String,
          id: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          modifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CodegenJobSummary" });
    case 1:
      return S.Array(__S(112));
    case 2:
      return S.suspend(() =>
        S.Struct({ entities: __S(113), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCodegenJobsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app/{appId}/environment/{environmentName}/components" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListComponentsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          environmentName: S.String,
          id: S.String,
          name: S.String,
          componentType: S.String,
        }),
      ).annotate({ identifier: "ComponentSummary" });
    case 5:
      return S.Array(__S(116));
    case 6:
      return S.suspend(() =>
        S.Struct({ entities: __S(117), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListComponentsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app/{appId}/environment/{environmentName}/forms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFormsRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          dataType: __S(32),
          environmentName: S.String,
          formActionType: S.String,
          id: S.String,
          name: S.String,
        }),
      ).annotate({ identifier: "FormSummary" });
    case 1:
      return S.Array(__S(120));
    case 2:
      return S.suspend(() =>
        S.Struct({ entities: __S(121), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFormsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ tags: __S(27) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app/{appId}/environment/{environmentName}/themes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListThemesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ appId: S.String, environmentName: S.String, id: S.String, name: S.String }),
      ).annotate({ identifier: "ThemeSummary" });
    case 7:
      return S.Array(__S(126));
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ entities: __S(127), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListThemesResponse" });
    case 1:
      return S.suspend(() => S.Struct({ newValue: S.String })).annotate({
        identifier: "PutMetadataFlagBody",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          featureName: S.String.pipe(T.HttpLabel("featureName")),
          body: __S(129).pipe(T.HttpPayload()).annotate({
            identifier: "PutMetadataFlagBody",
          }),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/app/{appId}/environment/{environmentName}/metadata/features/{featureName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutMetadataFlagRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ token: SensitiveString, clientId: S.optional(SensitiveString) }),
      ).annotate({ identifier: "RefreshTokenRequestBody" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          provider: S.String.pipe(T.HttpLabel("provider")),
          refreshTokenBody: __S(131).pipe(T.HttpPayload()).annotate({
            identifier: "RefreshTokenRequestBody",
          }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tokens/{provider}/refresh" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RefreshTokenRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ accessToken: SensitiveString, expiresIn: S.Number }),
      ).annotate({ identifier: "RefreshTokenResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          renderConfig: __S(86),
          genericDataSchema: S.optional(__S(96)),
          autoGenerateForms: S.optional(S.Boolean),
          features: S.optional(__S(97)),
          tags: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "StartCodegenJobData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          codegenJobToCreate: __S(134).pipe(T.HttpPayload()).annotate({
            identifier: "StartCodegenJobData",
          }),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/app/{appId}/environment/{environmentName}/codegen-jobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartCodegenJobRequest" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          entity: S.optional(__S(101)).pipe(T.HttpPayload()).annotate({ identifier: "CodegenJob" }),
        }),
      ).annotate({ identifier: "StartCodegenJobResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(27) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(24).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          sourceId: S.optional(S.String),
          componentType: S.optional(S.String),
          properties: S.optional(__S(6)),
          children: S.optional(__S(12)),
          variants: S.optional(__S(16)),
          overrides: S.optional(__S(14)),
          bindingProperties: S.optional(__S(21)),
          collectionProperties: S.optional(__S(26)),
          events: S.optional(__S(10)),
          schemaVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateComponentData" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          updatedComponent: __S(139).pipe(T.HttpPayload()).annotate({
            identifier: "UpdateComponentData",
          }),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/app/{appId}/environment/{environmentName}/components/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateComponentRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          dataType: S.optional(__S(32)),
          formActionType: S.optional(S.String),
          fields: S.optional(__S(48)),
          style: S.optional(__S(50)),
          sectionalElements: S.optional(__S(52)),
          schemaVersion: S.optional(S.String),
          cta: S.optional(__S(54)),
          labelDecorator: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateFormData" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          updatedForm: __S(141).pipe(T.HttpPayload()).annotate({
            identifier: "UpdateFormData",
          }),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/app/{appId}/environment/{environmentName}/forms/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFormRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          values: __S(61),
          overrides: S.optional(__S(61)),
        }),
      ).annotate({ identifier: "UpdateThemeData" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          id: S.String.pipe(T.HttpLabel("id")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          updatedTheme: __S(143).pipe(T.HttpPayload()).annotate({
            identifier: "UpdateThemeData",
          }),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/app/{appId}/environment/{environmentName}/themes/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateThemeRequest" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
  }
}
