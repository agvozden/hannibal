<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#">
   <head>
      <title>{full_title}</title>
      <base 
      	data-url="{url}" 
      	data-url-view="{url_view}" 
      	data-url-static="{url_static}" 
      	data-url-external="{url_external}" 
      	data-domain="{domain}" 
      	data-request-uri="{request_uri}">      	
      <!--{charset} utf-8-->
      <meta charset="{charset}">
      <meta name="description" content="{description}">
      <meta name="keywords" content="{keywords}" />
      <meta name="robots" content="{robots}" />
      <meta name="google-site-verification" content=""/>
      <meta name="generator" content="Hannibal CMS" />
      <meta name="author" content="{author}" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
      
      <meta property="og:title" content="{title}" />
      <meta property="og:type" content="{type}" />
      <meta property="og:url" content="{url_view}{link}" />
      <!--if:image--><meta property="og:image" content="{image}" /><!--/if:image-->
      <meta property="og:image" content="{logo}" />
      <meta property="og:site_name" content="{site_title}" />
      <meta property="og:description" content="{description}" />
      <meta property="og:locale" content="{lang}"/>
      
      <link rel="alternate" type="application/rss+xml" title="RSS" href="{url}rss/" />
      <link rel="stylesheet" href="{css}?{date}"/>
      <link rel="stylesheet" href="{url_static}{dir_style}colorbox.css"/>
      <!--if:canonical--><link rel="canonical" href="{canonical}"/><!--/if:canonical-->
      
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
      <script>window.jQuery || document.write("<script src='js/jquery-1.9.0.min.js'>\x3C/script>")</script>
      <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
      <script>!window.jQuery.ui && document.write(unescape('<script src="{url_static}js/jquery-ui-1.10.3.min.js"><\/script>'))</script>
      <script type="text/javascript">var url="{url}";var url_view="{url_view}";</script>
      <script src="{url_static}js/colorbox/jquery.colorbox-min.js" type="text/javascript"></script>
      <script src="{url_static}js/plugins.js" type="text/javascript"></script>
      <script src="{url_static}js/main.js" type="text/javascript"></script>
   </head>
   
   <body id="body{name}" data-per-page="{per_page}">
      <div id="rawdata" data-description="{raw_description}" data-title="{raw_title}" data-full-title="{raw_full_title}" data-site-title="{raw_site_title}" data-url="{raw_url}" data-query="{raw_query}"></div>
      <div id="dirdata" data-files="{dir_files}" data-images="{dir_images}" data-media="{dir_media}"></div>

      <header>
         <h1><a href="{url}">{site_title} {title}</a></h1>
         <div id="box_sections">{box_sections}</div>
      </header>

      {dump}
      <div> {breadcrumb}</div>
      {body}

      <div> {date} {time}</div>
      <div>
         {box_personalize}
         {box_search}
         {box_brand_filter}
         {box_category}
         {box_last_commented}
         {box_latest_ad}
         {box_latest_news}
         {box_most_commented}
         {box_top_ad}
         {box_top_read}
         {classified_main}
         {headline_main}
         {headline_news}
      </div>
      <div>
         {parent_title}
         <!--if:subcategory-->{subcategory}<!--/if:subcategory-->
         <!--if:subpage-->{subpage}<!--/if:subpage-->
      </div>
      <div>{visual_code}</div>

      {user_email}
      <!--if:user_logged--><!--/user_logged-->
      <!--if:fb_logged--><!--/if:fb_logged-->
      {view}
      <!--if:view_lat--><!--/if:view_lat-->
      <!--if:view_eng--><!--/if:view_eng-->
      <!--if:show_default_page--><!--/if:show_default_page-->
      <!--if:viewport--><!--/if:viewport-->
      <footer>
         <address>
            {company_name}
            <a href="emailto:{company_email}">{company_email}</a>
            <a href="{company_www}">{company_www}</a>
            {company_address}
            {company_city}
            {company_phone}
            {company_fax}
            {company_account}
            {company_extra}
         </address>
      </footer>
   </body>
</html>