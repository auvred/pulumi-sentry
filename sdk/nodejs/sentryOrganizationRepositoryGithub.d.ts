import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Github Organization Repository resource. This resource is deprecated and will be removed in the next major version of the provider. Use `sentry.SentryOrganizationRepository` instead.
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
 * const _this = new sentry.SentryOrganizationRepositoryGithub("this", {
 *     organization: "my-organization",
 *     integrationId: github.then(github => github.internalId),
 *     identifier: "my-github-organization/my-github-repo",
 * });
 * ```
 *
 * ## Import
 *
 * import using the organization slug from the URL:
 *
 * https://sentry.io/organizations/[org-slug]/
 *
 * [github-org] and [github-repo] are the slugs to your repo
 *
 * ```sh
 * $ pulumi import sentry:index/sentryOrganizationRepositoryGithub:SentryOrganizationRepositoryGithub this org-slug/github-org/github-repo
 * ```
 */
export declare class SentryOrganizationRepositoryGithub extends pulumi.CustomResource {
    /**
     * Get an existing SentryOrganizationRepositoryGithub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryOrganizationRepositoryGithubState, opts?: pulumi.CustomResourceOptions): SentryOrganizationRepositoryGithub;
    /**
     * Returns true if the given object is an instance of SentryOrganizationRepositoryGithub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryOrganizationRepositoryGithub;
    /**
     * The repo identifier. For Github it is {github*org}/{github*repo}.
     */
    readonly identifier: pulumi.Output<string>;
    /**
     * The organization integration ID for Github.
     */
    readonly integrationId: pulumi.Output<string>;
    /**
     * The internal ID for this organization repository.
     */
    readonly internalId: pulumi.Output<string>;
    /**
     * The slug of the Sentry organization this resource belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * Create a SentryOrganizationRepositoryGithub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryOrganizationRepositoryGithubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryOrganizationRepositoryGithub resources.
 */
export interface SentryOrganizationRepositoryGithubState {
    /**
     * The repo identifier. For Github it is {github*org}/{github*repo}.
     */
    identifier?: pulumi.Input<string>;
    /**
     * The organization integration ID for Github.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The internal ID for this organization repository.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The slug of the Sentry organization this resource belongs to.
     */
    organization?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryOrganizationRepositoryGithub resource.
 */
export interface SentryOrganizationRepositoryGithubArgs {
    /**
     * The repo identifier. For Github it is {github*org}/{github*repo}.
     */
    identifier: pulumi.Input<string>;
    /**
     * The organization integration ID for Github.
     */
    integrationId: pulumi.Input<string>;
    /**
     * The slug of the Sentry organization this resource belongs to.
     */
    organization: pulumi.Input<string>;
}
