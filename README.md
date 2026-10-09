# usage-status

Shows your Claude extra-usage spend in the Claude Code status line, like `Claude: $95.20 / $125.00 (76%)`. It updates after each reply. If it can't read your monthly spend, it shows the current session's cost instead.

## Install

Run this in a Claude Code terminal session:

```
/plugin install usage-status --marketplace kerby82/claude-usage-status
```

Answer `y` to add the marketplace, then press Enter to pick the user scope. After that, it loads in every new session, including the Claude desktop Code tab.
