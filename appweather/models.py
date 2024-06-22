from django.db import models
# Create your models here.
# weather类
class weatherInfo(models.Model):
    # btitle = models.CharField(max_length=20, verbose_name='名称')
    # bpub_date = models.DateField(verbose_name='发布日期')
    # bread = models.IntegerField(default=0, verbose_name='阅读量')
    # bcomment = models.IntegerField(default=0, verbose_name='评论量')
    # is_delete = models.BooleanField(default=False, verbose_name='逻辑删除')
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

    # ordering = ['order_date']  # 按订单升序排列
    # ordering = ['-order_date']  # 按订单降序排列，-表示降序
    # ordering = ['?order_date']  # 随机排序，？表示随机
    # ordering = ['-pub_date', 'author']  # 以pub_date为降序，在以author升序排列
    ordering = ['province']  # 按彩票期数降序排列，-表示降序