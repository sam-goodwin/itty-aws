---
title: add-a-routing-rule
product: vercel
url: /docs/rest-api/project-routes/add-a-routing-rule
canonical_url: "https://vercel.com/docs/rest-api/project-routes/add-a-routing-rule"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about add-a-routing-rule on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Add a routing rule

```http
POST /v1/projects/{projectId}/routes
```

Add a single routing rule to a project at a specified position. Defaults to the end of the list if no position is provided. The route is enabled by default. Stages a new version with the added route.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "route"
  ],
  "properties": {
    "route": {
      "type": "object",
      "required": [
        "name",
        "route"
      ],
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 256
        },
        "description": {
          "type": "string",
          "maxLength": 1024
        },
        "enabled": {
          "type": "boolean"
        },
        "srcSyntax": {
          "type": "string",
          "description": "Pattern syntax type. If not provided, inferred from pattern.",
          "enum": [
            "equals",
            "path-to-regexp",
            "regex"
          ]
        },
        "route": {
          "type": "object",
          "required": [
            "src"
          ],
          "properties": {
            "src": {
              "type": "string"
            },
            "dest": {
              "type": "string"
            },
            "headers": {
              "type": "object"
            },
            "caseSensitive": {
              "type": "boolean"
            },
            "status": {
              "type": "integer"
            },
            "has": {
              "type": "array"
            },
            "missing": {
              "type": "array"
            },
            "transforms": {
              "type": "array"
            },
            "respectOriginCacheControl": {
              "type": "boolean"
            }
          }
        }
      }
    },
    "position": {
      "type": "object",
      "description": "Controls where the route is inserted. Defaults to \"end\" if omitted.",
      "properties": {
        "placement": {
          "type": "string",
          "description": "\"after\"/\"before\" require referenceId.",
          "enum": [
            "start",
            "end",
            "after",
            "before"
          ]
        },
        "referenceId": {
          "type": "string",
          "description": "Route ID to insert after/before. Required for \"after\"/\"before\"."
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
  "required": [
    "route",
    "version"
  ],
  "properties": {
    "route": {
      "type": "object",
      "required": [
        "id",
        "name",
        "route"
      ],
      "properties": {
        "routeType": {
          "type": "string",
          "enum": [
            "redirect",
            "rewrite",
            "set_status",
            "transform"
          ]
        },
        "id": {
          "type": "string",
          "description": "Unique identifier for the routing rule."
        },
        "name": {
          "type": "string",
          "description": "Human-readable name for the routing rule."
        },
        "description": {
          "type": "string",
          "description": "Optional description of what the routing rule does."
        },
        "enabled": {
          "type": "boolean",
          "description": "Whether the routing rule is enabled. Defaults to true.",
          "enum": [
            false,
            true
          ]
        },
        "staged": {
          "type": "boolean",
          "description": "Whether this route is new and not yet published to production. Set to true only when a route is first created via add-route. Cleared (set to false) when a version is promoted to production.",
          "enum": [
            false,
            true
          ]
        },
        "route": {
          "type": "object",
          "description": "The route definition from @vercel/routing-utils.",
          "required": [
            "src"
          ],
          "properties": {
            "src": {
              "type": "string"
            },
            "dest": {
              "type": "string"
            },
            "headers": {
              "type": "object"
            },
            "methods": {
              "type": "array"
            },
            "continue": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "override": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "caseSensitive": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "check": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "important": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
            "status": {
              "type": "number"
            },
            "has": {
              "type": "array"
            },
            "missing": {
              "type": "array"
            },
            "mitigate": {
              "type": "object",
              "required": [
                "action"
              ]
            },
            "transforms": {
              "type": "array"
            },
            "env": {
              "type": "array"
            },
            "locale": {
              "type": "object"
            },
            "source": {
              "type": "string",
              "description": "Aliases for `src`, `dest`, and `status`. These provide consistency with the `rewrites`, `redirects`, and `headers` fields which use `source`, `destination`, and `statusCode`. During normalization, the string forms are converted to their canonical forms (`src`, `dest`, `status`) and stripped from the route object. `destination` may also be a service-targeted object, in which case routing is delegated into the named service's internal route table and the object is preserved as-is (not folded into `dest`)."
            },
            "destination": {},
            "statusCode": {
              "type": "number"
            },
            "middlewarePath": {
              "type": "string",
              "description": "A middleware key within the `output` key under the build result. Overrides a `middleware` definition."
            },
            "middlewareRawSrc": {
              "type": "array",
              "description": "The original middleware matchers."
            },
            "middleware": {
              "type": "number",
              "description": "A middleware index in the `middleware` key under the build result"
            },
            "respectOriginCacheControl": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            }
          }
        },
        "rawSrc": {
          "type": "string",
          "description": "Original source pattern provided by user (path-to-regexp or regex). Used to display the user's input in API responses."
        },
        "rawDest": {
          "type": "string",
          "description": "Original destination provided by user."
        },
        "srcSyntax": {
          "type": "string",
          "description": "The syntax type of the source pattern. Determines how the pattern is compiled to regex.",
          "enum": [
            "equals",
            "path-to-regexp",
            "regex"
          ]
        }
      }
    },
    "version": {
      "type": "object",
      "description": "A version of routing rules stored in S3.",
      "required": [
        "createdBy",
        "id",
        "lastModified",
        "s3Key"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the version."
        },
        "s3Key": {
          "type": "string",
          "description": "The S3 key where the routing rules are stored."
        },
        "lastModified": {
          "type": "number",
          "description": "Timestamp of when this version was last modified."
        },
        "createdBy": {
          "type": "string",
          "description": "The user who created this version."
        },
        "isStaging": {
          "type": "boolean",
          "description": "Whether this version is staged and not yet promoted to production.",
          "enum": [
            false,
            true
          ]
        },
        "isLive": {
          "type": "boolean",
          "description": "Whether this version is currently live in production.",
          "enum": [
            false,
            true
          ]
        },
        "ruleCount": {
          "type": "number",
          "description": "The number of routing rules in this version."
        },
        "alias": {
          "type": "string",
          "description": "The staging alias for previewing this version."
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 409: No description

### 410: No description

### 500: No description

---

## Related

- [project-routes endpoints](/docs/rest-api#project-routes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
