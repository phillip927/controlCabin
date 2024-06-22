Django数据驾驶舱

1.项目介绍

这里介绍本人最近进行的数据展示项目，该项目由7个部分组成：CSDN统计、福彩信息、天气预报、股指信息、AI绘图、数据库监控。这些都是笔者感兴趣的数据，组建而成的模块。

项目的技术栈为：Django框架、jQuery前端、mysql数据库、python编码

2.项目结构

该项目，对于大屏中的板块，分别创建了4个应用：appcsdn、appssq、appweather、appweibo；

项目静态信息存放在static目录下；html网页资源存放在templates中；

controlCabin文件夹则包含：配置文件settings.py、路由文件urls.py等

3.库表结构

3.1 appcsdn的models

应用appcsdn中的models.py

    from django.db import models
    # cdsn类
    class csdnInfo(models.Model):
        id = models.IntegerField(verbose_name='id主键', primary_key=True)
        csdn_reader = models.CharField(verbose_name='总访问量', max_length=32)
        csdn_arcticles = models.CharField(verbose_name='文章数', max_length=16)
        csdn_order = models.CharField(verbose_name='总排名', max_length=16)
        csdn_fans = models.CharField(verbose_name='粉丝数', max_length=16)
        csdn_tfans = models.CharField(verbose_name='铁粉数', max_length=16)
        csdn_good = models.CharField(verbose_name='获赞数', max_length=16)
        csdn_comment = models.CharField(verbose_name='评论数', max_length=16)
        csdn_collect = models.CharField(verbose_name='被收藏数', max_length=16)
        csdn_share = models.CharField(verbose_name='名片分享数', max_length=16)
        record_time = models.CharField(verbose_name='记录时间', max_length=32)
    
        class Meta:
            db_table = 'csdnInfo'  # 指明数据库表名
    
        verbose_name = 'csdn统计'  # 在admin站点中显示的名称
        verbose_name_plural = verbose_name  # 显示的复数名称
        get_latest_by = 'record_time'
        ordering = ['record_time']  # 按彩票期数降序排列，-表示降序

3.2 appssq的models

应用appssq中的models.py

    from django.db import models
    # ssq的类
    class ssqInfo(models.Model):
        id = models.IntegerField(verbose_name='id主键', primary_key=True)
        ssq_code = models.CharField(verbose_name='彩票期数', max_length=16)
        ssq_date = models.CharField(verbose_name='出奖日期', max_length=32)
        ssq_red = models.CharField(verbose_name='红球号码', max_length=32)
        ssq_blue = models.CharField(verbose_name='蓝球号码', max_length=6)
        ssq_poolmoney = models.CharField(verbose_name='奖池金额', max_length=16)
        ssq_content = models.CharField(verbose_name='中奖分布信息', max_length=255)
    
        class Meta:
            db_table = 'ssqInfo'  # 指明数据库表名
            verbose_name = '福彩信息'  # 在admin站点中显示的名称
            verbose_name_plural = verbose_name  # 显示的复数名称
            ordering = ['-ssq_code']  # 按彩票期数降序排列，-表示降序

3.3 appweather的models

应用appweather中的models.py

    from django.db import models
    # weather类
    class weatherInfo(models.Model):
        id = models.IntegerField(verbose_name='id主键', primary_key=True)
        nation = models.CharField(verbose_name='国家', max_length=32)
        province = models.CharField(verbose_name='省份', max_length=32)
        city_name = models.CharField(verbose_name='城市', max_length=32)
        city_id = models.CharField(verbose_name='城市id', max_length=32)
        today_dayText = models.CharField(verbose_name='天气状况', max_length=32)
        today_heat = models.CharField(verbose_name='温度', max_length=32)
        today_wind = models.CharField(verbose_name='风向风力', max_length=32)
        weather_info = models.CharField(verbose_name='7日天气', max_length=3000)
        record_date = models.CharField(verbose_name='记录日期', max_length=32)
        record_time = models.CharField(verbose_name='记录时间', max_length=32)
    
        class Meta:
            db_table = 'weatherInfo'  # 指明数据库表名
    
        verbose_name = '天气预报信息'  # 在admin站点中显示的名称
        verbose_name_plural = verbose_name  # 显示的复数名称
        ordering = ['province']  # 按彩票期数降序排列，-表示降序

3.4 appweibo的models

应用appweibo中的models.py

    from django.db import models
    # weibo类
    class weiboInfo(models.Model):
        id = models.IntegerField(verbose_name='id主键', primary_key=True)
        weibo_record_time = models.CharField(verbose_name='总访问量', max_length=32)
        weibo_rank = models.CharField(verbose_name='文章数', max_length=32)
        weibo_label = models.CharField(verbose_name='总排名', max_length=32)
        weibo_word = models.CharField(verbose_name='粉丝数', max_length=255)
        weibo_num = models.CharField(verbose_name='铁粉数', max_length=32)
        weibo_category = models.CharField(verbose_name='获赞数', max_length=32)
    
    
        class Meta:
            db_table = 'weiboInfo'  # 指明数据库表名
    
        verbose_name = '微博热搜统计'  # 在admin站点中显示的名称
        verbose_name_plural = verbose_name  # 显示的复数名称
        get_latest_by = 'record_time'
        ordering = ['weibo_rank']  # 按彩票期数降序排列，-表示降序

以上，应用中的models定义好后，可以在命令行运行下面的语句在如mysql等数据库中建表

首次创建Django内置表结构

    python manage.py migrate 

让 Django知道我们自定义模型有一些变更,并根据我们自定义app的模型生成创建数据表的脚本

    python manage.py makemigrations apphot

通过命令创建apphot模型对应的数据库表 ,命令最后是应用名称

    python manage.py makemigrations appcsdn

4.功能展示

5.解决问题

5.1 二级路由

5.2 后端数据与前端echarts展示

5.3 长图表丝滑滚动条

