---
title: update-a-team
product: vercel
url: /docs/rest-api/teams/update-a-team
canonical_url: "https://vercel.com/docs/rest-api/teams/update-a-team"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-a-team on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update a Team

```http
PATCH /v2/teams/{teamId}
```

Update the information of a Team specified by the `teamId` parameter. The request body should contain the information that will be updated on the Team.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "avatar": {
      "type": "string",
      "description": "The hash value of an uploaded image.",
      "format": "regex"
    },
    "description": {
      "type": "string",
      "description": "A short text that describes the team.",
      "maxLength": 140
    },
    "emailDomain": {
      "type": "string",
      "format": "regex",
      "nullable": true
    },
    "name": {
      "type": "string",
      "description": "The name of the team.",
      "maxLength": 256
    },
    "previewDeploymentSuffix": {
      "type": "string",
      "description": "Suffix that will be used for all preview deployments.",
      "format": "hostname",
      "nullable": true
    },
    "regenerateInviteCode": {
      "type": "boolean",
      "description": "Create a new invite code and replace the current one."
    },
    "saml": {
      "type": "object",
      "properties": {
        "enforced": {
          "type": "boolean",
          "description": "Require that members of the team use SAML Single Sign-On."
        },
        "roles": {
          "type": "object",
          "description": "Directory groups to role or access group mappings.",
          "additionalProperties": {}
        }
      }
    },
    "slug": {
      "type": "string",
      "description": "A new slug for the team."
    },
    "enablePreviewFeedback": {
      "type": "string",
      "description": "Enable preview toolbar: one of on, off or default."
    },
    "enableProductionFeedback": {
      "type": "string",
      "description": "Enable production toolbar: one of on, off or default."
    },
    "sensitiveEnvironmentVariablePolicy": {
      "type": "string",
      "description": "Sensitive environment variable policy: one of on, off or default."
    },
    "remoteCaching": {
      "type": "object",
      "description": "Whether or not remote caching is enabled for the team",
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Enable or disable remote caching for the team."
        }
      }
    },
    "hideIpAddresses": {
      "type": "boolean",
      "description": "Display or hide IP addresses in Monitoring queries."
    },
    "hideIpAddressesInLogDrains": {
      "type": "boolean",
      "description": "Display or hide IP addresses in Log Drains."
    },
    "dpAccessRequestsMode": {
      "type": "string",
      "description": "Controls who can request access to protected deployments.",
      "enum": [
        "all",
        "none",
        "email-domain"
      ]
    },
    "requireVerifiedCommits": {
      "type": "boolean",
      "description": "When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created."
    },
    "disableRepositoryDispatchEvents": {
      "type": "boolean",
      "description": "Default for projects in the team. When `true`, projects in this team will not emit GitHub repository-dispatch events on deployment events unless the project explicitly overrides this setting."
    },
    "defaultDeploymentProtection": {
      "type": "object",
      "description": "Default deployment protection settings for new projects.",
      "properties": {
        "passwordProtection": {
          "type": "object",
          "description": "Allows to protect project deployments with a password",
          "nullable": true,
          "required": [
            "deploymentType"
          ],
          "properties": {
            "deploymentType": {
              "type": "string",
              "description": "Specify if the password will apply to every Deployment Target or just Preview",
              "enum": [
                "all",
                "preview",
                "prod_deployment_urls_and_all_previews",
                "all_except_custom_domains"
              ]
            },
            "password": {
              "type": "string",
              "description": "The password that will be used to protect Project Deployments",
              "maxLength": 72,
              "nullable": true
            }
          }
        },
        "ssoProtection": {
          "type": "object",
          "description": "Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team",
          "nullable": true,
          "required": [
            "deploymentType"
          ],
          "properties": {
            "deploymentType": {
              "type": "string",
              "description": "Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview",
              "enum": [
                "all",
                "preview",
                "prod_deployment_urls_and_all_previews",
                "all_except_custom_domains"
              ],
              "default": "preview"
            }
          }
        }
      }
    },
    "defaultPassport": {
      "type": "object",
      "description": "Default Passport configuration for new projects.",
      "nullable": true,
      "required": [
        "connectorId"
      ],
      "properties": {
        "connectorId": {
          "type": "string"
        },
        "deploymentType": {
          "type": "string",
          "enum": [
            "all",
            "preview",
            "prod_deployment_urls_and_all_previews",
            "all_except_custom_domains"
          ],
          "default": "all"
        }
      }
    },
    "defaultExpirationSettings": {
      "type": "object",
      "properties": {
        "expiration": {
          "type": "string",
          "description": "The time period to keep non-production deployments for",
          "enum": [
            "3y",
            "2y",
            "1y",
            "6m",
            "3m",
            "2m",
            "1m",
            "2w",
            "1w",
            "1d",
            "unlimited"
          ]
        },
        "expirationProduction": {
          "type": "string",
          "description": "The time period to keep production deployments for",
          "enum": [
            "3y",
            "2y",
            "1y",
            "6m",
            "3m",
            "2m",
            "1m",
            "2w",
            "1w",
            "1d",
            "unlimited"
          ]
        },
        "expirationCanceled": {
          "type": "string",
          "description": "The time period to keep canceled deployments for",
          "enum": [
            "1y",
            "6m",
            "3m",
            "2m",
            "1m",
            "2w",
            "1w",
            "1d",
            "unlimited"
          ]
        },
        "expirationErrored": {
          "type": "string",
          "description": "The time period to keep errored deployments for",
          "enum": [
            "1y",
            "6m",
            "3m",
            "2m",
            "1m",
            "2w",
            "1w",
            "1d",
            "unlimited"
          ]
        }
      }
    },
    "deploymentPolicy": {
      "anyOf": [
        {
          "type": "object",
          "description": "Composable deployment-time policy. Each rule type holds a list of rules, one per environment scope.",
          "properties": {
            "gitSources": {},
            "deploymentSources": {}
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "strictDeploymentProtectionSettings": {
      "type": "object",
      "description": "When enabled, deployment protection settings require stricter permissions (owner-only).",
      "required": [
        "enabled"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Enable or disable strict deployment protection settings."
        }
      }
    },
    "strictShareableLinks": {
      "type": "object",
      "description": "When enabled, creating shareable links requires Owner role.",
      "required": [
        "enabled"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Enable or disable requiring Owner role to create shareable links."
        }
      }
    },
    "strictPasswordProtectionSettings": {
      "type": "object",
      "description": "When enabled, adding, changing, or removing project password protection requires Owner role.",
      "required": [
        "enabled"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Enable or disable requiring Owner role to change project password protection."
        }
      }
    },
    "nsnbConfig": {
      "anyOf": [
        {
          "type": "object",
          "description": "NSNB configuration for the team.",
          "required": [
            "preference"
          ],
          "properties": {
            "preference": {
              "type": "string",
              "description": "The NSNB preference for the team.",
              "enum": [
                "auto-approval",
                "manual-approval",
                "block"
              ]
            }
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "defaultProjectJobs": {
      "oneOf": [
        {
          "type": "object",
          "description": "Default job configuration applied to new projects created in this team.",
          "properties": {
            "lint": {
              "type": "object",
              "required": [
                "targets"
              ]
            },
            "typecheck": {
              "type": "object",
              "required": [
                "targets"
              ]
            }
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "resourceConfig": {
      "type": "object",
      "description": "Resource configuration for the team.",
      "properties": {
        "buildMachine": {
          "type": "object",
          "description": "Build machine configuration.",
          "properties": {
            "default": {
              "type": "string",
              "description": "Default build machine type for new builds: basic, standard, enhanced, turbo, or elastic.",
              "enum": [
                "basic",
                "enhanced",
                "turbo",
                "standard",
                "elastic"
              ]
            }
          }
        }
      }
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "Data representing a Team.",
  "required": [
    "avatar",
    "billing",
    "createdAt",
    "creatorId",
    "description",
    "id",
    "name",
    "slug",
    "stagingPrefix",
    "updatedAt"
  ],
  "properties": {
    "connect": {
      "type": "object",
      "properties": {
        "enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "creatorId": {
      "type": "string",
      "description": "The ID of the user who created the Team."
    },
    "updatedAt": {
      "type": "number",
      "description": "Timestamp (in milliseconds) of when the Team was last updated."
    },
    "emailDomain": {
      "type": "string",
      "description": "Hostname that'll be matched with emails on sign-up to automatically join the Team.",
      "nullable": true
    },
    "saml": {
      "type": "object",
      "description": "When \"Single Sign-On (SAML)\" is configured, this object contains information regarding the configuration of the Identity Provider (IdP).",
      "required": [
        "enforced"
      ],
      "properties": {
        "connection": {
          "type": "object",
          "description": "Information for the SAML Single Sign-On configuration.",
          "required": [
            "connectedAt",
            "state",
            "status",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "The Identity Provider \"type\", for example Okta."
            },
            "state": {
              "type": "string",
              "description": "Current state of the connection."
            },
            "connectedAt": {
              "type": "number",
              "description": "Timestamp (in milliseconds) of when the configuration was connected."
            },
            "lastReceivedWebhookEvent": {
              "type": "number",
              "description": "Timestamp (in milliseconds) of when the last webhook event was received from WorkOS."
            },
            "lastSyncedAt": {
              "type": "number",
              "description": "Timestamp (in milliseconds) of when the last directory sync was performed."
            },
            "syncState": {
              "type": "string",
              "description": "Controls whether directory sync events are processed. - 'SETUP': Directory connected but role mappings not yet configured. Events are acknowledged but not processed. - 'ACTIVE': Fully configured. Events are processed normally. - undefined: Legacy directory (pre-feature), treat as 'ACTIVE' for backwards compatibility.",
              "enum": [
                "ACTIVE",
                "SETUP"
              ]
            },
            "status": {
              "type": "string"
            }
          }
        },
        "directory": {
          "type": "object",
          "description": "Information for the Directory Sync configuration.",
          "required": [
            "connectedAt",
            "state",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "The Identity Provider \"type\", for example Okta."
            },
            "state": {
              "type": "string",
              "description": "Current state of the connection."
            },
            "connectedAt": {
              "type": "number",
              "description": "Timestamp (in milliseconds) of when the configuration was connected."
            },
            "lastReceivedWebhookEvent": {
              "type": "number",
              "description": "Timestamp (in milliseconds) of when the last webhook event was received from WorkOS."
            },
            "lastSyncedAt": {
              "type": "number",
              "description": "Timestamp (in milliseconds) of when the last directory sync was performed."
            },
            "syncState": {
              "type": "string",
              "description": "Controls whether directory sync events are processed. - 'SETUP': Directory connected but role mappings not yet configured. Events are acknowledged but not processed. - 'ACTIVE': Fully configured. Events are processed normally. - undefined: Legacy directory (pre-feature), treat as 'ACTIVE' for backwards compatibility.",
              "enum": [
                "ACTIVE",
                "SETUP"
              ]
            }
          }
        },
        "enforced": {
          "type": "boolean",
          "description": "When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider.",
          "enum": [
            false,
            true
          ]
        },
        "defaultRedirectUri": {
          "type": "string",
          "description": "The default redirect URI to use after successful SAML authentication.",
          "enum": [
            "v0.app",
            "v0.dev",
            "vercel.com"
          ]
        },
        "roles": {
          "type": "object",
          "description": "When \"Directory Sync\" is configured, this object contains a mapping of which Directory Group (by ID) should be assigned to which Vercel Team \"role\".",
          "additionalProperties": {}
        }
      }
    },
    "inviteCode": {
      "type": "string",
      "description": "Code that can be used to join this Team. Only visible to Team owners."
    },
    "billing": {
      "type": "object",
      "description": "The team's billing plan.",
      "nullable": true,
      "required": [
        "plan"
      ],
      "properties": {
        "plan": {
          "type": "string",
          "enum": [
            "enterprise",
            "hobby",
            "pro"
          ]
        }
      }
    },
    "description": {
      "type": "string",
      "description": "A short description of the Team.",
      "nullable": true
    },
    "defaultRoles": {
      "type": "object",
      "description": "Default roles for the team.",
      "properties": {
        "teamRoles": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "BILLING",
              "CONTRIBUTOR",
              "DEVELOPER",
              "MEMBER",
              "OWNER",
              "SECURITY",
              "VIEWER",
              "VIEWER_FOR_PLUS"
            ]
          }
        },
        "teamPermissions": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "AiGatewayApiKeyOwnedBySelf",
              "AiGatewayBudgetManager",
              "AiGatewayCredits",
              "AiGatewaySettings",
              "ConnectorManager",
              "CreateProject",
              "EnvVariableManager",
              "EnvironmentManager",
              "FullProductionDeployment",
              "IntegrationManager",
              "OrgAdmin",
              "OrgViewer",
              "UsageViewer",
              "V0Builder",
              "V0Chatter",
              "V0Viewer"
            ]
          }
        }
      }
    },
    "stagingPrefix": {
      "type": "string",
      "description": "The prefix that is prepended to automatic aliases."
    },
    "resourceConfig": {
      "type": "object",
      "properties": {
        "concurrentBuilds": {
          "type": "number",
          "description": "The total amount of concurrent builds that can be used."
        },
        "elasticConcurrencyEnabled": {
          "type": "boolean",
          "description": "Whether every build for this team / user has elastic concurrency enabled automatically.",
          "enum": [
            false,
            true
          ]
        },
        "edgeConfigSize": {
          "type": "number",
          "description": "The maximum size in kilobytes of an Edge Config. Only specified if a custom limit is set."
        },
        "edgeConfigs": {
          "type": "number",
          "description": "The maximum number of edge configs an account can create."
        },
        "kvDatabases": {
          "type": "number",
          "description": "The maximum number of kv databases an account can create."
        },
        "blobStores": {
          "type": "number",
          "description": "The maximum number of blob stores an account can create."
        },
        "postgresDatabases": {
          "type": "number",
          "description": "The maximum number of postgres databases an account can create."
        },
        "customEnvironmentsPerProject": {
          "type": "number",
          "description": "The maximum number of custom environments allowed per project."
        },
        "serverlessFunctionMaxMemorySize": {
          "type": "number",
          "description": "The maximum memory size (in MB) for a serverless function. Only specified if a custom limit is set."
        },
        "buildEntitlements": {
          "type": "object",
          "properties": {
            "enhancedBuilds": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "buildMachine": {
          "type": "object",
          "description": "Build machine configuration",
          "properties": {
            "default": {
              "type": "string",
              "description": "Default build machine type for new builds",
              "enum": [
                "basic",
                "elastic",
                "enhanced",
                "standard",
                "turbo"
              ]
            }
          }
        }
      }
    },
    "previewDeploymentSuffix": {
      "type": "string",
      "description": "The hostname that is current set as preview deployment suffix.",
      "nullable": true
    },
    "platform": {
      "type": "boolean",
      "description": "Whether the team is a platform team.",
      "enum": [
        false,
        true
      ]
    },
    "disableHardAutoBlocks": {
      "oneOf": [
        {
          "type": "number"
        },
        {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      ]
    },
    "remoteCaching": {
      "type": "object",
      "description": "Is remote caching enabled for this team",
      "properties": {
        "enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "defaultDeploymentProtection": {
      "type": "object",
      "description": "Default deployment protection for this team null indicates protection is disabled",
      "properties": {
        "passwordProtection": {
          "type": "object",
          "nullable": true,
          "required": [
            "deploymentType"
          ],
          "properties": {
            "deploymentType": {
              "type": "string"
            }
          }
        },
        "ssoProtection": {
          "type": "object",
          "nullable": true,
          "required": [
            "deploymentType"
          ],
          "properties": {
            "deploymentType": {
              "type": "string"
            }
          }
        }
      }
    },
    "defaultPassport": {
      "type": "object",
      "description": "Default Passport configuration for new projects in this team.",
      "nullable": true,
      "required": [
        "connectorId",
        "deploymentType"
      ],
      "properties": {
        "connectorId": {
          "type": "string",
          "description": "Default Passport configuration for new projects in this team."
        },
        "deploymentType": {
          "type": "string",
          "description": "Default Passport configuration for new projects in this team.",
          "enum": [
            "all",
            "all_except_custom_domains",
            "preview",
            "prod_deployment_urls_and_all_previews"
          ]
        }
      }
    },
    "defaultExpirationSettings": {
      "type": "object",
      "description": "Default deployment expiration settings for this team",
      "properties": {
        "expirationDays": {
          "type": "number",
          "description": "Number of days to keep non-production deployments (mostly preview deployments) before soft deletion."
        },
        "expirationDaysProduction": {
          "type": "number",
          "description": "Number of days to keep production deployments before soft deletion."
        },
        "expirationDaysCanceled": {
          "type": "number",
          "description": "Number of days to keep canceled deployments before soft deletion."
        },
        "expirationDaysErrored": {
          "type": "number",
          "description": "Number of days to keep errored deployments before soft deletion."
        },
        "deploymentsToKeep": {
          "type": "number",
          "description": "Minimum number of production deployments to keep for this project, even if they are over the production expiration limit."
        }
      }
    },
    "defaultProjectJobs": {
      "type": "object",
      "description": "Default job configuration applied to new projects created in this team.",
      "properties": {
        "lint": {
          "type": "object",
          "description": "Default job configuration applied to new projects created in this team.",
          "required": [
            "targets"
          ],
          "properties": {
            "targets": {
              "type": "array",
              "description": "Default job configuration applied to new projects created in this team."
            }
          }
        },
        "typecheck": {
          "type": "object",
          "description": "Default job configuration applied to new projects created in this team.",
          "required": [
            "targets"
          ],
          "properties": {
            "targets": {
              "type": "array",
              "description": "Default job configuration applied to new projects created in this team."
            }
          }
        },
        "mfe-config-present": {
          "type": "object",
          "description": "Default job configuration applied to new projects created in this team.",
          "required": [
            "targets"
          ],
          "properties": {
            "targets": {
              "type": "array",
              "description": "Default job configuration applied to new projects created in this team."
            }
          }
        }
      }
    },
    "enablePreviewFeedback": {
      "type": "string",
      "description": "Whether toolbar is enabled on preview deployments",
      "enum": [
        "default",
        "default-force",
        "off",
        "off-force",
        "on",
        "on-force",
        null
      ],
      "nullable": true
    },
    "enableProductionFeedback": {
      "type": "string",
      "description": "Whether toolbar is enabled on production deployments",
      "enum": [
        "default",
        "default-force",
        "off",
        "off-force",
        "on",
        "on-force",
        null
      ],
      "nullable": true
    },
    "sensitiveEnvironmentVariablePolicy": {
      "type": "string",
      "description": "Sensitive environment variable policy for this team",
      "enum": [
        "default",
        "off",
        "on",
        null
      ],
      "nullable": true
    },
    "hideIpAddresses": {
      "type": "boolean",
      "description": "Indicates if IP addresses should be accessible in observability (o11y) tooling",
      "enum": [
        false,
        true,
        null
      ],
      "nullable": true
    },
    "hideIpAddressesInLogDrains": {
      "type": "boolean",
      "description": "Indicates if IP addresses should be accessible in log drains",
      "enum": [
        false,
        true,
        null
      ],
      "nullable": true
    },
    "dpAccessRequestsMode": {
      "type": "string",
      "description": "Controls who can request access to protected deployments.",
      "enum": [
        "all",
        "email-domain",
        "none"
      ]
    },
    "ipBuckets": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "bucket"
        ],
        "properties": {
          "bucket": {
            "type": "string"
          },
          "supportUntil": {
            "type": "number"
          },
          "default": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          }
        }
      }
    },
    "requireVerifiedCommits": {
      "type": "boolean",
      "description": "When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. Projects may override this via `project.gitProviderOptions.requireVerifiedCommits` (gated by `Project:Update`).",
      "enum": [
        false,
        true
      ]
    },
    "disableRepositoryDispatchEvents": {
      "type": "boolean",
      "description": "Default for projects in the team. When `true`, projects in this team will not emit GitHub repository-dispatch events on deployment events unless the project explicitly overrides this setting via `project.gitProviderOptions.disableRepositoryDispatchEvents`.",
      "enum": [
        false,
        true
      ]
    },
    "strictDeploymentProtectionSettings": {
      "type": "object",
      "description": "When enabled, deployment protection settings require stricter permissions (owner-only).",
      "required": [
        "enabled",
        "updatedAt"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "updatedAt": {
          "type": "number"
        }
      }
    },
    "strictShareableLinks": {
      "type": "object",
      "description": "When enabled, creating shareable links requires Owner role.",
      "required": [
        "enabled",
        "updatedAt"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "updatedAt": {
          "type": "number"
        }
      }
    },
    "strictPasswordProtectionSettings": {
      "type": "object",
      "description": "When enabled, adding, changing, or removing project password protection requires Owner role.",
      "required": [
        "enabled",
        "updatedAt"
      ],
      "properties": {
        "enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "updatedAt": {
          "type": "number"
        }
      }
    },
    "nsnbConfig": {
      "type": "object",
      "description": "NSNB configuration for the team.",
      "required": [
        "preference"
      ],
      "properties": {
        "preference": {
          "type": "string",
          "enum": [
            "auto-approval",
            "block",
            "manual-approval"
          ]
        }
      }
    },
    "deploymentPolicy": {
      "type": "object",
      "description": "Composable deployment-time policy for the team. Used as the default for every project on the team, with optional per-project overrides on `project.deploymentPolicy`.",
      "properties": {
        "gitSources": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "`enabled: true` with empty `sources` is deny-all.",
            "required": [
              "enabled",
              "environments",
              "sources"
            ]
          }
        },
        "deploymentSources": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "`enabled: true` with empty `sources` is deny-all.",
            "required": [
              "enabled",
              "environments",
              "sources"
            ]
          }
        }
      }
    },
    "personalAccessTokensInvalidatedAt": {
      "type": "number",
      "description": "Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team."
    },
    "appTokensInvalidatedAt": {
      "type": "number",
      "description": "Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team."
    },
    "apiKeysInvalidatedAt": {
      "type": "number",
      "description": "Timestamp (ms) after which API keys created at or before this time are considered invalid for this team."
    },
    "integrationTokensInvalidatedAt": {
      "type": "number",
      "description": "Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team."
    },
    "id": {
      "type": "string",
      "description": "The Team's unique identifier."
    },
    "slug": {
      "type": "string",
      "description": "The Team's slug, which is unique across the Vercel platform."
    },
    "name": {
      "type": "string",
      "description": "Name associated with the Team account, or `null` if none has been provided.",
      "nullable": true
    },
    "avatar": {
      "type": "string",
      "description": "The ID of the file used as avatar for this Team.",
      "nullable": true
    },
    "membership": {
      "type": "object",
      "description": "The membership of the authenticated User in relation to the Team.",
      "required": [
        "confirmed",
        "created",
        "createdAt",
        "role"
      ],
      "properties": {
        "uid": {
          "type": "string"
        },
        "entitlements": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "entitlement"
            ]
          }
        },
        "teamId": {
          "type": "string"
        },
        "confirmed": {
          "type": "boolean",
          "enum": [
            true
          ]
        },
        "accessRequestedAt": {
          "type": "number"
        },
        "role": {
          "type": "string",
          "enum": [
            "BILLING",
            "CONTRIBUTOR",
            "DEVELOPER",
            "MEMBER",
            "OWNER",
            "SECURITY",
            "VIEWER",
            "VIEWER_FOR_PLUS"
          ]
        },
        "teamRoles": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "BILLING",
              "CONTRIBUTOR",
              "DEVELOPER",
              "MEMBER",
              "OWNER",
              "SECURITY",
              "VIEWER",
              "VIEWER_FOR_PLUS"
            ]
          }
        },
        "teamPermissions": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "AiGatewayApiKeyOwnedBySelf",
              "AiGatewayBudgetManager",
              "AiGatewayCredits",
              "AiGatewaySettings",
              "ConnectorManager",
              "CreateProject",
              "EnvVariableManager",
              "EnvironmentManager",
              "FullProductionDeployment",
              "IntegrationManager",
              "OrgAdmin",
              "OrgViewer",
              "UsageViewer",
              "V0Builder",
              "V0Chatter",
              "V0Viewer"
            ]
          }
        },
        "createdAt": {
          "type": "number"
        },
        "created": {
          "type": "number"
        },
        "joinedFrom": {
          "type": "object",
          "required": [
            "origin"
          ],
          "properties": {
            "origin": {
              "type": "string",
              "enum": [
                "account-update",
                "bitbucket",
                "dsync",
                "feedback",
                "github",
                "gitlab",
                "import",
                "link",
                "mail",
                "nsnb-auto-approve",
                "nsnb-hobby-upgrade",
                "nsnb-invite",
                "nsnb-redeploy",
                "nsnb-redeploy-attribution-card",
                "nsnb-request-access",
                "nsnb-viewer-upgrade",
                "organization-teams",
                "saml",
                "teams"
              ]
            },
            "commitId": {
              "type": "string"
            },
            "repoId": {
              "type": "string"
            },
            "repoPath": {
              "type": "string"
            },
            "gitUserId": {},
            "gitUserLogin": {
              "type": "string"
            },
            "ssoUserId": {
              "type": "string"
            },
            "ssoConnectedAt": {
              "type": "number"
            },
            "idpUserId": {
              "type": "string"
            },
            "dsyncUserId": {
              "type": "string"
            },
            "dsyncConnectedAt": {
              "type": "number"
            }
          }
        }
      }
    },
    "createdAt": {
      "type": "number",
      "description": "UNIX timestamp (in milliseconds) when the Team was created."
    },
    "parentId": {
      "type": "string",
      "description": "The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams)."
    },
    "orgRootTeamId": {
      "type": "string",
      "description": "Best-effort ID of the organization’s root billing team. When present, compare `orgRootTeamId === id` to identify the root team. It may be omitted even when `parentId` is set if organization resolution fails or the referenced organization is missing. Always omitted for non-organization teams."
    }
  },
  "additionalProperties": true
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.
Not authorized to update the team. Must be an OWNER.

### 410: No description

### 428: Owner does not have protection add-on

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
