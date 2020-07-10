<?php

/**
 * WeEngine Document System
 *
 * (c) We7Team 2019 <https://www.w7.cc>
 *
 * This is not a free software
 * Using it under the license terms
 * visited https://www.w7.cc for more details
 */

namespace W7\App\Model\Logic\Document\ChapterApi;

//返回演示数据demo
use W7\App\Model\Entity\Document;

class MockApiReponseLogic
{
	public function mackMockApiReponse($request, $route)
	{
		$routeArr = explode('/', $route);
		if (count($routeArr) > 3) {
			if ($routeArr[2] == 'mockApiReponse' && is_numeric($routeArr[3])) {
				$baseUrl = str_replace('/' . $routeArr[1] . '/' . $routeArr[2] . '/' . $routeArr[3] . '/', '', $route);
				$ChapterApi = new Document\ChapterApi();
				$Chapter = new Document\Chapter();
				$api = Document\Chapter::query()
					->where('document_id', $routeArr[3])
					->leftJoin($ChapterApi->getTable(), 'chapter_id', '=', $Chapter->getTable() . '.id')
					->whereIn('url', [$baseUrl, '/' . $baseUrl])
					->select([$ChapterApi->getTable() . '.*'])
					->first();
				$methodLabel=$ChapterApi->methodLabel();
				if($api&&$api->method){
					if(isset($methodLabel[$api->method])){
						if($methodLabel[$api->method]==$request->getMethod()){
							return ['code' => 0, 'msg' => '获取数据成功'];
						}else{
							return ['code' => 401, 'msg' => '请求类型错误'];
						}
					}else{
						return ['code' => 402, 'msg' => '不支持当前请求类型：'.$request->getMethod()];
					}
				}
			}
		}
		return ['code' => 400, 'msg' => '请求地址不存在'];
	}
}