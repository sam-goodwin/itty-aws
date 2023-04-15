export interface IFunction {
  functionName: string;
  entryPath: string;
  runtimeName?: "NODEJS_16_X" | "NODEJS_18_X";
  useItty?: boolean;
  useBundle?: boolean;
}

interface IConfig {
  runs: number;
  logs: {
    outputFolder: string; // relative to scripts dir
  };
  functions: IFunction[];
}

export const CONFIG: IConfig = {
  runs: 10,
  logs: {
    outputFolder: "../data",
  },
  functions: [
    // Node.js 16.x, aws-sdk v2, runtime
    {
      functionName: "aws16-sdk2-runtime",
      entryPath: "./functions/aws16-sdk2-handler",
    },

    // Node.js 16.x, aws-sdk v2, bundle
    {
      functionName: "aws16-sdk2-bundle",
      entryPath: "./functions/aws16-sdk2-handler",
      useBundle: true,
    },

    // Node.js 16.x, itty-aws-runtime
    {
      functionName: "aws16-itty-runtime",
      entryPath: "./functions/aws-itty-handler",
      useItty: true,
    },

    // Node.js 16.x, itty-aws-bundle
    {
      functionName: "aws16-itty-bundle",
      entryPath: "./functions/aws-itty-handler",
      useItty: true,
      useBundle: true,
    },

    // Node.js 18.x, aws-sdk v3, runtime
    {
      functionName: "aws18-sdk3-runtime",
      entryPath: "./functions/aws18-sdk3-handler",
      runtimeName: "NODEJS_18_X",
    },

    // Node.js 18.x, aws-sdk v3, bundle
    {
      functionName: "aws18-sdk3-bundle",
      entryPath: "./functions/aws18-sdk3-handler",
      runtimeName: "NODEJS_18_X",
      useBundle: true,
    },

    // Node.js 18.x, itty-aws-runtime
    {
      functionName: "aws18-itty-runtime",
      entryPath: "./functions/aws-itty-handler",
      runtimeName: "NODEJS_18_X",
      useItty: true,
    },

    // Node.js 18.x, itty-aws-bundle
    {
      functionName: "aws18-itty-bundle",
      entryPath: "./functions/aws-itty-handler",
      runtimeName: "NODEJS_18_X",
      useItty: true,
      useBundle: true,
    },
  ],
};
