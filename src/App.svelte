<script>
  import Card from "./components/card.svelte";
  import { onMount } from "svelte";
  let turs = [];

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
  });
</script>

<div class="card-wrapper">
  {#each turs as tur}
    <Card data={tur}/>
  {/each}
</div>

<style>
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: ; */
  }
</style>
