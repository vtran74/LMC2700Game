//Initializes the game
function initial_server()
{
	$.getJSON("data/characters.json", function(jsonCharacters) {
		characters = jsonCharacters;
		initialCharacters();

		$.getJSON("data/places.json", function(jsonPlaces) {

			places = jsonPlaces;
			$.getJSON("data/story.json", function(jsonStory) {

				story = jsonStory;
				parseStory();
				onInit();
			});
		});
	});
}

//Initialize the character data after the data has been loaded
function initialCharacters()
{
}

//Called when the game is fully initialized
function onInitial()
{
	//Starts the game on the first scene
	displayScene("start");
}

initial_server();