<template>
  <h1>Id: {{ $route.params.id}} </h1>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  validate(data){
    console.log(data.params.id);
    return true;
  },
  head(){
    return {
      title: 'SOldo'
    }
  }
}
</script>
