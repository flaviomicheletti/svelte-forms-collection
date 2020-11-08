<h3 class="offset-anchor mt-4" id="about">App Overview</h3>
<div>
This app was designed to:
	<ul>
		<li>demonstrate one method of tracking the state of an HTML form within Svelte (ie. what our form field values are at any given time)</li>
		<li>build a dynamic HTML form, based on a JSON configuration</li>
		<li>integrate form validation using an existing plugin</li>
	</ul>
<p>The main goal in creating this app was to have the 'instructions' for building an HTML form  reside within a JSON 'string' (not javascript object). The app javascript would do the work. This allows for a more dynamic app where instructions are not baked into the source code. We could for example save the JSON to a back-end database, then pull the JSON into the app using an API call to our data server. The validate.js plugin was chosen for form validation because of the JSON approach to validation configuration.
	</p>
<p>
	Form state tracking in this app uses the Svelte 'store' (computed properties) to save our form element configuration object (storeFE). This works nicely with our JSON instructions, which are loaded and then parsed into a javascript object and saved to storeFE. The storeFE object stores both our form field configurations AND field values (as we update the form). Since the storeFE object can be accessed within all of our Svelte components, it is easy for any of the components to read the current form state. The other great thing is that we can simply add additional properties within our JSON config and they will become available to our form components, without the need for setting up complex bindings.
	</p>
	<p>
	A JSON string-formatted configuration is used as opposed to a purely javascipt object so that we can pull our form configuration from a back-end database and dynamically build our form (in this example we are simply hard-coding the JSON into the app, but for production you might want to pull from a server-side API).
	</p>
	<p>
	The form validation uses validate.js since it isn't bound to a framework and it uses JSON configuration. The simplicity of this plugin and open format made for a painless learning curve.
	</p>
	<h4>Understanding the code</h4>
	<p>
	There are several console.log() statements scattered throughout the app to show the current form state. Refer to the REPL console (bottom right, NOT your browser developer console) as you make changes to the form values.
	</p>
	<h4>Playing with this code</h4>
	<p>
	I suggest logging into this Svelte REPL (ie. online Svelte playground), forking this or other REPL sample apps, and see what you can do. This will save you from the need to setup Node.js and NPM on your computer in order to test/develop simple Svelte apps.
	</p>
</div>
Form validation courtesy of <a href="https://validatejs.org/" target="_blank">https://validatejs.org/</a><br/>
CSS styling courtesy of <a href="https://getbootstrap.com/" target="_blank">https://getbootstrap.com/</a>