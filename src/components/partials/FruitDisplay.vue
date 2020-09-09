<template>
  <div>
<ul>
  <li>img src="{{fruits.img}}"</li>
  <li>{{fruits.title}}</li>
  <li>{{fruits.description}}</li>
  <li>{{fruits.price}}</li>
  <li>{{fruits.Like}}</li>

  <button @click="increase">Like</button>
</ul>
    
     
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
  axios.get('http://localhost:3000/api/fruits:id')
  .then(function(res){
      self.fruits = res.data; 
      console.log('Data', res.data); 

  })
  .catch(function(error){
      console.log('Eroor: ', error); 

  })

//   axios.get('http://localhost:3000/api/fruits:id')
//   .then(function increase(res){
//       this.like++; 
        
//   }

      
  
  
 

    
    
  }

}
</script>
<style lang="scss" scoped>
  
