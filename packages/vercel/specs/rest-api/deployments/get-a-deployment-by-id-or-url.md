---
title: get-a-deployment-by-id-or-url
product: vercel
url: /docs/rest-api/deployments/get-a-deployment-by-id-or-url
canonical_url: "https://vercel.com/docs/rest-api/deployments/get-a-deployment-by-id-or-url"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-deployment-by-id-or-url on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a deployment by ID or URL

```http
GET /v13/deployments/{idOrUrl}
```

Retrieves information for a deployment either by supplying its ID (`id` property) or Hostname (`url` property). Additional details will be included when the authenticated user or team is an owner of the deployment.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrUrl` | string | Yes | The unique identifier or hostname of the deployment. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `withGitRepoInfo` | string | No | When `true`, the response includes the `gitSource` object with the commit SHA, branch name, and connected repository metadata. Defaults to `false`. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Returns a reduced view of the deployment with public information only. Private fields are omitted when the requester is not the deployment owner.
Returns the deployment object for the authenticated owner, including private fields such as environment variables, build log URLs, and internal metadata.
Returns the reduced deployment view for anonymous (`vcn_`) callers. Pool-team details are withheld.

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "description": "Returns the reduced deployment view for anonymous (`vcn_`) callers. Pool-team details are withheld.",
      "required": [
        "aliasAssigned",
        "id",
        "readyState"
      ],
      "properties": {
        "alias": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "aliasAssigned": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
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
        }
      }
    },
    {
      "type": "object",
      "description": "Returns the deployment object for the authenticated owner, including private fields such as environment variables, build log URLs, and internal metadata.",
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
              "type": "array"
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
            ]
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
              "description": "Build machine configuration recorded for this deployment's build. See {@link DeploymentBuildMachine}. Distinct from the team/user `resourceConfig.buildMachine`, which only carries `default`."
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
              ]
            },
            "webAnalytics": {
              "type": "object",
              "required": [
                "id"
              ]
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
              "type": "array"
            },
            "qualities": {
              "type": "array"
            },
            "domains": {
              "type": "array"
            },
            "remotePatterns": {
              "type": "array"
            },
            "localPatterns": {
              "type": "array"
            },
            "minimumCacheTTL": {
              "type": "number"
            },
            "formats": {
              "type": "array"
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
            ]
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
              ]
            },
            {
              "type": "object",
              "description": "If the deployment was created using a Custom Environment, then this property contains information regarding the environment used.",
              "required": [
                "id"
              ]
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
              ]
            },
            {
              "type": "object",
              "required": [
                "org",
                "repo",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "host",
                "repoId",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "host",
                "org",
                "repo",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "repoId",
                "type"
              ]
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
              "type": "array"
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
            ]
          }
        },
        "functions": {
          "type": "object",
          "nullable": true,
          "additionalProperties": {
            "type": "object"
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
          "items": {}
        },
        "services": {
          "type": "array",
          "description": "Services detected during build from vercel.json experimentalServices or auto-detected from project structure. Used to inject service URLs as environment variables at runtime.",
          "items": {}
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
              ]
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
              ]
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
              ]
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
              ]
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
              ]
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
              ]
            },
            {
              "type": "array",
              "description": "Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags."
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
              ]
            },
            {
              "type": "object",
              "required": [
                "defaultAppProjectName",
                "groupIds",
                "isDefaultApp"
              ]
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
              ]
            },
            "origin": {
              "type": "object",
              "description": "Reference back to the entity on the platform that initiated the deployment.",
              "required": [
                "type",
                "value"
              ]
            },
            "creator": {
              "type": "object",
              "description": "The user on the external platform who triggered the deployment.",
              "required": [
                "name"
              ]
            },
            "meta": {
              "type": "object",
              "description": "Arbitrary key-value metadata provided by the platform."
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
              "description": "Build resource configuration snapshot for this deployment."
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
              ]
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
            "gitUserId": {},
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
              "description": "Commit metadata from the git commit author"
            },
            "gitUser": {
              "type": "object",
              "description": "Git provider user associated with the commit author email (only set if resolved)",
              "required": [
                "id",
                "login"
              ]
            },
            "vercelUser": {
              "type": "object",
              "description": "Vercel user linked to the git provider account (only set if resolved)",
              "required": [
                "id",
                "username"
              ]
            }
          }
        }
      }
    },
    {
      "type": "object",
      "description": "Returns a reduced view of the deployment with public information only. Private fields are omitted when the requester is not the deployment owner.",
      "required": [
        "aliasAssigned",
        "bootedAt",
        "buildSkipped",
        "buildingAt",
        "createdAt",
        "creator",
        "id",
        "meta",
        "name",
        "public",
        "readyState",
        "regions",
        "status",
        "type",
        "url",
        "version"
      ],
      "properties": {
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
            ]
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
              ]
            },
            {
              "type": "object",
              "description": "If the deployment was created using a Custom Environment, then this property contains information regarding the environment used.",
              "required": [
                "id"
              ]
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
              ]
            },
            {
              "type": "object",
              "required": [
                "org",
                "repo",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "host",
                "repoId",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "host",
                "org",
                "repo",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "repoId",
                "type"
              ]
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
              "type": "array"
            },
            "plan": {
              "type": "string"
            }
          }
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 403: You do not have permission to access this resource.

### 404: The deployment was not found

### 410: No description

### 429: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
