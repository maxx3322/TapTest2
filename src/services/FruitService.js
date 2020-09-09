import axios from "axios"

export default {
  async getFruits() {
    let res = await axios.get("http://localhost:3000/api/fruits");
    return res.data;
  },
  async getEventSingle(fruitId) {
    let res = await axios.get("http://localhost:3000/api/fruits/" + fruitId);
    return res.data;
  }
}