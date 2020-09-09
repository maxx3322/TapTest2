<template>
  <div class="fruits container">
    <h2>
    Check out our Fruits
    </h2>
<div v-for="fruit in fruits" :key="fruit.id">
<ul>
  <li>{{fruits.img}}</li>
  <li>{{fruits.name}}</li>
  <li>{{fruits.price}}</li>
</ul>
</div>
      </div>

  
</template>
<script>
import axios from 'axios'; 
export default{
    data() {
    return {
      fruits: [],
      
    }
  },
mounted(){
  var self = this; 
  axios.get('http://localhost:3000/api/fruits')
  .then(function(res){
      self.fruits = res.data; 
      console.log('Data', res.data); 

  })
  .catch(function(error){
      console.log('Eroor: ', error); 

  })
    
    
  }

}

</script>
<style lang="scss" scoped>
 
</style>