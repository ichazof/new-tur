<script>
  import dateFormat from "dateformat";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function showModal() {
		dispatch('modal', {
			price,
      name: data["NAME"],
      date: dateFormat(data.PROPERTY_322?.value, "d mmm")
		});
	}

  dateFormat.i18n = {
    monthNames: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декакбря",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  };
  export let data = {};
  const formatter = new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 0,
  }).format;
  $: oldPrice =
    formatter(parseInt(data?.["PRICE"] * ((Math.random() * 40) / 100 + 1))) ||
    undefined;
  $: price = formatter(data?.["PRICE"]) || undefined;
</script>

<div class="card" on:click={showModal}>
  <div
    class="img"
    style="background-image: url(https://turizm.bitrix24.ru/{data
      .PROPERTY_152?.[0]?.value?.downloadUrl})"
  />
  <div class="footer">
    {#if data.PROPERTY_320?.value}
      <div class="stars">
        {#each new Array(Number(data.PROPERTY_320.value)) as x}
          <span class="stars__item" />
        {/each}
      </div>
    {/if}
    <div class="title">{data["NAME"]}</div>
    {#if data.PROPERTY_326?.value}<div class="country">
        {data.PROPERTY_326?.value}
      </div>
    {/if}

    {#if data.PROPERTY_322?.value}
      <span class="date">{dateFormat(data.PROPERTY_322?.value, "d mmm")}</span>
    {/if}
    {#if data.PROPERTY_318?.value}<span class="date">
        на {data.PROPERTY_318?.value} ночей
      </span>
    {/if}
    <div class="price-wrapper">
      <span class="old-price">{oldPrice}</span>
      <span class="price">{price}</span>
    </div>
  </div>

</div>

<style lang="scss">
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 350px;
    width: 320px;
    margin: auto;
    border-radius: 5px;
    font-family: arial;
    overflow: hidden;
    height: 100%;
    padding: 0;
    margin: 16px;
    cursor: pointer;
    min-height: 362px;
    .img {
      min-height: 200px;
      max-height: 200px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      transition: background-size 2s ease-in;
      background-position: 50% 50%;
    }
    &:hover {
      opacity: 0.7;
      .img {
        background-size: 120% 120%;
      }
    }
    .stars {
      &__item {
        padding: 5px;
        margin-left: 3px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMC42NTIzNDQgMTg1LjkwMjM0NGMtMy4zNTE1NjMtMTAuMzY3MTg4LTEyLjU0Njg3NS0xNy43MzA0NjktMjMuNDI1NzgyLTE4LjcxMDkzOGwtMTQ3Ljc3MzQzNy0xMy40MTc5NjgtNTguNDMzNTk0LTEzNi43Njk1MzJjLTQuMzA4NTkzLTEwLjAyMzQzNy0xNC4xMjEwOTMtMTYuNTExNzE4LTI1LjAyMzQzNy0xNi41MTE3MThzLTIwLjcxNDg0NCA2LjQ4ODI4MS0yNS4wMjM0MzggMTYuNTM1MTU2bC01OC40MzM1OTQgMTM2Ljc0NjA5NC0xNDcuNzk2ODc0IDEzLjQxNzk2OGMtMTAuODU5Mzc2IDEuMDAzOTA2LTIwLjAzMTI1IDguMzQzNzUtMjMuNDAyMzQ0IDE4LjcxMDkzOC0zLjM3MTA5NCAxMC4zNjcxODctLjI1NzgxMyAyMS43MzgyODEgNy45NTcwMzEgMjguOTA2MjVsMTExLjY5OTIxOSA5Ny45NjA5MzctMzIuOTM3NSAxNDUuMDg5ODQ0Yy0yLjQxMDE1NiAxMC42Njc5NjkgMS43MzA0NjggMjEuNjk1MzEzIDEwLjU4MjAzMSAyOC4wOTM3NSA0Ljc1NzgxMyAzLjQzNzUgMTAuMzI0MjE5IDUuMTg3NSAxNS45Mzc1IDUuMTg3NSA0LjgzOTg0NCAwIDkuNjQwNjI1LTEuMzA0Njg3IDEzLjk0OTIxOS0zLjg4MjgxM2wxMjcuNDY4NzUtNzYuMTgzNTkzIDEyNy40MjE4NzUgNzYuMTgzNTkzYzkuMzI0MjE5IDUuNjA5Mzc2IDIxLjA3ODEyNSA1LjA5NzY1NyAyOS45MTAxNTYtMS4zMDQ2ODcgOC44NTU0NjktNi40MTc5NjkgMTIuOTkyMTg3LTE3LjQ0OTIxOSAxMC41ODIwMzEtMjguMDkzNzVsLTMyLjkzNzUtMTQ1LjA4OTg0NCAxMTEuNjk5MjE5LTk3Ljk0MTQwNmM4LjIxNDg0NC03LjE4NzUgMTEuMzUxNTYzLTE4LjUzOTA2MyA3Ljk4MDQ2OS0yOC45MjU3ODF6bTAgMCIgZmlsbD0iI2ZmYzEwNyIvPjwvc3ZnPg==");
      }
    }
    .title {
      font-weight: 600;
      font-size: 16px;
      margin-top: 3px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-height: 22px;
    }
    .country {
      font-size: 14px;
      line-height: 1.39;
      font-weight: 400;
      opacity: 0.6;
    }
    .date {
      line-height: 1.39;
      color: #686868;
      font-weight: 300;
      text-align: left;
      font-size: 12px;
    }
    .price-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .price {
      font-family: "Open Sans", "Trebuchet MS", arial, sans-serif;
      font-size: 24px;
      font-weight: 400;
      height: 24px;
      line-height: 24px;
      text-align: right;
      text-size-adjust: 100%;
      &:after {
        content: " руб";
        display: inline;
        font-size: 10px;
        opacity: 0.8;
        text-transform: uppercase;
      }
    }
    .old-price {
      font-family: "Open Sans", "Trebuchet MS", arial, sans-serif;
      font-size: 14px;
      line-height: 1.39;
      font-weight: 400;
      height: 24px;
      text-align: left;
      text-decoration: line-through;
      opacity: 0.6;
      text-size-adjust: 100%;
      &:after {
        content: " руб";
        display: inline;
        font-size: 10px;
        opacity: 0.8;
        text-transform: uppercase;
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 8px;
      min-height: 120px;
    }
  }
</style>
