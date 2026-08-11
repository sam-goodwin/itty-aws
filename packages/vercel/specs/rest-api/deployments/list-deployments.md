---
title: list-deployments
product: vercel
url: /docs/rest-api/deployments/list-deployments
canonical_url: "https://vercel.com/docs/rest-api/deployments/list-deployments"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-deployments on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List deployments

```http
GET /v7/deployments
```

List deployments under the authenticated user or team. If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `app` | string | No | Name of the deployment. |
| `from` | number | No | Gets the deployment created after this Date timestamp. (default: current time) |
| `limit` | number | No | Maximum number of deployments to list from a request. |
| `projectId` | string | No | Filter deployments from the given ID or name. |
| `projectIds` | array | No | Filter deployments from the given project IDs. Cannot be used when projectId is specified. |
| `target` | string | No | Filter deployments based on the environment. |
| `to` | number | No | Gets the deployment created before this Date timestamp. (default: current time) |
| `users` | string | No | Filter out deployments based on users who have created the deployment. |
| `since` | number | No | Get Deployments created after this JavaScript timestamp. |
| `until` | number | No | Get Deployments created before this JavaScript timestamp. |
| `state` | string | No | Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`, `BLOCKED`) |
| `rollbackCandidate` | boolean | No | Filter deployments based on their rollback candidacy |
| `branch` | string | No | Filter deployments based on the branch name |
| `sha` | string | No | Filter deployments based on the SHA |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "deployments",
    "pagination"
  ],
  "properties": {
    "pagination": {
      "type": "object",
      "description": "This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.",
      "required": [
        "count",
        "next",
        "prev"
      ],
      "properties": {
        "count": {
          "type": "number",
          "description": "Amount of items in the current page."
        },
        "next": {
          "type": "number",
          "description": "Timestamp that must be used to request the next page.",
          "nullable": true
        },
        "prev": {
          "type": "number",
          "description": "Timestamp that must be used to request the previous page.",
          "nullable": true
        }
      }
    },
    "deployments": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "created",
          "createdAt",
          "creator",
          "inspectorUrl",
          "name",
          "projectId",
          "readyState",
          "type",
          "uid",
          "url"
        ],
        "properties": {
          "createdAt": {
            "type": "number"
          },
          "readyState": {
            "type": "string",
            "enum": [
              "BLOCKED",
              "BUILDING",
              "CANCELED",
              "DELETED",
              "ERROR",
              "INITIALIZING",
              "QUEUED",
              "READY"
            ]
          },
          "uid": {
            "type": "string",
            "description": "The unique identifier of the deployment."
          },
          "name": {
            "type": "string",
            "description": "The name of the deployment."
          },
          "projectId": {
            "type": "string",
            "description": "The project ID of the deployment"
          },
          "url": {
            "type": "string",
            "description": "The URL of the deployment."
          },
          "created": {
            "type": "number",
            "description": "Timestamp of when the deployment got created."
          },
          "defaultRoute": {
            "type": "string",
            "description": "The default route that should be used for screenshots and links if configured with microfrontends."
          },
          "deleted": {
            "type": "number",
            "description": "Timestamp of when the deployment got deleted."
          },
          "undeleted": {
            "type": "number",
            "description": "Timestamp of when the deployment was undeleted."
          },
          "softDeletedByRetention": {
            "type": "boolean",
            "description": "Optional flag to indicate if the deployment was soft deleted by retention policy.",
            "enum": [
              false,
              true
            ]
          },
          "source": {
            "type": "string",
            "description": "The source of the deployment.",
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
          "state": {
            "type": "string",
            "description": "In which state is the deployment.",
            "enum": [
              "BLOCKED",
              "BUILDING",
              "CANCELED",
              "DELETED",
              "ERROR",
              "INITIALIZING",
              "QUEUED",
              "READY"
            ]
          },
          "type": {
            "type": "string",
            "description": "The type of the deployment.",
            "enum": [
              "LAMBDAS"
            ]
          },
          "creator": {
            "type": "object",
            "description": "Metadata information of the user who created the deployment.",
            "required": [
              "uid"
            ]
          },
          "meta": {
            "type": "object",
            "description": "Metadata information from the Git provider."
          },
          "target": {
            "type": "string",
            "description": "On which environment has the deployment been deployed to.",
            "enum": [
              "production",
              "staging",
              null
            ],
            "nullable": true
          },
          "aliasError": {
            "type": "object",
            "description": "An error object in case aliasing of the deployment failed.",
            "nullable": true,
            "required": [
              "code",
              "message"
            ]
          },
          "aliasAssigned": {
            "nullable": true
          },
          "buildingAt": {
            "type": "number",
            "description": "Timestamp of when the deployment started building at."
          },
          "ready": {
            "type": "number",
            "description": "Timestamp of when the deployment got ready."
          },
          "readySubstate": {
            "type": "string",
            "description": "Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has seen production traffic",
            "enum": [
              "PROMOTED",
              "ROLLING",
              "STAGED"
            ]
          },
          "checksState": {
            "type": "string",
            "description": "State of all registered checks",
            "enum": [
              "completed",
              "registered",
              "running"
            ]
          },
          "checksConclusion": {
            "type": "string",
            "description": "Conclusion for checks",
            "enum": [
              "canceled",
              "failed",
              "skipped",
              "succeeded"
            ]
          },
          "checks": {
            "type": "object",
            "description": "Detailed information about v2 deployment checks. Includes information about blocked workflows in the deployment lifecycle.",
            "required": [
              "deployment-alias"
            ]
          },
          "inspectorUrl": {
            "type": "string",
            "description": "Vercel URL to inspect the deployment.",
            "nullable": true
          },
          "errorCode": {
            "type": "string",
            "description": "Error code when the deployment is in an error state."
          },
          "errorMessage": {
            "type": "string",
            "description": "Error message when the deployment is in an canceled or error state.",
            "nullable": true
          },
          "oomReport": {
            "type": "string",
            "description": "Indicates if the deployment encountered an out-of-memory error.",
            "enum": [
              "out-of-memory"
            ]
          },
          "isRollbackCandidate": {
            "type": "boolean",
            "description": "Deployment can be used for instant rollback",
            "enum": [
              false,
              true,
              null
            ],
            "nullable": true
          },
          "prebuilt": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "manualProvisioning": {
            "type": "object",
            "required": [
              "state"
            ]
          },
          "projectSettings": {
            "type": "object",
            "description": "The project settings which was used for this deployment"
          },
          "connectBuildsEnabled": {
            "type": "boolean",
            "description": "The flag saying if Secure Compute network is used for builds",
            "enum": [
              false,
              true
            ]
          },
          "connectConfigurationId": {
            "type": "string",
            "description": "The ID of Secure Compute network used for this deployment"
          },
          "passiveConnectConfigurationId": {
            "type": "string",
            "description": "The ID of Secure Compute network used for this deployment's passive functions"
          },
          "expiration": {
            "type": "number",
            "description": "The expiration configured by the project retention policy"
          },
          "proposedExpiration": {
            "type": "number",
            "description": "The expiration proposed to replace the existing expiration"
          },
          "platform": {
            "type": "object",
            "description": "Metadata about the source platform that triggered the deployment.",
            "required": [
              "creator",
              "origin",
              "source"
            ]
          },
          "customEnvironment": {
            "type": "object",
            "description": "The custom environment used for this deployment, if any",
            "required": [
              "id"
            ]
          },
          "seatBlock": {
            "type": "object",
            "description": "NSNB Blocked metadata",
            "required": [
              "blockCode"
            ]
          },
          "attribution": {
            "type": "object",
            "description": "Commit attribution metadata"
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

### 422: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
