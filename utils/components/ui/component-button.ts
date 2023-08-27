// Region: Destructive, Size, Width, Disabled, Variant
export const componentButtonClassValue = {
  destructive: {
    // * !!Destructive Styles
    true: {
      // * Not Disabled
      notDisabled: {
        button: {
          primary:
            "bg-error-600 text-white " +
            "hover:bg-error-700 active:border-4 " +
            "active:border-error-100",
          secondary:
            "bg-error-50 text-error-700 " +
            "hover:bg-error-100 " +
            "active:border-4 active:border-error-100 active:bg-error-50",
          "secondary-gray":
            "bg-white text-error-700 border border-error-300 " +
            "hover:bg-error-50 hover:text-error-800 " +
            "active:border-4 active:border-error-50 active:bg-white",
          tertiary: "text-error-700 hover:bg-error-50 active:bg-white",
          "tertiary-gray":
            "text-error-700 hover:bg-error-50 hover:text-error-800 active:text-error-700",
          link: "text-error-700 hover:text-error-800 active:text-error-700",
          "link-gray":
            "text-error-700 hover:text-error-800 active:text-error-700",
        },
      },

      // * !!Disabled
      disabled: {
        button: {
          primary: "bg-error-200 text-white",
          secondary: "bg-error-25 text-error-300",
          "secondary-gray": "bg-white text-error-300 border border-error-200",
          tertiary: "text-error-300",
          "tertiary-gray": "text-error-300",
          link: "text-error-300",
          "link-gray": "text-error-300",
        },
      },
    },

    // * Non Destructive Styles
    false: {
      // * Not Disabled
      notDisabled: {
        button: {
          primary:
            "bg-primary-600 text-white " +
            "hover:bg-primary-700 " +
            "active:border-4 active:border-primary-100",
          secondary:
            "bg-primary-50 text-primary-700 " +
            "hover:bg-primary-100 " +
            "active:border-4 active:border-primary-100 active:bg-primary-50",
          "secondary-gray":
            "bg-white text-gray-700 border border-gray-300 " +
            "hover:bg-gray-50 hover:text-gray-800 " +
            "active:border-4 active:border-gray-300 active:bg-gray-50",
          tertiary:
            "bg-transparent text-primary-700 " +
            "hover:bg-primary-50 " +
            "active:bg-transparent",
          // ? I'm Here
          "tertiary-gray":
            "text-gray-500 " +
            "hover:bg-gray-50 hover:text-gray-600 " +
            "active:bg-transparent",
          link:
            "text-primary-700 " +
            "hover:text-primary-800 " +
            "active:text-primary-700 ",
          "link-gray":
            "text-gray-500" + "hover:text-gray-600 " + "active:text-gray-500",
        },
      },

      // * !!Disabled
      disabled: {
        button: {
          primary: "bg-primary-200 text-white",
          secondary: "bg-primary-25 text-primary-300",
          "secondary-gray": "bg-white text-gray-300 border border-gray-200",
          tertiary: "text-gray-300",
          "tertiary-gray": "text-gray-300",
          link: "text-gray-300",
          "link-gray": "text-gray-300",
        },
      },
    },
  },
};
