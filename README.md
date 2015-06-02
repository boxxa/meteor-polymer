#Meteor-Polymer
Updated to Polymer 1.0.0

The version [ecwyne:polymer](http://github.com/ecwyne/meteor-polymer) hasn't been updated so forked it and am keeping the version updated as Polymer updates theirs so I would suggest rolling your own bower and package version for anything in production as this will stay current with Polymer. I am keeping this package version consistent with polymer. See below to install Polymer versions specific to your needs.

This adds [Polymer](http://polymer-project.org) to [Meteor](http://meteor.com)! Make sure you create your public, client, and server folders or code pushes and reloads will be SLOOWWWWWWW.

##How to Install

```bash
meteor add boxxa:polymer
```

This package version will remain consistent with Polymer so if you want to install this release in the future, run:
```bash
meteor add boxxa:polymer@=0.5.5 // previous version, recent is 1.0.0 by default
```
###Add elements
To add meteor elements, run the command below.
```bash
meteor add boxxa:polymer-elements
```

This will add the [boxxa:polymer-elements](http://github.com/boxxa/meteor-polymer-elements) package.
