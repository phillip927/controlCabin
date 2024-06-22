from django.shortcuts import render, redirect
from appssq import models as models
from django.core.paginator import Paginator
from django.http import JsonResponse, HttpResponse
import time
import datetime
import requests
import json
import akshare as ak
import pandas as pd

# Create your views here.

#  01 福彩信息
def view_data_ssq(request):
    # 获取模型数据
    data_ssq = models.ssqInfo.objects.all()
    data_code = models.ssqInfo.objects.values('ssq_code')
    data_red = models.ssqInfo.objects.values('ssq_red')
    data_blue = models.ssqInfo.objects.values('ssq_blue')
    data_date = models.ssqInfo.objects.values('ssq_date')
    data_poolmoney = models.ssqInfo.objects.values('ssq_poolmoney')
    data_content = models.ssqInfo.objects.values('ssq_content')

    red_list = []
    for red in data_red:
        one = red['ssq_red'].split(',')
        red_list.append(one)
    red_one = red_list[0]

    context = {'data_code':data_code,'data_blue':data_blue,'red_one':red_one}

    # 股指信息
    # 返回上证指数的值 涨跌幅
    df_index_series = ak.stock_zh_index_spot_em(symbol="上证系列指数")
    row_index_sz_index = df_index_series[df_index_series['名称'] == '上证指数']
    sz_index = df_index_series.loc[df_index_series['名称'] == '上证指数', '最新价'][row_index_sz_index.index.tolist()[0]]
    sz_index_fu = df_index_series.loc[df_index_series['名称'] == '上证指数', '涨跌幅'][row_index_sz_index.index.tolist()[0]]
    # 沪深300
    row_index_hs_300 = df_index_series[df_index_series['名称'] == '沪深300']
    hs_300 = df_index_series.loc[df_index_series['名称'] == '沪深300', '最新价'][row_index_hs_300.index.tolist()[0]]
    hs_300_fu = df_index_series.loc[df_index_series['名称'] == '沪深300', '涨跌幅'][row_index_hs_300.index.tolist()[0]]
    # 创业板指数
    df_index_c = ak.stock_zh_index_spot_em(symbol="深证系列指数")
    row_index_cyb_index = df_index_c[df_index_c['名称'] == '创业板指']
    cyb_index = df_index_c.loc[df_index_c['名称'] == '创业板指', '最新价'][row_index_cyb_index.index.tolist()[0]]
    cyb_index_fu = df_index_c.loc[df_index_c['名称'] == '创业板指', '涨跌幅'][row_index_cyb_index.index.tolist()[0]]
    # 恒生指数
    hk_index = ak.stock_hk_index_spot_em()
    row_index_hs_index= hk_index[hk_index['名称'] == '恒生指数']
    hs_index = hk_index.loc[hk_index['名称'] == '恒生指数', '最新价'][row_index_hs_index.index.tolist()[0]]
    hs_index_fu = hk_index.loc[hk_index['名称'] == '恒生指数', '涨跌幅'][row_index_hs_index.index.tolist()[0]]
    # 股票茅台
    stock_zh = ak.stock_zh_a_spot_em()
    row_index_mt = stock_zh[stock_zh['名称'] == '贵州茅台']
    stock_mt = stock_zh.loc[stock_zh['名称'] == '贵州茅台', '最新价'][row_index_mt.index.tolist()[0]]
    stock_mt_fu = stock_zh.loc[stock_zh['名称'] == '贵州茅台', '涨跌幅'][row_index_mt.index.tolist()[0]]

    # 黄金实时价格
    def get_quote():
        codes = "JO_9753,JO_92226,JO_9754,JO_71,JO_70,JO_73,JO_72,JO_75,JO_9751,JO_9752,JO_92224,JO_92225,JO_92276,JO_76,JO_74,JO_92277,JO_92278"
        url = "https://api.jijinhao.com/quoteCenter/realTime.htm?codes=" + codes + "&_=" + str(int(time.time() * 1000))
        headers = {
            'authority': 'api.jijinhao.com',
            'accept': '/',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'referer': 'https://quote.cngold.org/gjs/jjs.html',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'script',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0'
        }
        payload = {}
        response = requests.request("GET", url, headers=headers, data=payload)
        json_str = response.text[16:]
        # 将字符串转换为字典对象 "Au9999": "黄金9999",
        quote_json = json.loads(json_str)
        real_time = datetime.datetime.fromtimestamp(quote_json['JO_71']['time'] / 1000)
        #  # 'q6': 548.15,
        gold = round(quote_json['JO_71']['q63'], 2)
        gold_fu = round(quote_json['JO_71']['q80'], 2)
        return gold, gold_fu
    # 运行获取黄金
    gold, gold_fu = get_quote()

    return render(request, 'index.html', locals())

# 02 福彩信息 ssq_code ajax交互使用
def view_datacode_url(request):
    data_code = models.ssqInfo.objects.values('ssq_code')
    code_list = []
    for data_code in data_code:
        one = data_code['ssq_code']
        code_list.append(one)
    real_code = code_list[0]
    return HttpResponse(real_code)

def view_datacode(request):
    return render(request, 'index.html')

# 福彩信息 ssq_content ajax交互使用
def view_datacontent_url(request):
    data_content = models.ssqInfo.objects.values('ssq_content')
    content_list = []
    for data_content in data_content:
        one = data_content['ssq_content']
        content_list.append(one)
    real_content = content_list[0]

    area_data = real_content.split('，')
    content_data = []
    # ['河北2注','江苏7注','石家庄1注','共1注']
    for i in range(0, len(area_data)-1):
        row_dict = {}
        name = ''
        value = ''
        for word in area_data[i]:
            if word.isdigit():
                word = str(word)
                value = value + word
            else:
                word = str(word)
                name = name + word
        name = name[0:-1]
        row_dict['name'] = name
        row_dict['value'] = int(value)
        content_data.append(row_dict)
        # print(content_data)

    return JsonResponse(content_data,safe=False)

def view_datacontent(request):
    return render(request, 'index.html')


# 03 福彩双色球超链接跳转：重定向
def view_web_ssq(request):
    return redirect('http://www.cwl.gov.cn/fcpz/yxjs/ssq')

# 04 股票指数
def view_stock(request):
    return render(request, 'index.html')

def view_stock_url(request):

    # 历史股票指数
    sz_index_daily = ak.stock_zh_index_daily_em(symbol="sh000001", start_date="20140613")
    sz_index_date = list(sz_index_daily['date'])
    sz_index_close = list(sz_index_daily['close'])

    mt_daily = ak.stock_zh_a_hist(symbol="600519", period="daily", start_date="20140613", adjust="")
    mt_daily_close = list(mt_daily['收盘'])

    stock_data = {}
    stock_data['sz_index_date'] = sz_index_date
    stock_data['sz_index_close'] = sz_index_close
    stock_data['mt_daily_close'] = mt_daily_close

    return JsonResponse(stock_data)




