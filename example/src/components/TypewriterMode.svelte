<script>
  // Submit PR with typings for `svelte-loadable`
  import Loadable from 'svelte-loadable'

  export let loader
</script>

<Loadable {loader} let:component>
  <svelte:component this={component}>
    <h3 data-static>This text won't be animated</h3>
    <p>Normal text</p>
    <p>&&& Ampersands &&&</p>
    <div>
      <p>Nested content</p>
      <h3 data-static>Neither do this one</h3>
      <ul>
        <li>Yet another nested element</li>
        <li>
          <code>Hello World!</code>
        </li>
      </ul>
    </div>
    <h3 data-static>Immutable!</h3>
  </svelte:component>
</Loadable>

