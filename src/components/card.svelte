<script>
  import dateFormat from "dateformat";
  export let data = {};
</script>

<div class="card">
  <div
    class="img"
    style="background-image: url(https://turizm.bitrix24.ru/{data
      .PROPERTY_152?.[0]?.value?.downloadUrl})"
  />
  <div class="footer">
    <div class="">{data["NAME"]}</div>
    {#if data.PROPERTY_326?.value}<div class="">{data.PROPERTY_326?.value}</div>
    {/if}

    {#if data.PROPERTY_322?.value}
      <div class="">{dateFormat(data.PROPERTY_322?.value, "d mmmm")}</div>
    {/if}
    {#if data.PROPERTY_318?.value}<div class="">
        ночей {data.PROPERTY_318?.value}
      </div>
    {/if}

    <div class="">{data["PRICE"]}</div>

    {#if data.PROPERTY_320?.value}
      <div class="">звезд {data.PROPERTY_320?.value}</div>{/if}
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
    min-height: 326px;
  }
  .footer {
    height: 100%;
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
