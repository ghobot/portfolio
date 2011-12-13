Automatic Portfolio Application and Projects Database API
By: Meghan Hoke & Greg Dorsainville
ITP 2011
Course: Understanding Networks
Professor: Tom Igoe

This web application is a collection of PHP scripts and html pages that produces a portfolio layout of your work. It can access your project data from the ITP projects database. Using variables, you can customize all aspects of your site. It eliminates the need to create a portfolio at the end of your experience at ITP and construct one as you enter your projects into the database. 

Not all of your projects achieve the honor of being put into the database, so we also included a method to pull in the social media accounts that may have other work you are proud of and want to showcase.  

All design aspects are customizable. There is a generic template provided through CSS, some jquery and the twitter bootstrap toolkit. Take a look at the twitter bootstrap toolkit to see the other features you can use, like modals and dropdown menus. 

http://twitter.github.com/bootstrap/

This readme includes:
> installation and setup
> customization of the automatic portfolio styles and design
> how to customize the serving scripts
------------------------------------------------------------------------------------------------------------------------------------

ITP-PD: How to setup your automatic portfolio

Setting up your automatic portfolio is quick and easy!

1. Start by downloading this zip file from github. It can be found here: https://github.com/ghobot/portfolio

2. Unzip the file and rename the unzipped folder portfolio. Do not remove the files from the portfolio folder, or change the file structure within the portfolio folder.

3. Edit the preferences.txt file. This file is in the JSON format. Enter your netid (for example: abc123) and your name as you want it to appear on your portfolio (for example: Meghan Hoke).

4. Add additional links to your social networking information in the preferences.txt file. The links programmed into your portfolio by default are Blog, Facebook, Twitter and LinkedIn, so you should consider entering those links at a minimum.

5. Save the preferences.txt file.

6. Take the entire portfolio folder and upload it to the itp student server, or any personal web hosting service that has php installed.

To maximize your personal visibility as well as the functionality of the project database pages, please consider installing this portfolio folder directly inside your htdocs folder on the ITP server in addition to your preferred location.

… and it’s as easy as that!

--------------------------------------------------------------------

ITP-PD: How to customize your automatic portfolio

It is very easy to customize your portfolio using HTML, CSS and scripting languages of your choice. 

The portfolio project uses php to read in template pages and display them according to your styles. Using other server-side programming languages will not work without fancy trickery in the index.php and detail.php files. 

The Template Pages and the Structure of the Portfolio

Your portfolio consists of two incredibly important pages: portfolio.html and project_detail.html.

The portfolio.html page is the template page that index.php pulls from, and it controls the look and layout of your main portfolio site. 

The project_detail.html is the template page that detail.php pulls from, and it controls the look and layout of pages that will showcase the details of each individual project.

In addition to these two main pages, you are also provided with a basic about.html page. This page does not currently support the markers, and so anything you want in the about page will need to be hard-coded and maintained by you. You can also add any additional pages to your portfolio structure as you see fit and link to them as you would if you were building any other web site.

Markers

Markers are keywords surrounded by brackets and colons that hold the place of content that can be pulled from the database. For example, a marker that is the placeholder for your name looks like this:

{:name:}

Space and case don’t matter. This means that for our intents and purposes, the following are all equivalent and will act as a placeholder for your name:

{:  Name:}  {:nAmE:}  {:NAME       :}

However, don’t get too crazy; Not only are extra spaces within the name of the marker a pain in the butt to type, they also won’t work. The following will not be recognized as markers:

{:n a m e:}  {:   na  me:}

Using the Markers

You can insert the markers into your template wherever you like. When our php script reads in your template, it will look for the markers and replace them with information coming from the database. 

A very simple template for the project detail page might look like this:

<html>
<head>
<title>{:name:}'s Portfolio</title>
</head>
<body>
<h1>{:Name:}</h1>
<div>
<h2>{:Title:}</h2>
<img src="{:visual:}" width="300" alt="main image" />
<p>{:Description:}</p>
<p><a href="{:url:}">Click here for more information.</a></p>
</div>
</body>
</html> 
In the above example, you can see the markers throughout the HTML. 

A Note About Markers

Currently, markers are used in one way on the main portfolio page and another way on the detail page. For clarity on how to use markers currently, markers for the templates will be split into two sections according to template.

Markers for the Main Portfolio Page

These markers can currently be used only outside of the {:startproject:} and {:endproject:} markers (see below for more information on these markers).

{:name:} will be replaced with your name as you specified it in your preferences.txt file.

{:facebook:} will be replaced with the URL to your facebook profile as specified in your preferences.txt file.

{:blog:} will be replaced with the URL to your blog as specified in your preferences.txt file.

{:twitter:} will be replaced with the URL to your twitter page as specified in your preferences.txt file.

{:googleplus:} will be replaced with the URL to your google+ profile page as specified in your preferences.txt file.

{:flickr:} will be replaced with the URL to your flickr profile as specified in your preferences.txt file.

{:soundcloud:} will be replaced with the URL to your soundcloud profile as specified in your preferences.txt file.

{:vimeo:} will be replaced with the URL to your vimeo profile as specified in your preferences.txt file.

{:youtube:} will be replaced with the URL to your youtube profile as specified in your preferences.txt file.

{:linkedin:} will be replaced with the URL to your linkedin profile as specified in your preferences.txt file.

{:gdgt:} will be replaced with the URL to your gdgt profile as specified in your preferences.txt file.

{:github:} will be replaced with the URL to your github profile as specified in your preferences.txt file.

{:startproject:} and {:endproject:} work together on your main portfolio page to denote what one preview of a project should look like on your portfolio. You should only have one set of these markers on your portfolio page. The following markers can currently be used only within the {:startproject:} and {:endproject:} markers.

{:title:} will be replaced with the title of your project.

{:name:} will be replaced with your name as specified in your preferences.txt file.

{:visual:} will be replaced with the main image that you specified for your project in the projects database.

{:abstract:} will be replaced with the “elevator pitch” from the projects database.

{:description:} will be replaced with your description of the project.

{:url:} will be replaced with the link to your documentation or your project link.

{:linktodetail:} will be replaced with the URL for the detail page for the current project.

{:media:} will be replaced with a block of all the media associated with your project.

{:venue:} will be replaced with the venues associated with your project.

{:course:} will be replaced with the courses associated with your project.

Markers for the Project Detail Page

{:facebook:} will be replaced with the URL to your facebook profile as specified in your preferences.txt file.
{:blog:} will be replaced with the URL to your blog as specified in your preferences.txt file.
{:twitter:} will be replaced with the URL to your twitter page as specified in your preferences.txt file.
{:googleplus:} will be replaced with the URL to your google+ profile page as specified in your preferences.txt file.
{:flickr:} will be replaced with the URL to your flickr profile as specified in your preferences.txt file.
{:soundcloud:} will be replaced with the URL to your soundcloud profile as specified in your preferences.txt file.
{:vimeo:} will be replaced with the URL to your vimeo profile as specified in your preferences.txt file.
{:youtube:} will be replaced with the URL to your youtube profile as specified in your preferences.txt file.
{:linkedin:} will be replaced with the URL to your linkedin profile as specified in your preferences.txt file.
{:gdgt:} will be replaced with the URL to your gdgt profile as specified in your preferences.txt file.
{:github:} will be replaced with the URL to your github profile as specified in your preferences.txt file.
{:title:} will be replaced with the title of your project.
{:name:} will be replaced with your name as specified in your preferences.txt file.
{:visual:} will be replaced with the main image that you specified for your project in the projects database.
{:abstract:} will be replaced with the “elevator pitch” from the projects database.
{:description:} will be replaced with your description of the project.
{:url:} will be replaced with the link to your documentation or your project link.
{:media:} will be replaced with a block of all the media associated with your project.
{:venue:} will be replaced with the venues associated with your project.
{:course:} will be replaced with the courses associated with your project.
For a fleshed out example of how to use these markers, please take a closer look at the provided portfolio templates.

--------------------------------------------------------------------------------------------------------------
Acknowledgments: Ahmad Arshad, Dan O'Sullivan, Kate Watson, Dan Shiffman, The Understanding Networks class of 2011, and of course Tom Igoe 