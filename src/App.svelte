<script lang="ts">
  import "./app.css";
  import { Button } from "$lib/components/ui/button";
</script>

<main>
  <div class="content">
    <h1>Rsbuild with Svelte</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <Button class="w-50 mx-auto">Click me</Button>
  </div>
</main>

<style>
  .content {
    display: flex;
    min-height: 100vh;
    line-height: 1.1;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }

  .content h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  .content p {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }
</style>
