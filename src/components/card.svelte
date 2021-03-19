<script>
  export let data = {}
</script>

<div class="card">
  <div class="img" style="background-image: url(https://turizm.bitrix24.ru/{data.PROPERTY_152?.[0]?.value?.downloadUrl})"></div>
  <div class="footer">
    {data['NAME']}
    {data['PRICE']}
    {#if data.PROPERTY_318?.value} ночей {data.PROPERTY_318?.value}{/if}
    {#if data.PROPERTY_320?.value} звезд {data.PROPERTY_320?.value}{/if}
    
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
 
  .img {
    min-height: 200px;
    max-height: 200px;
    background-size: cover;
    background-size: 100%;
    background-repeat: no-repeat;
    transition: 3s;
  }
  .card:hover {
    opacity: 0.7;
  }
  .card:hover .img {
    background-size: 120% 120%;
  }
</style>
