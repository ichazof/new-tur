<script>
  import { Modal, Button, Card, Input, Field } from "svelte-chota";
  import MaskInput from "svelte-input-mask/MaskInput.svelte";
  export let open = true;
  const modal_hide = (event) => (open = false);

</script>

<Modal bind:open={open}>
  <Card>

    <h2>Оставить заявку на тур</h2>
    <Field label="Ваше имя">
      <Input value="" placeholder="Имя"/>
    </Field>
    <Field label="Ваш телефон">
      <MaskInput
        mask="+7 (000) 000-0000"
        size={18}
        maskChar=" "
/>
    </Field>
    <div slot="footer" class="is-right">
      <Button clear on:click={modal_hide}>Отменить</Button>
      <Button primary on:click={modal_hide}>Отпраить</Button>
  </div>
  </Card>
</Modal>

<style lang="scss">
</style>
