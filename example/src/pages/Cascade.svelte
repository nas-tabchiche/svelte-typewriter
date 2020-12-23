<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<h1>Cascade mode</h1>

<hr>

<pre>
  &lt;Typewriter cascade /&gt;
</pre>

<Typewriter cascade>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter cascade interval=&lcub;80&rcub; /&gt;
</pre>

<Typewriter cascade interval={80}>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter cascade interval=&lcub;80&rcub; delay=&lcub;3000&rcub; /&gt;
</pre>

<Typewriter cascade interval={80} delay={3000}>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter cascade interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor=&lcub;false&rcub; /&gt;
</pre>

<Typewriter cascade interval={80} delay={3000} cursor={false}>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter cascade interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor='green' /&gt;
</pre>

<Typewriter cascade interval={80} delay={3000} cursor='green'>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter cascade interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor='green' on:done=&lcub;() =&gt; console.log('Hello World!')&rcub; /&gt;
</pre>

<Typewriter cascade interval={80} delay={3000} cursor='green' on:done={() => console.log('Hello World!')}>
  <slot />
</Typewriter>
