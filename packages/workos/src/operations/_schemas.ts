import * as Schema from "effect/Schema";
import { SensitiveOutputString } from "../sensitive.ts";

export const AuditLogActionJsonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.suspend(() => AuditLogSchemaJsonSchema)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const AuditLogSchemaJsonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    actor: Schema.optional(
      Schema.Struct({
        metadata: Schema.Record(Schema.String, Schema.Unknown),
      }),
    ),
    targets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.String,
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
        }),
      ),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
  });
export const AuditLogSchemaActorDtoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Unknown),
  });
export const AuditLogSchemaTargetDtoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Unknown),
  });
export const AuditLogEventDtoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    action: Schema.optional(Schema.String),
    occurred_at: Schema.optional(Schema.String),
    actor: Schema.optional(Schema.suspend(() => AuditLogEventActorDtoSchema)),
    targets: Schema.optional(
      Schema.Array(Schema.suspend(() => AuditLogEventTargetDtoSchema)),
    ),
    context: Schema.optional(
      Schema.suspend(() => AuditLogEventContextDtoSchema),
    ),
    metadata: Schema.optional(Schema.Unknown),
    version: Schema.optional(Schema.Number),
  },
);
export const AuditLogEventActorDtoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Unknown),
  });
export const AuditLogEventTargetDtoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Unknown),
  });
export const AuditLogEventContextDtoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    user_agent: Schema.optional(Schema.String),
  });
export const AuthenticationChallengeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    authentication_factor_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const UserObjectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  first_name: Schema.optional(Schema.String),
  last_name: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
export const UserConsentOptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    claim: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    choices: Schema.optional(
      Schema.Array(
        Schema.Struct({
          value: Schema.optional(Schema.String),
          label: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export const AuthorizationResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    organization_id: Schema.optional(Schema.String),
    parent_resource_id: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.optional(Schema.String),
    external_id: Schema.optional(Schema.String),
    resource_type_slug: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const AuthorizationPermissionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    system: Schema.optional(Schema.Boolean),
    resource_type_slug: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const RoleAssignmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  role: Schema.optional(Schema.suspend(() => SlimRoleSchema)),
  resource: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      external_id: Schema.String,
      resource_type_slug: Schema.String,
    }),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const SlimRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  slug: Schema.optional(Schema.String),
});
export const RoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  slug: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  type: Schema.optional(
    Schema.Literals(["EnvironmentRole", "OrganizationRole"]),
  ),
  resource_type_slug: Schema.optional(Schema.String),
  permissions: Schema.optional(Schema.Array(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const ConnectApplicationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    client_id: Schema.String,
    description: Schema.NullOr(Schema.String),
    name: Schema.String,
    scopes: Schema.Array(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export const RedirectUriDtoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  default: Schema.optional(Schema.NullOr(Schema.Boolean)),
});
export const ConnectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.String),
  connection_type: Schema.optional(
    Schema.Literals([
      "Pending",
      "ADFSSAML",
      "AdpOidc",
      "AppleOAuth",
      "Auth0Migration",
      "Auth0SAML",
      "AzureSAML",
      "BitbucketOAuth",
      "CasSAML",
      "ClassLinkSAML",
      "CleverOIDC",
      "CloudflareSAML",
      "CyberArkSAML",
      "DiscordOAuth",
      "DuoSAML",
      "EntraIdOIDC",
      "GenericOIDC",
      "GenericSAML",
      "GitHubOAuth",
      "GitLabOAuth",
      "GoogleOAuth",
      "GoogleOIDC",
      "GoogleSAML",
      "IntuitOAuth",
      "JumpCloudSAML",
      "KeycloakSAML",
      "LastPassSAML",
      "LinkedInOAuth",
      "LoginGovOidc",
      "MagicLink",
      "MicrosoftOAuth",
      "MiniOrangeSAML",
      "NetIqSAML",
      "OktaOIDC",
      "OktaSAML",
      "OneLoginSAML",
      "OracleSAML",
      "PingFederateSAML",
      "PingOneSAML",
      "RipplingSAML",
      "SalesforceSAML",
      "ShibbolethGenericSAML",
      "ShibbolethSAML",
      "SimpleSamlPhpSAML",
      "SalesforceOAuth",
      "SlackOAuth",
      "TestIdp",
      "VercelMarketplaceOAuth",
      "VercelOAuth",
      "VMwareSAML",
      "XeroOAuth",
    ]),
  ),
  name: Schema.optional(Schema.String),
  state: Schema.optional(
    Schema.Literals([
      "requires_type",
      "draft",
      "active",
      "validating",
      "inactive",
      "deleting",
    ]),
  ),
  status: Schema.optional(Schema.Literals(["linked", "unlinked"])),
  domains: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
        object: Schema.String,
        domain: Schema.String,
      }),
    ),
  ),
  options: Schema.optional(
    Schema.Struct({
      signing_cert: Schema.NullOr(Schema.String),
    }),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const DirectorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.String),
  external_key: Schema.optional(Schema.String),
  type: Schema.optional(
    Schema.Literals([
      "azure scim v2.0",
      "bamboohr",
      "breathe hr",
      "cezanne hr",
      "cyberark scim v2.0",
      "fourth hr",
      "generic scim v2.0",
      "gsuite directory",
      "hibob",
      "sailpoint scim v2.0",
      "jump cloud scim v2.0",
      "okta scim v2.0",
      "onelogin scim v2.0",
      "people hr",
      "personio",
      "pingfederate scim v2.0",
      "rippling scim v2.0",
      "s3",
      "sftp",
      "sftp workday",
      "workday",
    ]),
  ),
  state: Schema.optional(
    Schema.Literals([
      "linked",
      "validating",
      "invalid_credentials",
      "unlinked",
      "deleting",
    ]),
  ),
  name: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  metadata: Schema.optional(
    Schema.Struct({
      users: Schema.Struct({
        active: Schema.Number,
        inactive: Schema.Number,
      }),
      groups: Schema.Number,
    }),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const DirectoryGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  idp_id: Schema.optional(Schema.String),
  directory_id: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  raw_attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const DirectoryUserWithGroupsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    directory_id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    idp_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.NullOr(Schema.String)),
    last_name: Schema.optional(Schema.NullOr(Schema.String)),
    emails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          primary: Schema.optional(Schema.Boolean),
          type: Schema.optional(Schema.String),
          value: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    job_title: Schema.optional(Schema.NullOr(Schema.String)),
    username: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.optional(
      Schema.Literals(["active", "suspended", "inactive"]),
    ),
    raw_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    custom_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role: Schema.optional(Schema.suspend(() => SlimRoleSchema)),
    roles: Schema.optional(Schema.Array(Schema.suspend(() => SlimRoleSchema))),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    groups: Schema.optional(
      Schema.Array(Schema.suspend(() => DirectoryGroupSchema)),
    ),
  });
export const EventSchemaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.String,
  id: Schema.String,
  event: Schema.String,
  data: Schema.Record(Schema.String, Schema.Unknown),
  created_at: Schema.String,
  context: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export const FlagSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  owner: Schema.optional(Schema.Unknown),
  tags: Schema.optional(Schema.Array(Schema.String)),
  enabled: Schema.optional(Schema.Boolean),
  default_value: Schema.optional(Schema.Boolean),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const OrganizationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  domains: Schema.optional(
    Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        organization_id: Schema.String,
        domain: Schema.String,
        state: Schema.optional(
          Schema.Literals([
            "failed",
            "legacy_verified",
            "pending",
            "unverified",
            "verified",
          ]),
        ),
        verification_prefix: Schema.optional(Schema.String),
        verification_token: Schema.optional(Schema.String),
        verification_strategy: Schema.optional(
          Schema.Literals(["dns", "manual"]),
        ),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  ),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  external_id: Schema.optional(Schema.NullOr(Schema.String)),
  stripe_customer_id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  allow_profiles_outside_organization: Schema.optional(Schema.Boolean),
});
export const OrganizationDomainDataDtoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    state: Schema.optional(Schema.Literals(["pending", "verified"])),
  });
export const ApiKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  owner: Schema.optional(
    Schema.Struct({
      type: Schema.String,
      id: Schema.String,
    }),
  ),
  name: Schema.optional(Schema.String),
  obfuscated_value: Schema.optional(Schema.String),
  last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
  permissions: Schema.optional(Schema.Array(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const GroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const IntentOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sso: Schema.optional(Schema.suspend(() => SsoIntentOptionsSchema)),
  domain_verification: Schema.optional(
    Schema.suspend(() => DomainVerificationIntentOptionsSchema),
  ),
});
export const SsoIntentOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    bookmark_slug: Schema.optional(Schema.String),
    provider_type: Schema.optional(Schema.String),
  },
);
export const DomainVerificationIntentOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain_name: Schema.optional(Schema.String),
  });
export const ProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.NullOr(Schema.String)),
  connection_id: Schema.optional(Schema.String),
  connection_type: Schema.optional(
    Schema.Literals([
      "Pending",
      "ADFSSAML",
      "AdpOidc",
      "AppleOAuth",
      "Auth0Migration",
      "Auth0SAML",
      "AzureSAML",
      "BitbucketOAuth",
      "CasSAML",
      "ClassLinkSAML",
      "CleverOIDC",
      "CloudflareSAML",
      "CyberArkSAML",
      "DiscordOAuth",
      "DuoSAML",
      "EntraIdOIDC",
      "GenericOIDC",
      "GenericSAML",
      "GitHubOAuth",
      "GitLabOAuth",
      "GoogleOAuth",
      "GoogleOIDC",
      "GoogleSAML",
      "IntuitOAuth",
      "JumpCloudSAML",
      "KeycloakSAML",
      "LastPassSAML",
      "LinkedInOAuth",
      "LoginGovOidc",
      "MagicLink",
      "MicrosoftOAuth",
      "MiniOrangeSAML",
      "NetIqSAML",
      "OktaOIDC",
      "OktaSAML",
      "OneLoginSAML",
      "OracleSAML",
      "PingFederateSAML",
      "PingOneSAML",
      "RipplingSAML",
      "SalesforceSAML",
      "ShibbolethGenericSAML",
      "ShibbolethSAML",
      "SimpleSamlPhpSAML",
      "SalesforceOAuth",
      "SlackOAuth",
      "TestIdp",
      "VercelMarketplaceOAuth",
      "VercelOAuth",
      "VMwareSAML",
      "XeroOAuth",
    ]),
  ),
  idp_id: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  first_name: Schema.optional(Schema.NullOr(Schema.String)),
  last_name: Schema.optional(Schema.NullOr(Schema.String)),
  role: Schema.optional(Schema.Unknown),
  roles: Schema.optional(Schema.Unknown),
  groups: Schema.optional(Schema.Array(Schema.String)),
  custom_attributes: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  raw_attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export const UserlandUserSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  first_name: Schema.optional(Schema.NullOr(Schema.String)),
  last_name: Schema.optional(Schema.NullOr(Schema.String)),
  profile_picture_url: Schema.optional(Schema.NullOr(Schema.String)),
  email: Schema.optional(Schema.String),
  email_verified: Schema.optional(Schema.Boolean),
  external_id: Schema.optional(Schema.NullOr(Schema.String)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  last_sign_in_at: Schema.optional(Schema.NullOr(Schema.String)),
  locale: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const UserlandUserInviteSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals(["pending", "accepted", "expired", "revoked"]),
    ),
    accepted_at: Schema.optional(Schema.NullOr(Schema.String)),
    revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
    expires_at: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    inviter_user_id: Schema.optional(Schema.NullOr(Schema.String)),
    accepted_user_id: Schema.optional(Schema.NullOr(Schema.String)),
    role_slug: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    accept_invitation_url: Schema.optional(Schema.String),
  });
export const UserlandUserOrganizationMembershipSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["active", "inactive", "pending"])),
    directory_managed: Schema.optional(Schema.Boolean),
    organization_name: Schema.optional(Schema.String),
    custom_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    role: Schema.optional(Schema.suspend(() => SlimRoleSchema)),
  });
export const AuthenticationFactorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["generic_otp", "sms", "totp", "webauthn"]),
    ),
    user_id: Schema.optional(Schema.String),
    sms: Schema.optional(
      Schema.Struct({
        phone_number: Schema.String,
      }),
    ),
    totp: Schema.optional(
      Schema.Struct({
        issuer: Schema.String,
        user: Schema.String,
      }),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const AuthenticationFactorEnrolledSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["generic_otp", "sms", "totp", "webauthn"]),
    ),
    user_id: Schema.optional(Schema.String),
    sms: Schema.optional(
      Schema.Struct({
        phone_number: Schema.String,
      }),
    ),
    totp: Schema.optional(
      Schema.Struct({
        issuer: Schema.String,
        user: Schema.String,
        secret: SensitiveOutputString,
        qr_code: Schema.String,
        uri: Schema.String,
      }),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const WebhookEndpointJsonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    endpoint_url: Schema.optional(Schema.String),
    secret: Schema.optional(SensitiveOutputString),
    status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
    events: Schema.optional(Schema.Array(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
