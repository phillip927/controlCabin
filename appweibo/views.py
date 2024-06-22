from django.shortcuts import render, redirect
from appweibo import models as models
from django.core.paginator import Paginator
from django.http import JsonResponse, HttpResponse
import time,datetime,pytz
import requests
import json

# Create your views here.
# 01 微博热搜
def view_weibo(request):
    return render(request, 'index.html')

def view_weibo_url(request):
    # data_ssq = models.weiboInfo.objects.all()
    weibo_rank = models.weiboInfo.objects.values('weibo_rank')
    weibo_word = models.weiboInfo.objects.values('weibo_word')
    weibo_category = models.weiboInfo.objects.values('weibo_category')

    # 微博热搜列表
    weibo_data = {}
    for i in range(len(weibo_word)):
        one_dict = {}
        one_dict['weibo_word'] = weibo_rank[i]['weibo_rank']+'.'+weibo_word[i]['weibo_word']
        weibo_data['word_{}'.format(i)] = one_dict

    return JsonResponse(weibo_data)