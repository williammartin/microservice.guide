# Lifecycle

A service **MAY** define custom lifecycle commands for startup and shutdown.

```yaml
lifecycle:
  startup:
    command: ./startup.sh
    timeout: 300
  shutdown:
    command: ./shutdown.sh
    timeout: 300
```

## Startup
The `command` **MAY** start a service which is blocking (e.g., HTTP or RPC server). Exclude the `timeout` and include the `port` in which to bind to.


```yaml{3,4}
lifecycle:
  startup:
    command: ["/bin/server", "-p", "5000"]
    port: 5000
```

Based on the configuration above, the Docker run command would be the following:

```bash
$ docker run -d -p 81433:5000 \
           --entrypoint /bin/server \
           foobar -p 5000
```


## Shutdown

The shutdown command is called when the container will be removed after it has been stopped.

The `shutdown` **MUST** exit within 30 seconds.
The `timeout` **MUST** be less than `30000` milliseconds (the default if not provided).
