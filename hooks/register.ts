import type { EngineInterface, Register } from 'claude-code'

async function refresh($: EngineInterface) {
  try {
    const r: any = await $.tool.call({ tool: 'mcp__ccd_session_mgmt__get_usage' } as any)
    const x = JSON.parse(r.text ?? '{}').plan?.extraUsage
    if (x?.enabled) {
      return $.ui.status(`Claude: $${x.spent} / $${x.monthlyLimit} (${x.percentUsed}%)`)
    }
  } catch {}
  const { cost } = await $.session.usage()
  $.ui.status(cost ? `Session: $${cost.usd.toFixed(2)}` : undefined)
}

// ponytail: refreshes on session start and after each turn, not on a timer
export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const r = await next(e)
    void refresh($)
    return r
  })

  on('turn.complete', async ($, e, next) => {
    const r = await next(e)
    void refresh($)
    return r
  })
}
