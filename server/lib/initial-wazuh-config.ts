/*
 * Wazuh app - Initial basic configuration file
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import { ASSETS_BASE_URL_PREFIX, WAZUH_MONITORING_DEFAULT_INDICES_REPLICAS, WAZUH_MONITORING_DEFAULT_INDICES_SHARDS, WAZUH_STATISTICS_DEFAULT_INDICES_REPLICAS, WAZUH_STATISTICS_DEFAULT_INDICES_SHARDS } from "../../common/constants";
import { webDocumentationLink } from "../../common/services/web_documentation";

export const initialWazuhConfig: string = `---
#
# Wazuh app - App configuration file
# Copyright (C) 2015-2022 Wazuh, Inc.
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# Find more information about this on the LICENSE file.
#
# ======================== Wazuh app configuration file ========================
#
# Please check the documentation for more information on configuration options:
# ${webDocumentationLink('installation-guide/index.html')}
#
# Also, you can check our repository:
# https://github.com/wazuh/wazuh-kibana-app
#
# ------------------------------- Disable roles -------------------------------
#
# Defines which Elasticsearch roles disable Wazuh
# disabled_roles: 
#      - wazuh_disabled
#
# ------------------------------- Index patterns -------------------------------
#
# Default index pattern to use.
#pattern: wazuh-alerts-*
#
# ----------------------------------- Checks -----------------------------------
#
# Defines which checks must to be consider by the healthcheck
# step once the Wazuh app starts. Values must to be true or false.
#checks.pattern : true
#checks.template: true
#checks.fields  : true
#checks.api     : true
#checks.setup   : true
#checks.metaFields: true
#checks.timeFilter: true
#checks.maxBuckets: true
#
# --------------------------------- Extensions ---------------------------------
#
# Defines which extensions should be activated when you add a new API entry.
# You can change them after Wazuh app starts.
# Values must to be true or false.
#extensions.pci       : true
#extensions.gdpr      : true
#extensions.hipaa     : true
#extensions.nist      : true
#extensions.tsc       : true
#extensions.audit     : true
#extensions.oscap     : false
#extensions.ciscat    : false
#extensions.aws       : false
#extensions.gcp       : false
#extensions.virustotal: false
#extensions.osquery   : false
#extensions.docker    : false
#
# ---------------------------------- Timeout ----------------------------------
#
# Defines maximum timeout to be used on the Wazuh app requests.
# It will be ignored if it is bellow 1500.
# It means milliseconds before we consider a request as failed.
# Default: 20000
#timeout: 20000
#
# -------------------------------- API selector --------------------------------
#
# Defines if the user is allowed to change the selected
# API directly from the Wazuh app top menu.
# Default: true
#api.selector: true
#
# --------------------------- Index pattern selector ---------------------------
#
# Defines if the user is allowed to change the selected
# index pattern directly from the Wazuh app top menu.
# Default: true
#ip.selector: true
#
# List of index patterns to be ignored
#ip.ignore: []
#
# -------------------------------- X-Pack RBAC ---------------------------------
#
# Custom setting to enable/disable built-in X-Pack RBAC security capabilities.
# Default: enabled
#xpack.rbac.enabled: true
#
# ------------------------------ wazuh-monitoring ------------------------------
#
# Custom setting to enable/disable wazuh-monitoring indices.
# Values: true, false, worker
# If worker is given as value, the app will show the Agents status
# visualization but won't insert data on wazuh-monitoring indices.
# Default: true
#wazuh.monitoring.enabled: true
#
# Custom setting to set the frequency for wazuh-monitoring indices cron task.
# Default: 900 (s)
#wazuh.monitoring.frequency: 900
#
# Configure wazuh-monitoring-* indices shards and replicas.
#wazuh.monitoring.shards: ${WAZUH_MONITORING_DEFAULT_INDICES_SHARDS}
#wazuh.monitoring.replicas: ${WAZUH_MONITORING_DEFAULT_INDICES_REPLICAS}
#
# Configure wazuh-monitoring-* indices custom creation interval.
# Values: h (hourly), d (daily), w (weekly), m (monthly)
# Default: w
#wazuh.monitoring.creation: w
#
# Default index pattern to use for Wazuh monitoring
#wazuh.monitoring.pattern: wazuh-monitoring-*
#
# --------------------------------- wazuh-cron ----------------------------------
#
# Customize the index prefix of predefined jobs
# This change is not retroactive, if you change it new indexes will be created
# cron.prefix: wazuh
#
# --------------------------------- wazuh-sample-alerts -------------------------
#
# Customize the index name prefix of sample alerts
# This change is not retroactive, if you change it new indexes will be created
# It should match with a valid index template to avoid unknown fields on
# dashboards
#alerts.sample.prefix: wazuh-alerts-4.x-
#
# ------------------------------ wazuh-statistics -------------------------------
#
# Custom setting to enable/disable statistics tasks.
#cron.statistics.status: true
#
# Enter the ID of the APIs you want to save data from, leave this empty to run
# the task on all configured APIs
#cron.statistics.apis: []
#
# Define the frequency of task execution using cron schedule expressions
#cron.statistics.interval: 0 */5 * * * *
#
# Define the name of the index in which the documents are to be saved.
#cron.statistics.index.name: statistics
#
# Define the interval in which the index will be created
#cron.statistics.index.creation: w
#
# Configure statistics indices shards and replicas.
#cron.statistics.shards: ${WAZUH_STATISTICS_DEFAULT_INDICES_SHARDS}
#cron.statistics.replicas: ${WAZUH_STATISTICS_DEFAULT_INDICES_REPLICAS}
#
# ------------------------------ wazuh-logo-customization -------------------------------
#
#Define the name of the app logo saved in the path ${ASSETS_BASE_URL_PREFIX}
#customization.logo.app: ''
#
#Define the name of the sidebar logo saved in the path ${ASSETS_BASE_URL_PREFIX}
#customization.logo.sidebar: ''
#
#Define the name of the health-check logo saved in the path ${ASSETS_BASE_URL_PREFIX}
#customization.logo.healthcheck: ''
#
#Define the name of the reports logo (.png) saved in the path ${ASSETS_BASE_URL_PREFIX}
#customization.logo.reports: ''
#
# ---------------------------- Hide manager alerts ------------------------------
# Hide the alerts of the manager in all dashboards and discover
#hideManagerAlerts: false
#
# ------------------------------- App logging level -----------------------------
# Set the logging level for the Wazuh App log files.
# Default value: info
# Allowed values: info, debug
#logs.level: info
#
# -------------------------------- Enrollment DNS -------------------------------
# Set the variable WAZUH_REGISTRATION_SERVER in agents deployment.
# Default value: ''
#enrollment.dns: ''
#
# Wazuh registration password
# Default value: ''
#enrollment.password: ''
#-------------------------------- API entries -----------------------------------
#The following configuration is the default structure to define an API entry.
#
#hosts:
#  - <id>:
      # URL
      # API url
      # url: http(s)://<url>

      # Port
      # API port
      # port: <port>

      # Username
      # API user's username
      # username: <username>

      # Password
      # API user's password
      # password: <password>

      # Run as
      # Define how the app user gets his/her app permissions.
      # Values:
      #   - true: use his/her authentication context. Require Wazuh API user allows run_as.
      #   - false or not defined: get same permissions of Wazuh API user.
      # run_as: <true|false>
hosts:
  - default:
     url: https://localhost
     port: 55000
     username: wazuh-wui
     password: wazuh-wui
     run_as: false
`
