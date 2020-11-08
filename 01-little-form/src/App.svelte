<script>
import { user } from "./store.js";
</script>

<style>
  .content {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 10px;
  }
</style>

<h1>Form</h1>
<form class="content">
  <label>Nome</label>
  <input type="text" bind:value={$user.name} />
  <label>E-mail</label>
  <input type="text" bind:value={$user.email} />
  <label>Telefone</label>
  <input type="text" bind:value={$user.phone} />
</form>
<p>
	{JSON.stringify($user, 0, 2)}</p>

