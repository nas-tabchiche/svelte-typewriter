<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Loadable from 'svelte-loadable'
  import TypewriterMode from './components/TypewriterMode.svelte'
</script>

<Router url="/">
  <Link to="/">Default</Link>
  <Link to="/cascade">Cascade</Link>
  <Link to="/loop">Loop</Link>
  <Link to="/looprandom">LoopRandom</Link>
  <Link to="/scramble">Scramble</Link>
  <Route path="/">
    <TypewriterMode loader={() => import('./pages/Default.svelte')} />
  </Route>
  <Route path="/cascade">
    <TypewriterMode loader={() => import('./pages/Cascade.svelte')} />
  </Route>
  <Route path="/loop">
    <TypewriterMode loader={() => import('./pages/Loop.svelte')} />
  </Route>
  <Route path="/looprandom">
    <TypewriterMode loader={() => import('./pages/LoopRandom.svelte')} />
  </Route>
  <Route path="/scramble">
    <TypewriterMode loader={() => import('./pages/Scramble.svelte')} />
  </Route>
</Router>
