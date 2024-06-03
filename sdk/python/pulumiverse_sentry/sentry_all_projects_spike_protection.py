# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['SentryAllProjectsSpikeProtectionArgs', 'SentryAllProjectsSpikeProtection']

@pulumi.input_type
class SentryAllProjectsSpikeProtectionArgs:
    def __init__(__self__, *,
                 enabled: pulumi.Input[bool],
                 organization: pulumi.Input[str],
                 projects: pulumi.Input[Sequence[pulumi.Input[str]]]):
        """
        The set of arguments for constructing a SentryAllProjectsSpikeProtection resource.
        :param pulumi.Input[bool] enabled: Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
        :param pulumi.Input[str] organization: The slug of the organization the resource belongs to.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] projects: The slugs of the projects to enable or disable spike protection for.
        """
        pulumi.set(__self__, "enabled", enabled)
        pulumi.set(__self__, "organization", organization)
        pulumi.set(__self__, "projects", projects)

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Input[bool]:
        """
        Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
        """
        return pulumi.get(self, "enabled")

    @enabled.setter
    def enabled(self, value: pulumi.Input[bool]):
        pulumi.set(self, "enabled", value)

    @property
    @pulumi.getter
    def organization(self) -> pulumi.Input[str]:
        """
        The slug of the organization the resource belongs to.
        """
        return pulumi.get(self, "organization")

    @organization.setter
    def organization(self, value: pulumi.Input[str]):
        pulumi.set(self, "organization", value)

    @property
    @pulumi.getter
    def projects(self) -> pulumi.Input[Sequence[pulumi.Input[str]]]:
        """
        The slugs of the projects to enable or disable spike protection for.
        """
        return pulumi.get(self, "projects")

    @projects.setter
    def projects(self, value: pulumi.Input[Sequence[pulumi.Input[str]]]):
        pulumi.set(self, "projects", value)


@pulumi.input_type
class _SentryAllProjectsSpikeProtectionState:
    def __init__(__self__, *,
                 enabled: Optional[pulumi.Input[bool]] = None,
                 organization: Optional[pulumi.Input[str]] = None,
                 projects: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None):
        """
        Input properties used for looking up and filtering SentryAllProjectsSpikeProtection resources.
        :param pulumi.Input[bool] enabled: Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
        :param pulumi.Input[str] organization: The slug of the organization the resource belongs to.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] projects: The slugs of the projects to enable or disable spike protection for.
        """
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if organization is not None:
            pulumi.set(__self__, "organization", organization)
        if projects is not None:
            pulumi.set(__self__, "projects", projects)

    @property
    @pulumi.getter
    def enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
        """
        return pulumi.get(self, "enabled")

    @enabled.setter
    def enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "enabled", value)

    @property
    @pulumi.getter
    def organization(self) -> Optional[pulumi.Input[str]]:
        """
        The slug of the organization the resource belongs to.
        """
        return pulumi.get(self, "organization")

    @organization.setter
    def organization(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "organization", value)

    @property
    @pulumi.getter
    def projects(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        The slugs of the projects to enable or disable spike protection for.
        """
        return pulumi.get(self, "projects")

    @projects.setter
    def projects(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "projects", value)


class SentryAllProjectsSpikeProtection(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 enabled: Optional[pulumi.Input[bool]] = None,
                 organization: Optional[pulumi.Input[str]] = None,
                 projects: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 __props__=None):
        """
        Enable spike protection for all projects in an organization.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_sentry as sentry
        import pulumiverse_sentry as sentry

        # Enable spike protection for several projects in a Sentry organization.
        web_app = sentry.SentryProject("web-app",
            organization="my-organization",
            teams=["my-first-team"],
            slug="web-app",
            platform="go")
        mobile_app = sentry.SentryProject("mobile-app",
            organization="my-organization",
            teams=["my-second-team"],
            slug="mobile-app",
            platform="android")
        main_sentry_all_projects_spike_protection = sentry.SentryAllProjectsSpikeProtection("mainSentryAllProjectsSpikeProtection",
            organization="my-organization",
            projects=[
                web_app.id,
                mobile_app.id,
            ],
            enabled=True)
        all = sentry.get_sentry_all_projects(organization="my-organization")
        main_index_sentry_all_projects_spike_protection_sentry_all_projects_spike_protection = sentry.SentryAllProjectsSpikeProtection("mainIndex/sentryAllProjectsSpikeProtectionSentryAllProjectsSpikeProtection",
            organization=all.organization,
            projects=all.project_slugs,
            enabled=True)
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] enabled: Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
        :param pulumi.Input[str] organization: The slug of the organization the resource belongs to.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] projects: The slugs of the projects to enable or disable spike protection for.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: SentryAllProjectsSpikeProtectionArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Enable spike protection for all projects in an organization.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_sentry as sentry
        import pulumiverse_sentry as sentry

        # Enable spike protection for several projects in a Sentry organization.
        web_app = sentry.SentryProject("web-app",
            organization="my-organization",
            teams=["my-first-team"],
            slug="web-app",
            platform="go")
        mobile_app = sentry.SentryProject("mobile-app",
            organization="my-organization",
            teams=["my-second-team"],
            slug="mobile-app",
            platform="android")
        main_sentry_all_projects_spike_protection = sentry.SentryAllProjectsSpikeProtection("mainSentryAllProjectsSpikeProtection",
            organization="my-organization",
            projects=[
                web_app.id,
                mobile_app.id,
            ],
            enabled=True)
        all = sentry.get_sentry_all_projects(organization="my-organization")
        main_index_sentry_all_projects_spike_protection_sentry_all_projects_spike_protection = sentry.SentryAllProjectsSpikeProtection("mainIndex/sentryAllProjectsSpikeProtectionSentryAllProjectsSpikeProtection",
            organization=all.organization,
            projects=all.project_slugs,
            enabled=True)
        ```

        :param str resource_name: The name of the resource.
        :param SentryAllProjectsSpikeProtectionArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(SentryAllProjectsSpikeProtectionArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 enabled: Optional[pulumi.Input[bool]] = None,
                 organization: Optional[pulumi.Input[str]] = None,
                 projects: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = SentryAllProjectsSpikeProtectionArgs.__new__(SentryAllProjectsSpikeProtectionArgs)

            if enabled is None and not opts.urn:
                raise TypeError("Missing required property 'enabled'")
            __props__.__dict__["enabled"] = enabled
            if organization is None and not opts.urn:
                raise TypeError("Missing required property 'organization'")
            __props__.__dict__["organization"] = organization
            if projects is None and not opts.urn:
                raise TypeError("Missing required property 'projects'")
            __props__.__dict__["projects"] = projects
        super(SentryAllProjectsSpikeProtection, __self__).__init__(
            'sentry:index/sentryAllProjectsSpikeProtection:SentryAllProjectsSpikeProtection',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            enabled: Optional[pulumi.Input[bool]] = None,
            organization: Optional[pulumi.Input[str]] = None,
            projects: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None) -> 'SentryAllProjectsSpikeProtection':
        """
        Get an existing SentryAllProjectsSpikeProtection resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] enabled: Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
        :param pulumi.Input[str] organization: The slug of the organization the resource belongs to.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] projects: The slugs of the projects to enable or disable spike protection for.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _SentryAllProjectsSpikeProtectionState.__new__(_SentryAllProjectsSpikeProtectionState)

        __props__.__dict__["enabled"] = enabled
        __props__.__dict__["organization"] = organization
        __props__.__dict__["projects"] = projects
        return SentryAllProjectsSpikeProtection(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Output[bool]:
        """
        Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter
    def organization(self) -> pulumi.Output[str]:
        """
        The slug of the organization the resource belongs to.
        """
        return pulumi.get(self, "organization")

    @property
    @pulumi.getter
    def projects(self) -> pulumi.Output[Sequence[str]]:
        """
        The slugs of the projects to enable or disable spike protection for.
        """
        return pulumi.get(self, "projects")
