# DeveloperRoutesApi

Content of the Documentation
---------------------

 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers

INTRODUCTION
------------

Developer Route is an E-learning Application. In This Project we want to create some APIs for developer routes.

 * For more information:
   https://latrosoft.in

 * To submit bug reports and feature suggestions, or track changes:
  https://github.com/balaji-sivasakthi/DeveloperRoutesApi/issues




REQUIREMENTS
------------

This module requires the following modules:

 * [Views](https://www.drupal.org/project/views)
 * [Panels](https://www.drupal.org/project/panels)

INSTALLATION
------------
 
 * Install as you would normally install a contributed Drupal module. Visit
   https://www.drupal.org/node/895232/ for further information.

 * You may want to disable Toolbar module, since its output clashes with
   Administration Menu.


CONFIGURATION
-------------
 
 * Configure the user permissions in Administration » People » Permissions:

   - Use the administration pages and help (System module)

     The top-level administration categories require this permission to be
     accessible. The administration menu will be empty unless this permission
     is granted.

   - Access administration menu

     Users with this permission will see the administration menu at the top of
     each page.

   - Display Drupal links

     Users with this permission will receive links to drupal.org issue queues
     for all enabled contributed modules. The issue queue links appear under
     the administration menu icon.

 * Customize the menu settings in Administration » Configuration and modules »
   Administration » Administration menu.

 * To prevent administrative menu items from appearing twice, you may hide the
   "Management" menu block.


ROUBLESHOOTING
---------------

 * If the menu does not display, check the following:

   - Are the "Access administration menu" and "Use the administration pages
     and help" permissions enabled for the appropriate roles?

   - Does html.tpl.php of your theme output the $page_bottom variable?

FAQ
---

Q: What is Developer Routes?

A: Developer Routes is my dream project, Which helps to take over your carrer into next level.












