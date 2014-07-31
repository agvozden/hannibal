<?php
date_default_timezone_set('Europe/Belgrade');
$customFields = array();
$customFieldValues = array();
$default_sort_ad = 'price ASC';
$allow_next_post = true;
//$cat_type_r = array('photo');

$fileAllowed = array( 'txt', 'doc', 'pdf', 'xls', 'ppt', 'zip', 'html' );
$imageAllowed = array( 'jpg', 'jpeg', 'gif', 'png', 'bmp', 'swf', 'flv' );
$max_file_size = min(10485760, Common::bytes(ini_get('upload_max_filesize')));
$text_editors = array('rte', 'tiny_mce', 'fckeditor', 'ckeditor', '');
$user_detail_table = true;
$register_action = true;
$user_type_r = array();
$statusMemberNews = array(0 => 'new', 1 => 'new', 2 => 'publish', 100 => 'publish');
$statusMemberFeed = array(0 => 0, 1 => 0, 2 => 1, 100 => 1);
$statusMemberAd = array(0 => 'new', 1 => 'new', 2 => 'new', 3 => 'new', 10 => 'publish', 100 => 'active');
//$box_personalize_elems = array('image');
//$box_personalize_plugins = array('message', 'user_notification');
$membership_shema = array(
'' => array('photo'=>0),
//'Male' => array('photo'=>0),
//'Female' => array('photo'=>9999),
);
$member_delete = true;
$member_force_similar = true;
$anonimous_upload = false;
$thumbnail2 = false;
$mail_log = true;
$similar_reverse = true;
$use_location_table = false;

if (stristr(PHP_OS, 'WIN')) $captchaFont = 'c:\windows\fonts\arial.ttf'; // Win
else $captchaFont = '/usr/share/fonts/arial.ttf';// Linux

$captcha = array(
'font' => '/usr/share/fonts/arial.ttf',
'fontSize' => 5,
'fontBlack' => true);
$hush_string = '';
$brandTypes = array();
// filemanager filter large dir
$fm_auto_filter = 0;

$ext_dir = BASE_DIR.'layouts/';

$langs_r = array(
//'eng' => array ('interface' => 'english', 'sqlTablePrefix' => 'eng_', 'basePage' => 0, 'baseCat' => 0, 'baseAd' => 0),
//'ger' => array ('interface' => 'german'),
//'esp' => array ('interface' => 'spanish'),
//'it' => array ('interface' => 'italian'),
//'cg' => array ('interface' => 'crnogorski'),
//'lat' => array ('interface' => 'srpski-lat', 'basePage' => 0, 'baseCat' => 0, 'baseAd' => 0),
//'cir' => array ('interface' => 'srpski-cir', 'basePage' => 0, 'baseCat' => 0, 'baseAd' => 0),
);
$cyrillic = false;
$video = 'jwplayer'; //videojs
$plugin_alt_name = 'x';
$tag_cloud_number = 0;
$related_news = 0;

$spec_cats = array ('action'=>array('per_page'=>6, 'template'=>'ad_short_action.tpl', 'tmb'=>'act', 'w'=>400, 'h'=>400));

$img_sz = array(
'' => array('w'=>$maxImageWidth, 'h'=>$maxImageHeigth),//cover
'tmb' => array('w'=>$maxThumbWidth, 'h'=>$maxThumbHeigth),
//'product' => array('w'=>480, 'h'=>480),
//'tproduct' => array('w'=>141, 'h'=>141),
//'page' => array('w'=>960, 'h'=>400),
//'news' => array('w'=>600, 'h'=>300),
//'ltst' => array('w'=>200, 'h'=>200),
//'hdlns' => array('w'=>500, 'h'=>320),
//'hdlnm' => array('w'=>230, 'h'=>125),
//'ctgr' => array('w'=>140, 'h'=>80),
//'cnws' => array('w'=>365, 'h'=>195),
//'cad' => array('w'=>365, 'h'=>195), // shortAd
//'had1' => array('w'=>225, 'h'=>250), // headlineAd
//'srch' => array('w'=>365, 'h'=>195)
//'glrs' => array('w'=>206, 'h'=>136)
//'rltd' => array('w'=>150, 'h'=>150),
//'tmember' => array('w'=>40, 'h'=>40),
//'profile' => array('w'=>150, 'h'=>150),
//'cover' => array('w'=>920, 'h'=>300),
);
//$news_tpls = array('gold', 'diamond');
$newstplfromcat = false;

/*$admin_lang = array(
'eng'=>array('lang'=>'english'),
'de'=>array('lang'=>'german')
);*/

/*$blacklist = array(
'email' => array(),
'ip' => array(),
);*/
/*$defaultAdTemplate = array(
'ad' => '',
'business' => '',
'product' => ''
);*/
//EOF