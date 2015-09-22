# CodingTest
For: Peapod Propulsion Labs
By: Zack Jordan
On: 2015-09-21

## What is this?
This is my submission to the coding test presented in this repository in Design/CodingTest.pdf.

## Why did you...?
I treated this as an audition, not an assignment. Therefore, instead of throwing together the easiest or quickest thing possible, I focused on presenting a solid workflow and build process to accompany a logical architecture. Of note:

1. This example uses JS libraries Angular and jQuery, and FontAwesome for icons. It does not use any SASS/CSS libraries.
2. Although the interface uses Angular, all business logic was kept outside the framework (in core.js). The goal was to allow any framework (Backbone, etc.) to be easily injected.
3. Whipping up a good way to bring the model in from a server seemed outside the scope of a front-end test. Instead, I just brought the model in as a separate JS file and formatted it with filters.
4. There are a few TODOs scattered through the project. This represents what I would do next if I continued this project.

## Design
1. The accompanying Axure document shows a few design variants that I considered before settling on the version I implemented.
2. Core.js contains a setting for allowing or disallowing multiple selection.

## How do I build it?
The git repository contains only source; this project must be built with the accompanying Grunt script. These instructions assume that Node and Ruby are already installed.

1. Bring project down via git.
	git init
	git clone http://github.com/Pixelwelder/pisum-sativum

2. Install dev environment (Node) (assuming your system has Node + NPM installed).
	npm install

3. Install dev libraries (Bower).
	bower install

4. Compile deployment (Grunt). This will create a folder called Deploy. NOTE: This build represents an intermediate dev build. To make the result easier to examine, not all resources are minified and/or concatenated.
	grunt compile

5. Point a server toward the new Deploy folder and you're in business.