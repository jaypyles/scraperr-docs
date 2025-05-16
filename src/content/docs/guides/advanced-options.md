---
title: Advanced Options
description: Advanced configuration options for Scraperr jobs.
---

# Advanced Options

This guide covers advanced configuration options for Scraperr jobs.

## Collection Options

### Multi Page Scrape

If the website you are scraping has multiple pages of data, you can enable multi page scraping. This will automatically click through all links within the same domain until there are no more pages to scrape.

### Media Collection

Enable media collection to automatically download all media files (images, videos, documents) found during the scraping process. This feature:

- Downloads all media files referenced in the scraped content
- Organizes media files in a structured directory
- Preserves original file names and formats
- Supports common media types (jpg, png, gif, mp4, pdf, etc.)

## Custom Options

### Custom JSON Headers

If you need to send custom headers with your request, you can do so by entering them in the `Headers` field. This is useful for:
- Setting custom User-Agent strings
- Adding authentication headers
- Modifying request behavior

### Custom Cookies

You can provide custom cookies for your scraping job to handle authenticated sessions or maintain state. This is particularly useful for:
- Accessing authenticated content
- Maintaining user sessions
- Bypassing certain access restrictions

Enter your cookies in JSON format in the `Cookies` field. For example:

```json
{
    "name": "name",
    "value": "value",
    "domain": "domain",
    "path": "path"
}
```

### Proxies

Enter in a comma separated list of proxies to use for the request. This is useful for:
- Avoiding rate limiting
- Accessing geo-restricted content
- Distributing requests across multiple IPs

Your proxies should be a comma separated list of Playwright formatted proxies, for example: 

```json
{
  "server": "http://myproxy.com:3128",
  "username": "usr",
  "password": "pwd"
}
```



