<template>
  <div class="relative flex" :style="styles">
    <input class="toggle toggle-light" :id="name" type="checkbox" v-model="checked" :value="val"
			@change="e => triggerChange()"/>
    <label class="toggle-btn" :for="name"></label>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    val: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    uncheckedColor: {
      type: String,
      default: '#696969'
    },
    checkedColor: {
        type: String,
        default: '#F6CE60'
    },
    backgroundColor: {
        type: String,
        default: '#c4c4c4'
    }
  },
  setup(props) {
    const checkedProxy = ref(false)
    const checked = computed({
      get: () => props.value,
      set: val => props.checkedProxy = val
    })
    const styles = computed(() => ({
      '--unchecked-color': props.uncheckedColor,
      '--checked-color': props.checkedColor,
      '--bg-color': props.backgroundColor
    }))

    function triggerChange() {
      this.$emit('input', checkedProxy)
    }

    return {
      checkedProxy, checked, triggerChange, styles
    }
  }
})
</script>

<style scoped lang="scss">
.toggle {
	display: none;

	&,
  &::after,
  &::before,
	& *,
  & *::after,
  & *::before,
	& + .toggle-btn {
		box-sizing: border-box;
		&::selection {
			background: none;
		}
	}

	+ .toggle-btn {
		outline: 0;
		display: block;
		width: 2.3em;
		height: 1.2em;
		position: relative;
		cursor: pointer;
    user-select: none;
		&::after,
    &::before {
			position: relative;
			display: block;
			content: "";
			width: 50%;
			height: 100%;
		}

		&::after {
			left: 0;
		}

		&::before {
			display: none;
		}
	}

	&:checked + .toggle-btn::after {
		left: 50%;
	}
}

// themes
.toggle-light {
	+ .toggle-btn {
    background: #c4c4c4;
    border-radius: 1rem;
    padding: 1px;
    border: solid 1px rgba(0,0,0,.20);
		transition: all .4s ease;
		&::after {
			border-radius: 50%;
			background: #ffffff;
			transition: all .2s ease;
		}
	}

	&:checked + .toggle-btn {
    @apply bg-primary;
	}
}
</style>