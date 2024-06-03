import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Organization Code Mapping resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const github = sentry.getSentryOrganizationIntegration({
 *     organization: "my-organization",
 *     providerKey: "github",
 *     name: "my-github-organization",
 * });
 * const thisSentryProject = new sentry.SentryProject("thisSentryProject", {
 *     organization: "my-organization",
 *     team: "my-team",
 *     slug: "web-app",
 *     platform: "javascript",
 *     resolveAge: 720,
 * });
 * const thisSentryOrganizationRepositoryGithub = new sentry.SentryOrganizationRepositoryGithub("thisSentryOrganizationRepositoryGithub", {
 *     organization: "my-organization",
 *     integrationId: github.then(github => github.internalId),
 *     identifier: "my-github-organization/my-github-repo",
 * });
 * const thisSentryOrganizationCodeMapping = new sentry.SentryOrganizationCodeMapping("thisSentryOrganizationCodeMapping", {
 *     organization: "my-organization",
 *     integrationId: github.then(github => github.internalId),
 *     repositoryId: thisSentryOrganizationRepositoryGithub.internalId,
 *     projectId: thisSentryProject.internalId,
 *     defaultBranch: "main",
 *     stackRoot: "/",
 *     sourceRoot: "src/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization slug from the URL:
 *
 * https://sentry.io/settings/[org-slug]/integrations/github/[org-integration-id]/
 *
 * and inspect network tab for request to https://sentry.io/api/0/organizations/[org-slug]/code-mappings/
 *
 * find the corresponding list element and reference [code-mapping-id] from the key "id"
 *
 * ```sh
 * $ pulumi import sentry:index/sentryOrganizationCodeMapping:SentryOrganizationCodeMapping this org-slug/31347
 * ```
 */
export declare class SentryOrganizationCodeMapping extends pulumi.CustomResource {
    /**
     * Get an existing SentryOrganizationCodeMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryOrganizationCodeMappingState, opts?: pulumi.CustomResourceOptions): SentryOrganizationCodeMapping;
    /**
     * Returns true if the given object is an instance of SentryOrganizationCodeMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryOrganizationCodeMapping;
    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    readonly defaultBranch: pulumi.Output<string>;
    /**
     * Sentry Organization Integration ID.
     */
    readonly integrationId: pulumi.Output<string>;
    /**
     * The internal ID for this resource.
     */
    readonly internalId: pulumi.Output<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * Sentry Project ID.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Sentry Organization Repository ID.
     */
    readonly repositoryId: pulumi.Output<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    readonly sourceRoot: pulumi.Output<string | undefined>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    readonly stackRoot: pulumi.Output<string | undefined>;
    /**
     * Create a SentryOrganizationCodeMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryOrganizationCodeMappingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryOrganizationCodeMapping resources.
 */
export interface SentryOrganizationCodeMappingState {
    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    defaultBranch?: pulumi.Input<string>;
    /**
     * Sentry Organization Integration ID.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The internal ID for this resource.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    organization?: pulumi.Input<string>;
    /**
     * Sentry Project ID.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Sentry Organization Repository ID.
     */
    repositoryId?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    sourceRoot?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    stackRoot?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryOrganizationCodeMapping resource.
 */
export interface SentryOrganizationCodeMappingArgs {
    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    defaultBranch: pulumi.Input<string>;
    /**
     * Sentry Organization Integration ID.
     */
    integrationId: pulumi.Input<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    organization: pulumi.Input<string>;
    /**
     * Sentry Project ID.
     */
    projectId: pulumi.Input<string>;
    /**
     * Sentry Organization Repository ID.
     */
    repositoryId: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    sourceRoot?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    stackRoot?: pulumi.Input<string>;
}
