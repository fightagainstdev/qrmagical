import Exa from "exa-js";
import { OpenAI } from "openai";

export const zhipuClient = new OpenAI({
  apiKey: process.env.ZHIPU_API_KEY,
  baseURL: "https://open.bigmodel.cn/api/paas/v4/",
});

export const exaClient = new Exa(process.env.EXA_API_KEY);