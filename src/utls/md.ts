import { asArray } from "./asArray";
import { marked } from "marked";

marked.setOptions({
    gfm: true
});

/**
 * Template Literal for Markdown
 * @param literals
 * @returns HTML String
 */
export function md(literals: TemplateStringsArray | string) {
    const result = asArray(literals);

    return marked.parse(
        String(result[0]) // get the first result, there should only be one
            .trim() // remove leading and tailing whitespace
            .replace(new RegExp("\\n[ ]{1,}", "g"), "\n") // remove leading whitespace at the end of a new line
    );
}
