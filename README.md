1. The requirements:
	"Use the Hacker News API to generate a moderrn, web based solution using C#, .NET Core, and Angular
	that displays the title and author of the newest stories on Hacker News. The title should provide a link to the acutal news article.
	Not all articles have a link so be sure to handle that case."

2. Secondary requirements: create, do not clone; cloned solution must compile, include automated tests; must use Angular.

3. I am not familiar with Angular or TypeScript, and currently I work 56-hour weeks, so I have modified my usual approach, as follows:
		Document Approach and design
		Peer review -- did not do this
		Develop incrementally
			with Unit Tests (did not use Unit Tests; instead developed incrementally. Developed the API in Core in version 1, then added Razor in version 2, and this is version 4. )
			with Peer code reviews -- did not do this
		Develop or document Integeration tests -- did not do this; instead I developed incrementally; and the earlier versions can be easily converted to unit and integeration tests.
		Quality Assurance -- did not do this
		Unified Assurance Testing (including regression testing) -- did not do this

4. I avoid the use of comments, because comments are usually not updated as the code base grows and changes, and so they become just clutter. Instead, I use design documents, and I try to keep code very readable,
	using small methods, meaningful identifier names, and conventional design approaches.

5. To be transaparent and to show my incremental development approach, I have kept the "Counter", "Fetch Data" and "Students" functionality.
	I did not develop that functionality. I picked it up from samples and an Angualar tutorial.
	It serves well as tests.