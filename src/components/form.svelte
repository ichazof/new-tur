<script>
  import { Modal, Button, Card, Input, Field } from "svelte-chota";
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
    isSucces = false
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
      });
  };
</script>

<div class="modal1">
  <Modal bind:open>
    {#if isSucces}
      <Card>
        <h2>Спасибо, что обратились к нам, мы скоро с Вами свяжемся</h2>
      </Card>
    {:else}
      <Card>
        <h2>Оставить заявку на тур</h2>
        <h4>{price}</h4>

        <Field label="Ваше имя" value={name}>
          <Input bind:value={name} placeholder="Имя" />
        </Field>
        <Field label="Ваш телефон">
          <MaskInput
            bind:value={phone}
            mask="+7 (000) 000-0000"
            size={18}
            maskChar=" "
            on:change={handleChangePhone}
          />
        </Field>
        <div slot="footer" class="is-right">
          <Button clear on:click={modal_hide}>Отменить</Button>
          <Button primary on:click={send} bind:loading={isLoading}
            >Отпраить</Button
          >
        </div>
      </Card>
    {/if}
  </Modal>
</div>

<style lang="scss">
  .modal1 {
    :global(.modal) {
      display: block;
      width: unset;
      height: unset;
    }
  }
</style>
