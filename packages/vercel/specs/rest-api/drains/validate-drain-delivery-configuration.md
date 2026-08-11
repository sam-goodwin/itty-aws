---
title: validate-drain-delivery-configuration
product: vercel
url: /docs/rest-api/drains/validate-drain-delivery-configuration
canonical_url: "https://vercel.com/docs/rest-api/drains/validate-drain-delivery-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about validate-drain-delivery-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Validate Drain delivery configuration

```http
POST /v1/drains/test
```

Validate the delivery configuration of a Drain using sample events.

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
    "schemas",
    "delivery"
  ],
  "properties": {
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
      "type": "object"
    },
    {
      "type": "object",
      "required": [
        "endpoint",
        "error",
        "status"
      ],
      "properties": {
        "status": {
          "type": "string"
        },
        "error": {
          "type": "string"
        },
        "endpoint": {
          "type": "string"
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
