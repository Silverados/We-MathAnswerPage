项目地址： https://github.com/Silverados/We-MathAnswerPage

自从一个月前更新完，期间虽然一直都在写代码，但是前端展示部分交给了另外一个同学写，自己跑去写了服务器。

以下是成果展示：
![这里写图片描述](https://img-blog.csdn.net/20180427165847236?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NheVdoYXRfc2F5SGVsbG8=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

![这里写图片描述](https://img-blog.csdn.net/2018042716590011?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NheVdoYXRfc2F5SGVsbG8=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

![这里写图片描述](https://img-blog.csdn.net/20180427165912653?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NheVdoYXRfc2F5SGVsbG8=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

![这里写图片描述](https://img-blog.csdn.net/20180427165924469?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NheVdoYXRfc2F5SGVsbG8=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

![这里写图片描述](https://img-blog.csdn.net/20180427165934489?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NheVdoYXRfc2F5SGVsbG8=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

1.题目一般是4题，但是可以不定为4题，从数组中获取选项对象时获取其长度。

2.随机题目：在页面加载的时候生成乱序后的题号序列（用数组存储）。通过下标遍历获取对应的题目。

3.随机选项：这里用的是全局的伪随机，即把选项随机后全局都采用相同的随机序列。

4.界面展示：在选择后有分正误，在选择后提供正确选项的展示，如果选择错误还会提供错误的提示。

5.页面切换：在首个版本中承接上个项目在选择后自动切换页面。在最后的页面中展示做对的题目数和评分。在最后还会有错题回顾。

6.题目数组：在js中初始化一个数组，数组里存储正序的题号。

7.题目选项类型：这里相较与上个版本采用的是全图片的处理方法，题目和选项全是图片。原本给出的是word文档，一共是80道，这里采用的是手工一道道截图。先讲文本字体设置为2号，然后在题目方面长大概是720，选项是540左右，用微信截图，然后放到服务器上。

8.如果选择全部正确点击查看错题会有toast框提示没有错误。

9.这里题目的json格式大致如下：
```json
{"question": "http://111.230.50.64:8080/usr/tomcat/webapps/WxMath/image/80-q.png","option": {"A": "http://111.230.50.64:8080/usr/tomcat/webapps/WxMath/image/80-a.png", "B": "http://111.230.50.64:8080/usr/tomcat/webapps/WxMath/image/80-b.png", "C": "http://111.230.50.64:8080/usr/tomcat/webapps/WxMath/image/80-c.png", "D": "http://111.230.50.64:8080/usr/tomcat/webapps/WxMath/image/80-d.png" }, "true": "A", "number":"4" }
```
10.服务器端将数据写入mysql数据库和将图片上传到服务器的代码、博客过段时间再更新。

11.这里一定要注意，因为这个版本是使用网络的，其中在index.js里使用wx.request向服务器发送了请求，返回的json数据同时setData，如果想单机的话就去掉这段话，参考上一个版本写。


这里给出图片资源有需要的下载！：https://download.csdn.net/download/saywhat_sayhello/10379653
如果有不会GitHub的，可以在CSDN下载：https://download.csdn.net/download/saywhat_sayhello/10379662

如果有疑问的我会的，评论了我会回答的。
