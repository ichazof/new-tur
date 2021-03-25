<script>
  import "chota";
  import Card from "./components/card.svelte";
  import { onMount } from "svelte";
  import Form from "./components/form.svelte";

  let turs = [];
  let modal_open = false

  onMount(() => {
    fetch("https://anexkrk.alyans.ru/site/")
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        response.json().then((data) => {
          console.log(data);
          turs = data.result;
          console.log(turs);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  })

  function openModal () {
    modal_open = true    
  }
</script>
<div class="">
  <Form bind:open={modal_open}></Form>

  <main>
    <div class="card-wrapper">
      {#each turs as tur}
        <Card data={tur} on:modal={openModal}/>
      {/each}
    </div>
  </main>
</div>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
