"""controlCabin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from appssq.views import view_data_ssq,view_web_ssq,view_datacode_url,view_datacode,view_datacontent,view_datacontent_url,view_stock,view_stock_url
from appcsdn.views import view_csdn_url,view_csdn
from appweather.views import view_data_weather,view_weather
from appweibo.views import view_weibo_url,view_weibo

urlpatterns = [
    path('admin/', admin.site.urls),
    # ssq
    path('index.html',view_data_ssq),    # 福彩信息刷新测试1
    path('appssq/datacode_url',view_datacode_url),    # 福彩信息刷新测试2
    path('appssq/datacode',view_datacode),    # 福彩信息刷新测试2
    path('appssq/datacontent_url', view_datacontent_url),  # 福彩信息刷新测试3
    path('appssq/datacontent', view_datacontent),  # 福彩信息刷新测试3
    path('appssq/web_ssq',view_web_ssq),    # 福彩重定向
    # 股票指数
    path('appssq/stock', view_stock),  # 股票刷新测试1
    path('appssq/stock_url', view_stock_url),  # 股票刷新测试1
    # csdn
    path('appcsdn/csdn_url',view_csdn_url),    # csdn统计刷新测试1
    path('appcsdn/csdn',view_csdn),    # csdn统计刷新测试1
    # weather
    path('appweather/date_weather', view_data_weather),  # weather天气信息1
    path('appweather/weather',view_weather),  # weather天气信息
    # weibo
    path('appweibo/weibo_url', view_weibo_url),  # weather天气信息1
    path('appweibo/weibo', view_weibo),  # weather天气信息
]