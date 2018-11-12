<?php

class News
{
    protected $newsArray;

    function __construct()
    {
        $this->newsArray = [
            [
                "name" => "Новость 1",
                "text" => "Текст для новости 1",
            ],
            [
                "name" => "Новость 2",
                "text" => "Текст для новости 2",
            ],
            [
                "name" => "Новость 3",
                "text" => "Текст для новости 3",
            ],
            [
                "name" => "Новость 4",
                "text" => "Текст для новости 4",
            ],
            [
                "name" => "Новость 5",
                "text" => "Текст для новости 5",
            ],
        ];
    }

    function getNews($page, $size)
    {
        if ($size * ($page - 1) > count($this->newsArray) || $page < 0 || empty($page)) {
            $page = 1;
        }

        $arResult['page'] = $page;

        if ($size * $page >= count($this->newsArray)) {
            $limit = count($this->newsArray);
        } else {
            $limit = $size * $page;
            $arResult['nextPage'] = $page + 1;
        }

        if ($page != 1) {
            $arResult['prevPage'] = $page - 1;
        }

        for ($i = ($page - 1) * $size; $i < $limit; $i++) {
            $arResult['news'][] = $this->newsArray[$i];
        }

        return $arResult;
    }


}