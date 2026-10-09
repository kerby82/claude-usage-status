# usage-status

Shows your Claude extra-usage spend and the current session's cost in the Claude Code status line, like `Claude: $95.20 / $125.00 (76%) · Session: $1.23`. It updates after each reply. If it can't read your monthly spend, it shows only the session cost.

## Install

Run these in a regular terminal app, not inside a Claude chat:

```bash
claude plugin marketplace add kerby82/claude-usage-status
claude plugin install usage-status@usage-status
```

Or, from inside a Claude Code terminal session:

```
/plugin install usage-status --marketplace kerby82/claude-usage-status
```

Answer `y` to add the marketplace, then press Enter to pick the user scope.

Start a new session afterward. Sessions that are already open don't pick it up. It works in the terminal and in the Claude desktop Code tab.

## Troubleshooting

- **`Permission denied (publickey)`:** your machine has no SSH key for GitHub. Use the HTTPS URL instead:
  ```bash
  claude plugin marketplace add https://github.com/kerby82/claude-usage-status.git
  ```
- **`could not lock config file ... .git/config`:** you ran the command from a sandboxed shell, such as a `!` command inside a Claude chat. Run it in a regular terminal app.
- **`source doesn't match its extraKnownMarketplaces entry`:** the marketplace is already added under its other name. You can skip this step.
- **`/plugin` isn't available:** the desktop Code tab doesn't support slash-command installs. Use the terminal commands above.
- **It shows `Session: $...` only:** the plugin couldn't read your monthly extra usage, so it shows only the session part. One known cause is that extra usage isn't turned on for your account.

## Update

```bash
claude plugin marketplace update usage-status
claude plugin update usage-status@usage-status
```
