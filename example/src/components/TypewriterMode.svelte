<script>
  // Submit PR with typings for `svelte-loadable`
  import Loadable from 'svelte-loadable'

  export let loader
</script>

<Loadable {loader} let:component>
  <svelte:component this={component}>
    <p>Normal text</p>
    <p>&&& Ampersands &&&</p>
    <div>
      <p>Nested content</p>
      <ul>
        <li>Yet another nested element</li>
        <li>
          <code>Hello World!</code>
        </li>
      </ul>
    </div>
  </svelte:component>
</Loadable>

