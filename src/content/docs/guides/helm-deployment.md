---
title: Helm Deployment
description: A guide on how to deploy Scraperr with helm.
---

# Deploying Scraperr with Helm

This guide will walk you through deploying Scraperr using Helm, the Kubernetes package manager.

## Prerequisites

- Kubernetes cluster
- Helm 3.x installed
- kubectl configured to communicate with your cluster

## Adding the Helm Repository

First, add the Scraperr Helm repository:

```bash
helm repo add scraperr https://jaypyles.github.io/helm/charts/scraperr
```

Update your local Helm repository cache:

```bash
helm repo update
```

## Installing Scraperr

To install Scraperr with default configuration:

```bash
helm install scraperr scraperr/scraperr
```

## Customizing the Installation

You can customize your Scraperr deployment by creating a custom values file or by passing values directly through the command line.

The default values file can be found at `helm/values.yaml` in the Scraperr repository. You can use this as a reference to create your own custom values file.

To install with a custom values file:

```bash
helm install scraperr scraperr/scraperr -f custom-values.yaml
```

## Verifying the Installation

To verify that Scraperr has been deployed successfully:

```bash
kubectl get pods -l app.kubernetes.io/name=scraperr
```

## Upgrading Scraperr

To upgrade an existing Scraperr deployment:

```bash
helm upgrade scraperr scraperr/scraperr
```

## Uninstalling Scraperr

To uninstall Scraperr:

```bash
helm uninstall scraperr
```

## Configuration

The following table lists the configurable parameters of the Scraperr chart and their default values.

| Parameter | Description | Default |
|-----------|-------------|---------|
| `replicaCount` | Number of Scraperr replicas | `1` |
| `image.repository` | Scraperr image repository | `scraperr` |
| `image.tag` | Scraperr image tag | `latest` |
| `image.pullPolicy` | Image pull policy | `IfNotPresent` |
| `service.type` | Kubernetes service type | `ClusterIP` |
| `service.port` | Kubernetes service port | `80` |

For a complete list of configurable parameters, please refer to the `helm/values.yaml` file in the Scraperr repository.