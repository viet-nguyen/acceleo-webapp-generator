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

define(['order!libs/jquery/jquery-min', 'order!libs/underscore/underscore-min', 'order!libs/backbone/backbone-min', 'order!libs/backbone/backbone.localStorage'],
function(){
	return {
		Backbone: Backbone.noConflict(), _: _.noConflict(), $: jQuery.noConflict()
	};
});
