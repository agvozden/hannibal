<!--box_sections-->
<nav id="box_sections_nav" data-basePage="{basePage}">
  <ul>
    <!--sections-->
    <li id="mnu_{name}" data-id="{id}" title="{title}"><a href="{link}" title="{description}" accesskey="{key}" class="page_{selected}">{title_short}</a>
    <!--if:is_dropmenu--><ul>
    <!--drop_menu-->
    <li><a href="{link}" title="{title}" id="mnu_name">{title_short}</a>
    <!--/drop_menu-->
    </ul>
    {drop_list}
    <!--/if:is_dropmenu--> 
    </li>
    <!--/sections-->
  </ul>
  <!--drop_down-->
  <div data-for="{id}">{drop_menu}</div> 
  <!--/drop_down-->
</nav>

