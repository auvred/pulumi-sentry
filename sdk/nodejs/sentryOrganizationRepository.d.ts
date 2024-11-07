import * as pulumi from "@pulumi/pulumi";
/**
 * Organization Repository resource. This resource manages Sentry's source code management integrations.
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import sentry:index/sentryOrganizationRepository:SentryOrganizationRepository this org-slug/integration-type/integration-id/internal-id
 * ```
 */
export declare class SentryOrganizationRepository extends pulumi.CustomResource {
    /**
     * Get an existing SentryOrganizationRepository resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryOrganizationRepositoryState, opts?: pulumi.CustomResourceOptions): SentryOrganizationRepository;
    /**
     * Returns true if the given object is an instance of SentryOrganizationRepository.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryOrganizationRepository;
    /**
     * The identifier of the repository. For GitHub, GitLab and BitBucket, it is `{organization}/{repository}`. For VSTS, it is the [repository ID](https://learn.microsoft.com/en-us/rest/api/azure/devops/git/repositories/get#get-a-repository-by-repositoryid).
     */
    readonly identifier: pulumi.Output<string>;
    /**
     * The ID of the organization integration. Source from the URL `https://<organization>.sentry.io/settings/integrations/<integration-type>/<integration-id>/` or use the `sentry.getSentryOrganizationIntegration` data source.
     */
    readonly integrationId: pulumi.Output<string>;
    /**
     * The type of the organization integration. Supported values are `github`, `githubEnterprise`, `gitlab`, `vsts` (Azure DevOps), `bitbucket`, and `bitbucketServer`.
     */
    readonly integrationType: pulumi.Output<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * Create a SentryOrganizationRepository resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryOrganizationRepositoryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryOrganizationRepository resources.
 */
export interface SentryOrganizationRepositoryState {
    /**
     * The identifier of the repository. For GitHub, GitLab and BitBucket, it is `{organization}/{repository}`. For VSTS, it is the [repository ID](https://learn.microsoft.com/en-us/rest/api/azure/devops/git/repositories/get#get-a-repository-by-repositoryid).
     */
    identifier?: pulumi.Input<string>;
    /**
     * The ID of the organization integration. Source from the URL `https://<organization>.sentry.io/settings/integrations/<integration-type>/<integration-id>/` or use the `sentry.getSentryOrganizationIntegration` data source.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The type of the organization integration. Supported values are `github`, `githubEnterprise`, `gitlab`, `vsts` (Azure DevOps), `bitbucket`, and `bitbucketServer`.
     */
    integrationType?: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryOrganizationRepository resource.
 */
export interface SentryOrganizationRepositoryArgs {
    /**
     * The identifier of the repository. For GitHub, GitLab and BitBucket, it is `{organization}/{repository}`. For VSTS, it is the [repository ID](https://learn.microsoft.com/en-us/rest/api/azure/devops/git/repositories/get#get-a-repository-by-repositoryid).
     */
    identifier: pulumi.Input<string>;
    /**
     * The ID of the organization integration. Source from the URL `https://<organization>.sentry.io/settings/integrations/<integration-type>/<integration-id>/` or use the `sentry.getSentryOrganizationIntegration` data source.
     */
    integrationId: pulumi.Input<string>;
    /**
     * The type of the organization integration. Supported values are `github`, `githubEnterprise`, `gitlab`, `vsts` (Azure DevOps), `bitbucket`, and `bitbucketServer`.
     */
    integrationType: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
}
