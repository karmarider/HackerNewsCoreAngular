Link to solution: https://github.com/karmarider/HackerNewsCoreAngular



Link to previous incremental versions:
	https://github.com/karmarider/HackerNewsMVC
	https://github.com/karmarider/HackerNewsAPI





1. The requirements:
	"Use the Hacker News API to generate a moderrn, web based solution using C#, .NET Core, and Angular
	that displays the title and author of the newest stories on Hacker News. The title should provide a link to the acutal news article.
	Not all articles have a link so be sure to handle that case."

2. Secondary requirements: create, do not clone; cloned solution must compile, include automated tests; must use Angular.

3. I am not familiar with Angular or TypeScript, and currently I work 56-hour weeks, so I have modified my usual approach, as follows:
		1. Document Approach and design
		2. Peer review -- did not do this
		3. Develop incrementally
			a. with Unit Tests (did not use Unit Tests; instead developed incrementally. Developed the API in Core in version 1, then added Razor in version 2, and this is version 4. )
			b. with Peer code reviews -- did not do this
		4. Develop or document Integration tests -- did not do this; instead I developed incrementally; and the earlier versions can be easily converted to Unit and Integration tests.
		5. Quality Assurance -- did not do this
		6. Unified Assurance Testing (including integration and regression testing) -- did not do this

4. I avoid the use of comments, because comments are usually not updated as the code base grows and changes, and so they often become misleading clutter. Instead, I use design documents, and I try to keep code very readable, using small methods, meaningful identifier names, and conventional design paradigms, and limit the use of abstraction and encapsulation.

5. To be transaparent and to show my incremental development approach, I have kept the "Counter", "Fetch Data" and "Students" functionality.
	I did not develop that functionality. I picked it up from samples and an Angualar tutorial.
	It serves well as tests.
	I did develop the "Latest Hacker News Stories" and corresponding Web API that it calls.

6. I abandoned Version 3 approach, which was to develop using Angular CLI and Visual Code. I would have preferred that approach, but I ran into an Angular configuration problem, and usually I would have persisted, but in this case I decided on a more time-effective approach.

7. Branches:
	a. master - working code
	b. Tests - added controller unit test
	c. UITests - adding karma/jasmine tests; latest-stories.component.spec.ts is not yet working
