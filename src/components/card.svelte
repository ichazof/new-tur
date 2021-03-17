<script>
  export let data = {}
</script>

<div class="card">
  <div class="img">sdsdsd</div>
  <div class="footer">
    {data['NAME']}
    {data['PRICE']}
  </div>
</div>

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 350px;
    width: 320px;
    margin: auto;
    text-align: center;
    font-family: arial;
    height: 100%;
    margin: 16px;
  }
  .card:hover {
    opacity: 0.7;
  }
</style>
