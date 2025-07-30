import { expect, test } from "@effect/vitest";
import { parseEC2Response } from "../src/ec2-parsers";

test("parseEC2Response - DescribeRegions", () => {
  const sampleResponse = `<?xml version="1.0" encoding="UTF-8"?>
<DescribeRegionsResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>5222d73c-5cf6-4a74-9fb1-e6ef0f8caa53</requestId>
    <regionInfo>
        <item>
            <regionName>ap-south-1</regionName>
            <regionEndpoint>ec2.ap-south-1.amazonaws.com</regionEndpoint>
            <optInStatus>opt-in-not-required</optInStatus>
        </item>
        <item>
            <regionName>eu-north-1</regionName>
            <regionEndpoint>ec2.eu-north-1.amazonaws.com</regionEndpoint>
            <optInStatus>opt-in-not-required</optInStatus>
        </item>
    </regionInfo>
</DescribeRegionsResponse>`;

  const result = parseEC2Response(sampleResponse);

  expect(result).toEqual({
    Regions: [
      {
        RegionName: "ap-south-1",
        Endpoint: "ec2.ap-south-1.amazonaws.com",
        OptInStatus: "opt-in-not-required",
      },
      {
        RegionName: "eu-north-1", 
        Endpoint: "ec2.eu-north-1.amazonaws.com",
        OptInStatus: "opt-in-not-required",
      },
    ],
  });
});

test("parseEC2Response - handles unknown shapes gracefully", () => {
  const unknownResponse = `<?xml version="1.0" encoding="UTF-8"?>
<UnknownOperationResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>test-id</requestId>
    <someData>test-value</someData>
</UnknownOperationResponse>`;

  const result = parseEC2Response(unknownResponse);

  // Should return raw XML data when shape not found in registry (excluding requestId)
  expect(result).toEqual({
    requestId: "test-id",
    someData: "test-value",
  });
});
