import type { TemplateResult, nothing } from "lit";

export function replaceHA2MSH(
  content: string | TemplateResult | typeof nothing
): string | TemplateResult | typeof nothing {
  if (typeof content === "string") {
    return content.replace(/Home Assistant/gi, "MSH");
  }
  return content;
}
