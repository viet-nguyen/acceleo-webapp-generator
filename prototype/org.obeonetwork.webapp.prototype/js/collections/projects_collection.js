/********************************************************************************
** Copyright (c) 2012 Obeo.
** All rights reserved. This program and the accompanying materials
** are made available under the terms of the Eclipse Public License v1.0
** which accompanies this distribution, and is available at
** http://www.eclipse.org/legal/epl-v10.html
**
** Contributors:
**    Stephane Begaudeau (Obeo) - initial API and implementation
*********************************************************************************/

define(['jQuery','Underscore','Backbone', '../models/project'], function($, _, Backbone, Project){
	var ProjectsCollection = Backbone.Collection.extend({
		model: Project
	});
	
	var projectsCollection = new ProjectsCollection
	var firstProject = Project;
	firstProject.setName('First Project');
	projectsCollection.add(firstProject);
	
	return projectsCollection;
});