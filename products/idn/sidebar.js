/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    openApiSidebar: [
      {
        type: "category",
        label: "IDN V3",
        link: {
          type: "generated-index",
          title: "IDN V3",
          description:
            "These are the public APIs for SailPoint's SaaS services. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
          slug: "/api/identity-now-api-v3",
        },
        // @ts-ignore
        items: require("./api/v3/sidebar.js"),
      },
      {
        type: "category",
        label: "IDN Beta",
        link: {
          type: "generated-index",
          title: "IDN Beta",
          description:
            "These are the public APIs for SailPoint's SaaS services. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
          slug: "/api/identity-now-api-beta",
        },
        // @ts-ignore
        items: require("./api/beta/sidebar.js"),
      },
    ],
    idnDocs: [
      {
        type: "autogenerated",
        dirName: "docs",
      },
      ],
  };
  
  module.exports = sidebars;
  