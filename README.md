<div align="center"> 

# [<img src="public/favicon.png" alt="" width="64" height="64" style="transform: translateY(16px)">](https://bilibili.deeptrain.net) [Bilibili Stats](https://bilibili.deeptrain.net)

### 🍇 动态生成B站用户简介SVG图像

### [| 👀 |](https://bilibili.deeptrain.net)
<br>
</div>

### 预览
![何同学](/screenshot/he.png)
![Linwin](/screenshot/linwin.png)
![zmh](/screenshot/zmh.png)

### 介绍
- ✔ **Typescript** + **Express** + **EJS**
- ✔ **SSR** 服务端渲染
- ✔ **User-Agent** 处理
- ✔ B站 **CDN** 拦截代理
- ✔ 函数**缓存**
- ✔ **异常处理**
- ✔ **SVG 动画**
- ✔ **Fetch**

### 提示
1. [**B站API**](/http)变更后可能会异常
2. SVG可能并不支持引入后引入其他非SVG/BASE64图片格式, 所以现在不能外部引入 (如放入Github README中装饰将会有UP主背景图和头像显示不全问题)
 - > 解决方案: fetch请求, 直接插入xml数据, 而不是img直接src引入svg, 具体可参考[首页](/public/index.html)