# Generated by Django 4.2.3 on 2024-06-21 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='csdnInfo',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, verbose_name='id主键')),
                ('csdn_reader', models.CharField(max_length=32, verbose_name='总访问量')),
                ('csdn_arcticles', models.CharField(max_length=16, verbose_name='文章数')),
                ('csdn_order', models.CharField(max_length=16, verbose_name='总排名')),
                ('csdn_fans', models.CharField(max_length=16, verbose_name='粉丝数')),
                ('csdn_tfans', models.CharField(max_length=16, verbose_name='铁粉数')),
                ('csdn_good', models.CharField(max_length=16, verbose_name='获赞数')),
                ('csdn_comment', models.CharField(max_length=16, verbose_name='评论数')),
                ('csdn_collect', models.CharField(max_length=16, verbose_name='被收藏数')),
                ('csdn_share', models.CharField(max_length=16, verbose_name='名片分享数')),
                ('record_time', models.CharField(max_length=32, verbose_name='记录时间')),
            ],
            options={
                'db_table': 'csdnInfo',
            },
        ),
    ]
