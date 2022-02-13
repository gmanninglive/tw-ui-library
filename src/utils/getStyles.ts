/**
 *
 * @param {variant} variant
 * @param {styleObject} styleObject - { base: string, primary: string ... }
 * @description Accepts one main variant ie. primary / secondary and one sub variant ie. small / large. In the format 'main_sub'
 * @returns styles from styleObject concattonated
 */

export const getStyles = (variant: variant, styleObject: styleObject) => {
  if (!variant) return styleObject.base;

  if (!variant.includes("_"))
    return styleObject.base.concat(" ", styleObject[variant]);

  let res = variant
    .split("_")
    .reduce((memo, v) => memo.concat(" ", styleObject[v]), "");

  return styleObject.base.concat(" ", res);
};

export interface styleObject {
  [propertyName: string]: string;
}

type variant =
  | "primary"
  | "secondary"
  | `${mainVariant}_${subVariant}`
  | undefined;
type mainVariant = "primary" | "secondary";
type subVariant = "small" | "large";

// Example styleObject
// const styles = {
//     base: "px-10 py-2",
//     primary: "bg-blue-900 text-white",
//     secondary: "bg-orange-600 text-white",
//     small: "text-sm px-4 py-2",
//     large: "px-20 py-10",
//   };
