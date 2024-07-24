<template>
  <button
    class="
      px-4 py-1 rounded
      text-white
      bg-blue-5 hover:bg-op-80 active:bg-op-100 disabled:bg-gray-400!
    "
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
  interface Props {
    disabled?: boolean;
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['click']);
</script>
