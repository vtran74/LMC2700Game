function executePlaceAction(action)
{
  displayPlace(action.options[0].toLowerCase());
}

function executeAction(action)
{
  if(action.type.toLowerCase()){
    executePlaceAction(action);
  }
}