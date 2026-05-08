// ==========================================================================
// Google Identity Toolkit API (identitytoolkit v3)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "identitytoolkit",
  version: "v3",
  rootUrl: "https://www.googleapis.com/",
  servicePath: "identitytoolkit/v3/relyingparty/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface IdentitytoolkitRelyingpartyDeleteAccountRequest {
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** The GITKit token or STS id token of the authenticated user. */
  idToken?: string;
  /** The local ID of the user. */
  localId?: string;
}

export const IdentitytoolkitRelyingpartyDeleteAccountRequest: Schema.Schema<IdentitytoolkitRelyingpartyDeleteAccountRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delegatedProjectNumber: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyDeleteAccountRequest",
  });

export interface IdentitytoolkitRelyingpartyEmailLinkSigninRequest {
  /** Token for linking flow. */
  idToken?: string;
  /** The email address of the user. */
  email?: string;
  /** The confirmation code. */
  oobCode?: string;
}

export const IdentitytoolkitRelyingpartyEmailLinkSigninRequest: Schema.Schema<IdentitytoolkitRelyingpartyEmailLinkSigninRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    oobCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyEmailLinkSigninRequest",
  });

export interface IdentitytoolkitRelyingpartySendVerificationCodeResponse {
  /** Encrypted session information */
  sessionInfo?: string;
}

export const IdentitytoolkitRelyingpartySendVerificationCodeResponse: Schema.Schema<IdentitytoolkitRelyingpartySendVerificationCodeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionInfo: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartySendVerificationCodeResponse",
  });

export interface IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse {
  isNewUser?: boolean;
  temporaryProofExpiresIn?: string;
  temporaryProof?: string;
  localId?: string;
  verificationProofExpiresIn?: string;
  verificationProof?: string;
  phoneNumber?: string;
  expiresIn?: string;
  refreshToken?: string;
  idToken?: string;
}

export const IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse: Schema.Schema<IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isNewUser: Schema.optional(Schema.Boolean),
    temporaryProofExpiresIn: Schema.optional(Schema.String),
    temporaryProof: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
    verificationProofExpiresIn: Schema.optional(Schema.String),
    verificationProof: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    expiresIn: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse",
  });

export interface Relyingparty {
  /** the iOS bundle id of iOS app to handle the action code */
  iOSBundleId?: string;
  /** whether or not the app can handle the oob code without first going to web */
  canHandleCodeInApp?: boolean;
  /** The IP address of the user. */
  userIp?: string;
  /** The recaptcha response from the user. */
  captchaResp?: string;
  /** android package name of the android app to handle the action code */
  androidPackageName?: string;
  /** The fixed string "identitytoolkit#relyingparty". */
  kind?: string;
  /** whether or not to install the android app on the device where the link is opened */
  androidInstallApp?: boolean;
  /** The url to continue to the Gitkit app */
  continueUrl?: string;
  /** The user's Gitkit login token for email change. */
  idToken?: string;
  /** The email of the user. */
  email?: string;
  /** The request type. */
  requestType?: string;
  /** The recaptcha challenge presented to the user. */
  challenge?: string;
  /** iOS app store id to download the app if it's not already installed */
  iOSAppStoreId?: string;
  /** The new email if the code is for email change. */
  newEmail?: string;
  /** minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app */
  androidMinimumVersion?: string;
}

export const Relyingparty: Schema.Schema<Relyingparty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iOSBundleId: Schema.optional(Schema.String),
    canHandleCodeInApp: Schema.optional(Schema.Boolean),
    userIp: Schema.optional(Schema.String),
    captchaResp: Schema.optional(Schema.String),
    androidPackageName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    androidInstallApp: Schema.optional(Schema.Boolean),
    continueUrl: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    requestType: Schema.optional(Schema.String),
    challenge: Schema.optional(Schema.String),
    iOSAppStoreId: Schema.optional(Schema.String),
    newEmail: Schema.optional(Schema.String),
    androidMinimumVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Relyingparty" });

export interface CreateAuthUriResponse {
  /** True if captcha is required. */
  captchaRequired?: boolean;
  /** True if the authUri is for user's existing provider. */
  forExistingProvider?: boolean;
  /** Session ID which should be passed in the following verifyAssertion request. */
  sessionId?: string;
  /** The provider ID of the auth URI. */
  providerId?: string;
  /** Whether the user is registered if the identifier is an email. */
  registered?: boolean;
  /** all providers the user has once used to do federated login */
  allProviders?: ReadonlyArray<string>;
  /** The URI used by the IDP to authenticate the user. */
  authUri?: string;
  /** All sign-in methods this user has used. */
  signinMethods?: ReadonlyArray<string>;
  /** The fixed string identitytoolkit#CreateAuthUriResponse". */
  kind?: string;
}

export const CreateAuthUriResponse: Schema.Schema<CreateAuthUriResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    captchaRequired: Schema.optional(Schema.Boolean),
    forExistingProvider: Schema.optional(Schema.Boolean),
    sessionId: Schema.optional(Schema.String),
    providerId: Schema.optional(Schema.String),
    registered: Schema.optional(Schema.Boolean),
    allProviders: Schema.optional(Schema.Array(Schema.String)),
    authUri: Schema.optional(Schema.String),
    signinMethods: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateAuthUriResponse" });

export interface SignupNewUserResponse {
  /** The name of the user. */
  displayName?: string;
  /** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
  expiresIn?: string;
  /** If idToken is STS id token, then this field will be refresh token. */
  refreshToken?: string;
  /** The RP local ID of the user. */
  localId?: string;
  /** The email of the user. */
  email?: string;
  /** The Gitkit id token to login the newly sign up user. */
  idToken?: string;
  /** The fixed string "identitytoolkit#SignupNewUserResponse". */
  kind?: string;
}

export const SignupNewUserResponse: Schema.Schema<SignupNewUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    expiresIn: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignupNewUserResponse" });

export interface IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
  /** Instance id token of the app. */
  instanceId?: string;
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** Whether return sts id token and refresh token instead of gitkit token. */
  returnSecureToken?: boolean;
  /** The custom token to verify */
  token?: string;
}

export const IdentitytoolkitRelyingpartyVerifyCustomTokenRequest: Schema.Schema<IdentitytoolkitRelyingpartyVerifyCustomTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.optional(Schema.String),
    delegatedProjectNumber: Schema.optional(Schema.String),
    returnSecureToken: Schema.optional(Schema.Boolean),
    token: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyVerifyCustomTokenRequest",
  });

export interface IdentitytoolkitRelyingpartyVerifyPasswordRequest {
  /** The GITKit token for the non-trusted IDP, which is to be confirmed by the user. */
  pendingIdToken?: string;
  /** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
  tenantId?: string;
  /** Response to the captcha. */
  captchaResponse?: string;
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** Instance id token of the app. */
  instanceId?: string;
  /** The captcha challenge. */
  captchaChallenge?: string;
  /** The password inputed by the user. */
  password?: string;
  /** The email of the user. */
  email?: string;
  /** Whether return sts id token and refresh token instead of gitkit token. */
  returnSecureToken?: boolean;
  /** The GITKit token of the authenticated user. */
  idToken?: string;
  /** Tenant project number to be used for idp discovery. */
  tenantProjectNumber?: string;
}

export const IdentitytoolkitRelyingpartyVerifyPasswordRequest: Schema.Schema<IdentitytoolkitRelyingpartyVerifyPasswordRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pendingIdToken: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    captchaResponse: Schema.optional(Schema.String),
    delegatedProjectNumber: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
    captchaChallenge: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    returnSecureToken: Schema.optional(Schema.Boolean),
    idToken: Schema.optional(Schema.String),
    tenantProjectNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyVerifyPasswordRequest",
  });

export interface IdpConfig {
  /** OAuth2 client ID. */
  clientId?: string;
  /** Whether this IDP is enabled. */
  enabled?: boolean;
  /** OAuth2 client secret. */
  secret?: string;
  /** Whitelisted client IDs for audience check. */
  whitelistedAudiences?: ReadonlyArray<string>;
  /** Percent of users who will be prompted/redirected federated login for this IDP. */
  experimentPercent?: number;
  /** OAuth2 provider. */
  provider?: string;
}

export const IdpConfig: Schema.Schema<IdpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    secret: Schema.optional(Schema.String),
    whitelistedAudiences: Schema.optional(Schema.Array(Schema.String)),
    experimentPercent: Schema.optional(Schema.Number),
    provider: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdpConfig" });

export interface GetRecaptchaParamResponse {
  /** The fixed string "identitytoolkit#GetRecaptchaParamResponse". */
  kind?: string;
  /** Site key registered at recaptcha. */
  recaptchaSiteKey?: string;
  /** The stoken field for the recaptcha widget, used to request captcha challenge. */
  recaptchaStoken?: string;
}

export const GetRecaptchaParamResponse: Schema.Schema<GetRecaptchaParamResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    recaptchaSiteKey: Schema.optional(Schema.String),
    recaptchaStoken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetRecaptchaParamResponse" });

export interface IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest {
  idToken?: string;
  phoneNumber?: string;
  /** The session info previously returned by IdentityToolkit-SendVerificationCode. */
  sessionInfo?: string;
  operation?: string;
  verificationProof?: string;
  code?: string;
  temporaryProof?: string;
}

export const IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest: Schema.Schema<IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    sessionInfo: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    verificationProof: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    temporaryProof: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest",
  });

export interface UserInfo {
  /** The user's password salt. */
  salt?: string;
  /** Whether the email has been verified. */
  emailVerified?: boolean;
  /** User's phone number. */
  phoneNumber?: string;
  /** Whether the user is disabled. */
  disabled?: boolean;
  /** The email of the user. */
  email?: string;
  /** The timestamp when the password was last updated. */
  passwordUpdatedAt?: number;
  /** last login timestamp. */
  lastLoginAt?: string;
  /** User's screen name at Twitter or login name at Github. */
  screenName?: string;
  /** User creation timestamp. */
  createdAt?: string;
  /** The IDP of the user. */
  providerUserInfo?: ReadonlyArray<{
    email?: string;
    providerId?: string;
    displayName?: string;
    phoneNumber?: string;
    screenName?: string;
    photoUrl?: string;
    federatedId?: string;
    rawId?: string;
  }>;
  /** The user's plain text password. */
  rawPassword?: string;
  /** Timestamp in seconds for valid login token. */
  validSince?: string;
  /** Version of the user's password. */
  version?: number;
  /** The URL of the user profile photo. */
  photoUrl?: string;
  /** Whether the user is authenticated by the developer. */
  customAuth?: boolean;
  /** The user's hashed password. */
  passwordHash?: string;
  /** The local ID of the user. */
  localId?: string;
  /** The name of the user. */
  displayName?: string;
  /** The custom attributes to be set in the user's id token. */
  customAttributes?: string;
}

export const UserInfo: Schema.Schema<UserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    salt: Schema.optional(Schema.String),
    emailVerified: Schema.optional(Schema.Boolean),
    phoneNumber: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    email: Schema.optional(Schema.String),
    passwordUpdatedAt: Schema.optional(Schema.Number),
    lastLoginAt: Schema.optional(Schema.String),
    screenName: Schema.optional(Schema.String),
    createdAt: Schema.optional(Schema.String),
    providerUserInfo: Schema.optional(
      Schema.Array(
        Schema.Struct({
          email: Schema.optional(Schema.String),
          providerId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          phoneNumber: Schema.optional(Schema.String),
          screenName: Schema.optional(Schema.String),
          photoUrl: Schema.optional(Schema.String),
          federatedId: Schema.optional(Schema.String),
          rawId: Schema.optional(Schema.String),
        }),
      ),
    ),
    rawPassword: Schema.optional(Schema.String),
    validSince: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    photoUrl: Schema.optional(Schema.String),
    customAuth: Schema.optional(Schema.Boolean),
    passwordHash: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    customAttributes: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserInfo" });

export interface IdentitytoolkitRelyingpartyUploadAccountRequest {
  blockSize?: number;
  /** Rounds for hash calculation. Used by scrypt and similar algorithms. */
  rounds?: number;
  dkLen?: number;
  parallelization?: number;
  /** The following 4 fields are for standard scrypt algorithm. */
  cpuMemCost?: number;
  /** The salt separator. */
  saltSeparator?: string;
  /** Memory cost for hash calculation. Used by scrypt similar algorithms. */
  memoryCost?: number;
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** Specify which project (field value is actually project id) to operate. Only used when provided credential. */
  targetProjectId?: string;
  /** Whether allow overwrite existing account when user local_id exists. */
  allowOverwrite?: boolean;
  /** The password hash algorithm. */
  hashAlgorithm?: string;
  /** If true, backend will do sanity check(including duplicate email and federated id) when uploading account. */
  sanityCheck?: boolean;
  /** The key for to hash the password. */
  signerKey?: string;
  /** The account info to be stored. */
  users?: ReadonlyArray<UserInfo>;
}

export const IdentitytoolkitRelyingpartyUploadAccountRequest: Schema.Schema<IdentitytoolkitRelyingpartyUploadAccountRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockSize: Schema.optional(Schema.Number),
    rounds: Schema.optional(Schema.Number),
    dkLen: Schema.optional(Schema.Number),
    parallelization: Schema.optional(Schema.Number),
    cpuMemCost: Schema.optional(Schema.Number),
    saltSeparator: Schema.optional(Schema.String),
    memoryCost: Schema.optional(Schema.Number),
    delegatedProjectNumber: Schema.optional(Schema.String),
    targetProjectId: Schema.optional(Schema.String),
    allowOverwrite: Schema.optional(Schema.Boolean),
    hashAlgorithm: Schema.optional(Schema.String),
    sanityCheck: Schema.optional(Schema.Boolean),
    signerKey: Schema.optional(Schema.String),
    users: Schema.optional(Schema.Array(UserInfo)),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyUploadAccountRequest",
  });

export interface EmailTemplate {
  /** Email body. */
  body?: string;
  /** From address of the email. */
  from?: string;
  /** Reply-to address. */
  replyTo?: string;
  /** From display name. */
  fromDisplayName?: string;
  /** Subject of the email. */
  subject?: string;
  /** Email body format. */
  format?: string;
}

export const EmailTemplate: Schema.Schema<EmailTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    replyTo: Schema.optional(Schema.String),
    fromDisplayName: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
  }).annotate({ identifier: "EmailTemplate" });

export interface IdentitytoolkitRelyingpartySetProjectConfigRequest {
  /** Browser API key, needed when making http request to Apiary. */
  apiKey?: string;
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** Whether to allow password user sign in or sign up. */
  allowPasswordUser?: boolean;
  /** Oauth2 provider configuration. */
  idpConfig?: ReadonlyArray<IdpConfig>;
  /** Whether to enable anonymous user. */
  enableAnonymousUser?: boolean;
  /** Verify email template. */
  verifyEmailTemplate?: EmailTemplate;
  /** Change email template. */
  changeEmailTemplate?: EmailTemplate;
  /** Whether to use email sending provided by Firebear. */
  useEmailSending?: boolean;
  /** Reset password email template. */
  resetPasswordTemplate?: EmailTemplate;
  /** Authorized domains for widget redirect. */
  authorizedDomains?: ReadonlyArray<string>;
  /** Legacy reset password email template. */
  legacyResetPasswordTemplate?: EmailTemplate;
}

export const IdentitytoolkitRelyingpartySetProjectConfigRequest: Schema.Schema<IdentitytoolkitRelyingpartySetProjectConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKey: Schema.optional(Schema.String),
    delegatedProjectNumber: Schema.optional(Schema.String),
    allowPasswordUser: Schema.optional(Schema.Boolean),
    idpConfig: Schema.optional(Schema.Array(IdpConfig)),
    enableAnonymousUser: Schema.optional(Schema.Boolean),
    verifyEmailTemplate: Schema.optional(EmailTemplate),
    changeEmailTemplate: Schema.optional(EmailTemplate),
    useEmailSending: Schema.optional(Schema.Boolean),
    resetPasswordTemplate: Schema.optional(EmailTemplate),
    authorizedDomains: Schema.optional(Schema.Array(Schema.String)),
    legacyResetPasswordTemplate: Schema.optional(EmailTemplate),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartySetProjectConfigRequest",
  });

export interface IdentitytoolkitRelyingpartySetAccountInfoRequest {
  /** The photo url of the user. */
  photoUrl?: string;
  /** Timestamp in seconds for valid login token. */
  validSince?: string;
  /** The custom attributes to be set in the user's id token. */
  customAttributes?: string;
  /** Response to the captcha. */
  captchaResponse?: string;
  /** The local ID of the user. */
  localId?: string;
  /** The name of the user. */
  displayName?: string;
  /** The timestamp when the account is created. */
  createdAt?: string;
  /** The associated IDPs of the user. */
  provider?: ReadonlyArray<string>;
  /** The IDPs the user request to delete. */
  deleteProvider?: ReadonlyArray<string>;
  /** The captcha challenge. */
  captchaChallenge?: string;
  /** The new password of the user. */
  password?: string;
  /** Mark the user to upgrade to federated login. */
  upgradeToFederatedLogin?: boolean;
  /** Whether to disable the user. */
  disableUser?: boolean;
  /** Last login timestamp. */
  lastLoginAt?: string;
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** Instance id token of the app. */
  instanceId?: string;
  /** The attributes users request to delete. */
  deleteAttribute?: ReadonlyArray<string>;
  /** The GITKit token of the authenticated user. */
  idToken?: string;
  /** The email of the user. */
  email?: string;
  /** Whether return sts id token and refresh token instead of gitkit token. */
  returnSecureToken?: boolean;
  /** Mark the email as verified or not. */
  emailVerified?: boolean;
  /** The out-of-band code of the change email request. */
  oobCode?: string;
  /** Privileged caller can update user with specified phone number. */
  phoneNumber?: string;
}

export const IdentitytoolkitRelyingpartySetAccountInfoRequest: Schema.Schema<IdentitytoolkitRelyingpartySetAccountInfoRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    photoUrl: Schema.optional(Schema.String),
    validSince: Schema.optional(Schema.String),
    customAttributes: Schema.optional(Schema.String),
    captchaResponse: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createdAt: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.Array(Schema.String)),
    deleteProvider: Schema.optional(Schema.Array(Schema.String)),
    captchaChallenge: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    upgradeToFederatedLogin: Schema.optional(Schema.Boolean),
    disableUser: Schema.optional(Schema.Boolean),
    lastLoginAt: Schema.optional(Schema.String),
    delegatedProjectNumber: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
    deleteAttribute: Schema.optional(Schema.Array(Schema.String)),
    idToken: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    returnSecureToken: Schema.optional(Schema.Boolean),
    emailVerified: Schema.optional(Schema.Boolean),
    oobCode: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartySetAccountInfoRequest",
  });

export interface IdentitytoolkitRelyingpartySignOutUserRequest {
  /** Instance id token of the app. */
  instanceId?: string;
  /** The local ID of the user. */
  localId?: string;
}

export const IdentitytoolkitRelyingpartySignOutUserRequest: Schema.Schema<IdentitytoolkitRelyingpartySignOutUserRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentitytoolkitRelyingpartySignOutUserRequest" });

export interface IdentitytoolkitRelyingpartyVerifyAssertionRequest {
  /** Whether return sts id token and refresh token instead of gitkit token. */
  returnSecureToken?: boolean;
  /** The GITKit token of the authenticated user. */
  idToken?: string;
  /** Session ID, which should match the one in previous createAuthUri request. */
  sessionId?: string;
  /** When it's true, automatically creates a new account if the user doesn't exist. When it's false, allows existing user to sign in normally and throws exception if the user doesn't exist. */
  autoCreate?: boolean;
  /** Instance id token of the app. */
  instanceId?: string;
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP. */
  requestUri?: string;
  /** Tenant project number to be used for idp discovery. */
  tenantProjectNumber?: string;
  /** Whether return 200 and IDP credential rather than throw exception when federated id is already linked. */
  returnIdpCredential?: boolean;
  /** The GITKit token for the non-trusted IDP pending to be confirmed by the user. */
  pendingIdToken?: string;
  /** The post body if the request is a HTTP POST. */
  postBody?: string;
  /** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
  tenantId?: string;
  /** Whether to return refresh tokens. */
  returnRefreshToken?: boolean;
}

export const IdentitytoolkitRelyingpartyVerifyAssertionRequest: Schema.Schema<IdentitytoolkitRelyingpartyVerifyAssertionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnSecureToken: Schema.optional(Schema.Boolean),
    idToken: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
    autoCreate: Schema.optional(Schema.Boolean),
    instanceId: Schema.optional(Schema.String),
    delegatedProjectNumber: Schema.optional(Schema.String),
    requestUri: Schema.optional(Schema.String),
    tenantProjectNumber: Schema.optional(Schema.String),
    returnIdpCredential: Schema.optional(Schema.Boolean),
    pendingIdToken: Schema.optional(Schema.String),
    postBody: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    returnRefreshToken: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyVerifyAssertionRequest",
  });

export interface EmailLinkSigninResponse {
  /** Whether the user is new. */
  isNewUser?: boolean;
  /** The fixed string "identitytoolkit#EmailLinkSigninResponse". */
  kind?: string;
  /** The STS id token to login the newly signed in user. */
  idToken?: string;
  /** The user's email. */
  email?: string;
  /** The RP local ID of the user. */
  localId?: string;
  /** Expiration time of STS id token in seconds. */
  expiresIn?: string;
  /** The refresh token for the signed in user. */
  refreshToken?: string;
}

export const EmailLinkSigninResponse: Schema.Schema<EmailLinkSigninResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isNewUser: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
    expiresIn: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "EmailLinkSigninResponse" });

export interface IdentitytoolkitRelyingpartyDownloadAccountRequest {
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** The max number of results to return in the response. */
  maxResults?: number;
  /** Specify which project (field value is actually project id) to operate. Only used when provided credential. */
  targetProjectId?: string;
  /** The token for the next page. This should be taken from the previous response. */
  nextPageToken?: string;
}

export const IdentitytoolkitRelyingpartyDownloadAccountRequest: Schema.Schema<IdentitytoolkitRelyingpartyDownloadAccountRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delegatedProjectNumber: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Number),
    targetProjectId: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyDownloadAccountRequest",
  });

export interface IdentitytoolkitRelyingpartySignupNewUserRequest {
  /** Whether to disable the user. Only can be used by service account. */
  disabled?: boolean;
  /** Mark the email as verified or not. Only can be used by service account. */
  emailVerified?: boolean;
  /** Privileged caller can create user with specified phone number. */
  phoneNumber?: string;
  /** The email of the user. */
  email?: string;
  /** The GITKit token of the authenticated user. */
  idToken?: string;
  /** Instance id token of the app. */
  instanceId?: string;
  /** The name of the user. */
  displayName?: string;
  /** Response to the captcha. */
  captchaResponse?: string;
  /** Privileged caller can create user with specified user id. */
  localId?: string;
  /** The photo url of the user. */
  photoUrl?: string;
  /** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
  tenantId?: string;
  /** The captcha challenge. */
  captchaChallenge?: string;
  /** The new password of the user. */
  password?: string;
  /** Tenant project number to be used for idp discovery. */
  tenantProjectNumber?: string;
}

export const IdentitytoolkitRelyingpartySignupNewUserRequest: Schema.Schema<IdentitytoolkitRelyingpartySignupNewUserRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
    emailVerified: Schema.optional(Schema.Boolean),
    phoneNumber: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    captchaResponse: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
    photoUrl: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    captchaChallenge: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    tenantProjectNumber: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartySignupNewUserRequest",
  });

export interface IdentitytoolkitRelyingpartySetProjectConfigResponse {
  /** Project ID of the relying party. */
  projectId?: string;
}

export const IdentitytoolkitRelyingpartySetProjectConfigResponse: Schema.Schema<IdentitytoolkitRelyingpartySetProjectConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartySetProjectConfigResponse",
  });

export interface GetOobConfirmationCodeResponse {
  /** The fixed string "identitytoolkit#GetOobConfirmationCodeResponse". */
  kind?: string;
  /** The code to be send to the user. */
  oobCode?: string;
  /** The email address that the email is sent to. */
  email?: string;
}

export const GetOobConfirmationCodeResponse: Schema.Schema<GetOobConfirmationCodeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    oobCode: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetOobConfirmationCodeResponse" });

export interface DownloadAccountResponse {
  /** The fixed string "identitytoolkit#DownloadAccountResponse". */
  kind?: string;
  /** The user accounts data. */
  users?: ReadonlyArray<UserInfo>;
  /** The next page token. To be used in a subsequent request to return the next page of results. */
  nextPageToken?: string;
}

export const DownloadAccountResponse: Schema.Schema<DownloadAccountResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    users: Schema.optional(Schema.Array(UserInfo)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DownloadAccountResponse" });

export interface GetAccountInfoResponse {
  /** The fixed string "identitytoolkit#GetAccountInfoResponse". */
  kind?: string;
  /** The info of the users. */
  users?: ReadonlyArray<UserInfo>;
}

export const GetAccountInfoResponse: Schema.Schema<GetAccountInfoResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    users: Schema.optional(Schema.Array(UserInfo)),
  }).annotate({ identifier: "GetAccountInfoResponse" });

export interface IdentitytoolkitRelyingpartyCreateAuthUriRequest {
  /** The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS. */
  appId?: string;
  /** The opaque value used by the client to maintain context info between the authentication request and the IDP callback. */
  context?: string;
  /** Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set. */
  openidRealm?: string;
  /** The session_id passed by client. */
  sessionId?: string;
  /** The URI to which the IDP redirects the user after the federated login flow. */
  continueUri?: string;
  /** The native app package for OTA installation. */
  otaApp?: string;
  /** Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant */
  oauthScope?: string;
  /** Explicitly specify the auth flow type. Currently only support "CODE_FLOW" type. The field is only used for Google provider. */
  authFlowType?: string;
  /** The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts. */
  hostedDomain?: string;
  /** The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token. */
  customParameter?: Record<string, string>;
  /** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
  tenantId?: string;
  /** The developer's consumer key for OpenId OAuth Extension */
  oauthConsumerKey?: string;
  /** The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier. */
  providerId?: string;
  /** Tenant project number to be used for idp discovery. */
  tenantProjectNumber?: string;
  /** The relying party OAuth client ID. */
  clientId?: string;
  /** The email or federated ID of the user. */
  identifier?: string;
}

export const IdentitytoolkitRelyingpartyCreateAuthUriRequest: Schema.Schema<IdentitytoolkitRelyingpartyCreateAuthUriRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.optional(Schema.String),
    context: Schema.optional(Schema.String),
    openidRealm: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
    continueUri: Schema.optional(Schema.String),
    otaApp: Schema.optional(Schema.String),
    oauthScope: Schema.optional(Schema.String),
    authFlowType: Schema.optional(Schema.String),
    hostedDomain: Schema.optional(Schema.String),
    customParameter: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    tenantId: Schema.optional(Schema.String),
    oauthConsumerKey: Schema.optional(Schema.String),
    providerId: Schema.optional(Schema.String),
    tenantProjectNumber: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    identifier: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyCreateAuthUriRequest",
  });

export interface ResetPasswordResponse {
  /** The fixed string "identitytoolkit#ResetPasswordResponse". */
  kind?: string;
  /** The request type. */
  requestType?: string;
  /** If the out-of-band code is for email recovery, the user's new email. */
  newEmail?: string;
  /** The user's email. If the out-of-band code is for email recovery, the user's original email. */
  email?: string;
}

export const ResetPasswordResponse: Schema.Schema<ResetPasswordResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    requestType: Schema.optional(Schema.String),
    newEmail: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResetPasswordResponse" });

export interface SetAccountInfoResponse {
  /** The user's hashed password. */
  passwordHash?: string;
  /** The new email the user attempts to change to. */
  newEmail?: string;
  /** The photo url of the user. */
  photoUrl?: string;
  /** The fixed string "identitytoolkit#SetAccountInfoResponse". */
  kind?: string;
  /** The name of the user. */
  displayName?: string;
  /** The local ID of the user. */
  localId?: string;
  /** The user's profiles at the associated IdPs. */
  providerUserInfo?: ReadonlyArray<{
    photoUrl?: string;
    providerId?: string;
    displayName?: string;
    federatedId?: string;
  }>;
  /** The email of the user. */
  email?: string;
  /** The Gitkit id token to login the newly sign up user. */
  idToken?: string;
  /** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
  expiresIn?: string;
  /** If idToken is STS id token, then this field will be refresh token. */
  refreshToken?: string;
  /** If email has been verified. */
  emailVerified?: boolean;
}

export const SetAccountInfoResponse: Schema.Schema<SetAccountInfoResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passwordHash: Schema.optional(Schema.String),
    newEmail: Schema.optional(Schema.String),
    photoUrl: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
    providerUserInfo: Schema.optional(
      Schema.Array(
        Schema.Struct({
          photoUrl: Schema.optional(Schema.String),
          providerId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          federatedId: Schema.optional(Schema.String),
        }),
      ),
    ),
    email: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    expiresIn: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
    emailVerified: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SetAccountInfoResponse" });

export interface IdentitytoolkitRelyingpartySignOutUserResponse {
  /** The local ID of the user. */
  localId?: string;
}

export const IdentitytoolkitRelyingpartySignOutUserResponse: Schema.Schema<IdentitytoolkitRelyingpartySignOutUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localId: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentitytoolkitRelyingpartySignOutUserResponse" });

export interface UploadAccountResponse {
  /** The error encountered while processing the account info. */
  error?: ReadonlyArray<{ index?: number; message?: string }>;
  /** The fixed string "identitytoolkit#UploadAccountResponse". */
  kind?: string;
}

export const UploadAccountResponse: Schema.Schema<UploadAccountResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(
      Schema.Array(
        Schema.Struct({
          index: Schema.optional(Schema.Number),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadAccountResponse" });

export interface IdentitytoolkitRelyingpartyResetPasswordRequest {
  /** The old password inputted by the user. */
  oldPassword?: string;
  /** The confirmation code. */
  oobCode?: string;
  /** The new password inputted by the user. */
  newPassword?: string;
  /** The email address of the user. */
  email?: string;
}

export const IdentitytoolkitRelyingpartyResetPasswordRequest: Schema.Schema<IdentitytoolkitRelyingpartyResetPasswordRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oldPassword: Schema.optional(Schema.String),
    oobCode: Schema.optional(Schema.String),
    newPassword: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyResetPasswordRequest",
  });

export interface VerifyPasswordResponse {
  /** The name of the user. */
  displayName?: string;
  /** The OAuth2 authorization code. */
  oauthAuthorizationCode?: string;
  /** The lifetime in seconds of the OAuth2 access token. */
  oauthExpireIn?: number;
  /** The RP local ID if it's already been mapped to the IdP account identified by the federated ID. */
  localId?: string;
  /** The OAuth2 access token. */
  oauthAccessToken?: string;
  /** The URI of the user's photo at IdP */
  photoUrl?: string;
  /** The fixed string "identitytoolkit#VerifyPasswordResponse". */
  kind?: string;
  /** The email returned by the IdP. NOTE: The federated login user may not own the email. */
  email?: string;
  /** The GITKit token for authenticated user. */
  idToken?: string;
  /** Whether the email is registered. */
  registered?: boolean;
  /** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
  expiresIn?: string;
  /** If idToken is STS id token, then this field will be refresh token. */
  refreshToken?: string;
}

export const VerifyPasswordResponse: Schema.Schema<VerifyPasswordResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    oauthAuthorizationCode: Schema.optional(Schema.String),
    oauthExpireIn: Schema.optional(Schema.Number),
    localId: Schema.optional(Schema.String),
    oauthAccessToken: Schema.optional(Schema.String),
    photoUrl: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    registered: Schema.optional(Schema.Boolean),
    expiresIn: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "VerifyPasswordResponse" });

export interface DeleteAccountResponse {
  /** The fixed string "identitytoolkit#DeleteAccountResponse". */
  kind?: string;
}

export const DeleteAccountResponse: Schema.Schema<DeleteAccountResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteAccountResponse" });

export interface IdentitytoolkitRelyingpartyGetAccountInfoRequest {
  /** The GITKit token of the authenticated user. */
  idToken?: string;
  /** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
  delegatedProjectNumber?: string;
  /** The list of emails of the users to inquiry. */
  email?: ReadonlyArray<string>;
  /** The list of local ID's of the users to inquiry. */
  localId?: ReadonlyArray<string>;
  /** Privileged caller can query users by specified phone number. */
  phoneNumber?: ReadonlyArray<string>;
}

export const IdentitytoolkitRelyingpartyGetAccountInfoRequest: Schema.Schema<IdentitytoolkitRelyingpartyGetAccountInfoRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    delegatedProjectNumber: Schema.optional(Schema.String),
    email: Schema.optional(Schema.Array(Schema.String)),
    localId: Schema.optional(Schema.Array(Schema.String)),
    phoneNumber: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyGetAccountInfoRequest",
  });

export interface IdentitytoolkitRelyingpartyGetProjectConfigResponse {
  /** Reset password email template. */
  resetPasswordTemplate?: EmailTemplate;
  /** Change email template. */
  changeEmailTemplate?: EmailTemplate;
  /** Whether to use email sending provided by Firebear. */
  useEmailSending?: boolean;
  /** Authorized domains. */
  authorizedDomains?: ReadonlyArray<string>;
  dynamicLinksDomain?: string;
  /** Legacy reset password email template. */
  legacyResetPasswordTemplate?: EmailTemplate;
  /** Whether anonymous user is enabled. */
  enableAnonymousUser?: boolean;
  /** Verify email template. */
  verifyEmailTemplate?: EmailTemplate;
  /** Whether to allow password user sign in or sign up. */
  allowPasswordUser?: boolean;
  /** Project ID of the relying party. */
  projectId?: string;
  /** Browser API key, needed when making http request to Apiary. */
  apiKey?: string;
  /** OAuth2 provider configuration. */
  idpConfig?: ReadonlyArray<IdpConfig>;
}

export const IdentitytoolkitRelyingpartyGetProjectConfigResponse: Schema.Schema<IdentitytoolkitRelyingpartyGetProjectConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resetPasswordTemplate: Schema.optional(EmailTemplate),
    changeEmailTemplate: Schema.optional(EmailTemplate),
    useEmailSending: Schema.optional(Schema.Boolean),
    authorizedDomains: Schema.optional(Schema.Array(Schema.String)),
    dynamicLinksDomain: Schema.optional(Schema.String),
    legacyResetPasswordTemplate: Schema.optional(EmailTemplate),
    enableAnonymousUser: Schema.optional(Schema.Boolean),
    verifyEmailTemplate: Schema.optional(EmailTemplate),
    allowPasswordUser: Schema.optional(Schema.Boolean),
    projectId: Schema.optional(Schema.String),
    apiKey: Schema.optional(Schema.String),
    idpConfig: Schema.optional(Schema.Array(IdpConfig)),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartyGetProjectConfigResponse",
  });

export interface VerifyCustomTokenResponse {
  /** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
  expiresIn?: string;
  /** If idToken is STS id token, then this field will be refresh token. */
  refreshToken?: string;
  /** The GITKit token for authenticated user. */
  idToken?: string;
  /** The fixed string "identitytoolkit#VerifyCustomTokenResponse". */
  kind?: string;
  /** True if it's a new user sign-in, false if it's a returning user. */
  isNewUser?: boolean;
}

export const VerifyCustomTokenResponse: Schema.Schema<VerifyCustomTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiresIn: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    isNewUser: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VerifyCustomTokenResponse" });

export interface IdentitytoolkitRelyingpartySendVerificationCodeRequest {
  /** Receipt of successful app token validation with APNS. */
  iosReceipt?: string;
  /** The phone number to send the verification code to in E.164 format. */
  phoneNumber?: string;
  /** Secret delivered to iOS app via APNS. */
  iosSecret?: string;
  /** Recaptcha solution. */
  recaptchaToken?: string;
}

export const IdentitytoolkitRelyingpartySendVerificationCodeRequest: Schema.Schema<IdentitytoolkitRelyingpartySendVerificationCodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iosReceipt: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    iosSecret: Schema.optional(Schema.String),
    recaptchaToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "IdentitytoolkitRelyingpartySendVerificationCodeRequest",
  });

export type IdentitytoolkitRelyingpartyGetPublicKeysResponse = Record<
  string,
  string
>;
export const IdentitytoolkitRelyingpartyGetPublicKeysResponse: Schema.Schema<IdentitytoolkitRelyingpartyGetPublicKeysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.String,
  ) as any as Schema.Schema<IdentitytoolkitRelyingpartyGetPublicKeysResponse>;

export interface VerifyAssertionResponse {
  /** The ID token. */
  idToken?: string;
  /** The email returned by the IdP. NOTE: The federated login user may not own the email. */
  email?: string;
  /** The OAuth1 access token secret. */
  oauthTokenSecret?: string;
  /** The unique ID identifies the IdP account. */
  federatedId?: string;
  /** The last name of the user. */
  lastName?: string;
  /** The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email. */
  originalEmail?: string;
  /** The birth date of the IdP account. */
  dateOfBirth?: string;
  /** The timezone of the user. */
  timeZone?: string;
  /** URL for OTA app installation. */
  appInstallationUrl?: string;
  /** It's true if the email is recycled. */
  emailRecycled?: boolean;
  /** The action code. */
  action?: string;
  /** Whether need client to supply email to complete the federated login flow. */
  needEmail?: boolean;
  /** The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request. The domain part of the federated ID is returned. */
  providerId?: string;
  /** The language preference of the user. */
  language?: string;
  /** The nick name of the user. */
  nickName?: string;
  /** The OAuth2 authorization code. */
  oauthAuthorizationCode?: string;
  /** The lifetime in seconds of the OAuth2 access token. */
  oauthExpireIn?: number;
  /** The URI of the public accessible profiel picture. */
  photoUrl?: string;
  /** The opaque value used by the client to maintain context info between the authentication request and the IDP callback. */
  context?: string;
  /** The value is true if the IDP is also the email provider. It means the user owns the email. */
  emailVerified?: boolean;
  /** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
  expiresIn?: string;
  /** The full name of the user. */
  fullName?: string;
  /** The user approved request token for the OpenID OAuth extension. */
  oauthRequestToken?: string;
  /** Client error code. */
  errorMessage?: string;
  /** The scope for the OpenID OAuth extension. */
  oauthScope?: string;
  /** The OAuth2 access token. */
  oauthAccessToken?: string;
  /** The screen_name of a Twitter user or the login name at Github. */
  screenName?: string;
  /** The OIDC id token. */
  oauthIdToken?: string;
  /** When action is 'map', contains the idps which can be used for confirmation. */
  verifiedProvider?: ReadonlyArray<string>;
  /** Whether the assertion is from a non-trusted IDP and need account linking confirmation. */
  needConfirmation?: boolean;
  /** It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email. */
  inputEmail?: string;
  /** If idToken is STS id token, then this field will be refresh token. */
  refreshToken?: string;
  /** Raw IDP-returned user info. */
  rawUserInfo?: string;
  /** The RP local ID if it's already been mapped to the IdP account identified by the federated ID. */
  localId?: string;
  /** The display name of the user. */
  displayName?: string;
  /** The first name of the user. */
  firstName?: string;
  /** True if it's a new user sign-in, false if it's a returning user. */
  isNewUser?: boolean;
  /** The custom scheme used by mobile app. */
  appScheme?: string;
  /** The fixed string "identitytoolkit#VerifyAssertionResponse". */
  kind?: string;
}

export const VerifyAssertionResponse: Schema.Schema<VerifyAssertionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    oauthTokenSecret: Schema.optional(Schema.String),
    federatedId: Schema.optional(Schema.String),
    lastName: Schema.optional(Schema.String),
    originalEmail: Schema.optional(Schema.String),
    dateOfBirth: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    appInstallationUrl: Schema.optional(Schema.String),
    emailRecycled: Schema.optional(Schema.Boolean),
    action: Schema.optional(Schema.String),
    needEmail: Schema.optional(Schema.Boolean),
    providerId: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    nickName: Schema.optional(Schema.String),
    oauthAuthorizationCode: Schema.optional(Schema.String),
    oauthExpireIn: Schema.optional(Schema.Number),
    photoUrl: Schema.optional(Schema.String),
    context: Schema.optional(Schema.String),
    emailVerified: Schema.optional(Schema.Boolean),
    expiresIn: Schema.optional(Schema.String),
    fullName: Schema.optional(Schema.String),
    oauthRequestToken: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    oauthScope: Schema.optional(Schema.String),
    oauthAccessToken: Schema.optional(Schema.String),
    screenName: Schema.optional(Schema.String),
    oauthIdToken: Schema.optional(Schema.String),
    verifiedProvider: Schema.optional(Schema.Array(Schema.String)),
    needConfirmation: Schema.optional(Schema.Boolean),
    inputEmail: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
    rawUserInfo: Schema.optional(Schema.String),
    localId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    firstName: Schema.optional(Schema.String),
    isNewUser: Schema.optional(Schema.Boolean),
    appScheme: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "VerifyAssertionResponse" });

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

export interface DeleteAccountRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyDeleteAccountRequest;
}

export const DeleteAccountRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(IdentitytoolkitRelyingpartyDeleteAccountRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "deleteAccount", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountRelyingpartyRequest>;

export type DeleteAccountRelyingpartyResponse = DeleteAccountResponse;
export const DeleteAccountRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeleteAccountResponse;

export type DeleteAccountRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete user account. */
export const deleteAccountRelyingparty: API.OperationMethod<
  DeleteAccountRelyingpartyRequest,
  DeleteAccountRelyingpartyResponse,
  DeleteAccountRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountRelyingpartyRequest,
  output: DeleteAccountRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyPasswordRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyVerifyPasswordRequest;
}

export const VerifyPasswordRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartyVerifyPasswordRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "verifyPassword", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<VerifyPasswordRelyingpartyRequest>;

export type VerifyPasswordRelyingpartyResponse = VerifyPasswordResponse;
export const VerifyPasswordRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ VerifyPasswordResponse;

export type VerifyPasswordRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verifies the user entered password. */
export const verifyPasswordRelyingparty: API.OperationMethod<
  VerifyPasswordRelyingpartyRequest,
  VerifyPasswordRelyingpartyResponse,
  VerifyPasswordRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyPasswordRelyingpartyRequest,
  output: VerifyPasswordRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountInfoRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyGetAccountInfoRequest;
}

export const GetAccountInfoRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartyGetAccountInfoRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "getAccountInfo", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<GetAccountInfoRelyingpartyRequest>;

export type GetAccountInfoRelyingpartyResponse = GetAccountInfoResponse;
export const GetAccountInfoRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetAccountInfoResponse;

export type GetAccountInfoRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the account info. */
export const getAccountInfoRelyingparty: API.OperationMethod<
  GetAccountInfoRelyingpartyRequest,
  GetAccountInfoRelyingpartyResponse,
  GetAccountInfoRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountInfoRelyingpartyRequest,
  output: GetAccountInfoRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOobConfirmationCodeRelyingpartyRequest {
  /** Request body */
  body?: Relyingparty;
}

export const GetOobConfirmationCodeRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(Relyingparty).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "getOobConfirmationCode", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<GetOobConfirmationCodeRelyingpartyRequest>;

export type GetOobConfirmationCodeRelyingpartyResponse =
  GetOobConfirmationCodeResponse;
export const GetOobConfirmationCodeRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetOobConfirmationCodeResponse;

export type GetOobConfirmationCodeRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Get a code for user action confirmation. */
export const getOobConfirmationCodeRelyingparty: API.OperationMethod<
  GetOobConfirmationCodeRelyingpartyRequest,
  GetOobConfirmationCodeRelyingpartyResponse,
  GetOobConfirmationCodeRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOobConfirmationCodeRelyingpartyRequest,
  output: GetOobConfirmationCodeRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetPasswordRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyResetPasswordRequest;
}

export const ResetPasswordRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(IdentitytoolkitRelyingpartyResetPasswordRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "resetPassword", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResetPasswordRelyingpartyRequest>;

export type ResetPasswordRelyingpartyResponse = ResetPasswordResponse;
export const ResetPasswordRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ ResetPasswordResponse;

export type ResetPasswordRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reset password for a user. */
export const resetPasswordRelyingparty: API.OperationMethod<
  ResetPasswordRelyingpartyRequest,
  ResetPasswordRelyingpartyResponse,
  ResetPasswordRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetPasswordRelyingpartyRequest,
  output: ResetPasswordRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetAccountInfoRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartySetAccountInfoRequest;
}

export const SetAccountInfoRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartySetAccountInfoRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "setAccountInfo", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetAccountInfoRelyingpartyRequest>;

export type SetAccountInfoRelyingpartyResponse = SetAccountInfoResponse;
export const SetAccountInfoRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ SetAccountInfoResponse;

export type SetAccountInfoRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Set account info for a user. */
export const setAccountInfoRelyingparty: API.OperationMethod<
  SetAccountInfoRelyingpartyRequest,
  SetAccountInfoRelyingpartyResponse,
  SetAccountInfoRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetAccountInfoRelyingpartyRequest,
  output: SetAccountInfoRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SignOutUserRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartySignOutUserRequest;
}

export const SignOutUserRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(IdentitytoolkitRelyingpartySignOutUserRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "signOutUser", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SignOutUserRelyingpartyRequest>;

export type SignOutUserRelyingpartyResponse =
  IdentitytoolkitRelyingpartySignOutUserResponse;
export const SignOutUserRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ IdentitytoolkitRelyingpartySignOutUserResponse;

export type SignOutUserRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sign out user. */
export const signOutUserRelyingparty: API.OperationMethod<
  SignOutUserRelyingpartyRequest,
  SignOutUserRelyingpartyResponse,
  SignOutUserRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SignOutUserRelyingpartyRequest,
  output: SignOutUserRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SignupNewUserRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartySignupNewUserRequest;
}

export const SignupNewUserRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(IdentitytoolkitRelyingpartySignupNewUserRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "signupNewUser", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SignupNewUserRelyingpartyRequest>;

export type SignupNewUserRelyingpartyResponse = SignupNewUserResponse;
export const SignupNewUserRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ SignupNewUserResponse;

export type SignupNewUserRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Signup new user. */
export const signupNewUserRelyingparty: API.OperationMethod<
  SignupNewUserRelyingpartyRequest,
  SignupNewUserRelyingpartyResponse,
  SignupNewUserRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SignupNewUserRelyingpartyRequest,
  output: SignupNewUserRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetProjectConfigRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartySetProjectConfigRequest;
}

export const SetProjectConfigRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartySetProjectConfigRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "setProjectConfig", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetProjectConfigRelyingpartyRequest>;

export type SetProjectConfigRelyingpartyResponse =
  IdentitytoolkitRelyingpartySetProjectConfigResponse;
export const SetProjectConfigRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ IdentitytoolkitRelyingpartySetProjectConfigResponse;

export type SetProjectConfigRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Set project configuration. */
export const setProjectConfigRelyingparty: API.OperationMethod<
  SetProjectConfigRelyingpartyRequest,
  SetProjectConfigRelyingpartyResponse,
  SetProjectConfigRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetProjectConfigRelyingpartyRequest,
  output: SetProjectConfigRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadAccountRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyUploadAccountRequest;
}

export const UploadAccountRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(IdentitytoolkitRelyingpartyUploadAccountRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "uploadAccount", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UploadAccountRelyingpartyRequest>;

export type UploadAccountRelyingpartyResponse = UploadAccountResponse;
export const UploadAccountRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadAccountResponse;

export type UploadAccountRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Batch upload existing user accounts. */
export const uploadAccountRelyingparty: API.OperationMethod<
  UploadAccountRelyingpartyRequest,
  UploadAccountRelyingpartyResponse,
  UploadAccountRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadAccountRelyingpartyRequest,
  output: UploadAccountRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DownloadAccountRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyDownloadAccountRequest;
}

export const DownloadAccountRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartyDownloadAccountRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "downloadAccount", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DownloadAccountRelyingpartyRequest>;

export type DownloadAccountRelyingpartyResponse = DownloadAccountResponse;
export const DownloadAccountRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ DownloadAccountResponse;

export type DownloadAccountRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Batch download user accounts. */
export const downloadAccountRelyingparty: API.OperationMethod<
  DownloadAccountRelyingpartyRequest,
  DownloadAccountRelyingpartyResponse,
  DownloadAccountRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadAccountRelyingpartyRequest,
  output: DownloadAccountRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetRecaptchaParamRelyingpartyRequest {}

export const GetRecaptchaParamRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "getRecaptchaParam" }),
    svc,
  ) as unknown as Schema.Schema<GetRecaptchaParamRelyingpartyRequest>;

export type GetRecaptchaParamRelyingpartyResponse = GetRecaptchaParamResponse;
export const GetRecaptchaParamRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetRecaptchaParamResponse;

export type GetRecaptchaParamRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get recaptcha secure param. */
export const getRecaptchaParamRelyingparty: API.OperationMethod<
  GetRecaptchaParamRelyingpartyRequest,
  GetRecaptchaParamRelyingpartyResponse,
  GetRecaptchaParamRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRecaptchaParamRelyingpartyRequest,
  output: GetRecaptchaParamRelyingpartyResponse,
  errors: [NotFound, Forbidden],
}));

export interface SendVerificationCodeRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartySendVerificationCodeRequest;
}

export const SendVerificationCodeRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartySendVerificationCodeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "sendVerificationCode", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SendVerificationCodeRelyingpartyRequest>;

export type SendVerificationCodeRelyingpartyResponse =
  IdentitytoolkitRelyingpartySendVerificationCodeResponse;
export const SendVerificationCodeRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ IdentitytoolkitRelyingpartySendVerificationCodeResponse;

export type SendVerificationCodeRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Send SMS verification code. */
export const sendVerificationCodeRelyingparty: API.OperationMethod<
  SendVerificationCodeRelyingpartyRequest,
  SendVerificationCodeRelyingpartyResponse,
  SendVerificationCodeRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendVerificationCodeRelyingpartyRequest,
  output: SendVerificationCodeRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyPhoneNumberRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest;
}

export const VerifyPhoneNumberRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "verifyPhoneNumber", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<VerifyPhoneNumberRelyingpartyRequest>;

export type VerifyPhoneNumberRelyingpartyResponse =
  IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse;
export const VerifyPhoneNumberRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse;

export type VerifyPhoneNumberRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verifies ownership of a phone number and creates/updates the user account accordingly. */
export const verifyPhoneNumberRelyingparty: API.OperationMethod<
  VerifyPhoneNumberRelyingpartyRequest,
  VerifyPhoneNumberRelyingpartyResponse,
  VerifyPhoneNumberRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyPhoneNumberRelyingpartyRequest,
  output: VerifyPhoneNumberRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyAssertionRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyVerifyAssertionRequest;
}

export const VerifyAssertionRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartyVerifyAssertionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "verifyAssertion", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<VerifyAssertionRelyingpartyRequest>;

export type VerifyAssertionRelyingpartyResponse = VerifyAssertionResponse;
export const VerifyAssertionRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ VerifyAssertionResponse;

export type VerifyAssertionRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verifies the assertion returned by the IdP. */
export const verifyAssertionRelyingparty: API.OperationMethod<
  VerifyAssertionRelyingpartyRequest,
  VerifyAssertionRelyingpartyResponse,
  VerifyAssertionRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyAssertionRelyingpartyRequest,
  output: VerifyAssertionRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyCustomTokenRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;
}

export const VerifyCustomTokenRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartyVerifyCustomTokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "verifyCustomToken", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<VerifyCustomTokenRelyingpartyRequest>;

export type VerifyCustomTokenRelyingpartyResponse = VerifyCustomTokenResponse;
export const VerifyCustomTokenRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ VerifyCustomTokenResponse;

export type VerifyCustomTokenRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verifies the developer asserted ID token. */
export const verifyCustomTokenRelyingparty: API.OperationMethod<
  VerifyCustomTokenRelyingpartyRequest,
  VerifyCustomTokenRelyingpartyResponse,
  VerifyCustomTokenRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyCustomTokenRelyingpartyRequest,
  output: VerifyCustomTokenRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectConfigRelyingpartyRequest {
  /** Delegated GCP project number of the request. */
  delegatedProjectNumber?: string;
  /** GCP project number of the request. */
  projectNumber?: string;
}

export const GetProjectConfigRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delegatedProjectNumber: Schema.optional(Schema.String).pipe(
      T.HttpQuery("delegatedProjectNumber"),
    ),
    projectNumber: Schema.optional(Schema.String).pipe(
      T.HttpQuery("projectNumber"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "getProjectConfig" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectConfigRelyingpartyRequest>;

export type GetProjectConfigRelyingpartyResponse =
  IdentitytoolkitRelyingpartyGetProjectConfigResponse;
export const GetProjectConfigRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ IdentitytoolkitRelyingpartyGetProjectConfigResponse;

export type GetProjectConfigRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get project configuration. */
export const getProjectConfigRelyingparty: API.OperationMethod<
  GetProjectConfigRelyingpartyRequest,
  GetProjectConfigRelyingpartyResponse,
  GetProjectConfigRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectConfigRelyingpartyRequest,
  output: GetProjectConfigRelyingpartyResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateAuthUriRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyCreateAuthUriRequest;
}

export const CreateAuthUriRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(IdentitytoolkitRelyingpartyCreateAuthUriRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "createAuthUri", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateAuthUriRelyingpartyRequest>;

export type CreateAuthUriRelyingpartyResponse = CreateAuthUriResponse;
export const CreateAuthUriRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateAuthUriResponse;

export type CreateAuthUriRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates the URI used by the IdP to authenticate the user. */
export const createAuthUriRelyingparty: API.OperationMethod<
  CreateAuthUriRelyingpartyRequest,
  CreateAuthUriRelyingpartyResponse,
  CreateAuthUriRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAuthUriRelyingpartyRequest,
  output: CreateAuthUriRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EmailLinkSigninRelyingpartyRequest {
  /** Request body */
  body?: IdentitytoolkitRelyingpartyEmailLinkSigninRequest;
}

export const EmailLinkSigninRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      IdentitytoolkitRelyingpartyEmailLinkSigninRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "emailLinkSignin", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EmailLinkSigninRelyingpartyRequest>;

export type EmailLinkSigninRelyingpartyResponse = EmailLinkSigninResponse;
export const EmailLinkSigninRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ EmailLinkSigninResponse;

export type EmailLinkSigninRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reset password for a user. */
export const emailLinkSigninRelyingparty: API.OperationMethod<
  EmailLinkSigninRelyingpartyRequest,
  EmailLinkSigninRelyingpartyResponse,
  EmailLinkSigninRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EmailLinkSigninRelyingpartyRequest,
  output: EmailLinkSigninRelyingpartyResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPublicKeysRelyingpartyRequest {}

export const GetPublicKeysRelyingpartyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "publicKeys" }),
    svc,
  ) as unknown as Schema.Schema<GetPublicKeysRelyingpartyRequest>;

export type GetPublicKeysRelyingpartyResponse =
  IdentitytoolkitRelyingpartyGetPublicKeysResponse;
export const GetPublicKeysRelyingpartyResponse =
  /*@__PURE__*/ /*#__PURE__*/ IdentitytoolkitRelyingpartyGetPublicKeysResponse;

export type GetPublicKeysRelyingpartyError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get token signing public key. */
export const getPublicKeysRelyingparty: API.OperationMethod<
  GetPublicKeysRelyingpartyRequest,
  GetPublicKeysRelyingpartyResponse,
  GetPublicKeysRelyingpartyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPublicKeysRelyingpartyRequest,
  output: GetPublicKeysRelyingpartyResponse,
  errors: [NotFound, Forbidden],
}));
