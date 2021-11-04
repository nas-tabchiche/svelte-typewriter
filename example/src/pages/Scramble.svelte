<script>
  import TypewriterControls from '@example/components/TypewriterControls.svelte'
</script>

<h1>Scramble mode</h1>

<hr>

<pre>
  &lt;Typewriter scramble /&gt;
</pre>

<TypewriterControls scramble={3000}>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter scramble=&lcub;5000&rcub; /&gt;
</pre>

<TypewriterControls scramble={5000}>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter scramble=&lcub;500&rcub; delay=&lcub;3000&rcub; /&gt;
</pre>

<TypewriterControls scramble={5000} delay={3000}>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter scramble=&lcub;5000&rcub; delay=&lcub;3000&rcub; scrambleSlowdown=&lcub;false&rcub; /&gt;
</pre>

<TypewriterControls scramble={5000} delay={3000} scrambleSlowdown={false}>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter
    scramble=&lcub;5000&rcub;
    delay=&lcub;3000&rcub;
    scrambleSlowdown=&lcub;false&rcub;
    on:done=&lcub;() =&gt; console.log('Hello World!')&rcub; /&gt;
</pre>

<TypewriterControls
    scramble={5000}
    delay={3000}
    scrambleSlowdown={false}
    on:done={() => console.log('Hello World!')}>
  <slot />
</TypewriterControls>
