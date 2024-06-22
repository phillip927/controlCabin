from django.shortcuts import render, redirect
from appweather import models
from django.core.paginator import Paginator
from django.http import JsonResponse, HttpResponse
import time
import json

# Create your views here.
#  01 天气信息
def view_data_weather(request):
    data_weather = models.weatherInfo.objects.all()
    province = models.weatherInfo.objects.values('province')
    city_name = models.weatherInfo.objects.values('city_name')
    today_dayText = models.weatherInfo.objects.values('today_dayText')
    today_heat = models.weatherInfo.objects.values('today_heat')
    today_wind = models.weatherInfo.objects.values('today_wind')
    weather_list = {}
    for i in range(len(province)):
        one_dict = {}
        one_dict['province'] = province[i]['province']
        one_dict['city_name'] = city_name[i]['city_name']
        one_dict['today_dayText'] = today_dayText[i]['today_dayText']
        one_dict['today_heat'] = today_heat[i]['today_heat']
        one_dict['today_wind'] = today_wind[i]['today_wind']
        weather_list['city_{}'.format(i)] = one_dict
    # print(weather_list)
    return JsonResponse(weather_list)

def view_weather(request):
    return render(request,'index.html')