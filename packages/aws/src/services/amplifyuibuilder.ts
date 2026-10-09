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
const ComponentPropertyBindingProperties = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<ComponentPropertyBindingProperties>;
export interface FormBindingElement {
  element: string;
  property: string;
}
const FormBindingElement = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<FormBindingElement>;
export type FormBindings = { [key: string]: FormBindingElement | undefined };
const FormBindings = /*@__PURE__*/ __L.at(__c0, 2);
export type ComponentPropertyList = ComponentProperty[];
const ComponentPropertyList = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<ComponentPropertyList>;
export interface ComponentConditionProperty {
  property?: string;
  field?: string;
  operator?: string;
  operand?: string;
  then?: ComponentProperty;
  else?: ComponentProperty;
  operandType?: string;
}
const ComponentConditionProperty = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<ComponentConditionProperty>;
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
const ComponentProperty = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<ComponentProperty>;
export type ComponentProperties = { [key: string]: ComponentProperty | undefined };
const ComponentProperties = /*@__PURE__*/ __L.at(__c0, 6);
export interface MutationActionSetStateParameter {
  componentName: string;
  property: string;
  set: ComponentProperty;
}
const MutationActionSetStateParameter = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<MutationActionSetStateParameter>;
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
const ActionParameters = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<ActionParameters>;
export interface ComponentEvent {
  action?: string;
  parameters?: ActionParameters;
  bindingEvent?: string;
}
const ComponentEvent = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<ComponentEvent>;
export type ComponentEvents = { [key: string]: ComponentEvent | undefined };
const ComponentEvents = /*@__PURE__*/ __L.at(__c1, 2);
export interface ComponentChild {
  componentType: string;
  name: string;
  properties: { [key: string]: ComponentProperty | undefined };
  children?: ComponentChild[];
  events?: { [key: string]: ComponentEvent | undefined };
  sourceId?: string;
}
const ComponentChild = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<ComponentChild>;
export type ComponentChildList = ComponentChild[];
const ComponentChildList = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<ComponentChildList>;
export type ComponentVariantValues = { [key: string]: string | undefined };
const ComponentVariantValues = /*@__PURE__*/ __L.at(__c1, 5);
export type ComponentOverridesValue = { [key: string]: string | undefined };
const ComponentOverridesValue = ComponentVariantValues as any as S.Schema<ComponentOverridesValue>;
export type ComponentOverrides = {
  [key: string]: { [key: string]: string | undefined } | undefined;
};
const ComponentOverrides = /*@__PURE__*/ __L.at(__c1, 6);
export interface ComponentVariant {
  variantValues?: { [key: string]: string | undefined };
  overrides?: { [key: string]: { [key: string]: string | undefined } | undefined };
}
const ComponentVariant = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<ComponentVariant>;
export type ComponentVariants = ComponentVariant[];
const ComponentVariants = /*@__PURE__*/ __L.at(__c2, 0);
export type OperandType = string;
export interface Predicate {
  or?: Predicate[];
  and?: Predicate[];
  field?: string;
  operator?: string;
  operand?: string;
  operandType?: string;
}
const Predicate = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<Predicate>;
export type PredicateList = Predicate[];
const PredicateList = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<PredicateList>;
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
const ComponentBindingPropertiesValueProperties = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<ComponentBindingPropertiesValueProperties>;
export interface ComponentBindingPropertiesValue {
  type?: string;
  bindingProperties?: ComponentBindingPropertiesValueProperties;
  defaultValue?: string;
}
const ComponentBindingPropertiesValue = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<ComponentBindingPropertiesValue>;
export type ComponentBindingProperties = {
  [key: string]: ComponentBindingPropertiesValue | undefined;
};
const ComponentBindingProperties = /*@__PURE__*/ __L.at(__c2, 5);
export type SortDirection = "ASC" | "DESC" | (string & {});
const SortDirection = S.String;

export interface SortProperty {
  field: string;
  direction: SortDirection;
}
const SortProperty = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<SortProperty>;
export type SortPropertyList = SortProperty[];
const SortPropertyList = /*@__PURE__*/ __L.at(__c2, 7);
export type IdentifierList = string[];
const IdentifierList = /*@__PURE__*/ __L.at(__c3, 0);
export interface ComponentDataConfiguration {
  model: string;
  sort?: SortProperty[];
  predicate?: Predicate;
  identifiers?: string[];
}
const ComponentDataConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ComponentDataConfiguration>;
export type ComponentCollectionProperties = {
  [key: string]: ComponentDataConfiguration | undefined;
};
const ComponentCollectionProperties = /*@__PURE__*/ __L.at(__c3, 2);
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c3, 3);
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
const CreateComponentData = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<CreateComponentData>;
export interface CreateComponentRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  componentToCreate: CreateComponentData;
}
const CreateComponentRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateComponentRequest>;
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
const Component = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<Component>;
export interface CreateComponentResponse {
  entity?: Component;
}
const CreateComponentResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateComponentResponse>;
export type FormName = string;
export type FormDataSourceType = string;
export interface FormDataTypeConfig {
  dataSourceType: string;
  dataTypeName: string;
}
const FormDataTypeConfig = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<FormDataTypeConfig>;
export type FormActionType = "create" | "update" | (string & {});
const FormActionType = S.String;

export type FixedPosition = "first" | (string & {});
const FixedPosition = S.String;

export type FieldPosition =
  | { fixed: FixedPosition; rightOf?: never; below?: never }
  | { fixed?: never; rightOf: string; below?: never }
  | { fixed?: never; rightOf?: never; below: string };
const FieldPosition = /*@__PURE__*/ __L.at(__c4, 1);
export interface FormInputValuePropertyBindingProperties {
  property: string;
  field?: string;
}
const FormInputValuePropertyBindingProperties =
  ComponentPropertyBindingProperties as any as S.Schema<FormInputValuePropertyBindingProperties>;
export type FormInputValuePropertyList = FormInputValueProperty[];
const FormInputValuePropertyList = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<FormInputValuePropertyList>;
export interface FormInputValueProperty {
  value?: string;
  bindingProperties?: FormInputValuePropertyBindingProperties;
  concat?: FormInputValueProperty[];
}
const FormInputValueProperty = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<FormInputValueProperty>;
export interface ValueMapping {
  displayValue?: FormInputValueProperty;
  value: FormInputValueProperty;
}
const ValueMapping = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<ValueMapping>;
export type ValueMappingList = ValueMapping[];
const ValueMappingList = /*@__PURE__*/ __L.at(__c4, 5);
export interface FormInputBindingPropertiesValueProperties {
  model?: string;
}
const FormInputBindingPropertiesValueProperties = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<FormInputBindingPropertiesValueProperties>;
export interface FormInputBindingPropertiesValue {
  type?: string;
  bindingProperties?: FormInputBindingPropertiesValueProperties;
}
const FormInputBindingPropertiesValue = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<FormInputBindingPropertiesValue>;
export type FormInputBindingProperties = {
  [key: string]: FormInputBindingPropertiesValue | undefined;
};
const FormInputBindingProperties = /*@__PURE__*/ __L.at(__c5, 0);
export interface ValueMappings {
  values: ValueMapping[];
  bindingProperties?: { [key: string]: FormInputBindingPropertiesValue | undefined };
}
const ValueMappings = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<ValueMappings>;
export type StorageAccessLevel = "public" | "protected" | "private" | (string & {});
const StorageAccessLevel = S.String;

export type StrValues = string[];
const StrValues = IdentifierList as any as S.Schema<StrValues>;
export interface FileUploaderFieldConfig {
  accessLevel: StorageAccessLevel;
  acceptedFileTypes: string[];
  showThumbnails?: boolean;
  isResumable?: boolean;
  maxFileCount?: number;
  maxSize?: number;
}
const FileUploaderFieldConfig = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<FileUploaderFieldConfig>;
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
const FieldInputConfig = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<FieldInputConfig>;
export type NumValues = number[];
const NumValues = /*@__PURE__*/ __L.at(__c5, 4);
export interface FieldValidationConfiguration {
  type: string;
  strValues?: string[];
  numValues?: number[];
  validationMessage?: string;
}
const FieldValidationConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<FieldValidationConfiguration>;
export type ValidationsList = FieldValidationConfiguration[];
const ValidationsList = /*@__PURE__*/ __L.at(__c5, 6);
export interface FieldConfig {
  label?: string;
  position?: FieldPosition;
  excluded?: boolean;
  inputType?: FieldInputConfig;
  validations?: FieldValidationConfiguration[];
}
const FieldConfig = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<FieldConfig>;
export type FieldsMap = { [key: string]: FieldConfig | undefined };
const FieldsMap = /*@__PURE__*/ __L.at(__c6, 0);
export type FormStyleConfig =
  | { tokenReference: string; value?: never }
  | { tokenReference?: never; value: string };
const FormStyleConfig = /*@__PURE__*/ __L.at(__c6, 1);
export interface FormStyle {
  horizontalGap?: FormStyleConfig;
  verticalGap?: FormStyleConfig;
  outerPadding?: FormStyleConfig;
}
const FormStyle = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<FormStyle>;
export interface SectionalElement {
  type: string;
  position?: FieldPosition;
  text?: string;
  level?: number;
  orientation?: string;
  excluded?: boolean;
}
const SectionalElement = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<SectionalElement>;
export type SectionalElementMap = { [key: string]: SectionalElement | undefined };
const SectionalElementMap = /*@__PURE__*/ __L.at(__c6, 4);
export type FormButtonsPosition = "top" | "bottom" | "top_and_bottom" | (string & {});
const FormButtonsPosition = S.String;

export interface FormButton {
  excluded?: boolean;
  children?: string;
  position?: FieldPosition;
}
const FormButton = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<FormButton>;
export interface FormCTA {
  position?: FormButtonsPosition;
  clear?: FormButton;
  cancel?: FormButton;
  submit?: FormButton;
}
const FormCTA = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<FormCTA>;
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
const CreateFormData = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<CreateFormData>;
export interface CreateFormRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  formToCreate: CreateFormData;
}
const CreateFormRequest = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<CreateFormRequest>;
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
const Form = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<Form>;
export interface CreateFormResponse {
  entity?: Form;
}
const CreateFormResponse = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<CreateFormResponse>;
export type ThemeName = string;
export interface ThemeValue {
  value?: string;
  children?: ThemeValues[];
}
const ThemeValue = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<ThemeValue>;
export interface ThemeValues {
  key?: string;
  value?: ThemeValue;
}
const ThemeValues = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<ThemeValues>;
export type ThemeValuesList = ThemeValues[];
const ThemeValuesList = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<ThemeValuesList>;
export interface CreateThemeData {
  name: string;
  values: ThemeValues[];
  overrides?: ThemeValues[];
  tags?: { [key: string]: string | undefined };
}
const CreateThemeData = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<CreateThemeData>;
export interface CreateThemeRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  themeToCreate: CreateThemeData;
}
const CreateThemeRequest = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<CreateThemeRequest>;
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
const Theme = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<Theme>;
export interface CreateThemeResponse {
  entity?: Theme;
}
const CreateThemeResponse = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<CreateThemeResponse>;
export interface DeleteComponentRequest {
  appId: string;
  environmentName: string;
  id: string;
}
const DeleteComponentRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DeleteComponentRequest>;
export interface DeleteComponentResponse {}
const DeleteComponentResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteComponentResponse>;
export interface DeleteFormRequest {
  appId: string;
  environmentName: string;
  id: string;
}
const DeleteFormRequest = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<DeleteFormRequest>;
export interface DeleteFormResponse {}
const DeleteFormResponse = DeleteComponentResponse as any as S.Schema<DeleteFormResponse>;
export interface DeleteThemeRequest {
  appId: string;
  environmentName: string;
  id: string;
}
const DeleteThemeRequest = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<DeleteThemeRequest>;
export interface DeleteThemeResponse {}
const DeleteThemeResponse = DeleteComponentResponse as any as S.Schema<DeleteThemeResponse>;
export type TokenProviders = string;
export type SensitiveString = string | redacted.Redacted<string>;
export interface ExchangeCodeForTokenRequestBody {
  code: string | redacted.Redacted<string>;
  redirectUri: string;
  clientId?: string | redacted.Redacted<string>;
}
const ExchangeCodeForTokenRequestBody = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ExchangeCodeForTokenRequestBody>;
export interface ExchangeCodeForTokenRequest {
  provider: string;
  request: ExchangeCodeForTokenRequestBody;
}
const ExchangeCodeForTokenRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<ExchangeCodeForTokenRequest>;
export interface ExchangeCodeForTokenResponse {
  accessToken: string | redacted.Redacted<string>;
  expiresIn: number;
  refreshToken: string | redacted.Redacted<string>;
}
const ExchangeCodeForTokenResponse = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ExchangeCodeForTokenResponse>;
export interface ExportComponentsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
const ExportComponentsRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<ExportComponentsRequest>;
export type ComponentList = Component[];
const ComponentList = /*@__PURE__*/ __L.at(__c9, 2);
export interface ExportComponentsResponse {
  entities: Component[];
  nextToken?: string;
}
const ExportComponentsResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<ExportComponentsResponse>;
export interface ExportFormsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
const ExportFormsRequest = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<ExportFormsRequest>;
export type FormList = Form[];
const FormList = /*@__PURE__*/ __L.at(__c9, 5);
export interface ExportFormsResponse {
  entities: Form[];
  nextToken?: string;
}
const ExportFormsResponse = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<ExportFormsResponse>;
export interface ExportThemesRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
}
const ExportThemesRequest = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<ExportThemesRequest>;
export type ThemeList = Theme[];
const ThemeList = /*@__PURE__*/ __L.at(__c10, 0);
export interface ExportThemesResponse {
  entities: Theme[];
  nextToken?: string;
}
const ExportThemesResponse = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ExportThemesResponse>;
export type AppId = string;
export interface GetCodegenJobRequest {
  appId: string;
  environmentName: string;
  id: string;
}
const GetCodegenJobRequest = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetCodegenJobRequest>;
export type JSModule = "es2020" | "esnext" | (string & {});
const JSModule = S.String;

export type JSTarget = "es2015" | "es2020" | (string & {});
const JSTarget = S.String;

export type JSScript = "jsx" | "tsx" | "js" | (string & {});
const JSScript = S.String;

export interface GraphQLRenderConfig {
  typesFilePath: string;
  queriesFilePath: string;
  mutationsFilePath: string;
  subscriptionsFilePath: string;
  fragmentsFilePath: string;
}
const GraphQLRenderConfig = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<GraphQLRenderConfig>;
export interface DataStoreRenderConfig {}
const DataStoreRenderConfig = DeleteComponentResponse as any as S.Schema<DataStoreRenderConfig>;
export interface NoApiRenderConfig {}
const NoApiRenderConfig = DeleteComponentResponse as any as S.Schema<NoApiRenderConfig>;
export type ApiConfiguration =
  | { graphQLConfig: GraphQLRenderConfig; dataStoreConfig?: never; noApiConfig?: never }
  | { graphQLConfig?: never; dataStoreConfig: DataStoreRenderConfig; noApiConfig?: never }
  | { graphQLConfig?: never; dataStoreConfig?: never; noApiConfig: NoApiRenderConfig };
const ApiConfiguration = /*@__PURE__*/ __L.at(__c10, 4);
export type ReactCodegenDependencies = { [key: string]: string | undefined };
const ReactCodegenDependencies =
  ComponentVariantValues as any as S.Schema<ReactCodegenDependencies>;
export interface ReactStartCodegenJobData {
  module?: JSModule;
  target?: JSTarget;
  script?: JSScript;
  renderTypeDeclarations?: boolean;
  inlineSourceMap?: boolean;
  apiConfiguration?: ApiConfiguration;
  dependencies?: { [key: string]: string | undefined };
}
const ReactStartCodegenJobData = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<ReactStartCodegenJobData>;
export type CodegenJobRenderConfig = { react: ReactStartCodegenJobData };
const CodegenJobRenderConfig = /*@__PURE__*/ __L.at(__c10, 6);
export type CodegenJobGenericDataSourceType = "DataStore" | (string & {});
const CodegenJobGenericDataSourceType = S.String;

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
const CodegenGenericDataFieldDataType = S.String;

export type GenericDataRelationshipType = "HAS_MANY" | "HAS_ONE" | "BELONGS_TO" | (string & {});
const GenericDataRelationshipType = S.String;

export type RelatedModelFieldsList = string[];
const RelatedModelFieldsList = IdentifierList as any as S.Schema<RelatedModelFieldsList>;
export type AssociatedFieldsList = string[];
const AssociatedFieldsList = IdentifierList as any as S.Schema<AssociatedFieldsList>;
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
const CodegenGenericDataRelationshipType = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<CodegenGenericDataRelationshipType>;
export interface CodegenGenericDataField {
  dataType: CodegenGenericDataFieldDataType;
  dataTypeValue: string;
  required: boolean;
  readOnly: boolean;
  isArray: boolean;
  relationship?: CodegenGenericDataRelationshipType;
}
const CodegenGenericDataField = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<CodegenGenericDataField>;
export type CodegenGenericDataFields = { [key: string]: CodegenGenericDataField | undefined };
const CodegenGenericDataFields = /*@__PURE__*/ __L.at(__c11, 1);
export type CodegenPrimaryKeysList = string[];
const CodegenPrimaryKeysList = IdentifierList as any as S.Schema<CodegenPrimaryKeysList>;
export interface CodegenGenericDataModel {
  fields: { [key: string]: CodegenGenericDataField | undefined };
  isJoinTable?: boolean;
  primaryKeys: string[];
}
const CodegenGenericDataModel = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<CodegenGenericDataModel>;
export type CodegenGenericDataModels = { [key: string]: CodegenGenericDataModel | undefined };
const CodegenGenericDataModels = /*@__PURE__*/ __L.at(__c11, 3);
export type CodegenGenericDataEnumValuesList = string[];
const CodegenGenericDataEnumValuesList =
  IdentifierList as any as S.Schema<CodegenGenericDataEnumValuesList>;
export interface CodegenGenericDataEnum {
  values: string[];
}
const CodegenGenericDataEnum = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<CodegenGenericDataEnum>;
export type CodegenGenericDataEnums = { [key: string]: CodegenGenericDataEnum | undefined };
const CodegenGenericDataEnums = /*@__PURE__*/ __L.at(__c11, 5);
export type CodegenGenericDataNonModelFields = {
  [key: string]: CodegenGenericDataField | undefined;
};
const CodegenGenericDataNonModelFields =
  CodegenGenericDataFields as any as S.Schema<CodegenGenericDataNonModelFields>;
export interface CodegenGenericDataNonModel {
  fields: { [key: string]: CodegenGenericDataField | undefined };
}
const CodegenGenericDataNonModel = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<CodegenGenericDataNonModel>;
export type CodegenGenericDataNonModels = { [key: string]: CodegenGenericDataNonModel | undefined };
const CodegenGenericDataNonModels = /*@__PURE__*/ __L.at(__c11, 7);
export interface CodegenJobGenericDataSchema {
  dataSourceType: CodegenJobGenericDataSourceType;
  models: { [key: string]: CodegenGenericDataModel | undefined };
  enums: { [key: string]: CodegenGenericDataEnum | undefined };
  nonModels: { [key: string]: CodegenGenericDataNonModel | undefined };
}
const CodegenJobGenericDataSchema = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<CodegenJobGenericDataSchema>;
export interface CodegenFeatureFlags {
  isRelationshipSupported?: boolean;
  isNonModelSupported?: boolean;
}
const CodegenFeatureFlags = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<CodegenFeatureFlags>;
export type CodegenJobStatus = "in_progress" | "failed" | "succeeded" | (string & {});
const CodegenJobStatus = S.String;

export interface CodegenJobAsset {
  downloadUrl?: string;
}
const CodegenJobAsset = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<CodegenJobAsset>;
export interface CodegenDependency {
  name?: string;
  supportedVersion?: string;
  isSemVer?: boolean;
  reason?: string;
}
const CodegenDependency = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<CodegenDependency>;
export type CodegenDependencies = CodegenDependency[];
const CodegenDependencies = /*@__PURE__*/ __L.at(__c12, 4);
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
const CodegenJob = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<CodegenJob>;
export interface GetCodegenJobResponse {
  job?: CodegenJob;
}
const GetCodegenJobResponse = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<GetCodegenJobResponse>;
export interface GetComponentRequest {
  appId: string;
  environmentName: string;
  id: string;
}
const GetComponentRequest = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<GetComponentRequest>;
export interface GetComponentResponse {
  component?: Component;
}
const GetComponentResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<GetComponentResponse>;
export interface GetFormRequest {
  appId: string;
  environmentName: string;
  id: string;
}
const GetFormRequest = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<GetFormRequest>;
export interface GetFormResponse {
  form?: Form;
}
const GetFormResponse = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<GetFormResponse>;
export interface GetMetadataRequest {
  appId: string;
  environmentName: string;
}
const GetMetadataRequest = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<GetMetadataRequest>;
export type FeaturesMap = { [key: string]: string | undefined };
const FeaturesMap = ComponentVariantValues as any as S.Schema<FeaturesMap>;
export interface GetMetadataResponse {
  features: { [key: string]: string | undefined };
}
const GetMetadataResponse = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<GetMetadataResponse>;
export interface GetThemeRequest {
  appId: string;
  environmentName: string;
  id: string;
}
const GetThemeRequest = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<GetThemeRequest>;
export interface GetThemeResponse {
  theme?: Theme;
}
const GetThemeResponse = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<GetThemeResponse>;
export type ListCodegenJobsLimit = number;
export interface ListCodegenJobsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCodegenJobsRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<ListCodegenJobsRequest>;
export interface CodegenJobSummary {
  appId: string;
  environmentName: string;
  id: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
const CodegenJobSummary = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<CodegenJobSummary>;
export type CodegenJobSummaryList = CodegenJobSummary[];
const CodegenJobSummaryList = /*@__PURE__*/ __L.at(__c14, 1);
export interface ListCodegenJobsResponse {
  entities: CodegenJobSummary[];
  nextToken?: string;
}
const ListCodegenJobsResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListCodegenJobsResponse>;
export type ListEntityLimit = number;
export interface ListComponentsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListComponentsRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ListComponentsRequest>;
export interface ComponentSummary {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
  componentType: string;
}
const ComponentSummary = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<ComponentSummary>;
export type ComponentSummaryList = ComponentSummary[];
const ComponentSummaryList = /*@__PURE__*/ __L.at(__c14, 5);
export interface ListComponentsResponse {
  entities: ComponentSummary[];
  nextToken?: string;
}
const ListComponentsResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListComponentsResponse>;
export interface ListFormsRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListFormsRequest = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<ListFormsRequest>;
export interface FormSummary {
  appId: string;
  dataType: FormDataTypeConfig;
  environmentName: string;
  formActionType: FormActionType;
  id: string;
  name: string;
}
const FormSummary = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<FormSummary>;
export type FormSummaryList = FormSummary[];
const FormSummaryList = /*@__PURE__*/ __L.at(__c15, 1);
export interface ListFormsResponse {
  entities: FormSummary[];
  nextToken?: string;
}
const ListFormsResponse = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<ListFormsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListThemesRequest {
  appId: string;
  environmentName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListThemesRequest = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<ListThemesRequest>;
export interface ThemeSummary {
  appId: string;
  environmentName: string;
  id: string;
  name: string;
}
const ThemeSummary = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<ThemeSummary>;
export type ThemeSummaryList = ThemeSummary[];
const ThemeSummaryList = /*@__PURE__*/ __L.at(__c15, 7);
export interface ListThemesResponse {
  entities: ThemeSummary[];
  nextToken?: string;
}
const ListThemesResponse = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<ListThemesResponse>;
export interface PutMetadataFlagBody {
  newValue: string;
}
const PutMetadataFlagBody = /*@__PURE__*/ __L.at(__c16, 1) as any as S.Schema<PutMetadataFlagBody>;
export interface PutMetadataFlagRequest {
  appId: string;
  environmentName: string;
  featureName: string;
  body: PutMetadataFlagBody;
}
const PutMetadataFlagRequest = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<PutMetadataFlagRequest>;
export interface PutMetadataFlagResponse {}
const PutMetadataFlagResponse = DeleteComponentResponse as any as S.Schema<PutMetadataFlagResponse>;
export interface RefreshTokenRequestBody {
  token: string | redacted.Redacted<string>;
  clientId?: string | redacted.Redacted<string>;
}
const RefreshTokenRequestBody = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<RefreshTokenRequestBody>;
export interface RefreshTokenRequest {
  provider: string;
  refreshTokenBody: RefreshTokenRequestBody;
}
const RefreshTokenRequest = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<RefreshTokenRequest>;
export interface RefreshTokenResponse {
  accessToken: string | redacted.Redacted<string>;
  expiresIn: number;
}
const RefreshTokenResponse = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<RefreshTokenResponse>;
export interface StartCodegenJobData {
  renderConfig: CodegenJobRenderConfig;
  genericDataSchema?: CodegenJobGenericDataSchema;
  autoGenerateForms?: boolean;
  features?: CodegenFeatureFlags;
  tags?: { [key: string]: string | undefined };
}
const StartCodegenJobData = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<StartCodegenJobData>;
export interface StartCodegenJobRequest {
  appId: string;
  environmentName: string;
  clientToken?: string;
  codegenJobToCreate: StartCodegenJobData;
}
const StartCodegenJobRequest = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<StartCodegenJobRequest>;
export interface StartCodegenJobResponse {
  entity?: CodegenJob;
}
const StartCodegenJobResponse = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<StartCodegenJobResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteComponentResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = IdentifierList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteComponentResponse as any as S.Schema<UntagResourceResponse>;
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
const UpdateComponentData = /*@__PURE__*/ __L.at(__c17, 3) as any as S.Schema<UpdateComponentData>;
export interface UpdateComponentRequest {
  appId: string;
  environmentName: string;
  id: string;
  clientToken?: string;
  updatedComponent: UpdateComponentData;
}
const UpdateComponentRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<UpdateComponentRequest>;
export interface UpdateComponentResponse {
  entity?: Component;
}
const UpdateComponentResponse = CreateComponentResponse as any as S.Schema<UpdateComponentResponse>;
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
const UpdateFormData = /*@__PURE__*/ __L.at(__c17, 5) as any as S.Schema<UpdateFormData>;
export interface UpdateFormRequest {
  appId: string;
  environmentName: string;
  id: string;
  clientToken?: string;
  updatedForm: UpdateFormData;
}
const UpdateFormRequest = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<UpdateFormRequest>;
export interface UpdateFormResponse {
  entity?: Form;
}
const UpdateFormResponse = CreateFormResponse as any as S.Schema<UpdateFormResponse>;
export interface UpdateThemeData {
  id?: string;
  name?: string;
  values: ThemeValues[];
  overrides?: ThemeValues[];
}
const UpdateThemeData = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<UpdateThemeData>;
export interface UpdateThemeRequest {
  appId: string;
  environmentName: string;
  id: string;
  clientToken?: string;
  updatedTheme: UpdateThemeData;
}
const UpdateThemeRequest = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<UpdateThemeRequest>;
export interface UpdateThemeResponse {
  entity?: Theme;
}
const UpdateThemeResponse = CreateThemeResponse as any as S.Schema<UpdateThemeResponse>;
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
  input: CreateComponentRequest,
  output: CreateComponentResponse,
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
  input: CreateFormRequest,
  output: CreateFormResponse,
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
  input: CreateThemeRequest,
  output: CreateThemeResponse,
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
  input: DeleteComponentRequest,
  output: DeleteComponentResponse,
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
  input: DeleteFormRequest,
  output: DeleteFormResponse,
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
  input: DeleteThemeRequest,
  output: DeleteThemeResponse,
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
  input: ExchangeCodeForTokenRequest,
  output: ExchangeCodeForTokenResponse,
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
  input: ExportComponentsRequest,
  output: ExportComponentsResponse,
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
  input: ExportFormsRequest,
  output: ExportFormsResponse,
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
  input: ExportThemesRequest,
  output: ExportThemesResponse,
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
  input: GetCodegenJobRequest,
  output: GetCodegenJobResponse,
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
  input: GetComponentRequest,
  output: GetComponentResponse,
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
  input: GetFormRequest,
  output: GetFormResponse,
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
  input: GetMetadataRequest,
  output: GetMetadataResponse,
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
  input: GetThemeRequest,
  output: GetThemeResponse,
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
  input: ListCodegenJobsRequest,
  output: ListCodegenJobsResponse,
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
  input: ListComponentsRequest,
  output: ListComponentsResponse,
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
  input: ListFormsRequest,
  output: ListFormsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListThemesRequest,
  output: ListThemesResponse,
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
  input: PutMetadataFlagRequest,
  output: PutMetadataFlagResponse,
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
  input: RefreshTokenRequest,
  output: RefreshTokenResponse,
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
  input: StartCodegenJobRequest,
  output: StartCodegenJobResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateComponentRequest,
  output: UpdateComponentResponse,
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
  input: UpdateFormRequest,
  output: UpdateFormResponse,
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
  input: UpdateThemeRequest,
  output: UpdateThemeResponse,
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
      return S.Record(S.String, /*@__PURE__*/ FormBindingElement.pipe(S.optional));
    case 3:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ComponentProperty> => ComponentProperty).annotate({
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
            S.suspend((): S.Schema<ComponentProperty> => ComponentProperty).annotate({
              identifier: "ComponentProperty",
            }),
          ),
          else: S.optional(
            S.suspend((): S.Schema<ComponentProperty> => ComponentProperty).annotate({
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
          bindingProperties: S.optional(ComponentPropertyBindingProperties),
          collectionBindingProperties: S.optional(ComponentPropertyBindingProperties),
          defaultValue: S.optional(S.String),
          model: S.optional(S.String),
          bindings: S.optional(FormBindings),
          event: S.optional(S.String),
          userAttribute: S.optional(S.String),
          concat: S.optional(
            S.suspend(() => ComponentPropertyList).annotate({
              identifier: "ComponentPropertyList",
            }),
          ),
          condition: S.optional(
            S.suspend(
              (): S.Schema<ComponentConditionProperty> => ComponentConditionProperty,
            ).annotate({
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
        /*@__PURE__*/ S.suspend((): S.Schema<ComponentProperty> => ComponentProperty)
          .annotate({ identifier: "ComponentProperty" })
          .pipe(S.optional),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ componentName: S.String, property: S.String, set: ComponentProperty }),
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
          type: S.optional(ComponentProperty),
          url: S.optional(ComponentProperty),
          anchor: S.optional(ComponentProperty),
          target: S.optional(ComponentProperty),
          global: S.optional(ComponentProperty),
          model: S.optional(S.String),
          id: S.optional(ComponentProperty),
          fields: S.optional(ComponentProperties),
          state: S.optional(MutationActionSetStateParameter),
        }),
      ).annotate({ identifier: "ActionParameters" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(S.String),
          parameters: S.optional(ActionParameters),
          bindingEvent: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentEvent" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ ComponentEvent.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          componentType: S.String,
          name: S.String,
          properties: ComponentProperties,
          children: S.optional(
            S.suspend(() => ComponentChildList).annotate({ identifier: "ComponentChildList" }),
          ),
          events: S.optional(ComponentEvents),
          sourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentChild" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ComponentChild> => ComponentChild).annotate({
          identifier: "ComponentChild",
        }),
      );
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ ComponentOverridesValue.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          variantValues: S.optional(ComponentVariantValues),
          overrides: S.optional(ComponentOverrides),
        }),
      ).annotate({ identifier: "ComponentVariant" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ComponentVariant);
    case 1:
      return S.suspend(() =>
        S.Struct({
          or: S.optional(S.suspend(() => PredicateList).annotate({ identifier: "PredicateList" })),
          and: S.optional(S.suspend(() => PredicateList).annotate({ identifier: "PredicateList" })),
          field: S.optional(S.String),
          operator: S.optional(S.String),
          operand: S.optional(S.String),
          operandType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Predicate" });
    case 2:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<Predicate> => Predicate).annotate({
          identifier: "Predicate",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          model: S.optional(S.String),
          field: S.optional(S.String),
          predicates: S.optional(PredicateList),
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
          bindingProperties: S.optional(ComponentBindingPropertiesValueProperties),
          defaultValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ComponentBindingPropertiesValue",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ ComponentBindingPropertiesValue.pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ field: S.String, direction: SortDirection })).annotate({
        identifier: "SortProperty",
      });
    case 7:
      return S.Array(SortProperty);
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
          sort: S.optional(SortPropertyList),
          predicate: S.optional(Predicate),
          identifiers: S.optional(IdentifierList),
        }),
      ).annotate({
        identifier: "ComponentDataConfiguration",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ ComponentDataConfiguration.pipe(S.optional));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          sourceId: S.optional(S.String),
          componentType: S.String,
          properties: ComponentProperties,
          children: S.optional(ComponentChildList),
          variants: ComponentVariants,
          overrides: ComponentOverrides,
          bindingProperties: ComponentBindingProperties,
          collectionProperties: S.optional(ComponentCollectionProperties),
          tags: S.optional(Tags),
          events: S.optional(ComponentEvents),
          schemaVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateComponentData" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          componentToCreate: CreateComponentData.pipe(T.HttpPayload()).annotate({
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
          properties: ComponentProperties,
          children: S.optional(ComponentChildList),
          variants: ComponentVariants,
          overrides: ComponentOverrides,
          bindingProperties: ComponentBindingProperties,
          collectionProperties: S.optional(ComponentCollectionProperties),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          modifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(Tags),
          events: S.optional(ComponentEvents),
          schemaVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "Component" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          entity: S.optional(Component).pipe(T.HttpPayload()).annotate({ identifier: "Component" }),
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
        /*@__PURE__*/ S.Struct({ fixed: FixedPosition }),
        /*@__PURE__*/ S.Struct({ rightOf: S.String }),
        /*@__PURE__*/ S.Struct({ below: S.String }),
      ]);
    case 2:
      return S.Array(
        /*@__PURE__*/ S.suspend(
          (): S.Schema<FormInputValueProperty> => FormInputValueProperty,
        ).annotate({
          identifier: "FormInputValueProperty",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.String),
          bindingProperties: S.optional(FormInputValuePropertyBindingProperties),
          concat: S.optional(
            S.suspend(() => FormInputValuePropertyList).annotate({
              identifier: "FormInputValuePropertyList",
            }),
          ),
        }),
      ).annotate({ identifier: "FormInputValueProperty" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          displayValue: S.optional(FormInputValueProperty),
          value: FormInputValueProperty,
        }),
      ).annotate({ identifier: "ValueMapping" });
    case 5:
      return S.Array(ValueMapping);
    case 6:
      return S.suspend(() => S.Struct({ model: S.optional(S.String) })).annotate({
        identifier: "FormInputBindingPropertiesValueProperties",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          bindingProperties: S.optional(FormInputBindingPropertiesValueProperties),
        }),
      ).annotate({
        identifier: "FormInputBindingPropertiesValue",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ FormInputBindingPropertiesValue.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          values: ValueMappingList,
          bindingProperties: S.optional(FormInputBindingProperties),
        }),
      ).annotate({ identifier: "ValueMappings" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accessLevel: StorageAccessLevel,
          acceptedFileTypes: StrValues,
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
          valueMappings: S.optional(ValueMappings),
          name: S.optional(S.String),
          minValue: S.optional(S.Number),
          maxValue: S.optional(S.Number),
          step: S.optional(S.Number),
          value: S.optional(S.String),
          isArray: S.optional(S.Boolean),
          fileUploaderConfig: S.optional(FileUploaderFieldConfig),
        }),
      ).annotate({ identifier: "FieldInputConfig" });
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          strValues: S.optional(StrValues),
          numValues: S.optional(NumValues),
          validationMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FieldValidationConfiguration",
      });
    case 6:
      return S.Array(FieldValidationConfiguration);
    case 7:
      return S.suspend(() =>
        S.Struct({
          label: S.optional(S.String),
          position: S.optional(FieldPosition),
          excluded: S.optional(S.Boolean),
          inputType: S.optional(FieldInputConfig),
          validations: S.optional(ValidationsList),
        }),
      ).annotate({ identifier: "FieldConfig" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ FieldConfig.pipe(S.optional));
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tokenReference: S.String }),
        /*@__PURE__*/ S.Struct({ value: S.String }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          horizontalGap: S.optional(FormStyleConfig),
          verticalGap: S.optional(FormStyleConfig),
          outerPadding: S.optional(FormStyleConfig),
        }),
      ).annotate({ identifier: "FormStyle" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          position: S.optional(FieldPosition),
          text: S.optional(S.String),
          level: S.optional(S.Number),
          orientation: S.optional(S.String),
          excluded: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SectionalElement" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ SectionalElement.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          excluded: S.optional(S.Boolean),
          children: S.optional(S.String),
          position: S.optional(FieldPosition),
        }),
      ).annotate({ identifier: "FormButton" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          position: S.optional(FormButtonsPosition),
          clear: S.optional(FormButton),
          cancel: S.optional(FormButton),
          submit: S.optional(FormButton),
        }),
      ).annotate({ identifier: "FormCTA" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          dataType: FormDataTypeConfig,
          formActionType: FormActionType,
          fields: FieldsMap,
          style: FormStyle,
          sectionalElements: SectionalElementMap,
          schemaVersion: S.String,
          cta: S.optional(FormCTA),
          tags: S.optional(Tags),
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
          formToCreate: CreateFormData.pipe(T.HttpPayload()).annotate({
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
          formActionType: FormActionType,
          style: FormStyle,
          dataType: FormDataTypeConfig,
          fields: FieldsMap,
          sectionalElements: SectionalElementMap,
          schemaVersion: S.String,
          tags: S.optional(Tags),
          cta: S.optional(FormCTA),
          labelDecorator: S.optional(S.String),
        }),
      ).annotate({ identifier: "Form" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          entity: S.optional(Form).pipe(T.HttpPayload()).annotate({ identifier: "Form" }),
        }),
      ).annotate({ identifier: "CreateFormResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.String),
          children: S.optional(
            S.suspend(() => ThemeValuesList).annotate({ identifier: "ThemeValuesList" }),
          ),
        }),
      ).annotate({ identifier: "ThemeValue" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          value: S.optional(
            S.suspend((): S.Schema<ThemeValue> => ThemeValue).annotate({
              identifier: "ThemeValue",
            }),
          ),
        }),
      ).annotate({ identifier: "ThemeValues" });
    case 5:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<ThemeValues> => ThemeValues).annotate({
          identifier: "ThemeValues",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          values: ThemeValuesList,
          overrides: S.optional(ThemeValuesList),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "CreateThemeData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          themeToCreate: CreateThemeData.pipe(T.HttpPayload()).annotate({
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
          values: ThemeValuesList,
          overrides: S.optional(ThemeValuesList),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "Theme" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          entity: S.optional(Theme).pipe(T.HttpPayload()).annotate({ identifier: "Theme" }),
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
          request: ExchangeCodeForTokenRequestBody.pipe(T.HttpPayload()).annotate({
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
      return S.Array(Component);
    case 3:
      return S.suspend(() =>
        S.Struct({ entities: ComponentList, nextToken: S.optional(S.String) }),
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
      return S.Array(Form);
    case 6:
      return S.suspend(() =>
        S.Struct({ entities: FormList, nextToken: S.optional(S.String) }),
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
      return S.Array(Theme);
    case 1:
      return S.suspend(() =>
        S.Struct({ entities: ThemeList, nextToken: S.optional(S.String) }),
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
        /*@__PURE__*/ S.Struct({ graphQLConfig: GraphQLRenderConfig }),
        /*@__PURE__*/ S.Struct({ dataStoreConfig: DataStoreRenderConfig }),
        /*@__PURE__*/ S.Struct({ noApiConfig: NoApiRenderConfig }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          module: S.optional(JSModule),
          target: S.optional(JSTarget),
          script: S.optional(JSScript),
          renderTypeDeclarations: S.optional(S.Boolean),
          inlineSourceMap: S.optional(S.Boolean),
          apiConfiguration: S.optional(ApiConfiguration),
          dependencies: S.optional(ReactCodegenDependencies),
        }),
      ).annotate({ identifier: "ReactStartCodegenJobData" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ react: ReactStartCodegenJobData })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: GenericDataRelationshipType,
          relatedModelName: S.String,
          relatedModelFields: S.optional(RelatedModelFieldsList),
          canUnlinkAssociatedModel: S.optional(S.Boolean),
          relatedJoinFieldName: S.optional(S.String),
          relatedJoinTableName: S.optional(S.String),
          belongsToFieldOnRelatedModel: S.optional(S.String),
          associatedFields: S.optional(AssociatedFieldsList),
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
          dataType: CodegenGenericDataFieldDataType,
          dataTypeValue: S.String,
          required: S.Boolean,
          readOnly: S.Boolean,
          isArray: S.Boolean,
          relationship: S.optional(CodegenGenericDataRelationshipType),
        }),
      ).annotate({ identifier: "CodegenGenericDataField" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ CodegenGenericDataField.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          fields: CodegenGenericDataFields,
          isJoinTable: S.optional(S.Boolean),
          primaryKeys: CodegenPrimaryKeysList,
        }),
      ).annotate({ identifier: "CodegenGenericDataModel" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ CodegenGenericDataModel.pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ values: CodegenGenericDataEnumValuesList })).annotate({
        identifier: "CodegenGenericDataEnum",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ CodegenGenericDataEnum.pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ fields: CodegenGenericDataNonModelFields })).annotate({
        identifier: "CodegenGenericDataNonModel",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ CodegenGenericDataNonModel.pipe(S.optional));
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataSourceType: CodegenJobGenericDataSourceType,
          models: CodegenGenericDataModels,
          enums: CodegenGenericDataEnums,
          nonModels: CodegenGenericDataNonModels,
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
      return S.Array(CodegenDependency);
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          appId: S.String,
          environmentName: S.String,
          renderConfig: S.optional(CodegenJobRenderConfig),
          genericDataSchema: S.optional(CodegenJobGenericDataSchema),
          autoGenerateForms: S.optional(S.Boolean),
          features: S.optional(CodegenFeatureFlags),
          status: S.optional(CodegenJobStatus),
          statusMessage: S.optional(S.String),
          asset: S.optional(CodegenJobAsset),
          tags: S.optional(Tags),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          modifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dependencies: S.optional(CodegenDependencies),
        }),
      ).annotate({ identifier: "CodegenJob" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          job: S.optional(CodegenJob).pipe(T.HttpPayload()).annotate({ identifier: "CodegenJob" }),
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
          component: S.optional(Component)
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
        S.Struct({ form: S.optional(Form).pipe(T.HttpPayload()).annotate({ identifier: "Form" }) }),
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
      return S.suspend(() => S.Struct({ features: FeaturesMap })).annotate({
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
          theme: S.optional(Theme).pipe(T.HttpPayload()).annotate({ identifier: "Theme" }),
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
      return S.Array(CodegenJobSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ entities: CodegenJobSummaryList, nextToken: S.optional(S.String) }),
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
      return S.Array(ComponentSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ entities: ComponentSummaryList, nextToken: S.optional(S.String) }),
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
          dataType: FormDataTypeConfig,
          environmentName: S.String,
          formActionType: FormActionType,
          id: S.String,
          name: S.String,
        }),
      ).annotate({ identifier: "FormSummary" });
    case 1:
      return S.Array(FormSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ entities: FormSummaryList, nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: Tags })).annotate({
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
      return S.Array(ThemeSummary);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ entities: ThemeSummaryList, nextToken: S.optional(S.String) }),
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
          body: PutMetadataFlagBody.pipe(T.HttpPayload()).annotate({
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
          refreshTokenBody: RefreshTokenRequestBody.pipe(T.HttpPayload()).annotate({
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
          renderConfig: CodegenJobRenderConfig,
          genericDataSchema: S.optional(CodegenJobGenericDataSchema),
          autoGenerateForms: S.optional(S.Boolean),
          features: S.optional(CodegenFeatureFlags),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "StartCodegenJobData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          appId: S.String.pipe(T.HttpLabel("appId")),
          environmentName: S.String.pipe(T.HttpLabel("environmentName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          codegenJobToCreate: StartCodegenJobData.pipe(T.HttpPayload()).annotate({
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
          entity: S.optional(CodegenJob)
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CodegenJob" }),
        }),
      ).annotate({ identifier: "StartCodegenJobResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: Tags }).pipe(
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
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
          properties: S.optional(ComponentProperties),
          children: S.optional(ComponentChildList),
          variants: S.optional(ComponentVariants),
          overrides: S.optional(ComponentOverrides),
          bindingProperties: S.optional(ComponentBindingProperties),
          collectionProperties: S.optional(ComponentCollectionProperties),
          events: S.optional(ComponentEvents),
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
          updatedComponent: UpdateComponentData.pipe(T.HttpPayload()).annotate({
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
          dataType: S.optional(FormDataTypeConfig),
          formActionType: S.optional(FormActionType),
          fields: S.optional(FieldsMap),
          style: S.optional(FormStyle),
          sectionalElements: S.optional(SectionalElementMap),
          schemaVersion: S.optional(S.String),
          cta: S.optional(FormCTA),
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
          updatedForm: UpdateFormData.pipe(T.HttpPayload()).annotate({
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
          values: ThemeValuesList,
          overrides: S.optional(ThemeValuesList),
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
          updatedTheme: UpdateThemeData.pipe(T.HttpPayload()).annotate({
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
