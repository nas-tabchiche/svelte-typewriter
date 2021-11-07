<script>
  import { Route } from 'tinro'
  import TypewriterMode from '@example/components/TypewriterMode.svelte'
</script>

<a href="/">Default</a>
<a href="/cascade">Cascade</a>
<a href="/loop">Loop</a>
<a href="/looprandom">LoopRandom</a>
<a href="/scramble">Scramble</a>

<Route path="/">
  <TypewriterMode loader={() => import('@example/pages/Default.svelte')} />
</Route>
<Route path="/cascade">
  <TypewriterMode loader={() => import('@example/pages/Cascade.svelte')} />
</Route>
<Route path="/loop">
  <TypewriterMode loader={() => import('@example/pages/Loop.svelte')} />
</Route>
<Route path="/looprandom">
  <TypewriterMode loader={() => import('@example/pages/LoopRandom.svelte')} />
</Route>
<Route path="/scramble">
  <TypewriterMode loader={() => import('@example/pages/Scramble.svelte')} />
</Route>
