const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  filters: {
    showPrice(price) {
      return `¥${price.toFixed(2)}`;
    }
  },
  computed: {
    totalPrices() {
      let totalPrice = 0;
      this.books.forEach((value, number, _) => {
        totalPrice += (value.count * value.price);
      })
      return totalPrice;
    }
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count > 1 ? this.books[index].count-- : 1;
    },
    removeHandler(index) {
      //删除一行
      this.books.splice(index, 1);
    }
  },
});

//编程范式: 命令式编程/声明式编程/
// 面向对象编程(第一公民: 对象)/函数式编程(第一公民: 函数)
const nums = [10, 20, 111, 222, 444, 40, 50];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const result = nums.filter(value =>  value < 100 ).map(value => value * 2).reduce(reducer);
console.log(result);
