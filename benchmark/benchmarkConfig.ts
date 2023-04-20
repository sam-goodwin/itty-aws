export interface IFunction {
  functionName: string;
  entryPath: string;
  runtimeName?: "NODEJS_16_X" | "NODEJS_18_X";
  useItty?: boolean;
  useBundle?: boolean;
  chart: {
    order: number;
    backgroundColor: string;
    borderColor: string;
  };
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
      chart: {
        order: 1,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64)",
      },
    },

    // Node.js 16.x, itty-aws, runtime
    {
      functionName: "aws16-itty-runtime",
      entryPath: "./functions/aws-itty-handler",
      useItty: true,
      chart: {
        order: 2,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64)",
      },
    },

    // Node.js 16.x, aws-sdk v2, bundle
    {
      functionName: "aws16-sdk2-bundle",
      entryPath: "./functions/aws16-sdk2-handler",
      useBundle: true,
      chart: {
        order: 3,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192)",
      },
    },

    // Node.js 16.x, itty-aws, bundle
    {
      functionName: "aws16-itty-bundle",
      entryPath: "./functions/aws-itty-handler",
      useItty: true,
      useBundle: true,
      chart: {
        order: 4,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192)",
      },
    },

    // Node.js 18.x, aws-sdk v3, runtime
    {
      functionName: "aws18-sdk3-runtime",
      entryPath: "./functions/aws18-sdk3-handler",
      runtimeName: "NODEJS_18_X",
      chart: {
        order: 5,
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86)",
      },
    },

    // Node.js 18.x, itty-aws, runtime
    {
      functionName: "aws18-itty-runtime",
      entryPath: "./functions/aws-itty-handler",
      runtimeName: "NODEJS_18_X",
      useItty: true,
      chart: {
        order: 6,
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86)",
      },
    },

    // Node.js 18.x, aws-sdk v3, bundle
    {
      functionName: "aws18-sdk3-bundle",
      entryPath: "./functions/aws18-sdk3-handler",
      runtimeName: "NODEJS_18_X",
      useBundle: true,
      chart: {
        order: 7,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235)",
      },
    },

    // Node.js 18.x, itty-aws, bundle
    {
      functionName: "aws18-itty-bundle",
      entryPath: "./functions/aws-itty-handler",
      runtimeName: "NODEJS_18_X",
      useItty: true,
      useBundle: true,
      chart: {
        order: 8,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235)",
      },
    },
  ],
};
