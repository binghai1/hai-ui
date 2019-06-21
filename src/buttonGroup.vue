<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style lang="scss" scoped>
     .wrapper{
         display: inline-flex;
         vertical-align: middle;
         & .h-button{
             border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:hover{
                z-index: 1;
            }
            &:first-child{
             border-top-left-radius: var(--border-radius);
             border-bottom-left-radius: var(--border-radius);
                }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
         }
        
     }
</style>