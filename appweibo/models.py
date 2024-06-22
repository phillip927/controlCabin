from django.db import models

# Create your models here.
# weibo类
class weiboInfo(models.Model):
    # btitle = models.CharField(max_length=20, verbose_name='名称')
    # bpub_date = models.DateField(verbose_name='发布日期')
    # bread = models.IntegerField(default=0, verbose_name='阅读量')
    # bcomment = models.IntegerField(default=0, verbose_name='评论量')
    # is_delete = models.BooleanField(default=False, verbose_name='逻辑删除')
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

    # ordering = ['order_date']  # 按订单升序排列
    # ordering = ['-order_date']  # 按订单降序排列，-表示降序
    # ordering = ['?order_date']  # 随机排序，？表示随机
    # ordering = ['-pub_date', 'author']  # 以pub_date为降序，在以author升序排列
    ordering = ['weibo_rank']  # 按彩票期数降序排列，-表示降序