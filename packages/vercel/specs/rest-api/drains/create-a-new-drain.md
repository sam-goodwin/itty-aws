---
title: create-a-new-drain
product: vercel
url: /docs/rest-api/drains/create-a-new-drain
canonical_url: "https://vercel.com/docs/rest-api/drains/create-a-new-drain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-new-drain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a new Drain

```http
POST /v1/drains
```

Create a new Drain with the provided configuration.

## Authentication

**bearerToken**: HTTP bearer

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
    "name",
    "projects",
    "schemas"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "projects": {
      "type": "string",
      "enum": [
        "some",
        "all"
      ]
    },
    "projectIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "filter": {
      "type": "object",
      "required": [
        "version",
        "filter"
      ],
      "properties": {
        "version": {
          "type": "string"
        },
        "filter": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "type",
                "text"
              ]
            }
          ]
        }
      }
    },
    "schemas": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "required": [
          "version"
        ],
        "properties": {
          "version": {
            "type": "string"
          }
        }
      }
    },
    "delivery": {
      "type": "object",
      "oneOf": [
        {
          "type": "object",
          "required": [
            "type",
            "endpoint",
            "encoding",
            "headers"
          ],
          "properties": {
            "type": {
              "type": "string"
            },
            "endpoint": {
              "type": "string"
            },
            "compression": {
              "type": "string",
              "enum": [
                "gzip",
                "none"
              ]
            },
            "encoding": {
              "type": "string",
              "enum": [
                "json",
                "ndjson"
              ]
            },
            "headers": {
              "type": "object"
            },
            "secret": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type",
            "endpoint",
            "encoding",
            "headers"
          ],
          "properties": {
            "type": {
              "type": "string"
            },
            "endpoint": {},
            "encoding": {
              "type": "string",
              "enum": [
                "proto",
                "json"
              ]
            },
            "headers": {
              "type": "object"
            },
            "secret": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type",
            "endpoint",
            "encoding",
            "compression",
            "fileStructure",
            "roleArn",
            "region"
          ],
          "properties": {
            "type": {
              "type": "string"
            },
            "endpoint": {
              "type": "string"
            },
            "encoding": {
              "type": "string",
              "enum": [
                "json",
                "ndjson"
              ]
            },
            "compression": {
              "type": "string",
              "enum": [
                "none"
              ]
            },
            "fileStructure": {
              "type": "string",
              "enum": [
                "hive"
              ]
            },
            "roleArn": {
              "type": "string"
            },
            "region": {
              "type": "string"
            },
            "serverSideEncryption": {
              "type": "string",
              "enum": [
                "AES256",
                "aws:kms",
                "aws:kms:dsse"
              ],
              "default": "AES256"
            },
            "objectAcl": {
              "type": "string",
              "enum": [
                "private",
                "bucket-owner-read",
                "bucket-owner-full-control"
              ]
            }
          }
        }
      ]
    },
    "sampling": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "type",
          "rate"
        ],
        "properties": {
          "type": {
            "type": "string"
          },
          "rate": {
            "type": "number",
            "description": "Sampling rate from 0 to 1 (e.g., 0.1 for 10%)",
            "minimum": 0,
            "maximum": 1
          },
          "env": {
            "type": "string",
            "description": "Environment to apply sampling to",
            "enum": [
              "production",
              "preview"
            ]
          },
          "requestPath": {
            "type": "string",
            "description": "Request path prefix to apply the sampling rule to"
          }
        }
      }
    },
    "transforms": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          }
        }
      }
    },
    "source": {
      "type": "object",
      "oneOf": [
        {
          "oneOf": [
            {
              "required": [
                "externalResourceId"
              ]
            },
            {
              "required": [
                "resourceId"
              ]
            },
            {
              "required": [
                "kind"
              ]
            }
          ]
        },
        {
          "required": [
            "kind"
          ],
          "properties": {
            "kind": {
              "type": "string",
              "default": "self-served"
            }
          }
        }
      ]
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "createdAt",
        "delivery",
        "id",
        "name",
        "ownerId",
        "schemas",
        "source",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "projectIds": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string"
        },
        "teamId": {
          "type": "string",
          "nullable": true
        },
        "ownerId": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "enum": [
            "disabled",
            "enabled",
            "errored"
          ]
        },
        "firstErrorTimestamp": {
          "type": "number"
        },
        "disabledAt": {
          "type": "number"
        },
        "disabledBy": {
          "type": "string"
        },
        "disabledReason": {
          "type": "string",
          "enum": [
            "account-plan-downgrade",
            "disabled-by-admin",
            "disabled-by-owner",
            "feature-not-available"
          ]
        },
        "schemas": {
          "type": "object",
          "properties": {
            "log": {
              "type": "object"
            },
            "trace": {
              "type": "object"
            },
            "analytics": {
              "type": "object"
            },
            "speed_insights": {
              "type": "object"
            },
            "ai_gateway": {
              "type": "object"
            },
            "audit_log": {
              "type": "object"
            },
            "connect": {
              "type": "object"
            }
          }
        },
        "delivery": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "encoding",
                "endpoint",
                "headers",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "encoding",
                "endpoint",
                "headers",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "endpoint",
                "table",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "compression",
                "encoding",
                "endpoint",
                "fileStructure",
                "region",
                "roleArn",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "target",
                "type"
              ]
            }
          ]
        },
        "sampling": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "rate",
              "type"
            ]
          }
        },
        "source": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "kind"
              ]
            },
            {
              "type": "object",
              "required": [
                "integrationConfigurationId",
                "integrationId",
                "kind"
              ]
            }
          ]
        },
        "filterV2": {
          "type": "object",
          "required": [
            "filter",
            "version"
          ],
          "properties": {
            "version": {
              "type": "string",
              "enum": [
                "v2"
              ]
            },
            "filter": {}
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "createdAt",
        "delivery",
        "id",
        "name",
        "ownerId",
        "schemas",
        "source",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "projectIds": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string"
        },
        "teamId": {
          "type": "string",
          "nullable": true
        },
        "ownerId": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "enum": [
            "disabled",
            "enabled",
            "errored"
          ]
        },
        "firstErrorTimestamp": {
          "type": "number"
        },
        "disabledAt": {
          "type": "number"
        },
        "disabledBy": {
          "type": "string"
        },
        "disabledReason": {
          "type": "string",
          "enum": [
            "account-plan-downgrade",
            "disabled-by-admin",
            "disabled-by-owner",
            "feature-not-available"
          ]
        },
        "schemas": {
          "type": "object",
          "properties": {
            "log": {
              "type": "object"
            },
            "trace": {
              "type": "object"
            },
            "analytics": {
              "type": "object"
            },
            "speed_insights": {
              "type": "object"
            },
            "ai_gateway": {
              "type": "object"
            },
            "audit_log": {
              "type": "object"
            },
            "connect": {
              "type": "object"
            }
          }
        },
        "delivery": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "encoding",
                "endpoint",
                "headers",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "encoding",
                "endpoint",
                "headers",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "endpoint",
                "table",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "compression",
                "encoding",
                "endpoint",
                "fileStructure",
                "region",
                "roleArn",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "target",
                "type"
              ]
            }
          ]
        },
        "sampling": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "rate",
              "type"
            ]
          }
        },
        "source": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "kind"
              ]
            },
            {
              "type": "object",
              "required": [
                "integrationConfigurationId",
                "integrationId",
                "kind"
              ]
            }
          ]
        },
        "filterV2": {
          "type": "object",
          "required": [
            "filter",
            "version"
          ],
          "properties": {
            "version": {
              "type": "string",
              "enum": [
                "v2"
              ]
            },
            "filter": {}
          }
        },
        "integrationIcon": {
          "type": "string"
        },
        "integrationConfigurationUri": {
          "type": "string"
        },
        "integrationWebsite": {
          "type": "string"
        },
        "projectAccess": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "access",
                "managedBy"
              ]
            },
            {
              "type": "object",
              "required": [
                "access",
                "managedBy",
                "projectIds"
              ]
            }
          ]
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [drains endpoints](/docs/rest-api#drains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
