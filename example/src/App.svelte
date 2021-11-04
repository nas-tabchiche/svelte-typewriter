<script>
  import { Router, Link, Route } from 'svelte-routing'
  import TypewriterMode from '@example/components/TypewriterMode.svelte'
</script>

<Router url="/">
  <Link to="/">Default</Link>
  <Link to="/cascade">Cascade</Link>
  <Link to="/loop">Loop</Link>
  <Link to="/looprandom">LoopRandom</Link>
  <Link to="/scramble">Scramble</Link>
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
</Router>
