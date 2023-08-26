export type ComponentButtonVariants =
  | "primary"
  | "secondary"
  | "secondary-gray"
  | "tertiary"
  | "tertiary-gray"
  | "link"
  | "link-gray";

export type ComponentButtonSizes = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ComponentButtonBasePropsType {
  prependIcon?: string;
  appendIcon?: string;
  size?: ComponentButtonSizes;
  variant?: ComponentButtonVariants;
  destructive?: boolean;
  width?: "full" | "fit";
  disabled?: boolean;
  isLoading?: boolean;
}

