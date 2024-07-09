<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ now }}</div>
            <div class="city" @click="state.show = true">切换城市</div>
         </div>
         <div class="city-info">
            <p class="city">{{ state.city }}</p >
            <p class="weather">{{state.today.weather}}</p >
            <h2 class="temp">
              <em>{{state.today.temperature}}</em>℃
            </h2>
            <div class="detail">
              <span>风力: {{state.today.windPower}}级</span> 
              <span>风向: {{state.today.windDirection}}风</span> 
              <span>空气湿度: {{state.today.humidity}}%</span>
            </div>
          </div>
        <div class="future" v-if="state.future.length">
        <div class="group">
            明天：
            <span class="tm">白天：
                {{state.future[1].dayTemp}}℃ 
                {{state.future[1].dayWeather}} 
                {{state.future[1].dayWindDir}}风 
                {{state.future[1].dayWindPower}}级
            </span><p></p>
            <span class="tm">夜晚：
                {{state.future[1].nightTemp}}℃ 
                {{state.future[1].nightWeather}} 
                {{state.future[1].nightWindDir}}风 
                {{state.future[1].nightWindPower}}级
            </span>
        </div>
        <div class="group">
            后天：
            <span class="tm">白天：
                {{state.future[2].dayTemp}}℃ 
                {{state.future[2].dayWeather}} 
                {{state.future[2].dayWindDir}}风 
                {{state.future[2].dayWindPower}}级
            </span><p></p>
            <span class="tm">夜晚：
                {{state.future[2].nightTemp}}℃ 
                {{state.future[2].nightWeather}} 
                {{state.future[2].nightWindDir}}风 
                {{state.future[2].nightWindPower}}级
            </span>
        </div>
    </div>
   
    <div class="echarts-wrap" ref="echartsWrap"></div>

    <van-action-sheet v-model:show=state.show>
        <div class="content">
            <van-area title="地区" 
            :area-list="areaList" 
            :columns-num="2" 
            @confirm="selectCity"
            @cancel="state.show = false"
            />
        </div>
    </van-action-sheet>

    </div>
</template>
      
<script setup>
    import { onMounted, reactive, ref, nextTick} from 'vue';
    import { areaList } from '@vant/area-data';
    import * as echarts from 'echarts';



      let now = ref('00:00:00')
      setInterval(() => {
        now.value = new Date().toLocaleTimeString()
      }, 1000);
    
      const state = reactive({
        city: '',
        today: {},
        show:false,
        future:{}
      })
      
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            // console.log(result);
            state.city = result.city
            getWeather(result.city)
          }
        })
      })
      
      const getWeather = (city) => {
        //加载天气查询插件
        AMap.plugin("AMap.Weather", function () {
          //创建天气查询实例
          var weather = new AMap.Weather();
          //执行实时天气信息查询
          weather.getLive(city, function (err, data) {
            console.log(err, data);
            state.today = data;
          }),
            weather.getForecast(city, function (err, data) {
            console.log(err, data);
            state.future = data.forecasts;
            nextTick(() => {//保证内部的逻辑会在页面渲染完毕后触发
                initEcharts()
            })
            })
         });
    
      }
      
      const selectCity = ({ selectedOptions }) => {
        console.log( selectedOptions[1].text );
        state.city = selectedOptions[1].text
        getWeather(selectedOptions[1].text)
        state.show = false
      }

    const echartsWrap = ref(null);
    const initEcharts = (arr) =>{
        // console.log(echartsWrap.value);
        let mycharts = echarts.init(echartsWrap.value);
        mycharts.setOption({
            title: {
                text: '未来两天天气预报',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            xAxis: {
                type: 'category',
                data: ['今天','明天','后天','大后天']
            },
            yAxis: {
                type: 'value'
            },
            series:[
                {   
                    name:"温度",
                    type: 'line',
                    data: state.future.map(item =>{
                        return item.dayTemp
                })
                }
            ]
        })
    }
    onMounted(() => {
    })
</script>


<style lang="css" scoped>
.container{
    min-height: 100vh;
    background-image: linear-gradient(to bottom, #1b08f2c4 ,rgb(232, 207, 211));
    opacity: 0.7;
    color: white;
}
.nav{
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.city-info{
    text-align: center;
}
p{
    margin-top: 5px;
}
.temp{
    font-size: 26px;
    margin-top: 10px 0;
}
.temp em{
    font-size: 34px;
}
.detail{
    font-size: 14px;
}
.future{
    margin-top: 30px;
    padding: 0 10px;
}
.group{
    line-height: 44px;
    background-color: rgba(57, 133, 246, 0.3);
    font-size: 13px;
    padding: 0 10px;
    margin-bottom: 10px;
    border-radius: 10px;
}
.echarts-wrap{
    width: 100%;
    height: 50vh;

}
</style>