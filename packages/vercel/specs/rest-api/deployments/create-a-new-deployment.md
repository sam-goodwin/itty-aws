---
title: create-a-new-deployment
product: vercel
url: /docs/rest-api/deployments/create-a-new-deployment
canonical_url: "https://vercel.com/docs/rest-api/deployments/create-a-new-deployment"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-new-deployment on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a new deployment

```http
POST /v13/deployments
```

Creates a new deployment for the authenticated team or user. For non-git deployments, upload files first via the file upload API, then reference them here by SHA — or inline small files directly in the request body. To redeploy an existing deployment, provide its `deploymentId`; all settings are inherited unless explicitly overridden. The deployment begins building immediately and transitions through `QUEUED` → `INITIALIZING` → `BUILDING` before reaching `READY` or `ERROR`.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `forceNew` | object. enum: 0, 1 | No | Forces a new deployment even if there is a previous similar deployment. Set to `1` to bypass deployment deduplication and always trigger a fresh build. |
| `skipAutoDetectionConfirmation` | object. enum: 0, 1 | No | Set to `1` to skip framework auto-detection and proceed without confirmation. By default, if Vercel detects a framework that differs from the project setting, the API returns a `400` asking you to confirm. Use this to suppress that check in automated pipelines. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "customEnvironmentSlugOrId": {
      "type": "string",
      "description": "The slug or ID of a custom environment to deploy to, overriding the default target environment. When omitted, the deployment targets the environment inferred from the branch (production or preview)."
    },
    "deploymentId": {
      "type": "string",
      "description": "The ID of an existing deployment to redeploy. All project settings and environment variables are inherited from the original unless explicitly overridden in this request. The redeployment gets a new ID, URL, and build."
    },
    "files": {
      "type": "array",
      "description": "The files to include in the deployment. Each entry is either an inlined file (with `data` and `encoding`) or a reference to a previously uploaded file (with `sha` and `size`). Required for non-git deployments. Cannot be used together with `gitSource`.",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "description": "Used in the case you want to inline a file inside the request",
            "required": [
              "file",
              "data"
            ]
          },
          {
            "type": "object",
            "description": "Used in the case you want to reference a file that was already uploaded",
            "required": [
              "file"
            ]
          }
        ]
      }
    },
    "gitMetadata": {
      "type": "object",
      "description": "Populates initial git metadata for different git providers.",
      "properties": {
        "remoteUrl": {
          "type": "string",
          "description": "The git repository's remote origin url"
        },
        "commitAuthorName": {
          "type": "string",
          "description": "The name of the author of the commit"
        },
        "commitAuthorEmail": {
          "type": "string",
          "description": "The email of the author of the commit"
        },
        "commitMessage": {
          "type": "string",
          "description": "The commit message"
        },
        "commitRef": {
          "type": "string",
          "description": "The branch on which the commit was made"
        },
        "commitSha": {
          "type": "string",
          "description": "The hash of the commit"
        },
        "dirty": {
          "type": "boolean",
          "description": "Whether or not there have been modifications to the working tree since the latest commit"
        },
        "ci": {
          "type": "boolean",
          "description": "True if process.env.CI was set when deploying"
        },
        "ciType": {
          "type": "string",
          "description": "The type of CI system used"
        },
        "ciGitProviderUsername": {
          "type": "string",
          "description": "The username used for the Git Provider (e.g. GitHub) if their CI (e.g. GitHub Actions) was used, if available"
        },
        "ciGitRepoVisibility": {
          "type": "string",
          "description": "The visibility of the Git repository if their CI (e.g. GitHub Actions) was used, if available"
        },
        "rootDirectory": {
          "type": "string",
          "description": "Path of the deployed directory relative to the detected git repository root. Empty string when deploying from the repository root."
        }
      }
    },
    "gitSource": {
      "description": "Defines the Git Repository source to be deployed. This property can not be used in combination with `files`.",
      "anyOf": [
        {
          "type": "object",
          "required": [
            "type",
            "sha"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "vercel"
              ]
            },
            "sha": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type",
            "ref",
            "repoId"
          ],
          "properties": {
            "ref": {
              "type": "string"
            },
            "repoId": {},
            "sha": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "github"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type",
            "ref",
            "org",
            "repo"
          ],
          "properties": {
            "org": {
              "type": "string"
            },
            "ref": {
              "type": "string"
            },
            "repo": {
              "type": "string"
            },
            "sha": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "github"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type",
            "ref",
            "repoId"
          ],
          "properties": {
            "ref": {
              "type": "string"
            },
            "repoId": {},
            "sha": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "github-limited"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type",
            "ref",
            "org",
            "repo"
          ],
          "properties": {
            "org": {
              "type": "string"
            },
            "ref": {
              "type": "string"
            },
            "repo": {
              "type": "string"
            },
            "sha": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "github-limited"
              ]
            }
          }
        },
        {
          "description": "(4 more variants — see OpenAPI spec)"
        }
      ]
    },
    "meta": {
      "type": "object",
      "description": "An object containing the deployment's metadata. Multiple key-value pairs can be attached to a deployment",
      "additionalProperties": {
        "type": "string",
        "maxLength": 65536
      }
    },
    "monorepoManager": {
      "type": "string",
      "description": "The monorepo manager that is being used for this deployment. When `null` is used no monorepo manager is selected",
      "nullable": true
    },
    "name": {
      "type": "string",
      "description": "A string with the project name used in the deployment URL"
    },
    "project": {
      "type": "string",
      "description": "The target project identifier in which the deployment will be created. When defined, this parameter overrides name"
    },
    "projectSettings": {
      "type": "object",
      "description": "Project settings that will be applied to the deployment. It is required for the first deployment of a project and will be saved for any following deployments",
      "properties": {
        "buildCommand": {
          "type": "string",
          "description": "The build command for this project. When `null` is used this value will be automatically detected",
          "maxLength": 256,
          "nullable": true
        },
        "commandForIgnoringBuildStep": {
          "type": "string",
          "maxLength": 256,
          "nullable": true
        },
        "devCommand": {
          "type": "string",
          "description": "The dev command for this project. When `null` is used this value will be automatically detected",
          "maxLength": 256,
          "nullable": true
        },
        "framework": {
          "type": "string",
          "description": "The framework that is being used for this project. When `null` is used no framework is selected",
          "enum": [
            null,
            "services",
            "container",
            "blitzjs",
            "nextjs",
            "gatsby",
            "remix",
            "react-router",
            "astro",
            "hexo",
            "eleventy",
            "docusaurus-2",
            "docusaurus",
            "preact",
            "solidstart-1",
            "solidstart",
            "dojo",
            "ember",
            "vue",
            "scully",
            "ionic-angular",
            "angular",
            "polymer",
            "svelte",
            "sveltekit",
            "sveltekit-1",
            "ionic-react",
            "create-react-app",
            "gridsome",
            "umijs",
            "sapper",
            "saber",
            "stencil",
            "nuxtjs",
            "redwoodjs",
            "hugo",
            "jekyll",
            "brunch",
            "middleman",
            "zola",
            "hydrogen",
            "vite",
            "tanstack-start",
            "tanstack-start-lovable",
            "vitepress",
            "vuepress",
            "parcel",
            "fastapi",
            "flask",
            "fasthtml",
            "django",
            "ash",
            "eve",
            "sanity",
            "sanity-v2",
            "storybook",
            "nitro",
            "hono",
            "express",
            "h3",
            "koa",
            "nestjs",
            "elysia",
            "fastify",
            "xmcp",
            "python",
            "ruby",
            "rust",
            "axum",
            "actix-web",
            "bun",
            "node",
            "go",
            "mastra"
          ],
          "nullable": true
        },
        "installCommand": {
          "type": "string",
          "description": "The install command for this project. When `null` is used this value will be automatically detected",
          "maxLength": 256,
          "nullable": true
        },
        "nodeVersion": {
          "type": "string",
          "description": "Override the Node.js version that should be used for this deployment",
          "enum": [
            "24.x",
            "22.x",
            "20.x",
            "18.x",
            "16.x",
            "14.x",
            "12.x",
            "10.x",
            "8.10.x"
          ]
        },
        "outputDirectory": {
          "type": "string",
          "description": "The output directory of the project. When `null` is used this value will be automatically detected",
          "maxLength": 256,
          "nullable": true
        },
        "rootDirectory": {
          "type": "string",
          "description": "The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root",
          "maxLength": 256,
          "nullable": true
        },
        "serverlessFunctionRegion": {
          "type": "string",
          "description": "The region to deploy Serverless Functions in this project",
          "maxLength": 4,
          "nullable": true
        },
        "skipGitConnectDuringLink": {
          "type": "boolean",
          "description": "Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`."
        },
        "sourceFilesOutsideRootDirectory": {
          "type": "boolean",
          "description": "Indicates if there are source files outside of the root directory, typically used for monorepos"
        }
      }
    },
    "target": {
      "type": "string",
      "description": "Either not defined, `staging`, `production`, or a custom environment identifier. If `staging`, a staging alias in the format `<project>-<team>.vercel.app` will be assigned. If `production`, any aliases defined in `alias` will be assigned. If omitted, the target will be `preview`."
    },
    "withLatestCommit": {
      "type": "boolean",
      "description": "When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used."
    }
  }
}
```

## Responses

### 200: Returns the newly created deployment object. Poll `readyState` to track build progress. See https://vercel.com/docs/deployments/deployment-states for possible states.
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
      "description": "Returns the newly created deployment object. Poll `readyState` to track build progress. See https://vercel.com/docs/deployments/deployment-states for possible states.",
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
    }
  ]
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated
Pro customers are allowed to deploy Serverless Functions to up to `proMaxRegions` regions, or if the project was created before the limit was introduced.
Deploying to Serverless Functions to multiple regions requires a plan update

### 403: You do not have permission to access this resource.

### 404: No description

### 409: The deployment project is being transferred

### 410: No description

### 426: No description

### 429: No description

### 500: No description

### 503: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
