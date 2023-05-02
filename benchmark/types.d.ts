import { OutputLogEvent } from "@aws-sdk/client-cloudwatch-logs";

export interface BenchmarkConfig {
  runs: number;
  logs: {
    gitBranch: string;
    outputDirPath: string;
    outputLogFilePath: string;
  };
  functions: FunctionParameters[];
}

export interface FunctionParameters {
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

export type OutputLog = OutputLogEvent[];
