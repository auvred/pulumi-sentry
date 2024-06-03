"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryTeamMember = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * Sentry Team Member resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Add a member to a team
 * const defaultSentryOrganizationMember = new sentry.SentryOrganizationMember("defaultSentryOrganizationMember", {
 *     organization: "my-organization",
 *     email: "test@example.com",
 *     role: "member",
 * });
 * const defaultSentryTeam = new sentry.SentryTeam("defaultSentryTeam", {
 *     organization: "my-organization",
 *     slug: "my-team",
 * });
 * const defaultSentryTeamMember = new sentry.SentryTeamMember("defaultSentryTeamMember", {
 *     organization: "my-organization",
 *     team: defaultSentryTeam.id,
 *     memberId: defaultSentryOrganizationMember.internalId,
 * });
 * ```
 *
 * ## Import
 *
 * import using the member ID and team slug from the URL:
 *
 * https://[org-slug].sentry.io/settings/teams/[team-slug]/members/
 *
 * https://[org-slug].sentry.io/settings/members/[member-id]/
 *
 * ```sh
 * $ pulumi import sentry:index/sentryTeamMember:SentryTeamMember default org-slug/team-slug/member-id
 * ```
 */
class SentryTeamMember extends pulumi.CustomResource {
    /**
     * Get an existing SentryTeamMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new SentryTeamMember(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SentryTeamMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentryTeamMember.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["effectiveRole"] = state ? state.effectiveRole : undefined;
            resourceInputs["memberId"] = state ? state.memberId : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["team"] = state ? state.team : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.memberId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memberId'");
            }
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.team === undefined) && !opts.urn) {
                throw new Error("Missing required property 'team'");
            }
            resourceInputs["memberId"] = args ? args.memberId : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["team"] = args ? args.team : undefined;
            resourceInputs["effectiveRole"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SentryTeamMember.__pulumiType, name, resourceInputs, opts);
    }
}
exports.SentryTeamMember = SentryTeamMember;
/** @internal */
SentryTeamMember.__pulumiType = 'sentry:index/sentryTeamMember:SentryTeamMember';
//# sourceMappingURL=sentryTeamMember.js.map