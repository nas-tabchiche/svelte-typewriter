<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<h1>Scramble mode</h1>

<hr>

<pre>
  &lt;Typewriter scramble /&gt;
</pre>

<Typewriter scramble>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter scramble interval=&lcub;80&rcub; /&gt;
</pre>

<Typewriter scramble interval={80}>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter scramble interval=&lcub;80&rcub; delay=&lcub;3000&rcub; /&gt;
</pre>

<Typewriter scramble interval={80} delay={3000}>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter scramble interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor=&lcub;false&rcub; /&gt;
</pre>

<Typewriter scramble interval={80} delay={3000} cursor={false}>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter scramble interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor='limegreen' /&gt;
</pre>

<Typewriter scramble interval={80} delay={3000} cursor='limegreen'>
  <slot />
</Typewriter>

<hr>

<pre>
  &lt;Typewriter scramble interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor='limegreen' on:done=&lcub;() =&gt; console.log('Hello World!')&rcub; /&gt;
</pre>

<Typewriter scramble interval={80} delay={3000} cursor='limegreen' on:done={() => console.log('Hello World!')}>
  <slot />
</Typewriter>
