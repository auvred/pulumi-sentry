import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Retrieve all organization members.
 */
export declare function getSentryAllOrganizationMembers(args: GetSentryAllOrganizationMembersArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryAllOrganizationMembersResult>;
/**
 * A collection of arguments for invoking getSentryAllOrganizationMembers.
 */
export interface GetSentryAllOrganizationMembersArgs {
    /**
     * The slug of the organization.
     */
    organization: string;
}
/**
 * A collection of values returned by getSentryAllOrganizationMembers.
 */
export interface GetSentryAllOrganizationMembersResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The list of members.
     */
    readonly members: outputs.GetSentryAllOrganizationMembersMember[];
    /**
     * The slug of the organization.
     */
    readonly organization: string;
}
/**
 * Retrieve all organization members.
 */
export declare function getSentryAllOrganizationMembersOutput(args: GetSentryAllOrganizationMembersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryAllOrganizationMembersResult>;
/**
 * A collection of arguments for invoking getSentryAllOrganizationMembers.
 */
export interface GetSentryAllOrganizationMembersOutputArgs {
    /**
     * The slug of the organization.
     */
    organization: pulumi.Input<string>;
}
