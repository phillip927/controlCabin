from django.db import models
# Create your models here.

# ssq的类
class ssqInfo(models.Model):
    # btitle = models.CharField(max_length=20, verbose_name='名称')
    # bpub_date = models.DateField(verbose_name='发布日期')
    # bread = models.IntegerField(default=0, verbose_name='阅读量')
    # bcomment = models.IntegerField(default=0, verbose_name='评论量')
    # is_delete = models.BooleanField(default=False, verbose_name='逻辑删除')
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

        # ordering = ['order_date']  # 按订单升序排列
        # ordering = ['-order_date']  # 按订单降序排列，-表示降序
        # ordering = ['?order_date']  # 随机排序，？表示随机
        # ordering = ['-pub_date', 'author']  # 以pub_date为降序，在以author升序排列
        ordering = ['-ssq_code']  # 按彩票期数降序排列，-表示降序


