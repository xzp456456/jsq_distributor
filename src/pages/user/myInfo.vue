<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <p>经销商信息</p>
        <div class="list" style="height:2rem;">
          <div class="row">
            <div class="pull-left title" style="line-height:2rem">头像</div>
            <div class="pull-right headerImg">
              <img :src="user.avatar" style="width:100%;height:100%;border-radius: 50%;">
              <input type="file" class="file"  @change="headerImg($event)">
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">经销商地址</div>
            <div class="pull-right text_right">
              <input type="text" v-model="user.dealer_address"  />
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">指定物流</div>
            <div class="pull-right text_right">
              <input type="text" v-model="user.delivery"  />
            </div>
          </div>
        </div>
        <p>收货人信息</p>
        <div class="list" style>
          <div class="row">
            <div class="pull-left title">姓名</div>
            <div class="pull-right text_right">
              <input type="text" v-model="user.consignee_name"  />
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">联系电话</div>
            <div class="pull-right text_right">
              <input type="text" v-model="user.consignee_tel"  />
            </div>
          </div>
        </div>
        <div class="list" @click="select()">
          <div class="row">
            <div class="pull-left title">所在地址</div>
            <div class="pull-right text_right">
              <!-- <input type="text" v-model="user.consignee_city" > -->
              {{user.consignee_province}}{{user.consignee_city}}{{user.consignee_area}}
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="pull-left title">具体地址</div>
            <div class="pull-right text_right">
              <input type="text" v-model="user.consignee_address"   />
            </div>
          </div>
        </div>
      </div>
    </main>
    <v-btn btnName="保存" @actionClick="updateInfo()"></v-btn>
    <mt-popup v-model="show" position="bottom">
      <mt-picker :slots="slots" @change="onValuesChange" :showToolbar="false" :value-key="'name'" >
        <a class="usi-btn-cancel">取消</a>
        <a class="usi-btn-sure" @click="showAcction(false)">确定</a>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import { postAjax,layOpen,postFileUp } from "@/api/axios";
import * as api from "@/api/api";
import btn from "@/components/btn";
const address = require("../../../static/json/address.json");
export default {
  data() {
    return {
      add:{},
      show:false,
      user: {},
      info:{},
      files:"",
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "left"
        },
        {
          flex: 1,
          values: [],
          className: "slot2",
          textAlign: "center"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "right"
        }
      ]
    };
  },
  created() {
    this.getUserInfo();
    this.province();
  },
  methods: {
    select(){
      this.show = true;
    },
    getUserInfo() {
      postAjax(api.getInfo, {
        dealer_id: localStorage.getItem("dealer_id")
      }).then(res => {
        console.log(res);
        if (res.status) {
          this.user = res.data;
        }
      });
    },
    headerImg(e){
      
      this.files = e.target.files[0];
      let imgUrl = this.getObjectURL(this.files);
      this.user.avatar = imgUrl;
    },
    updateInfo(){
     let data = new FormData();
     data.append('avatar',this.files);
     data.append('dealer_address',this.user.dealer_address);
     data.append('delivery',this.user.delivery);
     data.append('consignee_name',this.user.consignee_name);
     data.append('consignee_tel',this.user.consignee_tel);
     data.append('consignee_province_id',this.user.consignee_province_id);
     data.append('consignee_province',this.user.consignee_province);
     data.append('consignee_city_id',this.user.consignee_city_id);
     data.append('consignee_city',this.user.consignee_city);
     data.append('consignee_address',this.user.consignee_address);
      postFileUp(api.updateInfo,data)
      .then(res=>{
        if(res.status){
          layOpen(res.msg)
        }
      })
    },
    getObjectURL(file) {  
	      var url = null ;   
	      if (window.createObjectURL!=undefined) {  
	        url = window.createObjectURL(file) ;  
	      } else if (window.URL!=undefined) {   
	        url = window.URL.createObjectURL(file) ;  
	      } else if (window.webkitURL!=undefined) {  
	        url = window.webkitURL.createObjectURL(file) ;  
	      }  
	      return url ;  
  },
   province() {
      let province = address.data.list;
      let prolist = province.map(item => {
        return { name: item.province, id: item.provinceid };
      });
      prolist.unshift({name: '请选择', id: ""});
      this.slots[0].values = prolist;
    },
    cities(province) {
      return new Promise((resolve, reject) => {
        let list = address.data.list;
        var cities = "";
        list.filter(item => {
          //获取城市json
          if (item.province == province) {
            cities = item.cities;
          }
        });

        let citlist = cities.map(item => {
          return { name: item.city, id: item.cityid };
        });
       // citlist.unshift({name: '', id: ""});
        resolve(citlist);
      });
    },
    area(province, city) {
      return new Promise((resolve, reject) => {
        let list = address.data.list;
        var cities = "";
        list.filter(item => {
          //获取城市json
          if (item.province == province) {
            cities = item.cities;
          }
        });
        var area = "";
        cities.filter(item => {
          if (item.city == city) {
            area = item.district;
          }
        });
        let arealist = area.map(item => {
          return { name: item.area, id: item.areaid };
        });
      //  arealist.unshift({name: '', id: ""});
        resolve(arealist);
      });
    },
    onValuesChange(picker, values) {
      this.cities(values[0].name)
        .then(city => {
          picker.setSlotValues(1, city);
        })
        .then(() => {
          this.area(values[0].name, values[1].name).then(area => {
            picker.setSlotValues(2, area);
          });
        });

      this.user.consignee_province_id = values[0].id;
      this.user.consignee_province = values[0].name;
      this.user.consignee_city_id = values[1].id;
      this.user.consignee_city = values[1].name;
      // this.add.area_id = values[2].id;
      // this.add.area = values[2].name;
    } 
  },
  components: {
    "v-btn": btn
  }
};
</script>
<style scoped="">
body {
  margin: 0 auto;
  padding: 0;
  background-color: #f0f2f5;
  
}

.pull-left {
  float: left !important;
}

.pull-right {
  float: right !important;
}

.headerImg {
  width: 1.25rem;
  height: 1.25rem;
  background: rgba(238, 238, 238, 1);
  border-radius: 50%;
  position: relative;
  top: 0.4rem;
}

.headerImg img {
  width: 100%;
}

.list {
  background-color: #ffffff;
  width: 100%;
  height: 1.5rem;
  border-bottom: 1px solid #e6e6e6;
  font-size: 0.413333rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.item p {
  font-size: 0.373333rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(158, 158, 158, 1);
  width: 90%;
  margin: 0 auto;
  margin-top: 0.573333rem;
  margin-bottom: 0.32rem;
}

.text_right {
  line-height: 1.5rem;
}

.mint-popup-bottom {
  width: 100% !important;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.title {
  line-height: 1.5rem;
}

.text_right input {
  text-align: right;
  font-size: 0.413333rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: black;
  width: 6.3rem;
  outline: none;
  border: none;
}

[contenteditable = "true"], input, textarea {
    -webkit-user-select: auto!important;
    -khtml-user-select: auto!important;
    -moz-user-select: auto!important;
    -ms-user-select: auto!important;
    -o-user-select: auto!important;
    user-select: auto!important;
}

.file{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}
</style>
