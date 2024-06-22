from django.shortcuts import render, redirect
from appcsdn import models
from django.core.paginator import Paginator
from django.http import JsonResponse, HttpResponse
from django.db.models import Max,Min
import time
import json
# Create your views here.

# 01 csdn统计信息
def view_csdn_url(request):
    # data_csdn = models.csdnInfo.objects.all()
    data_reader = models.csdnInfo.objects.aggregate(Max('csdn_reader'))
    data_comment = models.csdnInfo.objects.aggregate(Max('csdn_comment'))
    data_arcticles = models.csdnInfo.objects.aggregate(Max('csdn_arcticles'))
    data_good = models.csdnInfo.objects.aggregate(Max('csdn_good'))
    # print(data_reader)
    csdn_list = {}
    csdn_list['csdn_reader'] = int(data_reader['csdn_reader__max'])
    csdn_list['csdn_comment'] = int(data_comment['csdn_comment__max'])
    csdn_list['csdn_arcticles'] = int(data_arcticles['csdn_arcticles__max'])
    csdn_list['csdn_good'] = int(data_good['csdn_good__max'])
    return JsonResponse(csdn_list)

def view_csdn(request):
    return render(request,'index.html')