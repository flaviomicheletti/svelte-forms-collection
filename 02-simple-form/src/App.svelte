<script>
  import { user, getUser } from "./store.js";

  function handleSubmit(event) {
    const formData = new FormData(event.target);
    const formUser = {};
    for (const [k, v] of formData.entries()) {
      formUser[k] = v;
    }
    console.log("valor no form", formUser);
    console.log("valor no store", getUser());
  }
</script>

<style>
  .groups {
    margin: 0 0 10px 0;
  }

  .label {
    margin: 0;
    padding: 0;
    font-size: 1em;
  }

  .label_flex {
    display: flex;
  }

  .label_flex > span {
    display: block;
    margin-left: 5px;
  }
</style>

<form action="#xxx" on:submit|preventDefault={handleSubmit}>
  <div class="groups">
    <label for="nome"><b>Nome</b></label>
    <input type="text" name="nome" bind:value={$user.nome} required />
  </div>
  <div class="groups">
    <label for="cpf"><b>CPF</b></label>
    <input
      type="text"
      name="cpf"
      bind:value={$user.cpf}
      pattern={String.raw`\d{3}.\d{3}.\d{3}-\d{2}`}
      required />
  </div>
  <div class="groups">
    <h4 class="label">Sexo</h4>
    <label class="label_flex" for="sexo_m"><input
        type="radio"
        name="sexo"
        bind:group={$user.sexo}
        value="Masculino"
        id="sexo_m" /><span>Masculino</span></label>
    <label class="label_flex" for="sexo_f"><input
        type="radio"
        name="sexo"
        bind:group={$user.sexo}
        value="Feminino"
        id="sexo_f" /><span>Feminino</span></label>
  </div>
  <div class="groups">
    <label for="nascimento"><b>Data de nascimento</b></label>
    <input type="date" name="nascimento" bind:value={$user.nascimento} />
  </div>
  <button type="submit">Go!!!</button>
</form>

<p>
  { $user.nome } do sexo { $user.sexo.toLowerCase() }, nasceu no dia
  { new Intl.DateTimeFormat('pt-BR', {timeZone: 'America/Sao_Paulo', dateStyle: 'short'}).format(new Date(`${$user.nascimento} 00:00:00`)) }
  e possui o CPF nr { $user.cpf }.
</p>