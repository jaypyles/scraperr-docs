---
title: Optional Configuration
description: A guide on how to configure the app properly
---

## Optional Configuration

### Disabling Registration

If `REGISTRATION_ENABLED` is set to False, the application will disable new user registrations. In this mode, it relies on default admin credentials to provide access. If any of the following environment variables are not provided:

- `DEFAULT_USER_EMAIL`
- `DEFAULT_USER_PASSWORD`
- `DEFAULT_USER_FULL_NAME`

the application will exit on startup with an error, since it cannot create the required default user.

```yaml
scraperr_api:
  environment:
      - REGISTRATION_ENABLED=False
      - DEFAULT_USER_EMAIL=admin@test.com
      - DEFAULT_USER_PASSWORD=test
      - DEFAULT_USER_FULL_NAME=test
```

## Job Status Notifications

Using these configurations, after a job has finished running it will send a notification to the desired channel.

### Discord

```yaml
scraperr_api:
  environment:
      - NOTIFICATION_CHANNEL=discord
      - NOTIFICATION_WEBHOOK_URL=<url>
      - SCRAPERR_FRONTEND_URL=<url>
```

### SMTP

```yaml
scraperr_api:
  environment:
      - NOTIFICATION_CHANNEL=email
      - EMAIL=<email>
      - TO=<to>
      - SMTP_HOST=<host>
      - SMTP_PORT=<port>
      - SMTP_USER=<user>
      - SMTP_PASSWORD=<password>
      - USE_TLS=True | False
      - SCRAPERR_FRONTEND_URL=<url>
```

## Disable Recordings

Set the environment variable `RECORDINGS_ENABLED` in the `docker-compose.yml` to `false`

```yml
scraperr_api:
  environment:
      - RECORDINGS_ENABLED=false
```

## Connect to VNC

Expose the port 5900, and use a VNC viewer to connect

```yml
scraperr_api:
  ports:
    - '5900:5900'
```