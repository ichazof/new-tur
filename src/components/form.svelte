<script>
  import MaskInput from "svelte-input-mask/MaskInput.svelte";
  export let open = true;
  export let modalData = {};
  let name = "";
  let phone = "";
  let isSucces = false;
  let isLoading = false;
  $: price = `Вам понравилось предложение ${modalData?.name} за ${modalData?.price}`;
  $: title = `${modalData?.name}, ${modalData?.date},  ${modalData?.price}rub`;
  $: onOpen(open);
  function onOpen() {
    name = "";
    phone = "";
    isSucces = false;
  }
  const modal_hide = () => (open = false);
  const handleChangePhone = (event) => {
    phone = event.detail.inputState.maskedValue.split(" ").join("");
  };
  const send = () => {
    isLoading = true;
    fetch("https://anexkrk.alyans.ru/site/form.lead.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, name, title }),
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        isSucces = true;
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      })
      .finally(() => {
        isLoading = false;
        setTimeout(() => {
          open = false
        }, 10000)
      });
  };
</script>

<div class="anex-modal__background" class:anex-modal__background_open={open}>
  <div class="anex-modal__content">

    {#if isSucces}
      <h2>Спасибо, что обратились к нам, мы скоро с Вами свяжемся</h2>
      <button on:click={modal_hide} type="button" class="btn btn-primary"
          >Закрыть</button
        >
    {:else}
      <h2>Оставить заявку на тур</h2>
      <h4>{price}</h4>
      <div class="mb-3">
        <label for="name" class="form-label">Ваше имя</label>
        <input
          class="form-control"
          bind:value={name}
          placeholder="Имя"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Ваш телефон</label>
        <MaskInput
          class="form-control"
          bind:value={phone}
          mask="+7 (000) 000-0000"
          size={18}
          maskChar=" "
          id="phone"
          on:change={handleChangePhone}
        />
      </div>
  
      <div class="is-right">
        <button on:click={modal_hide} type="button" class="btn btn-primary"
          >Отменить</button
        >
        <button on:click={send} type="button" class="btn btn-primary"
          >Отправить</button
        >
        <!-- bind:loading={isLoading} -->
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .anex-modal {
    &__background {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0, 0, 0); /* Fallback color */
      background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
      &_open {
        display: block;
      }
    }
    &__content {
      background-color: #fefefe;
      margin: 15% auto; /* 15% from the top and centered */
      padding: 20px;
      z-index: 100;
      border: 1px solid #888;
      max-width: 600px;
      width: 80%; /* Could be more or less, depending on screen size */
    }
  }

  // .close {
  //   color: #aaa;
  //   float: right;
  //   font-size: 28px;
  //   font-weight: bold;
  // }

  // .close:hover,
  // .close:focus {
  //   color: black;
  //   text-decoration: none;
  //   cursor: pointer;
  // }
</style>
