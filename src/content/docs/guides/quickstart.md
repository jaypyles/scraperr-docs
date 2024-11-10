---
title: Quickstart Guide
description: A guide on how to get started with Scraperr.
---

## Summary

What is Scraperr? Scraperr is a self-hosted web scraping service that allows you to scrape websites and save the data to a database. The purpose of this application is to provide a simpler way to scrape websites, without all of the setup and configuration that you get with a tool like Puppeteer. The frontend of the app has been decoupled from the API which allows you to submit scraping jobs within other applications, or setup your own application to use the API.


## Installation

1. Clone the repo:

```bash
git clone https://github.com/jaypyles/Scraperr.git
```

2. Set up the environment variables in the `docker-compose.yml` file. Note: all of these variables do work with the default values, but you may want to change them.

```yaml
scraperr:
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.scraperr.rule=Host(`localhost`)" # change this to your domain, if not running on localhost
      - "traefik.http.routers.scraperr.entrypoints=web" # websecure if using https
      - "traefik.http.services.scraperr.loadbalancer.server.port=3000"

scraperr_api:
 environment:
      - LOG_LEVEL=INFO
      - MONGODB_URI=mongodb://root:example@webscrape-mongo:27017 # used to access MongoDB
      - SECRET_KEY=your_secret_key # used to encode authentication tokens (can be a random string)
      - ALGORITHM=HS256 # authentication encoding algorithm
      - ACCESS_TOKEN_EXPIRE_MINUTES=600 # access token expire minutes
  labels:
        - "traefik.enable=true"
        - "traefik.http.routers.scraperr_api.rule=Host(`localhost`) && PathPrefix(`/api`)" # change this to your domain, if not running on localhost
        - "traefik.http.routers.scraperr_api.entrypoints=web" # websecure if using https
        - "traefik.http.middlewares.api-stripprefix.stripprefix.prefixes=/api"
        - "traefik.http.routers.scraperr_api.middlewares=api-stripprefix"
        - "traefik.http.services.scraperr_api.loadbalancer.server.port=8000"

mongo:
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
```

3. Use the `Makefile` to start up the containers:

```bash
make up
```

After the containers are up and running, you can access the Scraperr API at `http://localhost` if using the default traefik router. Which should show you this page:

![Scraperr API](../../../assets/images/front-page.png)

## Submitting a Scraping Job

The first step to submitting a scraping job is to enter in the URL of the website you want to scrape. When you enter in the URL, you will see a table appear, where you can fill in the selectors for the data you want to scrape. You can name your elements and provide an `xpath` for the element you want to scrape.

![Scraping Job](../../../assets/images/scrape-job.png)

## Optional Job Settings

- **Multi Page Scrape**: If the website you are scraping has multiple pages of data, you can enable multi page scraping. This will automatically click through all links within the same domain until there are no more pages to scrape.

- **Custom JSON Headers**: If you need to send custom headers with your request, you can do so by entering them in the `Headers` field.

- **Proxies**: Enter in a comma separated list of proxies to use for the request.

Upon hitting submit, your job will be added to the queue and you will be prompted to go to the table of jobs.

![Table of Jobs](../../../assets/images/jobs.png)

From here, you have a few options, which will be covered more in the [Job Table Guide](/guides/job-table). But from here the status of the job will be displayed, and once it has been marked as `completed`, you can view the results, by hitting the "Download" button. This will download the data as a CSV file, which you can then view in your spreadsheet application of choice.

![Download Results](../../../assets/images/download-results.png)

## What's Next?

Now that you have some data, you can query it in your own application, or even use the [AI integration](/guides/ai) to answer questions about the data.


