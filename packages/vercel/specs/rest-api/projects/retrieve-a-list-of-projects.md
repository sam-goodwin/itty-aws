---
title: retrieve-a-list-of-projects
product: vercel
url: /docs/rest-api/projects/retrieve-a-list-of-projects
canonical_url: "https://vercel.com/docs/rest-api/projects/retrieve-a-list-of-projects"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-a-list-of-projects on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve a list of projects

```http
GET /v10/projects
```

Allows to retrieve the list of projects of the authenticated user or team. The list will be paginated and the provided query parameters allow filtering the returned projects.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `from` | string | No | Query only projects updated after the given timestamp or continuation token. |
| `gitForkProtection` | string. enum: 1, 0 | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `limit` | string | No | Limit the number of projects returned |
| `search` | string. maxLength: 100 | No | Search projects by the name field |
| `repo` | string | No | Filter results by repo. Also used for project count |
| `repoId` | string | No | Filter results by Repository ID. |
| `repoUrl` | string | No | Filter results by Repository URL. |
| `excludeRepos` | string | No | Filter results by excluding those projects that belong to a repo |
| `edgeConfigId` | string | No | Filter results by connected Edge Config ID |
| `edgeConfigTokenId` | string | No | Filter results by connected Edge Config Token ID |
| `deprecated` | boolean | No |  |
| `elasticConcurrencyEnabled` | string. enum: 1, 0 | No | Filter results by projects with elastic concurrency enabled |
| `staticIpsEnabled` | string. enum: 0, 1 | No | Filter results by projects with Static IPs enabled |
| `buildMachineTypes` | string | No | Filter results by effective build machine types. Accepts comma-separated values. Use "elastic" for projects with elastic selection and "default" for projects without a build machine type set. |
| `buildQueueConfiguration` | string. enum: SKIP_NAMESPACE_QUEUE, WAIT_FOR_NAMESPACE_QUEUE | No | Filter results by build queue configuration. SKIP_NAMESPACE_QUEUE includes projects without a configuration set. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "nullable": true,
  "oneOf": [
    {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "accountId",
          "alias",
          "deploymentExpiration",
          "directoryListing",
          "id",
          "name",
          "nodeVersion",
          "resourceConfig",
          "serverlessFunctionRegion"
        ],
        "properties": {
          "accountId": {
            "type": "string"
          },
          "creator": {},
          "alias": {
            "type": "array"
          },
          "analytics": {
            "type": "object",
            "required": [
              "disabledAt",
              "enabledAt",
              "id"
            ]
          },
          "appliedCve55182Migration": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
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
          "customerSupportCodeVisibility": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "createdAt": {
            "type": "number"
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
          "deploymentExpiration": {
            "type": "object",
            "description": "Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects."
          },
          "installCommand": {
            "type": "string",
            "nullable": true
          },
          "ipBuckets": {
            "type": "array"
          },
          "env": {
            "type": "array"
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
          "gitForkProtection": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "id": {
            "type": "string"
          },
          "latestDeployments": {
            "type": "array"
          },
          "link": {},
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
            ]
          },
          "resourceConfig": {
            "type": "object",
            "required": [
              "functionDefaultRegions"
            ]
          },
          "rollingRelease": {
            "type": "object",
            "description": "Project-level rolling release configuration that defines how deployments should be gradually rolled out",
            "nullable": true,
            "required": [
              "target"
            ]
          },
          "rootDirectory": {
            "type": "string",
            "nullable": true
          },
          "serverlessFunctionRegion": {
            "type": "string"
          },
          "serverlessFunctionZeroConfigFailover": {
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
            ]
          },
          "skipGitConnectDuringLink": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "sourceFilesOutsideRootDirectory": {
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
            ]
          },
          "targets": {
            "type": "object"
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
          "trustedSources": {
            "type": "object",
            "nullable": true
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
          "hasActiveBranches": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "gitComments": {
            "type": "object",
            "required": [
              "onCommit",
              "onPullRequest"
            ]
          },
          "gitProviderOptions": {
            "type": "object",
            "required": [
              "createDeployments"
            ]
          },
          "paused": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "webAnalytics": {
            "type": "object",
            "required": [
              "id"
            ]
          },
          "security": {
            "type": "object"
          },
          "oidcTokenConfig": {
            "type": "object"
          },
          "tier": {
            "type": "string"
          },
          "abuse": {
            "type": "object",
            "required": [
              "history",
              "updatedAt"
            ]
          },
          "internalRoutes": {
            "type": "array"
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "pagination",
        "projects"
      ],
      "properties": {
        "projects": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "accountId",
              "alias",
              "deploymentExpiration",
              "directoryListing",
              "id",
              "name",
              "nodeVersion",
              "resourceConfig",
              "serverlessFunctionRegion"
            ]
          }
        },
        "pagination": {
          "oneOf": [
            {
              "type": "object",
              "description": "This object contains information related to the pagination of the current request using continuation tokens. Since CosmosDB doesn't support going to previous pages, only count and next are provided.",
              "required": [
                "count",
                "next"
              ]
            },
            {
              "type": "object",
              "description": "This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.",
              "required": [
                "count",
                "next",
                "prev"
              ]
            }
          ]
        }
      }
    },
    {
      "type": "object",
      "required": [
        "pagination",
        "projects"
      ],
      "properties": {
        "projects": {
          "type": "array",
          "items": {
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
            ]
          }
        },
        "pagination": {
          "oneOf": [
            {
              "type": "object",
              "description": "This object contains information related to the pagination of the current request using continuation tokens. Since CosmosDB doesn't support going to previous pages, only count and next are provided.",
              "required": [
                "count",
                "next"
              ]
            },
            {
              "type": "object",
              "description": "This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.",
              "required": [
                "count",
                "next",
                "prev"
              ]
            }
          ]
        }
      }
    }
  ]
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
