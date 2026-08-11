---
title: find-a-project-by-id-or-name
product: vercel
url: /docs/rest-api/projects/find-a-project-by-id-or-name
canonical_url: "https://vercel.com/docs/rest-api/projects/find-a-project-by-id-or-name"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about find-a-project-by-id-or-name on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Find a project by id or name

```http
GET /v9/projects/{idOrName}
```

Get the information for a specific project by passing either the project `id` or `name` in the URL.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The project information

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "accountId",
    "alias",
    "defaultResourceConfig",
    "deploymentExpiration",
    "directoryListing",
    "id",
    "name",
    "nodeVersion",
    "resourceConfig"
  ],
  "properties": {
    "integrations": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "Integration installation enabled on the project.",
        "required": [
          "installationId"
        ],
        "properties": {
          "installationId": {
            "type": "string",
            "description": "The integration installation ID."
          },
          "resources": {
            "type": "array",
            "description": "The list of the installation resources connected to the project."
          }
        }
      }
    },
    "accountId": {
      "type": "string"
    },
    "creator": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "type",
            "user",
            "via"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "user"
              ]
            },
            "via": {
              "nullable": true
            },
            "user": {
              "type": "object",
              "required": [
                "id"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "app",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "app"
              ]
            },
            "app": {
              "type": "object",
              "required": [
                "id"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "integration",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "integration"
              ]
            },
            "integration": {
              "type": "object",
              "required": [
                "configurationId",
                "integrationId"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "system"
              ]
            }
          }
        }
      ]
    },
    "alias": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "deployment",
          "domain",
          "environment",
          "target"
        ],
        "properties": {
          "configuredBy": {
            "type": "string",
            "enum": [
              "A",
              "CNAME",
              "dns-01",
              "http",
              null
            ],
            "nullable": true
          },
          "configuredChangedAt": {
            "type": "number",
            "nullable": true
          },
          "createdAt": {
            "type": "number",
            "nullable": true
          },
          "deployment": {
            "type": "object",
            "nullable": true,
            "required": [
              "createdAt",
              "createdIn",
              "creator",
              "deploymentHostname",
              "id",
              "name",
              "plan",
              "private",
              "readyState",
              "type",
              "url",
              "userId"
            ]
          },
          "domain": {
            "type": "string"
          },
          "environment": {
            "type": "string",
            "enum": [
              "preview",
              "production"
            ]
          },
          "gitBranch": {
            "type": "string",
            "nullable": true
          },
          "redirect": {
            "type": "string",
            "nullable": true
          },
          "redirectStatusCode": {
            "type": "number",
            "enum": [
              301,
              302,
              307,
              308,
              null
            ],
            "nullable": true
          },
          "target": {
            "type": "string",
            "enum": [
              "PREVIEW",
              "PRODUCTION",
              "STAGING"
            ]
          }
        }
      }
    },
    "analytics": {
      "type": "object",
      "required": [
        "disabledAt",
        "enabledAt",
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "canceledAt": {
          "type": "number",
          "nullable": true
        },
        "disabledAt": {
          "type": "number"
        },
        "enabledAt": {
          "type": "number"
        },
        "paidAt": {
          "type": "number"
        },
        "sampleRatePercent": {
          "type": "number",
          "nullable": true
        },
        "spendLimitInDollars": {
          "type": "number",
          "nullable": true
        }
      }
    },
    "appliedCve55182Migration": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "speedInsights": {
      "type": "object",
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "enabledAt": {
          "type": "number"
        },
        "disabledAt": {
          "type": "number"
        },
        "canceledAt": {
          "type": "number"
        },
        "hasData": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "paidAt": {
          "type": "number"
        }
      }
    },
    "autoExposeSystemEnvs": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "autoAssignCustomDomains": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "autoAssignCustomDomainsUpdatedBy": {
      "type": "string"
    },
    "buildCommand": {
      "type": "string",
      "nullable": true
    },
    "commandForIgnoringBuildStep": {
      "type": "string",
      "nullable": true
    },
    "connectConfigurations": {
      "type": "array",
      "nullable": true,
      "items": {
        "type": "object",
        "required": [
          "buildsEnabled",
          "connectConfigurationId",
          "createdAt",
          "envId",
          "passive",
          "updatedAt"
        ],
        "properties": {
          "envId": {},
          "connectConfigurationId": {
            "type": "string"
          },
          "dc": {
            "type": "string"
          },
          "passive": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "buildsEnabled": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "aws": {
            "type": "object",
            "required": [
              "subnetIds"
            ]
          },
          "createdAt": {
            "type": "number"
          },
          "updatedAt": {
            "type": "number"
          }
        }
      }
    },
    "connectConfigurationId": {
      "type": "string",
      "nullable": true
    },
    "connectBuildsEnabled": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "passiveConnectConfigurationId": {
      "type": "string",
      "nullable": true
    },
    "createdAt": {
      "type": "number"
    },
    "customerSupportCodeVisibility": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "crons": {
      "type": "object",
      "required": [
        "definitions",
        "deploymentId",
        "disabledAt",
        "enabledAt",
        "updatedAt"
      ],
      "properties": {
        "enabledAt": {
          "type": "number",
          "description": "The time the feature was enabled for this project. Note: It enables automatically with the first Deployment that outputs cronjobs."
        },
        "disabledAt": {
          "type": "number",
          "description": "The time the feature was disabled for this project.",
          "nullable": true
        },
        "updatedAt": {
          "type": "number"
        },
        "deploymentId": {
          "type": "string",
          "description": "The ID of the Deployment from which the definitions originated.",
          "nullable": true
        },
        "definitions": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "host",
              "path",
              "schedule"
            ]
          }
        }
      }
    },
    "dataCache": {
      "type": "object",
      "required": [
        "userDisabled"
      ],
      "properties": {
        "userDisabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "storageSizeBytes": {
          "type": "number",
          "nullable": true
        },
        "unlimited": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "deploymentExpiration": {
      "type": "object",
      "description": "Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects.",
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
    "expiration": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "expiresAt"
          ],
          "properties": {
            "expiresAt": {
              "type": "number",
              "description": "Unix ms timestamp when the project is scheduled to expire."
            }
          }
        },
        {
          "type": "object",
          "required": [
            "lockedAt",
            "lockedBy"
          ],
          "properties": {
            "lockedAt": {
              "type": "number",
              "description": "Unix ms timestamp when the project was locked."
            },
            "lockedBy": {
              "type": "string",
              "description": "userId of the actor that triggered the lock (system or admin)."
            }
          }
        }
      ]
    },
    "devCommand": {
      "type": "string",
      "nullable": true
    },
    "directoryListing": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "installCommand": {
      "type": "string",
      "nullable": true
    },
    "env": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "key",
          "type",
          "value"
        ],
        "properties": {
          "target": {},
          "type": {
            "type": "string",
            "enum": [
              "encrypted",
              "plain",
              "secret",
              "sensitive",
              "system"
            ]
          },
          "sunsetSecretId": {
            "type": "string",
            "description": "This is used to identify variables that have been migrated from type secret to sensitive."
          },
          "legacyValue": {
            "type": "string",
            "description": "Legacy now-encryption ciphertext, present after migration swaps value/vsmValue"
          },
          "decrypted": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "value": {
            "type": "string"
          },
          "vsmValue": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "key": {
            "type": "string"
          },
          "configurationId": {
            "type": "string",
            "nullable": true
          },
          "createdAt": {
            "type": "number"
          },
          "updatedAt": {
            "type": "number"
          },
          "createdBy": {
            "type": "string",
            "nullable": true
          },
          "updatedBy": {
            "type": "string",
            "nullable": true
          },
          "gitBranch": {
            "type": "string"
          },
          "visibility": {
            "type": "string",
            "description": "User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior.",
            "enum": [
              "config",
              "secret"
            ]
          },
          "edgeConfigId": {
            "type": "string",
            "nullable": true
          },
          "edgeConfigTokenId": {
            "type": "string",
            "nullable": true
          },
          "contentHint": {
            "nullable": true
          },
          "internalContentHint": {
            "type": "object",
            "description": "Similar to `contentHints`, but should not be exposed to the user.",
            "nullable": true,
            "required": [
              "encryptedValue",
              "type"
            ]
          },
          "comment": {
            "type": "string"
          },
          "customEnvironmentIds": {
            "type": "array"
          }
        }
      }
    },
    "customEnvironments": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "Internal representation of a custom environment with all required properties",
        "required": [
          "createdAt",
          "id",
          "slug",
          "type",
          "updatedAt"
        ],
        "properties": {
          "id": {
            "type": "string",
            "description": "Unique identifier for the custom environment (format: env_*)"
          },
          "slug": {
            "type": "string",
            "description": "URL-friendly name of the environment"
          },
          "type": {
            "type": "string",
            "description": "The type of environment (production, preview, or development)",
            "enum": [
              "development",
              "preview",
              "production"
            ]
          },
          "description": {
            "type": "string",
            "description": "Optional description of the environment's purpose"
          },
          "branchMatcher": {
            "type": "object",
            "description": "Configuration for matching git branches to this environment",
            "required": [
              "pattern",
              "type"
            ]
          },
          "domains": {
            "type": "array",
            "description": "List of domains associated with this environment"
          },
          "currentDeploymentAliases": {
            "type": "array",
            "description": "List of aliases for the current deployment"
          },
          "createdAt": {
            "type": "number",
            "description": "Timestamp when the environment was created"
          },
          "updatedAt": {
            "type": "number",
            "description": "Timestamp when the environment was last updated"
          }
        }
      }
    },
    "framework": {
      "type": "string",
      "enum": [
        "actix-web",
        "angular",
        "ash",
        "astro",
        "axum",
        "blitzjs",
        "brunch",
        "bun",
        "container",
        "create-react-app",
        "django",
        "docusaurus",
        "docusaurus-2",
        "dojo",
        "eleventy",
        "elysia",
        "ember",
        "eve",
        "express",
        "fastapi",
        "fasthtml",
        "fastify",
        "flask",
        "gatsby",
        "go",
        "gridsome",
        "h3",
        "hexo",
        "hono",
        "hugo",
        "hydrogen",
        "ionic-angular",
        "ionic-react",
        "jekyll",
        "koa",
        "mastra",
        "middleman",
        "nestjs",
        "nextjs",
        "nitro",
        "node",
        "nuxtjs",
        "parcel",
        "polymer",
        "preact",
        "python",
        "react-router",
        "redwoodjs",
        "remix",
        "ruby",
        "rust",
        "saber",
        "sanity",
        "sanity-v2",
        "sapper",
        "scully",
        "services",
        "solidstart",
        "solidstart-1",
        "stencil",
        "storybook",
        "svelte",
        "sveltekit",
        "sveltekit-1",
        "tanstack-start",
        "tanstack-start-lovable",
        "umijs",
        "vite",
        "vitepress",
        "vue",
        "vuepress",
        "xmcp",
        "zola",
        null
      ],
      "nullable": true
    },
    "services": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "serviceName"
        ],
        "properties": {
          "serviceName": {
            "type": "string",
            "description": "Service name from the deployment (Service.name)."
          },
          "serviceType": {
            "type": "string",
            "description": "Service kind (Service.type). Omitted for schemas that do not define one.",
            "enum": [
              "cron",
              "job",
              "web",
              "worker"
            ]
          },
          "framework": {
            "type": "string",
            "description": "Framework slug, when the service has one (omitted otherwise).",
            "enum": [
              "actix-web",
              "angular",
              "ash",
              "astro",
              "axum",
              "blitzjs",
              "brunch",
              "bun",
              "container",
              "create-react-app",
              "django",
              "docusaurus",
              "docusaurus-2",
              "dojo",
              "eleventy",
              "elysia",
              "ember",
              "eve",
              "express",
              "fastapi",
              "fasthtml",
              "fastify",
              "flask",
              "gatsby",
              "go",
              "gridsome",
              "h3",
              "hexo",
              "hono",
              "hugo",
              "hydrogen",
              "ionic-angular",
              "ionic-react",
              "jekyll",
              "koa",
              "mastra",
              "middleman",
              "nestjs",
              "nextjs",
              "nitro",
              "node",
              "nuxtjs",
              "parcel",
              "polymer",
              "preact",
              "python",
              "react-router",
              "redwoodjs",
              "remix",
              "ruby",
              "rust",
              "saber",
              "sanity",
              "sanity-v2",
              "sapper",
              "scully",
              "services",
              "solidstart",
              "solidstart-1",
              "stencil",
              "storybook",
              "svelte",
              "sveltekit",
              "sveltekit-1",
              "tanstack-start",
              "tanstack-start-lovable",
              "umijs",
              "vite",
              "vitepress",
              "vue",
              "vuepress",
              "xmcp",
              "zola"
            ]
          },
          "runtime": {
            "type": "string",
            "description": "Generic runtime, e.g. 'node' | 'python' | 'go' | 'ruby' | 'rust' (Service.runtime). Omitted for static builds."
          }
        }
      }
    },
    "gitForkProtection": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "gitLFS": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "id": {
      "type": "string"
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
          "default": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "supportUntil": {
            "type": "number"
          }
        }
      }
    },
    "jobs": {
      "type": "object",
      "properties": {
        "lint": {
          "type": "object",
          "required": [
            "targets"
          ],
          "properties": {
            "targets": {
              "type": "array"
            }
          }
        },
        "typecheck": {
          "type": "object",
          "required": [
            "targets"
          ],
          "properties": {
            "targets": {
              "type": "array"
            }
          }
        },
        "mfe-config-present": {
          "type": "object",
          "required": [
            "targets"
          ],
          "properties": {
            "targets": {
              "type": "array"
            }
          }
        }
      }
    },
    "latestDeployments": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "createdIn",
          "creator",
          "deploymentHostname",
          "id",
          "name",
          "plan",
          "private",
          "readyState",
          "type",
          "url",
          "userId"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "alias": {
            "type": "array"
          },
          "aliasAssigned": {
            "nullable": true
          },
          "aliasError": {
            "type": "object",
            "nullable": true,
            "required": [
              "code",
              "message"
            ]
          },
          "aliasFinal": {
            "type": "string",
            "nullable": true
          },
          "automaticAliases": {
            "type": "array"
          },
          "branchMatcher": {
            "type": "object",
            "required": [
              "pattern",
              "type"
            ]
          },
          "buildingAt": {
            "type": "number"
          },
          "builds": {
            "type": "array"
          },
          "checksConclusion": {
            "type": "string",
            "enum": [
              "canceled",
              "failed",
              "skipped",
              "succeeded"
            ]
          },
          "checksState": {
            "type": "string",
            "enum": [
              "completed",
              "registered",
              "running"
            ]
          },
          "connectBuildsEnabled": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "connectConfigurationId": {
            "type": "string"
          },
          "createdAt": {
            "type": "number"
          },
          "createdIn": {
            "type": "string"
          },
          "creator": {
            "type": "object",
            "nullable": true,
            "required": [
              "email",
              "uid",
              "username"
            ]
          },
          "deletedAt": {
            "type": "number"
          },
          "deploymentHostname": {
            "type": "string"
          },
          "forced": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "name": {
            "type": "string"
          },
          "meta": {
            "type": "object"
          },
          "monorepoManager": {
            "type": "string",
            "nullable": true
          },
          "oidcTokenClaims": {
            "type": "object",
            "required": [
              "aud",
              "environment",
              "iss",
              "owner",
              "owner_id",
              "project",
              "project_id",
              "scope",
              "sub"
            ]
          },
          "plan": {
            "type": "string",
            "enum": [
              "enterprise",
              "hobby",
              "pro"
            ]
          },
          "previewCommentsEnabled": {
            "type": "boolean",
            "description": "Whether or not preview comments are enabled for the deployment",
            "enum": [
              false,
              true
            ]
          },
          "private": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "readyAt": {
            "type": "number"
          },
          "readyState": {
            "type": "string",
            "enum": [
              "BLOCKED",
              "BUILDING",
              "CANCELED",
              "ERROR",
              "INITIALIZING",
              "QUEUED",
              "READY"
            ]
          },
          "readySubstate": {
            "type": "string",
            "enum": [
              "PROMOTED",
              "ROLLING",
              "STAGED"
            ]
          },
          "requestedAt": {
            "type": "number"
          },
          "target": {
            "type": "string",
            "nullable": true
          },
          "teamId": {
            "type": "string",
            "nullable": true
          },
          "type": {
            "type": "string",
            "enum": [
              "LAMBDAS"
            ]
          },
          "url": {
            "type": "string"
          },
          "userId": {
            "type": "string"
          },
          "withCache": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          }
        }
      }
    },
    "link": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "deployHooks",
            "gitCredentialId",
            "org",
            "productionBranch",
            "type"
          ],
          "properties": {
            "org": {
              "type": "string"
            },
            "repoOwnerId": {
              "type": "number",
              "description": "A new field, should be included in all new project links, is being added just in time when a deployment is created. This is needed for Protected Git scopes."
            },
            "repo": {
              "type": "string"
            },
            "repoId": {
              "type": "number"
            },
            "type": {
              "type": "string",
              "enum": [
                "github"
              ]
            },
            "createdAt": {
              "type": "number"
            },
            "deployHooks": {
              "type": "array"
            },
            "gitCredentialId": {
              "type": "string"
            },
            "updatedAt": {
              "type": "number"
            },
            "sourceless": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "productionBranch": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "deployHooks",
            "gitCredentialId",
            "org",
            "productionBranch",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "github-limited"
              ]
            },
            "repo": {
              "type": "string"
            },
            "repoId": {
              "type": "number"
            },
            "createdAt": {
              "type": "number"
            },
            "updatedAt": {
              "type": "number"
            },
            "org": {
              "type": "string"
            },
            "repoOwnerId": {
              "type": "number",
              "description": "A new field, should be included in all new project links, is being added just in time when a deployment is created. This is needed for Protected Git scopes."
            },
            "deployHooks": {
              "type": "array"
            },
            "gitCredentialId": {
              "type": "string"
            },
            "sourceless": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "productionBranch": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "deployHooks",
            "gitCredentialId",
            "host",
            "org",
            "productionBranch",
            "type"
          ],
          "properties": {
            "org": {
              "type": "string"
            },
            "repoOwnerId": {
              "type": "number",
              "description": "A new field, should be included in all new project links, is being added just in time when a deployment is created. This is needed for Protected Git scopes."
            },
            "repo": {
              "type": "string"
            },
            "repoId": {
              "type": "number"
            },
            "type": {
              "type": "string",
              "enum": [
                "github-custom-host"
              ]
            },
            "host": {
              "type": "string"
            },
            "createdAt": {
              "type": "number"
            },
            "deployHooks": {
              "type": "array"
            },
            "gitCredentialId": {
              "type": "string"
            },
            "updatedAt": {
              "type": "number"
            },
            "sourceless": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "productionBranch": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "deployHooks",
            "gitCredentialId",
            "productionBranch",
            "projectId",
            "projectName",
            "projectNameWithNamespace",
            "projectNamespace",
            "projectUrl",
            "type"
          ],
          "properties": {
            "projectId": {
              "type": "string"
            },
            "projectName": {
              "type": "string"
            },
            "projectNameWithNamespace": {
              "type": "string"
            },
            "projectNamespace": {
              "type": "string"
            },
            "projectOwnerId": {
              "type": "number",
              "description": "A new field, should be included in all new project links, is being added just in time when a deployment is created. This is needed for Protected Git scopes. This is the id of the top level group that a namespace belongs to. Gitlab supports group nesting (up to 20 levels)."
            },
            "projectUrl": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "gitlab"
              ]
            },
            "createdAt": {
              "type": "number"
            },
            "deployHooks": {
              "type": "array"
            },
            "gitCredentialId": {
              "type": "string"
            },
            "updatedAt": {
              "type": "number"
            },
            "sourceless": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "productionBranch": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "deployHooks",
            "gitCredentialId",
            "name",
            "owner",
            "productionBranch",
            "slug",
            "type",
            "uuid",
            "workspaceUuid"
          ],
          "properties": {
            "name": {
              "type": "string"
            },
            "slug": {
              "type": "string"
            },
            "owner": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "bitbucket"
              ]
            },
            "uuid": {
              "type": "string"
            },
            "workspaceUuid": {
              "type": "string"
            },
            "createdAt": {
              "type": "number"
            },
            "deployHooks": {
              "type": "array"
            },
            "gitCredentialId": {
              "type": "string"
            },
            "updatedAt": {
              "type": "number"
            },
            "sourceless": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "productionBranch": {
              "type": "string"
            }
          }
        },
        {
          "description": "(2 more variants — see OpenAPI spec)"
        }
      ]
    },
    "blobs": {
      "type": "object",
      "properties": {
        "isDefaultApp": {
          "type": "boolean",
          "description": "Marks the team-level, Vercel-managed default blob project (`vercel-blob-default-project`) that orphan blob stores are scoped to when connected without an explicit project. Set only by internal storage flows and immutable after creation — guards rely on it to protect the connected stores from being lost when the project is deleted or transferred.",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "microfrontends": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "enabled",
            "groupIds",
            "isDefaultApp",
            "updatedAt"
          ],
          "properties": {
            "isDefaultApp": {
              "type": "boolean",
              "enum": [
                true
              ]
            },
            "updatedAt": {
              "type": "number",
              "description": "Timestamp when the microfrontends settings were last updated."
            },
            "groupIds": {
              "type": "array",
              "description": "The group IDs of microfrontends that this project belongs to. Each microfrontend project must belong to a microfrontends group that is the set of microfrontends that are used together."
            },
            "enabled": {
              "type": "boolean",
              "description": "Whether microfrontends are enabled for this project.",
              "enum": [
                true
              ]
            },
            "defaultRoute": {
              "type": "string",
              "description": "A path that is used to take screenshots and as the default path in preview links when a domain for this microfrontend is shown in the UI. Includes the leading slash, e.g. `/docs`"
            },
            "freeProjectForLegacyLimits": {
              "type": "boolean",
              "description": "Whether the project was part of the legacy limits for hobby and pro-trial before billing was added. This field is only set when the team is upgraded to a paid plan and we are backfilling the subscription status. We cap the subscription to 2 projects and set this field for the 3rd project. When this field is set, the project is not charged for and we do not call any billing APIs for this project.",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "enabled",
            "groupIds",
            "updatedAt"
          ],
          "properties": {
            "isDefaultApp": {
              "type": "boolean",
              "enum": [
                false
              ]
            },
            "routeObservabilityToThisProject": {
              "type": "boolean",
              "description": "Whether observability data should be routed to this microfrontend project or a root project.",
              "enum": [
                false,
                true
              ]
            },
            "doNotRouteWithMicrofrontendsRouting": {
              "type": "boolean",
              "description": "Whether to add microfrontends routing to aliases. This means domains in this project will route as a microfrontend.",
              "enum": [
                false,
                true
              ]
            },
            "updatedAt": {
              "type": "number",
              "description": "Timestamp when the microfrontends settings were last updated."
            },
            "groupIds": {
              "type": "array",
              "description": "The group IDs of microfrontends that this project belongs to. Each microfrontend project must belong to a microfrontends group that is the set of microfrontends that are used together."
            },
            "enabled": {
              "type": "boolean",
              "description": "Whether microfrontends are enabled for this project.",
              "enum": [
                true
              ]
            },
            "defaultRoute": {
              "type": "string",
              "description": "A path that is used to take screenshots and as the default path in preview links when a domain for this microfrontend is shown in the UI. Includes the leading slash, e.g. `/docs`"
            },
            "freeProjectForLegacyLimits": {
              "type": "boolean",
              "description": "Whether the project was part of the legacy limits for hobby and pro-trial before billing was added. This field is only set when the team is upgraded to a paid plan and we are backfilling the subscription status. We cap the subscription to 2 projects and set this field for the 3rd project. When this field is set, the project is not charged for and we do not call any billing APIs for this project.",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "enabled",
            "groupIds",
            "updatedAt"
          ],
          "properties": {
            "updatedAt": {
              "type": "number"
            },
            "groupIds": {
              "type": "array"
            },
            "enabled": {
              "type": "boolean",
              "enum": [
                false
              ]
            },
            "freeProjectForLegacyLimits": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            }
          }
        }
      ]
    },
    "name": {
      "type": "string"
    },
    "nodeVersion": {
      "type": "string",
      "enum": [
        "10.x",
        "12.x",
        "14.x",
        "16.x",
        "18.x",
        "20.x",
        "22.x",
        "24.x",
        "8.10.x"
      ]
    },
    "optionsAllowlist": {
      "type": "object",
      "nullable": true,
      "required": [
        "paths"
      ],
      "properties": {
        "paths": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "value"
            ]
          }
        }
      }
    },
    "outputDirectory": {
      "type": "string",
      "nullable": true
    },
    "passwordProtection": {
      "type": "object",
      "nullable": true
    },
    "passport": {
      "type": "object",
      "nullable": true,
      "required": [
        "connectorId",
        "deploymentType"
      ],
      "properties": {
        "deploymentType": {
          "type": "string",
          "enum": [
            "all",
            "all_except_custom_domains",
            "preview",
            "prod_deployment_urls_and_all_previews"
          ]
        },
        "connectorId": {
          "type": "string"
        }
      }
    },
    "protectionConfig": {
      "type": "object",
      "properties": {
        "sandboxUrls": {
          "type": "object",
          "properties": {
            "inheritDeploymentProtection": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            }
          }
        }
      }
    },
    "sandbox": {
      "type": "object",
      "properties": {
        "region": {
          "type": "string",
          "enum": [
            "cle1",
            "iad1",
            "sfo1"
          ]
        },
        "failoverRegions": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "cle1",
              "iad1",
              "sfo1"
            ]
          }
        }
      }
    },
    "productionDeploymentsFastLane": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "resourceConfig": {
      "type": "object",
      "required": [
        "functionDefaultRegions"
      ],
      "properties": {
        "elasticConcurrencyEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "fluid": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "functionDefaultRegions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "functionDefaultTimeout": {
          "type": "number"
        },
        "functionDefaultMemoryType": {
          "type": "string",
          "enum": [
            "performance",
            "performance_xl",
            "standard",
            "standard_legacy"
          ]
        },
        "functionZeroConfigFailover": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "buildMachineType": {
          "type": "string",
          "enum": [
            "basic",
            "enhanced",
            "standard",
            "turbo"
          ]
        },
        "buildMachineSelection": {
          "type": "string",
          "enum": [
            "elastic",
            "fixed"
          ]
        },
        "buildMachineElasticLastUpdated": {
          "type": "number"
        },
        "buildMachineElasticReason": {
          "type": "string",
          "enum": [
            "basic-floor",
            "build-timeout-failure",
            "enospc-failure",
            "enterprise-floor",
            "high-peak-disk",
            "high-peak-memory",
            "long-build-duration",
            "oom-failure",
            "short-build-duration",
            "sustained-high-cpu"
          ]
        },
        "isNSNBDisabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "buildQueue": {
          "type": "object",
          "properties": {
            "configuration": {
              "type": "string",
              "enum": [
                "SKIP_NAMESPACE_QUEUE",
                "WAIT_FOR_NAMESPACE_QUEUE"
              ]
            }
          }
        },
        "enableFunctionsBeta": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "rollbackDescription": {
      "type": "object",
      "description": "Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback.",
      "required": [
        "createdAt",
        "description",
        "userId",
        "username"
      ],
      "properties": {
        "userId": {
          "type": "string",
          "description": "The user who rolled back the project."
        },
        "username": {
          "type": "string",
          "description": "The username of the user who rolled back the project."
        },
        "description": {
          "type": "string",
          "description": "User-supplied explanation of why they rolled back the project. Limited to 250 characters."
        },
        "createdAt": {
          "type": "number",
          "description": "Timestamp of when the rollback was requested."
        }
      }
    },
    "rollingRelease": {
      "type": "object",
      "description": "Project-level rolling release configuration that defines how deployments should be gradually rolled out",
      "nullable": true,
      "required": [
        "target"
      ],
      "properties": {
        "target": {
          "type": "string",
          "description": "The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments."
        },
        "stages": {
          "type": "array",
          "description": "An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.",
          "nullable": true,
          "items": {
            "type": "object",
            "description": "An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.",
            "required": [
              "targetPercentage"
            ]
          }
        },
        "canaryResponseHeader": {
          "type": "boolean",
          "description": "Whether the request served by a canary deployment should return a header indicating a canary was served. Defaults to `false` when omitted.",
          "enum": [
            false,
            true
          ]
        },
        "gate": {
          "type": "object",
          "description": "Automated gating configuration. Omitted (the default) means no gating is configured, which is equivalent to `enabled: false`.",
          "required": [
            "action",
            "checks",
            "dryRun",
            "enabled"
          ],
          "properties": {
            "enabled": {
              "type": "boolean",
              "description": "Whether automated gating is enabled for this project's rollouts.",
              "enum": [
                false,
                true
              ]
            },
            "checks": {
              "type": "array",
              "description": "The checks to evaluate. An empty array means nothing is evaluated."
            },
            "failureThreshold": {
              "type": "number",
              "description": "How many failing evaluations within {@link windowSize} trip the gate. Defaults to `3` when omitted."
            },
            "windowSize": {
              "type": "number",
              "description": "How many of the most recent evaluations {@link failureThreshold} is counted against. Defaults to `5` when omitted."
            },
            "action": {
              "type": "string",
              "description": "What to do when the gate trips: pause the rollout, or roll it back.",
              "enum": [
                "pause",
                "rollback"
              ]
            },
            "dryRun": {
              "type": "boolean",
              "description": "When true, a tripped gate is only reported — {@link action} is not taken.",
              "enum": [
                false,
                true
              ]
            }
          }
        }
      }
    },
    "defaultResourceConfig": {
      "type": "object",
      "required": [
        "functionDefaultRegions"
      ],
      "properties": {
        "elasticConcurrencyEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "fluid": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "functionDefaultRegions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "functionDefaultTimeout": {
          "type": "number"
        },
        "functionDefaultMemoryType": {
          "type": "string",
          "enum": [
            "performance",
            "performance_xl",
            "standard",
            "standard_legacy"
          ]
        },
        "functionZeroConfigFailover": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "buildMachineType": {
          "type": "string",
          "enum": [
            "basic",
            "enhanced",
            "standard",
            "turbo"
          ]
        },
        "buildMachineSelection": {
          "type": "string",
          "enum": [
            "elastic",
            "fixed"
          ]
        },
        "buildMachineElasticLastUpdated": {
          "type": "number"
        },
        "buildMachineElasticReason": {
          "type": "string",
          "enum": [
            "basic-floor",
            "build-timeout-failure",
            "enospc-failure",
            "enterprise-floor",
            "high-peak-disk",
            "high-peak-memory",
            "long-build-duration",
            "oom-failure",
            "short-build-duration",
            "sustained-high-cpu"
          ]
        },
        "isNSNBDisabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "buildQueue": {
          "type": "object",
          "properties": {
            "configuration": {
              "type": "string",
              "enum": [
                "SKIP_NAMESPACE_QUEUE",
                "WAIT_FOR_NAMESPACE_QUEUE"
              ]
            }
          }
        },
        "enableFunctionsBeta": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "rootDirectory": {
      "type": "string",
      "nullable": true
    },
    "serverlessFunctionZeroConfigFailover": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "skewProtectionBoundaryAt": {
      "type": "number"
    },
    "skewProtectionMaxAge": {
      "type": "number"
    },
    "skewProtectionAllowedDomains": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "skipGitConnectDuringLink": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "staticIps": {
      "type": "object",
      "required": [
        "builds",
        "enabled",
        "regions"
      ],
      "properties": {
        "builds": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "regions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "sourceFilesOutsideRootDirectory": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "enableAffectedProjectsDeployments": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "enableExternalRewriteCaching": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "ssoProtection": {
      "type": "object",
      "nullable": true,
      "required": [
        "deploymentType"
      ],
      "properties": {
        "deploymentType": {
          "type": "string",
          "enum": [
            "all",
            "all_except_custom_domains",
            "preview",
            "prod_deployment_urls_and_all_previews"
          ]
        },
        "cve55182MigrationAppliedFrom": {
          "type": "string",
          "enum": [
            "all",
            "all_except_custom_domains",
            "preview",
            "prod_deployment_urls_and_all_previews",
            null
          ],
          "nullable": true
        },
        "april2026SecurityIncidentMigrationAppliedFrom": {
          "type": "string",
          "enum": [
            "all",
            "all_except_custom_domains",
            "preview",
            "prod_deployment_urls_and_all_previews",
            null
          ],
          "nullable": true
        }
      }
    },
    "targets": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "nullable": true,
        "required": [
          "createdAt",
          "createdIn",
          "creator",
          "deploymentHostname",
          "id",
          "name",
          "plan",
          "private",
          "readyState",
          "type",
          "url",
          "userId"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "alias": {
            "type": "array"
          },
          "aliasAssigned": {
            "nullable": true
          },
          "aliasError": {
            "type": "object",
            "nullable": true,
            "required": [
              "code",
              "message"
            ]
          },
          "aliasFinal": {
            "type": "string",
            "nullable": true
          },
          "automaticAliases": {
            "type": "array"
          },
          "branchMatcher": {
            "type": "object",
            "required": [
              "pattern",
              "type"
            ]
          },
          "buildingAt": {
            "type": "number"
          },
          "builds": {
            "type": "array"
          },
          "checksConclusion": {
            "type": "string",
            "enum": [
              "canceled",
              "failed",
              "skipped",
              "succeeded"
            ]
          },
          "checksState": {
            "type": "string",
            "enum": [
              "completed",
              "registered",
              "running"
            ]
          },
          "connectBuildsEnabled": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "connectConfigurationId": {
            "type": "string"
          },
          "createdAt": {
            "type": "number"
          },
          "createdIn": {
            "type": "string"
          },
          "creator": {
            "type": "object",
            "nullable": true,
            "required": [
              "email",
              "uid",
              "username"
            ]
          },
          "deletedAt": {
            "type": "number"
          },
          "deploymentHostname": {
            "type": "string"
          },
          "forced": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "name": {
            "type": "string"
          },
          "meta": {
            "type": "object"
          },
          "monorepoManager": {
            "type": "string",
            "nullable": true
          },
          "oidcTokenClaims": {
            "type": "object",
            "required": [
              "aud",
              "environment",
              "iss",
              "owner",
              "owner_id",
              "project",
              "project_id",
              "scope",
              "sub"
            ]
          },
          "plan": {
            "type": "string",
            "enum": [
              "enterprise",
              "hobby",
              "pro"
            ]
          },
          "previewCommentsEnabled": {
            "type": "boolean",
            "description": "Whether or not preview comments are enabled for the deployment",
            "enum": [
              false,
              true
            ]
          },
          "private": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "readyAt": {
            "type": "number"
          },
          "readyState": {
            "type": "string",
            "enum": [
              "BLOCKED",
              "BUILDING",
              "CANCELED",
              "ERROR",
              "INITIALIZING",
              "QUEUED",
              "READY"
            ]
          },
          "readySubstate": {
            "type": "string",
            "enum": [
              "PROMOTED",
              "ROLLING",
              "STAGED"
            ]
          },
          "requestedAt": {
            "type": "number"
          },
          "target": {
            "type": "string",
            "nullable": true
          },
          "teamId": {
            "type": "string",
            "nullable": true
          },
          "type": {
            "type": "string",
            "enum": [
              "LAMBDAS"
            ]
          },
          "url": {
            "type": "string"
          },
          "userId": {
            "type": "string"
          },
          "withCache": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          }
        }
      }
    },
    "transferCompletedAt": {
      "type": "number"
    },
    "transferStartedAt": {
      "type": "number"
    },
    "transferToAccountId": {
      "type": "string"
    },
    "transferredFromAccountId": {
      "type": "string"
    },
    "updatedAt": {
      "type": "number"
    },
    "live": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "enablePreviewFeedback": {
      "type": "boolean",
      "enum": [
        false,
        true,
        null
      ],
      "nullable": true
    },
    "enableProductionFeedback": {
      "type": "boolean",
      "enum": [
        false,
        true,
        null
      ],
      "nullable": true
    },
    "permissions": {
      "type": "object",
      "properties": {
        "oauth2Connection": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "user": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "userConnection": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "userMfaConfiguration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "userPreference": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "userSudo": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "webAuthn": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "accessGroup": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "agent": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayApiKey": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayApiKeyOwnedBySelf": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayApiKeySpendAttribution": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayApiKeyZdrExemption": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayBudget": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayCredits": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayPrivateModels": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayGuardrails": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayRules": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewaySettings": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayUsage": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aiGatewayVirtualModelConfigs": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "alerts": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "alertRules": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aliasGlobal": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "analyticsSampling": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "analyticsUsage": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "apiKey": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "apiKeyAiGateway": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "apiKeyOwnedBySelf": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "oauth2Application": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "vercelAppInstallation": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "vercelAppInstallationRequest": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "auditLog": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingAddress": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingInformation": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingInvoice": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingInvoiceEmailRecipient": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingInvoiceLanguage": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingPlan": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingPurchaseOrder": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingRefund": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "billingTaxId": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "blob": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "blobStoreTokenSet": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "budget": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "cacheArtifact": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "cacheArtifactUsageEvent": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "codeChecks": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "codeOwners": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "ciInvocations": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "ciLogs": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "concurrentBuilds": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "connect": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "connectConfiguration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "connectLogs": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "connexClient": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "connexClientProject": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "connexInstallation": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "connexToken": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "buildMachineDefault": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "cursorOriginInstallation": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "dataCacheBillingSettings": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "defaultDeploymentProtection": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentPolicy": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domain": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domainAcceptDelegation": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domainAuthCodes": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domainCertificate": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domainCheckConfig": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domainMove": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domainPurchase": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domainRecord": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "domainTransferIn": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "drain": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "edgeConfig": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "edgeConfigItem": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "edgeConfigSchema": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "edgeConfigToken": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "endpointVerification": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "event": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "fileUpload": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "flagsExplorerSubscription": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "gitRepository": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "imageOptimizationNewPrice": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationAccount": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationConfiguration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationConfigurationProjects": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationConfigurationRole": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationConfigurationTransfer": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationDeploymentAction": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationEvent": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationLog": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationResource": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationResourceData": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationResourceReplCommand": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationResourceSecrets": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationSSOSession": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationStrict": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationStoreTokenSet": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationVercelConfigurationOverride": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "integrationPullRequest": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "ipBlocking": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "jobGlobal": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "kmsIssuer": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "kmsProjectGrant": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "logDrain": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "marketplaceBillingData": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "marketplaceExperimentationEdgeConfigData": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "marketplaceExperimentationItem": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "marketplaceFlexCommit": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "marketplaceInstallationMember": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "marketplaceInvoice": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "marketplaceSettings": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "Monitoring": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "monitoringAlert": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "monitoringChart": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "monitoringQuery": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "monitoringSettings": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationCustomerBudget": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationDeploymentFailed": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationDomainConfiguration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationDomainExpire": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationDomainMoved": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationDomainPurchase": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationDomainRenewal": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationDomainTransfer": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationDomainUnverified": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "NotificationMonitoringAlert": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationPaymentFailed": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationPreferences": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationStatementOfReasons": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "notificationUsageAlert": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "oidcFederationPolicy": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "observabilityConfiguration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "observabilityFunnel": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "observabilityNotebook": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "openTelemetryEndpoint": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "ownEvent": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "organization": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "organizationDomain": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "organizationTeam": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "passwordProtectionInvoiceItem": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "paymentMethod": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "permissions": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "postgres": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "postgresStoreTokenSet": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "previewDeploymentSuffix": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "privateCloudAccount": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectTransferIn": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "proTrialOnboarding": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "rateLimit": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "redis": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "redisStoreTokenSet": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "remoteCaching": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "repository": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "samlConfig": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "secret": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "securityConfig": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "sensitiveEnvironmentVariablePolicy": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "sharedEnvVars": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "sharedEnvVarsProduction": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "space": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "spaceRun": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "storeIsLocked": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "storeTokenSetSensitive": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "storeTransfer": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "supportCase": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "supportCaseComment": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "team": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamAccessRequest": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamFellowMembership": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamGitExclusivity": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamInvite": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamInviteCode": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamInviteLink": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamJoin": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamMemberMfaStatus": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamMicrofrontends": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamOwnMembership": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamOwnMembershipDisconnectSAML": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamSudo": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "teamTokenInvalidation": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "token": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "toolbarComment": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "usage": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "usageCycle": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "vcrRepository": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "vpcPeeringConnection": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "webAnalyticsPlan": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "webhook": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "webhook-event": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aliasProject": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "aliasProtectionBypass": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "bulkRedirects": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "buildMachine": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "connectConfigurationLink": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "dataCacheNamespace": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deployment": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentBuildLogs": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentCheck": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentCheckPreview": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentCheckReRunFromProductionBranch": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentProductionGit": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentV0": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentPreview": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentPrivate": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentPromote": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "deploymentRollback": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "edgeCacheNamespace": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "environments": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "job": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "logs": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "logsPreset": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "observabilityData": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "onDemandBuild": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "onDemandConcurrency": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "optionsAllowlist": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "passwordProtection": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "privateLinkEndpoint": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "productionAliasProtectionBypass": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "project": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectAccessGroup": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectAnalyticsSampling": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectAnalyticsUsage": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectCheck": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectCheckRun": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectDeploymentExpiration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectDeploymentHook": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectDeploymentProtectionStrict": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectDomain": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectDomainCheckConfig": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectDomainMove": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectDomainVerify": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectEvent": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectEnvVars": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectEnvVarsProduction": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectEnvVarsUnownedByIntegration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectFlags": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectFlagsProduction": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectFlagsSdkKey": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectFromV0": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectId": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectIntegrationConfiguration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectLink": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectMember": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectMonitoring": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectOIDCToken": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectPermissions": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectProductionBranch": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectProtectionBypass": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectRollingRelease": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectRoutes": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectSupportCase": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectSupportCaseComment": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectTier": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectTransfer": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectTransferOut": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "projectUsage": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "pageIntegrity": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "seawallConfig": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "securityPlusConfiguration": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "shareableLinkStrict": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "sharedEnvVarConnection": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "skewProtection": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "analytics": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "trustedIps": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "trustedSources": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "v0Chat": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "vercelRun": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        },
        "webAnalytics": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Enum containing the actions that can be performed against a resource. Group operations are included.",
            "enum": [
              "create",
              "delete",
              "list",
              "read",
              "update"
            ]
          }
        }
      }
    },
    "lastRollbackTarget": {
      "type": "object",
      "nullable": true
    },
    "lastAliasRequest": {
      "type": "object",
      "nullable": true,
      "required": [
        "fromDeploymentId",
        "jobStatus",
        "requestedAt",
        "toDeploymentId",
        "type"
      ],
      "properties": {
        "fromDeploymentId": {
          "type": "string",
          "nullable": true
        },
        "toDeploymentId": {
          "type": "string"
        },
        "fromRollingReleaseId": {
          "type": "string",
          "description": "If rolling back from a rolling release, fromDeploymentId captures the \"base\" of that rolling release, and fromRollingReleaseId captures the \"target\" of that rolling release."
        },
        "jobStatus": {
          "type": "string",
          "enum": [
            "failed",
            "in-progress",
            "pending",
            "skipped",
            "succeeded"
          ]
        },
        "requestedAt": {
          "type": "number"
        },
        "type": {
          "type": "string",
          "enum": [
            "promote",
            "rollback"
          ]
        }
      }
    },
    "protectionBypass": {
      "type": "object",
      "additionalProperties": {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "configurationId",
              "createdAt",
              "createdBy",
              "integrationId",
              "scope"
            ]
          },
          {
            "type": "object",
            "required": [
              "createdAt",
              "createdBy",
              "scope"
            ]
          }
        ]
      }
    },
    "hasActiveBranches": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "trustedIps": {
      "nullable": true,
      "oneOf": [
        {
          "type": "object",
          "required": [
            "addresses",
            "deploymentType",
            "protectionMode"
          ],
          "properties": {
            "deploymentType": {
              "type": "string",
              "enum": [
                "all",
                "all_except_custom_domains",
                "preview",
                "prod_deployment_urls_and_all_previews",
                "production"
              ]
            },
            "addresses": {
              "type": "array"
            },
            "protectionMode": {
              "type": "string",
              "enum": [
                "additional",
                "exclusive"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "deploymentType"
          ],
          "properties": {
            "deploymentType": {
              "type": "string",
              "enum": [
                "all",
                "all_except_custom_domains",
                "preview",
                "prod_deployment_urls_and_all_previews",
                "production"
              ]
            }
          }
        }
      ]
    },
    "trustedSources": {
      "type": "object",
      "nullable": true,
      "properties": {
        "projects": {
          "type": "object",
          "additionalProperties": {
            "type": "object"
          }
        },
        "oidcProviders": {
          "type": "object",
          "additionalProperties": {
            "type": "array"
          }
        }
      }
    },
    "gitComments": {
      "type": "object",
      "required": [
        "onCommit",
        "onPullRequest"
      ],
      "properties": {
        "onPullRequest": {
          "type": "boolean",
          "description": "Whether the Vercel bot should comment on PRs",
          "enum": [
            false,
            true
          ]
        },
        "onCommit": {
          "type": "boolean",
          "description": "Whether the Vercel bot should comment on commits",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "gitProviderOptions": {
      "type": "object",
      "required": [
        "createDeployments"
      ],
      "properties": {
        "createDeployments": {
          "type": "string",
          "description": "Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead",
          "enum": [
            "disabled",
            "enabled"
          ]
        },
        "disableRepositoryDispatchEvents": {
          "type": "boolean",
          "description": "Whether the Vercel bot should not automatically create GitHub repository-dispatch events on deployment events. https://vercel.com/docs/git/vercel-for-github#repository-dispatch-events - `true`: disable repository-dispatch events for this project (explicit override of the team setting). - `false`: enable repository-dispatch events for this project (explicit override of the team setting). - absent: inherit from `team.disableRepositoryDispatchEvents`.",
          "enum": [
            false,
            true
          ]
        },
        "requireVerifiedCommits": {
          "type": "boolean",
          "description": "Whether the project requires commits to be signed & verified before deployments will be created. - `true`: require verified commits for this project (explicit override of the team setting). - `false`: do not require verified commits (explicit override of the team setting). - absent: inherit from `team.requireVerifiedCommits`.",
          "enum": [
            false,
            true
          ]
        },
        "gitCommitStatus": {
          "type": "boolean",
          "description": "Whether Vercel should post commit statuses for this project. When omitted, commit statuses remain enabled.",
          "enum": [
            false,
            true
          ]
        },
        "consolidatedGitCommitStatus": {
          "type": "object",
          "description": "Configuration for consolidated git commit status reporting. When enabled, Vercel will post a single consolidated commit status instead of individual statuses for each deployment.",
          "required": [
            "enabled",
            "propagateFailures"
          ],
          "properties": {
            "enabled": {
              "type": "boolean",
              "description": "Whether consolidated commit status is enabled.",
              "enum": [
                false,
                true
              ]
            },
            "propagateFailures": {
              "type": "boolean",
              "description": "Whether to propagate individual deployment failures to the consolidated status.",
              "enum": [
                false,
                true
              ]
            }
          }
        }
      }
    },
    "paused": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "concurrencyBucketName": {
      "type": "string"
    },
    "webAnalytics": {
      "type": "object",
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "disabledAt": {
          "type": "number"
        },
        "canceledAt": {
          "type": "number"
        },
        "enabledAt": {
          "type": "number"
        },
        "hasData": {
          "type": "boolean",
          "enum": [
            true
          ]
        }
      }
    },
    "security": {
      "type": "object",
      "properties": {
        "attackModeEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "attackModeUpdatedAt": {
          "type": "number"
        },
        "firewallEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "firewallUpdatedAt": {
          "type": "number"
        },
        "attackModeActiveUntil": {
          "type": "number",
          "nullable": true
        },
        "firewallConfigVersion": {
          "type": "number"
        },
        "rulesets": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "required": [
              "action"
            ]
          }
        },
        "firewallSeawallEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "ja3Enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "ja4Enabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "firewallBypassIps": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "managedRules": {
          "type": "object",
          "nullable": true,
          "required": [
            "ai_bots",
            "bot_filter",
            "owasp",
            "traffic_sources",
            "vercel_ruleset"
          ],
          "properties": {
            "vercel_ruleset": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "traffic_sources": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "bot_filter": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "ai_bots": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "owasp": {
              "type": "object",
              "required": [
                "active"
              ]
            }
          }
        },
        "botIdEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "log_headers": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "string",
              "enum": [
                "*"
              ]
            }
          ]
        },
        "securityPlus": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "securityPlusMetadata": {
          "type": "object",
          "required": [
            "updatedAt"
          ],
          "properties": {
            "updatedAt": {
              "type": "number"
            },
            "firstEnabledAt": {
              "type": "number",
              "description": "Timestamp when the feature was first enabled. Never changes after initial enablement."
            }
          }
        },
        "pageIntegrityEnabled": {
          "type": "boolean",
          "description": "Whether Page Integrity is enabled for this project. Used by the metadata service to gate DynamoDB lookups against the page-integrity-inventory table.",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "oidcTokenConfig": {
      "type": "object",
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Whether or not to generate OpenID Connect JSON Web Tokens.",
          "enum": [
            false,
            true
          ]
        },
        "issuerMode": {
          "type": "string",
          "description": "- team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`",
          "enum": [
            "global",
            "team"
          ]
        }
      }
    },
    "deploymentPolicy": {
      "type": "object",
      "description": "Project shape. `null` on a rule list clears the project's override for that rule type (fall back to team for every env); omitting is equivalent. Setting `deploymentPolicy` itself to `null` clears every override at once. Kept structurally distinct from {@link TeamDeploymentPolicy} so the two storage locations don't share a type by accident.",
      "nullable": true,
      "properties": {
        "gitSources": {
          "type": "array",
          "nullable": true,
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
          "nullable": true,
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
    "tier": {
      "type": "string"
    },
    "usageStatus": {
      "type": "object",
      "required": [
        "kind"
      ],
      "properties": {
        "kind": {
          "type": "string",
          "description": "Billing mode. Always 'flat' for flat-rate projects.",
          "enum": [
            "flat"
          ]
        },
        "exceededAllowanceUntil": {
          "type": "number",
          "description": "Timestamp until which the project has exceeded its CDN allowance."
        },
        "bypassThrottleUntil": {
          "type": "number",
          "description": "Timestamp until which throttling is bypassed (project pays list rates for overage)."
        },
        "throttled": {
          "type": "boolean",
          "description": "Per-project throttle, set explicitly for this project (e.g. via the per-project Flat Rate CDN endpoint).",
          "enum": [
            false,
            true
          ]
        },
        "teamThrottled": {
          "type": "boolean",
          "description": "Synced from `team.billing.usageStatus.throttled`. When `true`, the team has throttled all of its projects regardless of `throttled`. The effective throttle the CDN enforces is `throttled || teamThrottled`.",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "features": {
      "type": "object",
      "properties": {
        "webAnalytics": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    "v0": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "v0Created": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "abuse": {
      "type": "object",
      "required": [
        "history",
        "updatedAt"
      ],
      "properties": {
        "scanner": {
          "type": "string"
        },
        "history": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "at",
              "by",
              "byId",
              "reason",
              "scanner"
            ]
          }
        },
        "updatedAt": {
          "type": "number"
        },
        "block": {
          "type": "object",
          "required": [
            "action",
            "createdAt",
            "reason",
            "statusCode"
          ],
          "properties": {
            "action": {
              "type": "string",
              "enum": [
                "blocked"
              ]
            },
            "reason": {
              "type": "string"
            },
            "statusCode": {
              "type": "number"
            },
            "createdAt": {
              "type": "number"
            },
            "caseId": {
              "type": "string"
            },
            "actor": {
              "type": "string"
            },
            "comment": {
              "type": "string"
            },
            "ineligibleForAppeal": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "isCascading": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "blockHistory": {
          "type": "array",
          "items": {}
        },
        "interstitial": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "interstitialHistory": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "action",
              "createdAt"
            ]
          }
        }
      }
    },
    "internalRoutes": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "src",
              "status"
            ]
          },
          {
            "type": "object",
            "required": [
              "has",
              "mitigate"
            ]
          }
        ]
      }
    },
    "hasDeployments": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "dismissedToasts": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "action",
          "dismissedAt",
          "key",
          "value"
        ],
        "properties": {
          "key": {
            "type": "string"
          },
          "dismissedAt": {
            "type": "number"
          },
          "action": {
            "type": "string",
            "enum": [
              "accept",
              "cancel",
              "delete"
            ]
          },
          "value": {
            "nullable": true
          }
        }
      }
    },
    "protectedSourcemaps": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "tracing": {
      "type": "object",
      "properties": {
        "domains": {
          "type": "string"
        },
        "ignorePaths": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "samplingRules": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "rate"
            ]
          }
        }
      }
    },
    "avatar": {
      "type": "string",
      "nullable": true
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
