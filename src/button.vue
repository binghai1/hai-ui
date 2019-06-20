<template>
        <button class="h-button" :class="{[`icon-${iconPosition}`]: true}">
    <h-icon v-if="icon" :name="icon"></h-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
     export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {type:String},
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
        .h-button{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;
            vertical-align: middle;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg);
            &:hover{
            border-color: var(--border-color-hover) ;
            }
            &:active{
                background-color: var(--button-active-bg);
            }
            &:focus{
                outline: none;
            }
            > .icon{
                margin-right: 0.5em;
                order: 1;
            }
            > .content{
                order: 2
            }
            &.icon-right{
                > .icon{
                    margin-right: 0;
                    margin-left: .5em;
                    order:2
                }
                > .content{
                    order:1
                }
                
            }
            
         }
       
</style>