<?php

class File
{
    protected $pathFile = null;

    function __construct ($path) {
        $this->pathFile = $path;
    }

    function get() {
        return file_get_contents($this->pathFile);
    }

    function add ($str) {
        file_put_contents($this->pathFile, $this->get() . $str);
    }

    function __destruct() {
        echo "Деструктор был вызван";
    }
}