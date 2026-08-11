---
title: cancel-a-deployment
product: vercel
url: /docs/rest-api/deployments/cancel-a-deployment
canonical_url: "https://vercel.com/docs/rest-api/deployments/cancel-a-deployment"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about cancel-a-deployment on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Cancel a deployment

```http
PATCH /v12/deployments/{id}/cancel
```

Cancels a deployment that is currently in progress, stopping the build before it completes. Use this to recover quickly from accidental deploys, wrong-branch pushes, or builds with known errors — without waiting for them to finish. Returns 400 if the deployment is no longer cancelable (already `READY`, `ERROR`, or `CANCELED`). Returns the updated deployment object with `readyState: 'CANCELED'` on success.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The unique identifier of the deployment. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Returns the updated deployment object with `readyState` set to `CANCELED`. The build has been stopped and this action is irreversible.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "Returns the updated deployment object with `readyState` set to `CANCELED`. The build has been stopped and this action is irreversible.",
  "required": [
    "aliasAssigned",
    "bootedAt",
    "build",
    "buildSkipped",
    "buildingAt",
    "createdAt",
    "createdIn",
    "creator",
    "env",
    "id",
    "inspectorUrl",
    "isInConcurrentBuildsQueue",
    "isInSystemBuildsQueue",
    "meta",
    "name",
    "ownerId",
    "plan",
    "projectId",
    "projectSettings",
    "public",
    "readyState",
    "regions",
    "routes",
    "status",
    "type",
    "url",
    "version"
  ],
  "properties": {
    "aliasAssignedAt": {
      "nullable": true,
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
    "alwaysRefuseToBuild": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "build": {
      "type": "object",
      "required": [
        "env"
      ],
      "properties": {
        "env": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "buildArtifactUrls": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "builds": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "use"
        ],
        "properties": {
          "use": {
            "type": "string"
          },
          "src": {
            "type": "string"
          },
          "config": {
            "type": "object"
          }
        }
      }
    },
    "env": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "resourceConfig": {
      "type": "object",
      "properties": {
        "buildMachine": {
          "type": "object",
          "description": "Build machine configuration recorded for this deployment's build. See {@link DeploymentBuildMachine}. Distinct from the team/user `resourceConfig.buildMachine`, which only carries `default`.",
          "properties": {
            "purchaseType": {
              "type": "string",
              "description": "Machine type which was purchased/selected for this build. `basic` is the 2vCPU tier, recorded on the deployment so the build pipeline can detect a basic build without consulting the project.",
              "enum": [
                "basic",
                "enhanced",
                "standard",
                "turbo"
              ]
            },
            "defaultPurchaseType": {
              "type": "string",
              "description": "The default plan type for the build machine — what the customer is *paying* for on their plan. For most customers, this is standard, but some customers have an entitlement for enhanced builds.",
              "enum": [
                "basic",
                "enhanced",
                "standard"
              ]
            },
            "machineSelectionType": {
              "type": "string",
              "description": "Whether the build ran on a fixed or elastic machine. Used to drive billing for the build.",
              "enum": [
                "elastic",
                "fixed"
              ]
            },
            "cores": {
              "type": "number",
              "description": "Number of cores the build machine ran with. Set at dispatch time once the build lands on a hive."
            },
            "memory": {
              "type": "number",
              "description": "Memory, in MiB, the build machine ran with. Set at dispatch time once the build lands on a hive."
            }
          }
        }
      }
    },
    "inspectorUrl": {
      "type": "string",
      "nullable": true
    },
    "isInConcurrentBuildsQueue": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "isInSystemBuildsQueue": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "projectSettings": {
      "type": "object",
      "properties": {
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
        "buildCommand": {
          "type": "string",
          "nullable": true
        },
        "devCommand": {
          "type": "string",
          "nullable": true
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
        "commandForIgnoringBuildStep": {
          "type": "string",
          "nullable": true
        },
        "installCommand": {
          "type": "string",
          "nullable": true
        },
        "outputDirectory": {
          "type": "string",
          "nullable": true
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
        }
      }
    },
    "integrations": {
      "type": "object",
      "required": [
        "startedAt",
        "status"
      ],
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "error",
            "pending",
            "ready",
            "skipped",
            "timeout"
          ]
        },
        "startedAt": {
          "type": "number"
        },
        "claimedAt": {
          "type": "number"
        },
        "completedAt": {
          "type": "number"
        },
        "skippedAt": {
          "type": "number"
        },
        "skippedBy": {
          "type": "string"
        }
      }
    },
    "images": {
      "type": "object",
      "properties": {
        "sizes": {
          "type": "array",
          "items": {
            "type": "number"
          }
        },
        "qualities": {
          "type": "array",
          "items": {
            "type": "number"
          }
        },
        "domains": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "remotePatterns": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "hostname"
            ]
          }
        },
        "localPatterns": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "minimumCacheTTL": {
          "type": "number"
        },
        "formats": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "image/avif",
              "image/webp"
            ]
          }
        },
        "dangerouslyAllowSVG": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "contentSecurityPolicy": {
          "type": "string"
        },
        "contentDispositionType": {
          "type": "string",
          "enum": [
            "attachment",
            "inline"
          ]
        }
      }
    },
    "alias": {
      "type": "array",
      "description": "A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation",
      "items": {
        "type": "string"
      }
    },
    "aliasAssigned": {
      "type": "boolean",
      "description": "A boolean that will be true when the aliases from the alias property were assigned successfully",
      "enum": [
        false,
        true
      ]
    },
    "bootedAt": {
      "type": "number"
    },
    "buildingAt": {
      "type": "number"
    },
    "buildContainerFinishedAt": {
      "type": "number",
      "description": "Since April 2025 it necessary for On-Demand Concurrency Minutes calculation"
    },
    "buildSkipped": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "creator": {
      "type": "object",
      "description": "Information about the deployment creator",
      "required": [
        "uid"
      ],
      "properties": {
        "uid": {
          "type": "string",
          "description": "The ID of the user that created the deployment"
        },
        "username": {
          "type": "string",
          "description": "The username of the user that created the deployment"
        },
        "avatar": {
          "type": "string",
          "description": "The avatar of the user that created the deployment"
        }
      }
    },
    "initReadyAt": {
      "type": "number"
    },
    "isFirstBranchDeployment": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "lambdas": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "A partial representation of a Build used by the deployment endpoint.",
        "required": [
          "id",
          "output"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "readyState": {
            "type": "string",
            "enum": [
              "BUILDING",
              "ERROR",
              "INITIALIZING",
              "READY"
            ]
          },
          "createdAt": {
            "type": "number"
          },
          "entrypoint": {
            "type": "string",
            "nullable": true
          },
          "readyStateAt": {
            "type": "number"
          },
          "output": {
            "type": "array"
          }
        }
      }
    },
    "public": {
      "type": "boolean",
      "description": "A boolean representing if the deployment is public or not. By default this is `false`",
      "enum": [
        false,
        true
      ]
    },
    "ready": {
      "type": "number"
    },
    "status": {
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
    "team": {
      "type": "object",
      "description": "The team that owns the deployment if any",
      "required": [
        "id",
        "name",
        "slug"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        },
        "avatar": {
          "type": "string"
        }
      }
    },
    "userAliases": {
      "type": "array",
      "description": "An array of domains that were provided by the user when creating the Deployment.",
      "items": {
        "type": "string"
      }
    },
    "previewCommentsEnabled": {
      "type": "boolean",
      "description": "Whether or not preview comments are enabled for the deployment",
      "enum": [
        false,
        true
      ]
    },
    "ttyBuildLogs": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "customEnvironment": {
      "oneOf": [
        {
          "type": "object",
          "description": "If the deployment was created using a Custom Environment, then this property contains information regarding the environment used.",
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
        },
        {
          "type": "object",
          "description": "If the deployment was created using a Custom Environment, then this property contains information regarding the environment used.",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string"
            }
          }
        }
      ]
    },
    "oomReport": {
      "type": "string",
      "enum": [
        "out-of-memory"
      ]
    },
    "readyStateReason": {
      "type": "string"
    },
    "id": {
      "type": "string",
      "description": "A string holding the unique ID of the deployment"
    },
    "target": {
      "type": "string",
      "description": "If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the \"preview\" deployment.",
      "enum": [
        "production",
        "staging",
        null
      ],
      "nullable": true
    },
    "readyState": {
      "type": "string",
      "description": "The state of the deployment depending on the process of deploying, or if it is ready or in an error state",
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
    "aliasError": {
      "type": "object",
      "description": "An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`",
      "nullable": true,
      "required": [
        "code",
        "message"
      ],
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    },
    "aliasWarning": {
      "type": "object",
      "nullable": true,
      "required": [
        "code",
        "message"
      ],
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "link": {
          "type": "string"
        },
        "action": {
          "type": "string"
        }
      }
    },
    "errorCode": {
      "type": "string"
    },
    "errorMessage": {
      "type": "string",
      "nullable": true
    },
    "createdAt": {
      "type": "number",
      "description": "A number containing the date when the deployment was created in milliseconds"
    },
    "name": {
      "type": "string",
      "description": "The name of the project associated with the deployment at the time that the deployment was created"
    },
    "type": {
      "type": "string",
      "enum": [
        "LAMBDAS"
      ]
    },
    "aliasFinal": {
      "type": "string",
      "nullable": true
    },
    "autoAssignCustomDomains": {
      "type": "boolean",
      "description": "applies to custom domains only, defaults to `true`",
      "enum": [
        false,
        true
      ]
    },
    "automaticAliases": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "buildErrorAt": {
      "type": "number"
    },
    "checksState": {
      "type": "string",
      "enum": [
        "completed",
        "registered",
        "running"
      ]
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
    "deletedAt": {
      "type": "number",
      "description": "A number containing the date when the deployment was deleted at milliseconds",
      "nullable": true
    },
    "defaultRoute": {
      "type": "string",
      "description": "Computed field that is only available for deployments with a microfrontend configuration."
    },
    "canceledAt": {
      "type": "number"
    },
    "errorLink": {
      "type": "string"
    },
    "errorStep": {
      "type": "string"
    },
    "passiveRegions": {
      "type": "array",
      "description": "Since November 2023 this field defines a set of regions that we will deploy the lambda to passively Lambdas will be deployed to these regions but only invoked if all of the primary `regions` are marked as out of service",
      "items": {
        "type": "string"
      }
    },
    "gitSource": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "repoId",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "github"
              ]
            },
            "repoId": {},
            "ref": {
              "type": "string",
              "nullable": true
            },
            "sha": {
              "type": "string"
            },
            "prId": {
              "type": "number",
              "nullable": true
            }
          }
        },
        {
          "type": "object",
          "required": [
            "org",
            "repo",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "github"
              ]
            },
            "org": {
              "type": "string"
            },
            "repo": {
              "type": "string"
            },
            "ref": {
              "type": "string",
              "nullable": true
            },
            "sha": {
              "type": "string"
            },
            "prId": {
              "type": "number",
              "nullable": true
            }
          }
        },
        {
          "type": "object",
          "required": [
            "host",
            "repoId",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "github-custom-host"
              ]
            },
            "host": {
              "type": "string"
            },
            "repoId": {},
            "ref": {
              "type": "string",
              "nullable": true
            },
            "sha": {
              "type": "string"
            },
            "prId": {
              "type": "number",
              "nullable": true
            }
          }
        },
        {
          "type": "object",
          "required": [
            "host",
            "org",
            "repo",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "github-custom-host"
              ]
            },
            "host": {
              "type": "string"
            },
            "org": {
              "type": "string"
            },
            "repo": {
              "type": "string"
            },
            "ref": {
              "type": "string",
              "nullable": true
            },
            "sha": {
              "type": "string"
            },
            "prId": {
              "type": "number",
              "nullable": true
            }
          }
        },
        {
          "type": "object",
          "required": [
            "repoId",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "github-limited"
              ]
            },
            "repoId": {},
            "ref": {
              "type": "string",
              "nullable": true
            },
            "sha": {
              "type": "string"
            },
            "prId": {
              "type": "number",
              "nullable": true
            }
          }
        },
        {
          "description": "(14 more variants — see OpenAPI spec)"
        }
      ]
    },
    "manualProvisioning": {
      "type": "object",
      "description": "Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called.",
      "required": [
        "state"
      ],
      "properties": {
        "state": {
          "type": "string",
          "description": "Current provisioning state",
          "enum": [
            "COMPLETE",
            "PENDING",
            "TIMEOUT"
          ]
        },
        "completedAt": {
          "type": "number",
          "description": "Timestamp when manual provisioning completed"
        }
      }
    },
    "meta": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "originCacheRegion": {
      "type": "string"
    },
    "nodeVersion": {
      "type": "string",
      "description": "If set it overrides the `projectSettings.nodeVersion` for this deployment.",
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
    "project": {
      "type": "object",
      "description": "The public project information associated with the deployment.",
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "framework": {
          "type": "string",
          "nullable": true
        }
      }
    },
    "prebuilt": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "readySubstate": {
      "type": "string",
      "description": "Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of having production traffic gradually transitioned. - PROMOTED: has seen production traffic",
      "enum": [
        "PROMOTED",
        "ROLLING",
        "STAGED"
      ]
    },
    "regions": {
      "type": "array",
      "description": "The regions the deployment exists in",
      "items": {
        "type": "string"
      }
    },
    "softDeletedByRetention": {
      "type": "boolean",
      "description": "flag to indicate if the deployment was deleted by retention policy",
      "enum": [
        false,
        true
      ]
    },
    "source": {
      "type": "string",
      "description": "Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it.",
      "enum": [
        "api-trigger-git-deploy",
        "cli",
        "clone/repo",
        "drop",
        "git",
        "git-deploy-hook",
        "import",
        "import/repo",
        "redeploy",
        "v0-web"
      ]
    },
    "undeletedAt": {
      "type": "number",
      "description": "A number containing the date when the deployment was undeleted at milliseconds"
    },
    "url": {
      "type": "string",
      "description": "A string with the unique URL of the deployment"
    },
    "userConfiguredDeploymentId": {
      "type": "string",
      "description": "Since January 2025 User-configured deployment ID for skew protection with pre-built deployments. This is set when users configure a custom deploymentId in their next.config.js file. This allows Next.js to use skew protection even when deployments are pre-built outside of Vercel's build system."
    },
    "version": {
      "type": "number",
      "description": "The platform version that was used to create the deployment.",
      "enum": [
        2
      ]
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
      ],
      "properties": {
        "iss": {
          "type": "string"
        },
        "sub": {
          "type": "string"
        },
        "scope": {
          "type": "string"
        },
        "aud": {
          "type": "string"
        },
        "owner": {
          "type": "string"
        },
        "owner_id": {
          "type": "string"
        },
        "project": {
          "type": "string"
        },
        "project_id": {
          "type": "string"
        },
        "environment": {
          "type": "string"
        },
        "custom_environment_id": {
          "type": "string"
        },
        "mfe_group_ids": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "plan": {
          "type": "string"
        }
      }
    },
    "projectId": {
      "type": "string"
    },
    "plan": {
      "type": "string",
      "enum": [
        "enterprise",
        "hobby",
        "pro"
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
    "createdIn": {
      "type": "string"
    },
    "crons": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "path",
          "schedule"
        ],
        "properties": {
          "schedule": {
            "type": "string"
          },
          "path": {
            "type": "string"
          }
        }
      }
    },
    "functions": {
      "type": "object",
      "nullable": true,
      "additionalProperties": {
        "type": "object",
        "properties": {
          "architecture": {
            "type": "string",
            "enum": [
              "arm64",
              "x86_64"
            ]
          },
          "memory": {
            "type": "number"
          },
          "maxDuration": {},
          "maxConcurrency": {
            "type": "number"
          },
          "regions": {
            "type": "array"
          },
          "functionFailoverRegions": {
            "type": "array"
          },
          "runtime": {
            "type": "string"
          },
          "includeFiles": {
            "type": "string"
          },
          "excludeFiles": {
            "type": "string"
          },
          "experimentalTriggers": {
            "type": "array"
          },
          "supportsCancellation": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          }
        }
      }
    },
    "isInstantStatic": {
      "type": "boolean",
      "description": "Whether this deployment completed through the instant static fast path.",
      "enum": [
        false,
        true
      ]
    },
    "monorepoManager": {
      "type": "string",
      "nullable": true
    },
    "ownerId": {
      "type": "string"
    },
    "passiveConnectConfigurationId": {
      "type": "string",
      "description": "Since November 2023 this field defines a Secure Compute network that will only be used to deploy passive lambdas to (as in passiveRegions)"
    },
    "routes": {
      "type": "array",
      "nullable": true,
      "items": {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "src"
            ]
          },
          {
            "type": "object",
            "required": [
              "handle"
            ]
          },
          {
            "type": "object",
            "required": [
              "continue",
              "middleware",
              "src"
            ]
          }
        ]
      }
    },
    "services": {
      "type": "array",
      "description": "Services detected during build from vercel.json experimentalServices or auto-detected from project structure. Used to inject service URLs as environment variables at runtime.",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "description": "Services detected during build from vercel.json experimentalServices or auto-detected from project structure. Used to inject service URLs as environment variables at runtime.",
            "required": [
              "builder",
              "name",
              "schema",
              "type",
              "workspace"
            ]
          },
          {
            "type": "object",
            "description": "Services detected during build from vercel.json experimentalServices or auto-detected from project structure. Used to inject service URLs as environment variables at runtime.",
            "required": [
              "builder",
              "name",
              "root",
              "schema"
            ]
          }
        ]
      }
    },
    "gitRepo": {
      "nullable": true,
      "oneOf": [
        {
          "type": "object",
          "required": [
            "defaultBranch",
            "name",
            "namespace",
            "ownerType",
            "path",
            "private",
            "projectId",
            "type",
            "url"
          ],
          "properties": {
            "namespace": {
              "type": "string"
            },
            "projectId": {
              "type": "number"
            },
            "type": {
              "type": "string",
              "enum": [
                "gitlab"
              ]
            },
            "url": {
              "type": "string"
            },
            "path": {
              "type": "string"
            },
            "defaultBranch": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "private": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "ownerType": {
              "type": "string",
              "enum": [
                "team",
                "user"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "defaultBranch",
            "name",
            "org",
            "ownerType",
            "path",
            "private",
            "repo",
            "repoId",
            "repoOwnerId",
            "type"
          ],
          "properties": {
            "org": {
              "type": "string"
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
            "repoOwnerId": {
              "type": "number"
            },
            "path": {
              "type": "string"
            },
            "defaultBranch": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "private": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "ownerType": {
              "type": "string",
              "enum": [
                "team",
                "user"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "defaultBranch",
            "name",
            "owner",
            "ownerType",
            "path",
            "private",
            "repoUuid",
            "slug",
            "type",
            "workspaceUuid"
          ],
          "properties": {
            "owner": {
              "type": "string"
            },
            "repoUuid": {
              "type": "string"
            },
            "slug": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "bitbucket"
              ]
            },
            "workspaceUuid": {
              "type": "string"
            },
            "path": {
              "type": "string"
            },
            "defaultBranch": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "private": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "ownerType": {
              "type": "string",
              "enum": [
                "team",
                "user"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "defaultBranch",
            "name",
            "org",
            "ownerType",
            "path",
            "private",
            "repo",
            "type"
          ],
          "properties": {
            "org": {
              "type": "string"
            },
            "repo": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "vercel"
              ]
            },
            "path": {
              "type": "string"
            },
            "defaultBranch": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "private": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "ownerType": {
              "type": "string",
              "enum": [
                "team",
                "user"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "defaultBranch",
            "name",
            "owner",
            "ownerType",
            "path",
            "private",
            "repo",
            "repoId",
            "type"
          ],
          "properties": {
            "owner": {
              "type": "string",
              "description": "Owner (namespace) slug."
            },
            "repo": {
              "type": "string"
            },
            "repoId": {
              "type": "string",
              "description": "Origin repository id."
            },
            "type": {
              "type": "string",
              "enum": [
                "cursor-origin"
              ]
            },
            "path": {
              "type": "string"
            },
            "defaultBranch": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "private": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "ownerType": {
              "type": "string",
              "enum": [
                "team",
                "user"
              ]
            }
          }
        }
      ]
    },
    "flags": {
      "oneOf": [
        {
          "type": "object",
          "description": "Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags.",
          "required": [
            "definitions"
          ],
          "properties": {
            "definitions": {
              "type": "object"
            }
          }
        },
        {
          "type": "array",
          "description": "Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags.",
          "items": {
            "type": "object",
            "description": "Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags."
          }
        }
      ]
    },
    "microfrontends": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "defaultAppProjectName",
            "groupIds"
          ],
          "properties": {
            "isDefaultApp": {
              "type": "boolean",
              "enum": [
                false
              ]
            },
            "defaultAppProjectName": {
              "type": "string",
              "description": "The project name of the default app of this deployment's microfrontends group."
            },
            "defaultRoute": {
              "type": "string",
              "description": "A path that is used to take screenshots and as the default path in preview links when a domain for this microfrontend is shown in the UI."
            },
            "groupIds": {
              "type": "array",
              "description": "The group of microfrontends that this project belongs to. Each microfrontend project must belong to a microfrontends group that is the set of microfrontends that are used together."
            }
          }
        },
        {
          "type": "object",
          "required": [
            "defaultAppProjectName",
            "groupIds",
            "isDefaultApp"
          ],
          "properties": {
            "isDefaultApp": {
              "type": "boolean",
              "enum": [
                true
              ]
            },
            "mfeConfigUploadState": {
              "type": "string",
              "description": "The result of the microfrontends config upload during deployment creation / build. Only set for default app deployments. The config upload is attempted during deployment create, and then again during the build. If the config is not in the root directory, or the deployment is prebuilt, the config cannot be uploaded during deployment create. The upload during deployment build finds the config even if it's not in the root directory, as it has access to all files. Uploading the config during create is ideal, as then all child deployments are guaranteed to have access to the default app deployment config even if the default app has not yet started building. If the config is not uploaded, the child app will show as building until the config has been uploaded during the default app build. - `success` - The config was uploaded successfully, either when the deployment was created or during the build. - `waiting_on_build` - The config could not be uploaded during deployment create, will be attempted again during the build. - `no_config` - No config was found. Only set once the build has not found the config in any of the deployment's files. - `undefined` - Legacy deployments, or there was an error uploading the config during deployment create.",
              "enum": [
                "no_config",
                "success",
                "waiting_on_build"
              ]
            },
            "defaultAppProjectName": {
              "type": "string",
              "description": "The project name of the default app of this deployment's microfrontends group."
            },
            "defaultRoute": {
              "type": "string",
              "description": "A path that is used to take screenshots and as the default path in preview links when a domain for this microfrontend is shown in the UI."
            },
            "groupIds": {
              "type": "array",
              "description": "The group of microfrontends that this project belongs to. Each microfrontend project must belong to a microfrontends group that is the set of microfrontends that are used together."
            }
          }
        }
      ]
    },
    "platform": {
      "type": "object",
      "description": "Metadata about the source platform that triggered the deployment. Allows us to map a deployment back to a platform (e.g. the chat that created it)",
      "required": [
        "creator",
        "origin",
        "source"
      ],
      "properties": {
        "source": {
          "type": "object",
          "description": "The external platform that created the deployment (e.g. its display name).",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "Display name of the platform."
            }
          }
        },
        "origin": {
          "type": "object",
          "description": "Reference back to the entity on the platform that initiated the deployment.",
          "required": [
            "type",
            "value"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "Whether the value is an opaque identifier or a URL.",
              "enum": [
                "id",
                "url"
              ]
            },
            "value": {
              "type": "string",
              "description": "The identifier or URL pointing to the originating entity."
            }
          }
        },
        "creator": {
          "type": "object",
          "description": "The user on the external platform who triggered the deployment.",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "Display name of the platform user."
            },
            "avatar": {
              "type": "string",
              "description": "URL of the platform user's avatar image."
            }
          }
        },
        "meta": {
          "type": "object",
          "description": "Arbitrary key-value metadata provided by the platform.",
          "additionalProperties": {
            "type": "string"
          }
        }
      }
    },
    "config": {
      "type": "object",
      "description": "Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured",
      "required": [
        "functionMemoryType",
        "functionTimeout",
        "functionType",
        "secureComputeFallbackRegion",
        "secureComputePrimaryRegion"
      ],
      "properties": {
        "version": {
          "type": "number"
        },
        "functionType": {
          "type": "string",
          "enum": [
            "fluid",
            "standard"
          ]
        },
        "functionMemoryType": {
          "type": "string",
          "enum": [
            "performance",
            "performance_xl",
            "standard",
            "standard_legacy"
          ]
        },
        "functionTimeout": {
          "type": "number",
          "nullable": true
        },
        "secureComputePrimaryRegion": {
          "type": "string",
          "nullable": true
        },
        "secureComputeFallbackRegion": {
          "type": "string",
          "nullable": true
        },
        "isUsingActiveCPU": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "resourceConfig": {
          "type": "object",
          "description": "Build resource configuration snapshot for this deployment.",
          "properties": {
            "buildQueue": {
              "type": "object",
              "description": "Build resource configuration snapshot for this deployment."
            },
            "elasticConcurrency": {
              "type": "string",
              "description": "When elastic concurrency is used for this deployment, a value is set. The value tells the reason where the setting was coming from. - TEAM_SETTING: Inherited from team settings - PROJECT_SETTING: Inherited from project settings - SKIP_QUEUE: Manually triggered by user to skip the queues",
              "enum": [
                "PROJECT_SETTING",
                "SKIP_QUEUE",
                "TEAM_SETTING"
              ]
            },
            "buildMachine": {
              "type": "object"
            }
          }
        }
      }
    },
    "checks": {
      "type": "object",
      "required": [
        "deployment-alias"
      ],
      "properties": {
        "deployment-alias": {
          "type": "object",
          "description": "Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.",
          "required": [
            "startedAt",
            "state"
          ],
          "properties": {
            "state": {
              "type": "string",
              "enum": [
                "failed",
                "pending",
                "succeeded"
              ]
            },
            "startedAt": {
              "type": "number"
            },
            "completedAt": {
              "type": "number"
            }
          }
        }
      }
    },
    "seatBlock": {
      "type": "object",
      "description": "NSNB Blocked metadata",
      "required": [
        "blockCode"
      ],
      "properties": {
        "blockCode": {
          "type": "string",
          "description": "The NSNB decision code for the seat block. TODO: We should consolidate block types.",
          "enum": [
            "COMMIT_AUTHOR_REQUIRED",
            "TEAM_ACCESS_REQUIRED"
          ]
        },
        "userId": {
          "type": "string",
          "description": "The blocked vercel user ID."
        },
        "isVerified": {
          "type": "boolean",
          "description": "Determines if the user was verified during the block. In the git integration case, the commit sender was the author.",
          "enum": [
            false,
            true
          ]
        },
        "gitUserId": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "number"
            }
          ]
        },
        "gitProvider": {
          "type": "string",
          "description": "The git provider type associated with gitUserId.",
          "enum": [
            "bitbucket",
            "github",
            "gitlab"
          ]
        }
      }
    },
    "attribution": {
      "type": "object",
      "description": "Attribution metadata for the deployment, linking commit author to git and Vercel users. Only populated when the `enable-deployment-attribution` flag is enabled.",
      "properties": {
        "commitMeta": {
          "type": "object",
          "description": "Commit metadata from the git commit author",
          "properties": {
            "email": {
              "type": "string",
              "description": "Email from git commit author"
            },
            "name": {
              "type": "string",
              "description": "Name from git commit author"
            },
            "isVerified": {
              "type": "boolean",
              "description": "Whether the commit was signed/verified (GitHub only, others return undefined)",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "gitUser": {
          "type": "object",
          "description": "Git provider user associated with the commit author email (only set if resolved)",
          "required": [
            "id",
            "login"
          ],
          "properties": {
            "id": {},
            "login": {
              "type": "string",
              "description": "Git provider username/login"
            },
            "type": {
              "type": "string",
              "description": "User type"
            },
            "provider": {
              "type": "string",
              "description": "The git provider (github, gitlab, bitbucket)"
            }
          }
        },
        "vercelUser": {
          "type": "object",
          "description": "Vercel user linked to the git provider account (only set if resolved)",
          "required": [
            "id",
            "username"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "Vercel user ID"
            },
            "username": {
              "type": "string",
              "description": "Vercel username"
            },
            "teamRoles": {
              "type": "array",
              "description": "Team roles at time of deployment"
            }
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
