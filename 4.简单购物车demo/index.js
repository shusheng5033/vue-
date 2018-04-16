var app = new Vue({
  el:'#app',
  data:{
    checkedall:false,
    list:[
      {
        id:1,
        name:'iPhone7',
        price:6188,
        count:1,
        checked:false
      },
      {
        id:2,
        name:'ipad Pro',
        price:5888,
        count:1,
        checked:false
      },
      {
        id:3,
        name:'MacBook Pro',
        price:21488,
        count:1,
        checked:false
      }
    ]
  },
  methods:{
    // 减少时
    reduce:function(index){
      if(this.list[index].count === 1){
        // 最小为1
        return
      } else {
        this.list[index].count--;
      }
    },
    // 增加时候
    add:function(index){
      this.list[index].count++;
    },
    // 清除该项
    remove:function(index){
      this.list.splice(index,1);
    },
    // 全选
    selectall:function(){
      for(var i = 0 ; i <this.list.length; i ++){
        if(this.checkedall === true){
          this.list[i].checked = false;
        }else {
          this.list[i].checked = true;
        }
      }
    }
  },
  computed:{
    // 商品总价计算
    totalprice:function(){
      var total = 0;  //起初总价
      //遍历商品
        for(var i = 0; i < this.list.length; i++){
          if(this.list[i].checked){
            var item = this.list[i];
            total += item.price * item.count;
          }
        }
      // 最终返回一个数值，要做千位分隔符，计算后的值为number  转换成字符串
       return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
    }
  },
  // 反选·
  watch:{
    list:{
      handler:function(a,b){
        var unchecked = 0;
        for(var i = 0 ; i < a.length;i ++){
          if(!a[i].checked){
            unchecked += 1;
          }
        }
        this.checkedall = unchecked>0?false:true;
      },
      deep:true
    }

  }
})
