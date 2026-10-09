import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials as Creds } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const ns = /*@__PURE__*/ T.XmlNamespace("http://awss3control.amazonaws.com/doc/2018-08-20/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "S3 Control",
  serviceShapeName: "AWSS3ControlServiceV20180820",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "s3" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-08-20");
const proto = /*@__PURE__*/ T.AwsProtocolsRestXml();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const {
    Region,
    UseFIPS = false,
    UseDualStack = false,
    Endpoint,
    AccountId,
    RequiresAccountId,
    OutpostId,
    Bucket,
    AccessPointName,
    UseArnRegion,
    ResourceArn,
    UseS3ExpressControlEndpoint,
  } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = (_0: unknown) => ({
    authSchemes: [
      {
        disableDoubleEncoding: true,
        name: "sigv4",
        signingName: "s3-outposts",
        signingRegion: `${_0}`,
      },
    ],
  });
  const _p1 = (_0: unknown) => ({
    authSchemes: [
      {
        disableDoubleEncoding: true,
        name: "sigv4",
        signingName: "s3express",
        signingRegion: `${_0}`,
      },
    ],
  });
  const _p2 = (_0: unknown) => ({
    authSchemes: [
      { disableDoubleEncoding: true, name: "sigv4", signingName: "s3", signingRegion: `${_0}` },
    ],
  });
  const _p3 = (_0: unknown) => ({
    authSchemes: [
      {
        disableDoubleEncoding: true,
        name: "sigv4",
        signingName: "s3-outposts",
        signingRegion: `${_.getAttr(_0, "region")}`,
      },
    ],
  });
  if (Region != null) {
    {
      const partitionResult = _.partition(Region);
      if (
        UseFIPS === true &&
        partitionResult != null &&
        partitionResult !== false &&
        _.getAttr(partitionResult, "name") === "aws-cn"
      ) {
        return err("Partition does not support FIPS");
      }
    }
    if (OutpostId != null) {
      {
        const partitionResult = _.partition(Region);
        if (partitionResult != null && partitionResult !== false) {
          if (RequiresAccountId != null && RequiresAccountId === true && !(AccountId != null)) {
            return err("AccountId is required but not set");
          }
          if (AccountId != null && !_.isValidHostLabel(AccountId, false)) {
            return err("AccountId must only contain a-z, A-Z, 0-9 and `-`.");
          }
          if (!_.isValidHostLabel(OutpostId, false)) {
            return err("OutpostId must only contain a-z, A-Z, 0-9 and `-`.");
          }
          if (Endpoint != null && UseDualStack === true) {
            return err("Invalid Configuration: DualStack and custom endpoint are not supported");
          }
          if (_.isValidHostLabel(Region, true)) {
            {
              const url = _.parseURL(Endpoint);
              if (Endpoint != null && url != null && url !== false) {
                return e(
                  `${_.getAttr(url, "scheme")}://${_.getAttr(url, "authority")}${_.getAttr(url, "path")}`,
                  _p0(Region),
                  {},
                );
              }
            }
            if (UseFIPS === true && UseDualStack === true) {
              return e(
                `https://s3-outposts-fips.${Region}.${_.getAttr(partitionResult, "dualStackDnsSuffix")}`,
                _p0(Region),
                {},
              );
            }
            if (UseFIPS === true) {
              return e(
                `https://s3-outposts-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                _p0(Region),
                {},
              );
            }
            if (UseDualStack === true) {
              return e(
                `https://s3-outposts.${Region}.${_.getAttr(partitionResult, "dualStackDnsSuffix")}`,
                _p0(Region),
                {},
              );
            }
            return e(
              `https://s3-outposts.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p0(Region),
              {},
            );
          }
          return err("Invalid region: region was not a valid DNS name.");
        }
      }
    }
    {
      const resourceArn = _.parseArn(ResourceArn);
      if (
        ResourceArn != null &&
        resourceArn != null &&
        resourceArn !== false &&
        _.getAttr(resourceArn, "service") === "s3express"
      ) {
        {
          const partitionResult = _.partition(Region);
          if (partitionResult != null && partitionResult !== false) {
            {
              const arnPartition = _.partition(_.getAttr(resourceArn, "region"));
              if (arnPartition != null && arnPartition !== false) {
                if (_.getAttr(arnPartition, "name") === _.getAttr(partitionResult, "name")) {
                  if (
                    UseArnRegion != null &&
                    UseArnRegion === false &&
                    !(_.getAttr(resourceArn, "region") === `${Region}`)
                  ) {
                    return err(
                      `Invalid configuration: region from ARN \`${_.getAttr(resourceArn, "region")}\` does not match client region \`${Region}\` and UseArnRegion is \`false\``,
                    );
                  }
                  if (Endpoint != null && UseDualStack === true) {
                    return err(
                      "Invalid Configuration: DualStack and custom endpoint are not supported",
                    );
                  }
                  if (UseDualStack === true) {
                    return err("S3Express does not support Dual-stack.");
                  }
                  {
                    const url = _.parseURL(Endpoint);
                    if (Endpoint != null && url != null && url !== false) {
                      return e(
                        `${_.getAttr(url, "scheme")}://${_.getAttr(url, "authority")}`,
                        _p1(Region),
                        {},
                      );
                    }
                  }
                  if (UseFIPS === true) {
                    return e(
                      `https://s3express-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                      _p1(Region),
                      {},
                    );
                  }
                  return e(
                    `https://s3express-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                    _p1(Region),
                    {},
                  );
                }
                return err(
                  `Client was configured for partition \`${_.getAttr(partitionResult, "name")}\` but ARN has \`${_.getAttr(arnPartition, "name")}\``,
                );
              }
            }
          }
        }
      }
    }
    {
      const accessPointSuffix = _.substring(AccessPointName, 0, 7, true);
      if (
        AccessPointName != null &&
        accessPointSuffix != null &&
        accessPointSuffix !== false &&
        accessPointSuffix === "--xa-s3"
      ) {
        {
          const partitionResult = _.partition(Region);
          if (partitionResult != null && partitionResult !== false) {
            if (Endpoint != null && UseDualStack === true) {
              return err("Invalid Configuration: DualStack and custom endpoint are not supported");
            }
            if (UseDualStack === true) {
              return err("S3Express does not support Dual-stack.");
            }
            {
              const url = _.parseURL(Endpoint);
              if (Endpoint != null && url != null && url !== false) {
                return e(
                  `${_.getAttr(url, "scheme")}://${_.getAttr(url, "authority")}`,
                  _p1(Region),
                  {},
                );
              }
            }
            {
              const s3expressAvailabilityZoneId = _.substring(AccessPointName, 7, 15, true);
              const s3expressAvailabilityZoneDelim = _.substring(AccessPointName, 15, 17, true);
              if (
                s3expressAvailabilityZoneId != null &&
                s3expressAvailabilityZoneId !== false &&
                s3expressAvailabilityZoneDelim != null &&
                s3expressAvailabilityZoneDelim !== false &&
                s3expressAvailabilityZoneDelim === "--"
              ) {
                if (UseFIPS === true) {
                  return e(
                    `https://s3express-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                    _p1(Region),
                    {},
                  );
                }
                return e(
                  `https://s3express-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                  _p1(Region),
                  {},
                );
              }
            }
            {
              const s3expressAvailabilityZoneId = _.substring(AccessPointName, 7, 16, true);
              const s3expressAvailabilityZoneDelim = _.substring(AccessPointName, 16, 18, true);
              if (
                s3expressAvailabilityZoneId != null &&
                s3expressAvailabilityZoneId !== false &&
                s3expressAvailabilityZoneDelim != null &&
                s3expressAvailabilityZoneDelim !== false &&
                s3expressAvailabilityZoneDelim === "--"
              ) {
                if (UseFIPS === true) {
                  return e(
                    `https://s3express-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                    _p1(Region),
                    {},
                  );
                }
                return e(
                  `https://s3express-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                  _p1(Region),
                  {},
                );
              }
            }
            {
              const s3expressAvailabilityZoneId = _.substring(AccessPointName, 7, 20, true);
              const s3expressAvailabilityZoneDelim = _.substring(AccessPointName, 20, 22, true);
              if (
                s3expressAvailabilityZoneId != null &&
                s3expressAvailabilityZoneId !== false &&
                s3expressAvailabilityZoneDelim != null &&
                s3expressAvailabilityZoneDelim !== false &&
                s3expressAvailabilityZoneDelim === "--"
              ) {
                if (UseFIPS === true) {
                  return e(
                    `https://s3express-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                    _p1(Region),
                    {},
                  );
                }
                return e(
                  `https://s3express-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                  _p1(Region),
                  {},
                );
              }
            }
            {
              const s3expressAvailabilityZoneId = _.substring(AccessPointName, 7, 21, true);
              const s3expressAvailabilityZoneDelim = _.substring(AccessPointName, 21, 23, true);
              if (
                s3expressAvailabilityZoneId != null &&
                s3expressAvailabilityZoneId !== false &&
                s3expressAvailabilityZoneDelim != null &&
                s3expressAvailabilityZoneDelim !== false &&
                s3expressAvailabilityZoneDelim === "--"
              ) {
                if (UseFIPS === true) {
                  return e(
                    `https://s3express-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                    _p1(Region),
                    {},
                  );
                }
                return e(
                  `https://s3express-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                  _p1(Region),
                  {},
                );
              }
            }
            {
              const s3expressAvailabilityZoneId = _.substring(AccessPointName, 7, 27, true);
              const s3expressAvailabilityZoneDelim = _.substring(AccessPointName, 27, 29, true);
              if (
                s3expressAvailabilityZoneId != null &&
                s3expressAvailabilityZoneId !== false &&
                s3expressAvailabilityZoneDelim != null &&
                s3expressAvailabilityZoneDelim !== false &&
                s3expressAvailabilityZoneDelim === "--"
              ) {
                if (UseFIPS === true) {
                  return e(
                    `https://s3express-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                    _p1(Region),
                    {},
                  );
                }
                return e(
                  `https://s3express-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
                  _p1(Region),
                  {},
                );
              }
            }
            return err("Unrecognized S3Express Access Point name format.");
          }
        }
      }
    }
    if (UseS3ExpressControlEndpoint != null && UseS3ExpressControlEndpoint === true) {
      {
        const partitionResult = _.partition(Region);
        if (partitionResult != null && partitionResult !== false) {
          if (Endpoint != null && UseDualStack === true) {
            return err("Invalid Configuration: DualStack and custom endpoint are not supported");
          }
          if (UseDualStack === true) {
            return err("S3Express does not support Dual-stack.");
          }
          {
            const url = _.parseURL(Endpoint);
            if (Endpoint != null && url != null && url !== false) {
              return e(
                `${_.getAttr(url, "scheme")}://${_.getAttr(url, "authority")}`,
                _p1(Region),
                {},
              );
            }
          }
          if (UseFIPS === true) {
            return e(
              `https://s3express-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p1(Region),
              {},
            );
          }
          return e(
            `https://s3express-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
            _p1(Region),
            {},
          );
        }
      }
    }
    {
      const url = _.parseURL(Endpoint);
      if (Region === "snow" && Endpoint != null && url != null && url !== false) {
        {
          const partitionResult = _.partition(Region);
          if (partitionResult != null && partitionResult !== false) {
            if (UseDualStack === true) {
              return err("S3 Snow does not support DualStack");
            }
            if (UseFIPS === true) {
              return err("S3 Snow does not support FIPS");
            }
            return e(
              `${_.getAttr(url, "scheme")}://${_.getAttr(url, "authority")}`,
              _p2(Region),
              {},
            );
          }
        }
      }
    }
    {
      const accessPointArn = _.parseArn(AccessPointName);
      if (AccessPointName != null && accessPointArn != null && accessPointArn !== false) {
        {
          const arnType = _.getAttr(accessPointArn, "resourceId[0]");
          if (arnType != null && arnType !== false && !(arnType === "")) {
            if (_.getAttr(accessPointArn, "service") === "s3-outposts") {
              {
                const outpostId = _.getAttr(accessPointArn, "resourceId[1]");
                if (outpostId != null && outpostId !== false) {
                  if (_.isValidHostLabel(outpostId, false)) {
                    if (Endpoint != null && UseDualStack === true) {
                      return err(
                        "Invalid Configuration: DualStack and custom endpoint are not supported",
                      );
                    }
                    if (
                      UseArnRegion != null &&
                      UseArnRegion === false &&
                      !(_.getAttr(accessPointArn, "region") === `${Region}`)
                    ) {
                      return err(
                        `Invalid configuration: region from ARN \`${_.getAttr(accessPointArn, "region")}\` does not match client region \`${Region}\` and UseArnRegion is \`false\``,
                      );
                    }
                    {
                      const partitionResult = _.partition(Region);
                      if (partitionResult != null && partitionResult !== false) {
                        {
                          const arnPartition = _.partition(_.getAttr(accessPointArn, "region"));
                          if (arnPartition != null && arnPartition !== false) {
                            if (
                              _.getAttr(arnPartition, "name") === _.getAttr(partitionResult, "name")
                            ) {
                              if (_.isValidHostLabel(_.getAttr(accessPointArn, "region"), true)) {
                                if (!(_.getAttr(accessPointArn, "accountId") === "")) {
                                  if (
                                    _.isValidHostLabel(
                                      _.getAttr(accessPointArn, "accountId"),
                                      false,
                                    )
                                  ) {
                                    if (
                                      AccountId != null &&
                                      !(AccountId === `${_.getAttr(accessPointArn, "accountId")}`)
                                    ) {
                                      return err(
                                        `Invalid ARN: the accountId specified in the ARN (\`${_.getAttr(accessPointArn, "accountId")}\`) does not match the parameter (\`${AccountId}\`)`,
                                      );
                                    }
                                    {
                                      const outpostType = _.getAttr(
                                        accessPointArn,
                                        "resourceId[2]",
                                      );
                                      if (outpostType != null && outpostType !== false) {
                                        {
                                          const accessPointName = _.getAttr(
                                            accessPointArn,
                                            "resourceId[3]",
                                          );
                                          if (
                                            accessPointName != null &&
                                            accessPointName !== false
                                          ) {
                                            if (outpostType === "accesspoint") {
                                              if (UseFIPS === true && UseDualStack === true) {
                                                return e(
                                                  `https://s3-outposts-fips.${_.getAttr(accessPointArn, "region")}.${_.getAttr(arnPartition, "dualStackDnsSuffix")}`,
                                                  _p3(accessPointArn),
                                                  {
                                                    "x-amz-account-id": [
                                                      `${_.getAttr(accessPointArn, "accountId")}`,
                                                    ],
                                                    "x-amz-outpost-id": [`${outpostId}`],
                                                  },
                                                );
                                              }
                                              if (UseFIPS === true) {
                                                return e(
                                                  `https://s3-outposts-fips.${_.getAttr(accessPointArn, "region")}.${_.getAttr(arnPartition, "dnsSuffix")}`,
                                                  _p3(accessPointArn),
                                                  {
                                                    "x-amz-account-id": [
                                                      `${_.getAttr(accessPointArn, "accountId")}`,
                                                    ],
                                                    "x-amz-outpost-id": [`${outpostId}`],
                                                  },
                                                );
                                              }
                                              if (UseDualStack === true) {
                                                return e(
                                                  `https://s3-outposts.${_.getAttr(accessPointArn, "region")}.${_.getAttr(arnPartition, "dualStackDnsSuffix")}`,
                                                  _p3(accessPointArn),
                                                  {
                                                    "x-amz-account-id": [
                                                      `${_.getAttr(accessPointArn, "accountId")}`,
                                                    ],
                                                    "x-amz-outpost-id": [`${outpostId}`],
                                                  },
                                                );
                                              }
                                              {
                                                const url = _.parseURL(Endpoint);
                                                if (
                                                  Endpoint != null &&
                                                  url != null &&
                                                  url !== false
                                                ) {
                                                  return e(
                                                    `${_.getAttr(url, "scheme")}://${_.getAttr(url, "authority")}${_.getAttr(url, "path")}`,
                                                    _p3(accessPointArn),
                                                    {
                                                      "x-amz-account-id": [
                                                        `${_.getAttr(accessPointArn, "accountId")}`,
                                                      ],
                                                      "x-amz-outpost-id": [`${outpostId}`],
                                                    },
                                                  );
                                                }
                                              }
                                              return e(
                                                `https://s3-outposts.${_.getAttr(accessPointArn, "region")}.${_.getAttr(arnPartition, "dnsSuffix")}`,
                                                _p3(accessPointArn),
                                                {
                                                  "x-amz-account-id": [
                                                    `${_.getAttr(accessPointArn, "accountId")}`,
                                                  ],
                                                  "x-amz-outpost-id": [`${outpostId}`],
                                                },
                                              );
                                            }
                                            return err(
                                              `Expected an outpost type \`accesspoint\`, found \`${outpostType}\``,
                                            );
                                          }
                                        }
                                        return err("Invalid ARN: expected an access point name");
                                      }
                                    }
                                    return err("Invalid ARN: Expected a 4-component resource");
                                  }
                                  return err(
                                    `Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and \`-\`. Found: \`${_.getAttr(accessPointArn, "accountId")}\``,
                                  );
                                }
                                return err("Invalid ARN: missing account ID");
                              }
                              return err(
                                `Invalid region in ARN: \`${_.getAttr(accessPointArn, "region")}\` (invalid DNS name)`,
                              );
                            }
                            return err(
                              `Client was configured for partition \`${_.getAttr(partitionResult, "name")}\` but ARN has \`${_.getAttr(arnPartition, "name")}\``,
                            );
                          }
                        }
                      }
                    }
                  }
                  return err(
                    `Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and \`-\`., found: \`${outpostId}\``,
                  );
                }
              }
              return err("Invalid ARN: The Outpost Id was not set");
            }
          }
        }
        return err("Invalid ARN: No ARN type specified");
      }
    }
    {
      const bucketArn = _.parseArn(Bucket);
      if (Bucket != null && bucketArn != null && bucketArn !== false) {
        {
          const arnType = _.getAttr(bucketArn, "resourceId[0]");
          if (arnType != null && arnType !== false && !(arnType === "")) {
            if (_.getAttr(bucketArn, "service") === "s3-outposts") {
              {
                const outpostId = _.getAttr(bucketArn, "resourceId[1]");
                if (outpostId != null && outpostId !== false) {
                  if (_.isValidHostLabel(outpostId, false)) {
                    if (Endpoint != null && UseDualStack === true) {
                      return err(
                        "Invalid Configuration: DualStack and custom endpoint are not supported",
                      );
                    }
                    if (
                      UseArnRegion != null &&
                      UseArnRegion === false &&
                      !(_.getAttr(bucketArn, "region") === `${Region}`)
                    ) {
                      return err(
                        `Invalid configuration: region from ARN \`${_.getAttr(bucketArn, "region")}\` does not match client region \`${Region}\` and UseArnRegion is \`false\``,
                      );
                    }
                    {
                      const arnPartition = _.partition(_.getAttr(bucketArn, "region"));
                      if (arnPartition != null && arnPartition !== false) {
                        {
                          const partitionResult = _.partition(Region);
                          if (partitionResult != null && partitionResult !== false) {
                            if (
                              _.getAttr(arnPartition, "name") === _.getAttr(partitionResult, "name")
                            ) {
                              if (_.isValidHostLabel(_.getAttr(bucketArn, "region"), true)) {
                                if (!(_.getAttr(bucketArn, "accountId") === "")) {
                                  if (
                                    _.isValidHostLabel(_.getAttr(bucketArn, "accountId"), false)
                                  ) {
                                    if (
                                      AccountId != null &&
                                      !(AccountId === `${_.getAttr(bucketArn, "accountId")}`)
                                    ) {
                                      return err(
                                        `Invalid ARN: the accountId specified in the ARN (\`${_.getAttr(bucketArn, "accountId")}\`) does not match the parameter (\`${AccountId}\`)`,
                                      );
                                    }
                                    {
                                      const outpostType = _.getAttr(bucketArn, "resourceId[2]");
                                      if (outpostType != null && outpostType !== false) {
                                        {
                                          const bucketName = _.getAttr(bucketArn, "resourceId[3]");
                                          if (bucketName != null && bucketName !== false) {
                                            if (outpostType === "bucket") {
                                              if (UseFIPS === true && UseDualStack === true) {
                                                return e(
                                                  `https://s3-outposts-fips.${_.getAttr(bucketArn, "region")}.${_.getAttr(arnPartition, "dualStackDnsSuffix")}`,
                                                  _p3(bucketArn),
                                                  {
                                                    "x-amz-account-id": [
                                                      `${_.getAttr(bucketArn, "accountId")}`,
                                                    ],
                                                    "x-amz-outpost-id": [`${outpostId}`],
                                                  },
                                                );
                                              }
                                              if (UseFIPS === true) {
                                                return e(
                                                  `https://s3-outposts-fips.${_.getAttr(bucketArn, "region")}.${_.getAttr(arnPartition, "dnsSuffix")}`,
                                                  _p3(bucketArn),
                                                  {
                                                    "x-amz-account-id": [
                                                      `${_.getAttr(bucketArn, "accountId")}`,
                                                    ],
                                                    "x-amz-outpost-id": [`${outpostId}`],
                                                  },
                                                );
                                              }
                                              if (UseDualStack === true) {
                                                return e(
                                                  `https://s3-outposts.${_.getAttr(bucketArn, "region")}.${_.getAttr(arnPartition, "dualStackDnsSuffix")}`,
                                                  _p3(bucketArn),
                                                  {
                                                    "x-amz-account-id": [
                                                      `${_.getAttr(bucketArn, "accountId")}`,
                                                    ],
                                                    "x-amz-outpost-id": [`${outpostId}`],
                                                  },
                                                );
                                              }
                                              {
                                                const url = _.parseURL(Endpoint);
                                                if (
                                                  Endpoint != null &&
                                                  url != null &&
                                                  url !== false
                                                ) {
                                                  return e(
                                                    `${_.getAttr(url, "scheme")}://${_.getAttr(url, "authority")}${_.getAttr(url, "path")}`,
                                                    _p3(bucketArn),
                                                    {
                                                      "x-amz-account-id": [
                                                        `${_.getAttr(bucketArn, "accountId")}`,
                                                      ],
                                                      "x-amz-outpost-id": [`${outpostId}`],
                                                    },
                                                  );
                                                }
                                              }
                                              return e(
                                                `https://s3-outposts.${_.getAttr(bucketArn, "region")}.${_.getAttr(arnPartition, "dnsSuffix")}`,
                                                _p3(bucketArn),
                                                {
                                                  "x-amz-account-id": [
                                                    `${_.getAttr(bucketArn, "accountId")}`,
                                                  ],
                                                  "x-amz-outpost-id": [`${outpostId}`],
                                                },
                                              );
                                            }
                                            return err(
                                              `Invalid ARN: Expected an outpost type \`bucket\`, found \`${outpostType}\``,
                                            );
                                          }
                                        }
                                        return err("Invalid ARN: expected a bucket name");
                                      }
                                    }
                                    return err("Invalid ARN: Expected a 4-component resource");
                                  }
                                  return err(
                                    `Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and \`-\`. Found: \`${_.getAttr(bucketArn, "accountId")}\``,
                                  );
                                }
                                return err("Invalid ARN: missing account ID");
                              }
                              return err(
                                `Invalid region in ARN: \`${_.getAttr(bucketArn, "region")}\` (invalid DNS name)`,
                              );
                            }
                            return err(
                              `Client was configured for partition \`${_.getAttr(partitionResult, "name")}\` but ARN has \`${_.getAttr(arnPartition, "name")}\``,
                            );
                          }
                        }
                      }
                    }
                  }
                  return err(
                    `Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and \`-\`., found: \`${outpostId}\``,
                  );
                }
              }
              return err("Invalid ARN: The Outpost Id was not set");
            }
          }
        }
        return err("Invalid ARN: No ARN type specified");
      }
    }
    {
      const partitionResult = _.partition(Region);
      if (partitionResult != null && partitionResult !== false) {
        if (_.isValidHostLabel(Region, true)) {
          if (RequiresAccountId != null && RequiresAccountId === true && !(AccountId != null)) {
            return err("AccountId is required but not set");
          }
          if (AccountId != null && !_.isValidHostLabel(AccountId, false)) {
            return err("AccountId must only contain a-z, A-Z, 0-9 and `-`.");
          }
          {
            const url = _.parseURL(Endpoint);
            if (Endpoint != null && url != null && url !== false) {
              if (UseDualStack === true) {
                return err(
                  "Invalid Configuration: DualStack and custom endpoint are not supported",
                );
              }
              if (RequiresAccountId != null && RequiresAccountId === true && AccountId != null) {
                return e(
                  `${_.getAttr(url, "scheme")}://${AccountId}.${_.getAttr(url, "authority")}${_.getAttr(url, "path")}`,
                  _p2(Region),
                  {},
                );
              }
              return e(
                `${_.getAttr(url, "scheme")}://${_.getAttr(url, "authority")}${_.getAttr(url, "path")}`,
                _p2(Region),
                {},
              );
            }
          }
          if (
            UseFIPS === true &&
            UseDualStack === true &&
            RequiresAccountId != null &&
            RequiresAccountId === true &&
            AccountId != null
          ) {
            return e(
              `https://${AccountId}.s3-control-fips.dualstack.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p2(Region),
              {},
            );
          }
          if (UseFIPS === true && UseDualStack === true) {
            return e(
              `https://s3-control-fips.dualstack.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p2(Region),
              {},
            );
          }
          if (
            UseFIPS === true &&
            UseDualStack === false &&
            RequiresAccountId != null &&
            RequiresAccountId === true &&
            AccountId != null
          ) {
            return e(
              `https://${AccountId}.s3-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p2(Region),
              {},
            );
          }
          if (UseFIPS === true && UseDualStack === false) {
            return e(
              `https://s3-control-fips.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p2(Region),
              {},
            );
          }
          if (
            UseFIPS === false &&
            UseDualStack === true &&
            RequiresAccountId != null &&
            RequiresAccountId === true &&
            AccountId != null
          ) {
            return e(
              `https://${AccountId}.s3-control.dualstack.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p2(Region),
              {},
            );
          }
          if (UseFIPS === false && UseDualStack === true) {
            return e(
              `https://s3-control.dualstack.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p2(Region),
              {},
            );
          }
          if (
            UseFIPS === false &&
            UseDualStack === false &&
            RequiresAccountId != null &&
            RequiresAccountId === true &&
            AccountId != null
          ) {
            return e(
              `https://${AccountId}.s3-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p2(Region),
              {},
            );
          }
          if (UseFIPS === false && UseDualStack === false) {
            return e(
              `https://s3-control.${Region}.${_.getAttr(partitionResult, "dnsSuffix")}`,
              _p2(Region),
              {},
            );
          }
        }
        return err("Invalid region: region was not a valid DNS name.");
      }
    }
  }
  return err("Region must be set");
});

export class AccessPointAlreadyOwnedByYou
  extends /*@__PURE__*/ S.TaggedError<AccessPointAlreadyOwnedByYou>()(
    "AccessPointAlreadyOwnedByYou",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()("BadRequestException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class BucketAlreadyExists
  extends /*@__PURE__*/ S.TaggedError<BucketAlreadyExists>()("BucketAlreadyExists", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAlreadyExistsError) {}
export class BucketAlreadyOwnedByYou
  extends /*@__PURE__*/ S.TaggedError<BucketAlreadyOwnedByYou>()("BucketAlreadyOwnedByYou", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class IdempotencyException
  extends /*@__PURE__*/ S.TaggedError<IdempotencyException>()("IdempotencyException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InternalServiceException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceException>()("InternalServiceException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidRequest
  extends /*@__PURE__*/ S.TaggedError<InvalidRequest>()("InvalidRequest", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()("InvalidRequestException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class JobStatusException
  extends /*@__PURE__*/ S.TaggedError<JobStatusException>()("JobStatusException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class JobStatusTransitionForbidden
  extends /*@__PURE__*/ S.TaggedError<JobStatusTransitionForbidden>()(
    "JobStatusTransitionForbidden",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidRequest",
      message: { includes: "job status forbidden" },
    }),
  ).pipe(C.withBadRequestError) {}
export class MalformedPolicy
  extends /*@__PURE__*/ S.TaggedError<MalformedPolicy>()("MalformedPolicy", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class MissingBucketLevelActivityMetrics
  extends /*@__PURE__*/ S.TaggedError<MissingBucketLevelActivityMetrics>()(
    "MissingBucketLevelActivityMetrics",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withBadRequestError) {}
export class NoSuchAccessPoint
  extends /*@__PURE__*/ S.TaggedError<NoSuchAccessPoint>()("NoSuchAccessPoint", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class NoSuchAccessPointPolicy
  extends /*@__PURE__*/ S.TaggedError<NoSuchAccessPointPolicy>()("NoSuchAccessPointPolicy", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class NoSuchConfiguration
  extends /*@__PURE__*/ S.TaggedError<NoSuchConfiguration>()("NoSuchConfiguration", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withNotFoundError) {}
export class NoSuchMultiRegionAccessPoint
  extends /*@__PURE__*/ S.TaggedError<NoSuchMultiRegionAccessPoint>()(
    "NoSuchMultiRegionAccessPoint",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withNotFoundError) {}
export class NoSuchPublicAccessBlockConfiguration
  extends /*@__PURE__*/ S.TaggedError<NoSuchPublicAccessBlockConfiguration>()(
    "NoSuchPublicAccessBlockConfiguration",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()("NotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ObjectLambdaNotAvailable
  extends /*@__PURE__*/ S.TaggedError<ObjectLambdaNotAvailable>()(
    "ObjectLambdaNotAvailable",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "AccessDenied",
      message: { includes: "Object Lambda is available only to existing customers" },
    }),
  ).pipe(C.withAuthError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()("TooManyTagsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export type AccountId = string;
export type IdentityCenterArn = string;
export interface AssociateAccessGrantsIdentityCenterRequest {
  AccountId: string;
  IdentityCenterArn: string;
}
const AssociateAccessGrantsIdentityCenterRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateAccessGrantsIdentityCenterRequest>;
export interface AssociateAccessGrantsIdentityCenterResponse {}
const AssociateAccessGrantsIdentityCenterResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateAccessGrantsIdentityCenterResponse>;
export type AccessGrantsLocationId = string;
export type S3Prefix = string;
export interface AccessGrantsLocationConfiguration {
  S3SubPrefix?: string;
}
const AccessGrantsLocationConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AccessGrantsLocationConfiguration>;
export type GranteeType = "DIRECTORY_USER" | "DIRECTORY_GROUP" | "IAM" | (string & {});
const GranteeType = S.String;

export type GranteeIdentifier = string;
export interface Grantee {
  GranteeType?: GranteeType;
  GranteeIdentifier?: string;
}
const Grantee = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<Grantee>;
export type Permission = "READ" | "WRITE" | "READWRITE" | (string & {});
const Permission = S.String;

export type IdentityCenterApplicationArn = string;
export type S3PrefixType = "Object" | (string & {});
const S3PrefixType = S.String;

export type TagKeyString = string;
export type TagValueString = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 5);
export interface CreateAccessGrantRequest {
  AccountId: string;
  AccessGrantsLocationId: string;
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  Grantee: Grantee;
  Permission: Permission;
  ApplicationArn?: string;
  S3PrefixType?: S3PrefixType;
  Tags?: Tag[];
}
const CreateAccessGrantRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateAccessGrantRequest>;
export type CreationTimestamp = Date;
export type AccessGrantId = string;
export type AccessGrantArn = string;
export interface CreateAccessGrantResult {
  CreatedAt?: Date;
  AccessGrantId?: string;
  AccessGrantArn?: string;
  Grantee?: Grantee;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  Permission?: Permission;
  ApplicationArn?: string;
  GrantScope?: string;
}
const CreateAccessGrantResult = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CreateAccessGrantResult>;
export interface CreateAccessGrantsInstanceRequest {
  AccountId: string;
  IdentityCenterArn?: string;
  Tags?: Tag[];
}
const CreateAccessGrantsInstanceRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CreateAccessGrantsInstanceRequest>;
export type AccessGrantsInstanceId = string;
export type AccessGrantsInstanceArn = string;
export interface CreateAccessGrantsInstanceResult {
  CreatedAt?: Date;
  AccessGrantsInstanceId?: string;
  AccessGrantsInstanceArn?: string;
  IdentityCenterArn?: string;
  IdentityCenterInstanceArn?: string;
  IdentityCenterApplicationArn?: string;
}
const CreateAccessGrantsInstanceResult = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateAccessGrantsInstanceResult>;
export type IAMRoleArn = string;
export interface CreateAccessGrantsLocationRequest {
  AccountId: string;
  LocationScope: string;
  IAMRoleArn: string;
  Tags?: Tag[];
}
const CreateAccessGrantsLocationRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateAccessGrantsLocationRequest>;
export type AccessGrantsLocationArn = string;
export interface CreateAccessGrantsLocationResult {
  CreatedAt?: Date;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationArn?: string;
  LocationScope?: string;
  IAMRoleArn?: string;
}
const CreateAccessGrantsLocationResult = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateAccessGrantsLocationResult>;
export type AccessPointName = string;
export type BucketName = string;
export type VpcId = string;
export interface VpcConfiguration {
  VpcId: string;
}
const VpcConfiguration = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<VpcConfiguration>;
export type Setting = boolean;
export interface PublicAccessBlockConfiguration {
  BlockPublicAcls?: boolean;
  IgnorePublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
  RestrictPublicBuckets?: boolean;
}
const PublicAccessBlockConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<PublicAccessBlockConfiguration>;
export type Prefix = string;
export type PrefixesList = string[];
const PrefixesList = /*@__PURE__*/ __L.at(__c1, 6);
export type ScopePermission =
  | "GetObject"
  | "GetObjectAttributes"
  | "ListMultipartUploadParts"
  | "ListBucket"
  | "ListBucketMultipartUploads"
  | "PutObject"
  | "DeleteObject"
  | "AbortMultipartUpload"
  | (string & {});
const ScopePermission = S.String;

export type ScopePermissionList = ScopePermission[];
const ScopePermissionList = /*@__PURE__*/ __L.at(__c1, 7);
export interface Scope {
  Prefixes?: string[];
  Permissions?: ScopePermission[];
}
const Scope = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<Scope>;
export interface CreateAccessPointRequest {
  AccountId: string;
  Name: string;
  Bucket: string;
  VpcConfiguration?: VpcConfiguration;
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  BucketAccountId?: string;
  Scope?: Scope;
  Tags?: Tag[];
}
const CreateAccessPointRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateAccessPointRequest>;
export type S3AccessPointArn = string;
export type Alias = string;
export interface CreateAccessPointResult {
  AccessPointArn?: string;
  Alias?: string;
}
const CreateAccessPointResult = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateAccessPointResult>;
export type ObjectLambdaAccessPointName = string;
export type ObjectLambdaSupportingAccessPointArn = string;
export type ObjectLambdaAllowedFeature =
  | "GetObject-Range"
  | "GetObject-PartNumber"
  | "HeadObject-Range"
  | "HeadObject-PartNumber"
  | (string & {});
const ObjectLambdaAllowedFeature = S.String;

export type ObjectLambdaAllowedFeaturesList = ObjectLambdaAllowedFeature[];
const ObjectLambdaAllowedFeaturesList = /*@__PURE__*/ __L.at(__c2, 3);
export type ObjectLambdaTransformationConfigurationAction =
  | "GetObject"
  | "HeadObject"
  | "ListObjects"
  | "ListObjectsV2"
  | (string & {});
const ObjectLambdaTransformationConfigurationAction = S.String;

export type ObjectLambdaTransformationConfigurationActionsList =
  ObjectLambdaTransformationConfigurationAction[];
const ObjectLambdaTransformationConfigurationActionsList = /*@__PURE__*/ __L.at(__c2, 4);
export type FunctionArnString = string;
export type AwsLambdaTransformationPayload = string;
export interface AwsLambdaTransformation {
  FunctionArn: string;
  FunctionPayload?: string;
}
const AwsLambdaTransformation = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<AwsLambdaTransformation>;
export type ObjectLambdaContentTransformation = { AwsLambda: AwsLambdaTransformation };
const ObjectLambdaContentTransformation = /*@__PURE__*/ __L.at(__c2, 6);
export interface ObjectLambdaTransformationConfiguration {
  Actions: ObjectLambdaTransformationConfigurationAction[];
  ContentTransformation: ObjectLambdaContentTransformation;
}
const ObjectLambdaTransformationConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<ObjectLambdaTransformationConfiguration>;
export type ObjectLambdaTransformationConfigurationsList =
  ObjectLambdaTransformationConfiguration[];
const ObjectLambdaTransformationConfigurationsList = /*@__PURE__*/ __L.at(__c3, 0);
export interface ObjectLambdaConfiguration {
  SupportingAccessPoint: string;
  CloudWatchMetricsEnabled?: boolean;
  AllowedFeatures?: ObjectLambdaAllowedFeature[];
  TransformationConfigurations: ObjectLambdaTransformationConfiguration[];
}
const ObjectLambdaConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ObjectLambdaConfiguration>;
export interface CreateAccessPointForObjectLambdaRequest {
  AccountId: string;
  Name: string;
  Configuration: ObjectLambdaConfiguration;
}
const CreateAccessPointForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateAccessPointForObjectLambdaRequest>;
export type ObjectLambdaAccessPointArn = string;
export type ObjectLambdaAccessPointAliasValue = string;
export type ObjectLambdaAccessPointAliasStatus = "PROVISIONING" | "READY" | (string & {});
const ObjectLambdaAccessPointAliasStatus = S.String;

export interface ObjectLambdaAccessPointAlias {
  Value?: string;
  Status?: ObjectLambdaAccessPointAliasStatus;
}
const ObjectLambdaAccessPointAlias = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<ObjectLambdaAccessPointAlias>;
export interface CreateAccessPointForObjectLambdaResult {
  ObjectLambdaAccessPointArn?: string;
  Alias?: ObjectLambdaAccessPointAlias;
}
const CreateAccessPointForObjectLambdaResult = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateAccessPointForObjectLambdaResult>;
export type BucketCannedACL =
  | "private"
  | "public-read"
  | "public-read-write"
  | "authenticated-read"
  | (string & {});
const BucketCannedACL = S.String;

export type BucketLocationConstraint =
  | "EU"
  | "eu-west-1"
  | "us-west-1"
  | "us-west-2"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-northeast-1"
  | "sa-east-1"
  | "cn-north-1"
  | "eu-central-1"
  | (string & {});
const BucketLocationConstraint = S.String;

export interface CreateBucketConfiguration {
  LocationConstraint?: BucketLocationConstraint;
}
const CreateBucketConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateBucketConfiguration>;
export type GrantFullControl = string;
export type GrantRead = string;
export type GrantReadACP = string;
export type GrantWrite = string;
export type GrantWriteACP = string;
export type ObjectLockEnabledForBucket = boolean;
export type NonEmptyMaxLength64String = string;
export interface CreateBucketRequest {
  ACL?: BucketCannedACL;
  Bucket: string;
  CreateBucketConfiguration?: CreateBucketConfiguration;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWrite?: string;
  GrantWriteACP?: string;
  ObjectLockEnabledForBucket?: boolean;
  OutpostId?: string;
}
const CreateBucketRequest = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<CreateBucketRequest>;
export type Location = string;
export type S3RegionalBucketArn = string;
export interface CreateBucketResult {
  Location?: string;
  BucketArn?: string;
}
const CreateBucketResult = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<CreateBucketResult>;
export type ConfirmationRequired = boolean;
export type MaxLength1024String = string;
export type UserArguments = { [key: string]: string | undefined };
const UserArguments = /*@__PURE__*/ __L.at(__c4, 0);
export interface LambdaInvokeOperation {
  FunctionArn?: string;
  InvocationSchemaVersion?: string;
  UserArguments?: { [key: string]: string | undefined };
}
const LambdaInvokeOperation = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<LambdaInvokeOperation>;
export type S3RegionalOrS3ExpressBucketArnString = string;
export type S3CannedAccessControlList =
  | "private"
  | "public-read"
  | "public-read-write"
  | "aws-exec-read"
  | "authenticated-read"
  | "bucket-owner-read"
  | "bucket-owner-full-control"
  | (string & {});
const S3CannedAccessControlList = S.String;

export type S3GranteeTypeIdentifier = "id" | "emailAddress" | "uri" | (string & {});
const S3GranteeTypeIdentifier = S.String;

export type NonEmptyMaxLength1024String = string;
export interface S3Grantee {
  TypeIdentifier?: S3GranteeTypeIdentifier;
  Identifier?: string;
  DisplayName?: string;
}
const S3Grantee = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<S3Grantee>;
export type S3Permission =
  | "FULL_CONTROL"
  | "READ"
  | "WRITE"
  | "READ_ACP"
  | "WRITE_ACP"
  | (string & {});
const S3Permission = S.String;

export interface S3Grant {
  Grantee?: S3Grantee;
  Permission?: S3Permission;
}
const S3Grant = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<S3Grant>;
export type S3GrantList = S3Grant[];
const S3GrantList = /*@__PURE__*/ __L.at(__c4, 4);
export type S3MetadataDirective = "COPY" | "REPLACE" | (string & {});
const S3MetadataDirective = S.String;

export type S3AnnotationDirective = "COPY" | "EXCLUDE" | (string & {});
const S3AnnotationDirective = S.String;

export type S3UserMetadata = { [key: string]: string | undefined };
const S3UserMetadata = /*@__PURE__*/ __L.at(__c4, 5);
export type S3ContentLength = number;
export type S3SSEAlgorithm = "AES256" | "KMS" | (string & {});
const S3SSEAlgorithm = S.String;

export interface S3ObjectMetadata {
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  UserMetadata?: { [key: string]: string | undefined };
  ContentLength?: number;
  ContentMD5?: string;
  ContentType?: string;
  HttpExpiresDate?: Date;
  RequesterCharged?: boolean;
  SSEAlgorithm?: S3SSEAlgorithm;
}
const S3ObjectMetadata = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<S3ObjectMetadata>;
export interface S3Tag {
  Key: string;
  Value: string;
}
const S3Tag = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<S3Tag>;
export type S3TagSet = S3Tag[];
const S3TagSet = /*@__PURE__*/ __L.at(__c5, 0);
export type NonEmptyMaxLength2048String = string;
export type S3StorageClass =
  | "STANDARD"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "GLACIER"
  | "INTELLIGENT_TIERING"
  | "DEEP_ARCHIVE"
  | "GLACIER_IR"
  | (string & {});
const S3StorageClass = S.String;

export type KmsKeyArnString = string;
export type S3ObjectLockLegalHoldStatus = "OFF" | "ON" | (string & {});
const S3ObjectLockLegalHoldStatus = S.String;

export type S3ObjectLockMode = "COMPLIANCE" | "GOVERNANCE" | (string & {});
const S3ObjectLockMode = S.String;

export type S3ChecksumAlgorithm =
  | "CRC32"
  | "CRC32C"
  | "SHA1"
  | "SHA256"
  | "CRC64NVME"
  | "SHA512"
  | "MD5"
  | "XXHASH64"
  | "XXHASH3"
  | "XXHASH128"
  | (string & {});
const S3ChecksumAlgorithm = S.String;

export type S3ObjectLockEventHold = "ON" | "OFF" | (string & {});
const S3ObjectLockEventHold = S.String;

export type S3ObjectLockEventHoldDurationDays = number;
export type S3ObjectLockEventHoldDurationYears = number;
export interface S3ObjectLockEventHoldDuration {
  Days?: number;
  Years?: number;
}
const S3ObjectLockEventHoldDuration = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<S3ObjectLockEventHoldDuration>;
export interface S3CopyObjectOperation {
  TargetResource?: string;
  CannedAccessControlList?: S3CannedAccessControlList;
  AccessControlGrants?: S3Grant[];
  MetadataDirective?: S3MetadataDirective;
  AnnotationDirective?: S3AnnotationDirective;
  ModifiedSinceConstraint?: Date;
  NewObjectMetadata?: S3ObjectMetadata;
  NewObjectTagging?: S3Tag[];
  RedirectLocation?: string;
  RequesterPays?: boolean;
  StorageClass?: S3StorageClass;
  UnModifiedSinceConstraint?: Date;
  SSEAwsKmsKeyId?: string;
  TargetKeyPrefix?: string;
  ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus;
  ObjectLockMode?: S3ObjectLockMode;
  ObjectLockRetainUntilDate?: Date;
  BucketKeyEnabled?: boolean;
  ChecksumAlgorithm?: S3ChecksumAlgorithm;
  ObjectLockEventHold?: S3ObjectLockEventHold;
  ObjectLockEventHoldDuration?: S3ObjectLockEventHoldDuration;
}
const S3CopyObjectOperation = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<S3CopyObjectOperation>;
export interface S3ObjectOwner {
  ID?: string;
  DisplayName?: string;
}
const S3ObjectOwner = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<S3ObjectOwner>;
export interface S3AccessControlList {
  Owner: S3ObjectOwner;
  Grants?: S3Grant[];
}
const S3AccessControlList = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<S3AccessControlList>;
export interface S3AccessControlPolicy {
  AccessControlList?: S3AccessControlList;
  CannedAccessControlList?: S3CannedAccessControlList;
}
const S3AccessControlPolicy = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<S3AccessControlPolicy>;
export interface S3SetObjectAclOperation {
  AccessControlPolicy?: S3AccessControlPolicy;
}
const S3SetObjectAclOperation = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<S3SetObjectAclOperation>;
export interface S3SetObjectTaggingOperation {
  TagSet?: S3Tag[];
}
const S3SetObjectTaggingOperation = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<S3SetObjectTaggingOperation>;
export interface S3DeleteObjectTaggingOperation {}
const S3DeleteObjectTaggingOperation = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<S3DeleteObjectTaggingOperation>;
export type S3ExpirationInDays = number;
export type S3GlacierJobTier = "BULK" | "STANDARD" | (string & {});
const S3GlacierJobTier = S.String;

export interface S3InitiateRestoreObjectOperation {
  ExpirationInDays?: number;
  GlacierJobTier?: S3GlacierJobTier;
}
const S3InitiateRestoreObjectOperation = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<S3InitiateRestoreObjectOperation>;
export interface S3ObjectLockLegalHold {
  Status: S3ObjectLockLegalHoldStatus;
}
const S3ObjectLockLegalHold = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<S3ObjectLockLegalHold>;
export interface S3SetObjectLegalHoldOperation {
  LegalHold: S3ObjectLockLegalHold;
}
const S3SetObjectLegalHoldOperation = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<S3SetObjectLegalHoldOperation>;
export type S3ObjectLockRetentionMode = "COMPLIANCE" | "GOVERNANCE" | (string & {});
const S3ObjectLockRetentionMode = S.String;

export type S3ObjectLockRetentionEventHold = "ON" | "OFF" | (string & {});
const S3ObjectLockRetentionEventHold = S.String;

export type S3ObjectLockRetentionEventHoldDurationDays = number;
export type S3ObjectLockRetentionEventHoldDurationYears = number;
export interface S3ObjectLockRetentionEventHoldDuration {
  Days?: number;
  Years?: number;
}
const S3ObjectLockRetentionEventHoldDuration = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<S3ObjectLockRetentionEventHoldDuration>;
export interface S3Retention {
  RetainUntilDate?: Date;
  Mode?: S3ObjectLockRetentionMode;
  EventHold?: S3ObjectLockRetentionEventHold;
  EventHoldDuration?: S3ObjectLockRetentionEventHoldDuration;
}
const S3Retention = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<S3Retention>;
export interface S3SetObjectRetentionOperation {
  BypassGovernanceRetention?: boolean;
  Retention: S3Retention;
}
const S3SetObjectRetentionOperation = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<S3SetObjectRetentionOperation>;
export interface S3ReplicateObjectOperation {}
const S3ReplicateObjectOperation = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<S3ReplicateObjectOperation>;
export type ComputeObjectChecksumAlgorithm =
  | "CRC32"
  | "CRC32C"
  | "CRC64NVME"
  | "MD5"
  | "SHA1"
  | "SHA256"
  | "SHA512"
  | "XXHASH64"
  | "XXHASH3"
  | "XXHASH128"
  | (string & {});
const ComputeObjectChecksumAlgorithm = S.String;

export type ComputeObjectChecksumType = "FULL_OBJECT" | "COMPOSITE" | (string & {});
const ComputeObjectChecksumType = S.String;

export interface S3ComputeObjectChecksumOperation {
  ChecksumAlgorithm?: ComputeObjectChecksumAlgorithm;
  ChecksumType?: ComputeObjectChecksumType;
}
const S3ComputeObjectChecksumOperation = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<S3ComputeObjectChecksumOperation>;
export type NonEmptyKmsKeyArnString = string;
export interface S3UpdateObjectEncryptionSSEKMS {
  KMSKeyArn: string;
  BucketKeyEnabled?: boolean;
}
const S3UpdateObjectEncryptionSSEKMS = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<S3UpdateObjectEncryptionSSEKMS>;
export interface ObjectEncryption {
  SSEKMS?: S3UpdateObjectEncryptionSSEKMS;
}
const ObjectEncryption = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<ObjectEncryption>;
export interface S3UpdateObjectEncryptionOperation {
  ObjectEncryption?: ObjectEncryption;
}
const S3UpdateObjectEncryptionOperation = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<S3UpdateObjectEncryptionOperation>;
export interface JobOperation {
  LambdaInvoke?: LambdaInvokeOperation;
  S3PutObjectCopy?: S3CopyObjectOperation;
  S3PutObjectAcl?: S3SetObjectAclOperation;
  S3PutObjectTagging?: S3SetObjectTaggingOperation;
  S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation;
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;
  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;
  S3PutObjectRetention?: S3SetObjectRetentionOperation;
  S3ReplicateObject?: S3ReplicateObjectOperation;
  S3ComputeObjectChecksum?: S3ComputeObjectChecksumOperation;
  S3UpdateObjectEncryption?: S3UpdateObjectEncryptionOperation;
}
const JobOperation = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<JobOperation>;
export type S3BucketArnString = string;
export type JobReportFormat = "Report_CSV_20180820" | (string & {});
const JobReportFormat = S.String;

export type ReportPrefixString = string;
export type JobReportScope = "AllTasks" | "FailedTasksOnly" | (string & {});
const JobReportScope = S.String;

export interface JobReport {
  Bucket?: string;
  Format?: JobReportFormat;
  Enabled: boolean;
  Prefix?: string;
  ReportScope?: JobReportScope;
  ExpectedBucketOwner?: string;
}
const JobReport = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<JobReport>;
export type JobManifestFormat =
  | "S3BatchOperations_CSV_20180820"
  | "S3InventoryReport_CSV_20161130"
  | (string & {});
const JobManifestFormat = S.String;

export type JobManifestFieldName = "Ignore" | "Bucket" | "Key" | "VersionId" | (string & {});
const JobManifestFieldName = S.String;

export type JobManifestFieldList = JobManifestFieldName[];
const JobManifestFieldList = /*@__PURE__*/ __L.at(__c7, 6);
export interface JobManifestSpec {
  Format: JobManifestFormat;
  Fields?: JobManifestFieldName[];
}
const JobManifestSpec = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<JobManifestSpec>;
export type S3KeyArnString = string;
export type S3ObjectVersionId = string;
export interface JobManifestLocation {
  ObjectArn: string;
  ObjectVersionId?: string;
  ETag: string;
}
const JobManifestLocation = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<JobManifestLocation>;
export interface JobManifest {
  Spec: JobManifestSpec;
  Location: JobManifestLocation;
}
const JobManifest = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<JobManifest>;
export type NonEmptyMaxLength256String = string;
export type JobPriority = number;
export type ManifestPrefixString = string;
export interface SSES3Encryption {}
const SSES3Encryption = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<SSES3Encryption>;
export interface SSEKMSEncryption {
  KeyId: string;
}
const SSEKMSEncryption = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<SSEKMSEncryption>;
export interface GeneratedManifestEncryption {
  SSES3?: SSES3Encryption;
  SSEKMS?: SSEKMSEncryption;
}
const GeneratedManifestEncryption = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<GeneratedManifestEncryption>;
export type GeneratedManifestFormat = "S3InventoryReport_CSV_20211130" | (string & {});
const GeneratedManifestFormat = S.String;

export interface S3ManifestOutputLocation {
  ExpectedManifestBucketOwner?: string;
  Bucket: string;
  ManifestPrefix?: string;
  ManifestEncryption?: GeneratedManifestEncryption;
  ManifestFormat: GeneratedManifestFormat;
}
const S3ManifestOutputLocation = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<S3ManifestOutputLocation>;
export type ObjectCreationTime = Date;
export type ReplicationStatus = "COMPLETED" | "FAILED" | "REPLICA" | "NONE" | (string & {});
const ReplicationStatus = S.String;

export type ReplicationStatusFilterList = ReplicationStatus[];
const ReplicationStatusFilterList = /*@__PURE__*/ __L.at(__c8, 6);
export type NonEmptyMaxLength1024StringList = string[];
const NonEmptyMaxLength1024StringList = /*@__PURE__*/ __L.at(__c8, 7);
export interface KeyNameConstraint {
  MatchAnyPrefix?: string[];
  MatchAnySuffix?: string[];
  MatchAnySubstring?: string[];
}
const KeyNameConstraint = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<KeyNameConstraint>;
export type ObjectSizeGreaterThanBytes = number;
export type ObjectSizeLessThanBytes = number;
export type StorageClassList = S3StorageClass[];
const StorageClassList = /*@__PURE__*/ __L.at(__c9, 1);
export interface SSES3Filter {}
const SSES3Filter = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<SSES3Filter>;
export interface SSEKMSFilter {
  KmsKeyArn?: string;
  BucketKeyEnabled?: boolean;
}
const SSEKMSFilter = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<SSEKMSFilter>;
export interface DSSEKMSFilter {
  KmsKeyArn?: string;
}
const DSSEKMSFilter = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<DSSEKMSFilter>;
export interface SSECFilter {}
const SSECFilter = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<SSECFilter>;
export interface NotSSEFilter {}
const NotSSEFilter = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<NotSSEFilter>;
export type ObjectEncryptionFilter =
  | { SSES3: SSES3Filter; SSEKMS?: never; DSSEKMS?: never; SSEC?: never; NOTSSE?: never }
  | { SSES3?: never; SSEKMS: SSEKMSFilter; DSSEKMS?: never; SSEC?: never; NOTSSE?: never }
  | { SSES3?: never; SSEKMS?: never; DSSEKMS: DSSEKMSFilter; SSEC?: never; NOTSSE?: never }
  | { SSES3?: never; SSEKMS?: never; DSSEKMS?: never; SSEC: SSECFilter; NOTSSE?: never }
  | { SSES3?: never; SSEKMS?: never; DSSEKMS?: never; SSEC?: never; NOTSSE: NotSSEFilter };
const ObjectEncryptionFilter = /*@__PURE__*/ __L.at(__c9, 7);
export type ObjectEncryptionFilterList = ObjectEncryptionFilter[];
const ObjectEncryptionFilterList = /*@__PURE__*/ __L.at(__c10, 0);
export interface JobManifestGeneratorFilter {
  EligibleForReplication?: boolean;
  CreatedAfter?: Date;
  CreatedBefore?: Date;
  ObjectReplicationStatuses?: ReplicationStatus[];
  KeyNameConstraint?: KeyNameConstraint;
  ObjectSizeGreaterThanBytes?: number;
  ObjectSizeLessThanBytes?: number;
  MatchAnyStorageClass?: S3StorageClass[];
  MatchAnyObjectEncryption?: ObjectEncryptionFilter[];
}
const JobManifestGeneratorFilter = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<JobManifestGeneratorFilter>;
export interface S3JobManifestGenerator {
  ExpectedBucketOwner?: string;
  SourceBucket: string;
  ManifestOutputLocation?: S3ManifestOutputLocation;
  Filter?: JobManifestGeneratorFilter;
  EnableManifestOutput: boolean;
}
const S3JobManifestGenerator = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<S3JobManifestGenerator>;
export type JobManifestGenerator = { S3JobManifestGenerator: S3JobManifestGenerator };
const JobManifestGenerator = /*@__PURE__*/ __L.at(__c10, 3);
export interface CreateJobRequest {
  AccountId: string;
  ConfirmationRequired?: boolean;
  Operation: JobOperation;
  Report: JobReport;
  ClientRequestToken: string;
  Manifest?: JobManifest;
  Description?: string;
  Priority: number;
  RoleArn: string;
  Tags?: S3Tag[];
  ManifestGenerator?: JobManifestGenerator;
}
const CreateJobRequest = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<CreateJobRequest>;
export type JobId = string;
export interface CreateJobResult {
  JobId?: string;
}
const CreateJobResult = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<CreateJobResult>;
export type MultiRegionAccessPointClientToken = string;
export type MultiRegionAccessPointName = string;
export interface Region {
  Bucket: string;
  BucketAccountId?: string;
}
const Region = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<Region>;
export type RegionCreationList = Region[];
const RegionCreationList = /*@__PURE__*/ __L.at(__c10, 7);
export interface CreateMultiRegionAccessPointInput {
  Name: string;
  PublicAccessBlock?: PublicAccessBlockConfiguration;
  Regions: Region[];
}
const CreateMultiRegionAccessPointInput = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<CreateMultiRegionAccessPointInput>;
export interface CreateMultiRegionAccessPointRequest {
  AccountId: string;
  ClientToken: string;
  Details: CreateMultiRegionAccessPointInput;
}
const CreateMultiRegionAccessPointRequest = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<CreateMultiRegionAccessPointRequest>;
export type AsyncRequestTokenARN = string;
export interface CreateMultiRegionAccessPointResult {
  RequestTokenARN?: string;
}
const CreateMultiRegionAccessPointResult = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<CreateMultiRegionAccessPointResult>;
export type StorageLensGroupName = string;
export type MatchAnyPrefix = string[];
const MatchAnyPrefix = /*@__PURE__*/ __L.at(__c11, 3);
export type Suffix = string;
export type MatchAnySuffix = string[];
const MatchAnySuffix = /*@__PURE__*/ __L.at(__c11, 4);
export type MatchAnyTag = S3Tag[];
const MatchAnyTag = /*@__PURE__*/ __L.at(__c11, 5);
export type ObjectAgeValue = number;
export interface MatchObjectAge {
  DaysGreaterThan?: number;
  DaysLessThan?: number;
}
const MatchObjectAge = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<MatchObjectAge>;
export type ObjectSizeValue = number;
export interface MatchObjectSize {
  BytesGreaterThan?: number;
  BytesLessThan?: number;
}
const MatchObjectSize = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<MatchObjectSize>;
export interface StorageLensGroupAndOperator {
  MatchAnyPrefix?: string[];
  MatchAnySuffix?: string[];
  MatchAnyTag?: S3Tag[];
  MatchObjectAge?: MatchObjectAge;
  MatchObjectSize?: MatchObjectSize;
}
const StorageLensGroupAndOperator = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<StorageLensGroupAndOperator>;
export interface StorageLensGroupOrOperator {
  MatchAnyPrefix?: string[];
  MatchAnySuffix?: string[];
  MatchAnyTag?: S3Tag[];
  MatchObjectAge?: MatchObjectAge;
  MatchObjectSize?: MatchObjectSize;
}
const StorageLensGroupOrOperator = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<StorageLensGroupOrOperator>;
export interface StorageLensGroupFilter {
  MatchAnyPrefix?: string[];
  MatchAnySuffix?: string[];
  MatchAnyTag?: S3Tag[];
  MatchObjectAge?: MatchObjectAge;
  MatchObjectSize?: MatchObjectSize;
  And?: StorageLensGroupAndOperator;
  Or?: StorageLensGroupOrOperator;
}
const StorageLensGroupFilter = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<StorageLensGroupFilter>;
export type StorageLensGroupArn = string;
export interface StorageLensGroup {
  Name: string;
  Filter: StorageLensGroupFilter;
  StorageLensGroupArn?: string;
}
const StorageLensGroup = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<StorageLensGroup>;
export interface CreateStorageLensGroupRequest {
  AccountId: string;
  StorageLensGroup: StorageLensGroup;
  Tags?: Tag[];
}
const CreateStorageLensGroupRequest = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<CreateStorageLensGroupRequest>;
export interface CreateStorageLensGroupResponse {}
const CreateStorageLensGroupResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<CreateStorageLensGroupResponse>;
export interface DeleteAccessGrantRequest {
  AccountId: string;
  AccessGrantId: string;
}
const DeleteAccessGrantRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<DeleteAccessGrantRequest>;
export interface DeleteAccessGrantResponse {}
const DeleteAccessGrantResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<DeleteAccessGrantResponse>;
export interface DeleteAccessGrantsInstanceRequest {
  AccountId: string;
}
const DeleteAccessGrantsInstanceRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<DeleteAccessGrantsInstanceRequest>;
export interface DeleteAccessGrantsInstanceResponse {}
const DeleteAccessGrantsInstanceResponse = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<DeleteAccessGrantsInstanceResponse>;
export interface DeleteAccessGrantsInstanceResourcePolicyRequest {
  AccountId: string;
}
const DeleteAccessGrantsInstanceResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<DeleteAccessGrantsInstanceResourcePolicyRequest>;
export interface DeleteAccessGrantsInstanceResourcePolicyResponse {}
const DeleteAccessGrantsInstanceResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<DeleteAccessGrantsInstanceResourcePolicyResponse>;
export interface DeleteAccessGrantsLocationRequest {
  AccountId: string;
  AccessGrantsLocationId: string;
}
const DeleteAccessGrantsLocationRequest = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<DeleteAccessGrantsLocationRequest>;
export interface DeleteAccessGrantsLocationResponse {}
const DeleteAccessGrantsLocationResponse = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<DeleteAccessGrantsLocationResponse>;
export interface DeleteAccessPointRequest {
  AccountId: string;
  Name: string;
}
const DeleteAccessPointRequest = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<DeleteAccessPointRequest>;
export interface DeleteAccessPointResponse {}
const DeleteAccessPointResponse = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<DeleteAccessPointResponse>;
export interface DeleteAccessPointForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
const DeleteAccessPointForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<DeleteAccessPointForObjectLambdaRequest>;
export interface DeleteAccessPointForObjectLambdaResponse {}
const DeleteAccessPointForObjectLambdaResponse = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<DeleteAccessPointForObjectLambdaResponse>;
export interface DeleteAccessPointPolicyRequest {
  AccountId: string;
  Name: string;
}
const DeleteAccessPointPolicyRequest = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<DeleteAccessPointPolicyRequest>;
export interface DeleteAccessPointPolicyResponse {}
const DeleteAccessPointPolicyResponse = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<DeleteAccessPointPolicyResponse>;
export interface DeleteAccessPointPolicyForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
const DeleteAccessPointPolicyForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<DeleteAccessPointPolicyForObjectLambdaRequest>;
export interface DeleteAccessPointPolicyForObjectLambdaResponse {}
const DeleteAccessPointPolicyForObjectLambdaResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DeleteAccessPointPolicyForObjectLambdaResponse>;
export interface DeleteAccessPointScopeRequest {
  AccountId: string;
  Name: string;
}
const DeleteAccessPointScopeRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DeleteAccessPointScopeRequest>;
export interface DeleteAccessPointScopeResponse {}
const DeleteAccessPointScopeResponse = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<DeleteAccessPointScopeResponse>;
export interface DeleteBucketRequest {
  AccountId: string;
  Bucket: string;
}
const DeleteBucketRequest = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<DeleteBucketRequest>;
export interface DeleteBucketResponse {}
const DeleteBucketResponse = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<DeleteBucketResponse>;
export interface DeleteBucketLifecycleConfigurationRequest {
  AccountId: string;
  Bucket: string;
}
const DeleteBucketLifecycleConfigurationRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<DeleteBucketLifecycleConfigurationRequest>;
export interface DeleteBucketLifecycleConfigurationResponse {}
const DeleteBucketLifecycleConfigurationResponse = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DeleteBucketLifecycleConfigurationResponse>;
export interface DeleteBucketPolicyRequest {
  AccountId: string;
  Bucket: string;
}
const DeleteBucketPolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<DeleteBucketPolicyRequest>;
export interface DeleteBucketPolicyResponse {}
const DeleteBucketPolicyResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<DeleteBucketPolicyResponse>;
export interface DeleteBucketReplicationRequest {
  AccountId: string;
  Bucket: string;
}
const DeleteBucketReplicationRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<DeleteBucketReplicationRequest>;
export interface DeleteBucketReplicationResponse {}
const DeleteBucketReplicationResponse = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<DeleteBucketReplicationResponse>;
export interface DeleteBucketTaggingRequest {
  AccountId: string;
  Bucket: string;
}
const DeleteBucketTaggingRequest = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<DeleteBucketTaggingRequest>;
export interface DeleteBucketTaggingResponse {}
const DeleteBucketTaggingResponse = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<DeleteBucketTaggingResponse>;
export interface DeleteJobTaggingRequest {
  AccountId: string;
  JobId: string;
}
const DeleteJobTaggingRequest = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<DeleteJobTaggingRequest>;
export interface DeleteJobTaggingResult {}
const DeleteJobTaggingResult = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DeleteJobTaggingResult>;
export interface DeleteMultiRegionAccessPointInput {
  Name: string;
}
const DeleteMultiRegionAccessPointInput = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<DeleteMultiRegionAccessPointInput>;
export interface DeleteMultiRegionAccessPointRequest {
  AccountId: string;
  ClientToken: string;
  Details: DeleteMultiRegionAccessPointInput;
}
const DeleteMultiRegionAccessPointRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<DeleteMultiRegionAccessPointRequest>;
export interface DeleteMultiRegionAccessPointResult {
  RequestTokenARN?: string;
}
const DeleteMultiRegionAccessPointResult = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<DeleteMultiRegionAccessPointResult>;
export interface DeletePublicAccessBlockRequest {
  AccountId: string;
}
const DeletePublicAccessBlockRequest = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<DeletePublicAccessBlockRequest>;
export interface DeletePublicAccessBlockResponse {}
const DeletePublicAccessBlockResponse = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<DeletePublicAccessBlockResponse>;
export type ConfigId = string;
export interface DeleteStorageLensConfigurationRequest {
  ConfigId: string;
  AccountId: string;
}
const DeleteStorageLensConfigurationRequest = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<DeleteStorageLensConfigurationRequest>;
export interface DeleteStorageLensConfigurationResponse {}
const DeleteStorageLensConfigurationResponse = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<DeleteStorageLensConfigurationResponse>;
export interface DeleteStorageLensConfigurationTaggingRequest {
  ConfigId: string;
  AccountId: string;
}
const DeleteStorageLensConfigurationTaggingRequest = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<DeleteStorageLensConfigurationTaggingRequest>;
export interface DeleteStorageLensConfigurationTaggingResult {}
const DeleteStorageLensConfigurationTaggingResult = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<DeleteStorageLensConfigurationTaggingResult>;
export interface DeleteStorageLensGroupRequest {
  Name: string;
  AccountId: string;
}
const DeleteStorageLensGroupRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<DeleteStorageLensGroupRequest>;
export interface DeleteStorageLensGroupResponse {}
const DeleteStorageLensGroupResponse = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<DeleteStorageLensGroupResponse>;
export interface DescribeJobRequest {
  AccountId: string;
  JobId: string;
}
const DescribeJobRequest = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<DescribeJobRequest>;
export type JobArn = string;
export type JobStatus =
  | "Active"
  | "Cancelled"
  | "Cancelling"
  | "Complete"
  | "Completing"
  | "Failed"
  | "Failing"
  | "New"
  | "Paused"
  | "Pausing"
  | "Preparing"
  | "Ready"
  | "Suspended"
  | (string & {});
const JobStatus = S.String;

export type JobTotalNumberOfTasks = number;
export type JobNumberOfTasksSucceeded = number;
export type JobNumberOfTasksFailed = number;
export type JobTimeInStateSeconds = number;
export interface JobTimers {
  ElapsedTimeInActiveSeconds?: number;
}
const JobTimers = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<JobTimers>;
export interface JobProgressSummary {
  TotalNumberOfTasks?: number;
  NumberOfTasksSucceeded?: number;
  NumberOfTasksFailed?: number;
  Timers?: JobTimers;
}
const JobProgressSummary = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<JobProgressSummary>;
export type JobStatusUpdateReason = string;
export type JobFailureCode = string;
export type JobFailureReason = string;
export interface JobFailure {
  FailureCode?: string;
  FailureReason?: string;
}
const JobFailure = /*@__PURE__*/ __L.at(__c18, 2) as any as S.Schema<JobFailure>;
export type JobFailureList = JobFailure[];
const JobFailureList = /*@__PURE__*/ __L.at(__c18, 3);
export type JobCreationTime = Date;
export type JobTerminationDate = Date;
export type SuspendedDate = Date;
export type SuspendedCause = string;
export interface S3GeneratedManifestDescriptor {
  Format?: GeneratedManifestFormat;
  Location?: JobManifestLocation;
}
const S3GeneratedManifestDescriptor = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<S3GeneratedManifestDescriptor>;
export interface JobDescriptor {
  JobId?: string;
  ConfirmationRequired?: boolean;
  Description?: string;
  JobArn?: string;
  Status?: JobStatus;
  Manifest?: JobManifest;
  Operation?: JobOperation;
  Priority?: number;
  ProgressSummary?: JobProgressSummary;
  StatusUpdateReason?: string;
  FailureReasons?: JobFailure[];
  Report?: JobReport;
  CreationTime?: Date;
  TerminationDate?: Date;
  RoleArn?: string;
  SuspendedDate?: Date;
  SuspendedCause?: string;
  ManifestGenerator?: JobManifestGenerator;
  GeneratedManifestDescriptor?: S3GeneratedManifestDescriptor;
}
const JobDescriptor = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<JobDescriptor>;
export interface DescribeJobResult {
  Job?: JobDescriptor;
}
const DescribeJobResult = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<DescribeJobResult>;
export interface DescribeMultiRegionAccessPointOperationRequest {
  AccountId: string;
  RequestTokenARN: string;
}
const DescribeMultiRegionAccessPointOperationRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<DescribeMultiRegionAccessPointOperationRequest>;
export type AsyncCreationTimestamp = Date;
export type AsyncOperationName =
  | "CreateMultiRegionAccessPoint"
  | "DeleteMultiRegionAccessPoint"
  | "PutMultiRegionAccessPointPolicy"
  | (string & {});
const AsyncOperationName = S.String;

export type Policy = string;
export interface PutMultiRegionAccessPointPolicyInput {
  Name: string;
  Policy: string;
}
const PutMultiRegionAccessPointPolicyInput = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<PutMultiRegionAccessPointPolicyInput>;
export interface AsyncRequestParameters {
  CreateMultiRegionAccessPointRequest?: CreateMultiRegionAccessPointInput;
  DeleteMultiRegionAccessPointRequest?: DeleteMultiRegionAccessPointInput;
  PutMultiRegionAccessPointPolicyRequest?: PutMultiRegionAccessPointPolicyInput;
}
const AsyncRequestParameters = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<AsyncRequestParameters>;
export type AsyncRequestStatus = string;
export type RegionName = string;
export interface MultiRegionAccessPointRegionalResponse {
  Name?: string;
  RequestStatus?: string;
}
const MultiRegionAccessPointRegionalResponse = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<MultiRegionAccessPointRegionalResponse>;
export type MultiRegionAccessPointRegionalResponseList = MultiRegionAccessPointRegionalResponse[];
const MultiRegionAccessPointRegionalResponseList = /*@__PURE__*/ __L.at(__c19, 3);
export interface MultiRegionAccessPointsAsyncResponse {
  Regions?: MultiRegionAccessPointRegionalResponse[];
}
const MultiRegionAccessPointsAsyncResponse = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<MultiRegionAccessPointsAsyncResponse>;
export interface AsyncErrorDetails {
  Code?: string;
  Message?: string;
  Resource?: string;
  RequestId?: string;
}
const AsyncErrorDetails = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<AsyncErrorDetails>;
export interface AsyncResponseDetails {
  MultiRegionAccessPointDetails?: MultiRegionAccessPointsAsyncResponse;
  ErrorDetails?: AsyncErrorDetails;
}
const AsyncResponseDetails = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<AsyncResponseDetails>;
export interface AsyncOperation {
  CreationTime?: Date;
  Operation?: AsyncOperationName;
  RequestTokenARN?: string;
  RequestParameters?: AsyncRequestParameters;
  RequestStatus?: string;
  ResponseDetails?: AsyncResponseDetails;
}
const AsyncOperation = /*@__PURE__*/ __L.at(__c19, 7) as any as S.Schema<AsyncOperation>;
export interface DescribeMultiRegionAccessPointOperationResult {
  AsyncOperation?: AsyncOperation;
}
const DescribeMultiRegionAccessPointOperationResult = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<DescribeMultiRegionAccessPointOperationResult>;
export interface DissociateAccessGrantsIdentityCenterRequest {
  AccountId: string;
}
const DissociateAccessGrantsIdentityCenterRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<DissociateAccessGrantsIdentityCenterRequest>;
export interface DissociateAccessGrantsIdentityCenterResponse {}
const DissociateAccessGrantsIdentityCenterResponse = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<DissociateAccessGrantsIdentityCenterResponse>;
export interface GetAccessGrantRequest {
  AccountId: string;
  AccessGrantId: string;
}
const GetAccessGrantRequest = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<GetAccessGrantRequest>;
export interface GetAccessGrantResult {
  CreatedAt?: Date;
  AccessGrantId?: string;
  AccessGrantArn?: string;
  Grantee?: Grantee;
  Permission?: Permission;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  GrantScope?: string;
  ApplicationArn?: string;
}
const GetAccessGrantResult = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<GetAccessGrantResult>;
export interface GetAccessGrantsInstanceRequest {
  AccountId: string;
}
const GetAccessGrantsInstanceRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<GetAccessGrantsInstanceRequest>;
export interface GetAccessGrantsInstanceResult {
  AccessGrantsInstanceArn?: string;
  AccessGrantsInstanceId?: string;
  IdentityCenterArn?: string;
  IdentityCenterInstanceArn?: string;
  IdentityCenterApplicationArn?: string;
  CreatedAt?: Date;
}
const GetAccessGrantsInstanceResult = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<GetAccessGrantsInstanceResult>;
export interface GetAccessGrantsInstanceForPrefixRequest {
  AccountId: string;
  S3Prefix: string;
}
const GetAccessGrantsInstanceForPrefixRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<GetAccessGrantsInstanceForPrefixRequest>;
export interface GetAccessGrantsInstanceForPrefixResult {
  AccessGrantsInstanceArn?: string;
  AccessGrantsInstanceId?: string;
}
const GetAccessGrantsInstanceForPrefixResult = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<GetAccessGrantsInstanceForPrefixResult>;
export interface GetAccessGrantsInstanceResourcePolicyRequest {
  AccountId: string;
}
const GetAccessGrantsInstanceResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<GetAccessGrantsInstanceResourcePolicyRequest>;
export type PolicyDocument = string;
export type Organization = string;
export interface GetAccessGrantsInstanceResourcePolicyResult {
  Policy?: string;
  Organization?: string;
  CreatedAt?: Date;
}
const GetAccessGrantsInstanceResourcePolicyResult = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<GetAccessGrantsInstanceResourcePolicyResult>;
export interface GetAccessGrantsLocationRequest {
  AccountId: string;
  AccessGrantsLocationId: string;
}
const GetAccessGrantsLocationRequest = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<GetAccessGrantsLocationRequest>;
export interface GetAccessGrantsLocationResult {
  CreatedAt?: Date;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationArn?: string;
  LocationScope?: string;
  IAMRoleArn?: string;
}
const GetAccessGrantsLocationResult = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<GetAccessGrantsLocationResult>;
export interface GetAccessPointRequest {
  AccountId: string;
  Name: string;
}
const GetAccessPointRequest = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<GetAccessPointRequest>;
export type AccessPointBucketName = string;
export type NetworkOrigin = "Internet" | "VPC" | (string & {});
const NetworkOrigin = S.String;

export type CreationDate = Date;
export type Endpoints = { [key: string]: string | undefined };
const Endpoints = /*@__PURE__*/ __L.at(__c21, 6);
export type DataSourceId = string;
export type DataSourceType = string;
export interface GetAccessPointResult {
  Name?: string;
  Bucket?: string;
  NetworkOrigin?: NetworkOrigin;
  VpcConfiguration?: VpcConfiguration;
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  CreationDate?: Date;
  Alias?: string;
  AccessPointArn?: string;
  Endpoints?: { [key: string]: string | undefined };
  BucketAccountId?: string;
  DataSourceId?: string;
  DataSourceType?: string;
}
const GetAccessPointResult = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<GetAccessPointResult>;
export interface GetAccessPointConfigurationForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
const GetAccessPointConfigurationForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<GetAccessPointConfigurationForObjectLambdaRequest>;
export interface GetAccessPointConfigurationForObjectLambdaResult {
  Configuration?: ObjectLambdaConfiguration;
}
const GetAccessPointConfigurationForObjectLambdaResult = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<GetAccessPointConfigurationForObjectLambdaResult>;
export interface GetAccessPointForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
const GetAccessPointForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<GetAccessPointForObjectLambdaRequest>;
export interface GetAccessPointForObjectLambdaResult {
  Name?: string;
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  CreationDate?: Date;
  Alias?: ObjectLambdaAccessPointAlias;
}
const GetAccessPointForObjectLambdaResult = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<GetAccessPointForObjectLambdaResult>;
export interface GetAccessPointPolicyRequest {
  AccountId: string;
  Name: string;
}
const GetAccessPointPolicyRequest = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<GetAccessPointPolicyRequest>;
export interface GetAccessPointPolicyResult {
  Policy?: string;
}
const GetAccessPointPolicyResult = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<GetAccessPointPolicyResult>;
export interface GetAccessPointPolicyForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
const GetAccessPointPolicyForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<GetAccessPointPolicyForObjectLambdaRequest>;
export type ObjectLambdaPolicy = string;
export interface GetAccessPointPolicyForObjectLambdaResult {
  Policy?: string;
}
const GetAccessPointPolicyForObjectLambdaResult = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<GetAccessPointPolicyForObjectLambdaResult>;
export interface GetAccessPointPolicyStatusRequest {
  AccountId: string;
  Name: string;
}
const GetAccessPointPolicyStatusRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<GetAccessPointPolicyStatusRequest>;
export type IsPublic = boolean;
export interface PolicyStatus {
  IsPublic?: boolean;
}
const PolicyStatus = /*@__PURE__*/ __L.at(__c23, 1) as any as S.Schema<PolicyStatus>;
export interface GetAccessPointPolicyStatusResult {
  PolicyStatus?: PolicyStatus;
}
const GetAccessPointPolicyStatusResult = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<GetAccessPointPolicyStatusResult>;
export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
  AccountId: string;
  Name: string;
}
const GetAccessPointPolicyStatusForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<GetAccessPointPolicyStatusForObjectLambdaRequest>;
export interface GetAccessPointPolicyStatusForObjectLambdaResult {
  PolicyStatus?: PolicyStatus;
}
const GetAccessPointPolicyStatusForObjectLambdaResult = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<GetAccessPointPolicyStatusForObjectLambdaResult>;
export interface GetAccessPointScopeRequest {
  AccountId: string;
  Name: string;
}
const GetAccessPointScopeRequest = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<GetAccessPointScopeRequest>;
export interface GetAccessPointScopeResult {
  Scope?: Scope;
}
const GetAccessPointScopeResult = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<GetAccessPointScopeResult>;
export interface GetBucketRequest {
  AccountId: string;
  Bucket: string;
}
const GetBucketRequest = /*@__PURE__*/ __L.at(__c23, 7) as any as S.Schema<GetBucketRequest>;
export type PublicAccessBlockEnabled = boolean;
export interface GetBucketResult {
  Bucket?: string;
  PublicAccessBlockEnabled?: boolean;
  CreationDate?: Date;
}
const GetBucketResult = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<GetBucketResult>;
export interface GetBucketLifecycleConfigurationRequest {
  AccountId: string;
  Bucket: string;
}
const GetBucketLifecycleConfigurationRequest = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<GetBucketLifecycleConfigurationRequest>;
export type Days = number;
export type ExpiredObjectDeleteMarker = boolean;
export interface LifecycleExpiration {
  Date?: Date;
  Days?: number;
  ExpiredObjectDeleteMarker?: boolean;
}
const LifecycleExpiration = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<LifecycleExpiration>;
export type ID = string;
export interface LifecycleRuleAndOperator {
  Prefix?: string;
  Tags?: S3Tag[];
  ObjectSizeGreaterThan?: number;
  ObjectSizeLessThan?: number;
}
const LifecycleRuleAndOperator = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<LifecycleRuleAndOperator>;
export interface LifecycleRuleFilter {
  Prefix?: string;
  Tag?: S3Tag;
  And?: LifecycleRuleAndOperator;
  ObjectSizeGreaterThan?: number;
  ObjectSizeLessThan?: number;
}
const LifecycleRuleFilter = /*@__PURE__*/ __L.at(__c24, 4) as any as S.Schema<LifecycleRuleFilter>;
export type ExpirationStatus = "Enabled" | "Disabled" | (string & {});
const ExpirationStatus = S.String;

export type TransitionStorageClass =
  | "GLACIER"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "DEEP_ARCHIVE"
  | (string & {});
const TransitionStorageClass = S.String;

export interface Transition {
  Date?: Date;
  Days?: number;
  StorageClass?: TransitionStorageClass;
}
const Transition = /*@__PURE__*/ __L.at(__c24, 5) as any as S.Schema<Transition>;
export type TransitionList = Transition[];
const TransitionList = /*@__PURE__*/ __L.at(__c24, 6);
export interface NoncurrentVersionTransition {
  NoncurrentDays?: number;
  StorageClass?: TransitionStorageClass;
}
const NoncurrentVersionTransition = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<NoncurrentVersionTransition>;
export type NoncurrentVersionTransitionList = NoncurrentVersionTransition[];
const NoncurrentVersionTransitionList = /*@__PURE__*/ __L.at(__c25, 0);
export type NoncurrentVersionCount = number;
export interface NoncurrentVersionExpiration {
  NoncurrentDays?: number;
  NewerNoncurrentVersions?: number;
}
const NoncurrentVersionExpiration = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<NoncurrentVersionExpiration>;
export type DaysAfterInitiation = number;
export interface AbortIncompleteMultipartUpload {
  DaysAfterInitiation?: number;
}
const AbortIncompleteMultipartUpload = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<AbortIncompleteMultipartUpload>;
export interface LifecycleRule {
  Expiration?: LifecycleExpiration;
  ID?: string;
  Filter?: LifecycleRuleFilter;
  Status: ExpirationStatus;
  Transitions?: Transition[];
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[];
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}
const LifecycleRule = /*@__PURE__*/ __L.at(__c25, 3) as any as S.Schema<LifecycleRule>;
export type LifecycleRules = LifecycleRule[];
const LifecycleRules = /*@__PURE__*/ __L.at(__c25, 4);
export interface GetBucketLifecycleConfigurationResult {
  Rules?: LifecycleRule[];
}
const GetBucketLifecycleConfigurationResult = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<GetBucketLifecycleConfigurationResult>;
export interface GetBucketPolicyRequest {
  AccountId: string;
  Bucket: string;
}
const GetBucketPolicyRequest = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<GetBucketPolicyRequest>;
export interface GetBucketPolicyResult {
  Policy?: string;
}
const GetBucketPolicyResult = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<GetBucketPolicyResult>;
export interface GetBucketReplicationRequest {
  AccountId: string;
  Bucket: string;
}
const GetBucketReplicationRequest = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<GetBucketReplicationRequest>;
export type Role = string;
export type Priority = number;
export interface ReplicationRuleAndOperator {
  Prefix?: string;
  Tags?: S3Tag[];
}
const ReplicationRuleAndOperator = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<ReplicationRuleAndOperator>;
export interface ReplicationRuleFilter {
  Prefix?: string;
  Tag?: S3Tag;
  And?: ReplicationRuleAndOperator;
}
const ReplicationRuleFilter = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<ReplicationRuleFilter>;
export type ReplicationRuleStatus = "Enabled" | "Disabled" | (string & {});
const ReplicationRuleStatus = S.String;

export type SseKmsEncryptedObjectsStatus = "Enabled" | "Disabled" | (string & {});
const SseKmsEncryptedObjectsStatus = S.String;

export interface SseKmsEncryptedObjects {
  Status: SseKmsEncryptedObjectsStatus;
}
const SseKmsEncryptedObjects = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<SseKmsEncryptedObjects>;
export type ReplicaModificationsStatus = "Enabled" | "Disabled" | (string & {});
const ReplicaModificationsStatus = S.String;

export interface ReplicaModifications {
  Status: ReplicaModificationsStatus;
}
const ReplicaModifications = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<ReplicaModifications>;
export interface SourceSelectionCriteria {
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
  ReplicaModifications?: ReplicaModifications;
}
const SourceSelectionCriteria = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<SourceSelectionCriteria>;
export type ExistingObjectReplicationStatus = "Enabled" | "Disabled" | (string & {});
const ExistingObjectReplicationStatus = S.String;

export interface ExistingObjectReplication {
  Status: ExistingObjectReplicationStatus;
}
const ExistingObjectReplication = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<ExistingObjectReplication>;
export type BucketIdentifierString = string;
export type ReplicationTimeStatus = "Enabled" | "Disabled" | (string & {});
const ReplicationTimeStatus = S.String;

export type Minutes = number;
export interface ReplicationTimeValue {
  Minutes?: number;
}
const ReplicationTimeValue = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<ReplicationTimeValue>;
export interface ReplicationTime {
  Status: ReplicationTimeStatus;
  Time: ReplicationTimeValue;
}
const ReplicationTime = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<ReplicationTime>;
export type OwnerOverride = "Destination" | (string & {});
const OwnerOverride = S.String;

export interface AccessControlTranslation {
  Owner: OwnerOverride;
}
const AccessControlTranslation = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<AccessControlTranslation>;
export type ReplicaKmsKeyID = string;
export interface EncryptionConfiguration {
  ReplicaKmsKeyID?: string;
}
const EncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<EncryptionConfiguration>;
export type MetricsStatus = "Enabled" | "Disabled" | (string & {});
const MetricsStatus = S.String;

export interface Metrics {
  Status: MetricsStatus;
  EventThreshold?: ReplicationTimeValue;
}
const Metrics = /*@__PURE__*/ __L.at(__c27, 3) as any as S.Schema<Metrics>;
export type ReplicationStorageClass =
  | "STANDARD"
  | "REDUCED_REDUNDANCY"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "GLACIER"
  | "DEEP_ARCHIVE"
  | "OUTPOSTS"
  | "GLACIER_IR"
  | (string & {});
const ReplicationStorageClass = S.String;

export interface Destination {
  Account?: string;
  Bucket: string;
  ReplicationTime?: ReplicationTime;
  AccessControlTranslation?: AccessControlTranslation;
  EncryptionConfiguration?: EncryptionConfiguration;
  Metrics?: Metrics;
  StorageClass?: ReplicationStorageClass;
}
const Destination = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<Destination>;
export type DeleteMarkerReplicationStatus = "Enabled" | "Disabled" | (string & {});
const DeleteMarkerReplicationStatus = S.String;

export interface DeleteMarkerReplication {
  Status: DeleteMarkerReplicationStatus;
}
const DeleteMarkerReplication = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<DeleteMarkerReplication>;
export interface ReplicationRule {
  ID?: string;
  Priority?: number;
  Prefix?: string;
  Filter?: ReplicationRuleFilter;
  Status: ReplicationRuleStatus;
  SourceSelectionCriteria?: SourceSelectionCriteria;
  ExistingObjectReplication?: ExistingObjectReplication;
  Destination: Destination;
  DeleteMarkerReplication?: DeleteMarkerReplication;
  Bucket: string;
}
const ReplicationRule = /*@__PURE__*/ __L.at(__c27, 6) as any as S.Schema<ReplicationRule>;
export type ReplicationRules = ReplicationRule[];
const ReplicationRules = /*@__PURE__*/ __L.at(__c27, 7);
export interface ReplicationConfiguration {
  Role: string;
  Rules: ReplicationRule[];
}
const ReplicationConfiguration = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<ReplicationConfiguration>;
export interface GetBucketReplicationResult {
  ReplicationConfiguration?: ReplicationConfiguration;
}
const GetBucketReplicationResult = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<GetBucketReplicationResult>;
export interface GetBucketTaggingRequest {
  AccountId: string;
  Bucket: string;
}
const GetBucketTaggingRequest = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<GetBucketTaggingRequest>;
export interface GetBucketTaggingResult {
  TagSet: S3Tag[];
}
const GetBucketTaggingResult = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<GetBucketTaggingResult>;
export interface GetBucketVersioningRequest {
  AccountId: string;
  Bucket: string;
}
const GetBucketVersioningRequest = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<GetBucketVersioningRequest>;
export type BucketVersioningStatus = "Enabled" | "Suspended" | (string & {});
const BucketVersioningStatus = S.String;

export type MFADeleteStatus = "Enabled" | "Disabled" | (string & {});
const MFADeleteStatus = S.String;

export interface GetBucketVersioningResult {
  Status?: BucketVersioningStatus;
  MFADelete?: MFADeleteStatus;
}
const GetBucketVersioningResult = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<GetBucketVersioningResult>;
export type DurationSeconds = number;
export type Privilege = "Minimal" | "Default" | (string & {});
const Privilege = S.String;

export type AuditContext = string;
export interface GetDataAccessRequest {
  AccountId: string;
  Target: string;
  Permission: Permission;
  DurationSeconds?: number;
  Privilege?: Privilege;
  TargetType?: S3PrefixType;
  AuditContext?: string;
}
const GetDataAccessRequest = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<GetDataAccessRequest>;
export type AccessKeyId = string | redacted.Redacted<string>;
export type SecretAccessKey = string | redacted.Redacted<string>;
export type SessionToken = string | redacted.Redacted<string>;
export type Expiration = Date;
export interface Credentials {
  AccessKeyId?: string | redacted.Redacted<string>;
  SecretAccessKey?: string | redacted.Redacted<string>;
  SessionToken?: string | redacted.Redacted<string>;
  Expiration?: Date;
}
const Credentials = /*@__PURE__*/ __L.at(__c28, 7) as any as S.Schema<Credentials>;
export interface GetDataAccessResult {
  Credentials?: Credentials;
  MatchedGrantTarget?: string;
  Grantee?: Grantee;
}
const GetDataAccessResult = /*@__PURE__*/ __L.at(__c29, 0) as any as S.Schema<GetDataAccessResult>;
export interface GetJobTaggingRequest {
  AccountId: string;
  JobId: string;
}
const GetJobTaggingRequest = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<GetJobTaggingRequest>;
export interface GetJobTaggingResult {
  Tags?: S3Tag[];
}
const GetJobTaggingResult = /*@__PURE__*/ __L.at(__c29, 2) as any as S.Schema<GetJobTaggingResult>;
export interface GetMultiRegionAccessPointRequest {
  AccountId: string;
  Name: string;
}
const GetMultiRegionAccessPointRequest = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<GetMultiRegionAccessPointRequest>;
export type MultiRegionAccessPointAlias = string;
export type MultiRegionAccessPointStatus =
  | "READY"
  | "INCONSISTENT_ACROSS_REGIONS"
  | "CREATING"
  | "PARTIALLY_CREATED"
  | "PARTIALLY_DELETED"
  | "DELETING"
  | (string & {});
const MultiRegionAccessPointStatus = S.String;

export interface RegionReport {
  Bucket?: string;
  Region?: string;
  BucketAccountId?: string;
}
const RegionReport = /*@__PURE__*/ __L.at(__c29, 4) as any as S.Schema<RegionReport>;
export type RegionReportList = RegionReport[];
const RegionReportList = /*@__PURE__*/ __L.at(__c29, 5);
export interface MultiRegionAccessPointReport {
  Name?: string;
  Alias?: string;
  CreatedAt?: Date;
  PublicAccessBlock?: PublicAccessBlockConfiguration;
  Status?: MultiRegionAccessPointStatus;
  Regions?: RegionReport[];
}
const MultiRegionAccessPointReport = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<MultiRegionAccessPointReport>;
export interface GetMultiRegionAccessPointResult {
  AccessPoint?: MultiRegionAccessPointReport;
}
const GetMultiRegionAccessPointResult = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<GetMultiRegionAccessPointResult>;
export interface GetMultiRegionAccessPointPolicyRequest {
  AccountId: string;
  Name: string;
}
const GetMultiRegionAccessPointPolicyRequest = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<GetMultiRegionAccessPointPolicyRequest>;
export interface EstablishedMultiRegionAccessPointPolicy {
  Policy?: string;
}
const EstablishedMultiRegionAccessPointPolicy = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<EstablishedMultiRegionAccessPointPolicy>;
export interface ProposedMultiRegionAccessPointPolicy {
  Policy?: string;
}
const ProposedMultiRegionAccessPointPolicy = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<ProposedMultiRegionAccessPointPolicy>;
export interface MultiRegionAccessPointPolicyDocument {
  Established?: EstablishedMultiRegionAccessPointPolicy;
  Proposed?: ProposedMultiRegionAccessPointPolicy;
}
const MultiRegionAccessPointPolicyDocument = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<MultiRegionAccessPointPolicyDocument>;
export interface GetMultiRegionAccessPointPolicyResult {
  Policy?: MultiRegionAccessPointPolicyDocument;
}
const GetMultiRegionAccessPointPolicyResult = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<GetMultiRegionAccessPointPolicyResult>;
export interface GetMultiRegionAccessPointPolicyStatusRequest {
  AccountId: string;
  Name: string;
}
const GetMultiRegionAccessPointPolicyStatusRequest = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<GetMultiRegionAccessPointPolicyStatusRequest>;
export interface GetMultiRegionAccessPointPolicyStatusResult {
  Established?: PolicyStatus;
}
const GetMultiRegionAccessPointPolicyStatusResult = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<GetMultiRegionAccessPointPolicyStatusResult>;
export type MultiRegionAccessPointId = string;
export interface GetMultiRegionAccessPointRoutesRequest {
  AccountId: string;
  Mrap: string;
}
const GetMultiRegionAccessPointRoutesRequest = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<GetMultiRegionAccessPointRoutesRequest>;
export type TrafficDialPercentage = number;
export interface MultiRegionAccessPointRoute {
  Bucket?: string;
  Region?: string;
  TrafficDialPercentage: number;
}
const MultiRegionAccessPointRoute = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<MultiRegionAccessPointRoute>;
export type RouteList = MultiRegionAccessPointRoute[];
const RouteList = /*@__PURE__*/ __L.at(__c31, 1);
export interface GetMultiRegionAccessPointRoutesResult {
  Mrap?: string;
  Routes?: MultiRegionAccessPointRoute[];
}
const GetMultiRegionAccessPointRoutesResult = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<GetMultiRegionAccessPointRoutesResult>;
export interface GetPublicAccessBlockRequest {
  AccountId: string;
}
const GetPublicAccessBlockRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<GetPublicAccessBlockRequest>;
export interface GetPublicAccessBlockOutput {
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}
const GetPublicAccessBlockOutput = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<GetPublicAccessBlockOutput>;
export interface GetStorageLensConfigurationRequest {
  ConfigId: string;
  AccountId: string;
}
const GetStorageLensConfigurationRequest = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<GetStorageLensConfigurationRequest>;
export type IsEnabled = boolean;
export interface ActivityMetrics {
  IsEnabled?: boolean;
}
const ActivityMetrics = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<ActivityMetrics>;
export type StorageLensPrefixLevelDelimiter = string;
export type StorageLensPrefixLevelMaxDepth = number;
export type MinStorageBytesPercentage = number;
export interface SelectionCriteria {
  Delimiter?: string;
  MaxDepth?: number;
  MinStorageBytesPercentage?: number;
}
const SelectionCriteria = /*@__PURE__*/ __L.at(__c31, 7) as any as S.Schema<SelectionCriteria>;
export interface PrefixLevelStorageMetrics {
  IsEnabled?: boolean;
  SelectionCriteria?: SelectionCriteria;
}
const PrefixLevelStorageMetrics = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<PrefixLevelStorageMetrics>;
export interface PrefixLevel {
  StorageMetrics: PrefixLevelStorageMetrics;
}
const PrefixLevel = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<PrefixLevel>;
export interface AdvancedCostOptimizationMetrics {
  IsEnabled?: boolean;
}
const AdvancedCostOptimizationMetrics = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<AdvancedCostOptimizationMetrics>;
export interface AdvancedDataProtectionMetrics {
  IsEnabled?: boolean;
}
const AdvancedDataProtectionMetrics = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<AdvancedDataProtectionMetrics>;
export interface DetailedStatusCodesMetrics {
  IsEnabled?: boolean;
}
const DetailedStatusCodesMetrics = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<DetailedStatusCodesMetrics>;
export interface AdvancedPerformanceMetrics {
  IsEnabled?: boolean;
}
const AdvancedPerformanceMetrics = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<AdvancedPerformanceMetrics>;
export interface BucketLevel {
  ActivityMetrics?: ActivityMetrics;
  PrefixLevel?: PrefixLevel;
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
  AdvancedPerformanceMetrics?: AdvancedPerformanceMetrics;
}
const BucketLevel = /*@__PURE__*/ __L.at(__c32, 6) as any as S.Schema<BucketLevel>;
export type StorageLensGroupLevelInclude = string[];
const StorageLensGroupLevelInclude = /*@__PURE__*/ __L.at(__c32, 7);
export type StorageLensGroupLevelExclude = string[];
const StorageLensGroupLevelExclude = /*@__PURE__*/ __L.at(__c33, 0);
export interface StorageLensGroupLevelSelectionCriteria {
  Include?: string[];
  Exclude?: string[];
}
const StorageLensGroupLevelSelectionCriteria = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<StorageLensGroupLevelSelectionCriteria>;
export interface StorageLensGroupLevel {
  SelectionCriteria?: StorageLensGroupLevelSelectionCriteria;
}
const StorageLensGroupLevel = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<StorageLensGroupLevel>;
export interface AccountLevel {
  ActivityMetrics?: ActivityMetrics;
  BucketLevel?: BucketLevel;
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
  AdvancedPerformanceMetrics?: AdvancedPerformanceMetrics;
  StorageLensGroupLevel?: StorageLensGroupLevel;
}
const AccountLevel = /*@__PURE__*/ __L.at(__c33, 3) as any as S.Schema<AccountLevel>;
export type Buckets = string[];
const Buckets = /*@__PURE__*/ __L.at(__c33, 4);
export type S3AWSRegion = string;
export type Regions = string[];
const Regions = /*@__PURE__*/ __L.at(__c33, 5);
export interface Include {
  Buckets?: string[];
  Regions?: string[];
}
const Include = /*@__PURE__*/ __L.at(__c33, 6) as any as S.Schema<Include>;
export interface Exclude {
  Buckets?: string[];
  Regions?: string[];
}
const Exclude = /*@__PURE__*/ __L.at(__c33, 7) as any as S.Schema<Exclude>;
export type Format = "CSV" | "Parquet" | (string & {});
const Format = S.String;

export type OutputSchemaVersion = "V_1" | (string & {});
const OutputSchemaVersion = S.String;

export interface SSES3 {}
const SSES3 = /*@__PURE__*/ __L.at(__c34, 0) as any as S.Schema<SSES3>;
export type SSEKMSKeyId = string;
export interface SSEKMS {
  KeyId: string;
}
const SSEKMS = /*@__PURE__*/ __L.at(__c34, 1) as any as S.Schema<SSEKMS>;
export interface StorageLensDataExportEncryption {
  SSES3?: SSES3;
  SSEKMS?: SSEKMS;
}
const StorageLensDataExportEncryption = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<StorageLensDataExportEncryption>;
export interface S3BucketDestination {
  Format: Format;
  OutputSchemaVersion: OutputSchemaVersion;
  AccountId: string;
  Arn: string;
  Prefix?: string;
  Encryption?: StorageLensDataExportEncryption;
}
const S3BucketDestination = /*@__PURE__*/ __L.at(__c34, 3) as any as S.Schema<S3BucketDestination>;
export interface CloudWatchMetrics {
  IsEnabled: boolean;
}
const CloudWatchMetrics = /*@__PURE__*/ __L.at(__c34, 4) as any as S.Schema<CloudWatchMetrics>;
export interface StorageLensTableDestination {
  IsEnabled: boolean;
  Encryption?: StorageLensDataExportEncryption;
}
const StorageLensTableDestination = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<StorageLensTableDestination>;
export interface StorageLensDataExport {
  S3BucketDestination?: S3BucketDestination;
  CloudWatchMetrics?: CloudWatchMetrics;
  StorageLensTableDestination?: StorageLensTableDestination;
}
const StorageLensDataExport = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<StorageLensDataExport>;
export interface StorageLensExpandedPrefixesDataExport {
  S3BucketDestination?: S3BucketDestination;
  StorageLensTableDestination?: StorageLensTableDestination;
}
const StorageLensExpandedPrefixesDataExport = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<StorageLensExpandedPrefixesDataExport>;
export type AwsOrgArn = string;
export interface StorageLensAwsOrg {
  Arn: string;
}
const StorageLensAwsOrg = /*@__PURE__*/ __L.at(__c35, 0) as any as S.Schema<StorageLensAwsOrg>;
export type StorageLensArn = string;
export interface StorageLensConfiguration {
  Id: string;
  AccountLevel: AccountLevel;
  Include?: Include;
  Exclude?: Exclude;
  DataExport?: StorageLensDataExport;
  ExpandedPrefixesDataExport?: StorageLensExpandedPrefixesDataExport;
  IsEnabled: boolean;
  AwsOrg?: StorageLensAwsOrg;
  StorageLensArn?: string;
  PrefixDelimiter?: string;
}
const StorageLensConfiguration = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<StorageLensConfiguration>;
export interface GetStorageLensConfigurationResult {
  StorageLensConfiguration?: StorageLensConfiguration;
}
const GetStorageLensConfigurationResult = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<GetStorageLensConfigurationResult>;
export interface GetStorageLensConfigurationTaggingRequest {
  ConfigId: string;
  AccountId: string;
}
const GetStorageLensConfigurationTaggingRequest = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<GetStorageLensConfigurationTaggingRequest>;
export interface StorageLensTag {
  Key: string;
  Value: string;
}
const StorageLensTag = /*@__PURE__*/ __L.at(__c35, 4) as any as S.Schema<StorageLensTag>;
export type StorageLensTags = StorageLensTag[];
const StorageLensTags = /*@__PURE__*/ __L.at(__c35, 5);
export interface GetStorageLensConfigurationTaggingResult {
  Tags?: StorageLensTag[];
}
const GetStorageLensConfigurationTaggingResult = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<GetStorageLensConfigurationTaggingResult>;
export interface GetStorageLensGroupRequest {
  Name: string;
  AccountId: string;
}
const GetStorageLensGroupRequest = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<GetStorageLensGroupRequest>;
export interface GetStorageLensGroupResult {
  StorageLensGroup?: StorageLensGroup;
}
const GetStorageLensGroupResult = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<GetStorageLensGroupResult>;
export type ContinuationToken = string;
export type MaxResults = number;
export interface ListAccessGrantsRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
  GranteeType?: GranteeType;
  GranteeIdentifier?: string;
  Permission?: Permission;
  GrantScope?: string;
  ApplicationArn?: string;
}
const ListAccessGrantsRequest = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<ListAccessGrantsRequest>;
export interface ListAccessGrantEntry {
  CreatedAt?: Date;
  AccessGrantId?: string;
  AccessGrantArn?: string;
  Grantee?: Grantee;
  Permission?: Permission;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  GrantScope?: string;
  ApplicationArn?: string;
}
const ListAccessGrantEntry = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<ListAccessGrantEntry>;
export type AccessGrantsList = ListAccessGrantEntry[];
const AccessGrantsList = /*@__PURE__*/ __L.at(__c36, 3);
export interface ListAccessGrantsResult {
  NextToken?: string;
  AccessGrantsList?: ListAccessGrantEntry[];
}
const ListAccessGrantsResult = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<ListAccessGrantsResult>;
export interface ListAccessGrantsInstancesRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListAccessGrantsInstancesRequest = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<ListAccessGrantsInstancesRequest>;
export interface ListAccessGrantsInstanceEntry {
  AccessGrantsInstanceId?: string;
  AccessGrantsInstanceArn?: string;
  CreatedAt?: Date;
  IdentityCenterArn?: string;
  IdentityCenterInstanceArn?: string;
  IdentityCenterApplicationArn?: string;
}
const ListAccessGrantsInstanceEntry = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<ListAccessGrantsInstanceEntry>;
export type AccessGrantsInstancesList = ListAccessGrantsInstanceEntry[];
const AccessGrantsInstancesList = /*@__PURE__*/ __L.at(__c36, 7);
export interface ListAccessGrantsInstancesResult {
  NextToken?: string;
  AccessGrantsInstancesList?: ListAccessGrantsInstanceEntry[];
}
const ListAccessGrantsInstancesResult = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<ListAccessGrantsInstancesResult>;
export interface ListAccessGrantsLocationsRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
  LocationScope?: string;
}
const ListAccessGrantsLocationsRequest = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<ListAccessGrantsLocationsRequest>;
export interface ListAccessGrantsLocationsEntry {
  CreatedAt?: Date;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationArn?: string;
  LocationScope?: string;
  IAMRoleArn?: string;
}
const ListAccessGrantsLocationsEntry = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<ListAccessGrantsLocationsEntry>;
export type AccessGrantsLocationsList = ListAccessGrantsLocationsEntry[];
const AccessGrantsLocationsList = /*@__PURE__*/ __L.at(__c37, 3);
export interface ListAccessGrantsLocationsResult {
  NextToken?: string;
  AccessGrantsLocationsList?: ListAccessGrantsLocationsEntry[];
}
const ListAccessGrantsLocationsResult = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<ListAccessGrantsLocationsResult>;
export interface ListAccessPointsRequest {
  AccountId: string;
  Bucket?: string;
  NextToken?: string;
  MaxResults?: number;
  DataSourceId?: string;
  DataSourceType?: string;
}
const ListAccessPointsRequest = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<ListAccessPointsRequest>;
export interface AccessPoint {
  Name: string;
  NetworkOrigin: NetworkOrigin;
  VpcConfiguration?: VpcConfiguration;
  Bucket: string;
  AccessPointArn?: string;
  Alias?: string;
  BucketAccountId?: string;
  DataSourceId?: string;
  DataSourceType?: string;
}
const AccessPoint = /*@__PURE__*/ __L.at(__c37, 6) as any as S.Schema<AccessPoint>;
export type AccessPointList = AccessPoint[];
const AccessPointList = /*@__PURE__*/ __L.at(__c37, 7);
export interface ListAccessPointsResult {
  AccessPointList?: AccessPoint[];
  NextToken?: string;
}
const ListAccessPointsResult = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<ListAccessPointsResult>;
export interface ListAccessPointsForDirectoryBucketsRequest {
  AccountId: string;
  DirectoryBucket?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListAccessPointsForDirectoryBucketsRequest = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<ListAccessPointsForDirectoryBucketsRequest>;
export interface ListAccessPointsForDirectoryBucketsResult {
  AccessPointList?: AccessPoint[];
  NextToken?: string;
}
const ListAccessPointsForDirectoryBucketsResult = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<ListAccessPointsForDirectoryBucketsResult>;
export interface ListAccessPointsForObjectLambdaRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListAccessPointsForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<ListAccessPointsForObjectLambdaRequest>;
export interface ObjectLambdaAccessPoint {
  Name: string;
  ObjectLambdaAccessPointArn?: string;
  Alias?: ObjectLambdaAccessPointAlias;
}
const ObjectLambdaAccessPoint = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<ObjectLambdaAccessPoint>;
export type ObjectLambdaAccessPointList = ObjectLambdaAccessPoint[];
const ObjectLambdaAccessPointList = /*@__PURE__*/ __L.at(__c38, 5);
export interface ListAccessPointsForObjectLambdaResult {
  ObjectLambdaAccessPointList?: ObjectLambdaAccessPoint[];
  NextToken?: string;
}
const ListAccessPointsForObjectLambdaResult = /*@__PURE__*/ __L.at(
  __c38,
  6,
) as any as S.Schema<ListAccessPointsForObjectLambdaResult>;
export interface ListCallerAccessGrantsRequest {
  AccountId: string;
  GrantScope?: string;
  NextToken?: string;
  MaxResults?: number;
  AllowedByApplication?: boolean;
}
const ListCallerAccessGrantsRequest = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<ListCallerAccessGrantsRequest>;
export interface ListCallerAccessGrantsEntry {
  Permission?: Permission;
  GrantScope?: string;
  ApplicationArn?: string;
}
const ListCallerAccessGrantsEntry = /*@__PURE__*/ __L.at(
  __c39,
  0,
) as any as S.Schema<ListCallerAccessGrantsEntry>;
export type CallerAccessGrantsList = ListCallerAccessGrantsEntry[];
const CallerAccessGrantsList = /*@__PURE__*/ __L.at(__c39, 1);
export interface ListCallerAccessGrantsResult {
  NextToken?: string;
  CallerAccessGrantsList?: ListCallerAccessGrantsEntry[];
}
const ListCallerAccessGrantsResult = /*@__PURE__*/ __L.at(
  __c39,
  2,
) as any as S.Schema<ListCallerAccessGrantsResult>;
export type JobStatusList = JobStatus[];
const JobStatusList = /*@__PURE__*/ __L.at(__c39, 3);
export type StringForNextToken = string;
export interface ListJobsRequest {
  AccountId: string;
  JobStatuses?: JobStatus[];
  NextToken?: string;
  MaxResults?: number;
}
const ListJobsRequest = /*@__PURE__*/ __L.at(__c39, 4) as any as S.Schema<ListJobsRequest>;
export type OperationName =
  | "LambdaInvoke"
  | "S3PutObjectCopy"
  | "S3PutObjectAcl"
  | "S3PutObjectTagging"
  | "S3DeleteObjectTagging"
  | "S3InitiateRestoreObject"
  | "S3PutObjectLegalHold"
  | "S3PutObjectRetention"
  | "S3ReplicateObject"
  | "S3ComputeObjectChecksum"
  | "S3UpdateObjectEncryption"
  | (string & {});
const OperationName = S.String;

export interface JobListDescriptor {
  JobId?: string;
  Description?: string;
  Operation?: OperationName;
  Priority?: number;
  Status?: JobStatus;
  CreationTime?: Date;
  TerminationDate?: Date;
  ProgressSummary?: JobProgressSummary;
}
const JobListDescriptor = /*@__PURE__*/ __L.at(__c39, 5) as any as S.Schema<JobListDescriptor>;
export type JobListDescriptorList = JobListDescriptor[];
const JobListDescriptorList = /*@__PURE__*/ __L.at(__c39, 6);
export interface ListJobsResult {
  NextToken?: string;
  Jobs?: JobListDescriptor[];
}
const ListJobsResult = /*@__PURE__*/ __L.at(__c39, 7) as any as S.Schema<ListJobsResult>;
export interface ListMultiRegionAccessPointsRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListMultiRegionAccessPointsRequest = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<ListMultiRegionAccessPointsRequest>;
export type MultiRegionAccessPointReportList = MultiRegionAccessPointReport[];
const MultiRegionAccessPointReportList = /*@__PURE__*/ __L.at(__c40, 1);
export interface ListMultiRegionAccessPointsResult {
  AccessPoints?: MultiRegionAccessPointReport[];
  NextToken?: string;
}
const ListMultiRegionAccessPointsResult = /*@__PURE__*/ __L.at(
  __c40,
  2,
) as any as S.Schema<ListMultiRegionAccessPointsResult>;
export interface ListRegionalBucketsRequest {
  AccountId: string;
  NextToken?: string;
  MaxResults?: number;
  OutpostId?: string;
}
const ListRegionalBucketsRequest = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<ListRegionalBucketsRequest>;
export interface RegionalBucket {
  Bucket: string;
  BucketArn?: string;
  PublicAccessBlockEnabled: boolean;
  CreationDate: Date;
  OutpostId?: string;
}
const RegionalBucket = /*@__PURE__*/ __L.at(__c40, 4) as any as S.Schema<RegionalBucket>;
export type RegionalBucketList = RegionalBucket[];
const RegionalBucketList = /*@__PURE__*/ __L.at(__c40, 5);
export interface ListRegionalBucketsResult {
  RegionalBucketList?: RegionalBucket[];
  NextToken?: string;
}
const ListRegionalBucketsResult = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<ListRegionalBucketsResult>;
export interface ListStorageLensConfigurationsRequest {
  AccountId: string;
  NextToken?: string;
}
const ListStorageLensConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c40,
  7,
) as any as S.Schema<ListStorageLensConfigurationsRequest>;
export interface ListStorageLensConfigurationEntry {
  Id: string;
  StorageLensArn: string;
  HomeRegion: string;
  IsEnabled?: boolean;
}
const ListStorageLensConfigurationEntry = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<ListStorageLensConfigurationEntry>;
export type StorageLensConfigurationList = ListStorageLensConfigurationEntry[];
const StorageLensConfigurationList = /*@__PURE__*/ __L.at(__c41, 1);
export interface ListStorageLensConfigurationsResult {
  NextToken?: string;
  StorageLensConfigurationList?: ListStorageLensConfigurationEntry[];
}
const ListStorageLensConfigurationsResult = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<ListStorageLensConfigurationsResult>;
export interface ListStorageLensGroupsRequest {
  AccountId: string;
  NextToken?: string;
}
const ListStorageLensGroupsRequest = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<ListStorageLensGroupsRequest>;
export interface ListStorageLensGroupEntry {
  Name: string;
  StorageLensGroupArn: string;
  HomeRegion: string;
}
const ListStorageLensGroupEntry = /*@__PURE__*/ __L.at(
  __c41,
  4,
) as any as S.Schema<ListStorageLensGroupEntry>;
export type StorageLensGroupList = ListStorageLensGroupEntry[];
const StorageLensGroupList = /*@__PURE__*/ __L.at(__c41, 5);
export interface ListStorageLensGroupsResult {
  NextToken?: string;
  StorageLensGroupList?: ListStorageLensGroupEntry[];
}
const ListStorageLensGroupsResult = /*@__PURE__*/ __L.at(
  __c41,
  6,
) as any as S.Schema<ListStorageLensGroupsResult>;
export type S3ResourceArn = string;
export interface ListTagsForResourceRequest {
  AccountId: string;
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResult {
  Tags?: Tag[];
}
const ListTagsForResourceResult = /*@__PURE__*/ __L.at(
  __c42,
  0,
) as any as S.Schema<ListTagsForResourceResult>;
export interface PutAccessGrantsInstanceResourcePolicyRequest {
  AccountId: string;
  Policy: string;
  Organization?: string;
}
const PutAccessGrantsInstanceResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c42,
  1,
) as any as S.Schema<PutAccessGrantsInstanceResourcePolicyRequest>;
export interface PutAccessGrantsInstanceResourcePolicyResult {
  Policy?: string;
  Organization?: string;
  CreatedAt?: Date;
}
const PutAccessGrantsInstanceResourcePolicyResult = /*@__PURE__*/ __L.at(
  __c42,
  2,
) as any as S.Schema<PutAccessGrantsInstanceResourcePolicyResult>;
export interface PutAccessPointConfigurationForObjectLambdaRequest {
  AccountId: string;
  Name: string;
  Configuration: ObjectLambdaConfiguration;
}
const PutAccessPointConfigurationForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<PutAccessPointConfigurationForObjectLambdaRequest>;
export interface PutAccessPointConfigurationForObjectLambdaResponse {}
const PutAccessPointConfigurationForObjectLambdaResponse = /*@__PURE__*/ __L.at(
  __c42,
  4,
) as any as S.Schema<PutAccessPointConfigurationForObjectLambdaResponse>;
export interface PutAccessPointPolicyRequest {
  AccountId: string;
  Name: string;
  Policy: string;
}
const PutAccessPointPolicyRequest = /*@__PURE__*/ __L.at(
  __c42,
  5,
) as any as S.Schema<PutAccessPointPolicyRequest>;
export interface PutAccessPointPolicyResponse {}
const PutAccessPointPolicyResponse = /*@__PURE__*/ __L.at(
  __c42,
  6,
) as any as S.Schema<PutAccessPointPolicyResponse>;
export interface PutAccessPointPolicyForObjectLambdaRequest {
  AccountId: string;
  Name: string;
  Policy: string;
}
const PutAccessPointPolicyForObjectLambdaRequest = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<PutAccessPointPolicyForObjectLambdaRequest>;
export interface PutAccessPointPolicyForObjectLambdaResponse {}
const PutAccessPointPolicyForObjectLambdaResponse = /*@__PURE__*/ __L.at(
  __c43,
  0,
) as any as S.Schema<PutAccessPointPolicyForObjectLambdaResponse>;
export interface PutAccessPointScopeRequest {
  AccountId: string;
  Name: string;
  Scope: Scope;
}
const PutAccessPointScopeRequest = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<PutAccessPointScopeRequest>;
export interface PutAccessPointScopeResponse {}
const PutAccessPointScopeResponse = /*@__PURE__*/ __L.at(
  __c43,
  2,
) as any as S.Schema<PutAccessPointScopeResponse>;
export interface LifecycleConfiguration {
  Rules?: LifecycleRule[];
}
const LifecycleConfiguration = /*@__PURE__*/ __L.at(
  __c43,
  3,
) as any as S.Schema<LifecycleConfiguration>;
export interface PutBucketLifecycleConfigurationRequest {
  AccountId: string;
  Bucket: string;
  LifecycleConfiguration?: LifecycleConfiguration;
}
const PutBucketLifecycleConfigurationRequest = /*@__PURE__*/ __L.at(
  __c43,
  4,
) as any as S.Schema<PutBucketLifecycleConfigurationRequest>;
export interface PutBucketLifecycleConfigurationResponse {}
const PutBucketLifecycleConfigurationResponse = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<PutBucketLifecycleConfigurationResponse>;
export type ConfirmRemoveSelfBucketAccess = boolean;
export interface PutBucketPolicyRequest {
  AccountId: string;
  Bucket: string;
  ConfirmRemoveSelfBucketAccess?: boolean;
  Policy: string;
}
const PutBucketPolicyRequest = /*@__PURE__*/ __L.at(
  __c43,
  6,
) as any as S.Schema<PutBucketPolicyRequest>;
export interface PutBucketPolicyResponse {}
const PutBucketPolicyResponse = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<PutBucketPolicyResponse>;
export interface PutBucketReplicationRequest {
  AccountId: string;
  Bucket: string;
  ReplicationConfiguration: ReplicationConfiguration;
}
const PutBucketReplicationRequest = /*@__PURE__*/ __L.at(
  __c44,
  0,
) as any as S.Schema<PutBucketReplicationRequest>;
export interface PutBucketReplicationResponse {}
const PutBucketReplicationResponse = /*@__PURE__*/ __L.at(
  __c44,
  1,
) as any as S.Schema<PutBucketReplicationResponse>;
export interface Tagging {
  TagSet: S3Tag[];
}
const Tagging = /*@__PURE__*/ __L.at(__c44, 2) as any as S.Schema<Tagging>;
export interface PutBucketTaggingRequest {
  AccountId: string;
  Bucket: string;
  Tagging: Tagging;
}
const PutBucketTaggingRequest = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<PutBucketTaggingRequest>;
export interface PutBucketTaggingResponse {}
const PutBucketTaggingResponse = /*@__PURE__*/ __L.at(
  __c44,
  4,
) as any as S.Schema<PutBucketTaggingResponse>;
export type MFA = string;
export type MFADelete = "Enabled" | "Disabled" | (string & {});
const MFADelete = S.String;

export interface VersioningConfiguration {
  MFADelete?: MFADelete;
  Status?: BucketVersioningStatus;
}
const VersioningConfiguration = /*@__PURE__*/ __L.at(
  __c44,
  5,
) as any as S.Schema<VersioningConfiguration>;
export interface PutBucketVersioningRequest {
  AccountId: string;
  Bucket: string;
  MFA?: string;
  VersioningConfiguration: VersioningConfiguration;
}
const PutBucketVersioningRequest = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<PutBucketVersioningRequest>;
export interface PutBucketVersioningResponse {}
const PutBucketVersioningResponse = /*@__PURE__*/ __L.at(
  __c44,
  7,
) as any as S.Schema<PutBucketVersioningResponse>;
export interface PutJobTaggingRequest {
  AccountId: string;
  JobId: string;
  Tags: S3Tag[];
}
const PutJobTaggingRequest = /*@__PURE__*/ __L.at(
  __c45,
  0,
) as any as S.Schema<PutJobTaggingRequest>;
export interface PutJobTaggingResult {}
const PutJobTaggingResult = /*@__PURE__*/ __L.at(__c45, 1) as any as S.Schema<PutJobTaggingResult>;
export interface PutMultiRegionAccessPointPolicyRequest {
  AccountId: string;
  ClientToken: string;
  Details: PutMultiRegionAccessPointPolicyInput;
}
const PutMultiRegionAccessPointPolicyRequest = /*@__PURE__*/ __L.at(
  __c45,
  2,
) as any as S.Schema<PutMultiRegionAccessPointPolicyRequest>;
export interface PutMultiRegionAccessPointPolicyResult {
  RequestTokenARN?: string;
}
const PutMultiRegionAccessPointPolicyResult = /*@__PURE__*/ __L.at(
  __c45,
  3,
) as any as S.Schema<PutMultiRegionAccessPointPolicyResult>;
export interface PutPublicAccessBlockRequest {
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
  AccountId: string;
}
const PutPublicAccessBlockRequest = /*@__PURE__*/ __L.at(
  __c45,
  4,
) as any as S.Schema<PutPublicAccessBlockRequest>;
export interface PutPublicAccessBlockResponse {}
const PutPublicAccessBlockResponse = /*@__PURE__*/ __L.at(
  __c45,
  5,
) as any as S.Schema<PutPublicAccessBlockResponse>;
export interface PutStorageLensConfigurationRequest {
  ConfigId: string;
  AccountId: string;
  StorageLensConfiguration: StorageLensConfiguration;
  Tags?: StorageLensTag[];
}
const PutStorageLensConfigurationRequest = /*@__PURE__*/ __L.at(
  __c45,
  6,
) as any as S.Schema<PutStorageLensConfigurationRequest>;
export interface PutStorageLensConfigurationResponse {}
const PutStorageLensConfigurationResponse = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<PutStorageLensConfigurationResponse>;
export interface PutStorageLensConfigurationTaggingRequest {
  ConfigId: string;
  AccountId: string;
  Tags: StorageLensTag[];
}
const PutStorageLensConfigurationTaggingRequest = /*@__PURE__*/ __L.at(
  __c46,
  0,
) as any as S.Schema<PutStorageLensConfigurationTaggingRequest>;
export interface PutStorageLensConfigurationTaggingResult {}
const PutStorageLensConfigurationTaggingResult = /*@__PURE__*/ __L.at(
  __c46,
  1,
) as any as S.Schema<PutStorageLensConfigurationTaggingResult>;
export interface SubmitMultiRegionAccessPointRoutesRequest {
  AccountId: string;
  Mrap: string;
  RouteUpdates: MultiRegionAccessPointRoute[];
}
const SubmitMultiRegionAccessPointRoutesRequest = /*@__PURE__*/ __L.at(
  __c46,
  2,
) as any as S.Schema<SubmitMultiRegionAccessPointRoutesRequest>;
export interface SubmitMultiRegionAccessPointRoutesResult {}
const SubmitMultiRegionAccessPointRoutesResult = /*@__PURE__*/ __L.at(
  __c46,
  3,
) as any as S.Schema<SubmitMultiRegionAccessPointRoutesResult>;
export interface TagResourceRequest {
  AccountId: string;
  ResourceArn: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c46, 4) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResult {}
const TagResourceResult = /*@__PURE__*/ __L.at(__c46, 5) as any as S.Schema<TagResourceResult>;
export type TagKeyList = string[];
const TagKeyList = /*@__PURE__*/ __L.at(__c46, 6);
export interface UntagResourceRequest {
  AccountId: string;
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c46,
  7,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResult {}
const UntagResourceResult = /*@__PURE__*/ __L.at(__c47, 0) as any as S.Schema<UntagResourceResult>;
export interface UpdateAccessGrantsLocationRequest {
  AccountId: string;
  AccessGrantsLocationId: string;
  IAMRoleArn: string;
}
const UpdateAccessGrantsLocationRequest = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<UpdateAccessGrantsLocationRequest>;
export interface UpdateAccessGrantsLocationResult {
  CreatedAt?: Date;
  AccessGrantsLocationId?: string;
  AccessGrantsLocationArn?: string;
  LocationScope?: string;
  IAMRoleArn?: string;
}
const UpdateAccessGrantsLocationResult = /*@__PURE__*/ __L.at(
  __c47,
  2,
) as any as S.Schema<UpdateAccessGrantsLocationResult>;
export interface UpdateJobPriorityRequest {
  AccountId: string;
  JobId: string;
  Priority: number;
}
const UpdateJobPriorityRequest = /*@__PURE__*/ __L.at(
  __c47,
  3,
) as any as S.Schema<UpdateJobPriorityRequest>;
export interface UpdateJobPriorityResult {
  JobId: string;
  Priority: number;
}
const UpdateJobPriorityResult = /*@__PURE__*/ __L.at(
  __c47,
  4,
) as any as S.Schema<UpdateJobPriorityResult>;
export type RequestedJobStatus = "Cancelled" | "Ready" | (string & {});
const RequestedJobStatus = S.String;

export interface UpdateJobStatusRequest {
  AccountId: string;
  JobId: string;
  RequestedJobStatus: RequestedJobStatus;
  StatusUpdateReason?: string;
}
const UpdateJobStatusRequest = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<UpdateJobStatusRequest>;
export interface UpdateJobStatusResult {
  JobId?: string;
  Status?: JobStatus;
  StatusUpdateReason?: string;
}
const UpdateJobStatusResult = /*@__PURE__*/ __L.at(
  __c47,
  6,
) as any as S.Schema<UpdateJobStatusResult>;
export interface UpdateStorageLensGroupRequest {
  Name: string;
  AccountId: string;
  StorageLensGroup: StorageLensGroup;
}
const UpdateStorageLensGroupRequest = /*@__PURE__*/ __L.at(
  __c47,
  7,
) as any as S.Schema<UpdateStorageLensGroupRequest>;
export interface UpdateStorageLensGroupResponse {}
const UpdateStorageLensGroupResponse = /*@__PURE__*/ __L.at(
  __c48,
  0,
) as any as S.Schema<UpdateStorageLensGroupResponse>;
export type ExceptionMessage = string;
export type NoSuchPublicAccessBlockConfigurationMessage = string;
export type AssociateAccessGrantsIdentityCenterError = CommonErrors;
/**
 * Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:AssociateAccessGrantsIdentityCenter` permission to use this operation.
 *
 * ### Additional Permissions
 *
 * You must also have the following permissions: `sso:CreateApplication`, `sso:PutApplicationGrant`, and `sso:PutApplicationAuthenticationMethod`.
 */
export const associateAccessGrantsIdentityCenter: API.OperationMethod<
  AssociateAccessGrantsIdentityCenterRequest,
  AssociateAccessGrantsIdentityCenterResponse,
  AssociateAccessGrantsIdentityCenterError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateAccessGrantsIdentityCenterRequest,
  output: AssociateAccessGrantsIdentityCenterResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateAccessGrantsIdentityCenter",
  endpointHostPrefix: "{AccountId}.",
}));

export type CreateAccessGrantError = CommonErrors;
/**
 * Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the CreateAccessGrantsInstance. You must also have registered at least one S3 data location in your S3 Access Grants instance using CreateAccessGrantsLocation.
 *
 * ### Permissions
 *
 * You must have the `s3:CreateAccessGrant` permission to use this operation.
 *
 * ### Additional Permissions
 *
 * For any directory identity - `sso:DescribeInstance` and `sso:DescribeApplication`
 *
 * For directory users - `identitystore:DescribeUser`
 *
 * For directory groups - `identitystore:DescribeGroup`
 */
export const createAccessGrant: API.OperationMethod<
  CreateAccessGrantRequest,
  CreateAccessGrantResult,
  CreateAccessGrantError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessGrantRequest,
  output: CreateAccessGrantResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessGrant",
  endpointHostPrefix: "{AccountId}.",
}));

export type CreateAccessGrantsInstanceError = CommonErrors;
/**
 * Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account.
 *
 * ### Permissions
 *
 * You must have the `s3:CreateAccessGrantsInstance` permission to use this operation.
 *
 * ### Additional Permissions
 *
 * To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the `sso:DescribeInstance`, `sso:CreateApplication`, `sso:PutApplicationGrant`, and `sso:PutApplicationAuthenticationMethod` permissions.
 */
export const createAccessGrantsInstance: API.OperationMethod<
  CreateAccessGrantsInstanceRequest,
  CreateAccessGrantsInstanceResult,
  CreateAccessGrantsInstanceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessGrantsInstanceRequest,
  output: CreateAccessGrantsInstanceResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessGrantsInstance",
  endpointHostPrefix: "{AccountId}.",
}));

export type CreateAccessGrantsLocationError = CommonErrors;
/**
 * The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following:
 *
 * - The default S3 location `s3://`
 *
 * - A bucket - `S3://`
 *
 * - A bucket and prefix - `S3:///`
 *
 * When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role using a policy. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications.
 *
 * ### Permissions
 *
 * You must have the `s3:CreateAccessGrantsLocation` permission to use this operation.
 *
 * ### Additional Permissions
 *
 * You must also have the following permission for the specified IAM role: `iam:PassRole`
 */
export const createAccessGrantsLocation: API.OperationMethod<
  CreateAccessGrantsLocationRequest,
  CreateAccessGrantsLocationResult,
  CreateAccessGrantsLocationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessGrantsLocationRequest,
  output: CreateAccessGrantsLocationResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessGrantsLocation",
  endpointHostPrefix: "{AccountId}.",
}));

export type CreateAccessPointError = AccessPointAlreadyOwnedByYou | InvalidRequest | CommonErrors;
/**
 * Creates an access point and associates it to a specified bucket. For more information, see
 * Managing
 * access to shared datasets with access points or Managing access to
 * shared datasets in directory buckets with access points in the
 * *Amazon S3 User Guide*.
 *
 * To create an access point and attach it to a volume on an Amazon FSx file system, see CreateAndAttachS3AccessPoint in the Amazon FSx API
 * Reference.
 *
 * S3 on Outposts only supports VPC-style access points.
 *
 * For more information, see Accessing Amazon S3 on Outposts using
 * virtual private cloud (VPC) only access points in the
 * *Amazon S3 User Guide*.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `CreateAccessPoint`:
 *
 * - GetAccessPoint
 *
 * - DeleteAccessPoint
 *
 * - ListAccessPoints
 *
 * - ListAccessPointsForDirectoryBuckets
 */
export const createAccessPoint: API.OperationMethod<
  CreateAccessPointRequest,
  CreateAccessPointResult,
  CreateAccessPointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessPointRequest,
  output: CreateAccessPointResult,
  errors: [AccessPointAlreadyOwnedByYou, InvalidRequest],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessPoint",
  endpointHostPrefix: "{AccountId}.",
}));

export type CreateAccessPointForObjectLambdaError =
  | AccessPointAlreadyOwnedByYou
  | InvalidRequest
  | NoSuchAccessPoint
  | ObjectLambdaNotAvailable
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Creates an Object Lambda Access Point. For more information, see Transforming objects with
 * Object Lambda Access Points in the *Amazon S3 User Guide*.
 *
 * The following actions are related to
 * `CreateAccessPointForObjectLambda`:
 *
 * - DeleteAccessPointForObjectLambda
 *
 * - GetAccessPointForObjectLambda
 *
 * - ListAccessPointsForObjectLambda
 */
export const createAccessPointForObjectLambda: API.OperationMethod<
  CreateAccessPointForObjectLambdaRequest,
  CreateAccessPointForObjectLambdaResult,
  CreateAccessPointForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessPointForObjectLambdaRequest,
  output: CreateAccessPointForObjectLambdaResult,
  errors: [
    AccessPointAlreadyOwnedByYou,
    InvalidRequest,
    NoSuchAccessPoint,
    ObjectLambdaNotAvailable,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessPointForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type CreateBucketError = BucketAlreadyExists | BucketAlreadyOwnedByYou | CommonErrors;
/**
 * This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see Create
 * Bucket in the *Amazon S3 API Reference*.
 *
 * Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To
 * create an Outposts bucket, you must have S3 on Outposts. For more information, see Using
 * Amazon S3 on Outposts in *Amazon S3 User Guide*.
 *
 * Not every string is an acceptable bucket name. For information on bucket naming
 * restrictions, see Working with
 * Amazon S3 Buckets.
 *
 * S3 on Outposts buckets support:
 *
 * - Tags
 *
 * - LifecycleConfigurations for deleting expired objects
 *
 * For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see
 *
 * Amazon S3 on Outposts Restrictions and Limitations.
 *
 * For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 * endpoint hostname prefix and `x-amz-outpost-id` in your API request, see the
 * Examples section.
 *
 * The following actions are related to `CreateBucket` for
 * Amazon S3 on Outposts:
 *
 * - PutObject
 *
 * - GetBucket
 *
 * - DeleteBucket
 *
 * - CreateAccessPoint
 *
 * - PutAccessPointPolicy
 */
export const createBucket: API.OperationMethod<
  CreateBucketRequest,
  CreateBucketResult,
  CreateBucketError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBucketRequest,
  output: CreateBucketResult,
  errors: [BucketAlreadyExists, BucketAlreadyOwnedByYou],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBucket",
}));

export type CreateJobError =
  | BadRequestException
  | IdempotencyException
  | InternalServiceException
  | TooManyRequestsException
  | InvalidRequest
  | CommonErrors;
/**
 * This operation creates an S3 Batch Operations job.
 *
 * You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects.
 * Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more
 * information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 *
 * ### Permissions
 *
 * For information about permissions required to use the Batch Operations, see Granting permissions for S3 Batch Operations in the Amazon S3
 * User Guide.
 *
 * Related actions include:
 *
 * - DescribeJob
 *
 * - ListJobs
 *
 * - UpdateJobPriority
 *
 * - UpdateJobStatus
 *
 * - JobOperation
 */
export const createJob: API.OperationMethod<
  CreateJobRequest,
  CreateJobResult,
  CreateJobError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateJobRequest,
  output: CreateJobResult,
  errors: [
    BadRequestException,
    IdempotencyException,
    InternalServiceException,
    TooManyRequestsException,
    InvalidRequest,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJob",
  endpointHostPrefix: "{AccountId}.",
}));

export type CreateMultiRegionAccessPointError = InvalidRequest | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Creates a Multi-Region Access Point and associates it with the specified buckets. For more information
 * about creating Multi-Region Access Points, see Creating Multi-Region Access Points in the *Amazon S3 User Guide*.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 *
 * This request is asynchronous, meaning that you might receive a response before the
 * command has completed. When this request provides a response, it provides a token that you
 * can use to monitor the status of the request with
 * `DescribeMultiRegionAccessPointOperation`.
 *
 * The following actions are related to `CreateMultiRegionAccessPoint`:
 *
 * - DeleteMultiRegionAccessPoint
 *
 * - DescribeMultiRegionAccessPointOperation
 *
 * - GetMultiRegionAccessPoint
 *
 * - ListMultiRegionAccessPoints
 */
export const createMultiRegionAccessPoint: API.OperationMethod<
  CreateMultiRegionAccessPointRequest,
  CreateMultiRegionAccessPointResult,
  CreateMultiRegionAccessPointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMultiRegionAccessPointRequest,
  output: CreateMultiRegionAccessPointResult,
  errors: [InvalidRequest],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMultiRegionAccessPoint",
  endpointHostPrefix: "{AccountId}.",
}));

export type CreateStorageLensGroupError = CommonErrors;
/**
 * Creates a new S3 Storage Lens group and associates it with the specified Amazon Web Services account ID. An
 * S3 Storage Lens group is a custom grouping of objects based on prefix, suffix, object tags,
 * object size, object age, or a combination of these filters. For each Storage Lens group
 * that you've created, you can also optionally add Amazon Web Services resource tags. For more information
 * about S3 Storage Lens groups, see Working with S3 Storage Lens
 * groups.
 *
 * To use this operation, you must have the permission to perform the
 * `s3:CreateStorageLensGroup` action. If you're trying to create a Storage Lens
 * group with Amazon Web Services resource tags, you must also have permission to perform the
 * `s3:TagResource` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 *
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */
export const createStorageLensGroup: API.OperationMethod<
  CreateStorageLensGroupRequest,
  CreateStorageLensGroupResponse,
  CreateStorageLensGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateStorageLensGroupRequest,
  output: CreateStorageLensGroupResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStorageLensGroup",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessGrantError = CommonErrors;
/**
 * Deletes the access grant from the S3 Access Grants instance. You cannot undo an access grant deletion and the grantee will no longer have access to the S3 data.
 *
 * ### Permissions
 *
 * You must have the `s3:DeleteAccessGrant` permission to use this operation.
 */
export const deleteAccessGrant: API.OperationMethod<
  DeleteAccessGrantRequest,
  DeleteAccessGrantResponse,
  DeleteAccessGrantError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessGrantRequest,
  output: DeleteAccessGrantResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessGrant",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessGrantsInstanceError = CommonErrors;
/**
 * Deletes your S3 Access Grants instance. You must first delete the access grants and locations before S3 Access Grants can delete the instance. See DeleteAccessGrant and DeleteAccessGrantsLocation. If you have associated an IAM Identity Center instance with your S3 Access Grants instance, you must first dissassociate the Identity Center instance from the S3 Access Grants instance before you can delete the S3 Access Grants instance. See AssociateAccessGrantsIdentityCenter and DissociateAccessGrantsIdentityCenter.
 *
 * ### Permissions
 *
 * You must have the `s3:DeleteAccessGrantsInstance` permission to use this operation.
 */
export const deleteAccessGrantsInstance: API.OperationMethod<
  DeleteAccessGrantsInstanceRequest,
  DeleteAccessGrantsInstanceResponse,
  DeleteAccessGrantsInstanceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessGrantsInstanceRequest,
  output: DeleteAccessGrantsInstanceResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessGrantsInstance",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessGrantsInstanceResourcePolicyError = CommonErrors;
/**
 * Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:DeleteAccessGrantsInstanceResourcePolicy` permission to use this operation.
 */
export const deleteAccessGrantsInstanceResourcePolicy: API.OperationMethod<
  DeleteAccessGrantsInstanceResourcePolicyRequest,
  DeleteAccessGrantsInstanceResourcePolicyResponse,
  DeleteAccessGrantsInstanceResourcePolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessGrantsInstanceResourcePolicyRequest,
  output: DeleteAccessGrantsInstanceResourcePolicyResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessGrantsInstanceResourcePolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessGrantsLocationError = CommonErrors;
/**
 * Deregisters a location from your S3 Access Grants instance. You can only delete a location registration from an S3 Access Grants instance if there are no grants associated with this location. See Delete a grant for information on how to delete grants. You need to have at least one registered location in your S3 Access Grants instance in order to create access grants.
 *
 * ### Permissions
 *
 * You must have the `s3:DeleteAccessGrantsLocation` permission to use this operation.
 */
export const deleteAccessGrantsLocation: API.OperationMethod<
  DeleteAccessGrantsLocationRequest,
  DeleteAccessGrantsLocationResponse,
  DeleteAccessGrantsLocationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessGrantsLocationRequest,
  output: DeleteAccessGrantsLocationResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessGrantsLocation",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessPointError = NoSuchAccessPoint | CommonErrors;
/**
 * Deletes the specified access point.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `DeleteAccessPoint`:
 *
 * - CreateAccessPoint
 *
 * - GetAccessPoint
 *
 * - ListAccessPoints
 */
export const deleteAccessPoint: API.OperationMethod<
  DeleteAccessPointRequest,
  DeleteAccessPointResponse,
  DeleteAccessPointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessPointRequest,
  output: DeleteAccessPointResponse,
  errors: [NoSuchAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessPoint",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessPointForObjectLambdaError = NoSuchAccessPoint | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Deletes the specified Object Lambda Access Point.
 *
 * The following actions are related to
 * `DeleteAccessPointForObjectLambda`:
 *
 * - CreateAccessPointForObjectLambda
 *
 * - GetAccessPointForObjectLambda
 *
 * - ListAccessPointsForObjectLambda
 */
export const deleteAccessPointForObjectLambda: API.OperationMethod<
  DeleteAccessPointForObjectLambdaRequest,
  DeleteAccessPointForObjectLambdaResponse,
  DeleteAccessPointForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessPointForObjectLambdaRequest,
  output: DeleteAccessPointForObjectLambdaResponse,
  errors: [NoSuchAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessPointForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessPointPolicyError =
  | NoSuchAccessPoint
  | NoSuchAccessPointPolicy
  | CommonErrors;
/**
 * Deletes the access point policy for the specified access point.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `DeleteAccessPointPolicy`:
 *
 * - PutAccessPointPolicy
 *
 * - GetAccessPointPolicy
 */
export const deleteAccessPointPolicy: API.OperationMethod<
  DeleteAccessPointPolicyRequest,
  DeleteAccessPointPolicyResponse,
  DeleteAccessPointPolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessPointPolicyRequest,
  output: DeleteAccessPointPolicyResponse,
  errors: [NoSuchAccessPoint, NoSuchAccessPointPolicy],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessPointPolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessPointPolicyForObjectLambdaError =
  | NoSuchAccessPoint
  | NoSuchAccessPointPolicy
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Removes the resource policy for an Object Lambda Access Point.
 *
 * The following actions are related to
 * `DeleteAccessPointPolicyForObjectLambda`:
 *
 * - GetAccessPointPolicyForObjectLambda
 *
 * - PutAccessPointPolicyForObjectLambda
 */
export const deleteAccessPointPolicyForObjectLambda: API.OperationMethod<
  DeleteAccessPointPolicyForObjectLambdaRequest,
  DeleteAccessPointPolicyForObjectLambdaResponse,
  DeleteAccessPointPolicyForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessPointPolicyForObjectLambdaRequest,
  output: DeleteAccessPointPolicyForObjectLambdaResponse,
  errors: [NoSuchAccessPoint, NoSuchAccessPointPolicy],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessPointPolicyForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteAccessPointScopeError = CommonErrors;
/**
 * Deletes an existing access point scope for a directory bucket.
 *
 * When you delete the scope of an access point, all prefixes and permissions are deleted.
 *
 * To use this operation, you must have the permission to perform the
 * `s3express:DeleteAccessPointScope` action.
 *
 * For information about REST API errors, see REST error responses.
 */
export const deleteAccessPointScope: API.OperationMethod<
  DeleteAccessPointScopeRequest,
  DeleteAccessPointScopeResponse,
  DeleteAccessPointScopeError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessPointScopeRequest,
  output: DeleteAccessPointScopeResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessPointScope",
}));

export type DeleteBucketError = CommonErrors;
/**
 * This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see DeleteBucket in the *Amazon S3 API Reference*.
 *
 * Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and
 * delete markers) in the bucket must be deleted before the bucket itself can be deleted. For
 * more information, see Using Amazon S3 on Outposts in
 * *Amazon S3 User Guide*.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * **Related Resources**
 *
 * - CreateBucket
 *
 * - GetBucket
 *
 * - DeleteObject
 */
export const deleteBucket: API.OperationMethod<
  DeleteBucketRequest,
  DeleteBucketResponse,
  DeleteBucketError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketRequest,
  output: DeleteBucketResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBucket",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteBucketLifecycleConfigurationError = CommonErrors;
/**
 * This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete
 * an S3 bucket's lifecycle configuration, see DeleteBucketLifecycle in the *Amazon S3 API Reference*.
 *
 * Deletes the lifecycle configuration from the specified Outposts bucket.
 * Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource
 * associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer
 * automatically deletes any objects on the basis of rules contained in the deleted lifecycle
 * configuration. For more information, see Using Amazon S3 on Outposts in
 * *Amazon S3 User Guide*.
 *
 * To use this operation, you must have permission to perform the
 * `s3-outposts:PutLifecycleConfiguration` action. By default, the bucket owner
 * has this permission and the Outposts bucket owner can grant this permission to
 * others.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * For more information about object expiration, see Elements to Describe Lifecycle Actions.
 *
 * Related actions include:
 *
 * - PutBucketLifecycleConfiguration
 *
 * - GetBucketLifecycleConfiguration
 */
export const deleteBucketLifecycleConfiguration: API.OperationMethod<
  DeleteBucketLifecycleConfigurationRequest,
  DeleteBucketLifecycleConfigurationResponse,
  DeleteBucketLifecycleConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketLifecycleConfigurationRequest,
  output: DeleteBucketLifecycleConfigurationResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBucketLifecycleConfiguration",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteBucketPolicyError = CommonErrors;
/**
 * This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy,
 * see DeleteBucketPolicy in the *Amazon S3 API Reference*.
 *
 * This implementation of the DELETE action uses the policy subresource to delete the
 * policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the
 * root user of the Amazon Web Services account that owns the bucket, the calling identity must have the
 * `s3-outposts:DeleteBucketPolicy` permissions on the specified Outposts bucket
 * and belong to the bucket owner's account to use this action. For more information, see
 * Using
 * Amazon S3 on Outposts in *Amazon S3 User Guide*.
 *
 * If you don't have `DeleteBucketPolicy` permissions, Amazon S3 returns a 403
 * Access Denied error. If you have the correct permissions, but you're not using an
 * identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not
 * Allowed error.
 *
 * As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 * always use this action, even if the policy explicitly denies the root user the ability
 * to perform this action.
 *
 * For more information about bucket policies, see Using Bucket Policies and User
 * Policies.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `DeleteBucketPolicy`:
 *
 * - GetBucketPolicy
 *
 * - PutBucketPolicy
 */
export const deleteBucketPolicy: API.OperationMethod<
  DeleteBucketPolicyRequest,
  DeleteBucketPolicyResponse,
  DeleteBucketPolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketPolicyRequest,
  output: DeleteBucketPolicyResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBucketPolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteBucketReplicationError = CommonErrors;
/**
 * This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To
 * delete an S3 bucket's replication configuration, see DeleteBucketReplication in the *Amazon S3 API Reference*.
 *
 * Deletes the replication configuration from the specified S3 on Outposts bucket.
 *
 * To use this operation, you must have permissions to perform the
 * `s3-outposts:PutReplicationConfiguration` action. The Outposts bucket owner
 * has this permission by default and can grant it to others. For more information about
 * permissions, see Setting up IAM with
 * S3 on Outposts and Managing access to
 * S3 on Outposts buckets in the *Amazon S3 User Guide*.
 *
 * It can take a while to propagate `PUT` or `DELETE` requests for
 * a replication configuration to all S3 on Outposts systems. Therefore, the replication
 * configuration that's returned by a `GET` request soon after a
 * `PUT` or `DELETE` request might return a more recent result
 * than what's on the Outpost. If an Outpost is offline, the delay in updating the
 * replication configuration on that Outpost can be significant.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the
 * *Amazon S3 User Guide*.
 *
 * The following operations are related to `DeleteBucketReplication`:
 *
 * - PutBucketReplication
 *
 * - GetBucketReplication
 */
export const deleteBucketReplication: API.OperationMethod<
  DeleteBucketReplicationRequest,
  DeleteBucketReplicationResponse,
  DeleteBucketReplicationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketReplicationRequest,
  output: DeleteBucketReplicationResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBucketReplication",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteBucketTaggingError = CommonErrors;
/**
 * This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags,
 * see DeleteBucketTagging in the *Amazon S3 API Reference*.
 *
 * Deletes the tags from the Outposts bucket. For more information, see Using
 * Amazon S3 on Outposts in *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `PutBucketTagging` action. By default, the bucket owner has this permission
 * and can grant this permission to others.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `DeleteBucketTagging`:
 *
 * - GetBucketTagging
 *
 * - PutBucketTagging
 */
export const deleteBucketTagging: API.OperationMethod<
  DeleteBucketTaggingRequest,
  DeleteBucketTaggingResponse,
  DeleteBucketTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBucketTaggingRequest,
  output: DeleteBucketTaggingResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBucketTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteJobTaggingError =
  | InternalServiceException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes the entire tag set from the specified S3 Batch Operations job.
 *
 * ### Permissions
 *
 * To use the
 * `DeleteJobTagging` operation, you must have permission to
 * perform the `s3:DeleteJobTagging` action. For more information, see Controlling
 * access and labeling jobs using tags in the
 * *Amazon S3 User Guide*.
 *
 * Related actions include:
 *
 * - CreateJob
 *
 * - GetJobTagging
 *
 * - PutJobTagging
 */
export const deleteJobTagging: API.OperationMethod<
  DeleteJobTaggingRequest,
  DeleteJobTaggingResult,
  DeleteJobTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteJobTaggingRequest,
  output: DeleteJobTaggingResult,
  errors: [InternalServiceException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJobTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteMultiRegionAccessPointError =
  | NoSuchMultiRegionAccessPoint
  | InvalidRequest
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point,
 * only the Multi-Region Access Point itself.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 *
 * This request is asynchronous, meaning that you might receive a response before the
 * command has completed. When this request provides a response, it provides a token that you
 * can use to monitor the status of the request with
 * `DescribeMultiRegionAccessPointOperation`.
 *
 * The following actions are related to `DeleteMultiRegionAccessPoint`:
 *
 * - CreateMultiRegionAccessPoint
 *
 * - DescribeMultiRegionAccessPointOperation
 *
 * - GetMultiRegionAccessPoint
 *
 * - ListMultiRegionAccessPoints
 */
export const deleteMultiRegionAccessPoint: API.OperationMethod<
  DeleteMultiRegionAccessPointRequest,
  DeleteMultiRegionAccessPointResult,
  DeleteMultiRegionAccessPointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMultiRegionAccessPointRequest,
  output: DeleteMultiRegionAccessPointResult,
  errors: [NoSuchMultiRegionAccessPoint, InvalidRequest],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMultiRegionAccessPoint",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeletePublicAccessBlockError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Removes the `PublicAccessBlock` configuration for an Amazon Web Services account. This
 * operation might be restricted when the account is managed by organization-level Block
 * Public Access policies. You'll get an Access Denied (403) error when the account is managed
 * by organization-level Block Public Access policies. Organization-level policies override
 * account-level settings, preventing direct account-level modifications. For more
 * information, see Using Amazon S3 block
 * public access.
 *
 * Related actions include:
 *
 * - GetPublicAccessBlock
 *
 * - PutPublicAccessBlock
 */
export const deletePublicAccessBlock: API.OperationMethod<
  DeletePublicAccessBlockRequest,
  DeletePublicAccessBlockResponse,
  DeletePublicAccessBlockError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePublicAccessBlockRequest,
  output: DeletePublicAccessBlockResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePublicAccessBlock",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteStorageLensConfigurationError = NoSuchConfiguration | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage
 * activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `s3:DeleteStorageLensConfiguration` action. For more information, see
 * Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */
export const deleteStorageLensConfiguration: API.OperationMethod<
  DeleteStorageLensConfigurationRequest,
  DeleteStorageLensConfigurationResponse,
  DeleteStorageLensConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteStorageLensConfigurationRequest,
  output: DeleteStorageLensConfigurationResponse,
  errors: [NoSuchConfiguration],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStorageLensConfiguration",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteStorageLensConfigurationTaggingError = NoSuchConfiguration | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see
 * Assessing your
 * storage activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `s3:DeleteStorageLensConfigurationTagging` action. For more information,
 * see Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */
export const deleteStorageLensConfigurationTagging: API.OperationMethod<
  DeleteStorageLensConfigurationTaggingRequest,
  DeleteStorageLensConfigurationTaggingResult,
  DeleteStorageLensConfigurationTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteStorageLensConfigurationTaggingRequest,
  output: DeleteStorageLensConfigurationTaggingResult,
  errors: [NoSuchConfiguration],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStorageLensConfigurationTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type DeleteStorageLensGroupError = CommonErrors;
/**
 * Deletes an existing S3 Storage Lens group.
 *
 * To use this operation, you must have the permission to perform the
 * `s3:DeleteStorageLensGroup` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 *
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */
export const deleteStorageLensGroup: API.OperationMethod<
  DeleteStorageLensGroupRequest,
  DeleteStorageLensGroupResponse,
  DeleteStorageLensGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteStorageLensGroupRequest,
  output: DeleteStorageLensGroupResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStorageLensGroup",
  endpointHostPrefix: "{AccountId}.",
}));

export type DescribeJobError =
  | BadRequestException
  | InternalServiceException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the configuration parameters and status for a Batch Operations job. For more
 * information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 *
 * ### Permissions
 *
 * To use the `DescribeJob` operation, you must have permission to perform the `s3:DescribeJob` action.
 *
 * Related actions include:
 *
 * - CreateJob
 *
 * - ListJobs
 *
 * - UpdateJobPriority
 *
 * - UpdateJobStatus
 */
export const describeJob: API.OperationMethod<
  DescribeJobRequest,
  DescribeJobResult,
  DescribeJobError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeJobRequest,
  output: DescribeJobResult,
  errors: [
    BadRequestException,
    InternalServiceException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJob",
  endpointHostPrefix: "{AccountId}.",
}));

export type DescribeMultiRegionAccessPointOperationError = InvalidRequest | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information
 * about managing Multi-Region Access Points and how asynchronous requests work, see Using Multi-Region Access Points in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `GetMultiRegionAccessPoint`:
 *
 * - CreateMultiRegionAccessPoint
 *
 * - DeleteMultiRegionAccessPoint
 *
 * - GetMultiRegionAccessPoint
 *
 * - ListMultiRegionAccessPoints
 */
export const describeMultiRegionAccessPointOperation: API.OperationMethod<
  DescribeMultiRegionAccessPointOperationRequest,
  DescribeMultiRegionAccessPointOperationResult,
  DescribeMultiRegionAccessPointOperationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeMultiRegionAccessPointOperationRequest,
  output: DescribeMultiRegionAccessPointOperationResult,
  errors: [InvalidRequest],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMultiRegionAccessPointOperation",
  endpointHostPrefix: "{AccountId}.",
}));

export type DissociateAccessGrantsIdentityCenterError = CommonErrors;
/**
 * Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:DissociateAccessGrantsIdentityCenter` permission to use this operation.
 *
 * ### Additional Permissions
 *
 * You must have the `sso:DeleteApplication` permission to use this operation.
 */
export const dissociateAccessGrantsIdentityCenter: API.OperationMethod<
  DissociateAccessGrantsIdentityCenterRequest,
  DissociateAccessGrantsIdentityCenterResponse,
  DissociateAccessGrantsIdentityCenterError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DissociateAccessGrantsIdentityCenterRequest,
  output: DissociateAccessGrantsIdentityCenterResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DissociateAccessGrantsIdentityCenter",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessGrantError = CommonErrors;
/**
 * Get the details of an access grant from your S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:GetAccessGrant` permission to use this operation.
 */
export const getAccessGrant: API.OperationMethod<
  GetAccessGrantRequest,
  GetAccessGrantResult,
  GetAccessGrantError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessGrantRequest,
  output: GetAccessGrantResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessGrant",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessGrantsInstanceError = CommonErrors;
/**
 * Retrieves the S3 Access Grants instance for a Region in your account.
 *
 * ### Permissions
 *
 * You must have the `s3:GetAccessGrantsInstance` permission to use this operation.
 *
 * `GetAccessGrantsInstance` is not supported for cross-account access. You can only call the API from the account that owns the S3 Access Grants instance.
 */
export const getAccessGrantsInstance: API.OperationMethod<
  GetAccessGrantsInstanceRequest,
  GetAccessGrantsInstanceResult,
  GetAccessGrantsInstanceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessGrantsInstanceRequest,
  output: GetAccessGrantsInstanceResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessGrantsInstance",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessGrantsInstanceForPrefixError = CommonErrors;
/**
 * Retrieve the S3 Access Grants instance that contains a particular prefix.
 *
 * ### Permissions
 *
 * You must have the `s3:GetAccessGrantsInstanceForPrefix` permission for the caller account to use this operation.
 *
 * ### Additional Permissions
 *
 * The prefix owner account must grant you the following permissions to their S3 Access Grants instance: `s3:GetAccessGrantsInstanceForPrefix`.
 */
export const getAccessGrantsInstanceForPrefix: API.OperationMethod<
  GetAccessGrantsInstanceForPrefixRequest,
  GetAccessGrantsInstanceForPrefixResult,
  GetAccessGrantsInstanceForPrefixError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessGrantsInstanceForPrefixRequest,
  output: GetAccessGrantsInstanceForPrefixResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessGrantsInstanceForPrefix",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessGrantsInstanceResourcePolicyError = CommonErrors;
/**
 * Returns the resource policy of the S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:GetAccessGrantsInstanceResourcePolicy` permission to use this operation.
 */
export const getAccessGrantsInstanceResourcePolicy: API.OperationMethod<
  GetAccessGrantsInstanceResourcePolicyRequest,
  GetAccessGrantsInstanceResourcePolicyResult,
  GetAccessGrantsInstanceResourcePolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessGrantsInstanceResourcePolicyRequest,
  output: GetAccessGrantsInstanceResourcePolicyResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessGrantsInstanceResourcePolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessGrantsLocationError = CommonErrors;
/**
 * Retrieves the details of a particular location registered in your S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:GetAccessGrantsLocation` permission to use this operation.
 */
export const getAccessGrantsLocation: API.OperationMethod<
  GetAccessGrantsLocationRequest,
  GetAccessGrantsLocationResult,
  GetAccessGrantsLocationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessGrantsLocationRequest,
  output: GetAccessGrantsLocationResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessGrantsLocation",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessPointError = NoSuchAccessPoint | CommonErrors;
/**
 * Returns configuration information about the specified access point.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `GetAccessPoint`:
 *
 * - CreateAccessPoint
 *
 * - DeleteAccessPoint
 *
 * - ListAccessPoints
 */
export const getAccessPoint: API.OperationMethod<
  GetAccessPointRequest,
  GetAccessPointResult,
  GetAccessPointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPointRequest,
  output: GetAccessPointResult,
  errors: [NoSuchAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPoint",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessPointConfigurationForObjectLambdaError = NoSuchAccessPoint | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns configuration for an Object Lambda Access Point.
 *
 * The following actions are related to
 * `GetAccessPointConfigurationForObjectLambda`:
 *
 * - PutAccessPointConfigurationForObjectLambda
 */
export const getAccessPointConfigurationForObjectLambda: API.OperationMethod<
  GetAccessPointConfigurationForObjectLambdaRequest,
  GetAccessPointConfigurationForObjectLambdaResult,
  GetAccessPointConfigurationForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPointConfigurationForObjectLambdaRequest,
  output: GetAccessPointConfigurationForObjectLambdaResult,
  errors: [NoSuchAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPointConfigurationForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessPointForObjectLambdaError = NoSuchAccessPoint | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns configuration information about the specified Object Lambda Access Point
 *
 * The following actions are related to `GetAccessPointForObjectLambda`:
 *
 * - CreateAccessPointForObjectLambda
 *
 * - DeleteAccessPointForObjectLambda
 *
 * - ListAccessPointsForObjectLambda
 */
export const getAccessPointForObjectLambda: API.OperationMethod<
  GetAccessPointForObjectLambdaRequest,
  GetAccessPointForObjectLambdaResult,
  GetAccessPointForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPointForObjectLambdaRequest,
  output: GetAccessPointForObjectLambdaResult,
  errors: [NoSuchAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPointForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessPointPolicyError = NoSuchAccessPoint | NoSuchAccessPointPolicy | CommonErrors;
/**
 * Returns the access point policy associated with the specified access point.
 *
 * The following actions are related to `GetAccessPointPolicy`:
 *
 * - PutAccessPointPolicy
 *
 * - DeleteAccessPointPolicy
 */
export const getAccessPointPolicy: API.OperationMethod<
  GetAccessPointPolicyRequest,
  GetAccessPointPolicyResult,
  GetAccessPointPolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPointPolicyRequest,
  output: GetAccessPointPolicyResult,
  errors: [NoSuchAccessPoint, NoSuchAccessPointPolicy],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPointPolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessPointPolicyForObjectLambdaError =
  | NoSuchAccessPoint
  | NoSuchAccessPointPolicy
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns the resource policy for an Object Lambda Access Point.
 *
 * The following actions are related to
 * `GetAccessPointPolicyForObjectLambda`:
 *
 * - DeleteAccessPointPolicyForObjectLambda
 *
 * - PutAccessPointPolicyForObjectLambda
 */
export const getAccessPointPolicyForObjectLambda: API.OperationMethod<
  GetAccessPointPolicyForObjectLambdaRequest,
  GetAccessPointPolicyForObjectLambdaResult,
  GetAccessPointPolicyForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPointPolicyForObjectLambdaRequest,
  output: GetAccessPointPolicyForObjectLambdaResult,
  errors: [NoSuchAccessPoint, NoSuchAccessPointPolicy],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPointPolicyForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessPointPolicyStatusError =
  | NoSuchAccessPoint
  | NoSuchAccessPointPolicy
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Indicates whether the specified access point currently has a policy that allows public access.
 * For more information about public access through access points, see Managing Data Access with Amazon S3
 * access points in the *Amazon S3 User Guide*.
 */
export const getAccessPointPolicyStatus: API.OperationMethod<
  GetAccessPointPolicyStatusRequest,
  GetAccessPointPolicyStatusResult,
  GetAccessPointPolicyStatusError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPointPolicyStatusRequest,
  output: GetAccessPointPolicyStatusResult,
  errors: [NoSuchAccessPoint, NoSuchAccessPointPolicy],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPointPolicyStatus",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessPointPolicyStatusForObjectLambdaError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns the status of the resource policy associated with an Object Lambda Access Point.
 */
export const getAccessPointPolicyStatusForObjectLambda: API.OperationMethod<
  GetAccessPointPolicyStatusForObjectLambdaRequest,
  GetAccessPointPolicyStatusForObjectLambdaResult,
  GetAccessPointPolicyStatusForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPointPolicyStatusForObjectLambdaRequest,
  output: GetAccessPointPolicyStatusForObjectLambdaResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPointPolicyStatusForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetAccessPointScopeError = CommonErrors;
/**
 * Returns the access point scope for a directory bucket.
 *
 * To use this operation, you must have the permission to perform the
 * `s3express:GetAccessPointScope` action.
 *
 * For information about REST API errors, see REST error responses.
 */
export const getAccessPointScope: API.OperationMethod<
  GetAccessPointScopeRequest,
  GetAccessPointScopeResult,
  GetAccessPointScopeError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPointScopeRequest,
  output: GetAccessPointScopeResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPointScope",
}));

export type GetBucketError = CommonErrors;
/**
 * Gets an Amazon S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the
 * *Amazon S3 User Guide*.
 *
 * If you are using an identity other than the root user of the Amazon Web Services account that owns the
 * Outposts bucket, the calling identity must have the `s3-outposts:GetBucket`
 * permissions on the specified Outposts bucket and belong to the Outposts bucket owner's
 * account in order to use this action. Only users from Outposts bucket owner account with
 * the right permissions can perform actions on an Outposts bucket.
 *
 * If you don't have `s3-outposts:GetBucket` permissions or you're not using an
 * identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access
 * Denied error.
 *
 * The following actions are related to `GetBucket` for Amazon S3 on Outposts:
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * - PutObject
 *
 * - CreateBucket
 *
 * - DeleteBucket
 */
export const getBucket: API.OperationMethod<
  GetBucketRequest,
  GetBucketResult,
  GetBucketError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketRequest,
  output: GetBucketResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBucket",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetBucketLifecycleConfigurationError = CommonErrors;
/**
 * This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3
 * bucket's lifecycle configuration, see GetBucketLifecycleConfiguration in the *Amazon S3 API Reference*.
 *
 * Returns the lifecycle configuration information set on the Outposts bucket. For more
 * information, see Using Amazon S3 on Outposts and for
 * information about lifecycle configuration, see Object Lifecycle
 * Management in *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `s3-outposts:GetLifecycleConfiguration` action. The Outposts bucket owner
 * has this permission, by default. The bucket owner can grant this permission to others. For
 * more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing
 * Access Permissions to Your Amazon S3 Resources.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * `GetBucketLifecycleConfiguration` has the following special error:
 *
 * - Error code: `NoSuchLifecycleConfiguration`
 *
 * - Description: The lifecycle configuration does not exist.
 *
 * - HTTP Status Code: 404 Not Found
 *
 * - SOAP Fault Code Prefix: Client
 *
 * The following actions are related to
 * `GetBucketLifecycleConfiguration`:
 *
 * - PutBucketLifecycleConfiguration
 *
 * - DeleteBucketLifecycleConfiguration
 */
export const getBucketLifecycleConfiguration: API.OperationMethod<
  GetBucketLifecycleConfigurationRequest,
  GetBucketLifecycleConfigurationResult,
  GetBucketLifecycleConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketLifecycleConfigurationRequest,
  output: GetBucketLifecycleConfigurationResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBucketLifecycleConfiguration",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetBucketPolicyError = CommonErrors;
/**
 * This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for
 * an S3 bucket, see GetBucketPolicy in the
 * *Amazon S3 API Reference*.
 *
 * Returns the policy of a specified Outposts bucket. For more information, see Using
 * Amazon S3 on Outposts in the *Amazon S3 User Guide*.
 *
 * If you are using an identity other than the root user of the Amazon Web Services account that owns the
 * bucket, the calling identity must have the `GetBucketPolicy` permissions on the
 * specified bucket and belong to the bucket owner's account in order to use this
 * action.
 *
 * Only users from Outposts bucket owner account with the right permissions can perform
 * actions on an Outposts bucket. If you don't have `s3-outposts:GetBucketPolicy`
 * permissions or you're not using an identity that belongs to the bucket owner's account,
 * Amazon S3 returns a `403 Access Denied` error.
 *
 * As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 * always use this action, even if the policy explicitly denies the root user the ability
 * to perform this action.
 *
 * For more information about bucket policies, see Using Bucket Policies and User
 * Policies.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `GetBucketPolicy`:
 *
 * - GetObject
 *
 * - PutBucketPolicy
 *
 * - DeleteBucketPolicy
 */
export const getBucketPolicy: API.OperationMethod<
  GetBucketPolicyRequest,
  GetBucketPolicyResult,
  GetBucketPolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketPolicyRequest,
  output: GetBucketPolicyResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBucketPolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetBucketReplicationError = CommonErrors;
/**
 * This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an
 * S3 bucket's replication configuration, see GetBucketReplication
 * in the *Amazon S3 API Reference*.
 *
 * Returns the replication configuration of an S3 on Outposts bucket. For more information
 * about S3 on Outposts, see Using Amazon S3 on Outposts in the
 * *Amazon S3 User Guide*. For information about S3 replication on Outposts
 * configuration, see Replicating objects for
 * S3 on Outposts in the *Amazon S3 User Guide*.
 *
 * It can take a while to propagate `PUT` or `DELETE` requests for
 * a replication configuration to all S3 on Outposts systems. Therefore, the replication
 * configuration that's returned by a `GET` request soon after a
 * `PUT` or `DELETE` request might return a more recent result
 * than what's on the Outpost. If an Outpost is offline, the delay in updating the
 * replication configuration on that Outpost can be significant.
 *
 * This action requires permissions for the
 * `s3-outposts:GetReplicationConfiguration` action. The Outposts bucket owner
 * has this permission by default and can grant it to others. For more information about
 * permissions, see Setting up IAM with
 * S3 on Outposts and Managing access to
 * S3 on Outposts bucket in the *Amazon S3 User Guide*.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * If you include the `Filter` element in a replication configuration, you must
 * also include the `DeleteMarkerReplication`, `Status`, and
 * `Priority` elements. The response also returns those elements.
 *
 * For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the *Amazon S3 User Guide*.
 *
 * The following operations are related to `GetBucketReplication`:
 *
 * - PutBucketReplication
 *
 * - DeleteBucketReplication
 */
export const getBucketReplication: API.OperationMethod<
  GetBucketReplicationRequest,
  GetBucketReplicationResult,
  GetBucketReplicationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketReplicationRequest,
  output: GetBucketReplicationResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBucketReplication",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetBucketTaggingError = CommonErrors;
/**
 * This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see
 * GetBucketTagging in the *Amazon S3 API Reference*.
 *
 * Returns the tag set associated with the Outposts bucket. For more information, see
 * Using
 * Amazon S3 on Outposts in the *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `GetBucketTagging` action. By default, the bucket owner has this permission
 * and can grant this permission to others.
 *
 * `GetBucketTagging` has the following special error:
 *
 * - Error code: `NoSuchTagSetError`
 *
 * - Description: There is no tag set associated with the bucket.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `GetBucketTagging`:
 *
 * - PutBucketTagging
 *
 * - DeleteBucketTagging
 */
export const getBucketTagging: API.OperationMethod<
  GetBucketTaggingRequest,
  GetBucketTaggingResult,
  GetBucketTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketTaggingRequest,
  output: GetBucketTaggingResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBucketTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetBucketVersioningError = CommonErrors;
/**
 * This operation returns the versioning state
 * for
 * S3 on Outposts
 * buckets
 * only. To return the versioning state for an S3 bucket, see GetBucketVersioning in the *Amazon S3 API Reference*.
 *
 * Returns the versioning state for an S3 on Outposts bucket. With
 * S3
 * Versioning,
 * you can save multiple distinct copies of your
 * objects
 * and recover from unintended user actions and application failures.
 *
 * If you've never set versioning on your bucket, it has no versioning state. In that case,
 * the `GetBucketVersioning` request does not return a versioning state
 * value.
 *
 * For more information about versioning, see Versioning in the Amazon S3
 * User Guide.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following operations are related to `GetBucketVersioning` for
 * S3 on Outposts.
 *
 * - PutBucketVersioning
 *
 * - PutBucketLifecycleConfiguration
 *
 * - GetBucketLifecycleConfiguration
 */
export const getBucketVersioning: API.OperationMethod<
  GetBucketVersioningRequest,
  GetBucketVersioningResult,
  GetBucketVersioningError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketVersioningRequest,
  output: GetBucketVersioningResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBucketVersioning",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetDataAccessError = CommonErrors;
/**
 * Returns a temporary access credential from S3 Access Grants to the grantee or client application. The temporary credential is an Amazon Web Services STS token that grants them access to the S3 data.
 *
 * ### Permissions
 *
 * You must have the `s3:GetDataAccess` permission to use this operation.
 *
 * ### Additional Permissions
 *
 * The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: `sts:AssumeRole`, for directory users or groups `sts:SetContext`, and for IAM users or roles `sts:SetSourceIdentity`.
 */
export const getDataAccess: API.OperationMethod<
  GetDataAccessRequest,
  GetDataAccessResult,
  GetDataAccessError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataAccessRequest,
  output: GetDataAccessResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataAccess",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetJobTaggingError =
  | InternalServiceException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns the tags on an S3 Batch Operations job.
 *
 * ### Permissions
 *
 * To use the
 * `GetJobTagging` operation, you must have permission to
 * perform the `s3:GetJobTagging` action. For more information, see Controlling
 * access and labeling jobs using tags in the
 * *Amazon S3 User Guide*.
 *
 * Related actions include:
 *
 * - CreateJob
 *
 * - PutJobTagging
 *
 * - DeleteJobTagging
 */
export const getJobTagging: API.OperationMethod<
  GetJobTaggingRequest,
  GetJobTaggingResult,
  GetJobTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetJobTaggingRequest,
  output: GetJobTaggingResult,
  errors: [InternalServiceException, NotFoundException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJobTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetMultiRegionAccessPointError = NoSuchMultiRegionAccessPoint | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns configuration information about the specified Multi-Region Access Point.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `GetMultiRegionAccessPoint`:
 *
 * - CreateMultiRegionAccessPoint
 *
 * - DeleteMultiRegionAccessPoint
 *
 * - DescribeMultiRegionAccessPointOperation
 *
 * - ListMultiRegionAccessPoints
 */
export const getMultiRegionAccessPoint: API.OperationMethod<
  GetMultiRegionAccessPointRequest,
  GetMultiRegionAccessPointResult,
  GetMultiRegionAccessPointError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMultiRegionAccessPointRequest,
  output: GetMultiRegionAccessPointResult,
  errors: [NoSuchMultiRegionAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMultiRegionAccessPoint",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetMultiRegionAccessPointPolicyError = NoSuchMultiRegionAccessPoint | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns the access control policy of the specified Multi-Region Access Point.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 *
 * The following actions are related to
 * `GetMultiRegionAccessPointPolicy`:
 *
 * - GetMultiRegionAccessPointPolicyStatus
 *
 * - PutMultiRegionAccessPointPolicy
 */
export const getMultiRegionAccessPointPolicy: API.OperationMethod<
  GetMultiRegionAccessPointPolicyRequest,
  GetMultiRegionAccessPointPolicyResult,
  GetMultiRegionAccessPointPolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMultiRegionAccessPointPolicyRequest,
  output: GetMultiRegionAccessPointPolicyResult,
  errors: [NoSuchMultiRegionAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMultiRegionAccessPointPolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetMultiRegionAccessPointPolicyStatusError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Indicates whether the specified Multi-Region Access Point has an access control policy that allows public
 * access.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 *
 * The following actions are related to
 * `GetMultiRegionAccessPointPolicyStatus`:
 *
 * - GetMultiRegionAccessPointPolicy
 *
 * - PutMultiRegionAccessPointPolicy
 */
export const getMultiRegionAccessPointPolicyStatus: API.OperationMethod<
  GetMultiRegionAccessPointPolicyStatusRequest,
  GetMultiRegionAccessPointPolicyStatusResult,
  GetMultiRegionAccessPointPolicyStatusError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMultiRegionAccessPointPolicyStatusRequest,
  output: GetMultiRegionAccessPointPolicyStatusResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMultiRegionAccessPointPolicyStatus",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetMultiRegionAccessPointRoutesError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or
 * passive.
 *
 * To obtain routing control changes and failover requests, use the Amazon S3 failover control
 * infrastructure endpoints in these five Amazon Web Services Regions:
 *
 * - `us-east-1`
 *
 * - `us-west-2`
 *
 * - `ap-southeast-2`
 *
 * - `ap-northeast-1`
 *
 * - `eu-west-1`
 */
export const getMultiRegionAccessPointRoutes: API.OperationMethod<
  GetMultiRegionAccessPointRoutesRequest,
  GetMultiRegionAccessPointRoutesResult,
  GetMultiRegionAccessPointRoutesError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMultiRegionAccessPointRoutesRequest,
  output: GetMultiRegionAccessPointRoutesResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMultiRegionAccessPointRoutes",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetPublicAccessBlockError = NoSuchPublicAccessBlockConfiguration | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Retrieves the `PublicAccessBlock` configuration for an Amazon Web Services account. This
 * operation returns the effective account-level configuration, which may inherit from
 * organization-level policies. For more information, see Using Amazon S3 block
 * public access.
 *
 * Related actions include:
 *
 * - DeletePublicAccessBlock
 *
 * - PutPublicAccessBlock
 */
export const getPublicAccessBlock: API.OperationMethod<
  GetPublicAccessBlockRequest,
  GetPublicAccessBlockOutput,
  GetPublicAccessBlockError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPublicAccessBlockRequest,
  output: GetPublicAccessBlockOutput,
  errors: [NoSuchPublicAccessBlockConfiguration],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPublicAccessBlock",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetStorageLensConfigurationError = NoSuchConfiguration | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Gets the Amazon S3 Storage Lens configuration. For more information, see Assessing your storage
 * activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `s3:GetStorageLensConfiguration` action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 */
export const getStorageLensConfiguration: API.OperationMethod<
  GetStorageLensConfigurationRequest,
  GetStorageLensConfigurationResult,
  GetStorageLensConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStorageLensConfigurationRequest,
  output: GetStorageLensConfigurationResult,
  errors: [NoSuchConfiguration],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStorageLensConfiguration",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetStorageLensConfigurationTaggingError = NoSuchConfiguration | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
 * Assessing your
 * storage activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `s3:GetStorageLensConfigurationTagging` action. For more information, see
 * Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */
export const getStorageLensConfigurationTagging: API.OperationMethod<
  GetStorageLensConfigurationTaggingRequest,
  GetStorageLensConfigurationTaggingResult,
  GetStorageLensConfigurationTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStorageLensConfigurationTaggingRequest,
  output: GetStorageLensConfigurationTaggingResult,
  errors: [NoSuchConfiguration],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStorageLensConfigurationTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type GetStorageLensGroupError = CommonErrors;
/**
 * Retrieves the Storage Lens group configuration details.
 *
 * To use this operation, you must have the permission to perform the
 * `s3:GetStorageLensGroup` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 *
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */
export const getStorageLensGroup: API.OperationMethod<
  GetStorageLensGroupRequest,
  GetStorageLensGroupResult,
  GetStorageLensGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStorageLensGroupRequest,
  output: GetStorageLensGroupResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStorageLensGroup",
  endpointHostPrefix: "{AccountId}.",
}));

export type ListAccessGrantsError = CommonErrors;
/**
 * Returns the list of access grants in your S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:ListAccessGrants` permission to use this operation.
 */
export const listAccessGrants: API.PaginatedOperationMethod<
  ListAccessGrantsRequest,
  ListAccessGrantsResult,
  ListAccessGrantsError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessGrantsRequest,
  output: ListAccessGrantsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessGrants",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccessGrantsInstancesError = CommonErrors;
/**
 * Returns a list of S3 Access Grants instances. An S3 Access Grants instance serves as a logical grouping for your individual access grants. You can only have one S3 Access Grants instance per Region per account.
 *
 * ### Permissions
 *
 * You must have the `s3:ListAccessGrantsInstances` permission to use this operation.
 */
export const listAccessGrantsInstances: API.PaginatedOperationMethod<
  ListAccessGrantsInstancesRequest,
  ListAccessGrantsInstancesResult,
  ListAccessGrantsInstancesError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessGrantsInstancesRequest,
  output: ListAccessGrantsInstancesResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessGrantsInstances",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccessGrantsLocationsError = CommonErrors;
/**
 * Returns a list of the locations registered in your S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:ListAccessGrantsLocations` permission to use this operation.
 */
export const listAccessGrantsLocations: API.PaginatedOperationMethod<
  ListAccessGrantsLocationsRequest,
  ListAccessGrantsLocationsResult,
  ListAccessGrantsLocationsError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessGrantsLocationsRequest,
  output: ListAccessGrantsLocationsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessGrantsLocations",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccessPointsError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns a list of the access points. You can retrieve up to 1,000 access points per call. If the call
 * returns more than 1,000 access points (or the number specified in `maxResults`,
 * whichever is less), the response will include a continuation token that you can use to list
 * the additional access points.
 *
 * Returns only access points attached to S3 buckets by default. To return all access points specify
 * `DataSourceType` as `ALL`.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `ListAccessPoints`:
 *
 * - CreateAccessPoint
 *
 * - DeleteAccessPoint
 *
 * - GetAccessPoint
 */
export const listAccessPoints: API.PaginatedOperationMethod<
  ListAccessPointsRequest,
  ListAccessPointsResult,
  ListAccessPointsError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessPointsRequest,
  output: ListAccessPointsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessPoints",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccessPointsForDirectoryBucketsError = CommonErrors;
/**
 * Returns a list of the access points that are owned by the Amazon Web Services account and that are associated with the specified directory bucket.
 *
 * To list access points for general purpose buckets, see ListAccesspoints.
 *
 * To use this operation, you must have the permission to perform the
 * `s3express:ListAccessPointsForDirectoryBuckets` action.
 *
 * For information about REST API errors, see REST error responses.
 */
export const listAccessPointsForDirectoryBuckets: API.PaginatedOperationMethod<
  ListAccessPointsForDirectoryBucketsRequest,
  ListAccessPointsForDirectoryBucketsResult,
  ListAccessPointsForDirectoryBucketsError,
  Creds | HttpClient.HttpClient,
  AccessPoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessPointsForDirectoryBucketsRequest,
  output: ListAccessPointsForDirectoryBucketsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessPointsForDirectoryBuckets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccessPointList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccessPointsForObjectLambdaError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there
 * are more access points than what can be returned in one call, the response will include a
 * continuation token that you can use to list the additional access points.
 *
 * The following actions are related to
 * `ListAccessPointsForObjectLambda`:
 *
 * - CreateAccessPointForObjectLambda
 *
 * - DeleteAccessPointForObjectLambda
 *
 * - GetAccessPointForObjectLambda
 */
export const listAccessPointsForObjectLambda: API.PaginatedOperationMethod<
  ListAccessPointsForObjectLambdaRequest,
  ListAccessPointsForObjectLambdaResult,
  ListAccessPointsForObjectLambdaError,
  Creds | HttpClient.HttpClient,
  ObjectLambdaAccessPoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessPointsForObjectLambdaRequest,
  output: ListAccessPointsForObjectLambdaResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessPointsForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ObjectLambdaAccessPointList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCallerAccessGrantsError = CommonErrors;
/**
 * Use this API to list the access grants that grant the caller access to Amazon S3 data through S3 Access Grants. The caller (grantee) can be an Identity and Access Management (IAM) identity or Amazon Web Services Identity Center corporate directory identity. You must pass the Amazon Web Services account of the S3 data owner (grantor) in the request. You can, optionally, narrow the results by `GrantScope`, using a fragment of the data's S3 path, and S3 Access Grants will return only the grants with a path that contains the path fragment. You can also pass the `AllowedByApplication` filter in the request, which returns only the grants authorized for applications, whether the application is the caller's Identity Center application or any other application (`ALL`). For more information, see List the caller's access grants in the *Amazon S3 User Guide*.
 *
 * ### Permissions
 *
 * You must have the `s3:ListCallerAccessGrants` permission to use this operation.
 */
export const listCallerAccessGrants: API.PaginatedOperationMethod<
  ListCallerAccessGrantsRequest,
  ListCallerAccessGrantsResult,
  ListCallerAccessGrantsError,
  Creds | HttpClient.HttpClient,
  ListCallerAccessGrantsEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCallerAccessGrantsRequest,
  output: ListCallerAccessGrantsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCallerAccessGrants",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CallerAccessGrantsList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListJobsError =
  | InternalServiceException
  | InvalidNextTokenException
  | InvalidRequestException
  | CommonErrors;
/**
 * Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90
 * days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 *
 * ### Permissions
 *
 * To use the
 * `ListJobs` operation, you must have permission to
 * perform the `s3:ListJobs` action.
 *
 * Related actions include:
 *
 * - CreateJob
 *
 * - DescribeJob
 *
 * - UpdateJobPriority
 *
 * - UpdateJobStatus
 */
export const listJobs: API.PaginatedOperationMethod<
  ListJobsRequest,
  ListJobsResult,
  ListJobsError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobsRequest,
  output: ListJobsResult,
  errors: [InternalServiceException, InvalidNextTokenException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobs",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMultiRegionAccessPointsError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account.
 * Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be
 * associated with a single account.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 *
 * The following actions are related to `ListMultiRegionAccessPoint`:
 *
 * - CreateMultiRegionAccessPoint
 *
 * - DeleteMultiRegionAccessPoint
 *
 * - DescribeMultiRegionAccessPointOperation
 *
 * - GetMultiRegionAccessPoint
 */
export const listMultiRegionAccessPoints: API.PaginatedOperationMethod<
  ListMultiRegionAccessPointsRequest,
  ListMultiRegionAccessPointsResult,
  ListMultiRegionAccessPointsError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMultiRegionAccessPointsRequest,
  output: ListMultiRegionAccessPointsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMultiRegionAccessPoints",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRegionalBucketsError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated
 * sender of the request. For more information, see Using Amazon S3 on Outposts in the
 * *Amazon S3 User Guide*.
 *
 * For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 * endpoint hostname prefix and `x-amz-outpost-id` in your request, see the Examples section.
 */
export const listRegionalBuckets: API.PaginatedOperationMethod<
  ListRegionalBucketsRequest,
  ListRegionalBucketsResult,
  ListRegionalBucketsError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRegionalBucketsRequest,
  output: ListRegionalBucketsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegionalBuckets",
  endpointHostPrefix: "{AccountId}.",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStorageLensConfigurationsError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see
 * Assessing your
 * storage activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `s3:ListStorageLensConfigurations` action. For more information, see
 * Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */
export const listStorageLensConfigurations: API.PaginatedOperationMethod<
  ListStorageLensConfigurationsRequest,
  ListStorageLensConfigurationsResult,
  ListStorageLensConfigurationsError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStorageLensConfigurationsRequest,
  output: ListStorageLensConfigurationsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStorageLensConfigurations",
  endpointHostPrefix: "{AccountId}.",
  pagination: { inputToken: "NextToken", outputToken: "NextToken" } as const,
})) as any;

export type ListStorageLensGroupsError = CommonErrors;
/**
 * Lists all the Storage Lens groups in the specified home Region.
 *
 * To use this operation, you must have the permission to perform the
 * `s3:ListStorageLensGroups` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 *
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */
export const listStorageLensGroups: API.PaginatedOperationMethod<
  ListStorageLensGroupsRequest,
  ListStorageLensGroupsResult,
  ListStorageLensGroupsError,
  Creds | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStorageLensGroupsRequest,
  output: ListStorageLensGroupsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStorageLensGroups",
  endpointHostPrefix: "{AccountId}.",
  pagination: { inputToken: "NextToken", outputToken: "NextToken" } as const,
})) as any;

export type ListTagsForResourceError = NoSuchAccessPoint | CommonErrors;
/**
 * This operation allows you to list all of the tags for a specified resource. Each tag is a label consisting of a key and value. Tags can help you organize, track costs for, and control access to resources.
 *
 * This operation is only supported for the following Amazon S3 resources:
 *
 * - General purpose buckets
 *
 * - Access Points for directory buckets
 *
 * - Access Points for general purpose buckets
 *
 * - Directory buckets
 *
 * - S3 Storage Lens groups
 *
 * - S3 Access Grants instances, registered locations, and grants.
 *
 * ### Permissions
 *
 * For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the `s3:ListTagsForResource` permission to use this operation.
 *
 * ### Directory bucket permissions
 *
 * For directory buckets, you must have the `s3express:ListTagsForResource` permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the *Amazon S3 User Guide*.
 *
 * ### HTTP Host header syntax
 *
 * **Directory buckets ** - The HTTP Host header syntax is `s3express-control.*region*.amazonaws.com`.
 *
 * For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  ListTagsForResourceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResult,
  errors: [NoSuchAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutAccessGrantsInstanceResourcePolicyError = CommonErrors;
/**
 * Updates the resource policy of the S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:PutAccessGrantsInstanceResourcePolicy` permission to use this operation.
 */
export const putAccessGrantsInstanceResourcePolicy: API.OperationMethod<
  PutAccessGrantsInstanceResourcePolicyRequest,
  PutAccessGrantsInstanceResourcePolicyResult,
  PutAccessGrantsInstanceResourcePolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccessGrantsInstanceResourcePolicyRequest,
  output: PutAccessGrantsInstanceResourcePolicyResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccessGrantsInstanceResourcePolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutAccessPointConfigurationForObjectLambdaError =
  | NoSuchAccessPoint
  | InvalidRequest
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Replaces configuration for an Object Lambda Access Point.
 *
 * The following actions are related to
 * `PutAccessPointConfigurationForObjectLambda`:
 *
 * - GetAccessPointConfigurationForObjectLambda
 */
export const putAccessPointConfigurationForObjectLambda: API.OperationMethod<
  PutAccessPointConfigurationForObjectLambdaRequest,
  PutAccessPointConfigurationForObjectLambdaResponse,
  PutAccessPointConfigurationForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccessPointConfigurationForObjectLambdaRequest,
  output: PutAccessPointConfigurationForObjectLambdaResponse,
  errors: [NoSuchAccessPoint, InvalidRequest],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccessPointConfigurationForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutAccessPointPolicyError = NoSuchAccessPoint | MalformedPolicy | CommonErrors;
/**
 * Associates an access policy with the specified access point. Each access point can have only one policy,
 * so a request made to this API replaces any existing policy associated with the specified
 * access point.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `PutAccessPointPolicy`:
 *
 * - GetAccessPointPolicy
 *
 * - DeleteAccessPointPolicy
 */
export const putAccessPointPolicy: API.OperationMethod<
  PutAccessPointPolicyRequest,
  PutAccessPointPolicyResponse,
  PutAccessPointPolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccessPointPolicyRequest,
  output: PutAccessPointPolicyResponse,
  errors: [NoSuchAccessPoint, MalformedPolicy],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccessPointPolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutAccessPointPolicyForObjectLambdaError =
  | NoSuchAccessPoint
  | MalformedPolicy
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see Creating Object Lambda Access Points in the *Amazon S3 User Guide*.
 *
 * The following actions are related to
 * `PutAccessPointPolicyForObjectLambda`:
 *
 * - DeleteAccessPointPolicyForObjectLambda
 *
 * - GetAccessPointPolicyForObjectLambda
 */
export const putAccessPointPolicyForObjectLambda: API.OperationMethod<
  PutAccessPointPolicyForObjectLambdaRequest,
  PutAccessPointPolicyForObjectLambdaResponse,
  PutAccessPointPolicyForObjectLambdaError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccessPointPolicyForObjectLambdaRequest,
  output: PutAccessPointPolicyForObjectLambdaResponse,
  errors: [NoSuchAccessPoint, MalformedPolicy],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccessPointPolicyForObjectLambda",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutAccessPointScopeError = CommonErrors;
/**
 * Creates or replaces the access point scope for a directory bucket. You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both.
 *
 * You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 256 bytes in size.
 *
 * To use this operation, you must have the permission to perform the
 * `s3express:PutAccessPointScope` action.
 *
 * For information about REST API errors, see REST error responses.
 */
export const putAccessPointScope: API.OperationMethod<
  PutAccessPointScopeRequest,
  PutAccessPointScopeResponse,
  PutAccessPointScopeError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccessPointScopeRequest,
  output: PutAccessPointScopeResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccessPointScope",
}));

export type PutBucketLifecycleConfigurationError = CommonErrors;
/**
 * This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a
 * lifecycle configuration to an S3 bucket, see PutBucketLifecycleConfiguration in the *Amazon S3 API Reference*.
 *
 * Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an
 * existing lifecycle configuration. Outposts buckets only support lifecycle configurations
 * that delete/expire objects after a certain period of time and abort incomplete multipart
 * uploads.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to
 * `PutBucketLifecycleConfiguration`:
 *
 * - GetBucketLifecycleConfiguration
 *
 * - DeleteBucketLifecycleConfiguration
 */
export const putBucketLifecycleConfiguration: API.OperationMethod<
  PutBucketLifecycleConfigurationRequest,
  PutBucketLifecycleConfigurationResponse,
  PutBucketLifecycleConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketLifecycleConfigurationRequest,
  output: PutBucketLifecycleConfigurationResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutBucketLifecycleConfiguration",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutBucketPolicyError = CommonErrors;
/**
 * This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an
 * S3 bucket, see PutBucketPolicy in the
 * *Amazon S3 API Reference*.
 *
 * Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see Using
 * Amazon S3 on Outposts in the *Amazon S3 User Guide*.
 *
 * If you are using an identity other than the root user of the Amazon Web Services account that owns the
 * Outposts bucket, the calling identity must have the `PutBucketPolicy`
 * permissions on the specified Outposts bucket and belong to the bucket owner's account in
 * order to use this action.
 *
 * If you don't have `PutBucketPolicy` permissions, Amazon S3 returns a 403
 * Access Denied error. If you have the correct permissions, but you're not using an
 * identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not
 * Allowed error.
 *
 * As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 * always use this action, even if the policy explicitly denies the root user the ability
 * to perform this action.
 *
 * For more information about bucket policies, see Using Bucket Policies and User
 * Policies.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `PutBucketPolicy`:
 *
 * - GetBucketPolicy
 *
 * - DeleteBucketPolicy
 */
export const putBucketPolicy: API.OperationMethod<
  PutBucketPolicyRequest,
  PutBucketPolicyResponse,
  PutBucketPolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketPolicyRequest,
  output: PutBucketPolicyResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutBucketPolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutBucketReplicationError = CommonErrors;
/**
 * This action creates an Amazon S3 on Outposts bucket's replication configuration. To create
 * an S3 bucket's replication configuration, see PutBucketReplication
 * in the *Amazon S3 API Reference*.
 *
 * Creates a replication configuration or replaces an existing one. For information about
 * S3 replication on Outposts configuration, see Replicating objects for
 * S3 on Outposts in the *Amazon S3 User Guide*.
 *
 * It can take a while to propagate `PUT` or `DELETE` requests for
 * a replication configuration to all S3 on Outposts systems. Therefore, the replication
 * configuration that's returned by a `GET` request soon after a
 * `PUT` or `DELETE` request might return a more recent result
 * than what's on the Outpost. If an Outpost is offline, the delay in updating the
 * replication configuration on that Outpost can be significant.
 *
 * Specify the replication configuration in the request body. In the replication
 * configuration, you provide the following information:
 *
 * - The name of the destination bucket or buckets where you want S3 on Outposts to
 * replicate objects
 *
 * - The Identity and Access Management (IAM) role that S3 on Outposts can assume to replicate objects on
 * your behalf
 *
 * - Other relevant information, such as replication rules
 *
 * A replication configuration must include at least one rule and can contain a maximum of
 * 100. Each rule identifies a subset of objects to replicate by filtering the objects in the
 * source Outposts bucket. To choose additional subsets of objects to replicate, add a rule
 * for each subset.
 *
 * To specify a subset of the objects in the source Outposts bucket to apply a replication
 * rule to, add the `Filter` element as a child of the `Rule` element.
 * You can filter objects based on an object key prefix, one or more object tags, or both.
 * When you add the `Filter` element in the configuration, you must also add the
 * following elements: `DeleteMarkerReplication`, `Status`, and
 * `Priority`.
 *
 * Using `PutBucketReplication` on Outposts requires that both the source and
 * destination buckets must have versioning enabled. For information about enabling versioning
 * on a bucket, see Managing S3 Versioning
 * for your S3 on Outposts bucket.
 *
 * For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the *Amazon S3 User Guide*.
 *
 * **Handling Replication of Encrypted Objects**
 *
 * Outposts buckets are encrypted at all times. All the objects in the source Outposts
 * bucket are encrypted and can be replicated. Also, all the replicas in the destination
 * Outposts bucket are encrypted with the same encryption key as the objects in the source
 * Outposts bucket.
 *
 * **Permissions**
 *
 * To create a `PutBucketReplication` request, you must have
 * `s3-outposts:PutReplicationConfiguration` permissions for the bucket. The
 * Outposts bucket owner has this permission by default and can grant it to others. For more
 * information about permissions, see Setting up IAM with
 * S3 on Outposts and Managing access to
 * S3 on Outposts buckets.
 *
 * To perform this operation, the user or role must also have the
 * `iam:CreateRole` and `iam:PassRole` permissions. For more
 * information, see Granting a user permissions to
 * pass a role to an Amazon Web Services service.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following operations are related to `PutBucketReplication`:
 *
 * - GetBucketReplication
 *
 * - DeleteBucketReplication
 */
export const putBucketReplication: API.OperationMethod<
  PutBucketReplicationRequest,
  PutBucketReplicationResponse,
  PutBucketReplicationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketReplicationRequest,
  output: PutBucketReplicationResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutBucketReplication",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutBucketTaggingError = CommonErrors;
/**
 * This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see
 * PutBucketTagging in the *Amazon S3 API Reference*.
 *
 * Sets the tags for an S3 on Outposts bucket. For more information, see Using
 * Amazon S3 on Outposts in the *Amazon S3 User Guide*.
 *
 * Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this,
 * sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost
 * of combined resources, organize your billing information according to resources with the
 * same tag key values. For example, you can tag several resources with a specific application
 * name, and then organize your billing information to see the total cost of that application
 * across several services. For more information, see Cost allocation and
 * tagging.
 *
 * Within a bucket, if you add a tag that has the same key as an existing tag, the new
 * value overwrites the old value. For more information, see Using cost allocation in Amazon S3
 * bucket tags.
 *
 * To use this action, you must have permissions to perform the
 * `s3-outposts:PutBucketTagging` action. The Outposts bucket owner has this
 * permission by default and can grant this permission to others. For more information about
 * permissions, see Permissions Related to Bucket Subresource Operations and Managing
 * access permissions to your Amazon S3 resources.
 *
 * `PutBucketTagging` has the following special errors:
 *
 * - Error code: `InvalidTagError`
 *
 * - Description: The tag provided was not a valid tag. This error can occur if
 * the tag did not pass input validation. For information about tag restrictions,
 * see
 * User-Defined Tag Restrictions and
 * Amazon Web Services-Generated Cost Allocation Tag Restrictions.
 *
 * - Error code: `MalformedXMLError`
 *
 * - Description: The XML provided does not match the schema.
 *
 * - Error code: `OperationAbortedError `
 *
 * - Description: A conflicting conditional action is currently in progress
 * against this resource. Try again.
 *
 * - Error code: `InternalError`
 *
 * - Description: The service was unable to apply the provided tag to the
 * bucket.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following actions are related to `PutBucketTagging`:
 *
 * - GetBucketTagging
 *
 * - DeleteBucketTagging
 */
export const putBucketTagging: API.OperationMethod<
  PutBucketTaggingRequest,
  PutBucketTaggingResponse,
  PutBucketTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketTaggingRequest,
  output: PutBucketTaggingResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutBucketTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutBucketVersioningError = CommonErrors;
/**
 * This operation sets the versioning state
 * for
 * S3 on Outposts
 * buckets
 * only. To set the versioning state for an S3 bucket, see PutBucketVersioning in the *Amazon S3 API Reference*.
 *
 * Sets the versioning state for an S3 on Outposts bucket. With
 * S3
 * Versioning,
 * you can save multiple distinct copies of your
 * objects
 * and recover from unintended user actions and application failures.
 *
 * You can set the versioning state to one of the following:
 *
 * - **Enabled** - Enables versioning for the objects in
 * the bucket. All objects added to the bucket receive a unique version ID.
 *
 * - **Suspended** - Suspends versioning for the objects
 * in the bucket. All objects added to the bucket receive the version ID
 * `null`.
 *
 * If you've never set versioning on your bucket, it has no versioning state. In that case,
 * a
 * GetBucketVersioning request does not return a versioning state value.
 *
 * When you enable S3 Versioning, for each object in your bucket, you have a current
 * version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle
 * rules to expire noncurrent versions after a specified time period. For more information,
 * see Creating and managing
 * a lifecycle configuration for your S3 on Outposts bucket in the Amazon S3
 * User Guide.
 *
 * If you have an object expiration lifecycle configuration in your non-versioned bucket
 * and you want to maintain the same permanent delete behavior when you enable versioning, you
 * must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration
 * will manage the deletes of the noncurrent object versions in the version-enabled bucket.
 * For more information, see Versioning in the Amazon S3
 * User Guide.
 *
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 *
 * The following operations are related to `PutBucketVersioning` for
 * S3 on Outposts.
 *
 * - GetBucketVersioning
 *
 * - PutBucketLifecycleConfiguration
 *
 * - GetBucketLifecycleConfiguration
 */
export const putBucketVersioning: API.OperationMethod<
  PutBucketVersioningRequest,
  PutBucketVersioningResponse,
  PutBucketVersioningError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutBucketVersioningRequest,
  output: PutBucketVersioningResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutBucketVersioning",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutJobTaggingError =
  | InternalServiceException
  | NotFoundException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Sets the supplied tag-set on an S3 Batch Operations job.
 *
 * A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending
 * a PUT request against the tagging subresource that is associated with the job. To modify
 * the existing tag set, you can either replace the existing tag set entirely, or make changes
 * within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this operation to replace the tag set
 * with the one you modified. For more information, see Controlling
 * access and labeling jobs using tags in the *Amazon S3 User Guide*.
 *
 * - If you send this request with an empty tag set, Amazon S3 deletes the existing
 * tag set on the Batch Operations job. If you use this method, you are charged for a Tier
 * 1 Request (PUT). For more information, see Amazon S3 pricing.
 *
 * - For deleting existing tags for your Batch Operations job, a DeleteJobTagging request is preferred because it achieves the same
 * result without incurring charges.
 *
 * - A few things to consider about using tags:
 *
 * - Amazon S3 limits the maximum number of tags to 50 tags per job.
 *
 * - You can associate up to 50 tags with a job as long as they have unique
 * tag keys.
 *
 * - A tag key can be up to 128 Unicode characters in length, and tag values
 * can be up to 256 Unicode characters in length.
 *
 * - The key and values are case sensitive.
 *
 * - For tagging-related restrictions related to characters and encodings, see
 * User-Defined Tag Restrictions in the *Billing and Cost Management User Guide*.
 *
 * ### Permissions
 *
 * To use the
 * `PutJobTagging` operation, you must have permission to
 * perform the `s3:PutJobTagging` action.
 *
 * Related actions include:
 *
 * - CreateJob
 *
 * - GetJobTagging
 *
 * - DeleteJobTagging
 */
export const putJobTagging: API.OperationMethod<
  PutJobTaggingRequest,
  PutJobTaggingResult,
  PutJobTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutJobTaggingRequest,
  output: PutJobTaggingResult,
  errors: [
    InternalServiceException,
    NotFoundException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutJobTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutMultiRegionAccessPointPolicyError =
  | NoSuchMultiRegionAccessPoint
  | InvalidRequest
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only
 * one policy, so a request made to this action replaces any existing policy that is
 * associated with the specified Multi-Region Access Point.
 *
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 *
 * The following actions are related to
 * `PutMultiRegionAccessPointPolicy`:
 *
 * - GetMultiRegionAccessPointPolicy
 *
 * - GetMultiRegionAccessPointPolicyStatus
 */
export const putMultiRegionAccessPointPolicy: API.OperationMethod<
  PutMultiRegionAccessPointPolicyRequest,
  PutMultiRegionAccessPointPolicyResult,
  PutMultiRegionAccessPointPolicyError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutMultiRegionAccessPointPolicyRequest,
  output: PutMultiRegionAccessPointPolicyResult,
  errors: [NoSuchMultiRegionAccessPoint, InvalidRequest],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMultiRegionAccessPointPolicy",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutPublicAccessBlockError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Creates or modifies the `PublicAccessBlock` configuration for an
 * Amazon Web Services account. This operation may be restricted when the account is managed by
 * organization-level Block Public Access policies. You might get an Access Denied (403) error
 * when the account is managed by organization-level Block Public Access policies.
 * Organization-level policies override account-level settings, preventing direct
 * account-level modifications. For this operation, users must have the
 * `s3:PutAccountPublicAccessBlock` permission. For more information, see
 * Using Amazon S3 block public access.
 *
 * Related actions include:
 *
 * - GetPublicAccessBlock
 *
 * - DeletePublicAccessBlock
 */
export const putPublicAccessBlock: API.OperationMethod<
  PutPublicAccessBlockRequest,
  PutPublicAccessBlockResponse,
  PutPublicAccessBlockError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutPublicAccessBlockRequest,
  output: PutPublicAccessBlockResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutPublicAccessBlock",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutStorageLensConfigurationError =
  | InvalidRequest
  | MissingBucketLevelActivityMetrics
  | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Working with
 * Amazon S3 Storage Lens in the *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `s3:PutStorageLensConfiguration` action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 */
export const putStorageLensConfiguration: API.OperationMethod<
  PutStorageLensConfigurationRequest,
  PutStorageLensConfigurationResponse,
  PutStorageLensConfigurationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutStorageLensConfigurationRequest,
  output: PutStorageLensConfigurationResponse,
  errors: [InvalidRequest, MissingBucketLevelActivityMetrics],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutStorageLensConfiguration",
  endpointHostPrefix: "{AccountId}.",
}));

export type PutStorageLensConfigurationTaggingError = NoSuchConfiguration | CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information
 * about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 *
 * To use this action, you must have permission to perform the
 * `s3:PutStorageLensConfigurationTagging` action. For more information, see
 * Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */
export const putStorageLensConfigurationTagging: API.OperationMethod<
  PutStorageLensConfigurationTaggingRequest,
  PutStorageLensConfigurationTaggingResult,
  PutStorageLensConfigurationTaggingError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutStorageLensConfigurationTaggingRequest,
  output: PutStorageLensConfigurationTaggingResult,
  errors: [NoSuchConfiguration],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutStorageLensConfigurationTagging",
  endpointHostPrefix: "{AccountId}.",
}));

export type SubmitMultiRegionAccessPointRoutesError = CommonErrors;
/**
 * This operation is not supported by directory buckets.
 *
 * Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the
 * routing status for the specified Regions from active to passive, or from passive to active.
 * A value of `0` indicates a passive status, which means that traffic won't be
 * routed to the specified Region. A value of `100` indicates an active status,
 * which means that traffic will be routed to the specified Region. At least one Region must
 * be active at all times.
 *
 * When the routing configuration is changed, any in-progress operations (uploads, copies,
 * deletes, and so on) to formerly active Regions will continue to run to their final
 * completion state (success or failure). The routing configurations of any Regions that
 * aren't specified remain unchanged.
 *
 * Updated routing configurations might not be immediately applied. It can take up to 2
 * minutes for your changes to take effect.
 *
 * To submit routing control changes and failover requests, use the Amazon S3 failover control
 * infrastructure endpoints in these five Amazon Web Services Regions:
 *
 * - `us-east-1`
 *
 * - `us-west-2`
 *
 * - `ap-southeast-2`
 *
 * - `ap-northeast-1`
 *
 * - `eu-west-1`
 */
export const submitMultiRegionAccessPointRoutes: API.OperationMethod<
  SubmitMultiRegionAccessPointRoutesRequest,
  SubmitMultiRegionAccessPointRoutesResult,
  SubmitMultiRegionAccessPointRoutesError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SubmitMultiRegionAccessPointRoutesRequest,
  output: SubmitMultiRegionAccessPointRoutesResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitMultiRegionAccessPointRoutes",
  endpointHostPrefix: "{AccountId}.",
}));

export type TagResourceError = NoSuchAccessPoint | CommonErrors;
/**
 * Creates a new user-defined tag or updates an existing tag. Each tag is a label consisting of a key and value that is applied to your resource. Tags can help you organize, track costs for, and control access to your resources. You can add up to 50 Amazon Web Services resource tags for each S3 resource.
 *
 * This operation is only supported for the following Amazon S3 resource:
 *
 * - General purpose buckets
 *
 * - Access Points for directory buckets
 *
 * - Access Points for general purpose buckets
 *
 * - Directory buckets
 *
 * - S3 Storage Lens groups
 *
 * - S3 Access Grants instances, registered locations, or grants.
 *
 * ### Permissions
 *
 * For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the `s3:TagResource` permission to use this operation.
 *
 * ### Directory bucket permissions
 *
 * For directory buckets, you must have the `s3express:TagResource` permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the *Amazon S3 User Guide*.
 *
 * ### HTTP Host header syntax
 *
 * **Directory buckets ** - The HTTP Host header syntax is `s3express-control.*region*.amazonaws.com`.
 *
 * For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResult,
  TagResourceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResult,
  errors: [NoSuchAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
  endpointHostPrefix: "{AccountId}.",
}));

export type UntagResourceError = NoSuchAccessPoint | CommonErrors;
/**
 * This operation removes the specified user-defined tags from an S3 resource. You can pass one or more tag keys.
 *
 * This operation is only supported for the following Amazon S3 resources:
 *
 * - General purpose buckets
 *
 * - Access Points for directory buckets
 *
 * - Access Points for general purpose buckets
 *
 * - Directory buckets
 *
 * - S3 Storage Lens groups
 *
 * - S3 Access Grants instances, registered locations, and grants.
 *
 * ### Permissions
 *
 * For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the `s3:UntagResource` permission to use this operation.
 *
 * ### Directory bucket permissions
 *
 * For directory buckets, you must have the `s3express:UntagResource` permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the *Amazon S3 User Guide*.
 *
 * ### HTTP Host header syntax
 *
 * **Directory buckets ** - The HTTP Host header syntax is `s3express-control.*region*.amazonaws.com`.
 *
 * For information about S3 Tagging errors, see List of Amazon S3
 * Tagging error codes.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResult,
  UntagResourceError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResult,
  errors: [NoSuchAccessPoint],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
  endpointHostPrefix: "{AccountId}.",
}));

export type UpdateAccessGrantsLocationError = CommonErrors;
/**
 * Updates the IAM role of a registered location in your S3 Access Grants instance.
 *
 * ### Permissions
 *
 * You must have the `s3:UpdateAccessGrantsLocation` permission to use this operation.
 *
 * ### Additional Permissions
 *
 * You must also have the following permission: `iam:PassRole`
 */
export const updateAccessGrantsLocation: API.OperationMethod<
  UpdateAccessGrantsLocationRequest,
  UpdateAccessGrantsLocationResult,
  UpdateAccessGrantsLocationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccessGrantsLocationRequest,
  output: UpdateAccessGrantsLocationResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccessGrantsLocation",
  endpointHostPrefix: "{AccountId}.",
}));

export type UpdateJobPriorityError =
  | BadRequestException
  | InternalServiceException
  | NotFoundException
  | TooManyRequestsException
  | InvalidRequest
  | JobStatusTransitionForbidden
  | CommonErrors;
/**
 * Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 *
 * ### Permissions
 *
 * To use the
 * `UpdateJobPriority` operation, you must have permission to
 * perform the `s3:UpdateJobPriority` action.
 *
 * Related actions include:
 *
 * - CreateJob
 *
 * - ListJobs
 *
 * - DescribeJob
 *
 * - UpdateJobStatus
 */
export const updateJobPriority: API.OperationMethod<
  UpdateJobPriorityRequest,
  UpdateJobPriorityResult,
  UpdateJobPriorityError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateJobPriorityRequest,
  output: UpdateJobPriorityResult,
  errors: [
    BadRequestException,
    InternalServiceException,
    NotFoundException,
    TooManyRequestsException,
    InvalidRequest,
    JobStatusTransitionForbidden,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateJobPriority",
  endpointHostPrefix: "{AccountId}.",
}));

export type UpdateJobStatusError =
  | BadRequestException
  | InternalServiceException
  | JobStatusException
  | NotFoundException
  | TooManyRequestsException
  | InvalidRequest
  | JobStatusTransitionForbidden
  | CommonErrors;
/**
 * Updates the status for the specified job. Use this operation to confirm that you want to
 * run a job or to cancel an existing job. For more information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 *
 * ### Permissions
 *
 * To use the
 * `UpdateJobStatus` operation, you must have permission to
 * perform the `s3:UpdateJobStatus` action.
 *
 * Related actions include:
 *
 * - CreateJob
 *
 * - ListJobs
 *
 * - DescribeJob
 *
 * - UpdateJobStatus
 */
export const updateJobStatus: API.OperationMethod<
  UpdateJobStatusRequest,
  UpdateJobStatusResult,
  UpdateJobStatusError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateJobStatusRequest,
  output: UpdateJobStatusResult,
  errors: [
    BadRequestException,
    InternalServiceException,
    JobStatusException,
    NotFoundException,
    TooManyRequestsException,
    InvalidRequest,
    JobStatusTransitionForbidden,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateJobStatus",
  endpointHostPrefix: "{AccountId}.",
}));

export type UpdateStorageLensGroupError = CommonErrors;
/**
 * Updates the existing Storage Lens group.
 *
 * To use this operation, you must have the permission to perform the
 * `s3:UpdateStorageLensGroup` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 *
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */
export const updateStorageLensGroup: API.OperationMethod<
  UpdateStorageLensGroupRequest,
  UpdateStorageLensGroupResponse,
  UpdateStorageLensGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateStorageLensGroupRequest,
  output: UpdateStorageLensGroupResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStorageLensGroup",
  endpointHostPrefix: "{AccountId}.",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          IdentityCenterArn: S.String,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/accessgrantsinstance/identitycenter" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "AssociateAccessGrantsIdentityCenterRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateAccessGrantsIdentityCenterResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ S3SubPrefix: S.optional(S.String) })).annotate({
        identifier: "AccessGrantsLocationConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GranteeType: S.optional(GranteeType), GranteeIdentifier: S.optional(S.String) }),
      ).annotate({ identifier: "Grantee" });
    case 4:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ Tag.pipe(/*@__PURE__*/ T.XmlName("Tag")).annotate({ identifier: "Tag" }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          AccessGrantsLocationId: S.String,
          AccessGrantsLocationConfiguration: S.optional(AccessGrantsLocationConfiguration),
          Grantee: Grantee,
          Permission: Permission,
          ApplicationArn: S.optional(S.String),
          S3PrefixType: S.optional(S3PrefixType),
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/accessgrantsinstance/grant" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "CreateAccessGrantRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString),
          AccessGrantId: S.optional(S.String),
          AccessGrantArn: S.optional(S.String),
          Grantee: S.optional(Grantee),
          AccessGrantsLocationId: S.optional(S.String),
          AccessGrantsLocationConfiguration: S.optional(AccessGrantsLocationConfiguration),
          Permission: S.optional(Permission),
          ApplicationArn: S.optional(S.String),
          GrantScope: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CreateAccessGrantResult" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          IdentityCenterArn: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/accessgrantsinstance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "CreateAccessGrantsInstanceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString),
          AccessGrantsInstanceId: S.optional(S.String),
          AccessGrantsInstanceArn: S.optional(S.String),
          IdentityCenterArn: S.optional(S.String),
          IdentityCenterInstanceArn: S.optional(S.String),
          IdentityCenterApplicationArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateAccessGrantsInstanceResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          LocationScope: S.String,
          IAMRoleArn: S.String,
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/accessgrantsinstance/location" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "CreateAccessGrantsLocationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString),
          AccessGrantsLocationId: S.optional(S.String),
          AccessGrantsLocationArn: S.optional(S.String),
          LocationScope: S.optional(S.String),
          IAMRoleArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateAccessGrantsLocationResult",
      });
    case 4:
      return S.suspend(() => S.Struct({ VpcId: S.String })).annotate({
        identifier: "VpcConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BlockPublicAcls: S.optional(S.Boolean).pipe(T.XmlName("BlockPublicAcls")),
          IgnorePublicAcls: S.optional(S.Boolean).pipe(T.XmlName("IgnorePublicAcls")),
          BlockPublicPolicy: S.optional(S.Boolean).pipe(T.XmlName("BlockPublicPolicy")),
          RestrictPublicBuckets: S.optional(S.Boolean).pipe(T.XmlName("RestrictPublicBuckets")),
        }),
      ).annotate({
        identifier: "PublicAccessBlockConfiguration",
      });
    case 6:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Prefix")));
    case 7:
      return S.Array(/*@__PURE__*/ ScopePermission.pipe(/*@__PURE__*/ T.XmlName("Permission")));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Prefixes: S.optional(PrefixesList).pipe(T.XmlName("Prefixes")),
          Permissions: S.optional(ScopePermissionList).pipe(T.XmlName("Permissions")),
        }),
      ).annotate({ identifier: "Scope" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
          Bucket: S.String.pipe(T.ContextParam("Bucket")),
          VpcConfiguration: S.optional(VpcConfiguration),
          PublicAccessBlockConfiguration: S.optional(PublicAccessBlockConfiguration),
          BucketAccountId: S.optional(S.String),
          Scope: S.optional(Scope),
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/accesspoint/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "CreateAccessPointRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccessPointArn: S.optional(S.String), Alias: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "CreateAccessPointResult" });
    case 3:
      return S.Array(
        /*@__PURE__*/ ObjectLambdaAllowedFeature.pipe(/*@__PURE__*/ T.XmlName("AllowedFeature")),
      );
    case 4:
      return S.Array(
        /*@__PURE__*/ ObjectLambdaTransformationConfigurationAction.pipe(
          /*@__PURE__*/ T.XmlName("Action"),
        ),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ FunctionArn: S.String, FunctionPayload: S.optional(S.String) }),
      ).annotate({ identifier: "AwsLambdaTransformation" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ AwsLambda: AwsLambdaTransformation })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Actions: ObjectLambdaTransformationConfigurationActionsList,
          ContentTransformation: ObjectLambdaContentTransformation,
        }),
      ).annotate({
        identifier: "ObjectLambdaTransformationConfiguration",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ ObjectLambdaTransformationConfiguration.pipe(
          /*@__PURE__*/ T.XmlName("TransformationConfiguration"),
        ).annotate({
          identifier: "ObjectLambdaTransformationConfiguration",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          SupportingAccessPoint: S.String,
          CloudWatchMetricsEnabled: S.optional(S.Boolean),
          AllowedFeatures: S.optional(ObjectLambdaAllowedFeaturesList),
          TransformationConfigurations: ObjectLambdaTransformationConfigurationsList,
        }),
      ).annotate({
        identifier: "ObjectLambdaConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
          Configuration: ObjectLambdaConfiguration,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/accesspointforobjectlambda/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "CreateAccessPointForObjectLambdaRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(S.String),
          Status: S.optional(ObjectLambdaAccessPointAliasStatus),
        }),
      ).annotate({
        identifier: "ObjectLambdaAccessPointAlias",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ObjectLambdaAccessPointArn: S.optional(S.String),
          Alias: S.optional(ObjectLambdaAccessPointAlias),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateAccessPointForObjectLambdaResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ LocationConstraint: S.optional(BucketLocationConstraint) }),
      ).annotate({
        identifier: "CreateBucketConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ACL: S.optional(BucketCannedACL).pipe(T.HttpHeader("x-amz-acl")),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
          CreateBucketConfiguration: S.optional(CreateBucketConfiguration)
            .pipe(T.HttpPayload(), T.XmlName("CreateBucketConfiguration"))
            .annotate({ identifier: "CreateBucketConfiguration" }),
          GrantFullControl: S.optional(S.String).pipe(T.HttpHeader("x-amz-grant-full-control")),
          GrantRead: S.optional(S.String).pipe(T.HttpHeader("x-amz-grant-read")),
          GrantReadACP: S.optional(S.String).pipe(T.HttpHeader("x-amz-grant-read-acp")),
          GrantWrite: S.optional(S.String).pipe(T.HttpHeader("x-amz-grant-write")),
          GrantWriteACP: S.optional(S.String).pipe(T.HttpHeader("x-amz-grant-write-acp")),
          ObjectLockEnabledForBucket: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amz-bucket-object-lock-enabled"),
          ),
          OutpostId: S.optional(S.String).pipe(
            T.HttpHeader("x-amz-outpost-id"),
            T.ContextParam("OutpostId"),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/bucket/{Bucket}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBucketRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Location: S.optional(S.String).pipe(T.HttpHeader("Location")),
          BucketArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CreateBucketResult" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          FunctionArn: S.optional(S.String),
          InvocationSchemaVersion: S.optional(S.String),
          UserArguments: S.optional(UserArguments),
        }),
      ).annotate({ identifier: "LambdaInvokeOperation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TypeIdentifier: S.optional(S3GranteeTypeIdentifier),
          Identifier: S.optional(S.String),
          DisplayName: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Grantee" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Grantee: S.optional(S3Grantee), Permission: S.optional(S3Permission) }),
      ).annotate({ identifier: "S3Grant" });
    case 4:
      return S.Array(S3Grant);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          CacheControl: S.optional(S.String),
          ContentDisposition: S.optional(S.String),
          ContentEncoding: S.optional(S.String),
          ContentLanguage: S.optional(S.String),
          UserMetadata: S.optional(S3UserMetadata),
          ContentLength: S.optional(S.Number),
          ContentMD5: S.optional(S.String),
          ContentType: S.optional(S.String),
          HttpExpiresDate: S.optional(T.DateFromString),
          RequesterCharged: S.optional(S.Boolean),
          SSEAlgorithm: S.optional(S3SSEAlgorithm),
        }),
      ).annotate({ identifier: "S3ObjectMetadata" });
    case 7:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "S3Tag",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S3Tag);
    case 1:
      return S.suspend(() =>
        S.Struct({ Days: S.optional(S.Number), Years: S.optional(S.Number) }),
      ).annotate({
        identifier: "S3ObjectLockEventHoldDuration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TargetResource: S.optional(S.String),
          CannedAccessControlList: S.optional(S3CannedAccessControlList),
          AccessControlGrants: S.optional(S3GrantList),
          MetadataDirective: S.optional(S3MetadataDirective),
          AnnotationDirective: S.optional(S3AnnotationDirective),
          ModifiedSinceConstraint: S.optional(T.DateFromString),
          NewObjectMetadata: S.optional(S3ObjectMetadata),
          NewObjectTagging: S.optional(S3TagSet),
          RedirectLocation: S.optional(S.String),
          RequesterPays: S.optional(S.Boolean),
          StorageClass: S.optional(S3StorageClass),
          UnModifiedSinceConstraint: S.optional(T.DateFromString),
          SSEAwsKmsKeyId: S.optional(S.String),
          TargetKeyPrefix: S.optional(S.String),
          ObjectLockLegalHoldStatus: S.optional(S3ObjectLockLegalHoldStatus),
          ObjectLockMode: S.optional(S3ObjectLockMode),
          ObjectLockRetainUntilDate: S.optional(T.DateFromString),
          BucketKeyEnabled: S.optional(S.Boolean),
          ChecksumAlgorithm: S.optional(S3ChecksumAlgorithm),
          ObjectLockEventHold: S.optional(S3ObjectLockEventHold),
          ObjectLockEventHoldDuration: S.optional(S3ObjectLockEventHoldDuration),
        }),
      ).annotate({ identifier: "S3CopyObjectOperation" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ID: S.optional(S.String), DisplayName: S.optional(S.String) }),
      ).annotate({ identifier: "S3ObjectOwner" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Owner: S3ObjectOwner, Grants: S.optional(S3GrantList) }),
      ).annotate({ identifier: "S3AccessControlList" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccessControlList: S.optional(S3AccessControlList),
          CannedAccessControlList: S.optional(S3CannedAccessControlList),
        }),
      ).annotate({ identifier: "S3AccessControlPolicy" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccessControlPolicy: S.optional(S3AccessControlPolicy) }),
      ).annotate({ identifier: "S3SetObjectAclOperation" });
    case 7:
      return S.suspend(() => S.Struct({ TagSet: S.optional(S3TagSet) })).annotate({
        identifier: "S3SetObjectTaggingOperation",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "S3DeleteObjectTaggingOperation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ExpirationInDays: S.optional(S.Number),
          GlacierJobTier: S.optional(S3GlacierJobTier),
        }),
      ).annotate({
        identifier: "S3InitiateRestoreObjectOperation",
      });
    case 2:
      return S.suspend(() => S.Struct({ Status: S3ObjectLockLegalHoldStatus })).annotate({
        identifier: "S3ObjectLockLegalHold",
      });
    case 3:
      return S.suspend(() => S.Struct({ LegalHold: S3ObjectLockLegalHold })).annotate({
        identifier: "S3SetObjectLegalHoldOperation",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Days: S.optional(S.Number), Years: S.optional(S.Number) }),
      ).annotate({
        identifier: "S3ObjectLockRetentionEventHoldDuration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RetainUntilDate: S.optional(T.DateFromString),
          Mode: S.optional(S3ObjectLockRetentionMode),
          EventHold: S.optional(S3ObjectLockRetentionEventHold),
          EventHoldDuration: S.optional(S3ObjectLockRetentionEventHoldDuration),
        }),
      ).annotate({ identifier: "S3Retention" });
    case 6:
      return S.suspend(() =>
        S.Struct({ BypassGovernanceRetention: S.optional(S.Boolean), Retention: S3Retention }),
      ).annotate({
        identifier: "S3SetObjectRetentionOperation",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "S3ReplicateObjectOperation",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChecksumAlgorithm: S.optional(ComputeObjectChecksumAlgorithm),
          ChecksumType: S.optional(ComputeObjectChecksumType),
        }),
      ).annotate({
        identifier: "S3ComputeObjectChecksumOperation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ KMSKeyArn: S.String, BucketKeyEnabled: S.optional(S.Boolean) }).pipe(
          T.XmlName("SSE-KMS"),
        ),
      ).annotate({
        identifier: "S3UpdateObjectEncryptionSSEKMS",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SSEKMS: S.optional(S3UpdateObjectEncryptionSSEKMS)
            .pipe(T.XmlName("SSE-KMS"))
            .annotate({ identifier: "S3UpdateObjectEncryptionSSEKMS" }),
        }),
      ).annotate({ identifier: "ObjectEncryption" });
    case 3:
      return S.suspend(() => S.Struct({ ObjectEncryption: S.optional(ObjectEncryption) })).annotate(
        {
          identifier: "S3UpdateObjectEncryptionOperation",
        },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          LambdaInvoke: S.optional(LambdaInvokeOperation),
          S3PutObjectCopy: S.optional(S3CopyObjectOperation),
          S3PutObjectAcl: S.optional(S3SetObjectAclOperation),
          S3PutObjectTagging: S.optional(S3SetObjectTaggingOperation),
          S3DeleteObjectTagging: S.optional(S3DeleteObjectTaggingOperation),
          S3InitiateRestoreObject: S.optional(S3InitiateRestoreObjectOperation),
          S3PutObjectLegalHold: S.optional(S3SetObjectLegalHoldOperation),
          S3PutObjectRetention: S.optional(S3SetObjectRetentionOperation),
          S3ReplicateObject: S.optional(S3ReplicateObjectOperation),
          S3ComputeObjectChecksum: S.optional(S3ComputeObjectChecksumOperation),
          S3UpdateObjectEncryption: S.optional(S3UpdateObjectEncryptionOperation),
        }),
      ).annotate({ identifier: "JobOperation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Format: S.optional(JobReportFormat),
          Enabled: S.Boolean,
          Prefix: S.optional(S.String),
          ReportScope: S.optional(JobReportScope),
          ExpectedBucketOwner: S.optional(S.String),
        }),
      ).annotate({ identifier: "JobReport" });
    case 6:
      return S.Array(JobManifestFieldName);
    case 7:
      return S.suspend(() =>
        S.Struct({ Format: JobManifestFormat, Fields: S.optional(JobManifestFieldList) }),
      ).annotate({ identifier: "JobManifestSpec" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ObjectArn: S.String, ObjectVersionId: S.optional(S.String), ETag: S.String }),
      ).annotate({ identifier: "JobManifestLocation" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Spec: JobManifestSpec, Location: JobManifestLocation }),
      ).annotate({ identifier: "JobManifest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(T.XmlName("SSE-S3"))).annotate({
        identifier: "SSES3Encryption",
      });
    case 3:
      return S.suspend(() => S.Struct({ KeyId: S.String }).pipe(T.XmlName("SSE-KMS"))).annotate({
        identifier: "SSEKMSEncryption",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SSES3: S.optional(SSES3Encryption)
            .pipe(T.XmlName("SSE-S3"))
            .annotate({ identifier: "SSES3Encryption" }),
          SSEKMS: S.optional(SSEKMSEncryption)
            .pipe(T.XmlName("SSE-KMS"))
            .annotate({ identifier: "SSEKMSEncryption" }),
        }),
      ).annotate({
        identifier: "GeneratedManifestEncryption",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ExpectedManifestBucketOwner: S.optional(S.String),
          Bucket: S.String,
          ManifestPrefix: S.optional(S.String),
          ManifestEncryption: S.optional(GeneratedManifestEncryption),
          ManifestFormat: GeneratedManifestFormat,
        }),
      ).annotate({ identifier: "S3ManifestOutputLocation" });
    case 6:
      return S.Array(ReplicationStatus);
    case 7:
      return S.Array(S.String);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MatchAnyPrefix: S.optional(NonEmptyMaxLength1024StringList),
          MatchAnySuffix: S.optional(NonEmptyMaxLength1024StringList),
          MatchAnySubstring: S.optional(NonEmptyMaxLength1024StringList),
        }),
      ).annotate({ identifier: "KeyNameConstraint" });
    case 1:
      return S.Array(S3StorageClass);
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "SSES3Filter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ KmsKeyArn: S.optional(S.String), BucketKeyEnabled: S.optional(S.Boolean) }),
      ).annotate({ identifier: "SSEKMSFilter" });
    case 4:
      return S.suspend(() => S.Struct({ KmsKeyArn: S.optional(S.String) })).annotate({
        identifier: "DSSEKMSFilter",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "SSECFilter",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "NotSSEFilter",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          SSES3: /*@__PURE__*/ SSES3Filter.pipe(/*@__PURE__*/ T.XmlName("SSE-S3")).annotate({
            identifier: "SSES3Filter",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          SSEKMS: /*@__PURE__*/ SSEKMSFilter.pipe(/*@__PURE__*/ T.XmlName("SSE-KMS")).annotate({
            identifier: "SSEKMSFilter",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          DSSEKMS: /*@__PURE__*/ DSSEKMSFilter.pipe(/*@__PURE__*/ T.XmlName("DSSE-KMS")).annotate({
            identifier: "DSSEKMSFilter",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          SSEC: /*@__PURE__*/ SSECFilter.pipe(/*@__PURE__*/ T.XmlName("SSE-C")).annotate({
            identifier: "SSECFilter",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          NOTSSE: /*@__PURE__*/ NotSSEFilter.pipe(/*@__PURE__*/ T.XmlName("NOT-SSE")).annotate({
            identifier: "NotSSEFilter",
          }),
        }),
      ]);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ ObjectEncryptionFilter.pipe(/*@__PURE__*/ T.XmlName("ObjectEncryption")),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          EligibleForReplication: S.optional(S.Boolean),
          CreatedAfter: S.optional(T.DateFromString),
          CreatedBefore: S.optional(T.DateFromString),
          ObjectReplicationStatuses: S.optional(ReplicationStatusFilterList),
          KeyNameConstraint: S.optional(KeyNameConstraint),
          ObjectSizeGreaterThanBytes: S.optional(S.Number),
          ObjectSizeLessThanBytes: S.optional(S.Number),
          MatchAnyStorageClass: S.optional(StorageClassList),
          MatchAnyObjectEncryption: S.optional(ObjectEncryptionFilterList),
        }),
      ).annotate({
        identifier: "JobManifestGeneratorFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ExpectedBucketOwner: S.optional(S.String),
          SourceBucket: S.String,
          ManifestOutputLocation: S.optional(S3ManifestOutputLocation),
          Filter: S.optional(JobManifestGeneratorFilter),
          EnableManifestOutput: S.Boolean,
        }),
      ).annotate({ identifier: "S3JobManifestGenerator" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ S3JobManifestGenerator: S3JobManifestGenerator })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          ConfirmationRequired: S.optional(S.Boolean),
          Operation: JobOperation,
          Report: JobReport,
          ClientRequestToken: S.String.pipe(T.IdempotencyToken()),
          Manifest: S.optional(JobManifest),
          Description: S.optional(S.String),
          Priority: S.Number,
          RoleArn: S.String,
          Tags: S.optional(S3TagSet),
          ManifestGenerator: S.optional(JobManifestGenerator),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "CreateJobRequest" });
    case 5:
      return S.suspend(() => S.Struct({ JobId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateJobResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Bucket: S.String, BucketAccountId: S.optional(S.String) }),
      ).annotate({ identifier: "Region" });
    case 7:
      return S.Array(
        /*@__PURE__*/ Region.pipe(/*@__PURE__*/ T.XmlName("Region")).annotate({
          identifier: "Region",
        }),
      );
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          PublicAccessBlock: S.optional(PublicAccessBlockConfiguration),
          Regions: RegionCreationList,
        }),
      ).annotate({
        identifier: "CreateMultiRegionAccessPointInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Details: CreateMultiRegionAccessPointInput,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/async-requests/mrap/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "CreateMultiRegionAccessPointRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ RequestTokenARN: S.optional(S.String) }).pipe(ns)).annotate(
        {
          identifier: "CreateMultiRegionAccessPointResult",
        },
      );
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Prefix")));
    case 4:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Suffix")));
    case 5:
      return S.Array(
        /*@__PURE__*/ S3Tag.pipe(/*@__PURE__*/ T.XmlName("Tag")).annotate({ identifier: "S3Tag" }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ DaysGreaterThan: S.optional(S.Number), DaysLessThan: S.optional(S.Number) }),
      ).annotate({ identifier: "MatchObjectAge" });
    case 7:
      return S.suspend(() =>
        S.Struct({ BytesGreaterThan: S.optional(S.Number), BytesLessThan: S.optional(S.Number) }),
      ).annotate({ identifier: "MatchObjectSize" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MatchAnyPrefix: S.optional(MatchAnyPrefix),
          MatchAnySuffix: S.optional(MatchAnySuffix),
          MatchAnyTag: S.optional(MatchAnyTag),
          MatchObjectAge: S.optional(MatchObjectAge),
          MatchObjectSize: S.optional(MatchObjectSize),
        }),
      ).annotate({
        identifier: "StorageLensGroupAndOperator",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MatchAnyPrefix: S.optional(MatchAnyPrefix),
          MatchAnySuffix: S.optional(MatchAnySuffix),
          MatchAnyTag: S.optional(MatchAnyTag),
          MatchObjectAge: S.optional(MatchObjectAge),
          MatchObjectSize: S.optional(MatchObjectSize),
        }),
      ).annotate({
        identifier: "StorageLensGroupOrOperator",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MatchAnyPrefix: S.optional(MatchAnyPrefix),
          MatchAnySuffix: S.optional(MatchAnySuffix),
          MatchAnyTag: S.optional(MatchAnyTag),
          MatchObjectAge: S.optional(MatchObjectAge),
          MatchObjectSize: S.optional(MatchObjectSize),
          And: S.optional(StorageLensGroupAndOperator),
          Or: S.optional(StorageLensGroupOrOperator),
        }),
      ).annotate({ identifier: "StorageLensGroupFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Filter: StorageLensGroupFilter,
          StorageLensGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "StorageLensGroup" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          StorageLensGroup: StorageLensGroup,
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/storagelensgroup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "CreateStorageLensGroupRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateStorageLensGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          AccessGrantId: S.String.pipe(T.HttpLabel("AccessGrantId")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/v20180820/accessgrantsinstance/grant/{AccessGrantId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "DeleteAccessGrantRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessGrantResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/accessgrantsinstance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessGrantsInstanceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessGrantsInstanceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/accessgrantsinstance/resourcepolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessGrantsInstanceResourcePolicyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessGrantsInstanceResourcePolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          AccessGrantsLocationId: S.String.pipe(T.HttpLabel("AccessGrantsLocationId")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessGrantsLocationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessGrantsLocationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/accesspoint/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "DeleteAccessPointRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessPointResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/accesspointforobjectlambda/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessPointForObjectLambdaRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessPointForObjectLambdaResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/accesspoint/{Name}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessPointPolicyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessPointPolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/v20180820/accesspointforobjectlambda/{Name}/policy",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessPointPolicyForObjectLambdaRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessPointPolicyForObjectLambdaResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/accesspoint/{Name}/scope" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({
              RequiresAccountId: { value: true },
              UseS3ExpressControlEndpoint: { value: true },
            }),
          ),
        ),
      ).annotate({
        identifier: "DeleteAccessPointScopeRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessPointScopeResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/bucket/{Bucket}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "DeleteBucketRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteBucketResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/bucket/{Bucket}/lifecycleconfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteBucketLifecycleConfigurationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteBucketLifecycleConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/bucket/{Bucket}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteBucketPolicyRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteBucketPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/bucket/{Bucket}/replication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteBucketReplicationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteBucketReplicationResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/bucket/{Bucket}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteBucketTaggingRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteBucketTaggingResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/jobs/{JobId}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "DeleteJobTaggingRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteJobTaggingResult",
      });
    case 4:
      return S.suspend(() => S.Struct({ Name: S.String })).annotate({
        identifier: "DeleteMultiRegionAccessPointInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Details: DeleteMultiRegionAccessPointInput,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/async-requests/mrap/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteMultiRegionAccessPointRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ RequestTokenARN: S.optional(S.String) }).pipe(ns)).annotate(
        {
          identifier: "DeleteMultiRegionAccessPointResult",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/configuration/publicAccessBlock" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeletePublicAccessBlockRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeletePublicAccessBlockResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigId: S.String.pipe(T.HttpLabel("ConfigId")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/storagelens/{ConfigId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteStorageLensConfigurationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteStorageLensConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConfigId: S.String.pipe(T.HttpLabel("ConfigId")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/storagelens/{ConfigId}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteStorageLensConfigurationTaggingRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteStorageLensConfigurationTaggingResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/storagelensgroup/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DeleteStorageLensGroupRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteStorageLensGroupResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/jobs/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "DescribeJobRequest" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ElapsedTimeInActiveSeconds: S.optional(S.Number) }),
      ).annotate({ identifier: "JobTimers" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TotalNumberOfTasks: S.optional(S.Number),
          NumberOfTasksSucceeded: S.optional(S.Number),
          NumberOfTasksFailed: S.optional(S.Number),
          Timers: S.optional(JobTimers),
        }),
      ).annotate({ identifier: "JobProgressSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({ FailureCode: S.optional(S.String), FailureReason: S.optional(S.String) }),
      ).annotate({ identifier: "JobFailure" });
    case 3:
      return S.Array(JobFailure);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Format: S.optional(GeneratedManifestFormat),
          Location: S.optional(JobManifestLocation),
        }),
      ).annotate({
        identifier: "S3GeneratedManifestDescriptor",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          ConfirmationRequired: S.optional(S.Boolean),
          Description: S.optional(S.String),
          JobArn: S.optional(S.String),
          Status: S.optional(JobStatus),
          Manifest: S.optional(JobManifest),
          Operation: S.optional(JobOperation),
          Priority: S.optional(S.Number),
          ProgressSummary: S.optional(JobProgressSummary),
          StatusUpdateReason: S.optional(S.String),
          FailureReasons: S.optional(JobFailureList),
          Report: S.optional(JobReport),
          CreationTime: S.optional(T.DateFromString),
          TerminationDate: S.optional(T.DateFromString),
          RoleArn: S.optional(S.String),
          SuspendedDate: S.optional(T.DateFromString),
          SuspendedCause: S.optional(S.String),
          ManifestGenerator: S.optional(JobManifestGenerator),
          GeneratedManifestDescriptor: S.optional(S3GeneratedManifestDescriptor),
        }),
      ).annotate({ identifier: "JobDescriptor" });
    case 6:
      return S.suspend(() => S.Struct({ Job: S.optional(JobDescriptor) }).pipe(ns)).annotate({
        identifier: "DescribeJobResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          RequestTokenARN: S.String.pipe(T.HttpLabel("RequestTokenARN")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/async-requests/mrap/{RequestTokenARN+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DescribeMultiRegionAccessPointOperationRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Name: S.String, Policy: S.String })).annotate({
        identifier: "PutMultiRegionAccessPointPolicyInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CreateMultiRegionAccessPointRequest: S.optional(CreateMultiRegionAccessPointInput),
          DeleteMultiRegionAccessPointRequest: S.optional(DeleteMultiRegionAccessPointInput),
          PutMultiRegionAccessPointPolicyRequest: S.optional(PutMultiRegionAccessPointPolicyInput),
        }),
      ).annotate({ identifier: "AsyncRequestParameters" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), RequestStatus: S.optional(S.String) }),
      ).annotate({
        identifier: "MultiRegionAccessPointRegionalResponse",
      });
    case 3:
      return S.Array(
        /*@__PURE__*/ MultiRegionAccessPointRegionalResponse.pipe(
          /*@__PURE__*/ T.XmlName("Region"),
        ).annotate({
          identifier: "MultiRegionAccessPointRegionalResponse",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ Regions: S.optional(MultiRegionAccessPointRegionalResponseList) }),
      ).annotate({
        identifier: "MultiRegionAccessPointsAsyncResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(S.String),
          Message: S.optional(S.String),
          Resource: S.optional(S.String),
          RequestId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AsyncErrorDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MultiRegionAccessPointDetails: S.optional(MultiRegionAccessPointsAsyncResponse),
          ErrorDetails: S.optional(AsyncErrorDetails),
        }),
      ).annotate({ identifier: "AsyncResponseDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CreationTime: S.optional(T.DateFromString),
          Operation: S.optional(AsyncOperationName),
          RequestTokenARN: S.optional(S.String),
          RequestParameters: S.optional(AsyncRequestParameters),
          RequestStatus: S.optional(S.String),
          ResponseDetails: S.optional(AsyncResponseDetails),
        }),
      ).annotate({ identifier: "AsyncOperation" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AsyncOperation: S.optional(AsyncOperation) }).pipe(ns),
      ).annotate({
        identifier: "DescribeMultiRegionAccessPointOperationResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/accessgrantsinstance/identitycenter" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "DissociateAccessGrantsIdentityCenterRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DissociateAccessGrantsIdentityCenterResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          AccessGrantId: S.String.pipe(T.HttpLabel("AccessGrantId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstance/grant/{AccessGrantId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "GetAccessGrantRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString),
          AccessGrantId: S.optional(S.String),
          AccessGrantArn: S.optional(S.String),
          Grantee: S.optional(Grantee),
          Permission: S.optional(Permission),
          AccessGrantsLocationId: S.optional(S.String),
          AccessGrantsLocationConfiguration: S.optional(AccessGrantsLocationConfiguration),
          GrantScope: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetAccessGrantResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessGrantsInstanceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessGrantsInstanceArn: S.optional(S.String),
          AccessGrantsInstanceId: S.optional(S.String),
          IdentityCenterArn: S.optional(S.String),
          IdentityCenterInstanceArn: S.optional(S.String),
          IdentityCenterApplicationArn: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString),
        }).pipe(ns),
      ).annotate({
        identifier: "GetAccessGrantsInstanceResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          S3Prefix: S.String.pipe(T.HttpQuery("s3prefix")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstance/prefix" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessGrantsInstanceForPrefixRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccessGrantsInstanceArn: S.optional(S.String),
          AccessGrantsInstanceId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetAccessGrantsInstanceForPrefixResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstance/resourcepolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessGrantsInstanceResourcePolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Policy: S.optional(S.String),
          Organization: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString),
        }).pipe(ns),
      ).annotate({
        identifier: "GetAccessGrantsInstanceResourcePolicyResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          AccessGrantsLocationId: S.String.pipe(T.HttpLabel("AccessGrantsLocationId")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessGrantsLocationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString),
          AccessGrantsLocationId: S.optional(S.String),
          AccessGrantsLocationArn: S.optional(S.String),
          LocationScope: S.optional(S.String),
          IAMRoleArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetAccessGrantsLocationResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspoint/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "GetAccessPointRequest" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Bucket: S.optional(S.String),
          NetworkOrigin: S.optional(NetworkOrigin),
          VpcConfiguration: S.optional(VpcConfiguration),
          PublicAccessBlockConfiguration: S.optional(PublicAccessBlockConfiguration),
          CreationDate: S.optional(T.DateFromString),
          Alias: S.optional(S.String),
          AccessPointArn: S.optional(S.String),
          Endpoints: S.optional(Endpoints),
          BucketAccountId: S.optional(S.String),
          DataSourceId: S.optional(S.String),
          DataSourceType: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetAccessPointResult" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/v20180820/accesspointforobjectlambda/{Name}/configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessPointConfigurationForObjectLambdaRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Configuration: S.optional(ObjectLambdaConfiguration) }).pipe(ns),
      ).annotate({
        identifier: "GetAccessPointConfigurationForObjectLambdaResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspointforobjectlambda/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessPointForObjectLambdaRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          PublicAccessBlockConfiguration: S.optional(PublicAccessBlockConfiguration),
          CreationDate: S.optional(T.DateFromString),
          Alias: S.optional(ObjectLambdaAccessPointAlias),
        }).pipe(ns),
      ).annotate({
        identifier: "GetAccessPointForObjectLambdaResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspoint/{Name}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessPointPolicyRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetAccessPointPolicyResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspointforobjectlambda/{Name}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessPointPolicyForObjectLambdaRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetAccessPointPolicyForObjectLambdaResult",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspoint/{Name}/policyStatus" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessPointPolicyStatusRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ IsPublic: S.optional(S.Boolean).pipe(T.XmlName("IsPublic")) }),
      ).annotate({ identifier: "PolicyStatus" });
    case 2:
      return S.suspend(() =>
        S.Struct({ PolicyStatus: S.optional(PolicyStatus) }).pipe(ns),
      ).annotate({
        identifier: "GetAccessPointPolicyStatusResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/v20180820/accesspointforobjectlambda/{Name}/policyStatus",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessPointPolicyStatusForObjectLambdaRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ PolicyStatus: S.optional(PolicyStatus) }).pipe(ns),
      ).annotate({
        identifier: "GetAccessPointPolicyStatusForObjectLambdaResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspoint/{Name}/scope" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({
              RequiresAccountId: { value: true },
              UseS3ExpressControlEndpoint: { value: true },
            }),
          ),
        ),
      ).annotate({
        identifier: "GetAccessPointScopeRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Scope: S.optional(Scope) }).pipe(ns)).annotate({
        identifier: "GetAccessPointScopeResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/bucket/{Bucket}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "GetBucketRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          PublicAccessBlockEnabled: S.optional(S.Boolean),
          CreationDate: S.optional(T.DateFromString),
        }).pipe(ns),
      ).annotate({ identifier: "GetBucketResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/bucket/{Bucket}/lifecycleconfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetBucketLifecycleConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Date: S.optional(T.DateFromString),
          Days: S.optional(S.Number),
          ExpiredObjectDeleteMarker: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LifecycleExpiration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Prefix: S.optional(S.String),
          Tags: S.optional(S3TagSet),
          ObjectSizeGreaterThan: S.optional(S.Number),
          ObjectSizeLessThan: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LifecycleRuleAndOperator" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Prefix: S.optional(S.String),
          Tag: S.optional(S3Tag),
          And: S.optional(LifecycleRuleAndOperator),
          ObjectSizeGreaterThan: S.optional(S.Number),
          ObjectSizeLessThan: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LifecycleRuleFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Date: S.optional(T.DateFromString),
          Days: S.optional(S.Number),
          StorageClass: S.optional(TransitionStorageClass),
        }),
      ).annotate({ identifier: "Transition" });
    case 6:
      return S.Array(
        /*@__PURE__*/ Transition.pipe(/*@__PURE__*/ T.XmlName("Transition")).annotate({
          identifier: "Transition",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          NoncurrentDays: S.optional(S.Number),
          StorageClass: S.optional(TransitionStorageClass),
        }),
      ).annotate({
        identifier: "NoncurrentVersionTransition",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ NoncurrentVersionTransition.pipe(
          /*@__PURE__*/ T.XmlName("NoncurrentVersionTransition"),
        ).annotate({
          identifier: "NoncurrentVersionTransition",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          NoncurrentDays: S.optional(S.Number),
          NewerNoncurrentVersions: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "NoncurrentVersionExpiration",
      });
    case 2:
      return S.suspend(() => S.Struct({ DaysAfterInitiation: S.optional(S.Number) })).annotate({
        identifier: "AbortIncompleteMultipartUpload",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Expiration: S.optional(LifecycleExpiration),
          ID: S.optional(S.String),
          Filter: S.optional(LifecycleRuleFilter),
          Status: ExpirationStatus,
          Transitions: S.optional(TransitionList),
          NoncurrentVersionTransitions: S.optional(NoncurrentVersionTransitionList),
          NoncurrentVersionExpiration: S.optional(NoncurrentVersionExpiration),
          AbortIncompleteMultipartUpload: S.optional(AbortIncompleteMultipartUpload),
        }),
      ).annotate({ identifier: "LifecycleRule" });
    case 4:
      return S.Array(
        /*@__PURE__*/ LifecycleRule.pipe(/*@__PURE__*/ T.XmlName("Rule")).annotate({
          identifier: "LifecycleRule",
        }),
      );
    case 5:
      return S.suspend(() => S.Struct({ Rules: S.optional(LifecycleRules) }).pipe(ns)).annotate({
        identifier: "GetBucketLifecycleConfigurationResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/bucket/{Bucket}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "GetBucketPolicyRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetBucketPolicyResult",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/bucket/{Bucket}/replication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetBucketReplicationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Prefix: S.optional(S.String), Tags: S.optional(S3TagSet) }),
      ).annotate({
        identifier: "ReplicationRuleAndOperator",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Prefix: S.optional(S.String),
          Tag: S.optional(S3Tag),
          And: S.optional(ReplicationRuleAndOperator),
        }),
      ).annotate({ identifier: "ReplicationRuleFilter" });
    case 3:
      return S.suspend(() => S.Struct({ Status: SseKmsEncryptedObjectsStatus })).annotate({
        identifier: "SseKmsEncryptedObjects",
      });
    case 4:
      return S.suspend(() => S.Struct({ Status: ReplicaModificationsStatus })).annotate({
        identifier: "ReplicaModifications",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SseKmsEncryptedObjects: S.optional(SseKmsEncryptedObjects),
          ReplicaModifications: S.optional(ReplicaModifications),
        }),
      ).annotate({ identifier: "SourceSelectionCriteria" });
    case 6:
      return S.suspend(() => S.Struct({ Status: ExistingObjectReplicationStatus })).annotate({
        identifier: "ExistingObjectReplication",
      });
    case 7:
      return S.suspend(() => S.Struct({ Minutes: S.optional(S.Number) })).annotate({
        identifier: "ReplicationTimeValue",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Status: ReplicationTimeStatus, Time: ReplicationTimeValue }),
      ).annotate({ identifier: "ReplicationTime" });
    case 1:
      return S.suspend(() => S.Struct({ Owner: OwnerOverride })).annotate({
        identifier: "AccessControlTranslation",
      });
    case 2:
      return S.suspend(() => S.Struct({ ReplicaKmsKeyID: S.optional(S.String) })).annotate({
        identifier: "EncryptionConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Status: MetricsStatus, EventThreshold: S.optional(ReplicationTimeValue) }),
      ).annotate({ identifier: "Metrics" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Account: S.optional(S.String),
          Bucket: S.String,
          ReplicationTime: S.optional(ReplicationTime),
          AccessControlTranslation: S.optional(AccessControlTranslation),
          EncryptionConfiguration: S.optional(EncryptionConfiguration),
          Metrics: S.optional(Metrics),
          StorageClass: S.optional(ReplicationStorageClass),
        }),
      ).annotate({ identifier: "Destination" });
    case 5:
      return S.suspend(() => S.Struct({ Status: DeleteMarkerReplicationStatus })).annotate({
        identifier: "DeleteMarkerReplication",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ID: S.optional(S.String),
          Priority: S.optional(S.Number),
          Prefix: S.optional(S.String),
          Filter: S.optional(ReplicationRuleFilter),
          Status: ReplicationRuleStatus,
          SourceSelectionCriteria: S.optional(SourceSelectionCriteria),
          ExistingObjectReplication: S.optional(ExistingObjectReplication),
          Destination: Destination,
          DeleteMarkerReplication: S.optional(DeleteMarkerReplication),
          Bucket: S.String,
        }),
      ).annotate({ identifier: "ReplicationRule" });
    case 7:
      return S.Array(
        /*@__PURE__*/ ReplicationRule.pipe(/*@__PURE__*/ T.XmlName("Rule")).annotate({
          identifier: "ReplicationRule",
        }),
      );
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Role: S.String, Rules: ReplicationRules })).annotate({
        identifier: "ReplicationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ReplicationConfiguration: S.optional(ReplicationConfiguration) }).pipe(ns),
      ).annotate({
        identifier: "GetBucketReplicationResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/bucket/{Bucket}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "GetBucketTaggingRequest" });
    case 3:
      return S.suspend(() => S.Struct({ TagSet: S3TagSet }).pipe(ns)).annotate({
        identifier: "GetBucketTaggingResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/bucket/{Bucket}/versioning" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetBucketVersioningRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(BucketVersioningStatus),
          MFADelete: S.optional(MFADeleteStatus).pipe(T.XmlName("MfaDelete")),
        }).pipe(ns),
      ).annotate({
        identifier: "GetBucketVersioningResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Target: S.String.pipe(T.HttpQuery("target")),
          Permission: Permission.pipe(T.HttpQuery("permission")),
          DurationSeconds: S.optional(S.Number).pipe(T.HttpQuery("durationSeconds")),
          Privilege: S.optional(Privilege).pipe(T.HttpQuery("privilege")),
          TargetType: S.optional(S3PrefixType).pipe(T.HttpQuery("targetType")),
          AuditContext: S.optional(S.String).pipe(T.HttpQuery("auditContext")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstance/dataaccess" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "GetDataAccessRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccessKeyId: S.optional(SensitiveString),
          SecretAccessKey: S.optional(SensitiveString),
          SessionToken: S.optional(SensitiveString),
          Expiration: S.optional(T.DateFromString),
        }),
      ).annotate({ identifier: "Credentials" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Credentials: S.optional(Credentials),
          MatchedGrantTarget: S.optional(S.String),
          Grantee: S.optional(Grantee),
        }).pipe(ns),
      ).annotate({ identifier: "GetDataAccessResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/jobs/{JobId}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "GetJobTaggingRequest" });
    case 2:
      return S.suspend(() => S.Struct({ Tags: S.optional(S3TagSet) }).pipe(ns)).annotate({
        identifier: "GetJobTaggingResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/mrap/instances/{Name+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetMultiRegionAccessPointRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Region: S.optional(S.String),
          BucketAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegionReport" });
    case 5:
      return S.Array(
        /*@__PURE__*/ RegionReport.pipe(/*@__PURE__*/ T.XmlName("Region")).annotate({
          identifier: "RegionReport",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Alias: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString),
          PublicAccessBlock: S.optional(PublicAccessBlockConfiguration),
          Status: S.optional(MultiRegionAccessPointStatus),
          Regions: S.optional(RegionReportList),
        }),
      ).annotate({
        identifier: "MultiRegionAccessPointReport",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AccessPoint: S.optional(MultiRegionAccessPointReport) }).pipe(ns),
      ).annotate({
        identifier: "GetMultiRegionAccessPointResult",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/mrap/instances/{Name+}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetMultiRegionAccessPointPolicyRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) })).annotate({
        identifier: "EstablishedMultiRegionAccessPointPolicy",
      });
    case 2:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) })).annotate({
        identifier: "ProposedMultiRegionAccessPointPolicy",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Established: S.optional(EstablishedMultiRegionAccessPointPolicy),
          Proposed: S.optional(ProposedMultiRegionAccessPointPolicy),
        }),
      ).annotate({
        identifier: "MultiRegionAccessPointPolicyDocument",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Policy: S.optional(MultiRegionAccessPointPolicyDocument) }).pipe(ns),
      ).annotate({
        identifier: "GetMultiRegionAccessPointPolicyResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/mrap/instances/{Name+}/policystatus" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetMultiRegionAccessPointPolicyStatusRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Established: S.optional(PolicyStatus) }).pipe(ns)).annotate(
        {
          identifier: "GetMultiRegionAccessPointPolicyStatusResult",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Mrap: S.String.pipe(T.HttpLabel("Mrap")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/mrap/instances/{Mrap+}/routes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetMultiRegionAccessPointRoutesRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Region: S.optional(S.String),
          TrafficDialPercentage: S.Number,
        }),
      ).annotate({
        identifier: "MultiRegionAccessPointRoute",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ MultiRegionAccessPointRoute.pipe(/*@__PURE__*/ T.XmlName("Route")).annotate({
          identifier: "MultiRegionAccessPointRoute",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ Mrap: S.optional(S.String), Routes: S.optional(RouteList) }).pipe(ns),
      ).annotate({
        identifier: "GetMultiRegionAccessPointRoutesResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/configuration/publicAccessBlock" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetPublicAccessBlockRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PublicAccessBlockConfiguration: S.optional(PublicAccessBlockConfiguration)
            .pipe(T.HttpPayload())
            .annotate({ identifier: "PublicAccessBlockConfiguration" }),
        }).pipe(ns),
      ).annotate({
        identifier: "GetPublicAccessBlockOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigId: S.String.pipe(T.HttpLabel("ConfigId")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/storagelens/{ConfigId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetStorageLensConfigurationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ IsEnabled: S.optional(S.Boolean) })).annotate({
        identifier: "ActivityMetrics",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Delimiter: S.optional(S.String),
          MaxDepth: S.optional(S.Number),
          MinStorageBytesPercentage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SelectionCriteria" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IsEnabled: S.optional(S.Boolean),
          SelectionCriteria: S.optional(SelectionCriteria),
        }),
      ).annotate({
        identifier: "PrefixLevelStorageMetrics",
      });
    case 1:
      return S.suspend(() => S.Struct({ StorageMetrics: PrefixLevelStorageMetrics })).annotate({
        identifier: "PrefixLevel",
      });
    case 2:
      return S.suspend(() => S.Struct({ IsEnabled: S.optional(S.Boolean) })).annotate({
        identifier: "AdvancedCostOptimizationMetrics",
      });
    case 3:
      return S.suspend(() => S.Struct({ IsEnabled: S.optional(S.Boolean) })).annotate({
        identifier: "AdvancedDataProtectionMetrics",
      });
    case 4:
      return S.suspend(() => S.Struct({ IsEnabled: S.optional(S.Boolean) })).annotate({
        identifier: "DetailedStatusCodesMetrics",
      });
    case 5:
      return S.suspend(() => S.Struct({ IsEnabled: S.optional(S.Boolean) })).annotate({
        identifier: "AdvancedPerformanceMetrics",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ActivityMetrics: S.optional(ActivityMetrics),
          PrefixLevel: S.optional(PrefixLevel),
          AdvancedCostOptimizationMetrics: S.optional(AdvancedCostOptimizationMetrics),
          AdvancedDataProtectionMetrics: S.optional(AdvancedDataProtectionMetrics),
          DetailedStatusCodesMetrics: S.optional(DetailedStatusCodesMetrics),
          AdvancedPerformanceMetrics: S.optional(AdvancedPerformanceMetrics),
        }),
      ).annotate({ identifier: "BucketLevel" });
    case 7:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Arn")));
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Arn")));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Include: S.optional(StorageLensGroupLevelInclude),
          Exclude: S.optional(StorageLensGroupLevelExclude),
        }),
      ).annotate({
        identifier: "StorageLensGroupLevelSelectionCriteria",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SelectionCriteria: S.optional(StorageLensGroupLevelSelectionCriteria) }),
      ).annotate({ identifier: "StorageLensGroupLevel" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ActivityMetrics: S.optional(ActivityMetrics),
          BucketLevel: S.optional(BucketLevel),
          AdvancedCostOptimizationMetrics: S.optional(AdvancedCostOptimizationMetrics),
          AdvancedDataProtectionMetrics: S.optional(AdvancedDataProtectionMetrics),
          DetailedStatusCodesMetrics: S.optional(DetailedStatusCodesMetrics),
          AdvancedPerformanceMetrics: S.optional(AdvancedPerformanceMetrics),
          StorageLensGroupLevel: S.optional(StorageLensGroupLevel),
        }),
      ).annotate({ identifier: "AccountLevel" });
    case 4:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Arn")));
    case 5:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Region")));
    case 6:
      return S.suspend(() =>
        S.Struct({ Buckets: S.optional(Buckets), Regions: S.optional(Regions) }),
      ).annotate({ identifier: "Include" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Buckets: S.optional(Buckets), Regions: S.optional(Regions) }),
      ).annotate({ identifier: "Exclude" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(T.XmlName("SSE-S3"))).annotate({
        identifier: "SSES3",
      });
    case 1:
      return S.suspend(() => S.Struct({ KeyId: S.String }).pipe(T.XmlName("SSE-KMS"))).annotate({
        identifier: "SSEKMS",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SSES3: S.optional(SSES3).pipe(T.XmlName("SSE-S3")).annotate({ identifier: "SSES3" }),
          SSEKMS: S.optional(SSEKMS).pipe(T.XmlName("SSE-KMS")).annotate({ identifier: "SSEKMS" }),
        }),
      ).annotate({
        identifier: "StorageLensDataExportEncryption",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Format: Format,
          OutputSchemaVersion: OutputSchemaVersion,
          AccountId: S.String,
          Arn: S.String,
          Prefix: S.optional(S.String),
          Encryption: S.optional(StorageLensDataExportEncryption),
        }),
      ).annotate({ identifier: "S3BucketDestination" });
    case 4:
      return S.suspend(() => S.Struct({ IsEnabled: S.Boolean })).annotate({
        identifier: "CloudWatchMetrics",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ IsEnabled: S.Boolean, Encryption: S.optional(StorageLensDataExportEncryption) }),
      ).annotate({
        identifier: "StorageLensTableDestination",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          S3BucketDestination: S.optional(S3BucketDestination),
          CloudWatchMetrics: S.optional(CloudWatchMetrics),
          StorageLensTableDestination: S.optional(StorageLensTableDestination),
        }),
      ).annotate({ identifier: "StorageLensDataExport" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          S3BucketDestination: S.optional(S3BucketDestination),
          StorageLensTableDestination: S.optional(StorageLensTableDestination),
        }),
      ).annotate({
        identifier: "StorageLensExpandedPrefixesDataExport",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Arn: S.String })).annotate({
        identifier: "StorageLensAwsOrg",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          AccountLevel: AccountLevel,
          Include: S.optional(Include),
          Exclude: S.optional(Exclude),
          DataExport: S.optional(StorageLensDataExport),
          ExpandedPrefixesDataExport: S.optional(StorageLensExpandedPrefixesDataExport),
          IsEnabled: S.Boolean,
          AwsOrg: S.optional(StorageLensAwsOrg),
          StorageLensArn: S.optional(S.String),
          PrefixDelimiter: S.optional(S.String),
        }),
      ).annotate({ identifier: "StorageLensConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StorageLensConfiguration: S.optional(StorageLensConfiguration)
            .pipe(T.HttpPayload())
            .annotate({ identifier: "StorageLensConfiguration" }),
        }).pipe(ns),
      ).annotate({
        identifier: "GetStorageLensConfigurationResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConfigId: S.String.pipe(T.HttpLabel("ConfigId")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/storagelens/{ConfigId}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetStorageLensConfigurationTaggingRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "StorageLensTag",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ StorageLensTag.pipe(/*@__PURE__*/ T.XmlName("Tag")).annotate({
          identifier: "StorageLensTag",
        }),
      );
    case 6:
      return S.suspend(() => S.Struct({ Tags: S.optional(StorageLensTags) }).pipe(ns)).annotate({
        identifier: "GetStorageLensConfigurationTaggingResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/storagelensgroup/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "GetStorageLensGroupRequest",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StorageLensGroup: S.optional(StorageLensGroup)
            .pipe(T.HttpPayload())
            .annotate({ identifier: "StorageLensGroup" }),
        }).pipe(ns),
      ).annotate({
        identifier: "GetStorageLensGroupResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          GranteeType: S.optional(GranteeType).pipe(T.HttpQuery("granteetype")),
          GranteeIdentifier: S.optional(S.String).pipe(T.HttpQuery("granteeidentifier")),
          Permission: S.optional(Permission).pipe(T.HttpQuery("permission")),
          GrantScope: S.optional(S.String).pipe(T.HttpQuery("grantscope")),
          ApplicationArn: S.optional(S.String).pipe(T.HttpQuery("application_arn")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstance/grants" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "ListAccessGrantsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString),
          AccessGrantId: S.optional(S.String),
          AccessGrantArn: S.optional(S.String),
          Grantee: S.optional(Grantee),
          Permission: S.optional(Permission),
          AccessGrantsLocationId: S.optional(S.String),
          AccessGrantsLocationConfiguration: S.optional(AccessGrantsLocationConfiguration),
          GrantScope: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAccessGrantEntry" });
    case 3:
      return S.Array(
        /*@__PURE__*/ ListAccessGrantEntry.pipe(/*@__PURE__*/ T.XmlName("AccessGrant")).annotate({
          identifier: "ListAccessGrantEntry",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          AccessGrantsList: S.optional(AccessGrantsList),
        }).pipe(ns),
      ).annotate({ identifier: "ListAccessGrantsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListAccessGrantsInstancesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessGrantsInstanceId: S.optional(S.String),
          AccessGrantsInstanceArn: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString),
          IdentityCenterArn: S.optional(S.String),
          IdentityCenterInstanceArn: S.optional(S.String),
          IdentityCenterApplicationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccessGrantsInstanceEntry",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ ListAccessGrantsInstanceEntry.pipe(
          /*@__PURE__*/ T.XmlName("AccessGrantsInstance"),
        ).annotate({
          identifier: "ListAccessGrantsInstanceEntry",
        }),
      );
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          AccessGrantsInstancesList: S.optional(AccessGrantsInstancesList),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAccessGrantsInstancesResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          LocationScope: S.optional(S.String).pipe(T.HttpQuery("locationscope")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstance/locations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListAccessGrantsLocationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString),
          AccessGrantsLocationId: S.optional(S.String),
          AccessGrantsLocationArn: S.optional(S.String),
          LocationScope: S.optional(S.String),
          IAMRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccessGrantsLocationsEntry",
      });
    case 3:
      return S.Array(
        /*@__PURE__*/ ListAccessGrantsLocationsEntry.pipe(
          /*@__PURE__*/ T.XmlName("AccessGrantsLocation"),
        ).annotate({
          identifier: "ListAccessGrantsLocationsEntry",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          AccessGrantsLocationsList: S.optional(AccessGrantsLocationsList),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAccessGrantsLocationsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.optional(S.String).pipe(T.HttpQuery("bucket"), T.ContextParam("Bucket")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          DataSourceId: S.optional(S.String).pipe(T.HttpQuery("dataSourceId")),
          DataSourceType: S.optional(S.String).pipe(T.HttpQuery("dataSourceType")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspoint" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "ListAccessPointsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          NetworkOrigin: NetworkOrigin,
          VpcConfiguration: S.optional(VpcConfiguration),
          Bucket: S.String,
          AccessPointArn: S.optional(S.String),
          Alias: S.optional(S.String),
          BucketAccountId: S.optional(S.String),
          DataSourceId: S.optional(S.String),
          DataSourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccessPoint" });
    case 7:
      return S.Array(
        /*@__PURE__*/ AccessPoint.pipe(/*@__PURE__*/ T.XmlName("AccessPoint")).annotate({
          identifier: "AccessPoint",
        }),
      );
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccessPointList: S.optional(AccessPointList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListAccessPointsResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          DirectoryBucket: S.optional(S.String).pipe(T.HttpQuery("directoryBucket")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspointfordirectory" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({
              RequiresAccountId: { value: true },
              UseS3ExpressControlEndpoint: { value: true },
            }),
          ),
        ),
      ).annotate({
        identifier: "ListAccessPointsForDirectoryBucketsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccessPointList: S.optional(AccessPointList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAccessPointsForDirectoryBucketsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accesspointforobjectlambda" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListAccessPointsForObjectLambdaRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ObjectLambdaAccessPointArn: S.optional(S.String),
          Alias: S.optional(ObjectLambdaAccessPointAlias),
        }),
      ).annotate({ identifier: "ObjectLambdaAccessPoint" });
    case 5:
      return S.Array(
        /*@__PURE__*/ ObjectLambdaAccessPoint.pipe(
          /*@__PURE__*/ T.XmlName("ObjectLambdaAccessPoint"),
        ).annotate({
          identifier: "ObjectLambdaAccessPoint",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          ObjectLambdaAccessPointList: S.optional(ObjectLambdaAccessPointList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAccessPointsForObjectLambdaResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          GrantScope: S.optional(S.String).pipe(T.HttpQuery("grantscope")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          AllowedByApplication: S.optional(S.Boolean).pipe(T.HttpQuery("allowedByApplication")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/accessgrantsinstance/caller/grants" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListCallerAccessGrantsRequest",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Permission: S.optional(Permission),
          GrantScope: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCallerAccessGrantsEntry",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ ListCallerAccessGrantsEntry.pipe(
          /*@__PURE__*/ T.XmlName("AccessGrant"),
        ).annotate({
          identifier: "ListCallerAccessGrantsEntry",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          CallerAccessGrantsList: S.optional(CallerAccessGrantsList),
        }).pipe(ns),
      ).annotate({
        identifier: "ListCallerAccessGrantsResult",
      });
    case 3:
      return S.Array(JobStatus);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          JobStatuses: S.optional(JobStatusList).pipe(T.HttpQuery("jobStatuses")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "ListJobsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          Description: S.optional(S.String),
          Operation: S.optional(OperationName),
          Priority: S.optional(S.Number),
          Status: S.optional(JobStatus),
          CreationTime: S.optional(T.DateFromString),
          TerminationDate: S.optional(T.DateFromString),
          ProgressSummary: S.optional(JobProgressSummary),
        }),
      ).annotate({ identifier: "JobListDescriptor" });
    case 6:
      return S.Array(JobListDescriptor);
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Jobs: S.optional(JobListDescriptorList) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListJobsResult" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/mrap/instances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListMultiRegionAccessPointsRequest",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ MultiRegionAccessPointReport.pipe(
          /*@__PURE__*/ T.XmlName("AccessPoint"),
        ).annotate({
          identifier: "MultiRegionAccessPointReport",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccessPoints: S.optional(MultiRegionAccessPointReportList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListMultiRegionAccessPointsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          OutpostId: S.optional(S.String).pipe(
            T.HttpHeader("x-amz-outpost-id"),
            T.ContextParam("OutpostId"),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/bucket" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListRegionalBucketsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.String,
          BucketArn: S.optional(S.String),
          PublicAccessBlockEnabled: S.Boolean,
          CreationDate: T.DateFromString,
          OutpostId: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegionalBucket" });
    case 5:
      return S.Array(
        /*@__PURE__*/ RegionalBucket.pipe(/*@__PURE__*/ T.XmlName("RegionalBucket")).annotate({
          identifier: "RegionalBucket",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          RegionalBucketList: S.optional(RegionalBucketList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListRegionalBucketsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/storagelens" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListStorageLensConfigurationsRequest",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          StorageLensArn: S.String,
          HomeRegion: S.String,
          IsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ListStorageLensConfigurationEntry",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ ListStorageLensConfigurationEntry.pipe(
          /*@__PURE__*/ T.XmlName("StorageLensConfiguration"),
        ).annotate({
          identifier: "ListStorageLensConfigurationEntry",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          StorageLensConfigurationList: S.optional(StorageLensConfigurationList).pipe(
            T.XmlName("StorageLensConfiguration"),
            T.XmlFlattened(),
          ),
        }).pipe(T.all(T.XmlName("ListStorageLensConfigurationResult"), ns)),
      ).annotate({
        identifier: "ListStorageLensConfigurationsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/storagelensgroup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListStorageLensGroupsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.String, StorageLensGroupArn: S.String, HomeRegion: S.String }),
      ).annotate({
        identifier: "ListStorageLensGroupEntry",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ ListStorageLensGroupEntry.pipe(
          /*@__PURE__*/ T.XmlName("StorageLensGroup"),
        ).annotate({
          identifier: "ListStorageLensGroupEntry",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          StorageLensGroupList: S.optional(StorageLensGroupList).pipe(
            T.XmlName("StorageLensGroup"),
            T.XmlFlattened(),
          ),
        }).pipe(ns),
      ).annotate({
        identifier: "ListStorageLensGroupsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn"), T.ContextParam("ResourceArn")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/v20180820/tags/{ResourceArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagList) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Policy: S.String,
          Organization: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/accessgrantsinstance/resourcepolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutAccessGrantsInstanceResourcePolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Policy: S.optional(S.String),
          Organization: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString),
        }).pipe(ns),
      ).annotate({
        identifier: "PutAccessGrantsInstanceResourcePolicyResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
          Configuration: ObjectLambdaConfiguration,
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "PUT",
              uri: "/v20180820/accesspointforobjectlambda/{Name}/configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutAccessPointConfigurationForObjectLambdaRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutAccessPointConfigurationForObjectLambdaResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
          Policy: S.String,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/accesspoint/{Name}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutAccessPointPolicyRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutAccessPointPolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name")),
          Policy: S.String,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/accesspointforobjectlambda/{Name}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutAccessPointPolicyForObjectLambdaRequest",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutAccessPointPolicyForObjectLambdaResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Name: S.String.pipe(T.HttpLabel("Name"), T.ContextParam("AccessPointName")),
          Scope: Scope,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/accesspoint/{Name}/scope" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({
              RequiresAccountId: { value: true },
              UseS3ExpressControlEndpoint: { value: true },
            }),
          ),
        ),
      ).annotate({
        identifier: "PutAccessPointScopeRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutAccessPointScopeResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ Rules: S.optional(LifecycleRules) })).annotate({
        identifier: "LifecycleConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
          LifecycleConfiguration: S.optional(LifecycleConfiguration)
            .pipe(T.HttpPayload(), T.XmlName("LifecycleConfiguration"))
            .annotate({ identifier: "LifecycleConfiguration" }),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/bucket/{Bucket}/lifecycleconfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutBucketLifecycleConfigurationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutBucketLifecycleConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
          ConfirmRemoveSelfBucketAccess: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amz-confirm-remove-self-bucket-access"),
          ),
          Policy: S.String,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/bucket/{Bucket}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "PutBucketPolicyRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutBucketPolicyResponse",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
          ReplicationConfiguration: ReplicationConfiguration.pipe(
            T.HttpPayload(),
            T.XmlName("ReplicationConfiguration"),
          ).annotate({ identifier: "ReplicationConfiguration" }),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/bucket/{Bucket}/replication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutBucketReplicationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutBucketReplicationResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ TagSet: S3TagSet })).annotate({
        identifier: "Tagging",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
          Tagging: Tagging.pipe(T.HttpPayload(), T.XmlName("Tagging")).annotate({
            identifier: "Tagging",
          }),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/bucket/{Bucket}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "PutBucketTaggingRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutBucketTaggingResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MFADelete: S.optional(MFADelete).pipe(T.XmlName("MfaDelete")),
          Status: S.optional(BucketVersioningStatus),
        }),
      ).annotate({ identifier: "VersioningConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Bucket: S.String.pipe(T.HttpLabel("Bucket"), T.ContextParam("Bucket")),
          MFA: S.optional(S.String).pipe(T.HttpHeader("x-amz-mfa")),
          VersioningConfiguration: VersioningConfiguration.pipe(
            T.HttpPayload(),
            T.XmlName("VersioningConfiguration"),
          ).annotate({ identifier: "VersioningConfiguration" }),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/bucket/{Bucket}/versioning" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutBucketVersioningRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutBucketVersioningResponse",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
          Tags: S3TagSet,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/jobs/{JobId}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "PutJobTaggingRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutJobTaggingResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Details: PutMultiRegionAccessPointPolicyInput,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/async-requests/mrap/put-policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutMultiRegionAccessPointPolicyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ RequestTokenARN: S.optional(S.String) }).pipe(ns)).annotate(
        {
          identifier: "PutMultiRegionAccessPointPolicyResult",
        },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          PublicAccessBlockConfiguration: PublicAccessBlockConfiguration.pipe(
            T.HttpPayload(),
            T.XmlName("PublicAccessBlockConfiguration"),
          ).annotate({ identifier: "PublicAccessBlockConfiguration" }),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/configuration/publicAccessBlock" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutPublicAccessBlockRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutPublicAccessBlockResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigId: S.String.pipe(T.HttpLabel("ConfigId")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          StorageLensConfiguration: StorageLensConfiguration,
          Tags: S.optional(StorageLensTags),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/storagelens/{ConfigId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutStorageLensConfigurationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutStorageLensConfigurationResponse",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConfigId: S.String.pipe(T.HttpLabel("ConfigId")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Tags: StorageLensTags,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/storagelens/{ConfigId}/tagging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "PutStorageLensConfigurationTaggingRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutStorageLensConfigurationTaggingResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          Mrap: S.String.pipe(T.HttpLabel("Mrap")),
          RouteUpdates: RouteList,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PATCH", uri: "/v20180820/mrap/instances/{Mrap+}/routes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "SubmitMultiRegionAccessPointRoutesRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SubmitMultiRegionAccessPointRoutesResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn"), T.ContextParam("ResourceArn")),
          Tags: TagList,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/tags/{ResourceArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResult",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn"), T.ContextParam("ResourceArn")),
          TagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/v20180820/tags/{ResourceArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagResourceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          AccessGrantsLocationId: S.String.pipe(T.HttpLabel("AccessGrantsLocationId")),
          IAMRoleArn: S.String,
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "PUT",
              uri: "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "UpdateAccessGrantsLocationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString),
          AccessGrantsLocationId: S.optional(S.String),
          AccessGrantsLocationArn: S.optional(S.String),
          LocationScope: S.optional(S.String),
          IAMRoleArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdateAccessGrantsLocationResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
          Priority: S.Number.pipe(T.HttpQuery("priority")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/jobs/{JobId}/priority" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "UpdateJobPriorityRequest" });
    case 4:
      return S.suspend(() => S.Struct({ JobId: S.String, Priority: S.Number }).pipe(ns)).annotate({
        identifier: "UpdateJobPriorityResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
          RequestedJobStatus: RequestedJobStatus.pipe(T.HttpQuery("requestedJobStatus")),
          StatusUpdateReason: S.optional(S.String).pipe(T.HttpQuery("statusUpdateReason")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/v20180820/jobs/{JobId}/status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({ identifier: "UpdateJobStatusRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          Status: S.optional(JobStatus),
          StatusUpdateReason: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "UpdateJobStatusResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          AccountId: S.String.pipe(
            T.HttpHeader("x-amz-account-id"),
            T.ContextParam("AccountId"),
            T.HostLabel(),
          ),
          StorageLensGroup: StorageLensGroup,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/v20180820/storagelensgroup/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
            T.StaticContextParams({ RequiresAccountId: { value: true } }),
          ),
        ),
      ).annotate({
        identifier: "UpdateStorageLensGroupRequest",
      });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateStorageLensGroupResponse",
      });
  }
}
